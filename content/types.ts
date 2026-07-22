// One question/answer pair. Posts export an array of these as `faq`, which
// drives both the rendered FAQ section (<PostFaq>) and the FAQPage JSON-LD.
// Answers should be self-contained prose — an answer engine may quote it
// without any of the surrounding article for context.
export type FaqItem = {
  q: string;
  a: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  coverFallback: string; // CSS gradient for when image fails
  date: string;         // "2026-06-15"
  readTime: string;     // "8 min read"
  // Optional SEO overrides. When set, these drive the <title> / meta
  // description on /blog/[slug] instead of `title` / `excerpt`.
  // `metaTitle` should exclude the brand — the root layout's title
  // template appends " | Pick Wild Safaris". Keep it ≲45 chars and the
  // description ≲155 chars so neither truncates in search results.
  metaTitle?: string;
  metaDescription?: string;
  // Grounds the post against a known real-world entity via `about` in the
  // BlogPosting schema. Answer engines resolve entities rather than guessing
  // the subject from prose, so naming it explicitly makes the post a stronger
  // candidate to be cited for that topic.
  topic?: {
    name: string;
    wikipedia: string;
  };
};
