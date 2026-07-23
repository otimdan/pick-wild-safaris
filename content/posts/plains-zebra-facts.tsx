// ─────────────────────────────────────────────────────────────
//  POST: Plains Zebra Facts
//  Wildlife-facts cluster post; targets "zebra facts".
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

const meta = getPostMeta("plains-zebra-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Why do zebras have stripes?",
    a: "The leading theories are predator confusion, deterring biting flies, and temperature regulation — likely some combination of all three.",
  },
  {
    q: "Is every zebra’s stripe pattern different?",
    a: "Yes — as unique as a human fingerprint, and used by zebras to recognise one another.",
  },
  {
    q: "Where can I see zebra in Uganda?",
    a: "Only in Lake Mburo National Park and Kidepo Valley National Park.",
  },
  {
    q: "What is a zebra family group called?",
    a: "A harem — one stallion, several mares, and their young, staying together within larger herds.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Every zebra&rsquo;s stripes look similar at a glance &mdash; and yet no
        two are ever quite the same. The plains zebra (the subspecies found in
        Uganda is also known as Burchell&rsquo;s zebra) is one of Africa&rsquo;s
        most instantly recognisable animals, and in Uganda, it&rsquo;s also one
        of the rarest, found in just two national parks.
      </p>

      <p>
        Here are the facts behind the plains zebra: what its stripes are
        actually for, how zebra society works, and where to see them in
        Uganda.
      </p>

      <h2>Plains Zebra Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Every stripe pattern is unique</strong> &mdash; as individual
          as a human fingerprint
        </li>
        <li>
          <strong>Stripes broaden toward the flanks</strong>, becoming more
          horizontal on the legs and rear
        </li>
        <li>
          <strong>Lives in family groups called harems</strong>, led by a
          dominant stallion
        </li>
        <li>
          <strong>Found in only two Ugandan parks:</strong> Lake Mburo and
          Kidepo Valley
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a4a4a, #141414)"
        label="A small herd of zebra grazing at Lake Mburo, distinct stripe patterns visible"
      />

      <h2>Why Do Zebras Have Stripes?</h2>

      <p>
        Scientists still debate the exact purpose of zebra stripes, with several
        credible theories in play: confusing predators by making it hard to
        single out one animal in a moving herd, deterring biting flies (which
        appear to be less attracted to striped surfaces), and aiding
        temperature regulation. Whatever the primary driver, one thing is
        certain &mdash; each zebra&rsquo;s pattern is unique, and animals can
        recognise each other individually by their stripes, much as humans
        recognise faces.
      </p>

      <h2>A Fingerprint Made of Fur</h2>

      <p>
        No two zebras share exactly the same stripe pattern. The stripes are
        broadest and most horizontal toward the flanks and back, run vertically
        from the neck down into a short, upright mane, and narrow into thinner,
        more horizontal bands on the legs down to the hooves &mdash; a layout
        consistent enough to identify the species at a glance, but individual
        enough that researchers use stripe patterns to track specific animals
        over time.
      </p>

      <h2>Family Life: The Harem</h2>

      <p>
        Zebras live in stable family groups called <strong>harems</strong>{" "}
        &mdash; typically one dominant stallion, several mares, and their
        young &mdash; which stick together even as they merge into larger,
        looser herds around water and good grazing. Unlike many herd animals,
        zebra family units retain their identity within the bigger group,
        recognisable to each other by sight, sound, and smell as much as by
        stripe pattern.
      </p>

      <h2>Where to See Zebra in Uganda</h2>

      <p>
        Zebra are surprisingly limited in Uganda, found in just two national
        parks:
      </p>

      <ul>
        <li>
          <strong>
            <Link href="/blog/lake-mburo-national-park-guide">
              Lake Mburo National Park
            </Link>
          </strong>{" "}
          &mdash; the most reliable place to see them, often grazing in
          woodland or along the lakeshore in the dry season
        </li>
        <li>
          <strong>
            <Link href="/blog/kidepo-valley-national-park-guide">
              Kidepo Valley
            </Link>
          </strong>{" "}
          &mdash; part of the park&rsquo;s wider savanna herd community
        </li>
      </ul>

      <PostFaq title="Plains Zebra FAQ" items={faq} />

      <h2>See Them on Safari</h2>

      <p>
        Zebra sightings in Uganda are a genuine treat given how few parks hold
        them. Tell us your route and we&rsquo;ll build a stop into a{" "}
        <Link href="/safaris/uganda-lake-mburo-safari">Lake Mburo safari</Link>{" "}
        or{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley wilderness safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
