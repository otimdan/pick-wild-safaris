// ─────────────────────────────────────────────────────────────
//  POST: Hippopotamus Facts — Africa's Most Dangerous Large Animal
//  Wildlife-facts cluster post; targets "hippo facts" / "most
//  dangerous animal in africa". Death-toll figures are disputed in
//  sourcing — kept as a wide, honest range rather than one number.
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

const meta = getPostMeta("hippopotamus-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Are hippos really more dangerous than lions?",
    a: "Most sources rank them as Africa’s most dangerous large mammal by human death toll, though the exact figures vary and are widely disputed.",
  },
  {
    q: "How fast can a hippo run?",
    a: "Fast enough to outrun a person over a short distance on land, despite weighing several tonnes.",
  },
  {
    q: "How strong is a hippo’s bite?",
    a: "Around 1,800 psi — nearly double the bite force of an African lion.",
  },
  {
    q: "Where can I see hippos in Uganda?",
    a: "The Kazinga Channel and the Nile at Murchison Falls both offer close, safe sightings from a boat.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Hippos look almost comical &mdash; barrel-bodied, short-legged, mostly
        submerged with just eyes and nostrils showing. That appearance is
        deceptive. The hippopotamus is widely considered Africa&rsquo;s most
        dangerous large animal, responsible for more human deaths each year than
        lions, and it&rsquo;s one of the most common sightings on any Uganda
        water safari.
      </p>

      <p>
        Here are the facts behind the hippo &mdash; its size, its astonishing
        bite, why it&rsquo;s so dangerous, and where to see one safely in Uganda.
      </p>

      <h2>Hippopotamus Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Enormous weight:</strong> males can weigh close to 4.5 tonnes
        </li>
        <li>
          <strong>One of the strongest bites of any land mammal:</strong>{" "}around
          1,800 psi &mdash; nearly double a lion&rsquo;s
        </li>
        <li>
          <strong>Widely considered Africa&rsquo;s most dangerous large
          animal</strong>, by human death toll
        </li>
        <li>
          <strong>Surprisingly fast on land:</strong> capable of outrunning a
          human over short distances
        </li>
        <li>
          <strong>Semi-aquatic:</strong> spends most of daylight hours in water,
          grazing on land at night
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a4a3a, #101a10)"
        label="A pod of hippos submerged in a river, eyes and ears above the waterline"
      />

      <h2>Size and Bite</h2>

      <p>
        Male hippos can weigh close to 4.5 tonnes, with females somewhat
        smaller, making the hippo one of the heaviest land mammals after the
        elephant and white rhino. Its jaws can open to almost 180 degrees, and
        its bite force &mdash; roughly <strong>1,800 psi</strong> &mdash; is
        among the strongest of any land mammal, powerful enough to bite a small
        boat in half. The male&rsquo;s lower canine tusks can grow to 45
        centimetres, used mainly in territorial fights between bulls rather than
        for feeding.
      </p>

      <h2>Why Hippos Are So Dangerous</h2>

      <p>
        Hippos are commonly cited as Africa&rsquo;s deadliest large mammal by
        human toll &mdash; though the exact figures are disputed and vary widely
        by source. The danger comes from a mix of factors: hippos are
        aggressively territorial in water, surprisingly fast on land (capable of
        outrunning a person over short distances despite their bulk), and
        extremely dangerous when a person is caught between a hippo and the
        water it&rsquo;s trying to reach, or between a mother and her calf. Most
        incidents happen when people unknowingly get too close on land or in
        small boats &mdash; which is exactly why experienced guides keep a
        respectful distance on every Uganda boat safari.
      </p>

      <h2>Life in the Water</h2>

      <p>
        Hippos spend the vast majority of daylight hours submerged in rivers and
        lakes, both to stay cool and to protect their sensitive skin from the
        sun &mdash; they secrete a natural reddish, oily substance sometimes
        called &ldquo;blood sweat&rdquo; that acts as sunscreen and antiseptic.
        At night, they leave the water to graze on grasses, sometimes travelling
        several kilometres from the riverbank before returning by dawn.
      </p>

      <h2>Where to See Hippos in Uganda</h2>

      <p>
        Hippos are one of the most reliable sightings on any Uganda water
        safari:
      </p>

      <ul>
        <li>
          <strong>The Kazinga Channel</strong>, Queen Elizabeth &mdash; some of
          the densest hippo concentrations in Africa (see our{" "}
          <Link href="/blog/queen-elizabeth-national-park-guide">
            Queen Elizabeth guide
          </Link>
          )
        </li>
        <li>
          <strong>The Nile at Murchison Falls</strong> &mdash; large pods along
          the boat safari route
        </li>
        <li>
          <strong>Lake Mburo</strong> &mdash; seen on the park&rsquo;s boat
          cruise
        </li>
      </ul>

      <PostFaq title="Hippopotamus FAQ" items={faq} />

      <h2>See Them Safely From the Water</h2>

      <p>
        A boat safari is the best and safest way to get close to hippos in
        Uganda &mdash; and one of the highlights of any trip. Tell us your dates
        and we&rsquo;ll build a{" "}
        <Link href="/blog/queen-elizabeth-national-park-guide">
          Kazinga Channel boat safari
        </Link>{" "}
        into your itinerary.
      </p>
    </BlogPostLayout>
  );
}
