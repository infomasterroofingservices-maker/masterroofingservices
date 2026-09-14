import { Resend } from "resend";
import {
  ADMIN_QUOTE_SUBJECT,
  renderAdminQuoteEmail,
} from "@/lib/emails/admin-quote";
import {
  CUSTOMER_CONFIRMATION_SUBJECT,
  renderCustomerConfirmationEmail,
} from "@/lib/emails/customer-confirmation";
import { formatFromAddress } from "@/lib/emails/layout";
import { parseQuoteBody, validateQuote } from "@/lib/quote";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitHits = new Map<string, number[]>();

const genericError = {
  success: false as const,
  message: "Unable to submit your quote request. Please try again.",
};

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      {
        success: false,
        message: "Too many quote requests. Please try again in a few minutes.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        success: false,
        message: "Please check the form and try again.",
      },
      { status: 400 },
    );
  }

  const parsed = parseQuoteBody(body);
  const result = validateQuote(parsed);
  if (!result.ok) {
    return Response.json(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        errors: result.errors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const fromEmail = process.env.FROM_EMAIL?.trim();

  if (!apiKey || !adminEmail || !fromEmail) {
    console.error("Quote API is missing required email environment variables.");
    return Response.json(genericError, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const from = formatFromAddress(fromEmail);

  try {
    const admin = await resend.emails.send({
      from,
      to: adminEmail,
      replyTo: result.data.email,
      subject: ADMIN_QUOTE_SUBJECT,
      html: renderAdminQuoteEmail(result.data),
    });

    if (admin.error) {
      console.error("Admin quote email failed.", admin.error);
      return Response.json(genericError, { status: 500 });
    }
  } catch (error) {
    console.error("Admin quote email failed.", error);
    return Response.json(genericError, { status: 500 });
  }

  try {
    const confirmation = await resend.emails.send({
      from,
      to: result.data.email,
      replyTo: adminEmail,
      subject: CUSTOMER_CONFIRMATION_SUBJECT,
      html: renderCustomerConfirmationEmail(result.data),
    });

    if (confirmation.error) {
      console.error("Customer confirmation email failed.", confirmation.error);
    }
  } catch (error) {
    console.error("Customer confirmation email failed.", error);
  }

  return Response.json({
    success: true,
    message: "Quote request submitted successfully.",
  });
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (rateLimitHits.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitHits.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitHits.set(ip, recent);
  return false;
}
