// app/api/contact/route.ts
import { sendEmail, escapeHtml } from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// A genuine enquirer sends once, maybe twice. This caps how much mail a
// single IP can push through our Resend account in an hour.
const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60 * 60;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const travellers = str(body.travellers);
  const dates = str(body.dates);
  const trip = str(body.trip);
  const message = str(body.message);
  const honeypot = str(body.company); // hidden field — bots fill it, humans don't

  // Silently accept bots so they don't retry, but send nothing.
  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // Checked after validation so a mistyped email doesn't cost the visitor
  // one of their attempts — what we're protecting is outbound mail.
  const limit = await rateLimit({
    bucket: "contact",
    identifier: getClientIp(request),
    limit: RATE_LIMIT,
    windowSeconds: RATE_WINDOW_SECONDS,
  });
  if (!limit.allowed) {
    return Response.json(
      {
        ok: false,
        error:
          "You've already sent several enquiries. Please try again a little later, or email us directly at info@wildsafarisuganda.com.",
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Travellers", travellers],
    ["Preferred dates", dates],
    ["Safari of interest", trip],
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1a2e0e; max-width: 640px;">
      <h2 style="color:#c8922a; margin:0 0 16px;">New Safari Enquiry</h2>
      <table style="border-collapse:collapse; width:100%; margin-bottom:20px;">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px; background:#f0ece4; font-weight:bold; width:170px; border:1px solid #e0dccc;">${label}</td>
            <td style="padding:8px 12px; border:1px solid #e0dccc;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:0 0 8px;">Message</h3>
      <p style="white-space:pre-wrap; line-height:1.6;">${escapeHtml(message)}</p>
      <hr style="border:none; border-top:1px solid #e0dccc; margin:24px 0;" />
      <p style="font-size:12px; color:#888;">Sent from the wildsafarisuganda.com contact form. Reply directly to respond to ${escapeHtml(name)}.</p>
    </div>`;

  const result = await sendEmail({
    subject: `New safari enquiry — ${name}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error("Contact form send failed:", result.error);
    return Response.json(
      {
        ok: false,
        error:
          "Sorry — something went wrong sending your message. Please email us directly at info@wildsafarisuganda.com.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
