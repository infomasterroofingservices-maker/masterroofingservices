import { services } from "@/lib/site";

export type QuoteInput = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type QuoteField = keyof QuoteInput;
export type QuoteFieldErrors = Partial<Record<QuoteField, string>>;

export const quoteServiceValues = [
  ...services.map((service) => service.title),
  "Other",
] as const;

const MAX_LENGTHS: Record<QuoteField, number> = {
  name: 120,
  phone: 40,
  email: 254,
  service: 80,
  message: 4000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED = /^[+\d\s().-]+$/;

export function parseQuoteBody(body: unknown): QuoteInput {
  const record = body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  return {
    name: readString(record.name),
    phone: readString(record.phone),
    email: readString(record.email),
    service: readString(record.service),
    message: readString(record.message),
  };
}

export function validateQuote(
  input: QuoteInput,
): { ok: true; data: QuoteInput } | { ok: false; errors: QuoteFieldErrors } {
  const data: QuoteInput = {
    name: input.name.trim(),
    phone: input.phone.trim(),
    email: input.email.trim(),
    service: input.service.trim(),
    message: input.message.trim(),
  };
  const errors: QuoteFieldErrors = {};

  if (!data.name) {
    errors.name = "Please enter your full name.";
  } else if (data.name.length < 2) {
    errors.name = "Please enter at least 2 characters.";
  } else if (data.name.length > MAX_LENGTHS.name) {
    errors.name = `Please keep this under ${MAX_LENGTHS.name} characters.`;
  }

  if (!data.phone) {
    errors.phone = "Please enter a phone number.";
  } else if (!PHONE_ALLOWED.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  } else {
    const digits = data.phone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) {
      errors.phone = "Please enter a valid phone number.";
    } else if (data.phone.length > MAX_LENGTHS.phone) {
      errors.phone = `Please keep this under ${MAX_LENGTHS.phone} characters.`;
    }
  }

  if (!data.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(data.email) || data.email.length > MAX_LENGTHS.email) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.service) {
    errors.service = "Please select a service.";
  } else if (!quoteServiceValues.includes(data.service as (typeof quoteServiceValues)[number])) {
    errors.service = "Please select a valid service.";
  }

  if (!data.message) {
    errors.message = "Please enter a short message about your project.";
  } else if (data.message.length < 10) {
    errors.message = "Please enter at least 10 characters.";
  } else if (data.message.length > MAX_LENGTHS.message) {
    errors.message = `Please keep this under ${MAX_LENGTHS.message} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}

export function firstNameFrom(name: string) {
  return name.trim().split(/\s+/)[0] || "there";
}

function readString(value: unknown) {
  return typeof value === "string" ? value : "";
}
