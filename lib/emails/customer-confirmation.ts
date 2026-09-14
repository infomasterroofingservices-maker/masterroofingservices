import { firstNameFrom, type QuoteInput } from "@/lib/quote";
import {
  escapeHtml,
  escapeMultilineHtml,
  sectionLabel,
  wrapEmail,
} from "@/lib/emails/layout";

export const CUSTOMER_CONFIRMATION_SUBJECT =
  "We Received Your Quote Request — Master Roofing Services";

export function renderCustomerConfirmationEmail(quote: QuoteInput) {
  const firstName = escapeHtml(firstNameFrom(quote.name));
  const service = escapeHtml(quote.service === "Other" ? "Other / Not sure" : quote.service);
  const message = escapeMultilineHtml(quote.message);

  const body = `
    <p style="margin:0 0 16px;">Hi ${firstName},</p>
    <p style="margin:0 0 16px;">
      Thank you for contacting Master Roofing Services.
    </p>
    <p style="margin:0 0 8px;">
      We've received your quote request and our team will review the details and get back to you as soon as possible.
    </p>
    ${sectionLabel("Request Details")}
    <p style="margin:0 0 8px;">
      <strong style="color:#111111;">Service:</strong><br />
      ${service}
    </p>
    <p style="margin:0 0 24px;">
      <strong style="color:#111111;">Message:</strong><br />
      ${message}
    </p>
    <p style="margin:0 0 24px;">
      If you need to provide additional information, simply reply to this email.
    </p>
    <p style="margin:0;">
      Regards,<br />
      <strong style="color:#111111;">Master Roofing Services</strong>
    </p>
  `;

  return wrapEmail({
    title: CUSTOMER_CONFIRMATION_SUBJECT,
    preview: "We've received your quote request and will be in touch soon.",
    heading: "Thank You For Contacting Us",
    body,
  });
}
