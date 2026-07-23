// ─────────────────────────────────────────────────────────────
//  POST: Jackson's Hartebeest — Facts About Uganda's Odd Antelope
//  Targets "jackson's hartebeest facts" (competitor:
//  wildtravelsafaris.com/facts-about-the-jacksons-hartebeest).
//  Uganda-relevant — Murchison Falls & Kidepo. Bridges to those trips.
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

const meta = getPostMeta("jacksons-hartebeest-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "What is a Jackson’s hartebeest?",
    a: "A large East African antelope, widely regarded as a natural cross between the Lelwel and Coke’s hartebeest, found mainly in Uganda and western Kenya.",
  },
  {
    q: "Why does it look so strange?",
    a: "Its high shoulders, sloping back, and long face are typical of all hartebeest — a body plan built for efficient, long-distance running.",
  },
  {
    q: "Do females have horns?",
    a: "Yes — both sexes carry the distinctive ringed, angular horns, though the male’s are heavier.",
  },
  {
    q: "Where can I see one?",
    a: "Most reliably in Murchison Falls and Kidepo Valley National Parks in Uganda.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        With its sloping back, high shoulders, and long, narrow face, the
        Jackson&rsquo;s hartebeest is one of the more peculiar-looking antelopes
        you&rsquo;ll meet on a Uganda safari &mdash; and one of the most
        characteristically Ugandan. If you take a game drive in Murchison Falls or
        Kidepo Valley, this is an animal you&rsquo;re almost certain to see, often
        standing sentinel on a termite mound scanning the plains.
      </p>

      <p>
        Here are the key facts about the Jackson&rsquo;s hartebeest &mdash; what
        it is, why it looks the way it does, and where to find it.
      </p>

      <h2>What Is a Jackson&rsquo;s Hartebeest?</h2>

      <p>
        The Jackson&rsquo;s hartebeest is a large African antelope and a form of
        the widespread hartebeest family. Intriguingly, it&rsquo;s widely
        regarded as a <strong>natural cross between two other hartebeest
        subspecies</strong> &mdash; the Lelwel hartebeest and Coke&rsquo;s
        hartebeest &mdash; which is part of why it looks a little different from
        its relatives. It&rsquo;s found in Uganda and neighbouring parts of
        western Kenya, and Uganda is very much its heartland.{" "}
        <span style={{ opacity: 0.75 }}>
          [VERIFY: the Lelwel &times; Coke&rsquo;s hybrid origin is the commonly
          cited account and matches standard sources; some authors instead treat
          it as a form of the Lelwel hartebeest. Kept as &ldquo;widely regarded
          as.&rdquo;]
        </span>
      </p>

      <h2>How to Recognise One</h2>

      <p>
        The hartebeest silhouette is unmistakable once you know it:
      </p>

      <ul>
        <li>
          <strong>A steeply sloping back</strong> &mdash; tall at the shoulder,
          dropping away toward the hindquarters
        </li>
        <li>
          <strong>An unusually long, narrow face</strong> that gives the animal a
          slightly mournful, elongated look
        </li>
        <li>
          <strong>Ringed, sharply angled horns</strong> on both males and females,
          set on a distinct bony pedestal on top of the head, curving up and then
          back
        </li>
        <li>
          <strong>A tawny, sandy-brown coat</strong>, often with a slightly darker
          sheen, well suited to dry savanna
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #5a4a2a, #201808)"
        label="A Jackson's hartebeest standing on a termite mound, Murchison Falls"
      />

      <h2>Behaviour: The Sentinel of the Plains</h2>

      <p>
        Despite that ungainly build, the hartebeest is one of the fastest and most
        enduring runners on the savanna, able to keep a steady gallop over long
        distances to outlast predators. It lives in loosely organised herds, and
        you&rsquo;ll often notice one individual posted on a high vantage point
        &mdash; a termite mound or rise &mdash; keeping watch for lions and other
        threats while the rest graze. That sentinel habit is one of the easiest
        ways to pick them out on a game drive.
      </p>

      <p>
        They&rsquo;re primarily grazers, feeding on grasses across open and lightly
        wooded country, and they mix easily with other plains game &mdash; you&rsquo;ll
        frequently see them alongside{" "}
        <Link href="/blog/impala-antelope-facts">impala</Link>, kob, zebra, and
        buffalo.
      </p>

      <h2>Where to See Jackson&rsquo;s Hartebeest in Uganda</h2>

      <p>
        Uganda is the best place in the world to see this antelope, and two parks
        stand out:
      </p>

      <ul>
        <li>
          <strong>Murchison Falls National Park</strong> &mdash; where the
          Jackson&rsquo;s hartebeest is one of the most commonly seen antelopes on
          the savanna north of the Nile
        </li>
        <li>
          <strong>Kidepo Valley National Park</strong> &mdash; the remote
          north-eastern wilderness, where it shares the plains with cheetah, lion,
          and herds found almost nowhere else in the country
        </li>
      </ul>

      <p>
        Both parks pair the hartebeest with a full cast of big game. You can build
        Murchison into a{" "}
        <Link href="/safaris/uganda-murchison-falls-safari">
          Murchison Falls safari
        </Link>{" "}
        &mdash; see our full{" "}
        <Link href="/blog/murchison-falls-national-park-guide">
          Murchison Falls guide
        </Link>{" "}
        &mdash; or head north on a{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley wilderness safari
        </Link>
        .
      </p>

      <PostFaq title="Jackson’s Hartebeest FAQ" items={faq} />

      <h2>Meet Uganda&rsquo;s Plains Game</h2>

      <p>
        The Jackson&rsquo;s hartebeest is exactly the kind of animal that makes a
        Uganda safari feel different from the well-trodden circuits elsewhere.
        Tell us what you&rsquo;d love to see and we&rsquo;ll build it into a{" "}
        <Link href="/safaris/uganda-murchison-falls-safari">
          Murchison Falls
        </Link>{" "}
        or{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley
        </Link>{" "}
        itinerary shaped around your trip.
      </p>
    </BlogPostLayout>
  );
}
