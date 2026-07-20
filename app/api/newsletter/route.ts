// app/api/newsletter/route.ts
import { sendEmail, escapeHtml } from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60 * 60;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body.email === "string" ? body.email.trim() : "";
  const honeypot =
    typeof body.company === "string" ? body.company.trim() : "";

  if (honeypot) {
    return Response.json({ ok: true });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const limit = await rateLimit({
    bucket: "newsletter",
    identifier: getClientIp(request),
    limit: RATE_LIMIT,
    windowSeconds: RATE_WINDOW_SECONDS,
  });
  if (!limit.allowed) {
    return Response.json(
      { ok: false, error: "Too many sign-ups from here. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  const result = await sendEmail({
    subject: "New newsletter sign-up",
    html: `
      <div style="font-family: Arial, sans-serif; color:#1a2e0e;">
        <h2 style="color:#c8922a; margin:0 0 12px;">New Newsletter Sign-up</h2>
        <p>A visitor requested the free safari guide / newsletter:</p>
        <p style="font-size:16px;"><strong>${escapeHtml(email)}</strong></p>
      </div>`,
    replyTo: email,
  });

  if (!result.ok) {
    console.error("Newsletter send failed:", result.error);
    return Response.json(
      { ok: false, error: "Sorry — something went wrong. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
