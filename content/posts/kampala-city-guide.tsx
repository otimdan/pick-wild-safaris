// ─────────────────────────────────────────────────────────────
//  POST: Kampala — A Traveller's City Guide
//  Destination guide for the gateway city; ties back to the impala
//  etymology hook already used in impala-antelope-facts.
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

const meta = getPostMeta("kampala-city-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Is Kampala worth visiting, or just a stopover?",
    a: "It’s worth at least a half-day — the Kasubi Tombs and a market visit give real insight into Buganda history and daily Ugandan life.",
  },
  {
    q: "Why is Kampala named after an antelope?",
    a: "The city’s hills were once grazing ground for impala herds — the name comes from “hill of the impala” in the local language.",
  },
  {
    q: "Is Kampala the same as Entebbe?",
    a: "No — Entebbe, on Lake Victoria, is where the international airport is located, about 40–60 minutes from central Kampala.",
  },
  {
    q: "How many days do I need in Kampala?",
    a: "A half-day covers the highlights; most travellers use it as a start/end point rather than a multi-day stay.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Almost every Uganda safari begins and ends in Kampala, but most
        itineraries treat it as a place to pass through &mdash; a night near the
        airport before the parks begin. That undersells a genuinely interesting
        city: built across a scatter of green hills, rich in Buganda kingdom
        history, and full of good food and warm energy, worth an afternoon of
        anyone&rsquo;s time.
      </p>

      <p>
        Here&rsquo;s a traveller&rsquo;s guide to Kampala: its history, its top
        sights, and how to spend a day there before or after your safari.
      </p>

      <h2>Kampala at a Glance</h2>

      <p>
        Kampala is built across a series of hills &mdash; historically seven,
        now closer to twenty as the city has grown &mdash; giving it a hilly,
        green character unusual among East African capitals. It&rsquo;s home to
        around 1.5&ndash;2 million people, and functions as the political,
        commercial, and cultural capital of Uganda, as well as the traditional
        seat of the Buganda kingdom.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #5a4a3a, #201810)"
        label="Kampala's hilly skyline at golden hour, viewed from one of its central hills"
      />

      <h2>The City Named After an Antelope</h2>

      <p>
        Kampala&rsquo;s name has a lovely origin story: the hills where the city
        now stands were once grazing ground for herds of impala, and the area
        became known as <em>Kasozi k&rsquo;empala</em> &mdash; &ldquo;the hill of
        the impala&rdquo; &mdash; which shortened over time to Kampala. We tell
        the fuller story, and where you can still see impala in Uganda today, in{" "}
        <Link href="/blog/impala-antelope-facts">impala facts</Link>.
      </p>

      <h2>Top Things to Do in Kampala</h2>

      <ul>
        <li>
          <strong>Kasubi Tombs</strong> &mdash; a UNESCO World Heritage Site and
          the burial ground of Buganda kings, and the city&rsquo;s single most
          important cultural site
        </li>
        <li>
          <strong>Kabaka&rsquo;s Palace (Mengo Palace)</strong> &mdash; the
          traditional seat of the Buganda king, with grounds open to visitors
        </li>
        <li>
          <strong>Uganda National Mosque</strong> &mdash; climb the minaret for a
          360-degree panorama over the city&rsquo;s hills
        </li>
        <li>
          <strong>Owino Market</strong> &mdash; one of East Africa&rsquo;s
          largest markets, a sensory introduction to everyday Kampala
        </li>
        <li>
          <strong>Uganda Museum</strong> &mdash; a compact but worthwhile
          introduction to the country&rsquo;s cultures and history before
          heading upcountry
        </li>
      </ul>

      <h2>Food &amp; Nightlife</h2>

      <p>
        Kampala is where a Uganda trip is easiest to eat well and eat local
        &mdash; from street-side <em>rolex</em> (a rolled chapati and egg
        snack, genuinely worth trying) to proper Ugandan restaurants serving
        matoke, luwombo, and grilled tilapia. The city also has a lively bar and
        live-music scene, a good way to spend an evening before an early flight
        or long drive the next day.
      </p>

      <h2>How Kampala Fits Into Your Safari</h2>

      <p>
        Most trips include one or two nights in Kampala or nearby Entebbe at the
        start and end of the itinerary &mdash; enough time for a half-day city
        tour without cutting into park time. It also works well as a base for a
        day trip to <Link href="/blog/jinja-source-of-the-nile-guide">Jinja</Link>{" "}
        or an overnight stop before heading west toward the parks.
      </p>

      <PostFaq title="Kampala FAQ" items={faq} />

      <h2>Start or End Your Trip Here</h2>

      <p>
        Give Kampala a little time and it rewards you. Tell us your flight dates
        and we&rsquo;ll build a Kampala city tour into the start or end of your{" "}
        <Link href="/safaris">Uganda safari</Link>.
      </p>
    </BlogPostLayout>
  );
}
