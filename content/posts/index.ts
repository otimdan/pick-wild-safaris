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
    slug: "uganda-history-what-travellers-should-know",
    title: "Uganda's History: What Travellers Should Know",
    excerpt:
      "You don't need a history degree to enjoy a Uganda safari — but knowing the outline of the country's modern history adds real depth to the trip. The essential background, told plainly.",
    metaTitle: "Uganda's History: A Traveller's Guide",
    metaDescription:
      "Uganda's modern history, told plainly for travellers — from independence in 1962 through the Idi Amin years to today, and why it still matters.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a4a3a, #141410)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "ugandan-etiquette-customs-guide",
    title: "Ugandan Etiquette: Customs & Greetings to Know Before You Go",
    excerpt:
      "Ugandans are famously warm and welcoming, and a little cultural awareness goes a long way. A practical guide to greetings, dress, photography consent, and customs to know before your trip.",
    metaTitle: "Ugandan Etiquette & Customs Guide",
    metaDescription:
      "A practical guide to Ugandan etiquette — greetings, dress code, photography consent, and customs to know before you travel to Uganda.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #5a4a3a, #1c1610)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "batwa-forest-people-of-uganda",
    title: "The Batwa: Uganda's Forest People",
    excerpt:
      "Before Bwindi and Mgahinga were national parks, they were home. An honest introduction to the Batwa — their history, their 1991 displacement, and how to visit their communities respectfully today.",
    metaTitle: "The Batwa: Uganda's Forest People",
    metaDescription:
      "An honest introduction to the Batwa, Uganda's forest people — their history, 1991 displacement from Bwindi, and respectful community visits today.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a4a2a, #101808)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "ugandan-food-guide",
    title: "What to Eat in Uganda: A Food Guide for Travellers",
    excerpt:
      "Between game drives and gorilla treks, food is one of the easiest ways to connect with Uganda. From matoke to the beloved street-food rolex, what to look for on the menu — and what's worth seeking out.",
    metaTitle: "What to Eat in Uganda: A Food Guide",
    metaDescription:
      "A guide to Ugandan food — matoke, luwombo, rolex street food, and posho. What to eat in Uganda, and what's worth seeking out on your trip.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a7a2a, #202808)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "kingdoms-of-uganda",
    title: "The Kingdoms of Uganda: Buganda, Bunyoro, Toro & Busoga",
    excerpt:
      "Uganda is a republic with a president — and also a country of living kings. Several traditional kingdoms still exist today as cultural institutions. Their history, unusual constitutional status, and where to encounter them.",
    metaTitle: "The Kingdoms of Uganda",
    metaDescription:
      "An introduction to Uganda's traditional kingdoms — Buganda, Bunyoro, Toro, and Busoga. Their history, abolition and restoration, and current kings.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a4a2a, #201808)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "traditional-music-dance-uganda",
    title: "Traditional Music & Dance of Uganda",
    excerpt:
      "With more than 56 tribes, Uganda holds an extraordinary range of traditional music and dance. An introduction to the instruments, the dances, and where to experience this living heritage on safari.",
    metaTitle: "Traditional Music & Dance of Uganda",
    metaDescription:
      "An introduction to traditional Ugandan music and dance — instruments like the adungu, dances like bakisimba, and where to see them performed.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #7a4a2a, #241808)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "family-safari-uganda-with-kids",
    title: "Family Safari to Uganda: Travelling With Kids",
    excerpt:
      "A safari is one of the great family travel experiences — and Uganda works well for the right age group with the right planning. Age limits by activity, health preparation, and how to build a kid-friendly itinerary.",
    metaTitle: "Family Safari to Uganda: With Kids",
    metaDescription:
      "A guide to a family safari in Uganda — age limits by activity, health preparation for kids, and how to build a kid-friendly itinerary.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a5a4a, #101c16)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "uganda-vs-kenya-vs-tanzania-safari",
    title: "Uganda vs Kenya vs Tanzania: Which Safari Country Is Right for You?",
    excerpt:
      "All three are extraordinary safari countries doing different things exceptionally well. A clear-eyed comparison of gorillas vs the Great Migration vs sheer scale — to help you decide, or realise you want more than one.",
    metaTitle: "Uganda vs Kenya vs Tanzania Safari",
    metaDescription:
      "Uganda vs Kenya vs Tanzania — a clear comparison of gorillas, the Great Migration, crowds, and cost, to help you choose your safari country.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #5a4a2a, #201808)",
    date: "2026-07-13",
    readTime: "9 min read",
  },
  {
    slug: "road-safari-vs-fly-in-safari-uganda",
    title: "Road Safari vs Fly-In Safari in Uganda",
    excerpt:
      "Uganda's parks are spread across a genuinely large country, and how you move between them is a key early decision. A clear comparison of road and fly-in safaris, and how to choose the right mix.",
    metaTitle: "Road Safari vs Fly-In Safari in Uganda",
    metaDescription:
      "Road safari vs fly-in safari in Uganda — the trade-offs in cost, time, and scenery, and how to choose the right mix for your itinerary.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a5a3a, #141c10)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "gorilla-permit-prices-explained",
    title: "Gorilla Permit Prices Explained: Uganda vs Rwanda vs Congo",
    excerpt:
      "A gorilla permit is the biggest line item on any trekking trip — and a fixed government fee, not something any operator sets. A clear breakdown of permit prices in Uganda, Rwanda, and DR Congo, and why they differ.",
    metaTitle: "Gorilla Permit Prices Explained",
    metaDescription:
      "Gorilla permit prices explained — Uganda, Rwanda, and DR Congo compared, what the fee includes, and why the costs differ so much.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a4a3a, #0a1c14)",
    date: "2026-07-13",
    readTime: "8 min read",
    topic: {
      name: "Gorilla trekking",
      wikipedia: "https://en.wikipedia.org/wiki/Mountain_gorilla",
    },
  },
  {
    slug: "gorilla-trekking-day-what-to-expect",
    title: "What Happens on a Gorilla Trek: Hour by Hour",
    excerpt:
      "You've packed the boots and read the prep guides — but what does gorilla trekking day actually feel like? A realistic hour-by-hour walk-through, from the early wake-up to standing in front of a silverback.",
    metaTitle: "A Gorilla Trekking Day: What to Expect",
    metaDescription:
      "What happens on a gorilla trek, hour by hour — the briefing, the hike, the one hour with the gorillas, and what the whole day is really like.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a3a24, #0a140a)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "money-in-uganda-currency-tipping-guide",
    title: "Money in Uganda: Currency, Cash & Tipping Guide",
    excerpt:
      "What currency to bring, whether US dollars work, and how much to tip — the practical money questions every first-time Uganda traveller asks. A clear guide to cash, currency, and tipping on safari.",
    metaTitle: "Money in Uganda: Currency & Tips",
    metaDescription:
      "A guide to money in Uganda — the Ugandan Shilling, bringing US dollars, cash vs cards, and a clear tipping guide for your safari.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a5a3a, #141c10)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "safari-photography-tips",
    title: "Safari Photography Tips",
    excerpt:
      "You don't need professional gear to bring home great safari photos — but a few simple habits make an enormous difference. How to capture what a Uganda safari actually feels like, from light to gear to gorilla-trek shooting.",
    metaTitle: "Safari Photography Tips",
    metaDescription:
      "Safari photography tips — the best light, gear, camera settings for moving wildlife, and how to shoot gorilla treks in low forest light.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #7a5a2a, #241c08)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "african-wild-dog-facts",
    title: "African Wild Dog Facts: The Painted Wolf",
    excerpt:
      "Africa's most effective hunter isn't the lion — it's the wild dog, with a hunt success rate up to 80%. Once extinct in Uganda, it's now staging a rare comeback in Kidepo Valley. Facts on this endangered predator.",
    metaTitle: "African Wild Dog Facts",
    metaDescription:
      "African wild dog facts — the painted wolf's extraordinary hunting success, pack life, and its rare return to Uganda's Kidepo Valley.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #5a4a3a, #1c1610)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "warthog-facts",
    title: "Warthog Facts",
    excerpt:
      "You already feel like you know this animal — but the real warthog is stranger and more charming than the cartoon. Facts on its tusks, its kneeling grazing style, and its genuine friendship with the mongoose.",
    metaTitle: "Warthog Facts",
    metaDescription:
      "Warthog facts — its curved tusks, kneeling grazing style, borrowed aardvark burrows, and its real mutualism with mongooses.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a5a3a, #201c10)",
    date: "2026-07-13",
    readTime: "6 min read",
  },
  {
    slug: "nile-crocodile-facts",
    title: "Nile Crocodile Facts",
    excerpt:
      "Africa's largest reptile, with a bite among the strongest of any living animal — and Murchison Falls holds the highest concentration of them anywhere on the continent. Facts on the Nile crocodile.",
    metaTitle: "Nile Crocodile Facts",
    metaDescription:
      "Nile crocodile facts — its size, its 5,000 psi bite force, and why Murchison Falls has the highest crocodile concentration in Africa.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a4a2a, #101808)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "plains-zebra-facts",
    title: "Plains Zebra Facts",
    excerpt:
      "No two zebras share the same stripe pattern — as individual as a fingerprint. Facts on why zebras have stripes, how their family herds work, and the only two Ugandan parks where you'll find them.",
    metaTitle: "Plains Zebra Facts",
    metaDescription:
      "Plains zebra facts — why zebras have stripes, how their unique patterns work, harem family groups, and where to see them in Uganda.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a4a4a, #141414)",
    date: "2026-07-13",
    readTime: "6 min read",
  },
  {
    slug: "uganda-kob-facts",
    title: "Uganda Kob Facts: The National Animal",
    excerpt:
      "It's on the national coat of arms, and it gathers in herds thousands strong — the Uganda kob is the country's national animal. Facts on its odd mating grounds, and where to see it in huge numbers.",
    metaTitle: "Uganda Kob Facts: The National Animal",
    metaDescription:
      "Uganda kob facts — the national animal, its unusual lek mating grounds, how to tell it from an impala, and where to see huge herds in Uganda.",
    category: "Wildlife",
    coverImage: "/blog/uganda-kob-facts/cover.jpg",
    coverFallback: "linear-gradient(160deg, #7a5a2a, #241c08)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "grey-crowned-crane-facts",
    title: "Grey Crowned Crane Facts: Uganda's National Bird",
    excerpt:
      "It's on the flag, the coat of arms, and the currency — the grey crowned crane is central to Uganda's identity. Facts on its golden crown, its dancing display, and its endangered status.",
    metaTitle: "Grey Crowned Crane Facts",
    metaDescription:
      "Grey crowned crane facts — Uganda's national bird. Its golden crown, famous dancing display, endangered status, and where to see one.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a4a5a, #14141c)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "golden-monkey-facts",
    title: "Golden Monkey Facts",
    excerpt:
      "Sharing the same volcanic slopes as the gorillas, the golden monkey is one of Africa's most vividly coloured — and rarest — primates. Facts on its tiny range, its bamboo diet, and how to trek one in Uganda.",
    metaTitle: "Golden Monkey Facts",
    metaDescription:
      "Golden monkey facts — the vividly coloured, endangered primate found only on the Virunga volcanoes, and how to trek one at Mgahinga in Uganda.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #8a6a1a, #322408)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "black-and-white-colobus-monkey-facts",
    title: "Black-and-White Colobus Monkey Facts",
    excerpt:
      "A flash of black and white fur, a long tail plume trailing behind — the colobus is one of Africa's most elegant monkeys. Facts on its missing thumb, its leaf-eating diet, and where to see it in Uganda.",
    metaTitle: "Black-and-White Colobus Facts",
    metaDescription:
      "Black-and-white colobus monkey facts — why it has no thumb, its leaf-eating diet, troop life, and where to see it in Uganda's forests.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a2a2a, #0a0a0a)",
    date: "2026-07-13",
    readTime: "6 min read",
  },
  {
    slug: "african-elephant-facts",
    title: "African Elephant Facts",
    excerpt:
      "The largest land animal on earth, led by a matriarch with decades of memory. Facts on elephant size, tusks, family life, and where to see Uganda's roughly 5,000 elephants.",
    metaTitle: "African Elephant Facts",
    metaDescription:
      "African elephant facts — size, tusks, matriarch-led herds, and intelligence, plus where to see Uganda's roughly 5,000 elephants on safari.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #5a5a4a, #1c1c14)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "african-buffalo-facts",
    title: "African Buffalo Facts",
    excerpt:
      "The most dangerous of the Big Five isn't the lion — it's the buffalo. Facts on its fearsome reputation, its fused horns, its massive herds, and where to see it in Uganda.",
    metaTitle: "African Buffalo Facts",
    metaDescription:
      "African buffalo facts — why it's the most dangerous of the Big Five, its fused horns, huge herds, and where to see it in Uganda's parks.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a3a2a, #101008)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "hippopotamus-facts",
    title: "Hippopotamus Facts: Africa's Most Dangerous Large Animal",
    excerpt:
      "It looks almost comical, half-submerged in a river — but the hippo is widely considered Africa's most dangerous large animal. Facts on its size, its bite, and where to see it safely in Uganda.",
    metaTitle: "Hippopotamus Facts",
    metaDescription:
      "Hippopotamus facts — why it's considered Africa's most dangerous large animal, its size and bite force, and where to see hippos in Uganda.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a4a3a, #101a10)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "rothschilds-giraffe-facts",
    title: "Rothschild's Giraffe Facts",
    excerpt:
      "Once down to a few hundred individuals, the Rothschild's giraffe is now a genuine Uganda conservation success. Facts on its white 'stockings', its five ossicones, and why Murchison Falls is the best place to see one.",
    metaTitle: "Rothschild's Giraffe Facts",
    metaDescription:
      "Rothschild's giraffe facts — how to recognise it, why it's near threatened, and why Murchison Falls holds the world's largest population.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #8a7a4a, #322a14)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "lake-bunyonyi-guide",
    title: "Lake Bunyonyi: The Complete Guide",
    excerpt:
      "Terraced hillsides, 29 islands, and Uganda's rare bilharzia-free, crocodile-free lake — the natural place to unwind before or after a gorilla trek. A complete guide to Lake Bunyonyi.",
    metaTitle: "Lake Bunyonyi: The Complete Guide",
    metaDescription:
      "A complete guide to Lake Bunyonyi — 29 islands, safe swimming, canoeing, and why it's the perfect rest stop before or after gorilla trekking.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a4a5a, #0a1c22)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "rwenzori-mountains-trekking-guide",
    title: "The Rwenzori Mountains: Trekking Guide to the Mountains of the Moon",
    excerpt:
      "The highest non-volcanic mountains in the world, glaciated almost on the equator, and long dismissed as legend. A guide to trekking Africa's Mountains of the Moon, and how it compares to Kilimanjaro.",
    metaTitle: "Rwenzori Mountains Trekking Guide",
    metaDescription:
      "A trekking guide to the Rwenzori — Africa's Mountains of the Moon. Margherita Peak, glaciers, trek length, and how it compares to Kilimanjaro.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a5a6a, #141c22)",
    date: "2026-07-13",
    readTime: "9 min read",
  },
  {
    slug: "mgahinga-gorilla-national-park-golden-monkeys",
    title: "Mgahinga Gorilla National Park & Golden Monkey Trekking",
    excerpt:
      "Uganda's smallest park, where three Virunga volcanoes meet three countries — and the only place in Uganda to trek the golden monkey. A guide to Mgahinga, its volcanoes, and its primates.",
    metaTitle: "Mgahinga & Golden Monkey Trekking",
    metaDescription:
      "A guide to Mgahinga Gorilla National Park — golden monkey trekking, the three Virunga volcanoes, gorilla trekking here, and how to visit.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a4a2a, #101808)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "kampala-city-guide",
    title: "Kampala: A Traveller's City Guide",
    excerpt:
      "Almost every Uganda safari begins and ends in Kampala, but the city built across seven hills deserves more than a pass-through. History, top sights, food, and how to spend a day there.",
    metaTitle: "Kampala: A Traveller's City Guide",
    metaDescription:
      "A traveller's guide to Kampala — the Kasubi Tombs, top sights, food and nightlife, and how to spend a day in Uganda's capital before your safari.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #5a4a3a, #201810)",
    date: "2026-07-13",
    readTime: "7 min read",
  },
  {
    slug: "queen-elizabeth-national-park-guide",
    title: "Queen Elizabeth National Park: The Complete Guide",
    excerpt:
      "Savanna, wetland, crater lakes, and forest gorge in one park — Queen Elizabeth has one of the highest mammal counts in Africa. The Kazinga Channel, tree-climbing lions, Kyambura Gorge, and how to visit.",
    metaTitle: "Queen Elizabeth National Park Guide",
    metaDescription:
      "A complete guide to Queen Elizabeth National Park — the Kazinga Channel boat safari, tree-climbing lions, Kyambura Gorge, and how to plan your visit.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #3a5a3a, #0e1c10)",
    date: "2026-07-13",
    readTime: "9 min read",
  },
  {
    slug: "jinja-source-of-the-nile-guide",
    title: "Jinja & the Source of the Nile: Adventure Guide",
    excerpt:
      "Where the world's longest river begins, and East Africa's adventure capital — white water rafting, bungee jumping, and the history of Speke's 1862 discovery. A guide to Jinja and how it fits your trip.",
    metaTitle: "Jinja & the Source of the Nile: Guide",
    metaDescription:
      "A guide to Jinja and the Source of the Nile — white water rafting, bungee jumping, Speke's 1862 discovery, and how to fit it into a Uganda trip.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a5a6a, #0a1c22)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "bwindi-impenetrable-forest-guide",
    title: "Bwindi Impenetrable Forest: The Complete Guide",
    excerpt:
      "Home to nearly half the world's mountain gorillas, Bwindi is the reason most people first look at a map of Uganda. The four trekking sectors, the wildlife beyond the gorillas, and how to plan a visit.",
    metaTitle: "Bwindi Impenetrable Forest Guide",
    metaDescription:
      "A complete guide to Bwindi Impenetrable Forest — the four gorilla trekking sectors, wildlife beyond the gorillas, best time to go, and how to visit.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #1e3a24, #06120a)",
    date: "2026-07-13",
    readTime: "10 min read",
  },
  {
    slug: "kidepo-valley-national-park-guide",
    title: "Kidepo Valley National Park: The Complete Guide",
    excerpt:
      "Uganda's most remote national park, and its wildest — cheetah, ostrich, and vast savanna without the crowds. What makes Kidepo different from every other Ugandan park, and how to actually get there.",
    metaTitle: "Kidepo Valley National Park Guide",
    metaDescription:
      "A complete guide to Kidepo Valley — Uganda's wildest, most remote park. Unique wildlife, the Narus Valley, how to get there, and best time to visit.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #7a5228, #241a08)",
    date: "2026-07-13",
    readTime: "9 min read",
  },
  {
    slug: "lake-mburo-national-park-guide",
    title: "Lake Mburo National Park: The Complete Guide",
    excerpt:
      "Uganda's smallest savanna park is easy to underestimate — it's the only one with impala, and one of the only ones where you can walk, cycle, and ride horseback among the wildlife. A complete guide.",
    metaTitle: "Lake Mburo National Park Guide",
    metaDescription:
      "A complete guide to Lake Mburo — Uganda's only park with impala, walking and horseback safaris, and the perfect stop on the road to the gorillas.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #4a6a2a, #141f08)",
    date: "2026-07-13",
    readTime: "8 min read",
  },
  {
    slug: "kibale-forest-national-park-guide",
    title: "Kibale Forest National Park: The Complete Guide",
    excerpt:
      "Kibale is the primate capital of Africa, with 13 species in one forest — chimpanzees are only the start. The park's other primates, its birding, the Bigodi Wetland walk, and how to visit.",
    metaTitle: "Kibale Forest National Park Guide",
    metaDescription:
      "A complete guide to Kibale Forest — Africa's primate capital with 13 species, top birding, the Bigodi Wetland walk, and how to plan your visit.",
    category: "Uganda",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a4a1e, #0c1c08)",
    date: "2026-07-13",
    readTime: "9 min read",
  },
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
    metaTitle: "Do Lions Eat Leopards & Cheetahs?",
    metaDescription:
      "Do lions eat leopards, cheetahs, and hyenas? They kill them but rarely eat them — Africa's big-predator rivalries explained, and where to see them.",
    category: "Wildlife",
    coverImage: "/blog/do-lions-eat-leopards-cheetahs-and-hyenas/cover.jpg",
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
      "Cheetah spots vs leopard spots, tear marks, build, and behaviour — how to tell a leopard from a cheetah at a glance, and where to see both in East Africa.",
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
    coverImage: "/blog/how-fast-is-a-cheetah/cover.jpg",
    coverFallback: "linear-gradient(160deg, #8a6a2a, #322208)",
    date: "2026-07-13",
    readTime: "8 min read",
    topic: {
      name: "Cheetah",
      wikipedia: "https://en.wikipedia.org/wiki/Cheetah",
    },
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
    topic: {
      name: "Mountain gorilla",
      wikipedia: "https://en.wikipedia.org/wiki/Mountain_gorilla",
    },
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
    topic: {
      name: "Mountain gorilla",
      wikipedia: "https://en.wikipedia.org/wiki/Mountain_gorilla",
    },
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
    coverImage: "/blog/how-big-is-a-silverback-gorilla/cover.jpg",
    coverFallback: "linear-gradient(160deg, #3a4030, #14180e)",
    date: "2026-07-12",
    readTime: "9 min read",
    topic: {
      name: "Mountain gorilla",
      wikipedia: "https://en.wikipedia.org/wiki/Mountain_gorilla",
    },
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
    topic: {
      name: "Safari",
      wikipedia: "https://en.wikipedia.org/wiki/Safari",
    },
  },
  {
    slug: "tigers-in-africa",
    title: "Are There Tigers in Africa?",
    excerpt:
      "A common mix-up, cleared up: tigers are native to Asia and have never lived wild in Africa. Here's why people confuse them with lions, and the real big cats you'll see on safari.",
    metaTitle: "Are There Tigers in Africa?",
    metaDescription:
      "Are there tigers in Africa? No — tigers are native to Asia. Here's why the mix-up happens, and the real big cats you'll see on an African safari.",
    category: "Wildlife",
    coverImage: "/blog/tigers-in-africa/cover.jpg",
    coverFallback: "linear-gradient(160deg, #7a4a1a, #241408)",
    date: "2026-07-14",
    readTime: "6 min read",
  },
  {
    slug: "christmas-in-africa",
    title: "Christmas in Africa: Spending the Holidays on Safari",
    excerpt:
      "No snow, no turkey — just warm December days, a country in full festive spirit, and mornings that might start with a gorilla trek. What Christmas looks like in Uganda, and how to plan around it.",
    metaTitle: "Christmas in Africa: A Safari Holiday",
    metaDescription:
      "What Christmas in Uganda looks like, why December is a genuinely good time to visit, and how to plan a festive-season safari around the holidays.",
    category: "Culture",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #6a2a2a, #200a0a)",
    date: "2026-07-14",
    readTime: "7 min read",
  },
  {
    slug: "how-much-does-an-african-safari-cost",
    title: "How Much Does an African Safari Cost?",
    excerpt:
      "There's no single answer — a budget camping trip and a private fly-in circuit can differ tenfold. The real cost drivers, ballpark ranges, and how to budget for the safari you actually want.",
    metaTitle: "How Much Does an African Safari Cost?",
    metaDescription:
      "What actually drives the cost of an African safari — country, permits, accommodation tier, and season — plus ballpark ranges to help you budget.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #7a6a2a, #241e08)",
    date: "2026-07-14",
    readTime: "8 min read",
    topic: {
      name: "Safari",
      wikipedia: "https://en.wikipedia.org/wiki/Safari",
    },
  },
  {
    slug: "romantic-honeymoon-safari",
    title: "Romantic Honeymoon Safari: A Planning Guide",
    excerpt:
      "A safari trades the predictable beach-resort script for something you'll still be talking about at your tenth anniversary. Where to go, how to plan it, and the romantic touches worth arranging in advance.",
    metaTitle: "Romantic Honeymoon Safari Guide",
    metaDescription:
      "How to plan a romantic honeymoon safari in Uganda and Rwanda — the best settings, planning tips, and romantic touches worth arranging ahead.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #7a3a4a, #241014)",
    date: "2026-07-14",
    readTime: "7 min read",
  },
  {
    slug: "big-cats-of-africa",
    title: "Big Cats of Africa: A Complete Guide",
    excerpt:
      "Lion, leopard, cheetah, serval, and caracal — five distinct wild cats share the continent's savannas and forests. What makes each one unique, and where to see them in Uganda.",
    metaTitle: "Big Cats of Africa: Complete Guide",
    metaDescription:
      "A complete guide to Africa's big cats — lion, leopard, cheetah, serval, and caracal — what makes each unique, and where to see them in Uganda.",
    category: "Wildlife",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #7a6020, #241c08)",
    date: "2026-07-14",
    readTime: "8 min read",
  },
  {
    slug: "gorilla-trekking-in-africa",
    title: "Gorilla Trekking in Africa: The Complete Guide",
    excerpt:
      "Africa's single most sought-after wildlife experience, explained end to end — what it involves, where to go, what it costs, and how to decide, with links to every deeper guide you'll need.",
    metaTitle: "Gorilla Trekking in Africa Guide",
    metaDescription:
      "The complete guide to gorilla trekking in Africa — where to go, permit costs, difficulty, and what to expect, across Uganda, Rwanda, and DR Congo.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a4a3a, #0a1c14)",
    date: "2026-07-14",
    readTime: "9 min read",
    topic: {
      name: "Gorilla trekking",
      wikipedia: "https://en.wikipedia.org/wiki/Mountain_gorilla",
    },
  },
  {
    slug: "gorilla-trekking-uganda-vs-rwanda-vs-congo",
    title: "Gorilla Trekking: Uganda vs Rwanda vs DR Congo",
    excerpt:
      "Three countries, three very different trips. A head-to-head comparison of cost, access, and the trek itself, to help you decide where to go gorilla trekking in Africa.",
    metaTitle: "Uganda vs Rwanda vs DR Congo Gorillas",
    metaDescription:
      "Gorilla trekking in Uganda vs Rwanda vs DR Congo — permit cost, trek length, and access compared head-to-head, with a clear guide to choosing.",
    category: "Planning Tips",
    coverImage: "",
    coverFallback: "linear-gradient(160deg, #2a5a3a, #0a2014)",
    date: "2026-07-14",
    readTime: "7 min read",
  },
];

// Helper used by /blog/[slug] to get a single post's metadata
export function getPostMeta(slug: string): PostMeta | undefined {
  return allPosts.find((p) => p.slug === slug);
}
