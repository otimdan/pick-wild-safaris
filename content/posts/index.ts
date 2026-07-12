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
    slug: "chimpanzee-trekking-kibale-forest",
    title: "Chimpanzee Trekking in Kibale Forest: A Complete Guide",
    excerpt:
      "Kibale holds the highest density of primates in Africa — and the continent's best chimpanzee tracking. Here's what a trek is really like, what it costs, when to go, and how to prepare.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #24471f, #08160a)",
    date: "2026-07-12",
    readTime: "10 min read",
  },
  {
    slug: "tree-climbing-lions-ishasha",
    title: "The Tree-Climbing Lions of Ishasha: Uganda's Strangest Big Cats",
    excerpt:
      "In one remote corner of Queen Elizabeth National Park, lions do something they're not supposed to: they climb trees. Here's where to find them, why they do it, and how to plan a visit.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a5a2a, #221a08)",
    date: "2026-07-12",
    readTime: "8 min read",
  },
  {
    slug: "tribes-and-cultures-of-uganda",
    title: "The Tribes and Cultures of Uganda: A Traveller's Introduction",
    excerpt:
      "Uganda is home to more than 56 distinct tribes, from the kingdom of Buganda to the cattle-herding Bahima and the forest-dwelling Batwa. A respectful introduction — and how to meet them on your safari.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a4a3a, #221410)",
    date: "2026-07-12",
    readTime: "11 min read",
  },
  {
    slug: "sipi-falls-uganda-guide",
    title: "Sipi Falls: Hiking, Coffee, and Uganda's Prettiest Waterfalls",
    excerpt:
      "On the foothills of Mount Elgon, three waterfalls tumble through coffee-growing hills. Here's how to hike Sipi Falls, tour a local coffee farm, and fit it into a Uganda itinerary.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a5a5a, #0a201f)",
    date: "2026-07-12",
    readTime: "8 min read",
  },
  {
    slug: "murchison-falls-national-park-guide",
    title: "Murchison Falls National Park: The Complete Safari Guide",
    excerpt:
      "Uganda's largest park, where the Nile explodes through a seven-metre gorge. Game drives, a boat safari to the falls, the wildlife, and how to plan a Murchison Falls trip.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a5a2a, #161f08)",
    date: "2026-07-12",
    readTime: "11 min read",
  },
  {
    slug: "uganda-vs-rwanda-gorilla-trekking",
    title: "Uganda vs Rwanda Gorilla Trekking: Which Should You Choose?",
    excerpt:
      "Same gorillas, two very different trips. We compare permit costs, travel time, terrain, and the wider safari — so you can decide whether Uganda or Rwanda is right for your gorilla trek.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a5a4a, #0a2018)",
    date: "2026-07-12",
    readTime: "11 min read",
  },
  {
    slug: "how-many-mountain-gorillas-are-left",
    title: "How Many Mountain Gorillas Are Left in the World?",
    excerpt:
      "Just over 1,000 mountain gorillas remain on earth — and, remarkably, that number is rising. Here's the latest count, where they live, and why they're conservation's rarest good-news story.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2f4a2a, #0e1f0c)",
    date: "2026-07-12",
    readTime: "10 min read",
  },
  {
    slug: "how-big-is-a-silverback-gorilla",
    title: "How Big Is a Silverback Gorilla? Size, Weight & Strength",
    excerpt:
      "A silverback can stand nearly six feet tall and weigh as much as three grown men — yet lives almost entirely on leaves. Here's how big mountain gorillas really get, and how strong they are.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a4030, #14180e)",
    date: "2026-07-12",
    readTime: "9 min read",
  },
  {
    slug: "gorilla-vs-chimpanzee",
    title: "Gorilla vs Chimpanzee: What's the Difference?",
    excerpt:
      "They're both African great apes, but a gorilla and a chimpanzee are wildly different animals — in size, diet, temperament, and how close they are to us. Here's how to tell them apart, and where to see both in Uganda.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a4030, #1a1608)",
    date: "2026-07-12",
    readTime: "10 min read",
  },
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
