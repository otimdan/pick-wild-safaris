// ─────────────────────────────────────────────────────────────
//  EMAIL — sends mail through Resend's REST API (no SDK needed).
//  Configured via environment variables:
//    RESEND_API_KEY   your Resend API key (required to send)
//    CONTACT_EMAIL    where enquiries are delivered (the "to")
//    RESEND_FROM      the verified "from" address (must be a domain
//                     verified in your Resend account)
//  The "to" address (info@wildsafarisuganda.com) is delivered to your
//  inbox by Cloudflare Email Routing → Gmail — Resend only sends.
// ─────────────────────────────────────────────────────────────

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const DEFAULT_FROM = "Pick Wild Safaris <noreply@wildsafarisuganda.com>";
const DEFAULT_TO = "info@wildsafarisuganda.com";

export type SendResult = { ok: true; id: string } | { ok: false; error: string };

// Escape user-supplied text before dropping it into an HTML email body.
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEmail(opts: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "RESEND_API_KEY is not set" };
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || DEFAULT_FROM,
        to: [process.env.CONTACT_EMAIL || DEFAULT_TO],
        subject: opts.subject,
        html: opts.html,
        // Resend's REST API uses snake_case for reply_to.
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return { ok: false, error: `Resend responded ${res.status}: ${detail}` };
    }

    const data = (await res.json()) as { id?: string };
    return { ok: true, id: data.id ?? "" };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown network error",
    };
  }
}
