// ─────────────────────────────────────────────────────────────
//  POST: Rwenzori Mountains — The Mountains of the Moon Trekking Guide
//  Destination/adventure guide targeting "rwenzori mountains" queries.
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

const meta = getPostMeta("rwenzori-mountains-trekking-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "How hard is trekking the Rwenzori?",
    a: "Considerably more technical than Kilimanjaro — the full summit trek involves glacier travel and requires basic mountaineering skills.",
  },
  {
    q: "How long does the trek take?",
    a: "Around seven to eight days for the full trek to Margherita Peak; shorter multi-day routes are available for non-summit trekking.",
  },
  {
    q: "Do the Rwenzori really have glaciers?",
    a: "Yes, though they are shrinking rapidly with climate change — less than half their size a century ago.",
  },
  {
    q: "Is Rwenzori better than Kilimanjaro?",
    a: "Not better or worse — different: wilder, wetter, more technical, and far less crowded.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        The ancient Greek geographer Ptolemy described a snow-capped range deep
        in Africa as the source of the Nile, calling it the &ldquo;Mountains of
        the Moon.&rdquo; For centuries it was considered legend &mdash; until
        explorers confirmed the Rwenzori range really does exist, straddling the
        Uganda&ndash;DR Congo border, glaciated and permanently snow-capped almost
        on the equator. It&rsquo;s one of Africa&rsquo;s great, underrated
        trekking destinations.
      </p>

      <p>
        Here&rsquo;s a guide to the Rwenzori Mountains: what makes them unique,
        what trekking here involves, and how they compare to Kilimanjaro.
      </p>

      <h2>The Rwenzori at a Glance</h2>

      <p>
        The Rwenzori are the <strong>highest non-volcanic mountains in the
        world</strong>, a jagged, glaciated range on the Uganda&ndash;DR Congo
        border. Their highest point, <strong>Margherita Peak</strong>{" "}on Mount
        Stanley, reaches 5,109 metres &mdash; the third-highest point in Africa,
        after Kilimanjaro and Mount Kenya. Unlike those two volcanic giants, the
        Rwenzori were pushed up by tectonic faulting, giving them a much more
        rugged, technical character.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a5a6a, #141c22)"
        label="Glaciated, mist-wrapped peaks of the Rwenzori range, the Mountains of the Moon"
      />

      <h2>The Mountains of the Moon</h2>

      <p>
        The nickname comes from the ancient geographer Ptolemy, who described
        snow-capped mountains near the equator as the Nile&rsquo;s source based
        on traders&rsquo; accounts &mdash; a claim that sounded like myth until
        the range was confirmed in the 19th century. The permanent glaciers that
        earned the name are retreating fast with climate change, having shrunk
        by more than half since the early 1900s, so travellers hoping to see them
        are seeing a landscape that&rsquo;s genuinely disappearing.
      </p>

      <h2>What Makes Rwenzori Trekking Different</h2>

      <p>
        Unlike the long, gradual walk-up of Kilimanjaro, a Rwenzori trek is a
        proper mountaineering challenge &mdash; boggy valley floors, dramatic
        vegetation zones (bizarre giant lobelias and groundsel among them),
        scrambling, via ferrata sections, and glacier travel near the summit. The
        full trek to <strong>Margherita Peak</strong> typically takes around{" "}
        <strong>seven to eight days</strong>, and reaching the true summit
        requires basic mountaineering skills and gear (crampons and an ice axe),
        not just fitness.
      </p>

      <p>
        Shorter treks are also available for those who want the experience
        without the full summit push &mdash; multi-day routes into the foothills
        and lower ridgelines that still deliver dramatic scenery, waterfalls, and
        a genuine sense of wilderness, without the technical glacier travel.
      </p>

      <h2>Wildlife &amp; Scenery</h2>

      <p>
        Below the glaciers, the Rwenzori descend through montane forest,
        bamboo, and Afro-alpine moorland &mdash; among the most biodiverse
        vegetation zones in Africa, and home to forest elephants, chimpanzees,
        and striking birdlife, including several species found nowhere else. The
        park is also a UNESCO World Heritage Site for exactly this ecological
        richness.
      </p>

      <h2>Rwenzori vs Kilimanjaro</h2>

      <p>
        Where Kilimanjaro is a long, steady walk that rewards persistence more
        than technical skill, the Rwenzori are wetter, wilder, and considerably
        more technical &mdash; a serious trekking or mountaineering trip rather
        than a long hike. For travellers who&rsquo;ve done Kilimanjaro and want
        something rawer and far less crowded, Rwenzori is the natural next
        challenge. We cover Kilimanjaro separately in our{" "}
        <Link href="/resources/climbing-kilimanjaro">
          Kilimanjaro climbing guide
        </Link>
        .
      </p>

      <h2>Best Time to Trek the Rwenzori</h2>

      <p>
        The driest, most reliable trekking windows are roughly{" "}
        <strong>December to February</strong> and <strong>June to
        August</strong>. The range is genuinely wet even in the dry season, so
        proper rain gear is essential whenever you go.
      </p>

      <PostFaq title="Rwenzori Mountains FAQ" items={faq} />

      <h2>Take On the Mountains of the Moon</h2>

      <p>
        For trekkers who want Africa&rsquo;s wilder high-altitude challenge, the
        Rwenzori deliver in a way few other mountains can. We can build a
        Rwenzori trek into a{" "}
        <Link href="/safaris/uganda-gorilla-rwenzori-mountains-expedition">
          gorilla &amp; Rwenzori Mountains expedition
        </Link>{" "}
        &mdash; tell us your fitness level and how many days you have.
      </p>
    </BlogPostLayout>
  );
}
