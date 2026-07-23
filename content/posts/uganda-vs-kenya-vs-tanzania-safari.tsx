// ─────────────────────────────────────────────────────────────
//  POST: Uganda vs Kenya vs Tanzania — Which Safari Country Is Right?
//  Planning/comparison post; facts web-verified (migration numbers,
//  gorilla population share, permit prices consistent with other
//  posts). No prices beyond government permit fees.
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

const meta = getPostMeta("uganda-vs-kenya-vs-tanzania-safari")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Which country has the Great Migration?",
    a: "Kenya (Masai Mara) and Tanzania (Serengeti) both host different stages of the same migration; Uganda does not.",
  },
  {
    q: "Which country has the gorillas?",
    a: "Uganda and Rwanda both offer gorilla trekking; Uganda holds close to half the world’s mountain gorilla population.",
  },
  {
    q: "Which is least crowded?",
    a: "Uganda, generally — its parks see far fewer visitors than Kenya’s or Tanzania’s headline reserves.",
  },
  {
    q: "Can I do a Uganda gorilla trek and a Kenya/Tanzania safari on one trip?",
    a: "Yes — it’s a popular and rewarding combination, pairing forest primates with open-plains migration wildlife.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        All three are extraordinary safari countries, and the honest answer to
        &ldquo;which is best&rdquo; is that they&rsquo;re not really
        competing &mdash; each does something different exceptionally well.
        Here&rsquo;s a clear-eyed comparison to help you decide, or to help you
        realise you might want more than one.
      </p>

      <h2>The Short Version</h2>

      <ul>
        <li>
          <strong>Choose Uganda</strong> for mountain gorillas, chimpanzees,
          and a quieter, less-crowded safari alongside classic savanna wildlife
        </li>
        <li>
          <strong>Choose Kenya</strong>{" "}for the Masai Mara&rsquo;s Great
          Migration river crossings and iconic open savanna
        </li>
        <li>
          <strong>Choose Tanzania</strong>{" "}for the Serengeti&rsquo;s vast
          migration herds, Ngorongoro Crater, and the largest lion population
          in Africa
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #5a4a2a, #201808)"
        label="Split composition — gorillas in Uganda's forest beside open Serengeti plains"
      />

      <h2>Uganda: Primates and a Quieter Safari</h2>

      <p>
        Uganda&rsquo;s standout advantage is one no other East African country
        can match: it holds close to half the world&rsquo;s remaining mountain
        gorillas, alongside the highest density of chimpanzees in East Africa
        in Kibale Forest &mdash; and it pairs both with genuine savanna game in
        parks like Queen Elizabeth and Murchison Falls, home to the odd,
        wonderful tree-climbing lions of Ishasha. Crucially, Uganda&rsquo;s
        parks are far less visited than Kenya&rsquo;s or Tanzania&rsquo;s
        headline reserves &mdash; sightings tend to feel more private, with
        fewer vehicles at any one scene.
      </p>

      <h2>Kenya: The Masai Mara and the Migration</h2>

      <p>
        Kenya&rsquo;s Masai Mara hosts the most dramatic chapter of the Great
        Migration &mdash; over 1.5 million wildebeest and zebra crossing the
        crocodile-filled Mara River, typically between July and October. The
        Mara is also simply beautiful, open savanna, with excellent big-cat
        sightings year-round. The trade-off is popularity: peak migration
        season can mean multiple vehicles at major sightings, though
        travelling in September or choosing quieter conservancies eases that
        considerably.
      </p>

      <h2>Tanzania: Scale and the Serengeti</h2>

      <p>
        Tanzania offers the sheer scale of the Serengeti, the classic setting
        for most of the Great Migration&rsquo;s year-round journey, plus the
        extraordinary wildlife concentration of Ngorongoro Crater, where all
        of Africa&rsquo;s Big Five can realistically be seen in a single day.
        Tanzania is also home to the largest wild lion population on the
        continent. It&rsquo;s the country for travellers who want vast,
        classic African plains at their most expansive.
      </p>

      <h2>Cost Comparison</h2>

      <p>
        Gorilla permits are the clearest fixed-price comparison point: Uganda&rsquo;s
        permit runs around <strong>USD $800</strong>, considerably less than
        Rwanda&rsquo;s <strong>USD $1,500</strong>{" "}for the same experience
        &mdash; see the full breakdown in{" "}
        <Link href="/blog/gorilla-permit-prices-explained">
          gorilla permit prices explained
        </Link>
        . Beyond permits, overall trip costs depend heavily on trip length,
        lodge standard, and whether you fly or drive between parks in each
        country, which varies too much to generalise here.
      </p>

      <h2>Can You Combine Them?</h2>

      <p>
        Absolutely &mdash; and it&rsquo;s one of the best ways to see East
        Africa properly. A trip combining Uganda&rsquo;s gorillas and
        chimpanzees with the open plains and migration of Kenya or Tanzania
        gives you the primate experience no single savanna country offers,
        alongside the wildebeest-herd spectacle no forest country can match.
        See our{" "}
        <Link href="/safaris/east-africa-mara-serengeti-migration">
          East Africa migration safari
        </Link>{" "}
        or{" "}
        <Link href="/safaris/kenya-amboseli-meru-masai-mara-safari">
          Kenya safari
        </Link>{" "}
        for ways to combine countries.
      </p>

      <PostFaq title="Uganda vs Kenya vs Tanzania FAQ" items={faq} />

      <h2>Let Us Help You Decide</h2>

      <p>
        There&rsquo;s no wrong answer among these three &mdash; only the right
        one for what you most want to see. Tell us your priorities and
        we&rsquo;ll recommend the right country, or combination, for your{" "}
        <Link href="/safaris">East Africa trip</Link>.
      </p>
    </BlogPostLayout>
  );
}
