// ─────────────────────────────────────────────────────────────
//  POST: Uganda vs Rwanda Gorilla Trekking — Which to Choose?
//  Commercial-comparison post targeting the "uganda vs rwanda
//  gorilla trekking" cluster, bridging to Uganda gorilla trips.
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

const meta = getPostMeta("uganda-vs-rwanda-gorilla-trekking")!;

// Drives both the rendered FAQ section below and the FAQPage JSON-LD
// emitted by app/blog/[slug]/page.tsx. Plain text only — an answer
// engine quotes this verbatim, so markup would leak into the citation.
export const faq: FaqItem[] = [
  {
    q: "Is gorilla trekking cheaper in Uganda or Rwanda?",
    a: "Uganda — the permit is about $800 (or $600 in low season) versus Rwanda's flat $1,500, and lodges span more budgets.",
  },
  {
    q: "Are the gorillas different?",
    a: "No — both countries protect mountain gorillas of the same species, in forests that actually share a border. The difference is the trip, not the animal.",
  },
  {
    q: "Which has the easier trek?",
    a: "Rwanda's volcano slopes are generally more open; Uganda's Bwindi is denser and steeper. Both depend on where the gorillas move that day.",
  },
  {
    q: "Which is better for a longer safari?",
    a: "Uganda, comfortably — there is far more to combine, from chimps to big game to the Nile.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      {/* Answer-first summary: the passage extraction-based answer
          engines are most likely to quote. Keep it self-contained. */}
      <blockquote className="post-quick-answer">
        <strong>Quick answer:</strong>{" "}
        Choose <strong>Uganda</strong>{" "}
        for value and a longer, more varied safari &mdash; permits are $800
        versus Rwanda&rsquo;s $1,500, and there is far more to combine. Choose{" "}
        <strong>Rwanda</strong>{" "}
        for a shorter, more polished trip: Kigali is two hours from the park,
        against a full day&rsquo;s drive to Bwindi. Same species either way.
      </blockquote>
      <p>
        It&rsquo;s the question almost every gorilla traveller wrestles with:{" "}
        <strong>Uganda or Rwanda?</strong> The gorillas themselves are the same
        species &mdash; the same misty forests even span the border between the
        two countries &mdash; but the trips built around them are genuinely
        different. One is the value-and-adventure option with far more to see
        beyond the gorillas; the other is the shorter, more polished, premium-priced
        one.
      </p>

      <p>
        As a Uganda-based operator we&rsquo;ll be upfront about our home turf, but
        the honest answer really does depend on you &mdash; your budget, your time,
        your fitness, and what else you want from the trip. Here&rsquo;s a
        straight comparison to help you decide. (If DR Congo is also in the
        mix, our{" "}
        <Link href="/blog/gorilla-trekking-uganda-vs-rwanda-vs-congo">
          three-way Uganda vs Rwanda vs DR Congo comparison
        </Link>{" "}
        covers all three.)
      </p>

      <h2>Uganda vs Rwanda Gorilla Trekking at a Glance</h2>

      <ul>
        <li>
          <strong>Permit cost:</strong> Uganda ~USD $800; Rwanda USD $1,500
        </li>
        <li>
          <strong>Access:</strong> Rwanda is closer &mdash; a few hours&rsquo;
          drive from Kigali; Uganda&rsquo;s Bwindi is a long drive or short flight
          from Entebbe
        </li>
        <li>
          <strong>Terrain:</strong> Uganda&rsquo;s Bwindi is dense, steep
          rainforest; Rwanda&rsquo;s volcano slopes are more open
        </li>
        <li>
          <strong>Gorilla families &amp; permits:</strong> Uganda has more of
          both, and more availability
        </li>
        <li>
          <strong>Wider safari:</strong> Uganda offers far more to add on &mdash;
          chimps, big game, the Nile; Rwanda is more compact
        </li>
        <li>
          <strong>Style &amp; budget:</strong> Uganda spans budget to luxury;
          Rwanda leans premium/luxury
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a5a4a, #0a2018)"
        label="Split scene — Bwindi's dense rainforest vs Rwanda's Virunga volcano slopes"
      />

      <h2>Permit Cost: The Single Biggest Difference</h2>

      <p>
        Money is where the two countries diverge most sharply. A Uganda gorilla
        permit costs <strong>around USD $800</strong> per person for foreign
        non-residents, and Uganda even discounts it to about $600 in the low-season
        months (April, May, and November). Rwanda&rsquo;s permit is a flat{" "}
        <strong>USD $1,500</strong> per person, with no seasonal discount.
      </p>

      <p>
        That&rsquo;s a $700 difference per person on the permit alone &mdash;
        multiplied across a family or a group, it becomes the deciding factor for
        many travellers. Both permits buy you the same core experience: park
        entry, expert guides and trackers, armed ranger escort, and one strictly
        protected hour with a habituated gorilla family.{" "}
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: permit prices are government-set and change
          periodically &mdash; Uganda $800 (peak) / $600 (low season) and Rwanda
          $1,500 were current at time of writing. Congo/DRC is a cheaper third
          option (~$400) if you ever want to mention it.]
        </span>
      </p>

      <blockquote>
        Rule of thumb: choose Uganda if value matters and you want more safari for
        your money; choose Rwanda if you&rsquo;re short on time and prioritise easy
        access and top-end lodges.
      </blockquote>

      <h2>Getting There &amp; Travel Time</h2>

      <p>
        This is Rwanda&rsquo;s strongest card. Its gorillas live in Volcanoes
        National Park, only a few hours&rsquo; drive from Kigali International
        Airport &mdash; you can land, sleep, trek, and be back in the capital
        inside a tight few days. It&rsquo;s ideal if your holiday is short or
        you&rsquo;re adding gorillas onto another trip.
      </p>

      <p>
        Uganda&rsquo;s prime gorilla forest, Bwindi Impenetrable Forest, sits in
        the far south-west &mdash; a scenic but long drive (most of a day) from
        Entebbe, or a short domestic flight to a nearby airstrip. The upside of
        that distance is everything you pass and can add along the way, which is
        the heart of Uganda&rsquo;s appeal.
      </p>

      <h2>The Trek Itself: Terrain &amp; Difficulty</h2>

      <p>
        Both treks are unpredictable &mdash; you go where the gorillas are, and
        that can mean 30 minutes or the better part of a day on foot. But the
        character of the walk differs. Bwindi is true tangled rainforest: steep,
        muddy, dense, and humid, with the terrain that gave the forest its
        &ldquo;impenetrable&rdquo; name. Rwanda&rsquo;s trekking is on the more
        open slopes of the Virunga volcanoes &mdash; often higher in altitude, but
        with somewhat clearer paths.
      </p>

      <p>
        Neither is a gentle stroll, and fitness helps in both. If you&rsquo;re
        weighing up how hard it will be and how to prepare, our{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>{" "}
        cover fitness, porters, kit, and what the day actually involves.
      </p>

      <h2>The Wider Trip: What Else You Can See</h2>

      <p>
        For many travellers this, not the permit price, is what tips the balance
        &mdash; and it strongly favours Uganda. A gorilla trek in Uganda slots
        naturally into a country bursting with other wildlife: chimpanzee tracking
        in Kibale, tree-climbing lions and a Kazinga Channel boat safari in Queen
        Elizabeth, the thundering Nile at Murchison Falls, and some of the best
        birding in Africa. You can genuinely build a two-week odyssey around a
        single gorilla permit.
      </p>

      <p>
        Rwanda is more compact and more curated &mdash; beautiful, easy, and
        polished, but with less big-game variety to string together. If you want
        the gorillas to be the opening act of a much bigger show, Uganda gives you
        more stage. Our{" "}
        <Link href="/safaris/uganda-gorilla-wildlife-safari">
          Uganda gorilla &amp; wildlife safari
        </Link>{" "}
        is designed to do exactly that, and a{" "}
        <Link href="/safaris/uganda-gorilla-primates-safari">
          gorilla &amp; primates safari
        </Link>{" "}
        pairs the gorillas with chimpanzees in one trip.
      </p>

      <h2>Lodges &amp; Budget</h2>

      <p>
        Rwanda has deliberately positioned itself at the luxury end, with a cluster
        of world-class lodges around Volcanoes National Park and prices to match.
        Uganda spans the full range &mdash; from community-run budget lodges to
        genuinely high-end properties on the edge of Bwindi &mdash; so you can trek
        the same gorillas whether you&rsquo;re travelling lean or celebrating
        something special.
      </p>

      <p>
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: happy to add indicative total trip-cost ranges here if you
          want them &mdash; but per your no-prices policy I&rsquo;ve kept package
          pricing off and only stated the government permit fees. Tell me which way
          you&rsquo;d like it.]
        </span>
      </p>

      <h2>So Which Should You Choose?</h2>

      <p>
        <strong>Choose Rwanda if</strong> you&rsquo;re short on time, want the
        easiest possible access from the airport, are set on a luxury lodge, and
        don&rsquo;t mind paying a premium for convenience and polish.
      </p>

      <p>
        <strong>Choose Uganda if</strong> you want better value on the permit, a
        wilder and more adventurous trek, more gorilla families and permit
        availability, and &mdash; above all &mdash; the chance to combine gorillas
        with chimps, big game, and the rest of an extraordinary safari country. For
        most first-time visitors who want depth as well as gorillas, Uganda is our
        honest recommendation.
      </p>

      <h2>Can You Do Both?</h2>

      <p>
        You can. The two countries border each other, and some travellers trek in
        both to see gorillas in two very different settings &mdash; or combine a
        Uganda safari with a short Rwanda add-on. It&rsquo;s the most expensive
        route (two permits), but for a serious gorilla enthusiast it&rsquo;s a
        remarkable trip.{" "}
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: do you run Rwanda gorilla treks or a Uganda&ndash;Rwanda
          combo? You currently have a Rwanda itinerary focused on Akagera, Lake
          Kivu &amp; culture, not gorillas. If you&rsquo;d like, I can add a Rwanda
          gorilla or combo itinerary and link it here.]
        </span>
      </p>

      <PostFaq title="Uganda vs Rwanda Gorilla Trekking FAQ" items={faq} />

      <h2>Plan Your Gorilla Trek</h2>

      <p>
        Still torn? That&rsquo;s exactly the kind of decision our planners help
        with every day &mdash; matching the country, season, permit, and lodges to
        the trip you actually want. Whether it&rsquo;s a focused{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          short gorilla-tracking trip
        </Link>{" "}
        or a longer{" "}
        <Link href="/safaris/uganda-gorilla-wildlife-safari">
          gorilla &amp; wildlife safari
        </Link>
        , tell us what you have in mind and we&rsquo;ll build it around you. It may
        also help to read up on{" "}
        <Link href="/blog/how-many-mountain-gorillas-are-left">
          how many mountain gorillas are left
        </Link>{" "}
        and why your permit fee matters so much.
      </p>
    </BlogPostLayout>
  );
}
