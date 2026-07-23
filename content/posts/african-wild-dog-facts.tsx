// ─────────────────────────────────────────────────────────────
//  POST: African Wild Dog Facts — The Painted Wolf
//  Wildlife-facts cluster post; targets "african wild dog facts".
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

const meta = getPostMeta("african-wild-dog-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Why is the wild dog called a “painted wolf”?",
    a: "For its irregular, multicoloured coat — no two individuals are patterned alike.",
  },
  {
    q: "Are wild dogs better hunters than lions?",
    a: "By success rate, yes — up to around 80% compared to a lion’s roughly 30%, thanks to highly coordinated pack hunting.",
  },
  {
    q: "Can you see wild dogs in Uganda?",
    a: "They’re extremely rare, having recently begun returning to Kidepo Valley after being considered extinct in the country for decades.",
  },
  {
    q: "Why are wild dogs endangered?",
    a: "Habitat loss, conflict with livestock farmers, disease from domestic dogs, and their need for very large home ranges.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Ounce for ounce, the African wild dog is arguably Africa&rsquo;s most
        effective hunter &mdash; far more successful than the lion, leopard, or
        cheetah &mdash; and yet it&rsquo;s one of the continent&rsquo;s rarest and
        most endangered predators. In Uganda it vanished entirely for decades,
        which makes its recent return to Kidepo Valley a genuinely exciting story.
      </p>

      <p>
        Here are the facts behind the African wild dog: its extraordinary
        hunting success, its pack life, and its remarkable comeback in Uganda.
      </p>

      <h2>African Wild Dog Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Also called the &ldquo;painted wolf&rdquo;</strong> &mdash;
          for its blotched, multicoloured coat
        </li>
        <li>
          <strong>Extraordinary hunting success rate</strong> &mdash; up to
          around 80%, far higher than lions or leopards
        </li>
        <li>
          <strong>Highly social:</strong>{" "}lives in tight packs of roughly 5&ndash;20
          individuals
        </li>
        <li>
          <strong>Africa&rsquo;s second most endangered carnivore</strong>,
          after the Ethiopian wolf
        </li>
        <li>
          <strong>Went extinct in Uganda</strong>{" "}by the early 1980s &mdash;
          and has recently begun returning to Kidepo Valley
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #5a4a3a, #1c1610)"
        label="A pack of African wild dogs, mottled coats, ears alert, moving together across savanna"
      />

      <h2>The Most Efficient Hunter in Africa</h2>

      <p>
        Pound for pound, no African predator hunts more effectively than the
        wild dog. Where lions succeed in roughly 30% of hunts, leopards around
        38%, and cheetahs about 58%, wild dogs land a kill in <strong>up to 80%
        of attempts</strong> &mdash; an extraordinary figure achieved through
        pure teamwork. Packs run prey down over long distances at speeds
        approaching 60 km/h, communicating constantly and taking turns leading
        the chase, wearing down animals that would easily outrun a solitary
        predator.
      </p>

      <h2>A Painted, Social Predator</h2>
      <p>
        The wild dog&rsquo;s nickname, &ldquo;painted wolf,&rdquo; comes from
        its irregular coat of black, brown, yellow, and white patches &mdash; no
        two individuals are marked exactly alike. Packs of roughly 5 to 20 dogs
        are highly cooperative: they share food, help raise pups communally, and
        care for sick or injured pack members, a level of social cohesion
        unusual even among Africa&rsquo;s pack-living predators.
      </p>

      <h2>Africa&rsquo;s Second Most Endangered Carnivore</h2>

      <p>
        African wild dog numbers have collapsed dramatically &mdash; from an
        estimated 500,000 across the continent a century ago to fewer than
        6,500 today, confined to a fraction of their former range. Habitat loss,
        conflict with livestock farmers, disease caught from domestic dogs, and
        their need for enormous home ranges have all driven the decline, making
        them Africa&rsquo;s second most endangered carnivore after the Ethiopian
        wolf.
      </p>

      <h2>The Comeback in Kidepo Valley</h2>

      <p>
        African wild dogs were considered extinct in Uganda by the early 1980s.
        In recent years, however, small numbers have begun returning to the
        remote <Link href="/blog/kidepo-valley-national-park-guide">
          Kidepo Valley
        </Link>{" "}
        &mdash; a genuinely thrilling development for a country that had written
        the species off. Sightings are still rare and never guaranteed, but
        visitors now specifically ask their guides about wild dogs alongside
        Kidepo&rsquo;s cheetah and lion.{" "}
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: wild dog sightings in Kidepo are recent and
          uncommon — worth checking with current park rangers on the latest
          status before promising anything to clients.]
        </span>
      </p>

      <PostFaq title="African Wild Dog FAQ" items={faq} />

      <h2>Look for Them in Kidepo</h2>

      <p>
        A wild dog sighting is one of the rarest, most exciting things a Uganda
        safari can offer. Tell us if it&rsquo;s on your wish list and we&rsquo;ll
        build it into a{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley wilderness safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
