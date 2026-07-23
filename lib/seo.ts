// Shared SEO helpers for page metadata.
//
// Two recurring problems this centralises:
//   1. Titles overflowing the ~60-char search-result limit — made worse by a
//      double-brand bug where a page appended " | Pick Wild Safaris" *and* the
//      root layout's title template appended it again.
//   2. Meta descriptions running past the ~160-char limit because they reused
//      long itinerary/excerpt copy verbatim.

export const SITE_URL = "https://wildsafarisuganda.com";
export const BRAND = "Pick Wild Safaris";
const BRAND_SUFFIX = ` | ${BRAND}`;

// Default social-share image for pages that don't have a more specific one.
// openGraph metadata is replaced wholesale (not deep-merged) when a page sets
// its own openGraph, so any page defining openGraph must include this itself
// rather than relying on inheritance from the root layout.
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/hero-gorilla.jpg`,
  width: 1200,
  height: 630,
  alt: "Pick Wild Safaris — private African safaris across Uganda and East Africa",
};

// Build a page title that stays within the ~60-char limit. Appends the brand
// only when it still fits, and returns `{ absolute }` so the root layout's
// title template does NOT append the brand a second time. Use this for
// dynamic titles (itineraries) whose length varies.
export function seoTitle(base: string): { absolute: string } {
  const withBrand = base + BRAND_SUFFIX;
  return { absolute: withBrand.length <= 60 ? withBrand : base };
}

// Trim a description to <= max characters without cutting a word in half.
// Prefers ending on the first sentence when that alone is within budget,
// otherwise cuts on the last word boundary and adds an ellipsis.
export function clampDescription(text: string, max = 160): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;

  const firstSentence = t.match(/^.*?[.!?](?=\s|$)/);
  if (firstSentence && firstSentence[0].length <= max) {
    return firstSentence[0].trim();
  }

  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}
