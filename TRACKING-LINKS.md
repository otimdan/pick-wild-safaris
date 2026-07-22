# Tracking links — paste-ready

Every link below is the same website, tagged so PostHog can tell **which profile
the click came from**. Paste these exactly; the `?utm_...` part is what does the
counting. Nothing needs to be deployed — tagging happens in each profile's admin.

Rules:

- Always use `https://wildsafarisuganda.com` (apex, **no `www`**) — that's the
  canonical, and going direct avoids a redirect hop.
- One `utm_source` per profile. Never reuse a source across two platforms.
- `utm_campaign` separates multiple slots on the *same* profile (bio vs story).
- If a link points at a deeper page, keep the `?utm_...` on the end:
  `https://wildsafarisuganda.com/gorilla-trekking?utm_source=instagram&utm_medium=social&utm_campaign=bio`

  To see the counts: PostHog → new Insight → Trends → $pageview → break down by utm_source. One line per profile. Add a $pathname breakdown to see which page each profile sends people to.

## Google Business Profile

GBP has several link slots. Tagging them separately is the main win — it shows
whether people click through to browse or to book.

| Slot | URL to paste |
|---|---|
| Website button | `https://wildsafarisuganda.com?utm_source=gbp&utm_medium=referral&utm_campaign=profile` |
| Appointment / booking link | `https://wildsafarisuganda.com/contact?utm_source=gbp&utm_medium=referral&utm_campaign=booking` |
| Google Posts | `https://wildsafarisuganda.com?utm_source=gbp&utm_medium=referral&utm_campaign=post` |

Use `utm_source=gbp`, **not** `utm_source=google`. Tagging it `google` collides
with ordinary organic search traffic in GA4 and the two become impossible to
separate.

## Social profiles

| Profile | URL to paste |
|---|---|
| Instagram bio | `https://wildsafarisuganda.com?utm_source=instagram&utm_medium=social&utm_campaign=bio` |
| Facebook page "Website" field | `https://wildsafarisuganda.com?utm_source=facebook&utm_medium=social&utm_campaign=page` |
| TikTok bio | `https://wildsafarisuganda.com?utm_source=tiktok&utm_medium=social&utm_campaign=bio` |
| YouTube channel link | `https://wildsafarisuganda.com?utm_source=youtube&utm_medium=social&utm_campaign=channel` |
| WhatsApp Business profile | `https://wildsafarisuganda.com?utm_source=whatsapp&utm_medium=social&utm_campaign=profile` |
| Email signature | `https://wildsafarisuganda.com?utm_source=email&utm_medium=email&utm_campaign=signature` |

## Reading the numbers in PostHog

No setup needed — PostHog captures `utm_*` automatically on the landing
pageview, and stores first-touch as `$initial_utm_source` on the person so the
attribution survives later navigation.

**Clicks per profile:** new Insight → Trends → event `$pageview` → break down by
event property `utm_source`. Each profile appears as its own line.

**Which page they landed on:** same insight, break down by `$pathname` and
filter `utm_source = gbp` (or whichever profile).

The built-in **Web Analytics** tab shows the same source breakdown without
building anything, if you'd rather just glance at it.

## Caveats

- Tags only register on the **first** pageview of a visit. That's expected —
  PostHog persists it as `$initial_utm_source`.
- PostHog only tracks in production (`app/providers.tsx` returns early in dev),
  so testing these locally will show nothing.
- Ad blockers are already handled: events go through the managed reverse proxy
  at `event.wildsafarisuganda.com`.
- The homepage has a self-referencing canonical (`app/page.tsx`), so the
  `?utm_source=` variants won't be indexed as duplicate pages.
