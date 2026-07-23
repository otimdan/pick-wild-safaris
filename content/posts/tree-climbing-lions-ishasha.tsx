// ─────────────────────────────────────────────────────────────
//  POST: The Tree-Climbing Lions of Ishasha
//  Informational post targeting "tree climbing lions Ishasha /
//  Queen Elizabeth" queries, bridging to QE safaris.
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

const meta = getPostMeta("tree-climbing-lions-ishasha")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Where can you see tree-climbing lions in Uganda?",
    a: "In the Ishasha sector at the southern end of Queen Elizabeth National Park.",
  },
  {
    q: "Why do the lions climb trees?",
    a: "Most likely to escape heat and biting insects and to watch for prey — but it’s a rare, learned behaviour, not something all lions do.",
  },
  {
    q: "Are you guaranteed to see them?",
    a: "No — they’re wild and roam a large area. Visiting during the midday heat with an experienced guide gives you the best chance.",
  },
  {
    q: "Where else in the world do lions climb trees?",
    a: "The other famous population is around Lake Manyara in Tanzania; the behaviour is otherwise very unusual.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Lions are not supposed to climb trees. They&rsquo;re heavy, they&rsquo;re
        not built for it, and across most of Africa they don&rsquo;t bother. And
        yet in one remote, golden corner of Uganda, you&rsquo;ll round a bend and
        find an entire pride draped across the branches of a fig tree like
        oversized house cats &mdash; paws dangling, tails swaying, utterly
        unbothered. These are the famous tree-climbing lions of Ishasha, and
        they&rsquo;re one of the strangest sights on an African safari.
      </p>

      <p>
        Here&rsquo;s where to find them, the leading theories on why they do it,
        and how to plan a visit that gives you the best shot at seeing them.
      </p>

      <h2>Where Are the Tree-Climbing Lions?</h2>

      <p>
        They live in the <strong>Ishasha sector</strong>, the wild southern tip of
        Queen Elizabeth National Park in south-western Uganda. Ishasha is quieter
        and more remote than the park&rsquo;s busier northern areas &mdash; open
        savanna dotted with large fig and acacia trees, threaded by the Ishasha
        River that marks the border with the Democratic Republic of the Congo.
        Those big, shady trees are the whole show: it&rsquo;s in their branches
        that the lions spend the heat of the day.
      </p>

      <p>
        Tree-climbing behaviour is genuinely rare. Only a couple of lion
        populations on earth are known for doing it habitually &mdash; Ishasha and
        the Lake Manyara area of Tanzania &mdash; which is exactly why Ishasha has
        become such a sought-after detour.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a5a2a, #221a08)"
        label="Lions lounging in the branches of a fig tree at Ishasha, Queen Elizabeth NP"
      />

      <h2>Why Do the Lions Climb Trees?</h2>

      <p>
        The honest answer is that no one is completely certain &mdash; it&rsquo;s a
        learned behaviour passed down within these prides rather than something all
        lions do. But researchers and guides offer several plausible, probably
        overlapping, explanations:
      </p>

      <ul>
        <li>
          <strong>Escaping the heat:</strong>{" "}a breeze moves through the branches
          that doesn&rsquo;t reach the ground, and the lions catch it in the
          midday sun
        </li>
        <li>
          <strong>Avoiding biting insects:</strong> tsetse flies and other biting
          insects are more troublesome at ground level
        </li>
        <li>
          <strong>A better vantage point:</strong>{" "}from up high the lions can
          survey the plains for prey &mdash; and for the Uganda kob and buffalo
          they hunt
        </li>
        <li>
          <strong>Comfort and habit:</strong> quite simply, these particular
          prides have learned to enjoy it, and cubs grow up copying their elders
        </li>
      </ul>

      <p>
        Whatever the reason, the result is unforgettable: several hundred
        kilograms of big cat balanced improbably in a tree, watching you as calmly
        as you watch them.
      </p>

      <h2>Best Time to See Them</h2>

      <p>
        Timing and patience both matter. The lions are most likely to be up in the
        trees during the <strong>heat of the day</strong>, roughly late morning to
        mid-afternoon, when the ground is hottest &mdash; the opposite of the usual
        dawn-and-dusk game-drive rhythm. In terms of season, the drier months
        (June to September, and around December to February) generally mean easier
        tracks into the remote Ishasha sector and good general game viewing.
      </p>

      <p>
        A word of honesty: these are wild lions in a large area, and they
        don&rsquo;t perform on cue. Some days they&rsquo;re splayed across a fig
        tree in plain view; other days they&rsquo;re on the ground or elsewhere
        entirely. A knowledgeable guide who knows the prides&rsquo; favourite trees
        dramatically improves your odds.
      </p>

      <h2>What Else to See in Queen Elizabeth</h2>

      <p>
        Ishasha is one corner of a park that ranks among Uganda&rsquo;s finest.
        Queen Elizabeth National Park spreads across savanna, crater lakes, and
        wetlands, and a full visit typically pairs Ishasha with:
      </p>

      <ul>
        <li>
          <strong>The Kazinga Channel boat safari</strong> &mdash; cruising past
          some of Africa&rsquo;s densest concentrations of hippo and elephant
        </li>
        <li>
          <strong>Kasenyi plains game drives</strong> &mdash; lions, elephants,
          buffalo, and herds of Uganda kob
        </li>
        <li>
          <strong>Kyambura Gorge</strong> &mdash; chimpanzee tracking in a
          forested rift valley
        </li>
        <li>
          <strong>Superb birding</strong> &mdash; the park&rsquo;s list runs to
          over 600 species
        </li>
      </ul>

      <h2>How to Visit Ishasha</h2>

      <p>
        Because Ishasha sits in the far south of the park, it&rsquo;s often visited
        as a stop on the way between Queen Elizabeth and the gorillas of Bwindi
        &mdash; a natural, convenient detour rather than a separate trip. You can
        include it on{" "}
        <Link href="/safaris/uganda-gorilla-queen-elizabeth-safari">
          our Uganda gorilla &amp; Queen Elizabeth safari
        </Link>
        , or focus on the park itself with a{" "}
        <Link href="/safaris/uganda-queen-elizabeth-express-safari">
          short Queen Elizabeth safari
        </Link>
        . Timing the wider trip is easier with our guide to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <PostFaq title="Tree-Climbing Lions FAQ" items={faq} />

      <h2>Go Find Them</h2>

      <p>
        There are few odder or more delightful sights in African wildlife than a
        lion asleep in a tree. If you&rsquo;d like to try your luck in Ishasha,
        we&rsquo;ll build it into a{" "}
        <Link href="/safaris/uganda-gorilla-queen-elizabeth-safari">
          Queen Elizabeth &amp; gorilla safari
        </Link>{" "}
        shaped around your dates &mdash; just tell us what you have in mind.
      </p>
    </BlogPostLayout>
  );
}
