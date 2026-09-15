"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/button";
import { services } from "@/lib/site";
import {
  validateQuote,
  type QuoteField,
  type QuoteFieldErrors,
  type QuoteInput,
} from "@/lib/quote";

const initial: QuoteInput = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const fieldClass =
  "w-full border border-white/25 bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-lemon";

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<QuoteFieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  function updateField(field: QuoteField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateQuote(values);
    if (!result.ok) {
      setErrors(result.errors);
      setFormError("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    setFormError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const payload = (await response.json().catch(() => null)) as
        | {
            success?: boolean;
            message?: string;
            errors?: QuoteFieldErrors;
          }
        | null;

      if (!response.ok || !payload?.success) {
        if (payload?.errors) setErrors(payload.errors);
        setFormError(
          payload?.message ?? "Unable to submit your quote request. Please try again.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setFormError("Unable to submit your quote request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-8 border border-white/15 bg-white/5 p-6">
        <p className="font-display text-xl font-extrabold tracking-wide text-lemon">
          Request received
        </p>
        <p className="mt-3 text-base leading-relaxed text-white/80">
          Thank you. Your quote request has been received. A team member will
          follow up using the details you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
      <Field
        id="quote-name"
        label="Full Name"
        value={values.name}
        error={errors.name}
        onChange={(value) => updateField("name", value)}
        autoComplete="name"
        required
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="quote-phone"
          label="Phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(value) => updateField("phone", value)}
          autoComplete="tel"
          required
        />
        <Field
          id="quote-email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label htmlFor="quote-service" className="mb-2 block text-sm font-medium text-white">
          Service Needed
        </label>
        <select
          id="quote-service"
          name="service"
          value={values.service}
          required
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "quote-service-error" : undefined}
          onChange={(event) => updateField("service", event.target.value)}
          className="w-full border border-white/25 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-lemon scheme-dark"
          style={{ colorScheme: "dark" }}
        >
          <option value="" className="bg-[#111111] text-white">
            Select a service
          </option>
          {services.map((service) => (
            <option
              key={service.title}
              value={service.title}
              className="bg-[#111111] text-white"
            >
              {service.title}
            </option>
          ))}
          <option value="Other" className="bg-[#111111] text-white">
            Other / Not sure
          </option>
        </select>
        {errors.service ? (
          <p id="quote-service-error" className="mt-2 text-sm text-danger" role="alert">
            {errors.service}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="quote-message" className="mb-2 block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={5}
          required
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "quote-message-error" : undefined}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${fieldClass} resize-y`}
        />
        {errors.message ? (
          <p id="quote-message-error" className="mt-2 text-sm text-danger" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      {formError ? (
        <p className="text-sm text-danger" role="alert">
          {formError}
        </p>
      ) : null}
      <Button type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Request a Free Quote"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={id}
        name={id.replace(/^quote-/, "")}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClass}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
