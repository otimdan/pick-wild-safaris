// ─────────────────────────────────────────────────────────────
//  POST: Romantic Honeymoon Safari — Planning Guide
//  Informational companion to the commercial /safari-types/
//  honeymoon-safaris landing page — ideas and planning advice
//  here, booking/CTA there. Images added later —
//  <ImagePlaceholder> marks each photo slot.
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

const meta = getPostMeta("romantic-honeymoon-safari")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Is a safari a good honeymoon idea?",
    a: "Very much so — it offers genuine shared adventure and striking, private settings that a standard resort honeymoon usually can’t match.",
  },
  {
    q: "How long should a honeymoon safari be?",
    a: "Most couples find 7–10 days strikes the right balance — enough time for wildlife and gorilla trekking plus a slower, romantic close, without the trip feeling rushed.",
  },
  {
    q: "Should we combine gorilla trekking with a honeymoon?",
    a: "Many couples do, and it works well — just plan a restful day either side of the trek itself, since it’s physically demanding.",
  },
  {
    q: "Can lodges arrange romantic extras?",
    a: "Yes — private dinners, decorated rooms, and small honeymoon touches are common if requested when you book, rather than as a surprise walk-in ask.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        A honeymoon safari trades the predictable beach-resort script for
        something you&rsquo;ll actually still be talking about at your tenth
        anniversary &mdash; sunrise game drives, a private candlelit dinner
        under an impossible number of stars, and the particular kind of
        closeness that comes from sharing something genuinely wild together.
      </p>

      <p>
        It also takes a bit more thought than a standard itinerary. Here&rsquo;s
        how to plan one well, and where in Uganda and Rwanda it works best.
      </p>

      <h2>Why a Safari Makes Such a Good Honeymoon</h2>

      <ul>
        <li>
          <strong>Shared adventure, not just relaxation:</strong>{" "}you&rsquo;re
          building memories together, not just lying side by side on
          matching loungers
        </li>
        <li>
          <strong>Genuine privacy is easy to arrange:</strong> a private
          vehicle and guide means no joining strangers on your game drives
        </li>
        <li>
          <strong>The settings do the romantic work for you:</strong> a
          tented camp on a forested ridge or a suite over Lake Bunyonyi
          needs very little extra styling to feel like a honeymoon
        </li>
        <li>
          <strong>It pairs naturally with a slowdown:</strong> a few days of
          wildlife followed by a lakeside or beach finish gives the trip a
          satisfying shape
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #7a3a4a, #241014)"
        label="A private dinner table set on a lodge deck at dusk"
      />

      <h2>Where to Go: The Best Honeymoon Settings</h2>

      <ul>
        <li>
          <strong>Bwindi Impenetrable Forest:</strong>{" "}gorilla trekking is
          as close as a honeymoon gets to a shared once-in-a-lifetime
          adventure &mdash; strenuous, emotional, and unforgettable in
          exactly the way you&rsquo;ll want to tell people about for years
        </li>
        <li>
          <strong>Lake Bunyonyi:</strong>{" "}terraced hills, private islands,
          and calm water make it one of East Africa&rsquo;s most romantic
          settings to unwind after trekking &mdash; see our full{" "}
          <Link href="/blog/lake-bunyonyi-guide">Lake Bunyonyi guide</Link>
        </li>
        <li>
          <strong>Queen Elizabeth National Park:</strong> a Kazinga Channel
          boat safari at golden hour is about as good as a sundowner gets
        </li>
        <li>
          <strong>Rwanda&rsquo;s Lake Kivu:</strong> black-sand beaches and
          boutique lakeside lodges, an easy add-on after Rwanda gorilla
          trekking
        </li>
      </ul>

      <h2>Planning Tips for a Honeymoon Safari</h2>

      <ul>
        <li>
          <strong>Go private, not group:</strong>{" "}the cost difference is
          worth it for a honeymoon &mdash; you set the pace, not a bus
          schedule
        </li>
        <li>
          <strong>Tell your lodges in advance:</strong> most properties
          will arrange a private dinner, room decoration, or small touches
          for honeymooners if you let your planner know ahead of time
        </li>
        <li>
          <strong>Time it around comfortable weather:</strong> our{" "}
          <Link href="/blog/best-time-to-visit-uganda">
            best time to visit Uganda
          </Link>{" "}
          guide covers the dry-season windows that make trekking and game
          drives most pleasant
        </li>
        <li>
          <strong>Consider a beach or lake close:</strong>{" "}ending the trip
          somewhere you can genuinely do nothing is its own kind of
          romantic &mdash; see our{" "}
          <Link href="/safari-types/beach-safaris">beach safaris</Link>{" "}
          for lake and coastal extension ideas
        </li>
        <li>
          <strong>Budget realistically:</strong> our guide to{" "}
          <Link href="/blog/how-much-does-an-african-safari-cost">
            how much an African safari costs
          </Link>{" "}
          breaks down what drives the price at every comfort tier
        </li>
      </ul>

      <PostFaq title="Romantic Honeymoon Safari FAQ" items={faq} />

      <h2>Start Planning Your Honeymoon Safari</h2>

      <p>
        See the full shape of what a honeymoon safari with us looks like
        &mdash; private guiding, hand-picked romantic stays, and flexible
        pacing &mdash; on our{" "}
        <Link href="/safari-types/honeymoon-safaris">
          honeymoon safaris
        </Link>{" "}
        page, or tell us your dates directly and we&rsquo;ll start building
        your itinerary.
      </p>
    </BlogPostLayout>
  );
}
