// ─────────────────────────────────────────────────────────────
//  POST: How Much Does an African Safari Cost?
//  Cost-driver breakdown, not a fixed price list — Pick Wild
//  package prices stay off both itinerary and blog pages per
//  policy. Ballpark industry ranges flagged [VERIFY] since they
//  drift. Bridges to permit pricing, tipping, and country choice.
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

const meta = getPostMeta("how-much-does-an-african-safari-cost")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        There&rsquo;s no single answer to what an African safari costs
        &mdash; a three-day budget camping trip and a two-week private
        fly-in circuit are both &ldquo;a safari,&rdquo; and they can differ
        in price by a factor of ten or more. What actually matters is
        understanding the handful of things that drive the number, so you
        can budget realistically for the trip you actually want.
      </p>

      <p>
        Here&rsquo;s what goes into the cost of a safari, in roughly the
        order of impact.
      </p>

      <h2>The Biggest Cost Drivers</h2>

      <ul>
        <li>
          <strong>Country and permits:</strong> gorilla trekking permits
          alone range from around $400 to $1,500 per person depending on
          country &mdash; see{" "}
          <Link href="/blog/gorilla-permit-prices-explained">
            gorilla permit prices explained
          </Link>{" "}
          for the full breakdown. Countries without gorilla permits (most
          classic wildlife safaris) skip this cost entirely
        </li>
        <li>
          <strong>Accommodation tier:</strong> the single biggest lever on
          daily cost &mdash; basic camping and budget lodges sit at one end,
          boutique and luxury camps at the other, with a wide mid-range in
          between. Our{" "}
          <Link href="/safari-types/luxury-safaris">luxury safaris</Link>{" "}
          guide covers what the top tier actually includes
        </li>
        <li>
          <strong>Private vs. group travel:</strong> a private vehicle and
          guide for just your group costs more per person than joining a
          shared group departure, but buys flexibility, privacy, and pace
        </li>
        <li>
          <strong>Road transfers vs. fly-in:</strong> light-aircraft
          transfers between parks cost meaningfully more than road
          transfers but save entire days &mdash; the trade-offs are covered
          in{" "}
          <Link href="/blog/road-safari-vs-fly-in-safari-uganda">
            road safari vs fly-in safari
          </Link>
        </li>
        <li>
          <strong>Trip length and season:</strong> longer trips cost more in
          total but less per day on average, and peak-season months
          command higher lodge rates than the quieter green season
        </li>
        <li>
          <strong>International flights:</strong> often the most variable
          cost of all, and entirely separate from the ground safari price
          &mdash; booked well ahead, they can swing the total trip cost
          significantly
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #7a6a2a, #241e08)"
        label="A private safari vehicle parked beside a game-viewing lodge"
      />

      <h2>Rough Ballpark Ranges</h2>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: the ranges below are broad, commonly
          cited industry ballparks for East Africa ground costs (accommodation,
          meals, park fees, guiding) per person per day, excluding
          international flights and gorilla permits. They drift with fuel,
          lodge rates, and currency — confirm against current supplier
          rates before publishing or quoting.]
        </span>
      </p>

      <ul>
        <li>
          <strong>Budget / camping safari:</strong> roughly $150&ndash;250
          per person per day
        </li>
        <li>
          <strong>Mid-range lodge safari:</strong> roughly $250&ndash;450 per
          person per day
        </li>
        <li>
          <strong>Luxury safari:</strong> roughly $450&ndash;1,000+ per
          person per day
        </li>
      </ul>

      <p>
        These figures are directional, not a quote &mdash; the only way to
        get a real number is a tailored itinerary, since two trips at the
        same &ldquo;tier&rdquo; can still vary a lot by country, season, and
        specific lodges chosen.
      </p>

      <h2>What&rsquo;s Usually Included vs. Extra</h2>

      <p>
        Most safari quotes bundle accommodation, meals, park entry fees,
        a guide, and ground transport into one price. Commonly excluded:
        international flights, visas, travel insurance, gorilla or
        chimpanzee permits (often quoted separately since they&rsquo;re
        fixed government fees), tips, and personal spending. Our guide to{" "}
        <Link href="/blog/money-in-uganda-currency-tipping-guide">
          money and tipping in Uganda
        </Link>{" "}
        covers how to budget for that last piece.
      </p>

      <h2>Does the Country You Choose Change the Price a Lot?</h2>

      <p>
        Yes, meaningfully. Uganda is generally more affordable than Kenya or
        Tanzania at a comparable comfort level, particularly once gorilla
        permit pricing is factored in versus Rwanda. We compare the three
        head-to-head &mdash; cost, wildlife, and travel logistics &mdash; in{" "}
        <Link href="/blog/uganda-vs-kenya-vs-tanzania-safari">
          Uganda vs Kenya vs Tanzania
        </Link>
        .
      </p>

      <h2>How to Budget Sensibly</h2>

      <p>
        Rather than starting from a target daily rate, start from what
        matters most to you &mdash; gorillas, the Great Migration, a
        honeymoon-worthy lodge, a family-friendly pace &mdash; and let that
        shape the itinerary. A good operator will then tell you plainly
        where the cost is going, rather than hiding it behind a single
        bundled number.
      </p>

      <h2>Safari Cost FAQ</h2>

      <p>
        <strong>What&rsquo;s the average cost of an African safari?</strong>{" "}
        It varies enormously by country, season, and comfort level &mdash;
        there&rsquo;s no meaningful single average. A tailored quote based
        on your priorities is far more useful than any headline figure.
      </p>

      <p>
        <strong>Is Uganda cheaper than Kenya or Tanzania?</strong> Generally
        yes at a comparable tier, though gorilla permit pricing versus
        Rwanda flips that comparison &mdash; see the country-by-country
        breakdown linked above.
      </p>

      <p>
        <strong>What&rsquo;s the biggest cost I might not think of?</strong>{" "}
        International flights and gorilla/chimpanzee permits &mdash; both
        are usually quoted separately from the ground safari price.
      </p>

      <p>
        <strong>Do prices include tips?</strong> No &mdash; tips for guides,
        drivers, and lodge staff are almost always a separate, personal
        expense on top of the quoted price.
      </p>

      <h2>Get a Real Number</h2>

      <p>
        Ballparks only get you so far. Tell us your dates, priorities, and
        rough budget, and we&rsquo;ll come back with an itemised, tailored
        proposal &mdash; not a rate card.
      </p>
    </BlogPostLayout>
  );
}
