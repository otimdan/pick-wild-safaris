// ─────────────────────────────────────────────────────────────
//  POST: Golden Monkey Facts
//  Wildlife-facts cluster post; targets "golden monkey facts".
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

const meta = getPostMeta("golden-monkey-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Where can you see golden monkeys?",
    a: "Only in the Virunga volcanoes, shared by Uganda (Mgahinga), Rwanda, and DR Congo — in Uganda, Mgahinga is the only trekking site.",
  },
  {
    q: "Are golden monkeys endangered?",
    a: "Yes — their range is extremely limited, confined almost entirely to high-altitude bamboo forest on the Virunga volcanoes.",
  },
  {
    q: "Is golden monkey trekking harder than gorilla trekking?",
    a: "Generally easier and shorter, making it a good option for less time or fitness.",
  },
  {
    q: "What do golden monkeys eat?",
    a: "Mostly young bamboo leaves and shoots, supplemented with fruit and occasional insects.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Gorillas get most of the attention in Uganda&rsquo;s far south-west, but
        sharing the same volcanic slopes is one of Africa&rsquo;s most vividly
        coloured primates &mdash; and one of its rarest. The golden monkey lives
        almost nowhere else on earth, restricted to a tiny patch of bamboo forest
        on the Virunga volcanoes.
      </p>

      <p>
        Here are the facts behind the golden monkey: where it lives, what makes
        it endangered, and what a trek to see one is actually like.
      </p>

      <h2>Golden Monkey Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Found almost nowhere else:</strong> restricted to the Virunga
          volcanoes on the Uganda-Rwanda-DR Congo border
        </li>
        <li>
          <strong>Vividly coloured:</strong> golden-orange back and flanks,
          contrasting with black limbs
        </li>
        <li>
          <strong>A subspecies of the blue monkey</strong>
        </li>
        <li>
          <strong>Bamboo specialist:</strong> feeds mainly on young bamboo
          leaves and shoots
        </li>
        <li>
          <strong>Endangered</strong>, with a small, geographically confined
          population
        </li>
        <li>
          <strong>Only trekked in Uganda at Mgahinga</strong>
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #8a6a1a, #322408)"
        label="A golden monkey with vivid orange-gold fur feeding on bamboo shoots"
      />

      <h2>A Strikingly Coloured Primate</h2>

      <p>
        The golden monkey is a subspecies of the blue monkey, but its
        appearance sets it apart entirely: a bright golden-orange back and
        flanks, contrasting sharply with black limbs, tail, and cap. Troops of
        up to 30 individuals move quickly and noisily through the bamboo,
        making them a far livelier, faster-moving trek than a gorilla family&rsquo;s
        slow browsing.
      </p>

      <h2>A Very Small Range</h2>

      <p>
        Golden monkeys live only in the high-altitude bamboo forests of the{" "}
        <strong>Virunga volcanoes</strong>, spread across four parks at the
        meeting point of Uganda, Rwanda, and DR Congo: Mgahinga in Uganda,
        Volcanoes National Park in Rwanda, and Virunga and Kahuzi-Bi&eacute;ga
        in DR Congo. That confined range, restricted almost entirely to a single
        habitat type, is exactly what makes the species endangered &mdash; there&rsquo;s
        simply nowhere else for the population to expand.
      </p>

      <h2>Bamboo Specialists</h2>

      <p>
        Golden monkeys are largely folivorous, with young bamboo leaves and
        shoots making up the bulk of their diet, supplemented by fruit and
        occasional insects. Because bamboo growth is seasonal, troops shift
        their feeding areas through the year to follow fresh shoots &mdash; one
        reason their trekking experience can vary noticeably by season.
      </p>

      <h2>Golden Monkey Trekking in Uganda</h2>

      <p>
        In Uganda, golden monkeys can only be trekked at{" "}
        <Link href="/blog/mgahinga-gorilla-national-park-golden-monkeys">
          Mgahinga Gorilla National Park
        </Link>
        , in the bamboo zones on the lower slopes of the Virunga volcanoes. The
        trek is generally shorter and less physically demanding than gorilla
        trekking, making it a good option for travellers with limited time or
        fitness, or as a lively add-on for those who&rsquo;ve already trekked
        gorillas nearby.
      </p>

      <PostFaq title="Golden Monkey FAQ" items={faq} />

      <h2>Add Golden Monkeys to Your Trip</h2>

      <p>
        A quick, colourful, high-energy trek that pairs beautifully with
        gorillas in the same corner of Uganda. Tell us your dates and we&rsquo;ll
        build golden monkey trekking into your{" "}
        <Link href="/blog/mgahinga-gorilla-national-park-golden-monkeys">
          Mgahinga
        </Link>{" "}
        itinerary.
      </p>
    </BlogPostLayout>
  );
}
