// app/api/newsletter/route.ts
import { sendEmail, escapeHtml } from "@/lib/email";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

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
