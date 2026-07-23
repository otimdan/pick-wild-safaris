// ─────────────────────────────────────────────────────────────
//  POST: Lake Bunyonyi — The Complete Guide
//  Destination guide; cross-linked constantly from gorilla-trekking
//  posts as a rest stop but had no dedicated guide of its own.
//  Images added later — <ImagePlaceholder> marks each photo slot.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import PostFaq from "@/app/components/PostFaq";
import { getPostMeta } from "@/content/posts/index";
import type { FaqItem } from "@/content/types";

function ImagePlaceholder({
  gradient,
  label,
}: {
  gradient: string;
  label: string;
}) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "flex-end",
        minHeight: 260,
        margin: "2rem 0",
        padding: "1rem 1.25rem",
        borderRadius: 12,
        background: gradient,
        color: "rgba(255,255,255,0.92)",
        fontSize: "0.85rem",
        fontStyle: "italic",
        letterSpacing: "0.01em",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      Image: {label}
    </span>
  );
}

const meta = getPostMeta("lake-bunyonyi-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Is it safe to swim in Lake Bunyonyi?",
    a: "Yes — it has no crocodiles, hippos, or bilharzia, a rarity among Ugandan lakes, though normal caution is still wise given its depth.",
  },
  {
    q: "How many islands does Lake Bunyonyi have?",
    a: "Twenty-nine, ranging from tiny outcrops to islands with lodges and small communities.",
  },
  {
    q: "How far is Lake Bunyonyi from Bwindi?",
    a: "Close enough to work as a natural pre- or post-trek stop on a gorilla trekking itinerary.",
  },
  {
    q: "What’s the best activity there?",
    a: "A canoe trip between the islands, paired with simply resting at a lakeside lodge.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        After days of steep forest trails and early starts, Lake Bunyonyi feels
        like exhaling. Terraced hillsides drop into still, island-studded water
        in Uganda&rsquo;s far south-west, and for once, there&rsquo;s nothing
        dangerous in it &mdash; no crocodiles, no hippos, no bilharzia. It&rsquo;s
        become the natural place to unwind before or after a gorilla trek in
        nearby Bwindi.
      </p>

      <p>
        Here&rsquo;s a complete guide to Lake Bunyonyi: the islands, the swimming,
        the activities, and how to fit it into your trip.
      </p>

      <h2>Lake Bunyonyi at a Glance</h2>

      <p>
        Lake Bunyonyi sits just outside Kabale town in south-western Uganda,
        stretching roughly 25 km long and 7 km wide across 61 square kilometres
        of water. Its name means &ldquo;place of many little birds&rdquo; in the
        local language, and the setting lives up to it &mdash; terraced hills
        rising steeply from the shoreline, dotted with small farms and scattered
        homesteads. Remarkably, the lake plunges to depths estimated as great as
        900 metres in places, making it one of the deepest lakes in Africa.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a4a5a, #0a1c22)"
        label="Terraced green hills dropping into the still water of Lake Bunyonyi, dotted with islands"
      />

      <h2>Twenty-Nine Islands</h2>

      <p>
        The lake holds <strong>29 islands</strong>, ranging from tiny outcrops to
        larger islands with lodges, schools, and small communities. Several carry
        their own local legends and history &mdash; Punishment Island, in
        particular, has a difficult past worth learning about respectfully from a
        local guide. A dugout canoe or motorboat trip between the islands is one
        of the simplest, most rewarding ways to spend an afternoon here.
      </p>

      <h2>Safe Swimming: A Rare Ugandan Lake</h2>

      <p>
        Unlike most of Uganda&rsquo;s lakes, Bunyonyi has <strong>no crocodiles,
        no hippos, and no bilharzia</strong> &mdash; making it one of the only
        lakes in the country where you can swim freely without concern. Given the
        genuine depth of the water, ordinary swimming caution still applies, but
        for travellers who&rsquo;ve spent days near hippo- and croc-filled
        channels elsewhere in Uganda, the freedom to simply swim is a real treat.
      </p>

      <h2>What to Do at Lake Bunyonyi</h2>

      <ul>
        <li>
          <strong>Canoeing</strong> &mdash; traditional dugout canoes are the
          classic way to explore the islands and inlets at a gentle pace
        </li>
        <li>
          <strong>Swimming</strong> &mdash; a genuine rarity on a Uganda trip
        </li>
        <li>
          <strong>Nature walks</strong> &mdash; the surrounding hills and terraced
          farmland make for lovely, easy hiking with wide views
        </li>
        <li>
          <strong>Birdwatching</strong> &mdash; the lake and its papyrus edges
          hold a good range of waterbirds
        </li>
        <li>
          <strong>Simply resting</strong> &mdash; many lodges are built for
          exactly this, with decks over the water and little to do but relax
        </li>
      </ul>

      <h2>Why It&rsquo;s the Perfect Bwindi Companion</h2>

      <p>
        Lake Bunyonyi sits close enough to Bwindi to work as a natural stop
        before or after gorilla trekking &mdash; a chance to rest tired legs,
        process the trek, and enjoy a slower pace before returning to the road.
        It pairs especially well with any of our{" "}
        <Link href="/safaris/uganda-gorilla-lake-bunyonyi-safari">
          gorilla &amp; Lake Bunyonyi itineraries
        </Link>
        .
      </p>

      <h2>Best Time to Visit Lake Bunyonyi</h2>

      <p>
        The lake is a pleasant stop year-round, though the dry seasons (roughly
        June&ndash;September and December&ndash;February) bring the clearest
        skies for the views across the terraced hills. See our wider guide to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <PostFaq title="Lake Bunyonyi FAQ" items={faq} />

      <h2>Rest Here Before or After the Gorillas</h2>

      <p>
        Lake Bunyonyi is the ideal decompression point on a south-western Uganda
        trip. Tell us your gorilla trekking dates and we&rsquo;ll build a stop
        here into a{" "}
        <Link href="/safaris/uganda-gorilla-lake-bunyonyi-safari">
          gorilla &amp; Lake Bunyonyi safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
