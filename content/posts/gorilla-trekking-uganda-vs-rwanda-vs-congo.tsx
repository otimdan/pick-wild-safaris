// ─────────────────────────────────────────────────────────────
//  POST: Gorilla Trekking — Uganda vs Rwanda vs DR Congo
//  Three-way country comparison, distinct from the existing
//  Uganda-vs-Rwanda-only post (which barely touches DRC). Pairs
//  with gorilla-trekking-in-africa.tsx as the "which country"
//  companion to that broader overview. DRC framed informationally
//  only — same caution as gorilla-permit-prices-explained.
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

const meta = getPostMeta("gorilla-trekking-uganda-vs-rwanda-vs-congo")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Three countries offer wild mountain gorilla trekking, and they
        differ enough &mdash; in price, access, and the trek itself &mdash;
        that the choice genuinely changes what your trip looks like. Here&rsquo;s
        Uganda, Rwanda, and DR Congo, compared head-to-head.
      </p>

      <h2>At a Glance</h2>

      <ul>
        <li>
          <strong>Uganda:</strong> ~$800 per permit (peak), ~$600 (low
          season) &mdash; longer treks, largest gorilla population, best
          value paired with a wider wildlife safari
        </li>
        <li>
          <strong>Rwanda:</strong> $1,500 per permit, flat year-round &mdash;
          shorter average treks, easiest airport access, most polished
          luxury-lodge scene
        </li>
        <li>
          <strong>DR Congo:</strong> ~$400 per permit (often less in low
          season) &mdash; cheapest by far, but access has periodically been
          affected by regional security conditions
        </li>
      </ul>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: permit prices are government-set fees that
          change periodically — confirm current figures before quoting. See
          also the fuller breakdown in gorilla-permit-prices-explained.]
        </span>
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a5a3a, #0a2014)"
        label="A misty forest ridge on the Uganda–Rwanda–DR Congo border region"
      />

      <h2>Uganda: Best Value, Widest Safari</h2>

      <p>
        Uganda holds roughly half the world&rsquo;s remaining mountain
        gorillas, spread across Bwindi Impenetrable Forest and the smaller
        Mgahinga Gorilla National Park. Permits are cheaper than Rwanda&rsquo;s,
        treks tend to run longer on average, and Uganda pairs naturally with
        a much broader wildlife safari &mdash; tree-climbing lions, chimp
        tracking, and the Nile &mdash; in a way neither Rwanda nor DR Congo
        can match from the same base.
      </p>

      <h2>Rwanda: Shortest Treks, Easiest Access</h2>

      <p>
        Rwanda&rsquo;s Volcanoes National Park sits close to Kigali&rsquo;s
        international airport, meaning less driving before you even start.
        Permits cost almost double Uganda&rsquo;s, a deliberate strategic
        choice to position gorilla trekking as a premium, lower-volume
        experience. In exchange, treks tend to be shorter on average and the
        surrounding lodge scene is some of the most polished in East Africa.
      </p>

      <h2>DR Congo: Cheapest, With Real Caveats</h2>

      <p>
        Virunga National Park offers by far the cheapest permits, and treks
        here can be short given the gorillas&rsquo; proximity to park
        headquarters. That affordability comes with a genuine trade-off:
        parts of eastern DR Congo have periodically experienced security
        issues that have affected park access in recent years, so this
        route needs careful, current, on-the-ground guidance &mdash; not a
        decision made on price alone.{" "}
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: do we currently offer or recommend DRC/Virunga
          gorilla treks? If not, keep this section informational-only rather
          than implying we can book it — same flag as in
          gorilla-permit-prices-explained.]
        </span>
      </p>

      <h2>Which Should You Choose?</h2>

      <ul>
        <li>
          <strong>Choose Uganda if:</strong> you want the best value and
          plan to combine gorillas with a wider wildlife safari
        </li>
        <li>
          <strong>Choose Rwanda if:</strong> you have limited time, want the
          shortest possible treks, and prioritise polished, luxury lodges
        </li>
        <li>
          <strong>Choose DR Congo if:</strong> budget is the deciding factor
          and current security conditions genuinely support it &mdash; go
          in with realistic, up-to-date expectations
        </li>
      </ul>

      <p>
        For the fuller Uganda-Rwanda comparison beyond just gorillas &mdash;
        terrain, wider trip options, and travel time &mdash; see{" "}
        <Link href="/blog/uganda-vs-rwanda-gorilla-trekking">
          Uganda vs Rwanda gorilla trekking
        </Link>
        , and for the broader picture of what gorilla trekking involves
        wherever you go, start with{" "}
        <Link href="/blog/gorilla-trekking-in-africa">
          gorilla trekking in Africa: the complete guide
        </Link>
        .
      </p>

      <h2>Uganda vs Rwanda vs DR Congo FAQ</h2>

      <p>
        <strong>Which country is cheapest for gorilla trekking?</strong> DR
        Congo, by a wide margin &mdash; though security conditions need
        current verification before booking.
      </p>

      <p>
        <strong>Which country has the shortest treks?</strong> Rwanda,
        generally, thanks to gorilla families ranging closer to park
        access points on average &mdash; though no country can guarantee
        trek length, since it depends on where the family is that day.
      </p>

      <p>
        <strong>Can I combine countries in one trip?</strong> Yes &mdash;
        pairing Uganda and Rwanda gorilla trekking in a single itinerary is
        a popular, well-trodden route.
      </p>

      <p>
        <strong>Which country is best for a wider safari, not just
        gorillas?</strong> Uganda, by a clear margin &mdash; its parks cover
        far more ground and wildlife variety than Rwanda&rsquo;s.
      </p>

      <h2>Build Your Gorilla Trekking Itinerary</h2>

      <p>
        See what a gorilla trek with us actually includes on our{" "}
        <Link href="/gorilla-trekking">gorilla trekking</Link> page. Tell us
        your budget, timeframe, and whether gorillas are the whole trip or
        one part of a wider safari, and we&rsquo;ll recommend the right
        country &mdash; starting with our{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          Bwindi gorilla tracking safari
        </Link>{" "}
        or a{" "}
        <Link href="/safaris/uganda-rwanda-gorilla-safari">
          Uganda &amp; Rwanda double gorilla safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
