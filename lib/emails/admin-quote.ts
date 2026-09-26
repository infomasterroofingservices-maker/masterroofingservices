import { formatQuoteServices, type QuoteInput } from "@/lib/quote";
import {
  detailRow,
  escapeHtml,
  escapeMultilineHtml,
  sectionLabel,
  wrapEmail,
} from "@/lib/emails/layout";

export const ADMIN_QUOTE_SUBJECT = "New Quote Request — Master Roofing Services";

export function renderAdminQuoteEmail(quote: QuoteInput) {
  const name = escapeHtml(quote.name);
  const phone = escapeHtml(quote.phone);
  const email = escapeHtml(quote.email);
  const service = escapeHtml(formatQuoteServices(quote.service));
  const message = escapeMultilineHtml(quote.message);
  const mailto = `mailto:${encodeURIComponent(quote.email)}`;

  const body = `
    <p style="margin:0 0 24px;">
      A new customer has submitted a quote request through the website.
    </p>
    ${sectionLabel("Customer Details")}
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      ${detailRow("Name", name)}
      ${detailRow("Phone", phone)}
      ${detailRow("Email", email)}
      ${detailRow("Service Needed", service)}
    </table>
    ${sectionLabel("Message")}
    <p style="margin:0 0 28px;overflow-wrap:anywhere;word-break:break-word;">${message}</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;">
      <tr>
        <td align="center" style="background-color:#F7EB4F;">
          <a href="${escapeHtml(mailto)}" style="display:block;padding:16px 22px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;text-align:center;color:#111111;">
            Reply to Customer
          </a>
        </td>
      </tr>
    </table>
    <p style="margin:28px 0 0;font-size:13px;color:#6b6b67;">
      Received via:<br />
      Master Roofing Services Website
    </p>
  `;

  return wrapEmail({
    title: ADMIN_QUOTE_SUBJECT,
    preview: `New quote request from ${quote.name} — ${formatQuoteServices(quote.service)}`,
    heading: "New Quote Request",
    body,
  });
}
