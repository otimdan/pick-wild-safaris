// ─────────────────────────────────────────────────────────────
//  POST: Kibale Forest National Park — The Complete Guide
//  Broader park guide (distinct from chimpanzee-trekking-kibale-forest,
//  which is permit/trek-specific) covering the whole park: other
//  primates, birding, Bigodi wetland walk. Mirrors murchison pattern.
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

const meta = getPostMeta("kibale-forest-national-park-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Why is Kibale called the primate capital of Africa?",
    a: "It holds 13 primate species — the highest primate density on the continent — including over 1,500 chimpanzees.",
  },
  {
    q: "Is Kibale only about chimps?",
    a: "No — it also offers rich birding, several other primate species, and the Bigodi Wetland walk just outside the park.",
  },
  {
    q: "How does Kibale connect to Queen Elizabeth?",
    a: "A forested corridor links the two parks, historically used as an elephant migration route, making them a natural pairing on an itinerary.",
  },
  {
    q: "How long should I spend at Kibale?",
    a: "One to two nights covers a chimp trek and the Bigodi wetland walk comfortably.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Kibale is the primate capital of Africa &mdash; and chimpanzees are only
        the start of it. This dense, mid-altitude rainforest in western Uganda
        packs more primate diversity into one park than anywhere else on the
        continent, alongside outstanding birding and one of the country&rsquo;s
        best community wetland walks.
      </p>

      <p>
        We&rsquo;ve covered chimp trekking itself in detail elsewhere &mdash;
        here&rsquo;s the wider guide to Kibale Forest as a whole: its size, its
        other primates, its birds, and how to build it into your trip.
      </p>

      <h2>Kibale at a Glance</h2>

      <p>
        Kibale National Park covers around 795 square kilometres near Fort Portal
        in western Uganda, a mix of moist evergreen and semi-deciduous forest at
        an altitude that keeps it pleasantly cool. It adjoins Queen Elizabeth
        National Park to the south via a forested corridor, historically used by
        elephants moving between the two protected areas.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a4a1e, #0c1c08)"
        label="Dense rainforest canopy of Kibale Forest, dappled light on the trail"
      />

      <h2>Thirteen Primate Species</h2>

      <p>
        Kibale holds an extraordinary <strong>13 primate species</strong> &mdash;
        the highest density of primates found anywhere in Africa. Chimpanzees are
        the headline (more than 1,500 live in the park, and we cover trekking
        them fully in{" "}
        <Link href="/blog/chimpanzee-trekking-kibale-forest">
          chimpanzee trekking in Kibale
        </Link>
        ), but the wider cast is just as remarkable:
      </p>

      <ul>
        <li>
          <strong>Red colobus and black-and-white colobus</strong> &mdash;
          striking, leaf-eating monkeys often seen high in the canopy
        </li>
        <li>
          <strong>Grey-cheeked mangabey</strong> &mdash; noisy, characterful, and
          often heard before seen
        </li>
        <li>
          <strong>L&rsquo;Hoest&rsquo;s monkey, red-tailed monkey, and vervet
          monkey</strong> &mdash; among the forest&rsquo;s more common sightings
        </li>
        <li>
          <strong>Olive baboon and nocturnal galagos (bushbabies)</strong>{" "}
          rounding out the list
        </li>
      </ul>

      <h2>Exceptional Birding</h2>

      <p>
        Kibale is also one of Uganda&rsquo;s premier birding forests, with more
        than 375 recorded species, including the much sought-after green-breasted
        pitta. Even travellers who came purely for the chimps often find the
        birding stops them in their tracks.
      </p>

      <h2>Bigodi Wetland Sanctuary</h2>

      <p>
        Just outside the park, the community-run <strong>Bigodi Wetland
        Sanctuary</strong>{" "}offers a gentler, excellent complement to forest
        trekking &mdash; a guided boardwalk and trail through papyrus swamp
        alive with monkeys, birds, and butterflies, with proceeds supporting the
        local community. It&rsquo;s a lovely half-day addition for anyone who
        wants more time in the area beyond the chimp trek itself.
      </p>

      <h2>Best Time to Visit Kibale</h2>

      <p>
        Kibale can be visited year-round, since forest wildlife doesn&rsquo;t
        migrate the way savanna game does. The dry seasons (roughly
        June&ndash;September and December&ndash;February) make trails easier
        underfoot, while the wetter months keep the forest lush, though muddier.
        See our wider guide to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <h2>How to Visit Kibale</h2>

      <p>
        Kibale sits near Fort Portal in western Uganda, an easy add-on to a
        Queen Elizabeth or gorilla itinerary given its position between the two.
        Build it into our{" "}
        <Link href="/safaris/uganda-kibale-chimpanzee-safari">
          Kibale chimpanzee safari
        </Link>{" "}
        or a longer route pairing it with{" "}
        <Link href="/safaris/uganda-gorilla-primates-safari">
          gorillas and primates
        </Link>{" "}
        across the south-west.
      </p>

      <PostFaq title="Kibale Forest FAQ" items={faq} />

      <h2>Explore the Primate Capital</h2>

      <p>
        Whether it&rsquo;s the chimps or the wider forest that draws you, Kibale
        rewards time spent looking up into the canopy. Tell us your plans and
        we&rsquo;ll build it into a{" "}
        <Link href="/safaris/uganda-kibale-chimpanzee-safari">
          Kibale safari
        </Link>{" "}
        shaped around your trip.
      </p>
    </BlogPostLayout>
  );
}
