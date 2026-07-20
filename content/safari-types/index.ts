// ─────────────────────────────────────────────────────────────
//  SAFARI TYPE REGISTRY
//  To add a new safari style:
//  1. Copy an object below and give it a new slug
//  2. Change the content — it appears at /safari-types/<slug>
//     and as a card in the homepage "Discover More Ways to
//     Explore Africa" carousel, in the order listed here.
// ─────────────────────────────────────────────────────────────

import type { SafariType } from "./types";

export const safariTypes: SafariType[] = [
  {
    slug: "luxury-safaris",
    title: "Luxury Safaris",
    eyebrow: "Safari Style",
    tagline: "Private guides, boutique camps, and every detail handled before you think to ask.",
    cardDesc: "Private guides, boutique lodges, and every detail handled.",
    heroFallback: "linear-gradient(160deg, #8a6a2a, #2a1e08)",
    heroImage: "/safari-types/luxury-safaris.jpg",
    excerpt:
      "Private-guided luxury safaris across Uganda and East Africa — boutique lodges, light-aircraft transfers, and a pace set entirely by you.",
    intro: [
      "A luxury safari isn't just a nicer room — it's a trip built around your time. Private vehicles instead of shared transfers, boutique lodges and tented camps chosen for character and location, and an itinerary with room to linger when a sighting is worth lingering for.",
      "We work with a small circle of owner-run camps and lodges across Uganda, Rwanda and East Africa — the kind of places with a handful of rooms, a guide who knows every trail by name, and a fire lit before you get back from the evening drive. Fly-in transfers are available wherever they save you a long drive, and every detail — permits, transfers, dining — is arranged before you land.",
    ],
    highlights: [
      "Private vehicle and driver-guide for your group only — no joining strangers",
      "Boutique lodges and luxury tented camps, hand-inspected by our team",
      "Light-aircraft transfers between parks in place of long road transfers",
      "Flexible daily pace — stay out for a sighting, sleep in after a late night",
      "Priority gorilla and chimpanzee permits booked well in advance",
      "A dedicated planner from first enquiry through to your return flight",
    ],
    idealFor: [
      "Travellers who want the wildlife without the logistics",
      "Couples or small groups celebrating a milestone trip",
      "Anyone combining a short window of time with a long wish list",
      "Guests who'd rather fly over a rough road than sit through it",
    ],
    facts: [
      { label: "Style", value: "Private guide & vehicle" },
      { label: "Stays", value: "Boutique lodges & luxury camps" },
      { label: "Pace", value: "Slow, uninterrupted" },
      { label: "Best For", value: "Discerning travellers" },
    ],
    relatedSlugs: [
      "east-africa-mara-serengeti-migration",
      "uganda-gorilla-flyin-safari",
      "uganda-rwanda-gorilla-safari",
    ],
  },
  {
    slug: "family-friendly-safaris",
    title: "Family-Friendly Safaris",
    eyebrow: "Safari Style",
    tagline: "Wildlife adventures the whole family can share — from grandparents to grandkids.",
    cardDesc: "Wildlife adventures the whole family can share.",
    heroFallback: "linear-gradient(160deg, #6a8a3a, #1e3010)",
    heroImage: "/safari-types/family-friendly-safaris.jpg",
    excerpt:
      "Family safaris in Uganda designed around shorter drives, flexible pacing, and parks where kids and grandparents alike stay engaged.",
    intro: [
      "The best family safaris aren't scaled-down adult trips — they're built differently from day one. Shorter game drives, parks with easy, high-density wildlife viewing, and lodges with space for children to be children between activities.",
      "We plan around your family's rhythm: age-appropriate activities, guides who know how to keep an eight-year-old and a grandparent equally captivated, and accommodation with family rooms or interconnecting tents rather than one cramped double. Uganda's compact parks make this easier than you'd expect — several great reserves sit within a short drive of each other, so nobody spends a whole day in the car.",
    ],
    highlights: [
      "Shorter, flexible game drives paced around younger travellers",
      "Parks chosen for reliable, close-range wildlife sightings",
      "Family rooms, interconnecting tents, and kid-friendly lodges",
      "Optional add-ons: nature walks, canoeing, and cultural village visits",
      "Guides experienced with multi-generational groups",
      "Gorilla trekking alternatives for younger children below the permit age",
    ],
    idealFor: [
      "Families travelling with young children or teenagers",
      "Multi-generational trips with a wide age range",
      "First-time safari families who want an easier introduction",
      "Parents who want downtime built into the itinerary, not just game drives",
    ],
    facts: [
      { label: "Style", value: "Private family vehicle" },
      { label: "Ages", value: "Suited from around 5 years+" },
      { label: "Pace", value: "Shorter drives, flexible days" },
      { label: "Best For", value: "Multi-generational trips" },
    ],
    relatedSlugs: [
      "uganda-lake-mburo-safari",
      "kenya-amboseli-meru-masai-mara-safari",
      "uganda-queen-elizabeth-express-safari",
    ],
  },
  {
    slug: "bird-watching-safaris",
    title: "Bird Watching Safaris",
    eyebrow: "Safari Style",
    tagline: "Chase rare species across Uganda's forests, wetlands and savannah trails.",
    cardDesc: "Chase rare species across Uganda's richest birding trails.",
    heroFallback: "linear-gradient(160deg, #2a6a5a, #0a2420)",
    heroImage: "/safari-types/bird-watching-safaris.jpg",
    excerpt:
      "Specialist birding safaris across Uganda's forests and wetlands, home to over 1,000 recorded species — from shoebills to turacos.",
    intro: [
      "Uganda holds one of the richest bird lists on the continent, and a huge share of it sits within a few hours of each other — Albertine Rift endemics in the western forests, shoebills in the papyrus swamps, and open-country species across the savannah parks.",
      "These trips move at a birder's pace: early starts, patient guides who know calls as well as plumage, and stops built around habitat rather than distance covered. Whether you're chasing a life list or picking this up for the first time, the itinerary bends around what's flying that week.",
    ],
    highlights: [
      "Specialist birding guides fluent in calls, not just field marks",
      "Mabamba Swamp shoebill excursions by dugout canoe",
      "Albertine Rift endemics across Bwindi, Semuliki and Kibale forests",
      "Wetland, forest and savannah habitats covered in one circuit",
      "Small groups and unhurried pacing — no rushing past a good sighting",
      "Combinable with gorilla and chimpanzee tracking on the same trip",
    ],
    idealFor: [
      "Serious birders working through a life list",
      "Photographers chasing specific or rare species",
      "Travellers who prefer quiet, patient wildlife encounters",
      "Anyone pairing birding with primates on a single Uganda circuit",
    ],
    facts: [
      { label: "Species Recorded", value: "1,000+ in Uganda" },
      { label: "Style", value: "Specialist birding guide" },
      { label: "Best Time", value: "Nov–Apr, plus migrants" },
      { label: "Best For", value: "Serious & casual birders" },
    ],
    relatedSlugs: [
      "uganda-gorilla-birding-safari",
      "uganda-kidepo-valley-wilderness-safari",
      "uganda-lake-mburo-safari",
    ],
  },
  {
    slug: "beach-safaris",
    title: "Beach Safaris",
    eyebrow: "Safari Style",
    tagline: "Trade the last days of your trip for open water and quiet shorelines.",
    cardDesc: "Unwind on tropical shores after days in the bush.",
    heroFallback: "linear-gradient(160deg, #2a7a8a, #0a3a4a)",
    heroImage: "/safari-types/beach-safaris.jpg",
    excerpt:
      "Extend a Uganda or Rwanda safari with a shoreline retreat — Lake Bunyonyi's terraced islands, Lake Kivu's beaches, or a coastal extension to Zanzibar or Diani.",
    intro: [
      "After days of early starts and dusty roads, a stretch by the water is the natural close to a safari. Uganda and Rwanda aren't short on shoreline — Lake Bunyonyi's terraced hills and hidden islands, Lake Kivu's black-sand beaches — and both sit an easy add-on away from the main trekking circuits.",
      "Want the ocean instead? We can tack on a coastal extension to Zanzibar or Kenya's Diani coast at the end of any itinerary, so the trip closes on white sand rather than another game drive. Either way, it's built as a genuine slowdown — fewer transfers, longer stays, nothing on the schedule.",
    ],
    highlights: [
      "Lake Bunyonyi's terraced islands, canoe trails and swimmable water",
      "Lake Kivu's black-sand beaches on the Rwanda–DRC border",
      "Optional coastal extension to Zanzibar or Diani, Kenya",
      "Boutique lakeside lodges with private decks and infinity pools",
      "Minimal transfers — built as a genuine slowdown, not another circuit",
      "Pairs naturally onto the end of any gorilla or wildlife itinerary",
    ],
    idealFor: [
      "Travellers who want a safari that ends on a slowdown, not a flight home",
      "Honeymooners tacking a beach stretch onto their safari",
      "Anyone who'd rather swim than drive on their last two days",
      "Families wanting downtime after an activity-heavy itinerary",
    ],
    facts: [
      { label: "Style", value: "Safari + lake or coast extension" },
      { label: "Stays", value: "Lakeside retreats & beach lodges" },
      { label: "Pace", value: "Relaxed, minimal transfers" },
      { label: "Best For", value: "Post-safari unwind" },
    ],
    relatedSlugs: [
      "uganda-gorilla-lake-bunyonyi-safari",
      "rwanda-akagera-kivu-culture-safari",
      "uganda-rwanda-gorilla-safari",
    ],
  },
  {
    slug: "fly-in-safaris",
    title: "Fly-In Safaris",
    eyebrow: "Safari Style",
    tagline: "Light-aircraft transfers between parks — more time in the bush, less on the road.",
    cardDesc: "Skip the long drives — light-aircraft transfers between parks.",
    heroFallback: "linear-gradient(160deg, #3a5a7a, #101c2a)",
    heroImage: "/safari-types/fly-in-safaris.jpg",
    excerpt:
      "Fly-in safaris across Uganda and East Africa swap long road transfers for scheduled light-aircraft flights, freeing up days for wildlife instead of driving.",
    intro: [
      "Some of Uganda's parks are remote enough that a fly-in transfer changes the whole shape of a trip — what would be a full day's drive becomes a scenic hour in the air, with the extra day handed back to game drives, trekking, or simply resting.",
      "Scheduled light-aircraft flights connect Entebbe to airstrips near Bwindi, Kidepo, Murchison Falls and Queen Elizabeth, so a shorter trip can still cover more ground without the toll of rough roads. It costs more than driving, but for travellers short on time — or simply done with long transfers — it's usually the better trade.",
    ],
    highlights: [
      "Scheduled light-aircraft links to Bwindi, Kidepo, Murchison and Queen Elizabeth",
      "Hours of rough road swapped for a scenic flight over the Rift Valley",
      "More trip days spent in parks instead of transit",
      "Ideal for stacking multiple remote parks into one shorter trip",
      "Baggage and weight allowances arranged and briefed in advance",
      "Combinable with road transfers where a scenic drive is worth keeping",
    ],
    idealFor: [
      "Travellers with a week or less who still want multiple parks",
      "Anyone prioritising comfort over cost on transfer days",
      "Guests visiting far-flung Kidepo without losing two days to driving",
      "Return visitors who've done the road transfers and are ready to skip them",
    ],
    facts: [
      { label: "Style", value: "Light-aircraft transfers" },
      { label: "Time Saved", value: "Hours of driving skipped" },
      { label: "Stays", value: "Remote luxury camps" },
      { label: "Best For", value: "Time-poor travellers" },
    ],
    relatedSlugs: [
      "uganda-gorilla-flyin-safari",
      "east-africa-mara-serengeti-migration",
      "uganda-kidepo-valley-wilderness-safari",
    ],
  },
  {
    slug: "honeymoon-safaris",
    title: "Honeymoon Safaris",
    eyebrow: "Safari Style",
    tagline: "Private camps, quiet corners, and a safari built for two.",
    cardDesc: "Romantic hideaways for the trip of a lifetime.",
    heroFallback: "linear-gradient(160deg, #8a3a4a, #2a0e14)",
    heroImage: "/safari-types/honeymoon-safaris.jpg",
    excerpt:
      "Honeymoon safaris across Uganda and Rwanda — private camps, romantic extras, and an itinerary paced for two, not a group.",
    intro: [
      "A honeymoon safari runs on a different clock than a standard itinerary — private vehicles instead of shared game drives, candlelit dinners instead of set mealtimes, and lodges chosen for a private deck or plunge pool as much as for the wildlife outside it.",
      "We build these around quiet, romantic settings — a tented camp above the Bwindi treeline, a private island retreat on Lake Bunyonyi, a suite with its own gorilla-forest view — and layer in the small touches that make it feel like a honeymoon rather than a well-run tour: sundowners set up in advance, a private bush dinner, a note waiting in your room.",
    ],
    highlights: [
      "Private vehicle and guide — no joining other travellers on game drives",
      "Honeymoon suites, private tents and rooms with plunge pools or forest views",
      "Bush dinners, sundowners and small romantic touches arranged in advance",
      "Gorilla trekking paired with a private, low-key lake or lodge stay",
      "Flexible pacing — nothing rushed, nothing on a fixed group schedule",
      "Optional beach or lakeside extension to close the trip"
    ],
    idealFor: [
      "Newlyweds planning their honeymoon around a shared love of wildlife",
      "Couples celebrating an anniversary or milestone",
      "Travellers who want privacy over a packed, sightseeing-heavy schedule",
      "Anyone pairing gorilla trekking with a romantic lake or lodge stay",
    ],
    facts: [
      { label: "Style", value: "Private & romantic" },
      { label: "Stays", value: "Honeymoon suites & private camps" },
      { label: "Extras", value: "Bush dinners, sundowners" },
      { label: "Best For", value: "Couples & anniversaries" },
    ],
    relatedSlugs: [
      "uganda-gorilla-lake-bunyonyi-safari",
      "rwanda-gorilla-trekking-safari",
      "east-africa-mara-serengeti-migration",
    ],
  },
  {
    slug: "photography-safaris",
    title: "Photography Safaris",
    eyebrow: "Safari Style",
    tagline: "Golden light, patient guides, and time built around getting the shot.",
    cardDesc: "Golden light, patient guides, built for the perfect shot.",
    heroFallback: "linear-gradient(160deg, #4a4a4a, #141414)",
    heroImage: "/safari-types/photography-safaris.jpg",
    excerpt:
      "Photography-focused safaris across Uganda and East Africa, with extended stops, golden-hour drives and guides who understand light as well as wildlife.",
    intro: [
      "A photography safari trades ground covered for time spent — fewer stops, longer at each one, timed around the light rather than a fixed schedule. Dawn and dusk drives get priority, and your guide knows to hold position on a good scene instead of moving on.",
      "Vehicles can be fitted with window mounts or beanbags on request, group sizes are kept small so nobody's shot is blocked by another traveller's shoulder, and the route favours parks with dependable, close-range sightings — tree-climbing lions in Queen Elizabeth, mountain gorillas in Bwindi, the plains of the Serengeti during migration season.",
    ],
    highlights: [
      "Golden-hour game drives timed around sunrise and sunset light",
      "Extended stops at sightings instead of a fixed drive schedule",
      "Small groups or private vehicles — no crowding for the shot",
      "Window-mounted beanbags and low-angle photography vehicles on request",
      "Guides briefed on positioning, light and species behaviour",
      "Routes built around parks with dependable, close-range sightings",
    ],
    idealFor: [
      "Hobbyist and semi-professional photographers alike",
      "Travellers who'd rather wait for one great shot than see everything fast",
      "Anyone bringing serious glass who needs vehicle space and stability",
      "Groups wanting a shared trip without competing for the same angle",
    ],
    facts: [
      { label: "Style", value: "Extended stops, small groups" },
      { label: "Vehicles", value: "Beanbags & window mounts on request" },
      { label: "Timing", value: "Golden-hour game drives" },
      { label: "Best For", value: "Hobbyists to serious photographers" },
    ],
    relatedSlugs: [
      "east-africa-mara-serengeti-migration",
      "uganda-kidepo-valley-wilderness-safari",
      "uganda-gorilla-primates-safari",
    ],
  },
  {
    slug: "female-travel-safaris",
    title: "Female Travel Safaris",
    eyebrow: "Safari Style",
    tagline: "Thoughtfully guided trips for women travelling solo or together.",
    cardDesc: "Thoughtfully guided trips for women travelling solo or together.",
    heroFallback: "linear-gradient(160deg, #9a5a7a, #3a1a28)",
    heroImage: "/safari-types/female-travel-safaris.jpg",
    excerpt:
      "Safaris designed for women travelling solo or in groups — vetted guides, secure lodges, and itineraries planned with safety and comfort in mind.",
    intro: [
      "Travelling solo or as a women's group changes what matters in an itinerary — who your guide is, how a lodge is staffed, how transfers are arranged after dark. None of it changes the wildlife, but all of it changes how comfortable the trip feels, so we plan around it from the start.",
      "That means guides who are briefed and vetted specifically for solo and women's groups, accommodation chosen partly on how it's reviewed by past women travellers, and itineraries with sensible transfer times rather than late arrivals. Solo travellers can join a small group or book a fully private trip — either way, you're never left figuring out logistics alone.",
    ],
    highlights: [
      "Vetted, safety-briefed guides experienced with solo and women's groups",
      "Lodges chosen with input from past women travellers' reviews",
      "Sensible transfer and arrival times — no unnecessary night travel",
      "Option to join a small women's group or book a fully private trip",
      "A dedicated planner reachable throughout the trip, not just before it",
      "Flexible pacing for solo travellers setting their own rhythm",
    ],
    idealFor: [
      "Women travelling solo for the first time on safari",
      "Friend groups planning a trip together",
      "Travellers who want extra care taken around logistics and safety",
      "Anyone who'd feel more comfortable with a vetted, briefed guide",
    ],
    facts: [
      { label: "Style", value: "Small group or private" },
      { label: "Guides", value: "Vetted, safety-briefed teams" },
      { label: "Stays", value: "Secure, well-reviewed lodges" },
      { label: "Best For", value: "Solo women & women's groups" },
    ],
    relatedSlugs: [
      "uganda-gorilla-lake-bunyonyi-safari",
      "rwanda-gorilla-trekking-safari",
      "kenya-amboseli-meru-masai-mara-safari",
    ],
  },
];

export function getSafariType(slug: string): SafariType | undefined {
  return safariTypes.find((t) => t.slug === slug);
}
