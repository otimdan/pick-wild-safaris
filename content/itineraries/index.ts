// ─────────────────────────────────────────────────────────────
//  ITINERARY REGISTRY
//  To add a new safari itinerary:
//  1. Copy an object in `itineraries` below and give it a new slug
//  2. Change the content — it appears at /safaris/<slug>
//  3. That's it. The page template is shared; only data differs.
// ─────────────────────────────────────────────────────────────

import type { Itinerary } from "./types";

export const itineraries: Itinerary[] = [
  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "east-africa-mara-serengeti-migration",
    title: "East Africa's Mara, Crater & Serengeti Migration Safari",
    subtitle: "Two countries, five legendary reserves, one unforgettable journey",
    excerpt:
      "The definitive East African adventure — track the Great Migration across the Masai Mara and Serengeti, descend into the Ngorongoro Crater, and unwind on the shores of Lake Manyara.",
    country: "Kenya & Tanzania",
    duration: "9 Days",
    priceFrom: "From $6,480 per person sharing",
    heroImage:
      "https://goodearthtours.com/wp-content/uploads/2026/05/great-migration.jpg",
    heroFallback: "linear-gradient(160deg, #5a7a3a, #2a4010)",
    badge: "Fan Favorite",
    date: "2026-07-01",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "This is East Africa at its most spectacular. Over nine days you'll cross from Kenya into Tanzania, linking five of the continent's greatest wildlife reserves into a single, seamless journey — the Masai Mara, Serengeti, Ngorongoro Crater, Lake Manyara, and the plains in between.",
      "Timed to follow the Great Migration, this safari puts you in the middle of one of the natural world's largest animal movements: nearly two million wildebeest, zebra, and gazelle on the move, shadowed by the predators that follow them. Between game drives you'll stay in hand-picked lodges and tented camps chosen for their location, comfort, and quiet luxury.",
      "Every departure is private and guided by an expert driver-guide who knows these ecosystems intimately. The pace is yours — this is a designed itinerary, not a fixed-group tour.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "9 Days / 8 Nights" },
      { label: "Countries", value: "Kenya & Tanzania" },
      { label: "Reserves", value: "Masai Mara · Serengeti · Ngorongoro" },
      { label: "Best Time", value: "July – October" },
      { label: "Nearest Airport", value: "Nairobi (NBO)" },
      { label: "Style", value: "Private guided · Lodge & tented camp" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Witness the Great Migration river crossings in the Masai Mara and Serengeti",
      "Descend into the Ngorongoro Crater — a UNESCO World Heritage Site and Big Five stronghold",
      "Unrivalled game viewing across five distinct ecosystems in two countries",
      "Search for tree-climbing lions and flamingo flocks at Lake Manyara",
      "Sunrise game drives, sundowners on the plains, and nights under vast African skies",
      "Hand-picked lodges and tented camps in prime wildlife locations",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Nairobi",
        location: "Nairobi, Kenya",
        nights: "1 night",
        body: [
          "Touch down in Nairobi, where you'll be met and transferred to your boutique hotel. The rest of the day is yours to rest and recover from your flight.",
          "In the evening, your guide joins you for a welcome briefing over dinner, walking you through the journey ahead.",
        ],
        accommodation: "Hemingways Nairobi",
        meals: "Dinner",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/04/home-about-2.jpg",
        imageAlt: "Skyline and lush surrounds of Nairobi at dusk",
      },
      {
        label: "Days 2–3",
        title: "Into the Masai Mara",
        location: "Masai Mara, Kenya",
        nights: "2 nights",
        body: [
          "Fly to the Masai Mara, Kenya's flagship reserve and the northern stage of the Great Migration. Your tented camp sits close to the action, with the plains stretching to the horizon.",
          "Two full days of game drives follow the herds and the predators that trail them — lion, cheetah, and leopard are all regularly seen here. With luck and timing, you may witness a dramatic Mara River crossing.",
        ],
        accommodation: "Governors' Camp",
        meals: "Breakfast, Lunch, Dinner",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/05/DSC07387.jpg",
        imageAlt: "Wildebeest herds on the plains of the Masai Mara",
      },
      {
        label: "Day 4",
        title: "Cross into the Serengeti",
        location: "Serengeti, Tanzania",
        nights: "2 nights",
        body: [
          "A scenic flight carries you across the border into Tanzania and the endless Serengeti — the ecosystem the Mara flows into. The name means 'endless plains,' and you'll understand why on arrival.",
          "Settle into your camp and set out on an afternoon game drive as the light turns gold.",
        ],
        accommodation: "Serengeti Serena Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image:
          "https://goodearthtours.com/wp-content/uploads/2025/09/serengeti-sunset.jpg",
        imageAlt: "A lone acacia tree against a Serengeti sunset",
      },
      {
        label: "Day 5",
        title: "Serengeti Migration Country",
        location: "Serengeti, Tanzania",
        body: [
          "A full day in the heart of the Serengeti. Depending on the season, the great herds may be massing here in their hundreds of thousands, drawing lion prides, hyena clans, and cheetah out onto the plains.",
          "Optional: rise before dawn for a hot-air balloon safari over the plains, followed by a champagne bush breakfast (available at a supplement).",
        ],
        accommodation: "Serengeti Serena Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 6",
        title: "The Ngorongoro Crater",
        location: "Ngorongoro, Tanzania",
        nights: "1 night",
        body: [
          "Travel to the Ngorongoro Highlands, stopping at Olduvai Gorge — the 'Cradle of Mankind' — along the way. Your lodge perches on the crater rim with sweeping views into the caldera below.",
        ],
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/04/kenya-eland.jpg",
        imageAlt: "The rim of the Ngorongoro Crater",
      },
      {
        label: "Day 7",
        title: "Crater Floor Game Drive",
        location: "Ngorongoro & Lake Manyara, Tanzania",
        nights: "1 night",
        body: [
          "Descend to the crater floor for a full morning game drive. This natural amphitheatre holds one of Africa's densest concentrations of wildlife — including black rhino, making it one of the best places on earth to complete the Big Five.",
          "In the afternoon, continue to Lake Manyara, famous for its tree-climbing lions and vast flocks of flamingos.",
        ],
        accommodation: "Lake Manyara Serena Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 8",
        title: "Lake Manyara & Return to Nairobi",
        location: "Lake Manyara, Tanzania → Nairobi, Kenya",
        nights: "1 night",
        body: [
          "A final morning game drive along the lakeshore before flying back to Nairobi for an overnight, giving you a relaxed connection for onward travel.",
        ],
        accommodation: "Hemingways Nairobi",
        meals: "Breakfast",
      },
      {
        label: "Day 9",
        title: "Departure",
        location: "Nairobi, Kenya",
        body: [
          "After breakfast, you'll be transferred to the airport for your international departure — or continue on to Zanzibar's beaches or a gorilla-trekking extension, which we're happy to arrange.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "8 nights' accommodation in hand-picked lodges and tented camps",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private expert driver-guide throughout",
      "All game drives and park activities in a 4×4 safari vehicle",
      "Internal flights (Nairobi–Mara, Mara–Serengeti)",
      "All national park and conservation fees",
      "Airport transfers and bottled water on game drives",
    ],
    excluded: [
      "International flights to and from Nairobi",
      "Kenya and Tanzania visas",
      "Travel and medical insurance",
      "Hot-air balloon safari and other optional activities",
      "Gratuities for guides and lodge staff",
      "Personal expenses, drinks, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      {
        name: "Governors' Camp",
        location: "Masai Mara, Kenya",
        nights: "2 nights",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/05/DSC07387.jpg",
      },
      {
        name: "Serengeti Serena Safari Lodge",
        location: "Serengeti, Tanzania",
        nights: "2 nights",
        image:
          "https://goodearthtours.com/wp-content/uploads/2025/09/serengeti-sunset.jpg",
      },
      {
        name: "Ngorongoro Serena Safari Lodge",
        location: "Ngorongoro Crater, Tanzania",
        nights: "1 night",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/04/kenya-eland.jpg",
      },
    ],

    pricingNote:
      "Prices vary by season and are based on two people sharing. Contact us for current rates, single-supplement pricing, and available departure dates.",
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-wildlife-safari",
    title: "Uganda Gorilla Trekking & Wildlife Safari",
    subtitle: "Chimps, tree-climbing lions, and a morning with the mountain gorillas",
    excerpt:
      "Ten days across the Pearl of Africa — track wild chimpanzees in Kibale, cruise the Kazinga Channel, search for tree-climbing lions in Ishasha, and stand face-to-face with a mountain gorilla family in Bwindi.",
    country: "Uganda",
    duration: "10 Days",
    priceFrom: "From $5,240 per person sharing",
    heroImage: "/hero-gorilla.jpg",
    heroFallback: "linear-gradient(160deg, #3a6a2a, #1a3a0e)",
    date: "2026-07-01",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "Uganda packs more variety into a single country than almost anywhere in Africa. Over ten days this journey moves from misty rainforest to open savannah to the volcanic foothills of the Virungas, chasing three of the continent's most sought-after primate and wildlife encounters.",
      "The centrepiece is a permit to trek Bwindi's mountain gorillas — one hour in the presence of a habituated family, deep in an ancient forest that holds nearly half the world's remaining population. Along the way you'll trek chimpanzees in Kibale, drift past hippos and elephants on the Kazinga Channel, and scan the fig trees of Ishasha for its famous tree-climbing lions.",
      "Every departure is private, led by an expert Ugandan driver-guide, with accommodation hand-picked for its setting and comfort. This is a designed itinerary, built to be shaped around your dates and pace.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks", value: "Kibale · Queen Elizabeth · Bwindi" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
      { label: "Style", value: "Private guided · Lodge safari" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "A gorilla-trekking permit and one hour with a habituated family in Bwindi",
      "Chimpanzee tracking in the Kibale Forest, Africa's primate capital",
      "Boat cruise on the Kazinga Channel past hippos, elephants, and birdlife",
      "Search for Ishasha's rare tree-climbing lions on the savannah",
      "Game drives in Queen Elizabeth National Park",
      "Sweeping views over the terraced hills and islands of Lake Bunyonyi",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Entebbe",
        location: "Entebbe, Uganda",
        nights: "1 night",
        body: [
          "Land at Entebbe International Airport, where your guide meets you and transfers you to a lakeside hotel on the shores of Lake Victoria.",
          "Settle in and enjoy a welcome dinner and trip briefing overlooking the water.",
        ],
        accommodation: "Protea Hotel Entebbe",
        meals: "Dinner",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/04/home-about-2.jpg",
        imageAlt: "Lake Victoria shoreline near Entebbe",
      },
      {
        label: "Days 2–3",
        title: "Kibale Forest & Chimpanzee Trekking",
        location: "Kibale, Uganda",
        nights: "2 nights",
        body: [
          "Drive west across Uganda's rolling tea country to Kibale Forest, which holds the highest density of primates in Africa. Cross the equator along the way.",
          "The following morning, head into the forest to track a habituated chimpanzee community — listening for their calls before spending time watching them feed, groom, and swing through the canopy. An afternoon swamp walk in Bigodi adds birds and monkeys.",
        ],
        accommodation: "Primates Lodge Kibale",
        meals: "Breakfast, Lunch, Dinner",
        image:
          "https://goodearthtours.com/wp-content/uploads/2025/08/uganda-buffalo.jpg",
        imageAlt: "Dense rainforest canopy in Kibale Forest",
      },
      {
        label: "Days 4–5",
        title: "Queen Elizabeth National Park",
        location: "Queen Elizabeth NP, Uganda",
        nights: "2 nights",
        body: [
          "Continue to Queen Elizabeth National Park, Uganda's most popular savannah reserve, set against the backdrop of the Rwenzori Mountains.",
          "Morning game drives search the Kasenyi plains for lion, elephant, buffalo, and antelope. In the afternoon, a boat cruise along the Kazinga Channel brings you close to some of the largest concentrations of hippo in Africa, plus elephants drinking at the shore and a wealth of waterbirds.",
        ],
        accommodation: "Mweya Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/04/kenya-eland.jpg",
        imageAlt: "Elephants on the savannah of Queen Elizabeth National Park",
      },
      {
        label: "Day 6",
        title: "Ishasha & On to Bwindi",
        location: "Ishasha → Bwindi, Uganda",
        nights: "3 nights",
        body: [
          "Travel south through the remote Ishasha sector, famous for its tree-climbing lions that drape themselves over the branches of giant fig trees — a behaviour seen in only a handful of places on earth.",
          "Continue into the foothills to Bwindi Impenetrable Forest, a UNESCO World Heritage Site and home to your gorillas. Arrive in time to rest before the big day.",
        ],
        accommodation: "Buhoma Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 7",
        title: "Gorilla Trekking in Bwindi",
        location: "Bwindi Impenetrable Forest, Uganda",
        body: [
          "The day you came for. After an early briefing at the park headquarters, you set off on foot with rangers and trackers in search of a habituated gorilla family. The trek can take anywhere from one to several hours through steep, forested terrain.",
          "When you find them, you have one unforgettable hour in their company — watching silverbacks, mothers, and playful youngsters at close range. Porters are available to carry your pack and lend a hand on the climbs.",
        ],
        accommodation: "Buhoma Lodge",
        meals: "Breakfast, Lunch, Dinner",
        image: "/hero-gorilla.jpg",
        imageAlt: "A mountain gorilla in Bwindi Impenetrable Forest",
      },
      {
        label: "Day 8",
        title: "Bwindi at Your Own Pace",
        location: "Bwindi, Uganda",
        body: [
          "A gentler day. Choose a guided community walk to meet the Batwa people and learn about forest life, take on an optional second gorilla trek (subject to permit availability), or simply relax at the lodge with the forest sounds around you.",
        ],
        accommodation: "Buhoma Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 9",
        title: "Lake Bunyonyi",
        location: "Lake Bunyonyi, Uganda",
        nights: "1 night",
        body: [
          "Wind down at Lake Bunyonyi, the 'place of many little birds' — a serene, island-dotted lake ringed by terraced hills. Swim, canoe, or do nothing at all after an action-packed week.",
        ],
        accommodation: "BirdNest Resort",
        meals: "Breakfast, Lunch, Dinner",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/05/beach.jpg",
        imageAlt: "Calm island-dotted waters of Lake Bunyonyi",
      },
      {
        label: "Day 10",
        title: "Return to Entebbe & Departure",
        location: "Entebbe, Uganda",
        body: [
          "Fly from the airstrip near Bwindi back to Entebbe (or drive, for those who prefer the road), connecting with your international departure — or continue on to a Rwanda extension or a Nile-source add-on in Jinja, which we're happy to arrange.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "9 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Gorilla trekking permit (1) and chimpanzee tracking permit (1)",
      "Private expert English-speaking driver-guide throughout",
      "All game drives, the Kazinga Channel boat cruise, and park activities",
      "All national park and conservation fees",
      "Airport transfers and bottled water in the vehicle",
    ],
    excluded: [
      "International flights to and from Entebbe",
      "Uganda visa and any transit visas",
      "Travel and medical insurance",
      "Internal charter flight Bwindi–Entebbe (optional, on request)",
      "Porter fees, gratuities, and personal expenses",
      "Drinks and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      {
        name: "Primates Lodge Kibale",
        location: "Kibale Forest, Uganda",
        nights: "2 nights",
        image:
          "https://goodearthtours.com/wp-content/uploads/2025/08/uganda-buffalo.jpg",
      },
      {
        name: "Mweya Safari Lodge",
        location: "Queen Elizabeth NP, Uganda",
        nights: "2 nights",
        image:
          "https://goodearthtours.com/wp-content/uploads/2026/04/kenya-eland.jpg",
      },
      {
        name: "Buhoma Lodge",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "3 nights",
        image: "/hero-gorilla.jpg",
      },
    ],

    pricingNote:
      "Gorilla permits are limited and sell out months ahead in peak season — we recommend booking early. Prices are based on two people sharing; contact us for current rates and single-supplement pricing.",
  },
];

// ── Helpers used by the route + listings ────────────────────
export function getItinerary(slug: string): Itinerary | undefined {
  return itineraries.find((it) => it.slug === slug);
}

export const allItineraries = itineraries;
