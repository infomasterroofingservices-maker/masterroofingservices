"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/button";
import {
  quoteServiceOptions,
  validateQuote,
  type QuoteField,
  type QuoteFieldErrors,
  type QuoteInput,
} from "@/lib/quote";

const initial: QuoteInput = {
  name: "",
  phone: "",
  email: "",
  service: [],
  message: "",
};

const fieldClass =
  "w-full min-h-12 border border-white/25 bg-transparent px-3.5 py-3 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-lemon sm:min-h-11 sm:px-4 sm:text-sm";

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<QuoteFieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  function updateField(field: Exclude<QuoteField, "service">, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function toggleService(value: string) {
    setValues((current) => ({
      ...current,
      service: current.service.includes(value)
        ? current.service.filter((item) => item !== value)
        : [...current.service, value],
    }));
    if (errors.service) {
      setErrors((current) => ({ ...current, service: undefined }));
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
    <form onSubmit={onSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5" noValidate>
      <Field
        id="quote-name"
        label="Full Name"
        value={values.name}
        error={errors.name}
        onChange={(value) => updateField("name", value)}
        autoComplete="name"
        required
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
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
      <fieldset
        id="quote-service"
        aria-invalid={Boolean(errors.service)}
        aria-describedby={
          errors.service
            ? "quote-service-hint quote-service-error"
            : "quote-service-hint"
        }
      >
        <legend className="mb-1 text-sm font-medium text-white">
          Services Needed
        </legend>
        <p id="quote-service-hint" className="mb-3 text-xs text-white/55">
          Select all that apply
          {values.service.length > 0
            ? ` · ${values.service.length} selected`
            : ""}
        </p>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          {quoteServiceOptions.map((option) => {
            const checked = values.service.includes(option.value);
            const optionId = `quote-service-${option.value
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`;

            return (
              <label
                key={option.value}
                htmlFor={optionId}
                className={`flex min-h-11 cursor-pointer items-center gap-2 border px-2.5 py-2 text-[12px] leading-snug transition-colors touch-manipulation sm:gap-3 sm:px-3 sm:py-2.5 sm:text-sm ${
                  checked
                    ? "border-lemon bg-lemon/10 text-white"
                    : "border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                }`}
              >
                <input
                  id={optionId}
                  type="checkbox"
                  name="service"
                  value={option.value}
                  checked={checked}
                  onChange={() => toggleService(option.value)}
                  className="h-4 w-4 shrink-0 cursor-pointer accent-[#F7EB4F]"
                />
                <span>{option.label}</span>
              </label>
            );
          })}
        </div>
        {errors.service ? (
          <p id="quote-service-error" className="mt-2 text-sm text-danger" role="alert">
            {errors.service}
          </p>
        ) : null}
      </fieldset>
      <div>
        <label htmlFor="quote-message" className="mb-1.5 block text-sm font-medium text-white sm:mb-2">
          Message
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={4}
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
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
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
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-white sm:mb-2">
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
