// ─────────────────────────────────────────────────────────────
//  ITINERARY REGISTRY
//  To add a new safari itinerary:
//  1. Copy an object in `itineraries` below and give it a new slug
//  2. Change the content — it appears at /safaris/<slug>
//  3. That's it. The page template is shared; only data differs.
// ─────────────────────────────────────────────────────────────

import type { Itinerary } from "./types";
import { LODGES } from "./lodges";

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
      "",
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
          "",
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
          "",
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
          "",
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
          "",
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
          "",
      },
      {
        name: "Serengeti Serena Safari Lodge",
        location: "Serengeti, Tanzania",
        nights: "2 nights",
        image:
          "",
      },
      {
        name: "Ngorongoro Serena Safari Lodge",
        location: "Ngorongoro Crater, Tanzania",
        nights: "1 night",
        image:
          "",
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
          "",
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
          "",
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
          "",
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
          "",
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
          "",
      },
      {
        name: "Mweya Safari Lodge",
        location: "Queen Elizabeth NP, Uganda",
        nights: "2 nights",
        image:
          "",
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

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-rwenzori-mountains-expedition",
    title: "Uganda Gorilla Trekking & Rwenzori Mountains Expedition",
    subtitle:
      "Mountain gorillas, chimpanzees, and an ascent toward Africa's third-highest summit",
    excerpt:
      "Track mountain gorillas in Bwindi and chimpanzees in Kibale, then take on the legendary Rwenzori Mountains — the 'Mountains of the Moon' — on a demanding multi-day trek toward Margherita Peak.",
    country: "Uganda",
    duration: "17 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #4a5a6a, #16202a)",
    badge: "Expedition Grade",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "This is Uganda for the adventurous traveller — a journey that pairs the country's two signature primate encounters with one of Africa's great mountaineering challenges. Over seventeen days you'll trek to a habituated gorilla family in Bwindi, track wild chimpanzees in Kibale, and spend ten days climbing into the Rwenzori Mountains, the fabled 'Mountains of the Moon' straddling the Uganda–DR Congo border.",
      "The Rwenzoris are unlike anywhere else on the continent: equatorial snow and glaciers above 5,000m, giant lobelias and 'everlasting flowers' in an afro-alpine zone found almost nowhere else on earth, and — for those who complete the full ascent — Margherita Peak, Africa's third-highest summit. The Kilembe Trail climbs through five distinct vegetation zones, supported throughout by a professional mountain guide, porters, and cook.",
      "This is a genuinely strenuous itinerary and good baseline fitness matters — multiple consecutive days of 5–8 hours' hiking at altitude, often in wet and cold conditions. We'll talk through preparation, kit, and pacing with you well before departure. Every leg of the trip is private and led by an expert guide, built around your dates.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "17 Days / 16 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks & Ranges", value: "Bwindi · Rwenzori Mountains · Kibale" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Trek Grade", value: "Strenuous — multi-day, high altitude" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "One unforgettable hour with a habituated mountain gorilla family in Bwindi Impenetrable Forest",
      "Chimpanzee tracking in Kibale Forest, Africa's primate capital",
      "A ten-day trek along the Kilembe Trail into the Rwenzori Mountains",
      "A summit attempt on Margherita Peak (5,109m), Africa's third-highest point",
      "Pass through five vegetation zones — montane forest, bamboo, heather, afro-alpine moorland, and glacier",
      "Giant lobelias, 'everlasting flowers,' and rare Albertine Rift wildlife found nowhere else on earth",
      "A stopover at the Equator, standing between the northern and southern hemispheres",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Kampala / Entebbe",
        location: "Kampala / Entebbe, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met by our company representative and transferred to your hotel in Kampala or Entebbe.",
          "The rest of the day is yours to rest after your flight. In the evening, your guide joins you for a welcome dinner and briefing on the journey ahead.",
        ],
        accommodation: LODGES.kampala,
        meals: "Dinner",
      },
      {
        label: "Days 2–3",
        title: "To Bwindi via the Equator — Gorilla Tracking",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "2 nights",
        body: [
          "An early breakfast and a long, scenic drive south-west to Bwindi Impenetrable National Park. En route you'll stop at the Equator to stand between the Northern and Southern Hemispheres for photographs.",
          "The next morning, head into Bwindi — the bird-watcher's paradise, holding 348 recorded bird species and around 90% of all Albertine Rift endemics — for a day of gorilla tracking. After a briefing at park headquarters, trackers and rangers lead you through the forest to a habituated gorilla family for an unforgettable hour in their company.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 4",
        title: "Drive to Kyanjuki / Kilembe",
        location: "Kilembe, Uganda",
        nights: "1 night",
        body: [
          "Drive north to Kyanjuki and the trailhead town of Kilembe, on the eastern flank of the Rwenzori Mountains. This is your last night with a real bed and hot shower before the trek — rest up, and go through final kit checks with your mountain guide.",
        ],
        accommodation: LODGES.fortPortal,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 5",
        title: "Trailhead to Sine Camp",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "Your Rwenzori trek begins at the Kilembe trailhead, climbing steadily through montane forest alive with birdsong, colobus, and blue monkeys en route to Sine Camp.",
        ],
        accommodation: "Sine Camp (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 6",
        title: "Sine Camp to Kalalama Camp",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "The trail climbs out of the montane forest into bamboo and giant heather, with the first real views back over the Kasese plains opening up as you reach Kalalama Camp.",
        ],
        accommodation: "Kalalama Camp (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 7",
        title: "Kalalama Camp to Mutinda Camp",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "A shorter day built in for acclimatisation, with an optional side trip up to Mutinda Lookout for sweeping views over the valley below. Overnight at Mutinda Camp, on the edge of the afro-alpine zone.",
        ],
        accommodation: "Mutinda Camp (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 8",
        title: "Mutinda Camp to Bugata Camp",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "Cross the Bamwanjara Pass into true afro-alpine moorland — the realm of giant lobelias and the extraordinary 'everlasting flowers' that give the Rwenzoris their otherworldly reputation — before descending to Bugata Camp.",
        ],
        accommodation: "Bugata Camp (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 9",
        title: "Bugata Camp to Bujuku Camp",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "Descend through the tussocked wetlands of Bigo Bog into the dramatic Bujuku Valley, hemmed in by the peaks of Mounts Baker, Speke, and Stanley. Overnight at Bujuku Camp, beneath the glaciers proper.",
        ],
        accommodation: "Bujuku Camp (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 10",
        title: "Bujuku Camp to Elena Hut",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "A steep, rocky climb up to Elena Hut, the high camp beneath the Stanley Glaciers, in position for a pre-dawn summit push. Gear check, briefing, and an early night.",
        ],
        accommodation: "Elena Hut (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 11",
        title: "Summit Day — Margherita Peak",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "The day of the climb. Setting off well before dawn, you'll cross the Stanley Plateau and the remaining glacier — via ferrata sections and fixed ropes assist the final scramble — to reach Margherita Peak (5,109m), Africa's third-highest summit, as the sun rises over the Rift Valley.",
          "Descend to Kitandara Camp, beside its twin glacial lakes, for a well-earned rest.",
        ],
        accommodation: "Kitandara Camp (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 12",
        title: "Kitandara Camp to Guy Yeoman Camp",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "Cross the Scott Elliot Pass and begin the long descent, dropping back through moorland and heather to Guy Yeoman Camp.",
        ],
        accommodation: "Guy Yeoman Camp (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 13",
        title: "Guy Yeoman Camp to Samalira Camp",
        location: "Rwenzori Mountains, Uganda",
        nights: "1 night",
        body: [
          "Back down through bamboo forest and the last of the high country to Samalira Camp, with legs and lungs feeling the previous day's descent.",
        ],
        accommodation: "Samalira Camp (Rwenzori Kilembe Trail)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 14",
        title: "Descend to Kilembe",
        location: "Kilembe, Uganda",
        nights: "1 night",
        body: [
          "A final morning's walk brings you back down through montane forest to the Kilembe trailhead. Farewell your mountain crew, then transfer into Kasese or Fort Portal for a hot shower, a real bed, and a celebratory dinner.",
        ],
        accommodation: LODGES.fortPortal,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 15–16",
        title: "Kibale Forest — Chimpanzee Tracking",
        location: "Kibale Forest NP, Uganda",
        nights: "2 nights",
        body: [
          "Continue to Kibale Forest National Park, just east of the Rwenzoris near Fort Portal — the primate capital of East Africa, with the highest density and diversity of primates on the continent.",
          "Set out on foot to track a habituated chimpanzee community through the forest, and round out the visit with an afternoon swamp walk in Bigodi, rich in monkeys, birdlife, and other forest primates including Red Colobus, L'Hoest's Monkey, and the Black-and-White Colobus.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 17",
        title: "Return to Kampala / Entebbe & Departure",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "After breakfast, drive back to Kampala or Entebbe for your onward or international flight — expedition complete.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "16 nights' accommodation — lodges before and after the trek, full-board camping on the mountain",
      "All meals as indicated in the itinerary (B/L/D), including all meals during the trek",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle for all road transport",
      "All fuel and bottled water in the vehicle",
      "1 gorilla trekking permit per person (Bwindi Impenetrable National Park)",
      "1 chimpanzee tracking permit per person (Kibale Forest National Park)",
      "Rwenzori Mountains National Park trekking permit, park fees, and rescue-fee contribution",
      "Professional mountain guide, porters, and cook for the full 10-day trek",
      "All camping equipment and hut/camp accommodation on the mountain",
      "All national park entrance fees for parks visited",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance — must include high-altitude trekking and evacuation cover",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Personal trekking gear (boots, sleeping bag, cold-weather clothing) and any equipment rental",
      "A porter for gorilla trekking (optional — carries your daypack)",
      "Optional Batwa community visit at Bwindi",
      "Tips and gratuities for your driver-guide and mountain crew (guide, porters, cook)",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.bwindi, location: "Bwindi Impenetrable NP, Uganda", nights: "2 nights" },
      { name: "Elena Hut", location: "Rwenzori Mountains (high camp)", nights: "1 night" },
      { name: LODGES.kibale, location: "Kibale Forest NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-birding-safari",
    title: "Uganda Gorilla & Birding Safari",
    subtitle:
      "450+ species, shoebills, chimpanzees, and a morning with the mountain gorillas",
    excerpt:
      "Seventeen days across Uganda's richest birding circuits — Budongo, Semuliki, the Kazinga Channel, and the Mabamba shoebill swamps — anchored by chimpanzee tracking in Kibale and gorilla trekking in Bwindi.",
    country: "Uganda",
    duration: "17 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #2f5d4a, #0e2a20)",
    badge: "Birder's Choice",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "With over 1,050 recorded species in one country, Uganda is East Africa's single richest birding destination — and this seventeen-day circuit is built to prove it. From the forest specials of Budongo and Semuliki to the wetland spectacle of the Kazinga Channel and Mabamba Swamp's shoebills, this trip strings together Uganda's best birding sites into one continuous journey.",
      "It's not birding alone, though — Kibale's chimpanzee tracking and a morning with a habituated mountain gorilla family in Bwindi are woven into the route, along with game drives in Murchison Falls and Queen Elizabeth National Parks. Whether you're chasing a life list or simply want the fullest possible picture of Uganda's wildlife, this itinerary delivers both quantity and quality.",
      "A specialist birding guide joins your driver-guide at the key sites, and every departure is private — paced around you rather than a fixed group.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "17 Days / 16 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks & Reserves", value: "Murchison Falls · Semuliki · Kibale · Queen Elizabeth · Bwindi · L. Mburo" },
      { label: "Species Potential", value: "450+ recorded on this route" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Forest birding in Budongo and a boat safari beneath Murchison Falls",
      "Semuliki National Park — an outlier of the Congo's Ituri forest and one of Africa's richest birding sites",
      "Chimpanzee tracking in Kibale Forest",
      "Kazinga Channel boat cruise and chimpanzee search at Kyambura Gorge in Queen Elizabeth National Park",
      "One unforgettable hour with a habituated mountain gorilla family in Bwindi Impenetrable Forest",
      "Shoebill stork encounters by dugout canoe in the Mabamba Swamp",
      "Lake Mburo's savanna birdlife, including Papyrus Gonolek and the Bare-faced Go-away-bird",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Entebbe",
        location: "Entebbe, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival at Entebbe International Airport and transferred to your lakeside hotel.",
          "Settle in over a welcome dinner and trip briefing with your guide.",
        ],
        accommodation: LODGES.entebbe,
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "To Budongo Forest",
        location: "Budongo Forest, Uganda",
        nights: "1 night",
        body: [
          "After an early breakfast, drive north toward Murchison Falls Conservation Area, arriving at Budongo Forest in time for an afternoon birding walk — one of Uganda's best sites for forest specials, including the elusive Puvel's Illadopsis and Chocolate-backed Kingfisher.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Budongo Forest — Full-Day Birding",
        location: "Budongo Forest, Uganda",
        nights: "1 night",
        body: [
          "A full day tracking Budongo's forest specialities with a specialist guide: Ituri Batis, Yellow-footed Flycatcher, Nahan's Francolin, and — with patience — the White-thighed Hornbill among a long list of Guinea-Congo forest birds found almost nowhere else in East Africa.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 4",
        title: "Murchison Falls National Park",
        location: "Murchison Falls NP, Uganda",
        nights: "1 night",
        body: [
          "A game drive across the Buligi plains — home to lion, elephant, and giraffe — followed by a boat safari to the base of the Falls, where the Nile forces its way through a 7-metre gorge. Birding along the way turns up Rock Pratincole, a mixed flock of swifts, African Pied Wagtail, Saddle-billed Stork, and Dark Chanting Goshawk, with a chance of the near-mythical Shoebill on the papyrus fringes.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 5",
        title: "Top of the Falls & Drive to Hoima",
        location: "Murchison Falls NP → Hoima, Uganda",
        nights: "1 night",
        body: [
          "A morning walk to the top of Murchison Falls, watching the Nile drop 45 metres through the gorge below, before heading south toward Hoima. Birding stops along the way may reveal Olive-bellied and Copper Sunbird and Compact Weaver.",
        ],
        accommodation: LODGES.hoima,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 6",
        title: "Hoima to Fort Portal",
        location: "Fort Portal, Uganda",
        nights: "1 night",
        body: [
          "Continue south through Uganda's scenic crater-lake country to Fort Portal, with birding stops en route.",
        ],
        accommodation: LODGES.fortPortal,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 7",
        title: "Semuliki National Park",
        location: "Semuliki NP, Uganda",
        nights: "1 night",
        body: [
          "Semuliki is an eastern outlier of the vast Ituri Forest in the Democratic Republic of Congo, and one of the richest sites for both flora and fauna in Africa — especially birds. A full day exploring its lowland forest and hot springs.",
        ],
        accommodation: LODGES.fortPortal,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 8",
        title: "Kibale Forest — Chimpanzee Tracking",
        location: "Kibale Forest NP, Uganda",
        nights: "1 night",
        body: [
          "Kibale holds the highest density of primates in Africa. Track a habituated chimpanzee community through the forest, alongside Red Colobus, Red-tailed Guenon, Grey-cheeked Mangabey, and L'Hoest's Monkey.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 9",
        title: "Queen Elizabeth National Park",
        location: "Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "A morning game drive across the Kasenyi plains, then an afternoon chimpanzee search on foot in Kyambura Gorge — the 'Valley of Apes' — a forested rift cutting through the open savanna.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 10",
        title: "Kazinga Channel Boat Safari",
        location: "Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "A boat cruise along the Kazinga Channel, past some of Africa's densest hippo pods and elephant herds drinking at the banks, with craters carved into the surrounding hills and the endless Ishasha plains — whose fig trees hide the park's famous tree-climbing lions — visible in the distance.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 11–12",
        title: "Gorilla Tracking in Bwindi Impenetrable Forest",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "2 nights",
        body: [
          "Travel south to Bwindi — the bird-watcher's paradise, holding 348 recorded species and around 90% of all Albertine Rift endemics, among them the Short-tailed Warbler, Rusty-faced Woodland Warbler, and Bar-tailed Trogon.",
          "The next morning, set out with rangers and trackers for your gorilla trek, spending an unforgettable hour with a habituated family deep in the forest. An optional visit to a local Batwa community can be arranged for those interested.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 13",
        title: "Lake Bunyonyi & Echuya Forest",
        location: "Lake Bunyonyi, Uganda",
        nights: "1 night",
        body: [
          "Wind down at Lake Bunyonyi — the 'place of little birds' — ringed by terraced hills and dotted with 29 islands. Echuya Forest nearby is a stronghold for Albertine Rift endemics including Turner's Eremomela and the rare Chapin's Flycatcher.",
        ],
        accommodation: LODGES.lakeBunyonyi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 14–15",
        title: "Lake Mburo National Park",
        location: "Lake Mburo NP, Uganda",
        nights: "2 nights",
        body: [
          "Drive through Uganda's rolling south-west to Lake Mburo National Park, entering through the Nshara Gate. An afternoon game drive along the lakeshore track and the Kigambara Loop turns up zebra, eland, buffalo, and easily approached impala and topi.",
          "A second day gives time for a boat trip on the lake and a guided walk — Lake Mburo holds over 250 recorded bird species, including Papyrus Gonolek, Brown-chested Lapwing, Carruthers's Cisticola, and the striking White-winged Warbler.",
        ],
        accommodation: LODGES.lakeMburo,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 16",
        title: "Mabamba Swamp Shoebill Safari",
        location: "Mabamba Swamp → Entebbe, Uganda",
        nights: "1 night",
        body: [
          "Drive north toward Kampala, stopping at the Mabamba Swamp — a Ramsar wetland site holding an estimated population of Shoebill Storks. Explore by dugout canoe, alongside Goliath and Purple Heron, African Water Rail, Papyrus Gonolek, and the strange, prehistoric-looking Shoebill itself. Continue on to Entebbe for the night.",
        ],
        accommodation: LODGES.entebbe,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 17",
        title: "Entebbe Botanical Gardens & Departure",
        location: "Entebbe, Uganda",
        body: [
          "A final, relaxed morning walk through the Entebbe Botanical Gardens on the shore of Lake Victoria — a superb last stop for Sunbirds, Turacos, and the raucous Woodland Kingfisher — before transferring to the airport for your international flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "16 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and a specialist birding guide at key sites",
      "Transport in a 4×4 pop-up-roof safari vehicle, plus all fuel and bottled water",
      "1 gorilla trekking permit per person (Bwindi Impenetrable National Park)",
      "1 chimpanzee tracking permit per person (Kibale Forest National Park)",
      "Chimpanzee search permit at Kyambura Gorge (Queen Elizabeth National Park)",
      "Budongo Forest guided birding walk fees",
      "Kazinga Channel boat cruise and Mabamba Swamp community canoe fee",
      "All national park and reserve entrance fees for parks visited",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "A porter for gorilla trekking (optional — carries your daypack)",
      "Optional Batwa community visit at Bwindi",
      "Tips and gratuities for driver-guide, birding guide, and hotel staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.murchisonFalls, location: "Murchison Falls NP, Uganda", nights: "3 nights" },
      { name: LODGES.queenElizabeth, location: "Queen Elizabeth NP, Uganda", nights: "2 nights" },
      { name: LODGES.bwindi, location: "Bwindi Impenetrable NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-complete-gorilla-wildlife-safari",
    title: "Complete Uganda Gorilla & Wildlife Safari",
    subtitle: "Adventure, waterfalls, and Uganda's big three national parks in one grand circuit",
    excerpt:
      "Seventeen days covering the very best of Uganda — Nile adventure in Jinja, waterfall hikes at Sipi Falls, Murchison Falls, Kibale's chimpanzees, Queen Elizabeth's game drives, and gorilla trekking in Bwindi.",
    country: "Uganda",
    duration: "17 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #7a5a2a, #2a1a08)",
    badge: "Complete Uganda",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "This is the flagship Uganda circuit — the fullest possible picture of the country in seventeen days. It opens with adventure on the Nile at Jinja and waterfall hikes at Sipi Falls, then works its way through Uganda's 'big three' savanna and forest parks: Murchison Falls, Kibale, and Queen Elizabeth, before the trip's centrepiece — a morning with the mountain gorillas of Bwindi Impenetrable Forest.",
      "Along the way you'll cross the Equator, cruise beneath one of Africa's most powerful waterfalls, track chimpanzees on foot, watch elephants drink from the Kazinga Channel, and unwind for two nights on the terraced shores of Lake Bunyonyi. It's a journey built for travellers who want it all — adventure, primates, big game, and scenery — in one seamless trip.",
      "Every departure is private and led by an expert Ugandan driver-guide, with the itinerary shaped around your dates and pace rather than a fixed group schedule.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "17 Days / 16 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks", value: "Murchison Falls · Kibale · Queen Elizabeth · Bwindi" },
      { label: "Adventure Add-ons", value: "Source of the Nile (Jinja) · Sipi Falls" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Optional white-water rafting, kayaking, and adventure activities at the Source of the Nile in Jinja",
      "Guided waterfall hikes and a coffee tour around Sipi Falls on the slopes of Mount Elgon",
      "Game drives and a boat safari beneath Murchison Falls, Uganda's most powerful waterfall",
      "Chimpanzee tracking and a swamp walk in Kibale Forest",
      "Game drives and a Kazinga Channel boat cruise in Queen Elizabeth National Park",
      "One unforgettable hour with a habituated mountain gorilla family in Bwindi Impenetrable Forest",
      "Two nights unwinding on the terraced, island-dotted shores of Lake Bunyonyi",
      "A stopover at the Equator, standing between the Northern and Southern Hemispheres",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Kampala",
        location: "Kampala, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and transferred into Kampala for a guided city tour — sights can include the Kasubi Tombs, a UNESCO World Heritage Site, and the bustling craft markets of the capital.",
        ],
        accommodation: LODGES.kampala,
        meals: "Dinner",
      },
      {
        label: "Days 2–3",
        title: "Jinja & the Source of the Nile",
        location: "Jinja, Uganda",
        nights: "2 nights",
        body: [
          "Drive east to Jinja, where the Nile begins its 6,600km journey to the Mediterranean. Two days here are yours to fill with optional adventure activities — white-water rafting, kayaking, quad-biking, horseback riding, or a sunset boat cruise to the river's source — all available at a supplement.",
        ],
        accommodation: LODGES.jinja,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 4–5",
        title: "Sipi Falls",
        location: "Sipi Falls, Uganda",
        nights: "2 nights",
        body: [
          "Continue to Sipi Falls on the foothills of Mount Elgon, where a series of three waterfalls tumbles through coffee-growing hillsides. Guided hikes take you to each of the falls, with a local Arabica coffee tour — from bean to cup — rounding out the stay.",
        ],
        accommodation: LODGES.sipiFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 6",
        title: "To Murchison Falls National Park",
        location: "Murchison Falls NP, Uganda",
        nights: "1 night",
        body: [
          "Drive west to Murchison Falls National Park, Uganda's largest, arriving in time for an evening sunset cruise on the Nile or a visit to the top of the falls as the light fades.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 7",
        title: "Game Drive & Boat Safari",
        location: "Murchison Falls NP, Uganda",
        nights: "1 night",
        body: [
          "A morning game drive across the Buligi plains, home to lion, elephant, giraffe, and buffalo, followed by a three-hour launch trip past hippo pods and crocodiles to the base of the mighty falls.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 8",
        title: "Top of the Falls & Drive to Hoima",
        location: "Murchison Falls NP → Hoima, Uganda",
        nights: "1 night",
        body: [
          "A morning walk to the top of Murchison Falls, watching the Nile thunder through a 7-metre gap before dropping 43 metres into the gorge, then drive south to Hoima.",
        ],
        accommodation: LODGES.hoima,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 9",
        title: "To Kibale Forest National Park",
        location: "Kibale Forest NP, Uganda",
        nights: "1 night",
        body: [
          "Continue south through rolling tea plantations to Kibale Forest National Park, home to the highest density of primates in Africa.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 10",
        title: "Chimpanzee Tracking & Swamp Walk",
        location: "Kibale Forest NP, Uganda",
        nights: "1 night",
        body: [
          "Track a habituated chimpanzee community through the forest in the morning, then take an afternoon swamp walk in nearby Bigodi, rich in monkeys, birdlife, and wetland flora.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 11",
        title: "Fort Portal & Queen Elizabeth Game Drive",
        location: "Fort Portal → Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "Visit Fort Portal and its scenic crater lakes before continuing into Queen Elizabeth National Park for an afternoon game drive across its open savanna.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 12",
        title: "Kazinga Channel Boat Safari",
        location: "Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "A further morning game drive, then a boat cruise along the Kazinga Channel — past some of Africa's densest hippo and elephant concentrations, with the crater-studded hills and endless Ishasha plains, home to Uganda's tree-climbing lions, visible in the distance.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 13",
        title: "To Bwindi Impenetrable Forest",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "1 night",
        body: [
          "A scenic drive through the terraced hills of the Kigezi highlands — often called the 'Switzerland of Africa' — to Bwindi, arriving in time to rest before the trek ahead.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 14",
        title: "Gorilla Tracking in Bwindi",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "1 night",
        body: [
          "The day you came for. After a briefing at park headquarters, trackers and rangers lead you through the forest to a habituated gorilla family for an unforgettable hour in their company.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 15–16",
        title: "Lake Bunyonyi",
        location: "Lake Bunyonyi, Uganda",
        nights: "2 nights",
        body: [
          "Wind down at Lake Bunyonyi — the 'place of little birds' — ringed by terraced hills and dotted with 29 islands. Swim, canoe, take an island boat trip, or simply relax after an action-packed week.",
        ],
        accommodation: LODGES.lakeBunyonyi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 17",
        title: "Return to Kampala / Entebbe & Departure",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "Drive back toward Kampala or Entebbe, stopping at the Equator to stand between the Northern and Southern Hemispheres for photographs, before transferring to the airport for your international flight.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "16 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "1 gorilla trekking permit per person (Bwindi Impenetrable National Park)",
      "1 chimpanzee tracking permit per person (Kibale Forest National Park)",
      "Guided waterfall hikes and coffee tour at Sipi Falls",
      "Murchison Falls boat safari and Kazinga Channel boat cruise",
      "All national park and conservation fees for parks visited",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Optional adventure activities in Jinja (white-water rafting, kayaking, quad-biking, bungee jumping, etc.) — available at a supplement",
      "A porter for gorilla trekking (optional — carries your daypack)",
      "Tips and gratuities for driver-guide and hotel staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.murchisonFalls, location: "Murchison Falls NP, Uganda", nights: "2 nights" },
      { name: LODGES.queenElizabeth, location: "Queen Elizabeth NP, Uganda", nights: "2 nights" },
      { name: LODGES.bwindi, location: "Bwindi Impenetrable NP, Uganda", nights: "1 night" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-primates-safari",
    title: "Uganda Gorilla & Primates Safari",
    subtitle: "Rhinos, chimpanzees, tree-climbing lions, and mountain gorillas in one classic circuit",
    excerpt:
      "Thirteen days through Uganda's finest wildlife circuit — a rhino tracking walk at Ziwa, game drives and a boat safari in Murchison Falls, chimpanzee tracking in Kibale, Queen Elizabeth's Kazinga Channel, and gorilla trekking in Bwindi.",
    country: "Uganda",
    duration: "13 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #5a4a7a, #1a1030)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "This is Uganda's classic wildlife circuit, condensed into thirteen well-paced days. It opens with a guided rhino tracking walk at Ziwa — Uganda's only wild rhino population — before moving into Murchison Falls National Park for game drives and a boat safari beneath the country's most powerful waterfall.",
      "From there the route runs south through Kibale Forest for chimpanzee tracking, into Queen Elizabeth National Park for game drives and a Kazinga Channel boat cruise, and on to Bwindi Impenetrable Forest for the trip's centrepiece — a morning with a habituated mountain gorilla family. A canoe trip on Lake Mutanda and two unwinding nights on Lake Bunyonyi close out the journey.",
      "Every departure is private and led by an expert Ugandan driver-guide, built around your dates and pace rather than a fixed group schedule.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "13 Days / 12 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks", value: "Murchison Falls · Kibale · Queen Elizabeth · Bwindi" },
      { label: "Also Visits", value: "Ziwa Rhino Sanctuary · Lake Mutanda · Lake Bunyonyi" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "A guided rhino tracking walk at Ziwa Rhino Sanctuary, home to Uganda's only wild rhino population",
      "Game drives and a boat safari beneath Murchison Falls",
      "Chimpanzee tracking and a swamp walk in Kibale Forest",
      "Game drives and a Kazinga Channel boat cruise in Queen Elizabeth National Park, home to ten primate species and over 600 bird species",
      "One unforgettable hour with a habituated mountain gorilla family in Bwindi Impenetrable Forest",
      "A canoe trip on Lake Mutanda, with views of the distant Virunga volcanoes",
      "Two nights unwinding on the terraced, island-dotted shores of Lake Bunyonyi",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Kampala / Entebbe",
        location: "Kampala / Entebbe, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and transferred to your hotel in Kampala or Entebbe to rest after your flight.",
          "In the evening, your guide joins you for a welcome dinner and briefing on the days ahead.",
        ],
        accommodation: LODGES.kampala,
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "Ziwa Rhino Sanctuary to Murchison Falls",
        location: "Ziwa Rhino Sanctuary → Murchison Falls NP, Uganda",
        nights: "1 night",
        body: [
          "Set off for Murchison Falls, branching off near Nakitoma–Nakasongola for a guided tracking walk at Ziwa Rhino Sanctuary — home to Uganda's only wild population of southern white rhino, part of an ongoing reintroduction programme.",
          "Continue to the park, checking in to your accommodation in time for a sunset cruise on the Nile or a visit to the top of the falls as the light fades.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Game Drive & Boat Safari",
        location: "Murchison Falls NP, Uganda",
        nights: "1 night",
        body: [
          "A morning game drive across the Buligi plains — home to lion, elephant, giraffe, and other wildlife — followed by a three-hour launch trip to the base of the falls, cruising past hippo pods, crocodiles, and bathing buffalo.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 4",
        title: "Game Drive & Top of the Falls",
        location: "Murchison Falls NP, Uganda",
        nights: "1 night",
        body: [
          "An early game drive across the park's rolling plains, watching for lion, hartebeest, buffalo, and elephant, plus birds such as the Secretary Bird, Black-chested Snake Eagle, and — with luck — the Shoebill.",
          "In the afternoon, walk to the top of Murchison Falls, where the Nile forces its way through a 7-metre gap before plunging 43 metres into Lake Albert.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 5",
        title: "To Kibale Forest National Park",
        location: "Kibale Forest NP, Uganda",
        nights: "1 night",
        body: [
          "Drive south to Kibale, one of Uganda's loveliest tracts of tropical forest — cover interspersed with grassland and swamp across an elevated plateau.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 6",
        title: "Chimpanzee Tracking & Swamp Walk",
        location: "Kibale Forest NP, Uganda",
        nights: "1 night",
        body: [
          "Kibale holds the highest density of primates in Africa. Track a habituated chimpanzee community through the forest, then take an afternoon swamp walk in Bigodi, home to Red Colobus, Red-tailed Guenon, Grey-cheeked Mangabey, and L'Hoest's Monkey.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 7",
        title: "Queen Elizabeth National Park",
        location: "Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "Uganda's most popular reserve, with ecosystems ranging from savanna to forest to fertile wetlands — ideal habitat for classic big game, ten primate species, and over 600 bird species. Afternoon game drive, with an optional chimpanzee search on foot in Kyambura Gorge.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 8",
        title: "Kazinga Channel Boat Safari",
        location: "Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "A further game drive, then a boat cruise along the Kazinga Channel, past dense elephant and hippo concentrations, with craters carved into the surrounding hills and the Ishasha plains — home to the park's tree-climbing lions — visible in the distance.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 9–10",
        title: "Gorilla Tracking & Lake Mutanda",
        location: "Bwindi Impenetrable Forest & Lake Mutanda, Uganda",
        nights: "2 nights",
        body: [
          "Drive with a packed lunch to Bwindi Impenetrable National Park, arriving in the late afternoon and checking into your lodge.",
          "The next morning, set out with rangers and trackers for your gorilla trek — an unforgettable hour with a habituated family deep in the forest — before an afternoon canoe trip on nearby Lake Mutanda, with views toward the distant Virunga volcanoes.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 11–12",
        title: "Lake Bunyonyi & Echuya Forest",
        location: "Lake Bunyonyi, Uganda",
        nights: "2 nights",
        body: [
          "Wind down at Lake Bunyonyi — the 'place of little birds' — a restorative spot ringed by terraced hills and dotted with 29 islands. Two nights here give time to swim, canoe, visit the islands, or simply rest after an active week, with Echuya Forest nearby for those wanting a final morning of birding.",
        ],
        accommodation: LODGES.lakeBunyonyi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 13",
        title: "Equator Stop & Departure",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "On the drive back, stop at the Equator to stand between the Northern and Southern Hemispheres for photographs, before continuing to Kampala or Entebbe for your international flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "12 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "1 gorilla trekking permit per person (Bwindi Impenetrable National Park)",
      "1 chimpanzee tracking permit per person (Kibale Forest National Park)",
      "Ziwa Rhino Sanctuary guided tracking walk and sanctuary fee",
      "Lake Mutanda canoe trip",
      "Murchison Falls boat safari and Kazinga Channel boat cruise",
      "All national park entrance fees for parks visited",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Chimpanzee search permit at Kyambura Gorge (optional add-on)",
      "A porter for gorilla trekking (optional — carries your daypack)",
      "Optional Batwa community visit at Bwindi",
      "Tips and gratuities for driver-guide and hotel staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.murchisonFalls, location: "Murchison Falls NP, Uganda", nights: "3 nights" },
      { name: LODGES.kibale, location: "Kibale Forest NP, Uganda", nights: "2 nights" },
      { name: LODGES.bwindi, location: "Bwindi Impenetrable NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-chimpanzee-express-safari",
    title: "Uganda Gorilla & Chimpanzee Express Safari",
    subtitle: "Uganda's essential primate circuit, condensed into eight days",
    excerpt:
      "A fast-paced introduction to Uganda's best — chimpanzee tracking in Kibale, game drives and a Kazinga Channel cruise in Queen Elizabeth, and a morning with the mountain gorillas of Bwindi.",
    country: "Uganda",
    duration: "8 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #6a3a3a, #240f0f)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "For travellers short on time but not on ambition, this eight-day express safari distills Uganda's essential wildlife encounters into one efficient loop: chimpanzees in Kibale, big game and water birds in Queen Elizabeth National Park, and — the trip's centrepiece — a morning with a habituated mountain gorilla family in Bwindi Impenetrable Forest.",
      "Gorilla permits limit each trek to a maximum of eight visitors per family, keeping the encounter intimate and low-impact however many people are on the road with you. Every departure on this route is private and paced by an expert driver-guide, so eight days never feels rushed.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks", value: "Kibale · Queen Elizabeth · Bwindi" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
      { label: "Style", value: "Private guided · Lodge safari · Fast-paced" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Chimpanzee tracking in Kibale Forest, Africa's primate capital",
      "Game drives and a Kazinga Channel boat cruise in Queen Elizabeth National Park",
      "A second chimpanzee search on foot at Kyambura Gorge, the 'Valley of Apes'",
      "One unforgettable hour with a habituated mountain gorilla family in Bwindi — permits capped at 8 visitors per family",
      "Ishasha's tree-climbing lions on the open plains of Queen Elizabeth National Park",
      "A stopover at the Equator, standing between the Northern and Southern Hemispheres",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Kampala / Entebbe",
        location: "Kampala / Entebbe, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and transferred to your hotel in Kampala or Entebbe. The rest of the day is yours to rest after your flight.",
        ],
        accommodation: LODGES.kampala,
        meals: "Dinner",
      },
      {
        label: "Days 2–3",
        title: "Kibale Forest — Chimpanzee Tracking",
        location: "Kibale Forest NP, Uganda",
        nights: "2 nights",
        body: [
          "Drive to Kibale Forest National Park, just east of the Rwenzori Mountains near Fort Portal. Kibale holds excellent chimpanzee tracking thanks to several walking trails and a large number of resident chimp communities, alongside a wonderfully diverse concentration of other primates — Red Colobus, Red-tailed Guenon, Grey-cheeked Mangabey, Blue Monkey, L'Hoest's Monkey, and the Black-and-White Colobus, plus Olive Baboons and nocturnal Pottos.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 4–5",
        title: "Queen Elizabeth National Park",
        location: "Queen Elizabeth NP, Uganda",
        nights: "2 nights",
        body: [
          "Queen Elizabeth's magnificent vistas take in dozens of craters carved into rolling green hills, panoramic views of the Kazinga Channel with its banks lined by elephants, and the endless Ishasha plains, whose fig trees hide lions ready to pounce on unsuspecting Uganda kob.",
          "A game drive and Kazinga Channel boat cruise are paired with a chimpanzee search on foot at Kyambura Gorge — the 'Valley of Apes' — for a second primate encounter alongside the park's big game.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 6–7",
        title: "Gorilla Tracking in Bwindi Impenetrable Forest",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "2 nights",
        body: [
          "The highlight of your safari: an encounter with the giant gorillas of Bwindi. Expect to walk a long distance over steep and muddy conditions, sometimes with rain overhead, before you find them — but it's worthwhile the moment you're watching them eat, play, and rest at close range.",
          "A second day allows for an optional visit to a local Batwa community, or a further gorilla trek subject to permit availability.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 8",
        title: "Equator Stop & Departure",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "On your way back, stop at the Equator to stand between the Northern and Southern Hemispheres for photographs, before continuing to Kampala or Entebbe for your flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "7 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "1 gorilla trekking permit per person (Bwindi Impenetrable National Park)",
      "1 chimpanzee tracking permit per person (Kibale Forest National Park)",
      "Chimpanzee search permit at Kyambura Gorge (Queen Elizabeth National Park)",
      "Kazinga Channel boat cruise",
      "All national park entrance fees for parks visited",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "A porter for gorilla trekking (optional — carries your daypack)",
      "Optional Batwa community visit at Bwindi",
      "Tips and gratuities for driver-guide and hotel staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.kibale, location: "Kibale Forest NP, Uganda", nights: "2 nights" },
      { name: LODGES.queenElizabeth, location: "Queen Elizabeth NP, Uganda", nights: "2 nights" },
      { name: LODGES.bwindi, location: "Bwindi Impenetrable NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-lake-bunyonyi-safari",
    title: "Uganda Gorilla Safari & Lake Bunyonyi Retreat",
    subtitle: "Chimps, big game, gorillas, and two nights unwinding on East Africa's most beautiful lake",
    excerpt:
      "Ten days through Kibale, Queen Elizabeth, and Bwindi for chimpanzees, game drives, and gorilla trekking, finishing with two restorative nights on the terraced shores of Lake Bunyonyi.",
    country: "Uganda",
    duration: "10 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #3a5a6a, #0f1f2a)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "This ten-day circuit runs the length of Uganda's classic primate-and-wildlife route — chimpanzee tracking in Kibale, game drives and a Kazinga Channel cruise in Queen Elizabeth National Park, and a morning with a habituated mountain gorilla family in Bwindi — then adds something most itineraries skip: real time to unwind.",
      "The final two nights are spent on Lake Bunyonyi, the 'place of little birds,' a mirror-still lake ringed by terraced hills and dotted with 29 islands. After a week of early starts and forest treks, it's built in as a deliberate pause before you fly home.",
      "Every departure is private and led by an expert Ugandan driver-guide, shaped around your dates rather than a fixed group schedule.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "10 Days / 9 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks", value: "Kibale · Queen Elizabeth · Bwindi" },
      { label: "Also Visits", value: "Lake Bunyonyi & Echuya Forest" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Chimpanzee tracking in Kibale Forest",
      "Game drives, a Kazinga Channel boat cruise, and a Kyambura Gorge chimpanzee search in Queen Elizabeth National Park",
      "One unforgettable hour with a habituated mountain gorilla family in Bwindi — permits capped at 8 visitors per family",
      "An optional Batwa community visit or second gorilla trek in Bwindi",
      "Two restorative nights on the terraced, island-dotted shores of Lake Bunyonyi",
      "Birding in Echuya Forest, a stronghold for Albertine Rift endemics",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Entebbe / Kampala",
        location: "Entebbe / Kampala, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and transferred to your hotel in Entebbe or Kampala to rest after your flight.",
        ],
        accommodation: LODGES.entebbe,
        meals: "Dinner",
      },
      {
        label: "Days 2–3",
        title: "Kibale Forest — Chimpanzee Tracking",
        location: "Kibale Forest NP, Uganda",
        nights: "2 nights",
        body: [
          "Drive to Kibale Forest National Park, just east of the Rwenzori Mountains near Fort Portal, for excellent chimpanzee tracking along several forest trails and a large number of resident chimp communities — plus Red Colobus, Red-tailed Guenon, Grey-cheeked Mangabey, Blue Monkey, L'Hoest's Monkey, Black-and-White Colobus, Olive Baboons, and nocturnal Pottos.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 4",
        title: "Queen Elizabeth National Park",
        location: "Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "A game drive and Kazinga Channel boat cruise, past craters carved into rolling green hills and the endless Ishasha plains, whose fig trees hide the park's famous tree-climbing lions — paired with a chimpanzee search at Kyambura Gorge, the 'Valley of Apes'.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 5",
        title: "Drive to Bwindi Impenetrable Forest",
        location: "Queen Elizabeth NP → Bwindi, Uganda",
        nights: "1 night",
        body: [
          "After breakfast, drive with a packed lunch en route to Bwindi Impenetrable National Park, arriving in the afternoon and checking into your lodge.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 6–7",
        title: "Gorilla Tracking in Bwindi Impenetrable Forest",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "2 nights",
        body: [
          "Bwindi is the bird-watcher's paradise, holding 348 recorded species and around 90% of all Albertine Rift endemics, among them the Short-tailed Warbler, Rusty-faced Woodland Warbler, and Bar-tailed Trogon.",
          "Set out with rangers and trackers for your gorilla trek, spending an unforgettable hour with a habituated family. An optional visit to a local Batwa community can be arranged on your second day for those interested.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 8–9",
        title: "Lake Bunyonyi & Echuya Forest",
        location: "Lake Bunyonyi, Uganda",
        nights: "2 nights",
        body: [
          "Wind down at Lake Bunyonyi — one is simply awed by its mystical beauty, snaking along the Ugandan landscape, dotted by 29 islands of various shapes and sizes and ringed by terraced farms. Lake Bunyonyi, meaning the 'place of little birds,' is a restorative place — a place of solace, of rest, of quietness, of reflection.",
          "Swim, canoe, take an island boat trip, or spend a final morning birding in nearby Echuya Forest, a stronghold for Albertine Rift endemics.",
        ],
        accommodation: LODGES.lakeBunyonyi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 10",
        title: "Equator Stop & Departure",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "On your way back, stop at the Equator to stand between the Northern and Southern Hemispheres for photographs, before continuing to Kampala or Entebbe for your flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "9 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "1 gorilla trekking permit per person (Bwindi Impenetrable National Park)",
      "1 chimpanzee tracking permit per person (Kibale Forest National Park)",
      "Chimpanzee search permit at Kyambura Gorge (Queen Elizabeth National Park)",
      "Kazinga Channel boat cruise",
      "All national park entrance fees for parks visited",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "A porter for gorilla trekking (optional — carries your daypack)",
      "Optional Batwa community visit at Bwindi",
      "Tips and gratuities for driver-guide and hotel staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.kibale, location: "Kibale Forest NP, Uganda", nights: "2 nights" },
      { name: LODGES.bwindi, location: "Bwindi Impenetrable NP, Uganda", nights: "3 nights" },
      { name: LODGES.lakeBunyonyi, location: "Lake Bunyonyi, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-flyin-safari",
    title: "Uganda Gorilla Fly-In Safari",
    subtitle: "Murchison Falls, Queen Elizabeth, and Bwindi's gorillas — by light aircraft, not long drives",
    excerpt:
      "A time-efficient way to see the very best of Uganda: scheduled light-aircraft flights link Murchison Falls, Queen Elizabeth National Park, and Bwindi, trading long road transfers for scenic flights over the Rift Valley.",
    country: "Uganda",
    duration: "9 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #2a4a6a, #0a1a2a)",
    badge: "Fly-In",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "For travellers who want the best of Uganda without the long road transfers, this nine-day safari links Murchison Falls, Queen Elizabeth National Park, and Bwindi Impenetrable Forest entirely by scheduled light aircraft, touching down on remote airstrips in or beside each park.",
      "The result is more time on the ground and less time on the road: full days of game viewing and gorilla trekking, with a relaxed buffer day back in Entebbe before your international flight rather than a late-night rush to the airport.",
      "Because baggage space on light aircraft is limited, soft-sided bags and a strict weight allowance apply on the domestic flights — we'll send full packing guidance ahead of departure. Every leg is private, guided on the ground at each stop by an expert local driver-guide.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "9 Days / 8 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks", value: "Murchison Falls · Queen Elizabeth · Bwindi" },
      { label: "Style", value: "Private guided · Fly-in safari (scheduled light aircraft)" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
      { label: "Luggage", value: "Soft-sided bags only, ~15kg limit on domestic flights" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Scenic light-aircraft flights over the Rift Valley in place of long road transfers between parks",
      "Game drives and a Nile boat cruise in Murchison Falls National Park",
      "Game drives and a Kazinga Channel boat cruise in Queen Elizabeth National Park, based at Mweya Safari Lodge",
      "One unforgettable hour with a habituated mountain gorilla family in Bwindi Impenetrable Forest",
      "A relaxed buffer day in Entebbe before your international departure",
      "More time on the ground and less time on the road — ideal for travellers short on time",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Entebbe",
        location: "Entebbe, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival by our company representative and transferred to your hotel for dinner and an overnight rest.",
        ],
        accommodation: LODGES.entebbe,
        meals: "Dinner",
      },
      {
        label: "Days 2–3",
        title: "Fly to Murchison Falls National Park",
        location: "Murchison Falls NP, Uganda",
        nights: "2 nights",
        body: [
          "An early morning domestic flight carries you from Entebbe to Pakuba Airstrip, deep inside Murchison Falls National Park. Transfer through the park to your lodge, enjoy lunch on the terrace overlooking the Nile, and head out on an afternoon game drive for your first introduction to Uganda's flora and fauna.",
          "The next morning, an early game drive along the northern bank of the Nile brings chances of giraffe, elephant, lion, hartebeest, and a wealth of birdlife, followed by an afternoon boat cruise on the Nile for close-quarters game viewing.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 4–5",
        title: "Queen Elizabeth National Park",
        location: "Queen Elizabeth NP, Uganda",
        nights: "2 nights",
        body: [
          "Fly via Entebbe to Queen Elizabeth National Park. A morning game drive heads for the mating grounds of the Uganda Kob, searching for lion, elephant, and buffalo, before an afternoon boat cruise along the Kazinga Channel — a natural waterway between Lake Edward and Lake George alive with hippos, buffalo, elephants, and abundant birdlife.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 6–7",
        title: "Bwindi Impenetrable Forest — Gorilla Tracking",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "2 nights",
        body: [
          "A flight to Kisoro Airstrip, followed by a transfer into Bwindi and time to settle in before the day ahead.",
          "The highlight of your safari: gorilla tracking with the giants of Bwindi. Expect to walk a long distance in steep and muddy conditions, sometimes with rain overhead, before you encounter any gorillas — but it's worthwhile the moment you're watching them eat, play, and rest at close range.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 8",
        title: "Fly Back to Entebbe",
        location: "Entebbe, Uganda",
        nights: "1 night",
        body: [
          "Return flight from Kisoro Airstrip to Entebbe. The rest of the day is free — an optional visit to the Entebbe Botanical Gardens or the Uganda Wildlife Education Centre, or simply relax at the hotel before your onward journey.",
        ],
        accommodation: LODGES.entebbe,
        meals: "Breakfast",
      },
      {
        label: "Day 9",
        title: "Departure",
        location: "Entebbe, Uganda",
        body: [
          "Transfer to Entebbe International Airport for your international flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "8 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "All scheduled domestic flights: Entebbe–Murchison Falls–Entebbe–Queen Elizabeth–Kisoro–Entebbe",
      "Private driver-guide and safari vehicle for all game drives and activities at each destination",
      "1 gorilla trekking permit per person (Bwindi Impenetrable National Park)",
      "Murchison Falls Nile boat cruise and Kazinga Channel boat cruise",
      "All national park entrance fees for parks visited",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "A porter for gorilla trekking (optional — carries your daypack)",
      "Excess baggage charges on domestic flights",
      "Tips and gratuities for driver-guides and hotel staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.murchisonFalls, location: "Murchison Falls NP, Uganda", nights: "2 nights" },
      { name: LODGES.queenElizabeth, location: "Queen Elizabeth NP, Uganda", nights: "2 nights" },
      { name: LODGES.bwindi, location: "Bwindi Impenetrable NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "kenya-amboseli-meru-masai-mara-safari",
    title: "Kenya Amboseli, Meru & Masai Mara Safari",
    subtitle: "Elephants beneath Kilimanjaro, a remote rhino sanctuary, and the legendary Masai Mara",
    excerpt:
      "Eight days across three of Kenya's classic reserves — Amboseli's elephant herds under Kilimanjaro, Meru's remote rhino sanctuary, and the Masai Mara's abundant plains game.",
    country: "Kenya",
    duration: "8 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #8a6a2a, #2a1a05)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "Travellers admire the magnificent elephants of Amboseli, enjoy the romance of remote Meru, and explore the untamed wildlife of the Masai Mara on this eight-day adventure through three of Kenya's classic reserves.",
      "Each stop is built around a private conservancy bordering its national park, trading crowded public-park game drives for exclusive traversing rights, walking safaris, and sundowners you won't share with another vehicle. Custom-designed safari vehicles and qualified local guides accompany you throughout.",
      "This is a fully guided journey — accommodation, meals, and safari activities are arranged around you from touchdown at Jomo Kenyatta International Airport to your final departure.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "8 Days / 7 Nights" },
      { label: "Country", value: "Kenya" },
      { label: "Parks & Reserves", value: "Amboseli · Meru · Masai Mara" },
      { label: "Best Time", value: "Jun – Oct (dry season & Migration)" },
      { label: "Nearest Airport", value: "Nairobi (NBO)" },
      { label: "Style", value: "Private guided · Luxury tented camps & conservancies" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Elephant herds against the backdrop of Mount Kilimanjaro in Amboseli",
      "A private conservancy bordering Amboseli National Park, with walking safaris and bush breakfasts",
      "Meru's 21,000-acre rhino sanctuary, home to the Big Five in a remote corner of Kenya",
      "Guided nature walks up Mugwongo Hill in Meru National Park",
      "The Masai Mara's rolling plains, thunderous rivers, and abundant migratory and resident wildlife",
      "Custom-designed safari vehicles and qualified local guides throughout",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Nairobi",
        location: "Nairobi, Kenya",
        nights: "1 night",
        body: [
          "Welcome to Kenya! You're met on arrival at Jomo Kenyatta International Airport and transferred to your Nairobi hotel to rest after your flight.",
        ],
        accommodation: "Luxury hotel — Nairobi (TBC)",
        meals: "Dinner",
      },
      {
        label: "Days 2–3",
        title: "Amboseli National Park",
        location: "Amboseli NP, Kenya",
        nights: "2 nights",
        body: [
          "The spectacular backdrop of Mount Kilimanjaro frames the semi-arid grasslands of Amboseli. Home to one of Africa's largest elephant populations, Amboseli is a scenic mosaic of swamps with water year-round, sustaining an incredible variety of birdlife and game.",
          "Stay in a private conservancy bordering the national park, with magnificent views of Kilimanjaro from your hillside camp. Enjoy thrilling walking safaris, game drives in custom-designed safari vehicles, and extravagant bush breakfasts.",
        ],
        accommodation: "Tortilis Camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 4–5",
        title: "Meru National Park",
        location: "Meru NP, Kenya",
        nights: "2 nights",
        body: [
          "Meru features an arid landscape with permanent and seasonal rivers. A 21,000-acre rhino sanctuary sits at the heart of the park, offering a rare opportunity to admire the Big Five in this remote and wild region of Kenya.",
          "Your cottage suites are built around the natural features of a rocky kopje, with breathtaking vistas over the sweeping Meru plain. Game drives in custom-designed safari vehicles are paired with a guided nature walk up Mugwongo Hill.",
        ],
        accommodation: "Elsa's Kopje Meru",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 6–7",
        title: "Masai Mara National Reserve",
        location: "Masai Mara, Kenya",
        nights: "2 nights",
        body: [
          "The Masai Mara offers one of the best wildlife-viewing regions in Africa — rolling plains, thunderous rivers, and acacia thickets, home to an abundance of migratory and resident wildlife.",
          "Stay in a private and secluded area of the Mara, on the northerly migration path, at a stylish luxury camp along the banks of the Sand River recreating a 1930s safari.",
        ],
        accommodation: "Sand River Masai Mara",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 8",
        title: "Departure from Nairobi",
        location: "Nairobi, Kenya",
        body: [
          "Fly back to Nairobi and transfer to Jomo Kenyatta International Airport for your international flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "7 nights' accommodation in private conservancies and luxury tented camps",
      "All meals as indicated in the itinerary (B/L/D)",
      "Qualified local driver-guide and custom-designed safari vehicle throughout",
      "All park and conservancy fees for reserves visited",
      "Game drives, walking safaris, and bush breakfasts as indicated",
      "Airport transfers to and from Jomo Kenyatta International Airport",
    ],
    excluded: [
      "International airfares",
      "Kenya entry visa / eTA",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Tips and gratuities for driver-guide and camp staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: "Tortilis Camp", location: "Amboseli NP, Kenya", nights: "2 nights" },
      { name: "Elsa's Kopje Meru", location: "Meru NP, Kenya", nights: "2 nights" },
      { name: "Sand River Masai Mara", location: "Masai Mara, Kenya", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "rwanda-akagera-kivu-culture-safari",
    title: "Rwanda Akagera, Lake Kivu & Culture Safari",
    subtitle: "Big Five game drives, the country's history, and life on the shores of Lake Kivu",
    excerpt:
      "Seven days through the land of a thousand hills — Kigali's history and culture, Big Five game drives in Akagera National Park, and canoeing, fishing, and village life on Lake Kivu.",
    country: "Rwanda",
    duration: "7 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #2a6a4a, #061f14)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "During this week-long tour of the country of a thousand hills, you'll experience Rwanda's wildlife, history, culture, and tradition in one compact circuit — from Kigali's museums and memorials to Big Five game drives in Akagera National Park, finishing with canoeing and village life on Lake Kivu.",
      "Kigali sets the tone with a city tour and a visit to the Kigali Genocide Memorial, before Akagera's open savanna delivers classic big game — elephant, buffalo, lion, leopard, and Rwanda's reintroduced rhino. The final days slow the pace right down: a boat ride on Lake Kivu, a morning learning traditional fishing techniques from local fishermen, and an evening of cultural performance in a countryside village.",
      "Every departure is private, led by an expert Rwandan driver-guide who shapes the pace and detail of each day around you.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      { label: "Country", value: "Rwanda" },
      { label: "Parks & Sites", value: "Akagera NP · Lake Kivu · Kigali" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Kigali (KGL)" },
      { label: "Style", value: "Private guided · Wildlife & culture combination" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Full-day Big Five game drives in Akagera National Park in an open-roofed safari vehicle",
      "A boat trip on Lake Ihema, inside Akagera National Park",
      "A Kigali city tour and a visit to the Kigali Genocide Memorial",
      "Canoeing on Lake Kivu, one of Africa's most beautiful lakes",
      "Learning traditional fishing techniques from local Lake Kivu fishermen",
      "An evening of Intore warrior dance and cultural performance in a countryside village",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Kigali",
        location: "Kigali, Rwanda",
        nights: "1 night",
        body: [
          "Welcome to Rwanda! You're met at Kigali International Airport by our company representative and transferred to your hotel — the formalities are settled quickly, and you'll be wished a pleasant stay for your first night in the land of a thousand hills.",
        ],
        accommodation: "Lodge TBC — Kigali",
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "Kigali City Tour",
        location: "Kigali, Rwanda",
        nights: "1 night",
        body: [
          "Your driver-guide picks you up for a tour of the capital, introducing you to Rwanda's history and daily life through its museums, markets, and city sights.",
        ],
        accommodation: "Lodge TBC — Kigali",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Kigali Genocide Memorial & Cultural Sites",
        location: "Kigali, Rwanda",
        nights: "1 night",
        body: [
          "A day exploring Kigali in depth: the Kigali Genocide Memorial, Inema Arts Center, and the Kacyiru administrative area, followed by local shopping for fruits, vegetables, clothes, and handicrafts at Kimironko Market. Visit Umusambi Village for cranes and other bird species, the Camp Kigali Memorial and Kandt House, and round out the day at the Nyamirambo Women's Center.",
        ],
        accommodation: "Lodge TBC — Kigali",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 4",
        title: "Akagera National Park — Game Drives",
        location: "Akagera NP, Rwanda",
        nights: "1 night",
        body: [
          "An early breakfast, then a full day of game drives in an open-roofed vehicle. Akagera offers the chance to spot elephant, buffalo, hippo, lion, Masai giraffe, gazelle, impala, baboon, oribi, Burchell's zebra, topi, bush baby, leopard, and bushbuck, among others — plus a boat trip on Lake Ihema. An evening game drive follows lunch back at the lodge.",
        ],
        accommodation: "Lodge TBC — Akagera NP",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 5",
        title: "Akagera to Lake Kivu",
        location: "Akagera NP → Lake Kivu, Rwanda",
        nights: "1 night",
        body: [
          "Drive to the Lake Kivu belt road for lunch, rest, and entertainment. Lake Kivu is one of the most beautiful lakes in Africa, its waters dotted with a thousand green islands — canoeing and boat riding here are an incredible experience, whether paddling yourself or riding as a passenger between islands.",
        ],
        accommodation: "Moriah Hill Resort",
        meals: "Breakfast, Dinner",
      },
      {
        label: "Day 6",
        title: "Local Fishing Techniques & the Congo Nile Trail",
        location: "Lake Kivu → Musanze, Rwanda",
        nights: "1 night",
        body: [
          "Early morning, join local fishermen in a boat on Lake Kivu to see how they use traditional techniques to trap fish — including the small Sambaza fish that make a daily sauce for local communities and are well worth trying.",
          "After lunch, drive along the Congo Nile Crest to Musanze, staying at an indigenous Rwandan village-style lodge in the countryside.",
        ],
        accommodation: "Red Rocks Rwanda",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 7",
        title: "Cultural Village & Return to Kigali",
        location: "Musanze → Kigali, Rwanda",
        body: [
          "After breakfast with the local community at the Red Rocks cultural village, experience Rwandan culture through local cuisine, dancing, and weaving. The Intore warriors' dance — a jewel of Rwanda's choreographic heritage, performed in traditional sisal-fibre dress with bells jingling at the ankles — closes out the morning before the drive back to Kigali for your international departure.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "6 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Rwandan driver-guide and open-roofed 4×4 safari vehicle",
      "All fuel in the vehicle",
      "All Akagera National Park entrance and conservation fees",
      "Boat trip on Lake Ihema and canoe/boat excursion on Lake Kivu",
      "Kigali Genocide Memorial entrance and cultural village experience",
      "Airport transfers in Kigali",
    ],
    excluded: [
      "International airfares",
      "Rwanda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Tips and gratuities for driver-guide and lodge staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: "Moriah Hill Resort", location: "Lake Kivu, Rwanda", nights: "1 night" },
      { name: "Red Rocks Rwanda", location: "Musanze, Rwanda", nights: "1 night" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-kidepo-valley-wilderness-safari",
    title: "Kidepo Valley Wilderness Safari",
    subtitle: "Africa's last true wilderness — a national park you may have entirely to yourself",
    excerpt:
      "Six days to Uganda's most remote and dramatic national park, where savanna landscapes and mountain backdrops rival the Serengeti — and you're unlucky to meet more than three other vehicles in a day.",
    country: "Uganda",
    duration: "6 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #8a5a2a, #2a1505)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "Kidepo Valley National Park lies in rugged, semi-arid valleys between Uganda's borders with South Sudan and Kenya, some 700km from Kampala. Gazetted in 1962, it holds a profusion of big game — over 77 mammal species and around 475 recorded birds — in landscapes that feel like the Serengeti and Ngorongoro Crater rolled into one.",
      "It's also Uganda's most isolated national park. The few travellers who make the long journey north through the wild frontier region of Karamoja consistently agree it's the most magnificent: Kidepo ranks among Africa's finest wildernesses, and on many days you'll have it entirely to yourself. Lion, elephant, giraffe, buffalo, leopard, cheetah, and ostrich are all present, and bush campers are sometimes visited by lions and jackals after dark.",
      "This is a genuinely remote trip — the road journey from Kampala is long, split across two travel days each way. Every departure is private, led by an expert Ugandan driver-guide.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Park", value: "Kidepo Valley National Park" },
      { label: "Best Time", value: "Sep – Mar" },
      { label: "Access", value: "~10–11hr drive from Kampala, or fly to Kidepo Airstrip" },
      { label: "Style", value: "Private guided · Remote wilderness safari" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "One of Africa's last true wildernesses — a national park you may have entirely to yourself",
      "Savanna landscapes and mountain backdrops reminiscent of the Serengeti and Ngorongoro Crater",
      "Over 77 mammal species and around 475 recorded bird species",
      "A game drive to the Kanangorok Hot Springs along the palm-lined Kidepo River",
      "A guided safari walk through the park on foot",
      "An optional visit to Karamojong community areas",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive in Kampala",
        location: "Kampala, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and transferred to your hotel in Kampala to rest before the long journey north.",
        ],
        accommodation: LODGES.kampala,
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "Drive to Kitgum",
        location: "Kitgum, Uganda",
        nights: "1 night",
        body: [
          "A long drive north, breaking the journey to Kidepo at Kitgum, in Uganda's far north.",
        ],
        accommodation: LODGES.kitgum,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Drive to Kidepo Valley National Park",
        location: "Kidepo Valley NP, Uganda",
        nights: "1 night",
        body: [
          "Continue from Kitgum into Kidepo Valley National Park, checking into your accommodation in the heart of the park, where a savanna landscape extends far beyond the gazetted area toward horizons outlined by distant mountain ranges.",
        ],
        accommodation: LODGES.kidepo,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 4",
        title: "Game Drives & Safari Walk",
        location: "Kidepo Valley NP, Uganda",
        nights: "1 night",
        body: [
          "A morning game drive to the hot springs via the palm-tree-lined Kidepo River, watching for ostriches and leopard tortoises along the way. After a packed lunch, stretch your legs on a guided walk through the park. An optional visit to Karamojong community areas can be arranged for interested parties.",
        ],
        accommodation: LODGES.kidepo,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 5",
        title: "Kanangorok Hot Springs",
        location: "Kidepo Valley NP, Uganda",
        nights: "1 night",
        body: [
          "A further game drive in search of ostriches, out to the Kanangorok Hot Springs near the Sudanese border.",
        ],
        accommodation: LODGES.kidepo,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 6",
        title: "Return to Kampala via Gulu",
        location: "Kidepo → Gulu → Kampala, Uganda",
        body: [
          "A long return drive south via Gulu, with an early start to reach Kampala the same day. Travellers who'd prefer to split the journey can request an overnight stop in Gulu instead.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "5 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "Kidepo Valley National Park entrance and conservation fees",
      "Guided safari walk and hot springs excursion",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Optional Karamojong community visit fee",
      "Tips and gratuities for driver-guide and lodge staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.kidepo, location: "Kidepo Valley NP, Uganda", nights: "3 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-queen-elizabeth-safari",
    title: "Uganda Gorilla & Queen Elizabeth Safari",
    subtitle: "Tree-climbing lions and mountain gorillas, uncomplicated and fast",
    excerpt:
      "Six days, two parks: game drives and a Kazinga Channel boat safari in Queen Elizabeth National Park, then a morning with a habituated mountain gorilla family in Bwindi Impenetrable Forest.",
    country: "Uganda",
    duration: "6 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #4a6a3a, #12240c)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "This six-day safari keeps things simple: one savanna park, one forest, two unforgettable wildlife encounters. Queen Elizabeth National Park delivers game drives, a Kazinga Channel boat safari, and a chance at the Ishasha sector's famous tree-climbing lions, before the road turns south to Bwindi Impenetrable Forest for a morning with a habituated mountain gorilla family.",
      "It's a compact itinerary for travellers who want Uganda's two biggest draws without a longer, multi-park circuit. Every departure is private and paced by an expert Ugandan driver-guide.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "6 Days / 5 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Parks", value: "Queen Elizabeth · Bwindi" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
      { label: "Style", value: "Private guided · Lodge safari · Express" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Tree-climbing lions and dramatic crater scenery in Queen Elizabeth National Park",
      "A Kazinga Channel boat safari past elephants and hippos",
      "One unforgettable hour with a habituated mountain gorilla family in Bwindi — permits capped at 8 visitors per family",
      "An optional Batwa community visit in Bwindi",
      "A stopover at the Equator, standing between the Northern and Southern Hemispheres",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive & Drive to Queen Elizabeth National Park",
        location: "Kampala / Entebbe → Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and transferred to your hotel in Kampala or Entebbe. After an early breakfast the next morning, drive west to Queen Elizabeth National Park, arriving in the evening.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Dinner",
      },
      {
        label: "Days 2–3",
        title: "Queen Elizabeth National Park",
        location: "Queen Elizabeth NP, Uganda",
        nights: "2 nights",
        body: [
          "Queen Elizabeth's magnificent vistas take in dozens of craters carved into rolling green hills, panoramic views of the Kazinga Channel with its banks lined by elephants, and the endless Ishasha plains, whose fig trees hide the park's famous tree-climbing lions, ready to pounce on unsuspecting Uganda kob.",
          "Game drives and a Kazinga Channel boat safari fill these two days, with time built in for the drive out to Ishasha in search of the climbing lions.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Days 4–5",
        title: "Gorilla Tracking in Bwindi Impenetrable Forest",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "2 nights",
        body: [
          "After breakfast with a packed lunch, drive south to Bwindi Impenetrable National Park, arriving in the afternoon.",
          "The next morning, set out with rangers and trackers for your gorilla trek — an unforgettable hour with a habituated family deep in the forest. An optional visit to a local Batwa community can be arranged for those interested.",
        ],
        accommodation: LODGES.bwindi,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 6",
        title: "Equator Stop & Departure",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "On your way back, stop at the Equator to stand between the Northern and Southern Hemispheres for photographs, before continuing to Kampala or Entebbe for your flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "5 nights' accommodation in hand-picked lodges",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "1 gorilla trekking permit per person (Bwindi Impenetrable National Park)",
      "Kazinga Channel boat cruise",
      "All national park entrance fees for parks visited",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "A porter for gorilla trekking (optional — carries your daypack)",
      "Optional Batwa community visit at Bwindi",
      "Tips and gratuities for driver-guide and hotel staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.queenElizabeth, location: "Queen Elizabeth NP, Uganda", nights: "3 nights" },
      { name: LODGES.bwindi, location: "Bwindi Impenetrable NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-murchison-falls-safari",
    title: "Murchison Falls & Ziwa Rhino Safari",
    subtitle: "A short break with rhino tracking, game drives, and Uganda's most powerful waterfall",
    excerpt:
      "Three days — a guided rhino tracking walk at Ziwa Sanctuary, a game drive and boat safari in Murchison Falls National Park, and a walk to the top of the Falls.",
    country: "Uganda",
    duration: "3 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #3a5a3a, #0e1f0e)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "A short break built around Uganda's largest national park. Along the way you'll stop at Ziwa Rhino Sanctuary for a guided walk among Uganda's only wild rhino population, before two days of game drives and boat safaris in Murchison Falls National Park, where the Nile forces its way through a narrow gorge and plunges into Lake Albert.",
      "Ideal as a stand-alone break from Kampala or Entebbe, or as an add-on before or after a longer gorilla safari. Every departure is private, led by an expert Ugandan driver-guide.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "3 Days / 2 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Park", value: "Murchison Falls NP · Ziwa Rhino Sanctuary" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB) or Pakuba Airstrip (fly-in)" },
      { label: "Style", value: "Private guided · Short break safari" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "A guided rhino tracking walk at Ziwa Rhino Sanctuary, home to Uganda's only wild rhino population",
      "A game drive across the Buligi plains in search of lion, elephant, giraffe, and buffalo",
      "A boat safari to the base of Murchison Falls, past hippos and crocodiles",
      "A walk to the top of the Falls, where the Nile forces through a 7-metre gorge before dropping 43 metres",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Ziwa Rhino Sanctuary & Drive to Murchison Falls",
        location: "Ziwa Rhino Sanctuary → Murchison Falls NP, Uganda",
        nights: "1 night",
        body: [
          "Depart Kampala or Entebbe, branching off near Nakitoma–Nakasongola for a guided tracking walk at Ziwa Rhino Sanctuary — home to Uganda's only wild population of southern white rhino. Continue into Murchison Falls National Park, checking in to your accommodation in the evening.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "Game Drive & Boat Safari",
        location: "Murchison Falls NP, Uganda",
        nights: "1 night",
        body: [
          "A morning game drive across the Buligi plains, home to lion, elephant, giraffe, and buffalo, followed by an afternoon boat safari to the base of the falls, cruising past hippo pods, crocodiles, and bathing buffalo.",
        ],
        accommodation: LODGES.murchisonFalls,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Top of the Falls & Return to Kampala",
        location: "Murchison Falls NP → Kampala, Uganda",
        body: [
          "A morning walk to the top of Murchison Falls, watching the Nile force its way through a narrow 7-metre gap before plunging 43 metres into Lake Albert, then drive back to Kampala.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "2 nights' accommodation",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "Ziwa Rhino Sanctuary guided tracking walk and sanctuary fee",
      "Murchison Falls boat safari",
      "Murchison Falls National Park entrance fees",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Tips and gratuities for driver-guide and lodge staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.murchisonFalls, location: "Murchison Falls NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-queen-elizabeth-express-safari",
    title: "Queen Elizabeth National Park Safari",
    subtitle: "A short break of game drives, boat safaris, and tree-climbing lions",
    excerpt:
      "Three days in Uganda's most popular savanna reserve — game drives, a Kazinga Channel boat safari, and a chance at Ishasha's famous tree-climbing lions.",
    country: "Uganda",
    duration: "3 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #5a6a2a, #1a2408)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "A compact introduction to Queen Elizabeth National Park, Uganda's most visited savanna reserve — sprawling craters, the Kazinga Channel, and the Ishasha sector's famously tree-climbing lions, all within a short three-day break.",
      "Ideal as a stand-alone trip from Kampala or Entebbe, or paired with a longer gorilla or chimpanzee safari. Every departure is private, led by an expert Ugandan driver-guide.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "3 Days / 2 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Park", value: "Queen Elizabeth National Park" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
      { label: "Style", value: "Private guided · Short break safari" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Game drives across the Kasenyi plains in search of lion, elephant, and buffalo",
      "A Kazinga Channel boat safari past hippos, elephants, and abundant birdlife",
      "Ishasha's famous tree-climbing lions and dramatic crater scenery",
      "A stopover at the Equator, standing between the Northern and Southern Hemispheres",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Arrive & Drive to Queen Elizabeth National Park",
        location: "Kampala / Entebbe → Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and driven directly to Queen Elizabeth National Park, checking in to your accommodation in the evening.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "Game Drive & Kazinga Channel Boat Safari",
        location: "Queen Elizabeth NP, Uganda",
        nights: "1 night",
        body: [
          "A morning game drive across the Kasenyi plains, then an afternoon boat safari along the Kazinga Channel, past craters carved into rolling green hills and elephants lining the banks. With time available, a drive out to the Ishasha sector offers a chance at the park's famous tree-climbing lions.",
        ],
        accommodation: LODGES.queenElizabeth,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Equator Stop & Departure",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "On your way back, stop at the Equator to stand between the Northern and Southern Hemispheres for photographs, before continuing to Kampala or Entebbe for your flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "2 nights' accommodation",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "Kazinga Channel boat cruise",
      "Queen Elizabeth National Park entrance fees",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Tips and gratuities for driver-guide and lodge staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.queenElizabeth, location: "Queen Elizabeth NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-lake-mburo-safari",
    title: "Lake Mburo National Park Safari",
    subtitle: "Uganda's most accessible park, a village walk, and a lakeside boat cruise",
    excerpt:
      "Three days at Lake Mburo National Park — a village walk with the local Bahima pastoralist community, a game drive in search of Uganda's reintroduced giraffes, and a boat cruise among hippos and crocodiles.",
    country: "Uganda",
    duration: "3 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #6a7a3a, #202808)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "Lake Mburo is Uganda's most accessible national park, just a few hours from Entebbe — making this three-day safari a full, relaxed break without the long transfers of the country's more remote parks.",
      "A guided village walk with the local Bahima pastoralist community, game drives in search of Uganda's newly reintroduced giraffes, and an afternoon boat cruise on the lake round out a well-paced short trip. Every departure is private, led by an expert Ugandan driver-guide.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "3 Days / 2 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Park", value: "Lake Mburo National Park" },
      { label: "Best Time", value: "Year-round" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
      { label: "Style", value: "Private guided · Short break safari" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Uganda's most accessible national park — just a few hours from Entebbe",
      "A guided village walk with the local Bahima pastoralist community",
      "Game drives in search of Uganda's newly reintroduced giraffes, plus zebra, eland, buffalo, and Uganda kob",
      "An afternoon boat cruise on Lake Mburo among hippos and crocodiles",
      "An Equator stopover en route",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Transfer to Lake Mburo National Park",
        location: "Lake Mburo NP, Uganda",
        nights: "1 night",
        body: [
          "Pick-up from Entebbe airport on arrival, driving to Lake Mburo National Park. Along the way, stop at the Equator to stand between the Northern and Southern Hemispheres for photographs, before continuing on to arrive in the afternoon.",
          "After lunch, choose between a village walk to experience the local Bahima pastoralists' way of life, or an evening at leisure.",
        ],
        accommodation: LODGES.lakeMburo,
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "Game Drive & Boat Cruise",
        location: "Lake Mburo NP, Uganda",
        nights: "1 night",
        body: [
          "An early morning or after-breakfast game drive in search of the park's newly introduced giraffes, coming up close with zebra, baboon, antelope, Uganda kob, and buffalo, plus birds of many species.",
          "In the afternoon, a boat cruise on Lake Mburo brings sightings of hippos and crocodiles cooling off at the water's edge, alongside plentiful birdlife.",
        ],
        accommodation: LODGES.lakeMburo,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Transfer back to Kampala / Entebbe",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "A final game drive on transit as you exit the park, before transferring back to Kampala, arriving in the afternoon, or continuing to Entebbe for your onward flight.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "2 nights' accommodation",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "Guided Bahima village walk",
      "Lake Mburo boat cruise",
      "Lake Mburo National Park entrance fees",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Tips and gratuities for driver-guide and lodge staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.lakeMburo, location: "Lake Mburo NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-kibale-chimpanzee-safari",
    title: "Kibale Chimpanzee Tracking Safari",
    subtitle: "A short break built around Africa's primate capital",
    excerpt:
      "Three days at Kibale Forest — chimpanzee tracking, a swamp walk, and a scenic crater lake hike near Fort Portal.",
    country: "Uganda",
    duration: "3 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #2a6a3a, #08240f)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "A focused short break built around Kibale Forest National Park, home to the highest density of primates in Africa. Chimpanzee tracking and a swamp walk are paired with a scenic crater lake hike around Fort Portal's volcanic landscape.",
      "Ideal as a stand-alone trip or an easy add-on before or after a Rwenzori trek or a longer gorilla safari. Every departure is private, led by an expert Ugandan driver-guide.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "3 Days / 2 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Park", value: "Kibale Forest National Park" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB)" },
      { label: "Style", value: "Private guided · Short break safari" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "Chimpanzee tracking in Kibale Forest, Africa's primate capital",
      "An afternoon swamp walk in Bigodi, rich in monkeys and birdlife",
      "A scenic crater lake hike around Fort Portal's volcanic landscape",
      "A relaxed three-day format, easy to combine with a Rwenzori trek or gorilla safari",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Drive to Kibale Forest National Park",
        location: "Kibale Forest NP, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and driven directly to Kibale Forest National Park, checking in to your accommodation in the evening.",
        ],
        accommodation: LODGES.kibale,
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "Chimpanzee Tracking & Swamp Walk",
        location: "Kibale Forest NP, Uganda",
        nights: "1 night",
        body: [
          "Track a habituated chimpanzee community through the forest in the morning, then take an afternoon swamp walk in nearby Bigodi, home to Red Colobus, Red-tailed Guenon, Grey-cheeked Mangabey, and abundant birdlife.",
        ],
        accommodation: LODGES.kibale,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Crater Lake Hike & Departure",
        location: "Fort Portal → Kampala / Entebbe, Uganda",
        body: [
          "A guided hike around one of Fort Portal's scenic crater lakes before the drive back to Kampala or Entebbe for your flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "2 nights' accommodation",
      "All meals as indicated in the itinerary (B/L/D)",
      "Private English-speaking Ugandan driver-guide and 4×4 pop-up-roof vehicle",
      "All fuel and bottled water in the vehicle",
      "1 chimpanzee tracking permit per person (Kibale Forest National Park)",
      "Guided crater lake hike",
      "Kibale Forest National Park entrance fees",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "All drinks",
      "Meals and snacks not indicated in the itinerary",
      "Tips and gratuities for driver-guide and lodge staff",
      "Personal expenses — laundry, souvenirs, and items of a personal nature",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: LODGES.kibale, location: "Kibale Forest NP, Uganda", nights: "2 nights" },
    ],
  },

  {
    // ── Meta ──────────────────────────────────────────────────
    slug: "uganda-gorilla-tracking-safari",
    title: "Bwindi Gorilla Tracking Safari",
    subtitle: "The fastest way to spend an hour with Uganda's mountain gorillas",
    excerpt:
      "Three days, one purpose — trek to a habituated mountain gorilla family in Bwindi Impenetrable Forest, with a choice of budget, mid-range, or luxury lodges.",
    country: "Uganda",
    duration: "3 Days",
    heroImage: "",
    heroFallback: "linear-gradient(160deg, #2a4a2a, #081408)",
    date: "2026-07-12",

    // ── Overview ──────────────────────────────────────────────
    overview: [
      "For travellers who want exactly one thing from Uganda — time with the mountain gorillas — this is the fastest way to get it. No detours, no extra parks: a straight drive to Bwindi Impenetrable Forest, a gorilla trek, and a straight drive back.",
      "Accommodation in Bwindi is offered across three tiers so you can match the trip to your style, from community-run budget lodges to luxury properties overlooking the forest. Every departure is private, led by an expert Ugandan driver-guide.",
    ],

    // ── At a glance ───────────────────────────────────────────
    facts: [
      { label: "Duration", value: "3 Days / 2 Nights" },
      { label: "Country", value: "Uganda" },
      { label: "Park", value: "Bwindi Impenetrable National Park" },
      { label: "Best Time", value: "Jun – Sep & Dec – Feb" },
      { label: "Nearest Airport", value: "Entebbe (EBB) or Kisoro (fly-in)" },
      { label: "Style", value: "Private guided · Gorilla trek only · Budget to luxury lodges" },
    ],

    // ── Highlights ────────────────────────────────────────────
    highlights: [
      "One unforgettable hour with a habituated mountain gorilla family — permits capped at 8 visitors per family",
      "The fastest way to fit gorilla trekking into a short Uganda trip",
      "A choice of budget, mid-range, or luxury lodges in the Buhoma, Rushaga, or Nkuringo sectors",
      "A stopover at the Equator on the return drive",
    ],

    // ── Day by day ────────────────────────────────────────────
    days: [
      {
        label: "Day 1",
        title: "Drive to Bwindi Impenetrable Forest",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "1 night",
        body: [
          "Welcome to Uganda! You're met on arrival and driven to Bwindi Impenetrable Forest, checking in to your chosen lodge in the evening.",
        ],
        accommodation: "Choice of budget, mid-range, or luxury lodge (see options below)",
        meals: "Dinner",
      },
      {
        label: "Day 2",
        title: "Gorilla Tracking in Bwindi Impenetrable Forest",
        location: "Bwindi Impenetrable Forest, Uganda",
        nights: "1 night",
        body: [
          "The day you came for. After a briefing at park headquarters, trackers and rangers lead you through the forest to a habituated gorilla family for an unforgettable hour in their company.",
        ],
        accommodation: "Choice of budget, mid-range, or luxury lodge (see options below)",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        label: "Day 3",
        title: "Equator Stop & Departure",
        location: "Kampala / Entebbe, Uganda",
        body: [
          "On your way back, stop at the Equator to stand between the Northern and Southern Hemispheres for photographs, before continuing to Kampala or Entebbe for your flight home.",
        ],
        meals: "Breakfast",
      },
    ],

    // ── Included / Excluded ───────────────────────────────────
    included: [
      "2 nights' accommodation in Single/Double/Twin rooms (shared)",
      "All meals as indicated in the itinerary (Breakfast, Lunch, Dinner)",
      "Transport in a 4×4 pop-up-roof vehicle for excellent safari viewing",
      "A bottle of water",
      "All fuel for the tour",
      "English-speaking Ugandan driver-guide",
      "1 gorilla trekking permit per person",
      "Bwindi Impenetrable National Park entrance fees",
      "All activities described in the itinerary",
    ],
    excluded: [
      "International airfares",
      "Uganda entry visa",
      "Personal travel and medical insurance",
      "Alcoholic drinks",
      "Meals and snacks not included in the accommodation",
      "A porter (optional — carries your daypack)",
      "Activities not mentioned in the itinerary, or activities mentioned as optional",
      "Tips and gratuities to rangers, driver-guide, porter, and hotel staff",
      "All expenses of a personal nature (drinks, laundry, souvenirs, etc.)",
    ],

    // ── Accommodation showcase ────────────────────────────────
    stays: [
      { name: "Ichumbi Gorilla Lodge Rushaga", location: "Rushaga, Bwindi (Budget)" },
      { name: "Buhoma Community Rest Camp", location: "Buhoma, Bwindi (Budget)" },
      { name: "Rushaga Gorilla Camp", location: "Rushaga, Bwindi (Mid-Range)" },
      { name: "Haven Lodge Buhoma", location: "Buhoma, Bwindi (Mid-Range)" },
      { name: "Mahogany Springs Lodge", location: "Buhoma, Bwindi (Luxury)" },
      { name: "Nkuringo Bwindi Gorilla Lodge", location: "Nkuringo, Bwindi (Luxury)" },
    ],
  },
];

// ── Helpers used by the route + listings ────────────────────
export function getItinerary(slug: string): Itinerary | undefined {
  return itineraries.find((it) => it.slug === slug);
}

export const allItineraries = itineraries;
