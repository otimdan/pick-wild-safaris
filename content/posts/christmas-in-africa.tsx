// ─────────────────────────────────────────────────────────────
//  POST: Christmas in Africa — Spending the Holidays on Safari
//  Targets "christmas in africa". Culture + seasonal-planning
//  crossover, bridges to best-time-to-visit and permit pricing.
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

const meta = getPostMeta("christmas-in-africa")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Is Christmas a big holiday in Uganda?",
    a: "Yes — Uganda is predominantly Christian, and Christmas is one of the country’s most widely celebrated holidays, marked by church services, family gatherings, and festive meals.",
  },
  {
    q: "What’s the weather like in Uganda in December?",
    a: "Warm and increasingly dry as the short dry season begins, typically running from December into February.",
  },
  {
    q: "Do parks and lodges stay open over Christmas?",
    a: "Yes — national parks, gorilla trekking, and lodges operate as normal through the holiday period.",
  },
  {
    q: "Do I need to book earlier for a Christmas safari?",
    a: "Yes — December is peak season, so gorilla permits and popular lodges should be booked several months in advance.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        There&rsquo;s no snow, no fireplace, and no turkey defrosting in the
        sink &mdash; and that&rsquo;s exactly the appeal. Spending Christmas
        in Uganda swaps the familiar for something genuinely memorable: warm
        December days, a country in full festive spirit, and mornings that
        might start with a gorilla trek instead of wrapping paper.
      </p>

      <p>
        Uganda is a predominantly Christian country, and Christmas is one of
        its biggest holidays of the year &mdash; celebrated with real warmth,
        not staged for visitors. Here&rsquo;s what the season actually looks
        like, and what to know if you&rsquo;re planning a safari around it.
      </p>

      <h2>What Christmas Looks Like in Uganda</h2>

      <ul>
        <li>
          <strong>Church first:</strong> Christmas Eve and Christmas Day
          services are central to the holiday for most families, often
          long, joyful, and heavily attended
        </li>
        <li>
          <strong>Family and food:</strong>{" "}extended families travel
          &ldquo;upcountry&rdquo; to home villages to celebrate together,
          much like the Western tradition of heading home for the holidays
        </li>
        <li>
          <strong>A proper feast:</strong>{" "}roasted or stewed goat and
          chicken, pilau rice, matoke, and other special dishes well beyond
          the everyday spread &mdash; see our{" "}
          <Link href="/blog/ugandan-food-guide">Ugandan food guide</Link>{" "}
          for the everyday version of the table this builds on
        </li>
        <li>
          <strong>New clothes and gifts:</strong> buying new outfits for
          Christmas Day is a widespread tradition, and markets get
          noticeably busier in the run-up
        </li>
        <li>
          <strong>Music and dance:</strong>{" "}live music, dancing, and
          gatherings run well into Boxing Day and beyond &mdash; a good
          companion read is{" "}
          <Link href="/blog/traditional-music-dance-uganda">
            traditional music and dance in Uganda
          </Link>
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a2a2a, #200a0a)"
        label="A festive family gathering and feast in Uganda"
      />

      <h2>Why December Is a Genuinely Good Time to Visit</h2>

      <p>
        This isn&rsquo;t just a nice-sounding coincidence &mdash; December
        sits right at the start of one of Uganda&rsquo;s two dry seasons,
        which typically runs from December into February. Trails firm up,
        roads improve, and wildlife viewing picks up as animals gather
        around dependable water sources. We cover the full seasonal picture
        in{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <p>
        The trade-off: December is also a genuine peak-season month for
        international travel, so gorilla permits and popular lodges book up
        well ahead of the holiday window. If a Christmas or New Year safari
        is on your radar, the single biggest thing you can do is lock in
        permits early &mdash; see{" "}
        <Link href="/blog/gorilla-permit-prices-explained">
          gorilla permit prices explained
        </Link>{" "}
        for how that process works.
      </p>

      <h2>What Stays Open Over the Holidays</h2>

      <p>
        National parks, lodges, and gorilla trekking all continue to
        operate through Christmas and New Year &mdash; wildlife doesn&rsquo;t
        take a holiday, and neither do the rangers and guides who look after
        it. Some government and city offices close for a day or two around
        the 25th and January 1st, but this has essentially no effect on a
        safari itinerary, which runs through parks and lodges rather than
        city offices.
      </p>

      <h2>A Festive-Season Itinerary Idea</h2>

      <p>
        A popular shape for a Christmas or New Year trip: a few days of
        wildlife and gorilla trekking, followed by a slower, celebratory
        finish &mdash; a lakeside lodge for Christmas dinner, or a quiet spot
        to see in the New Year away from a crowded countdown. Our{" "}
        <Link href="/safari-types/family-friendly-safaris">
          family-friendly safaris
        </Link>{" "}
        pace especially well for a multi-generational holiday trip.
      </p>

      <PostFaq title="Christmas in Africa FAQ" items={faq} />

      <h2>Plan a Festive-Season Safari</h2>

      <p>
        A Christmas or New Year safari takes a bit more advance planning
        than a normal-season trip, but it&rsquo;s absolutely doable with
        enough lead time. Tell us your dates and we&rsquo;ll build the
        itinerary and lock in permits before the season fills up.
      </p>
    </BlogPostLayout>
  );
}
