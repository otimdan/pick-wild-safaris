// ─────────────────────────────────────────────────────────────
//  POST: Do Cheetahs Eat Lions and Hyenas?
//  Dedicated post for the "do cheetahs eat lions" (100) /
//  "do cheetahs eat hyenas" (150) queries — the reverse of the
//  flagship. Narrow focus (cheetah's side) to avoid cannibalising
//  do-lions-eat-leopards-cheetahs-and-hyenas; cross-links to it.
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

const meta = getPostMeta("do-cheetahs-eat-lions-and-hyenas")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Do cheetahs eat lions?",
    a: "No — cheetahs never hunt or eat lions. Lions are a lethal threat to cheetahs, not the other way round.",
  },
  {
    q: "Do cheetahs eat hyenas?",
    a: "No. Hyenas are larger and stronger in a fight and regularly steal cheetah kills; a cheetah avoids them.",
  },
  {
    q: "What do cheetahs eat instead?",
    a: "Mainly gazelles, impala, and other small-to-medium antelope, plus hares and game birds — fast, harmless prey they can run down.",
  },
  {
    q: "Do lions and hyenas eat cheetahs?",
    a: "They kill cheetahs — cubs especially — largely to remove a competitor, though they rarely eat them. They’re the cheetah’s main enemies.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        It&rsquo;s a natural question once you know that lions kill cheetahs: does
        the cheetah ever turn the tables? Do cheetahs eat lions, or hyenas? The
        clear answer is <strong>no</strong> &mdash; and it isn&rsquo;t close. The
        cheetah is the most fragile of Africa&rsquo;s big predators, and far from
        hunting lions and hyenas, it spends much of its life trying to stay out of
        their way.
      </p>

      <p>
        Here&rsquo;s what cheetahs actually eat, why they can&rsquo;t take on
        larger predators, and how the relationship really runs &mdash; almost
        entirely in the other direction.
      </p>

      <h2>The Short Answer</h2>

      <ul>
        <li>
          <strong>Do cheetahs eat lions?</strong>{" "}No. Cheetahs never hunt or eat
          lions &mdash; lions are a deadly threat to them, not prey.
        </li>
        <li>
          <strong>Do cheetahs eat hyenas?</strong> No. Hyenas are bigger, stronger
          in a fight, and routinely rob cheetahs of their kills.
        </li>
        <li>
          <strong>So who eats whom?</strong>{" "}Lions and hyenas kill cheetahs
          (especially cubs) and steal their food &mdash; the relationship runs the
          opposite way to the search.
        </li>
      </ul>

      <p>
        The whole picture flips the question on its head: the cheetah is the loser
        in these encounters, and its survival depends on avoidance, not
        confrontation.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #7a6838, #241d0a)"
        label="A cheetah on a termite mound scanning for danger, not prey"
      />

      <h2>What Do Cheetahs Actually Eat?</h2>

      <p>
        Cheetahs are specialist hunters of small-to-medium antelope. Their diet is
        built around fast, light prey they can run down in a short sprint:
      </p>

      <ul>
        <li>
          <strong>Gazelles</strong> (Thomson&rsquo;s gazelle is a classic target)
          and <strong>impala</strong>
        </li>
        <li>
          <strong>Young or small antelope</strong> &mdash; springbok, duiker,
          reedbuck, and the calves of larger species
        </li>
        <li>
          <strong>Hares and game birds</strong> when nothing bigger is on offer
        </li>
      </ul>

      <p>
        Every one of these is smaller than the cheetah and, crucially, harmless to
        it. A cheetah is engineered to <em>outrun</em>{" "}its food, not to overpower
        anything dangerous &mdash; which is exactly why lions and hyenas are off
        the menu.
      </p>

      <h2>Why a Cheetah Can&rsquo;t Take On a Lion or a Hyena</h2>

      <p>
        The cheetah traded muscle for speed, and that bargain leaves it badly
        outgunned in a fight. It has a light, slender frame, a small head and weak
        jaws relative to other big cats, and semi-retractable claws built for grip
        at speed rather than for combat. An adult cheetah weighs perhaps 35&ndash;60
        kg; a lioness is three to four times heavier, and a spotted hyena has one
        of the most powerful bites of any land mammal. Picking a fight with either
        would be suicidal &mdash; and, just as importantly, a serious injury would
        stop a cheetah hunting and starve it. So it doesn&rsquo;t. (We break down
        the speed-for-strength trade in{" "}
        <Link href="/blog/how-fast-is-a-cheetah">how fast is a cheetah</Link>.)
      </p>

      <h2>Which Way the Relationship Really Runs</h2>

      <p>
        Not only do cheetahs not eat lions and hyenas &mdash; lions and hyenas
        make the cheetah&rsquo;s life a misery. Two things happen constantly on the
        savanna:
      </p>

      <ul>
        <li>
          <strong>They steal its food.</strong>{" "}After a hard sprint a cheetah is
          exhausted and needs to catch its breath before eating. Lions and hyenas
          often arrive, drive the cheetah off, and take the kill &mdash; a habit
          biologists call kleptoparasitism. A cheetah won&rsquo;t risk injury to
          defend a meal, so it simply gives it up.
        </li>
        <li>
          <strong>They kill its cubs.</strong>{" "}Lions are the single biggest cause
          of cheetah cub deaths, and a large share of cubs don&rsquo;t reach
          independence in areas with many lions. It&rsquo;s one of the main reasons
          cheetah numbers stay low even where prey is abundant.
        </li>
      </ul>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY: cheetah cub mortality is genuinely very high in lion-rich areas
          (classic Serengeti research put it around 90%+, with lions the leading
          known cause), but the exact figure varies a lot by study and location.
          Kept general as &ldquo;a large share&rdquo; &mdash; happy to add a
          specific, sourced number if you want one.]
        </span>
      </p>

      <p>
        To cope, cheetahs mostly hunt in the <strong>daytime</strong>, when
        lions and hyenas are resting &mdash; an unusual choice for a big cat, and a
        direct response to the threat these rivals pose. The full predator pecking
        order is laid out in{" "}
        <Link href="/blog/do-lions-eat-leopards-cheetahs-and-hyenas">
          do lions eat leopards, cheetahs, and hyenas
        </Link>
        .
      </p>

      <h2>Where to See Cheetahs in East Africa</h2>

      <p>
        Because they need open ground and a wary distance from bigger predators,
        cheetahs are best looked for on the plains:
      </p>

      <ul>
        <li>
          <strong>Kidepo Valley, Uganda</strong> &mdash; the remote north-eastern
          wilderness that is Uganda&rsquo;s cheetah stronghold, and one of the few
          places in the country you have a realistic chance
        </li>
        <li>
          <strong>The Masai Mara &amp; Serengeti</strong> &mdash; open grassland
          and abundant gazelle make these the most reliable cheetah plains in the
          region
        </li>
      </ul>

      <p>
        If you&rsquo;re still sorting the spotted cats apart, our guide to{" "}
        <Link href="/blog/leopard-vs-cheetah">leopard vs cheetah</Link> makes it
        simple.
      </p>

      <PostFaq title="Do Cheetahs Eat Lions or Hyenas? FAQ" items={faq} />

      <h2>Find Them on Safari</h2>

      <p>
        The cheetah&rsquo;s whole story is one of speed and vulnerability &mdash;
        the fastest animal on earth, forever glancing over its shoulder. If
        you&rsquo;d like the chance to see one, tell us your dates and we&rsquo;ll
        build it into a{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley wilderness safari
        </Link>{" "}
        or an{" "}
        <Link href="/safaris/east-africa-mara-serengeti-migration">
          East Africa migration safari
        </Link>{" "}
        across the great cheetah plains.
      </p>
    </BlogPostLayout>
  );
}
