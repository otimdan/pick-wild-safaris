// ─────────────────────────────────────────────────────────────
//  POST: How to Choose a Uganda Safari Company
//  Commercial-intent buyer's guide targeting "uganda safari company"
//  (40) / "safari companies in uganda" (60) / "uganda tour company"
//  (60) — competitors safariuganda.com & experienceuganda.com.
//  Blog-appropriate angle (how to vet an operator) that funnels to
//  /safaris + /contact. Images later — <ImagePlaceholder> marks slots.
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

const meta = getPostMeta("how-to-choose-a-uganda-safari-company")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Should I book with a local or international company?",
    a: "Booking with a reputable Uganda-based operator usually means better value and deeper local knowledge, since they run the trip on the ground themselves.",
  },
  {
    q: "How do I know a safari company is legitimate?",
    a: "Look for Ugandan licensing and AUTO membership, a real local office, transparent itineraries, and genuine independent reviews.",
  },
  {
    q: "Why do gorilla trips cost more?",
    a: "Much of the cost is the government permit itself (USD $800 in peak season), which is fixed and non-negotiable — a legitimate operator won’t undercut it.",
  },
  {
    q: "Can I customise my safari?",
    a: "Yes — a good operator builds a private, tailor-made trip around your dates, interests, and pace.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        On a Uganda safari, the single biggest factor in how your trip turns out
        isn&rsquo;t the itinerary on paper &mdash; it&rsquo;s the company behind
        it. A good operator turns a list of parks into a seamless, safe, genuinely
        moving experience; a poor one can leave you with rushed drives, tired
        vehicles, and permits that never materialise. Yet from the outside, safari
        companies can look almost identical.
      </p>

      <p>
        This is a practical guide to choosing a Uganda safari company you can
        trust &mdash; what actually separates the good ones, the questions worth
        asking, and the red flags to walk away from.
      </p>

      <h2>Local Operator or Overseas Agent?</h2>

      <p>
        The first thing to understand is who you&rsquo;re actually booking with.
        Many trips are sold by overseas travel agents who then hand the
        on-the-ground running to a local Ugandan company &mdash; the{" "}
        <em>ground operator</em>. Booking closer to the source usually means
        better value, deeper local knowledge, and a direct line to the people
        running your trip. A Uganda-based operator knows the guides personally,
        knows which lodges are really worth it, and can react fast when a road
        washes out or a gorilla family moves.
      </p>

      <h2>What to Look For</h2>

      <p>
        A trustworthy Uganda safari company will usually tick most of these boxes:
      </p>

      <ul>
        <li>
          <strong>Proper registration and licensing</strong> &mdash; a licensed
          Ugandan tour operator, ideally a member of the{" "}
          <strong>Association of Uganda Tour Operators (AUTO)</strong>, the
          recognised industry body
        </li>
        <li>
          <strong>A real, physical presence in Uganda</strong> &mdash; a local
          office, local staff, and their own or long-trusted vehicles and guides
        </li>
        <li>
          <strong>Genuine, verifiable reviews</strong> &mdash; on independent
          platforms, not just curated quotes on their own site
        </li>
        <li>
          <strong>Transparent, detailed itineraries</strong> &mdash; clear on
          what&rsquo;s included, which lodges, how many hours of driving, and
          exactly which permits are secured
        </li>
        <li>
          <strong>Knowledgeable, unhurried communication</strong> &mdash; they ask
          about <em>you</em> before quoting, and answer questions properly
        </li>
        <li>
          <strong>Quality guides</strong> &mdash; experienced, well-reviewed
          driver-guides are the heart of a great safari
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a5a6a, #0e1c22)"
        label="A professional driver-guide and safari vehicle at a park gate"
      />

      <h2>The Gorilla-Permit Test</h2>

      <p>
        If your trip includes gorilla trekking, permits are the acid test of a
        real operator. Uganda gorilla permits are issued by the Uganda Wildlife
        Authority, cost <strong>USD $800</strong> per person in peak season, and
        are limited and often booked out months ahead. A credible company will be
        precise about securing them in your name for a specific date; anyone vague
        about permits, or promising them last-minute in high season, is a warning
        sign. We explain how this works in{" "}
        <Link href="/blog/uganda-vs-rwanda-gorilla-trekking">
          Uganda vs Rwanda gorilla trekking
        </Link>{" "}
        and{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>.{" "}
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: gorilla permit is government-set and changes
          &mdash; $800 peak / $600 low season at time of writing. Confirm the
          current figure.]
        </span>
      </p>

      <h2>Questions Worth Asking</h2>

      <ul>
        <li>Are you a licensed Ugandan operator, and are you AUTO members?</li>
        <li>
          Will my gorilla and chimp permits be booked in my name for set dates?
        </li>
        <li>
          Are the vehicles yours, and are they 4&times;4s with pop-up roofs and
          window seats for everyone?
        </li>
        <li>Who will my guide be, and how experienced are they?</li>
        <li>
          Is the trip private and tailor-made, or a fixed group departure?
        </li>
        <li>What exactly is and isn&rsquo;t included in the price?</li>
      </ul>

      <h2>Red Flags</h2>

      <ul>
        <li>
          Prices that seem too good to be true &mdash; usually paid for in cut
          corners, old vehicles, or missing inclusions
        </li>
        <li>Pressure to pay large sums fast, or only by untraceable methods</li>
        <li>Vague itineraries and evasive answers about permits or lodges</li>
        <li>No verifiable local presence or independent reviews</li>
        <li>
          Punishing schedules &mdash; too many parks in too few days, with
          brutal daily drives
        </li>
      </ul>

      <h2>Tailor-Made vs Fixed Departures</h2>

      <p>
        Finally, decide how you want to travel. Fixed group departures can be
        sociable and economical, but a <strong>tailor-made private safari</strong>{" "}
        &mdash; built around your dates, pace, interests, and budget &mdash; is
        where a good local operator really earns its keep. It means your trip
        flexes to you: more time with the gorillas, an extra day for birding, a
        gentler pace, a cultural visit added in. That flexibility is the whole
        point of booking with people who actually run the ground.
      </p>

      <PostFaq title="Choosing a Uganda Safari Company FAQ" items={faq} />

      <h2>Plan Your Trip With Us</h2>

      <p>
        We&rsquo;re a Uganda-focused safari company, and every trip we run is
        private and built around you &mdash; not pulled off a shelf. Browse our{" "}
        <Link href="/safaris">Uganda &amp; East Africa safaris</Link> for a
        starting point, then{" "}
        <Link href="/contact">tell us what you have in mind</Link>{" "}and we&rsquo;ll
        shape an itinerary around your dates, interests, and budget.{" "}
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: which trust credentials should we state here &mdash; AUTO
          membership, UWA/tourism operator licence number, years operating, guide
          certifications, insurance/bonding? Send the real ones and I&rsquo;ll add
          them as a credibility panel; I&rsquo;ve deliberately not invented any.]
        </span>
      </p>
    </BlogPostLayout>
  );
}
