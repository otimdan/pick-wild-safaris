// ─────────────────────────────────────────────────────────────
//  POST: African Buffalo Facts
//  Wildlife-facts cluster post; targets "african buffalo facts" /
//  "cape buffalo facts".
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

const meta = getPostMeta("african-buffalo-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Why is the buffalo considered so dangerous?",
    a: "It attacks with little warning, uses its weight and horns with real aggression, and herd members will defend a threatened animal — a combination that makes it one of Africa’s most unpredictable large animals.",
  },
  {
    q: "What is a “dagga boy”?",
    a: "An old bull buffalo that has left the main herd, often considered the most dangerous individual buffalo to encounter.",
  },
  {
    q: "How big are buffalo herds?",
    a: "From a few dozen animals to well over a thousand where grazing is abundant.",
  },
  {
    q: "Are buffalo easy to see on safari?",
    a: "Yes — they’re among the most commonly seen Big Five animals across Uganda’s savanna parks.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Of the Big Five, the African buffalo is the one experienced guides treat
        with the most caution &mdash; not the lion, not the elephant. Bulky,
        short-tempered, and unpredictable, it&rsquo;s earned the nickname
        &ldquo;Black Death&rdquo; among old hunters, and it&rsquo;s a genuinely
        common sight on a Uganda game drive.
      </p>

      <p>
        Here are the facts behind the African buffalo &mdash; why it has such a
        fearsome reputation, how it lives, and where to see it in Uganda.
      </p>

      <h2>African Buffalo Facts at a Glance</h2>

      <ul>
        <li>
          <strong>The most dangerous of the Big Five:</strong> responsible for
          more hunter and guide injuries than lion, leopard, or elephant
        </li>
        <li>
          <strong>Massive herds:</strong> from a few dozen to well over a
          thousand animals
        </li>
        <li>
          <strong>Fused horns:</strong>{" "}males develop a hard &ldquo;boss&rdquo;
          where the horns meet across the forehead
        </li>
        <li>
          <strong>&ldquo;Dagga boys&rdquo;:</strong> old bull buffalo that leave
          the herd and are considered the most dangerous of all
        </li>
        <li>
          <strong>Common across Uganda&rsquo;s savanna parks</strong>
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a3a2a, #101008)"
        label="A large herd of African buffalo grazing on open savanna, dust in the air"
      />

      <h2>Why Buffalo Are the Most Feared of the Big Five</h2>

      <p>
        The &ldquo;Big Five&rdquo; label originally came from hunters ranking
        which animals were most dangerous to pursue on foot &mdash; and the
        buffalo consistently topped the list. Unlike a lion, which usually gives
        warning before charging, a buffalo can turn and attack with almost no
        notice, and it does so with real intent, using its weight and horns to
        gore and trample rather than simply flee. Herd members will also come to
        the defence of a wounded or threatened animal, turning a single
        confrontation into a genuinely dangerous group response.
      </p>

      <h2>The Horns and the &ldquo;Boss&rdquo;</h2>

      <p>
        Both sexes carry horns, but a mature bull&rsquo;s are far more
        formidable &mdash; curving out and down before hooking sharply upward,
        spanning close to a metre across. In older males the base of the horns
        fuses into a thick, bony <strong>&ldquo;boss&rdquo;</strong> across the
        forehead, an almost helmet-like shield that makes a frontal charge even
        harder to survive.
      </p>

      <h2>Herd Life</h2>

      <p>
        African buffalo are intensely social, gathering in herds that can range
        from a few dozen animals to well over a thousand where grazing is good
        &mdash; among the largest herds of any African mammal. Old bulls, known
        as <strong>&ldquo;dagga boys&rdquo;</strong> (from the local word for the
        mud they wallow in), eventually leave the main herd to live in small
        bachelor groups or alone. Cut off from the safety of numbers and often
        irritable, dagga boys are considered by many guides to be the single
        most dangerous animal encountered on a walking safari.
      </p>

      <h2>Where to See Buffalo in Uganda</h2>

      <p>
        Buffalo are widespread and easy to find across Uganda&rsquo;s savanna
        parks &mdash;{" "}
        <Link href="/blog/queen-elizabeth-national-park-guide">
          Queen Elizabeth
        </Link>
        ,{" "}
        <Link href="/blog/murchison-falls-national-park-guide">
          Murchison Falls
        </Link>
        , and{" "}
        <Link href="/blog/kidepo-valley-national-park-guide">
          Kidepo Valley
        </Link>{" "}
        all hold large, healthy herds, often grazing right alongside the road on
        a game drive.
      </p>

      <PostFaq title="African Buffalo FAQ" items={faq} />

      <h2>See the Big Five in Uganda</h2>

      <p>
        The buffalo&rsquo;s reputation only adds to the thrill of spotting one
        safely from a vehicle. Tell us your dates and we&rsquo;ll build a Big
        Five game drive into a{" "}
        <Link href="/safaris/uganda-queen-elizabeth-express-safari">
          Queen Elizabeth safari
        </Link>{" "}
        or your wider Uganda itinerary.
      </p>
    </BlogPostLayout>
  );
}
