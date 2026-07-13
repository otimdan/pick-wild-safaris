// ─────────────────────────────────────────────────────────────
//  SAFARI TYPE DATA MODEL
//  Each "safari style" (Luxury, Family-Friendly, Bird Watching…)
//  is the SAME template — only the data below changes. Fill one
//  of these objects and the page at /safari-types/<slug> renders
//  itself, and a card for it appears in the "Discover More Ways
//  to Explore Africa" carousel on the homepage.
// ─────────────────────────────────────────────────────────────

export type SafariTypeFact = {
  label: string; // "Style", "Pace", "Best For"…
  value: string;
};

export type SafariType = {
  slug: string;
  title: string; // "Luxury Safaris" — used as the page <h1>
  eyebrow: string; // small uppercase label above the hero title
  tagline: string; // italic hero subtitle, one sentence
  cardDesc: string; // one-liner shown on the homepage carousel card
  heroFallback: string; // CSS gradient shown while / if a hero photo is added
  heroImage?: string; // optional photo — leave unset to use the gradient
  excerpt: string; // meta description
  intro: string[]; // 2–3 narrative paragraphs
  highlights: string[]; // "What makes it special" bullet list
  idealFor: string[]; // "Is this you?" bullet list
  facts: SafariTypeFact[]; // 3–4 "at a glance" sidebar facts
  relatedSlugs: string[]; // slugs from content/itineraries that fit this style
};
