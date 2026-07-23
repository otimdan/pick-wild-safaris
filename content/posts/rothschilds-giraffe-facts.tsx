// ─────────────────────────────────────────────────────────────
//  POST: Rothschild's Giraffe Facts
//  Wildlife-facts cluster post; targets "rothschild's giraffe facts".
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

const meta = getPostMeta("rothschilds-giraffe-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "How do I tell a Rothschild’s giraffe from other subspecies?",
    a: "Its plain white lower legs, with no patterning below the knee, are the clearest field mark.",
  },
  {
    q: "Is the Rothschild’s giraffe endangered?",
    a: "Yes — classified as near threatened, with a global population in the low thousands.",
  },
  {
    q: "Where can I see one?",
    a: "Murchison Falls National Park in Uganda holds the largest single population in the world.",
  },
  {
    q: "How many ossicones does it have?",
    a: "Typically five — the only giraffe type usually born this way, versus the usual two.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Of all the giraffe you might see on an African safari, the one grazing
        the plains of Murchison Falls is among the rarest and most important
        conservation stories on the continent. The Rothschild&rsquo;s giraffe
        was once down to a few hundred individuals &mdash; today, thanks in large
        part to Uganda, its numbers are climbing.
      </p>

      <p>
        Here are the facts behind the Rothschild&rsquo;s giraffe: how to
        recognise it, why it&rsquo;s endangered, and why Murchison Falls is the
        best place on earth to see one.
      </p>

      <h2>Rothschild&rsquo;s Giraffe Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Near threatened:</strong> one of the rarest giraffe
          populations in Africa
        </li>
        <li>
          <strong>Distinctive &ldquo;white stockings&rdquo;:</strong> no
          patterning below the knee, unlike other giraffe subspecies
        </li>
        <li>
          <strong>Five ossicones:</strong> the only giraffe type born with five
          horn-like knobs instead of two
        </li>
        <li>
          <strong>Uganda stronghold:</strong> over 60% of the world population
          lives here, mostly in Murchison Falls
        </li>
        <li>
          <strong>A genuine conservation success</strong> &mdash; numbers in
          Murchison have grown many times over in two decades
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #8a7a4a, #322a14)"
        label="A tower of Rothschild's giraffe on the savanna at Murchison Falls, white lower legs visible"
      />

      <h2>How to Recognise a Rothschild&rsquo;s Giraffe</h2>

      <p>
        The easiest field mark is at the bottom: a Rothschild&rsquo;s giraffe has{" "}
        <strong>plain white lower legs</strong>, with no patches below the knee
        &mdash; giving the impression it&rsquo;s wearing socks or stockings.
        Compared to the more common Masai giraffe seen further south in East
        Africa, its blotches are paler, less jagged, and separated by a creamier
        network of lines. It&rsquo;s also among the tallest giraffe subspecies,
        with bulls reaching nearly 6 metres, and is the only giraffe type
        typically born with <strong>five ossicones</strong> (the horn-like knobs
        on the head) instead of the usual two.
      </p>

      <h2>Why It&rsquo;s Endangered</h2>

      <p>
        The Rothschild&rsquo;s giraffe is classified as near threatened, with
        an estimated global population in the low thousands &mdash; a small
        fraction of the giraffe population as a whole. Habitat loss and past
        civil conflict across its range in Uganda and Kenya pushed numbers
        dangerously low in the late 20th century, and very few strongholds
        remain in the wild today.
      </p>

      <h2>Murchison Falls: A Conservation Success</h2>

      <p>
        Murchison Falls National Park now holds the <strong>largest single
        population of Rothschild&rsquo;s giraffe in the world</strong> &mdash;
        over 1,500 individuals, up from just a few hundred two decades ago. It&rsquo;s
        a genuine conservation turnaround, driven by sustained protection within
        the park, and it means a Murchison game drive offers some of the most
        reliable giraffe sightings anywhere on the continent. We cover the wider
        park in our{" "}
        <Link href="/blog/murchison-falls-national-park-guide">
          Murchison Falls guide
        </Link>
        .
      </p>

      <PostFaq title="Rothschild’s Giraffe FAQ" items={faq} />

      <h2>See Uganda&rsquo;s Conservation Success Story</h2>

      <p>
        A Murchison Falls game drive is one of the best places on earth to watch
        this rare giraffe up close. Tell us your dates and we&rsquo;ll build it
        into a{" "}
        <Link href="/safaris/uganda-murchison-falls-safari">
          Murchison Falls safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
