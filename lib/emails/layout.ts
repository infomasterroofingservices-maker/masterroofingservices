import { readFileSync } from "node:fs";
import path from "node:path";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function escapeMultilineHtml(value: string) {
  return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br>");
}

const EMAIL_LOGO_CID = "master-logo";

let emailLogoBase64: string | null | undefined;

function readEmailLogo() {
  if (emailLogoBase64 !== undefined) return emailLogoBase64;

  try {
    emailLogoBase64 = readFileSync(
      path.join(process.cwd(), "lib", "emails", "logo.png"),
    ).toString("base64");
  } catch {
    emailLogoBase64 = null;
  }

  return emailLogoBase64;
}

export function getEmailLogoAttachment() {
  const content = readEmailLogo();
  if (!content) return undefined;

  return [
    {
      filename: "logo.png",
      content,
      contentType: "image/png",
      contentId: EMAIL_LOGO_CID,
    },
  ];
}

export function formatFromAddress(fromEmail: string) {
  if (fromEmail.includes("<")) return fromEmail;
  return `Master Roofing Services <${fromEmail}>`;
}

type EmailChrome = {
  title: string;
  preview: string;
  heading: string;
  body: string;
};

const brand = {
  dark: "#111111",
  yellow: "#F7EB4F",
  white: "#ffffff",
  muted: "#6b6b67",
  body: "#2a2a2a",
  card: "#f7f6f2",
};

export function wrapEmail({ title, preview, heading, body }: EmailChrome) {
  const logo = readEmailLogo();
  const brandMark = logo
    ? `<img src="cid:${EMAIL_LOGO_CID}" width="160" height="80" alt="Master Roofing Services" style="display:block;border:0;outline:none;text-decoration:none;width:160px;height:80px;" />`
    : `<span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.18em;color:${brand.white};text-transform:uppercase;">Master Roofing Services</span>`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:${brand.card};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
      ${escapeHtml(preview)}
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${brand.card};">
      <tr>
        <td align="center" style="padding:28px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="640" style="width:100%;max-width:640px;background-color:${brand.white};">
            <tr>
              <td style="background-color:${brand.yellow};height:6px;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="background-color:${brand.dark};padding:28px 36px 26px;">
                ${brandMark}
              </td>
            </tr>
            <tr>
              <td style="padding:36px 36px 8px;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:${brand.muted};">
                  Master Roofing Services
                </p>
                <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.25;color:${brand.dark};font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">
                  ${escapeHtml(heading)}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 36px 40px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:${brand.body};">
                ${body}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function detailRow(label: string, value: string) {
  return `<tr>
    <td style="padding:12px 0;border-bottom:1px solid #eceae4;">
      <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${brand.muted};">
        ${escapeHtml(label)}
      </p>
      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:${brand.dark};">
        ${value}
      </p>
    </td>
  </tr>`;
}

export function sectionLabel(label: string) {
  return `<p style="margin:28px 0 12px;padding-bottom:8px;border-bottom:2px solid ${brand.yellow};font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:${brand.dark};font-weight:700;">
    ${escapeHtml(label)}
  </p>`;
}
