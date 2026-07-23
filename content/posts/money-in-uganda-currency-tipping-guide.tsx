// ─────────────────────────────────────────────────────────────
//  POST: Money in Uganda — Currency, Cash & Tipping Guide
//  Planning post; currency/tipping facts web-verified (UGX, USD note
//  requirements, tipping ranges). Flagged as volatile (exchange rate).
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

const meta = getPostMeta("money-in-uganda-currency-tipping-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Can I use US dollars in Uganda?",
    a: "Yes, widely — but only notes from 2013 or later, in clean, undamaged condition.",
  },
  {
    q: "Should I tip in dollars or shillings?",
    a: "Larger tips (driver-guides) work well in dollars; smaller tips (porters, casual staff) are often easier for recipients in local shillings.",
  },
  {
    q: "Are ATMs available in the parks?",
    a: "No — withdraw what you need in Kampala or Entebbe before travelling upcountry.",
  },
  {
    q: "How much should I budget for tips?",
    a: "As a rough guide, $10–$20 per day for your driver-guide, plus smaller amounts for porters and trekking staff.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Money questions are some of the most common we get from first-time
        Uganda travellers &mdash; what currency to bring, whether US dollars
        work, and how much to tip. None of it is complicated, but a little
        preparation avoids awkward moments at the border or on the trail.
      </p>

      <p>
        Here&rsquo;s a practical guide to money in Uganda: the currency, how to
        handle cash, and a clear tipping guide for your safari.
      </p>

      <h2>Uganda&rsquo;s Currency</h2>

      <p>
        Uganda&rsquo;s currency is the <strong>Ugandan Shilling (UGX)</strong>.
        Exchange rates fluctuate with global markets, so treat any specific
        figure as a rough guide rather than fixed &mdash; check a current
        converter close to your travel dates.{" "}
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: exchange rates move regularly — don&rsquo;t
          print a specific rate in client-facing material without checking it
          first.]
        </span>
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a5a3a, #141c10)"
        label="Ugandan shilling notes and US dollars laid out together"
      />

      <h2>Bringing US Dollars</h2>

      <p>
        US dollars are widely accepted and useful throughout Uganda, especially
        for tips, permits, and larger purchases &mdash; but there&rsquo;s an
        important catch: banks, forex bureaus, and most businesses will only
        accept <strong>bills printed in 2013 or later</strong>, and they must
        be clean, crisp, and completely free of marks, tears, or folds. Older
        or damaged notes are routinely rejected due to counterfeit concerns, so
        check every bill before you travel.
      </p>

      <h2>Cash, Cards &amp; ATMs</h2>

      <p>
        Uganda is largely a cash-based society, particularly outside major
        towns and especially for tips. ATMs are available in Kampala, Entebbe,
        and larger towns, but are unreliable or absent in remote park areas
        &mdash; withdraw what you need before heading upcountry. Credit cards
        are accepted at many lodges and larger hotels but shouldn&rsquo;t be
        relied on as your only payment method once outside the main cities.
      </p>

      <h2>Uganda Safari Tipping Guide</h2>

      <p>
        Tipping is customary and genuinely appreciated on a Uganda safari.
        Rough, commonly used guidelines:
      </p>

      <ul>
        <li>
          <strong>Driver-guide:</strong>{" "}around USD $10&ndash;$20 per person,
          per day
        </li>
        <li>
          <strong>Gorilla/chimp trekking porters:</strong>{" "}around USD
          $5&ndash;$10 per porter
        </li>
        <li>
          <strong>Trekking rangers/trackers:</strong> a smaller tip, often
          pooled among the group
        </li>
        <li>
          <strong>Lodge staff:</strong>{" "}many lodges keep a shared staff tip box
          &mdash; ask at check-out if unsure
        </li>
      </ul>

      <p>
        US dollars are fine for larger tips like your driver-guide, but{" "}
        <strong>smaller local denominations (Ugandan Shillings) are often
        preferred</strong> for porters and casual tips, since exchanging small
        amounts of foreign currency can be inconvenient for local staff.
        Carrying a mix of both, in small denominations, is the most practical
        approach.{" "}
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: tipping norms and amounts drift over time —
          worth a periodic sense-check against current guide feedback.]
        </span>
      </p>

      <h2>Practical Money Tips</h2>

      <ul>
        <li>
          Bring a mix of small-denomination US dollars ($1, $5, $10, $20) for
          tips and incidentals
        </li>
        <li>Exchange some cash into Ugandan Shillings for markets and small purchases</li>
        <li>Withdraw cash in Kampala or Entebbe before heading to remote parks</li>
        <li>Keep a stash of tip money separate and easily accessible</li>
      </ul>

      <PostFaq title="Money in Uganda FAQ" items={faq} />

      <h2>Travel Prepared</h2>

      <p>
        A little cash preparation goes a long way toward a smooth trip. For the
        rest of your planning, see our guide to{" "}
        <Link href="/blog/planning-a-trip-to-uganda">
          planning a trip to Uganda
        </Link>
        , or{" "}
        <Link href="/contact">get in touch</Link> with any questions before you
        travel.
      </p>
    </BlogPostLayout>
  );
}
