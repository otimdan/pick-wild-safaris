// ─────────────────────────────────────────────────────────────
//  POST: Grey Crowned Crane Facts — Uganda's National Bird
//  Wildlife-facts cluster post; targets "grey crowned crane facts" /
//  "uganda national bird".
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

const meta = getPostMeta("grey-crowned-crane-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Why is the crane on Uganda’s flag?",
    a: "It was chosen as the national bird, shown with one leg raised to symbolise the country’s forward progress.",
  },
  {
    q: "Is the grey crowned crane endangered?",
    a: "Yes — the global population is declining, with an estimated 17,700–23,300 birds remaining.",
  },
  {
    q: "What is the crane’s dancing display for?",
    a: "Mainly courtship, though it’s also used to relieve tension or strengthen social bonds within a group.",
  },
  {
    q: "Where can I see one in Uganda?",
    a: "Wetlands and grassland across the country, including around Lake Mburo and the Mabamba wetlands.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        It&rsquo;s on the flag, the coat of arms, the currency, and the shirts of
        the national football team &mdash; the grey crowned crane is as central
        to Uganda&rsquo;s identity as the gorilla. With a spray of stiff golden
        feathers crowning its head, it&rsquo;s also simply one of the most
        beautiful birds in Africa.
      </p>

      <p>
        Here are the facts behind Uganda&rsquo;s national bird: how to recognise
        it, its famous dancing display, and its worrying conservation status.
      </p>

      <h2>Grey Crowned Crane Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Uganda&rsquo;s national bird</strong> &mdash; on the flag, coat
          of arms, and currency
        </li>
        <li>
          <strong>A crown of stiff golden feathers</strong> above a bare red
          throat patch and white cheeks
        </li>
        <li>
          <strong>Stands about a metre tall</strong>, with a two-metre wingspan
        </li>
        <li>
          <strong>Famous for its dancing courtship display</strong> &mdash;
          bowing, bobbing, and leaping
        </li>
        <li>
          <strong>Endangered</strong>, with a declining wild population
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a4a5a, #14141c)"
        label="A grey crowned crane mid-display, golden crown raised, wings spread"
      />

      <h2>A Genuinely Striking Bird</h2>

      <p>
        The grey crowned crane is hard to mistake for anything else: mostly grey
        body plumage, white cheek patches, a bare red throat wattle, and above
        it all a crown of stiff, golden-bristled feathers that gives the species
        its name. Standing around a metre tall with a wingspan approaching two
        metres, it&rsquo;s an unmissable presence wherever it&rsquo;s found,
        typically in open grassland, wetland edges, and cultivated land near
        water.
      </p>

      <h2>The Dancing Display</h2>

      <p>
        Crowned cranes are famous for an elaborate courtship dance &mdash;
        bowing, head-bobbing, wing-flapping, and springing into the air in short,
        bouncing leaps. Though most associated with courting pairs, the dance is
        also used more broadly to relieve tension or strengthen bonds within a
        group, and watching a pair perform it is one of the loveliest wildlife
        moments on a Uganda birding trip.
      </p>

      <h2>Why It&rsquo;s Uganda&rsquo;s National Bird</h2>

      <p>
        The grey crowned crane appears on Uganda&rsquo;s <strong>national flag
        and coat of arms</strong>, depicted with one leg raised &mdash; a pose
        chosen deliberately to symbolise the country&rsquo;s forward progress.
        It shares the coat of arms with the{" "}
        <Link href="/blog/uganda-kob-facts">Uganda kob</Link>, together
        representing the nation&rsquo;s rich wildlife heritage.
      </p>

      <h2>A Species Under Threat</h2>

      <p>
        Despite its cultural prominence, the grey crowned crane is classified as{" "}
        <strong>endangered</strong>, with a global population estimated at
        roughly 17,700&ndash;23,300 birds and declining. The main threats are
        habitat loss from wetland drainage, pesticide use, and illegal capture
        for the live-bird trade &mdash; a sobering contrast to its status as a
        national symbol, and a focus of dedicated conservation efforts within
        Uganda.
      </p>

      <h2>Where to See Grey Crowned Cranes in Uganda</h2>

      <p>
        Look for them in wetlands, marshy grassland, and cultivated land near
        water across the country &mdash; they&rsquo;re seen in most of
        Uganda&rsquo;s savanna parks, and often around Lake Mburo and the
        Mabamba wetlands near Entebbe, alongside the equally striking{" "}
        <Link href="/blog/is-the-shoebill-stork-a-dinosaur">
          shoebill stork
        </Link>
        .
      </p>

      <PostFaq title="Grey Crowned Crane FAQ" items={faq} />

      <h2>Spot Uganda&rsquo;s National Bird</h2>

      <p>
        Few sights capture Uganda&rsquo;s natural beauty quite like a crowned
        crane in full courtship dance. Tell us if birding is a priority and
        we&rsquo;ll shape it into your{" "}
        <Link href="/safaris/uganda-gorilla-birding-safari">
          Uganda birding safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
