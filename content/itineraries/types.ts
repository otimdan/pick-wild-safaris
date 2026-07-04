// ─────────────────────────────────────────────────────────────
//  ITINERARY DATA MODEL
//  Every safari itinerary page is the SAME template — only the
//  data below changes. Fill one of these objects per safari and
//  the page at /safaris/<slug> renders itself.
// ─────────────────────────────────────────────────────────────

// One "At a glance" fact shown in the quick-facts bar.
export type ItineraryFact = {
  label: string; // "Duration", "Countries", "Best Time", "Airport"…
  value: string; // "9 Days / 8 Nights", "Kenya & Tanzania"…
};

// A single day (or a small range of days) in the journey.
export type ItineraryDay = {
  label: string; // "Day 1", "Days 4–5"
  title: string; // "Arrive in Nairobi"
  location?: string; // "Masai Mara, Kenya"
  nights?: string; // "2 nights" — shown as a small tag
  // One or more paragraphs describing the day. Keep it prose.
  body: string[];
  accommodation?: string; // lodge / camp name for the night
  meals?: string; // "Breakfast, Lunch, Dinner" — free text
  image?: string; // optional photo for the day
  imageAlt?: string;
};

// An accommodation used across the trip (optional standalone list).
export type ItineraryStay = {
  name: string;
  location: string;
  nights?: string;
  image?: string;
};

// Metadata used for cards, listings, SEO — the lightweight subset.
export type ItineraryMeta = {
  slug: string;
  title: string;
  subtitle?: string; // one-line strapline under the hero title
  excerpt: string; // used for cards + meta description
  country: string; // "Kenya & Tanzania"
  duration: string; // "9 Days"
  priceFrom?: string; // "From $4,950 per person"
  heroImage: string;
  heroFallback: string; // CSS gradient shown while / if the image fails
  badge?: string; // optional ribbon, e.g. "Fan Favorite"
  date?: string; // ISO date for sitemap lastModified (optional)
};

// The full itinerary — everything the template needs to render a page.
export type Itinerary = ItineraryMeta & {
  overview: string[]; // intro narrative paragraphs
  facts: ItineraryFact[]; // "At a glance" bar
  highlights: string[]; // bullet list of trip highlights
  days: ItineraryDay[]; // day-by-day timeline
  included: string[]; // what's included
  excluded: string[]; // what's not included
  stays?: ItineraryStay[]; // optional accommodation showcase
  pricingNote?: string; // optional line under the price / enquire CTA
};
