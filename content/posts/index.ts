// ─────────────────────────────────────────────────────────────
//  POST REGISTRY
//  When you add a new post:
//  1. Create content/posts/your-slug.tsx  (copy an existing one)
//  2. Add its metadata to this array
//  3. That's it — it appears on /blog and /blog/your-slug
// ─────────────────────────────────────────────────────────────

import type { PostMeta } from "../types";

export const POSTS_PER_PAGE = 9;

export const allPosts: PostMeta[] = [
  {
    slug: "is-the-shoebill-stork-a-dinosaur",
    title: "Is the Shoebill Stork a Dinosaur? Meet Uganda's Living-Dinosaur Bird",
    excerpt:
      "The shoebill looks like it walked out of the Cretaceous — a five-foot swamp giant with a clog-shaped bill and an unblinking stare. Is it actually a dinosaur? Here's the honest answer, plus where to see one in Uganda.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a4a4a, #12201c)",
    date: "2026-07-12",
    readTime: "11 min read",
  },
  {
    slug: "gorilla-trekking-tips",
    title: "Gorilla Trekking Tips: Everything You Need to Know Before You Go",
    excerpt:
      "Mountain gorillas are one of Africa's most awe-inspiring encounters. Here's how to prepare physically, mentally, and logistically for the trek of a lifetime.",
    category: "Uganda",
    coverImage:
      "",
    coverFallback: "linear-gradient(160deg, #3a6a2a, #1a3a0e)",
    date: "2026-06-10",
    readTime: "13 min read",
  },
  {
    slug: "best-time-to-visit-uganda",
    title: "Best Time to Visit Uganda for a Safari",
    excerpt:
      "Uganda's wildlife shines year-round, but timing your trip around the dry seasons makes a real difference. A month-by-month breakdown.",
    category: "Uganda",
    coverImage:
      "",
    coverFallback: "linear-gradient(160deg, #5a7a3a, #2a4010)",
    date: "2026-05-22",
    readTime: "6 min read",
  },
  {
    slug: "what-to-pack-for-a-safari",
    title: "What to Pack for a Safari: The Complete Packing List",
    excerpt:
      "Overpacking is the number one rookie mistake. This list covers everything you actually need — and what to leave at home.",
    category: "Planning Tips",
    coverImage:
      "",
    coverFallback: "linear-gradient(160deg, #8a7a2a, #4a4010)",
    date: "2026-05-05",
    readTime: "7 min read",
  },
];

// Helper used by /blog/[slug] to get a single post's metadata
export function getPostMeta(slug: string): PostMeta | undefined {
  return allPosts.find((p) => p.slug === slug);
}
