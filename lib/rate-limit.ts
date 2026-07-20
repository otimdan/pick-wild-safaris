// ─────────────────────────────────────────────────────────────
//  RATE LIMITING — fixed-window counter backed by Upstash Redis,
//  called over its REST API with fetch (same no-SDK approach as
//  lib/email.ts). Configured via environment variables:
//    UPSTASH_REDIS_REST_URL     your Upstash database REST URL
//    UPSTASH_REDIS_REST_TOKEN   its REST token
//
//  Serverless functions don't share memory between instances, so an
//  in-process counter would not actually limit anything on Vercel —
//  hence the shared store.
//
//  Fails OPEN in every failure mode (unconfigured, unreachable, bad
//  response): a Redis outage must never take the contact form down.
// ─────────────────────────────────────────────────────────────

export type RateLimitResult =
  | { allowed: true; remaining: number }
  | { allowed: false; retryAfter: number };

/**
 * Best-effort client IP. `NextRequest.ip` was removed in Next 15, so this
 * reads the proxy headers instead — Vercel puts the real client IP first
 * in `x-forwarded-for`.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function rateLimit(opts: {
  bucket: string; // namespace, e.g. "contact"
  identifier: string; // usually the client IP
  limit: number; // max requests allowed per window
  windowSeconds: number;
}): Promise<RateLimitResult> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  // Not configured yet — let requests through rather than blocking
  // genuine enquiries.
  if (!url || !token) return { allowed: true, remaining: opts.limit };

  const key = `ratelimit:${opts.bucket}:${opts.identifier}`;

  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["INCR", key],
        // NX sets the TTL only on the first hit, so the window stays fixed
        // instead of sliding forward with every request.
        ["EXPIRE", key, String(opts.windowSeconds), "NX"],
        ["TTL", key],
      ]),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Rate limit skipped — Upstash responded ${res.status}`);
      return { allowed: true, remaining: opts.limit };
    }

    const data = (await res.json()) as Array<{ result?: unknown }>;
    const count = Number(data[0]?.result ?? 0);
    const ttl = Number(data[2]?.result ?? opts.windowSeconds);

    if (!Number.isFinite(count) || count <= 0) {
      return { allowed: true, remaining: opts.limit };
    }

    if (count > opts.limit) {
      return {
        allowed: false,
        retryAfter: ttl > 0 ? ttl : opts.windowSeconds,
      };
    }

    return { allowed: true, remaining: Math.max(0, opts.limit - count) };
  } catch (err) {
    console.error("Rate limit skipped — Upstash unreachable:", err);
    return { allowed: true, remaining: opts.limit };
  }
}
