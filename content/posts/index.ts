// ─────────────────────────────────────────────────────────────
//  POST REGISTRY
//  When you add a new post:
//  1. Create content/posts/your-slug.tsx  (copy an existing one)
//  2. Add its metadata to this array
//  3. That's it — it appears on /blog and /blog/your-slug
//
//  SEO note: `metaTitle` (brand-less; the layout template appends
//  " | Pick Wild Safaris") and `metaDescription` (≲155 chars) drive
//  the <title>/description on /blog/[slug]. Omit `metaTitle` when the
//  post `title` is already short enough to brand without truncating.
// ─────────────────────────────────────────────────────────────

import type { PostMeta } from "../types";

export const POSTS_PER_PAGE = 9;

export const allPosts: PostMeta[] = [
  {
    slug: "how-to-choose-a-uganda-safari-company",
    title: "How to Choose a Uganda Safari Company",
    excerpt:
      "On a Uganda safari, the operator matters more than the itinerary. Here's how to tell a trustworthy safari company from the rest — what to look for, the questions to ask, and the red flags to walk away from.",
    metaDescription:
      "How to choose a Uganda safari company you can trust — what to look for, the questions to ask, and the red flags to avoid before you book.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a5a6a, #0e1c22)",
    date: "2026-07-13",
    readTime: "9 min read",
  },
  {
    slug: "planning-a-trip-to-uganda",
    title: "Planning a Trip to Uganda: A First-Timer's Guide",
    excerpt:
      "Gorilla permits, visas, yellow fever, which parks, how many days — planning a Uganda trip is simpler than it looks. A clear first-timer's guide to when to go, how long you need, and the practical paperwork.",
    metaTitle: "How to Plan a Trip to Uganda",
    metaDescription:
      "Planning a trip to Uganda? A first-timer's guide to when to go, how many days you need, visas, yellow fever, and building the perfect safari.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #5a6a3a, #1c2410)",
    date: "2026-07-13",
    readTime: "10 min read",
  },
  {
    slug: "safari-lodges-in-uganda",
    title: "Safari Lodges in Uganda: Where You'll Stay",
    excerpt:
      "From friendly bandas to world-class tented camps, where you sleep is a big part of a Uganda safari. A guide to the kinds of safari lodges in Uganda, what to expect at each level, and how to choose.",
    metaTitle: "Safari Lodges in Uganda",
    metaDescription:
      "A guide to safari lodges in Uganda — budget to luxury, lodges vs tented camps, what to expect at each level, and how to choose where to stay.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a4a3a, #241410)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "african-safari-animals",
    title: "African Safari Animals: The Complete Guide to What You'll See",
    excerpt:
      "The animals of Africa, organised so a first safari makes sense — the Big Five, the great apes, the big cats, the giants, the herds, and the rare ones. What each is, and where in Uganda and East Africa to see it.",
    metaTitle: "African Safari Animals: A Complete Guide",
    metaDescription:
      "The animals of Africa, organised for a first safari — the Big Five, great apes, big cats, giants and herds, and where in Uganda to see each one.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a6230, #221f0a)",
    date: "2026-07-13",
    readTime: "12 min read",
  },
  {
    slug: "do-cheetahs-eat-lions-and-hyenas",
    title: "Do Cheetahs Eat Lions and Hyenas?",
    excerpt:
      "No — and it isn't close. The cheetah is the most fragile of Africa's big predators: far from hunting lions and hyenas, it spends its life avoiding them. Here's what cheetahs really eat, and who eats whom.",
    metaDescription:
      "Do cheetahs eat lions or hyenas? No — the cheetah avoids both. Here's what cheetahs really eat, and why lions and hyenas are their enemies.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #7a6838, #241d0a)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "do-lions-eat-leopards-cheetahs-and-hyenas",
    title: "Do Lions Eat Leopards, Cheetahs, and Hyenas?",
    excerpt:
      "Lions kill leopards, cheetahs, and hyenas surprisingly often — but they almost never eat them. Here's the honest story of Africa's big-predator rivalries, and where to see the drama on safari.",
    metaTitle: "Do Lions Eat Leopards, Cheetahs & Hyenas?",
    metaDescription:
      "Do lions eat leopards, cheetahs, and hyenas? They kill them but rarely eat them — Africa's big-predator rivalries explained, and where to see them.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #7a5a2a, #2a1c08)",
    date: "2026-07-13",
    readTime: "10 min read",
  },
  {
    slug: "leopard-vs-cheetah",
    title: "Leopard vs Cheetah: How to Tell Them Apart",
    excerpt:
      "Two tawny, spotted cats — one an all-power ambush hunter, the other the fastest land animal alive. Here's how to tell a leopard from a cheetah at a glance, and where to see both in East Africa.",
    metaTitle: "Leopard vs Cheetah: Key Differences",
    metaDescription:
      "Leopard vs cheetah — how to tell them apart at a glance: spots, tear marks, build, and behaviour, plus where to see both in East Africa.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a5230, #241a0c)",
    date: "2026-07-13",
    readTime: "9 min read",
  },
  {
    slug: "strongest-birds-in-africa",
    title: "The Strongest Birds in Africa",
    excerpt:
      "From the bone-crushing grip of the crowned eagle to the lethal kick of an ostrich, these are Africa's strongest birds — several of them found in Uganda, one of the best birding countries on earth.",
    metaDescription:
      "The strongest birds in Africa — from the crowned eagle's crushing grip to the ostrich's lethal kick — and where to see them on a Uganda safari.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a4a5a, #0a1c22)",
    date: "2026-07-13",
    readTime: "9 min read",
  },
  {
    slug: "how-fast-is-a-cheetah",
    title: "How Fast Is a Cheetah? The World's Fastest Land Animal",
    excerpt:
      "A cheetah hits around 70 mph and goes 0–60 in about three seconds — but can only keep it up for 20 seconds. Here's exactly how fast a cheetah is, what makes it so quick, and where to watch one run.",
    metaTitle: "How Fast Is a Cheetah?",
    metaDescription:
      "How fast is a cheetah? Around 70 mph, and 0–60 in three seconds — but only for 20 seconds. What makes it the fastest land animal, and where to see one.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #8a6a2a, #322208)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "jacksons-hartebeest-facts",
    title: "Jackson's Hartebeest: Facts About Uganda's Odd Antelope",
    excerpt:
      "High shoulders, a sloping back, and a long mournful face — the Jackson's hartebeest is one of Uganda's most distinctive antelopes. Here's what it is, why it looks so strange, and where to see it.",
    metaTitle: "Jackson's Hartebeest Facts",
    metaDescription:
      "Facts about the Jackson's hartebeest — Uganda's odd, high-shouldered antelope. What it is, why it looks so strange, and where to see it in Uganda.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #5a4a2a, #201808)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "impala-antelope-facts",
    title: "Impala Facts: The Antelope That Named a Capital",
    excerpt:
      "Kampala is named after it, yet just one Ugandan park has any — the impala is a small antelope with a big story. Facts on its record-breaking leaps, its Uganda link, and where to find it.",
    metaTitle: "Impala Facts: Uganda's Famous Antelope",
    metaDescription:
      "Impala facts — the antelope that gave Kampala its name. Its record-breaking leaps, why only one Ugandan park has any, and where to see them.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a5a3a, #241c10)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "what-language-is-spoken-in-uganda",
    title: "What Language Is Spoken in Uganda? A Traveller's Guide",
    excerpt:
      "English and Swahili are official, Luganda is everywhere, and 40-plus indigenous languages fill in the rest. Here's which languages you'll hear in each safari region — plus handy phrases to pack.",
    metaTitle: "What Language Is Spoken in Uganda?",
    metaDescription:
      "What language is spoken in Uganda? English and Swahili are official, Luganda most common — a region-by-region guide plus handy travel phrases.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a5a4a, #221a12)",
    date: "2026-07-13",
    readTime: "10 min read",
  },
  {
    slug: "chimpanzee-trekking-kibale-forest",
    title: "Chimpanzee Trekking in Kibale Forest: A Complete Guide",
    excerpt:
      "Kibale holds the highest density of primates in Africa — and the continent's best chimpanzee tracking. Here's what a trek is really like, what it costs, when to go, and how to prepare.",
    metaTitle: "Chimpanzee Trekking in Kibale Forest",
    metaDescription:
      "A complete guide to chimpanzee trekking in Kibale Forest — what a trek is like, permit costs, the best time to go, and how to prepare.",
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
    metaTitle: "The Tree-Climbing Lions of Ishasha",
    metaDescription:
      "Uganda's tree-climbing lions of Ishasha — where to find them in Queen Elizabeth NP, why they climb, the best time to see them, and how to visit.",
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
    metaTitle: "The Tribes and Cultures of Uganda",
    metaDescription:
      "An introduction to the tribes and cultures of Uganda — from Buganda to the Batwa and Karamojong — and how to meet them respectfully on safari.",
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
    metaTitle: "Sipi Falls, Uganda: A Complete Guide",
    metaDescription:
      "A guide to Sipi Falls, Uganda — hiking the three waterfalls on Mount Elgon, touring a coffee farm, and fitting it into a Uganda itinerary.",
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
    metaTitle: "Murchison Falls National Park Guide",
    metaDescription:
      "A complete guide to Murchison Falls National Park — game drives, the boat safari to the falls, the wildlife, and how to plan your trip.",
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
    metaTitle: "Uganda vs Rwanda Gorilla Trekking",
    metaDescription:
      "Uganda vs Rwanda gorilla trekking — we compare permit costs, travel time, terrain, and the wider safari to help you choose the right trip.",
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
    metaTitle: "How Many Mountain Gorillas Are Left?",
    metaDescription:
      "How many mountain gorillas are left? Just over 1,000 — and rising. The latest count, where they live, and why it's conservation's rare good news.",
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
    metaTitle: "How Big Is a Silverback Gorilla?",
    metaDescription:
      "How big is a silverback gorilla? Nearly six feet tall and as heavy as three men, yet it lives on leaves. Gorilla size, weight, and strength.",
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
    metaTitle: "Gorilla vs Chimpanzee: The Differences",
    metaDescription:
      "Gorilla vs chimpanzee — how the two great apes differ in size, diet, temperament, and DNA, and where to see both on one Uganda safari.",
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
    metaTitle: "Is the Shoebill Stork a Dinosaur?",
    metaDescription:
      "Is the shoebill stork a dinosaur? Not quite — but this prehistoric Ugandan swamp bird comes close. Its size, diet, and where to see one.",
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
    metaTitle: "Gorilla Trekking Tips: Before You Go",
    metaDescription:
      "Essential gorilla trekking tips — how to prepare physically, mentally, and logistically for the trek of a lifetime in Uganda or Rwanda.",
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
    metaDescription:
      "The best time to visit Uganda for a safari — a month-by-month guide to the dry and wet seasons for gorilla trekking and wildlife viewing.",
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
    metaTitle: "What to Pack for a Safari",
    metaDescription:
      "What to pack for a safari — the complete packing list covering everything you actually need, and what to leave at home.",
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
