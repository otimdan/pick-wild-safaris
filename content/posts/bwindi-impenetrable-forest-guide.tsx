// ─────────────────────────────────────────────────────────────
//  POST: Bwindi Impenetrable Forest — The Complete Guide
//  Destination guide for Uganda's #1 draw, targeting "bwindi
//  impenetrable forest / national park" queries. Mirrors the
//  murchison-falls-national-park-guide pattern. Closes a real gap:
//  Bwindi is cross-linked from nearly every gorilla post but had no
//  dedicated park guide of its own.
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

const meta = getPostMeta("bwindi-impenetrable-forest-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Why is it called “Impenetrable”?",
    a: "The forest is genuinely dense, steep, and tangled with vegetation — the name is a literal description, not just branding.",
  },
  {
    q: "How many gorillas live in Bwindi?",
    a: "Around 459 — nearly half of all the mountain gorillas left on earth.",
  },
  {
    q: "Which sector should I choose?",
    a: "It depends on your permit allocation, fitness level, and lodge — Buhoma is gentlest, Nkuringo the most demanding; a good operator matches sector to trekker.",
  },
  {
    q: "How fit do I need to be?",
    a: "Reasonably fit and prepared for several hours of steep, sometimes muddy hiking — see our full gorilla trekking tips.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Bwindi is the reason most people first look at a map of Uganda. A wall of
        ancient, tangled rainforest draped over a range of steep hills in the
        country&rsquo;s far south-west, it holds the single greatest concentration
        of mountain gorillas left on earth &mdash; and the trek to reach them is
        one of the most physically and emotionally intense experiences in African
        travel.
      </p>

      <p>
        Here&rsquo;s your complete guide to Bwindi Impenetrable Forest: what makes
        it so special, the four trekking sectors, the wildlife beyond the
        gorillas, and how to plan a visit.
      </p>

      <h2>Bwindi at a Glance</h2>

      <p>
        Bwindi Impenetrable National Park covers about 321 square kilometres of
        south-western Uganda, ranging in altitude from roughly 1,160 to 2,607
        metres &mdash; a swing that packs lowland and montane rainforest into one
        park. It&rsquo;s one of the oldest and most biologically diverse forests
        in Africa, with over 160 tree species and 100 species of ferns, and has
        been a UNESCO World Heritage Site since 1994. The name is well earned:
        the forest is genuinely dense, steep, and tangled &mdash; &ldquo;impenetrable&rdquo;
        in more than just marketing copy.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #1e3a24, #06120a)"
        label="Mist rising over the dense, steep rainforest canopy of Bwindi"
      />

      <h2>Mountain Gorillas: The Main Event</h2>

      <p>
        Bwindi protects around 459 mountain gorillas &mdash; nearly half of the
        entire world population &mdash; spread across more than a dozen
        habituated families available for trekking. Finding them means hiking
        through dense, often steep and muddy forest behind a ranger and trackers,
        for anywhere from thirty minutes to several hours, before spending one
        precious hour in the presence of a family. We cover the population story
        in full in{" "}
        <Link href="/blog/how-many-mountain-gorillas-are-left">
          how many mountain gorillas are left
        </Link>
        , and how to prepare physically in{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>.
      </p>

      <h2>The Four Trekking Sectors</h2>

      <p>
        Bwindi is split into four distinct trailhead areas, each with its own
        character:
      </p>

      <ul>
        <li>
          <strong>Buhoma</strong> &mdash; the original, most established sector
          in the north, with gentler terrain and the widest choice of lodges
        </li>
        <li>
          <strong>Ruhija</strong> &mdash; high, cool, and excellent for birding,
          in the east of the park
        </li>
        <li>
          <strong>Rushaga</strong> &mdash; the south, with the largest number of
          habituated families and the option of the longer gorilla habituation
          experience
        </li>
        <li>
          <strong>Nkuringo</strong> &mdash; remote and scenic, generally the
          most physically demanding sector, with steep terrain and big views
        </li>
      </ul>

      <p>
        Which sector you trek from is usually decided by where your permit is
        allocated and where you&rsquo;re staying, and a good operator will match
        the two.
      </p>

      <h2>Beyond the Gorillas</h2>

      <p>
        Gorillas are the headline, but Bwindi rewards a longer look. The forest
        holds chimpanzees (in smaller, less-visited numbers than Kibale), the
        striking black-and-white colobus and L&rsquo;Hoest&rsquo;s monkey, and
        outstanding birding &mdash; over 350 species, including several Albertine
        Rift endemics found almost nowhere else. Guided nature walks, waterfall
        hikes, and visits to Batwa communities living around the forest edge add
        real depth to a Bwindi stay; we cover the Batwa story with care in{" "}
        <Link href="/blog/tribes-and-cultures-of-uganda">
          the tribes and cultures of Uganda
        </Link>
        .
      </p>

      <h2>Best Time to Visit Bwindi</h2>

      <p>
        Bwindi can be trekked year-round, but the <strong>dry seasons</strong>{" "}
        &mdash; roughly June to September and December to February &mdash; bring
        firmer, less slippery trails, which matters on Bwindi&rsquo;s steep
        terrain. The wetter months are quieter and greener, with a lower-cost
        gorilla permit in some periods. See our month-by-month breakdown in{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <h2>How to Visit Bwindi</h2>

      <p>
        Bwindi sits in Uganda&rsquo;s remote south-west, reached by a scenic
        (long) drive from Kampala, often broken up with a stop at Lake Mburo, or
        by a short domestic flight into one of the airstrips near the park. Most
        visitors pair Bwindi with a savanna park and Kibale&rsquo;s chimps into a
        single loop &mdash; see our{" "}
        <Link href="/safaris/uganda-gorilla-primates-safari">
          gorilla &amp; primates safari
        </Link>{" "}
        or the faster{" "}
        <Link href="/safaris/uganda-gorilla-flyin-safari">
          gorilla fly-in safari
        </Link>
        , which links Bwindi to Murchison and Queen Elizabeth by light aircraft.
      </p>

      <PostFaq title="Bwindi Impenetrable Forest FAQ" items={faq} />

      <h2>Plan Your Bwindi Trek</h2>

      <p>
        There are few places on earth that reward the effort of getting there
        quite like Bwindi. Tell us your dates and fitness level and we&rsquo;ll
        build the right sector, lodge, and route into a{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          Bwindi gorilla trekking safari
        </Link>{" "}
        shaped around you.
      </p>
    </BlogPostLayout>
  );
}
