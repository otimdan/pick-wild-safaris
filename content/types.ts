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
};
