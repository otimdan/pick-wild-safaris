// ─────────────────────────────────────────────────────────────
//  POST: Gorilla Permit Prices Explained — Uganda vs Rwanda vs Congo
//  Standalone deep-dive on permit pricing (scattered across other
//  posts). Government fees are OK to state per established policy;
//  no package/tour prices printed. Flagged as volatile.
//  Images added later — <ImagePlaceholder> marks each photo slot.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import { getPostMeta } from "@/content/posts/index";

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

const meta = getPostMeta("gorilla-permit-prices-explained")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        A gorilla permit is the single biggest line item on any gorilla
        trekking trip &mdash; and the one piece of pricing we&rsquo;re always
        happy to talk about openly, because it&rsquo;s a fixed government fee,
        not something any operator sets or negotiates. It also varies a lot by
        country, which genuinely affects which destination makes sense for you.
      </p>

      <p>
        Here&rsquo;s a clear breakdown of gorilla permit prices in Uganda,
        Rwanda, and DR Congo &mdash; what each includes, and why they differ so
        much. For the full country-by-country picture beyond just price, see{" "}
        <Link href="/blog/gorilla-trekking-uganda-vs-rwanda-vs-congo">
          Uganda vs Rwanda vs DR Congo
        </Link>
        .
      </p>

      <h2>Gorilla Permit Prices at a Glance</h2>

      <ul>
        <li>
          <strong>Uganda:</strong> USD $800 per person (peak season); around
          $600 in low season (April, May, November)
        </li>
        <li>
          <strong>Rwanda:</strong> USD $1,500 per person, a flat rate
          year-round
        </li>
        <li>
          <strong>DR Congo:</strong> USD $400 per person, sometimes discounted
          to around $200 in low season
        </li>
      </ul>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: all three are government-set fees that change
          periodically without much notice — confirm the current figures with
          each country&rsquo;s wildlife authority before quoting to a client.]
        </span>
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a4a3a, #0a1c14)"
        label="A gorilla family in misty forest, the moment a permit buys you"
      />

      <h2>What the Permit Actually Includes</h2>

      <p>
        In every country, the fee covers the same core experience: a guided
        trek to a habituated gorilla family, park rangers and trackers, and one
        hour with the gorillas once found. It does not cover transport, lodges,
        park entry fees for other activities, tips, or (in most cases)
        porters, who are hired separately and paid directly &mdash; a
        worthwhile expense we cover in{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>.
      </p>

      <h2>Why Does Rwanda Cost Nearly Double Uganda?</h2>

      <p>
        Rwanda made a deliberate strategic choice to position gorilla trekking
        as a premium, lower-volume experience, both to fund conservation more
        directly and to reduce pressure on the gorillas from excessive daily
        visitor numbers. Uganda, with a larger gorilla population spread across
        more habituated families, has kept its permit meaningfully cheaper,
        making it the more budget-friendly (though still far from cheap) of the
        two established destinations. DR Congo is priced lowest, reflecting
        both a less developed tourism infrastructure and, at times, security
        considerations in parts of the country.
      </p>

      <h2>Uganda vs Rwanda: Which Should You Choose?</h2>

      <p>
        Price is only one factor. We cover the fuller comparison &mdash; travel
        time, terrain, and the wider trip &mdash; in{" "}
        <Link href="/blog/uganda-vs-rwanda-gorilla-trekking">
          Uganda vs Rwanda gorilla trekking
        </Link>
        . In short: Uganda offers lower permit costs and a wider safari beyond
        the gorillas; Rwanda offers shorter, easier treks and quicker access
        from Kigali&rsquo;s international airport.
      </p>

      <h2>What About DR Congo?</h2>

      <p>
        DR Congo&rsquo;s Virunga National Park offers the cheapest permits by a
        wide margin, and treks here can be shorter given the gorillas&rsquo;
        proximity to park headquarters. That said, security conditions in
        parts of eastern DR Congo have periodically affected park access in
        recent years, so this route needs careful, up-to-date guidance before
        booking &mdash; not something to plan casually around price alone.{" "}
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: do we currently offer or recommend DRC/Virunga gorilla
          treks? If not, say so and I&rsquo;ll soften this section to
          informational-only rather than implying we can book it.]
        </span>
      </p>

      <h2>Low-Season Discounts</h2>

      <p>
        All three countries offer reduced permit pricing in their quieter
        &ldquo;green season&rdquo; months &mdash; a meaningful saving for
        travellers with flexible dates, and a good reason to pair permit
        booking with our{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          best time to visit Uganda
        </Link>{" "}
        guide.
      </p>

      <h2>Gorilla Permit Prices FAQ</h2>

      <p>
        <strong>Why is a gorilla permit so expensive?</strong> The fee funds
        park protection, ranger salaries, and community conservation programmes
        that make continued gorilla survival possible &mdash; it&rsquo;s
        essentially a direct conservation contribution, not a service fee.
      </p>

      <p>
        <strong>Can permit prices change?</strong> Yes &mdash; they&rsquo;re set
        by each country&rsquo;s government and can change with little notice,
        so always confirm the current rate before booking.
      </p>

      <p>
        <strong>Does the permit include anything else?</strong> Just the trek
        itself and the hour with the gorillas — transport, lodging, and tips
        are all separate.
      </p>

      <p>
        <strong>Is Uganda or Rwanda cheaper?</strong> Uganda, by a significant
        margin ($800 vs $1,500 in peak season) — though Rwanda offers shorter
        treks and easier access.
      </p>

      <h2>Book Your Permit With Confidence</h2>

      <p>
        We handle permit booking as part of every gorilla itinerary, securing
        your date in advance so there are no surprises. Tell us your dates and
        we&rsquo;ll build the right country and season into your{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          gorilla trekking safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
