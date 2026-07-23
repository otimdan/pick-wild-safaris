// ─────────────────────────────────────────────────────────────
//  POST: How Big Is a Silverback Gorilla?
//  Informational post targeting the "how big / tall / heavy /
//  strong is a silverback gorilla" cluster, bridging to trips.
//  Real photos live in public/blog/how-big-is-a-silverback-gorilla/
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import PostFaq from "@/app/components/PostFaq";
import { getPostMeta } from "@/content/posts/index";
import type { FaqItem } from "@/content/types";
import Image from "next/image";

// A tiny helper for inline images — matches the pattern used in
// gorilla-trekking-tips.tsx. Renders nothing if src is empty.
function PostImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  if (!src) return null;
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={820}
        height={480}
        className="post-img"
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 1024px) 100vw, 820px"
      />
      {caption && <span className="post-img-caption">{caption}</span>}
    </>
  );
}

const meta = getPostMeta("how-big-is-a-silverback-gorilla")!;

// Drives both the rendered FAQ section below and the FAQPage JSON-LD
// emitted by app/blog/[slug]/page.tsx. Plain text only — an answer
// engine quotes this verbatim, so markup would leak into the citation.
export const faq: FaqItem[] = [
  {
    q: "How tall is a silverback gorilla?",
    a: "About 1.5–1.8 m (5–6 ft) standing upright, with an arm span up to around 2.6 m.",
  },
  {
    q: "How much does a silverback gorilla weigh?",
    a: "Typically 135–220 kg (300–485 lb) in the wild; females are roughly half that.",
  },
  {
    q: "How strong is a silverback gorilla?",
    a: "Extremely powerful, but the popular “x times stronger than a human” figures are unverified. What is certain is that they can snap thick branches and have a bite force greater than a lion's.",
  },
  {
    q: "What do gorillas eat to get so big?",
    a: "Mostly leaves, stems, shoots, and pith — up to 18–30 kg of vegetation a day. They are essentially gentle giants running on greenery.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      {/* Answer-first summary: the passage extraction-based answer
          engines are most likely to quote. Keep it self-contained. */}
      <blockquote className="post-quick-answer">
        <strong>Quick answer:</strong>{" "}
        A wild silverback gorilla stands about 1.5&ndash;1.8 m
        (5&ndash;6 ft) upright and weighs roughly 135&ndash;220 kg
        (300&ndash;485 lb) &mdash; around twice the size of an adult female,
        with an arm span reaching 2.6 m.
      </blockquote>
      <p>
        Photographs never quite prepare you for it. A silverback gorilla can
        stand nearly six feet tall, weigh as much as three grown men, and spread
        his arms wider than a doorway &mdash; and then he sits down and gently
        eats a handful of leaves. That combination of raw power and quiet
        gentleness is exactly what makes meeting one so unforgettable.
      </p>

      <p>
        So how big <em>is</em>{" "}a silverback, really? Here are the honest numbers
        on height, weight, and strength &mdash; and a straight answer on the
        strength myths that get wildly exaggerated online.
      </p>

      <h2>What Is a Silverback, Exactly?</h2>

      <p>
        &ldquo;Silverback&rdquo; isn&rsquo;t a species &mdash; it&rsquo;s a rank.
        A silverback is a fully mature male gorilla, usually around 12 years or
        older, named for the saddle of silver-grey hair that spreads across his
        back and hips as he matures. In mountain gorillas, the silverback is the
        undisputed leader of his family group: he decides where they travel,
        settles disputes, and defends them against rivals and threats. Everything
        about his size is built for that job.
      </p>

      <PostImage
        src="/blog/how-big-is-a-silverback-gorilla/silverback-full-body.jpg"
        alt="Full-body silverback gorilla in Bwindi, showing the silver saddle and scale"
        caption="A silverback's silver saddle marks him as the mature leader of his family"
      />

      <h2>How Tall Is a Silverback Gorilla?</h2>

      <p>
        Standing upright, a silverback mountain gorilla typically reaches{" "}
        <strong>1.5 to 1.8 metres (5 to 6 feet)</strong> &mdash; about the height
        of an adult man. But height undersells them, because gorillas are built
        wide and deep rather than tall. Their arm span is enormous: a big male can
        stretch his arms to around <strong>2.6 metres (8.5 feet)</strong> from
        fingertip to fingertip, far wider than his standing height, with a chest
        and shoulders to match.
      </p>

      <h2>How Much Does a Silverback Weigh?</h2>

      <p>
        This is where the numbers get serious. A wild adult silverback mountain
        gorilla generally weighs <strong>135 to 220 kg (300 to 485 lb)</strong>.
        Females are roughly half that &mdash; typically around 70 to 100 kg &mdash;
        which is one of the largest size differences between males and females of
        any primate.
      </p>

      <ul>
        <li>
          <strong>Adult male (silverback):</strong> ~135&ndash;220 kg
          (300&ndash;485 lb)
        </li>
        <li>
          <strong>Adult female:</strong> ~70&ndash;100 kg (150&ndash;220 lb)
        </li>
        <li>
          <strong>Newborn:</strong>{" "}around 1.8&ndash;2 kg &mdash; smaller than a
          human baby
        </li>
      </ul>

      <p>
        Note that captive gorillas, with rich diets and less exercise, can grow
        considerably heavier than wild ones &mdash; some of the record weights you
        see quoted online are zoo animals, not the leaner, more muscular gorillas
        you meet in the forest.
      </p>

      <h2>Just How Strong Is a Silverback?</h2>

      <p>
        Very &mdash; but this is also where the internet loses its mind. You&rsquo;ll
        see confident claims that a silverback can lift ten times its body weight,
        or is &ldquo;nine times stronger than a human.&rdquo; The honest truth is
        that these figures come from a small number of old, unrepeated tests and
        rough extrapolations, and no one has rigorously measured a wild gorilla&rsquo;s
        maximum strength. Treat the exact multipliers as folklore, not fact.
      </p>

      <p>
        What we can say with confidence is grounded in anatomy: a silverback
        carries dense, powerful muscle across his arms, shoulders, chest, and
        jaw. His bite force comfortably exceeds a lion&rsquo;s, built for grinding
        tough vegetation. He can snap thick branches, bend small trees, and move
        with startling speed and force when he chooses to. You do not need an
        exaggerated statistic to be impressed &mdash; standing near one in the
        wild makes the point on its own.
      </p>

      <blockquote>
        The remarkable thing isn&rsquo;t how dangerous a silverback is &mdash;
        it&rsquo;s how rarely he uses that strength. Most of his power goes into
        display, not violence.
      </blockquote>

      <h2>Why Are They So Big? A Diet of Leaves</h2>

      <p>
        Here&rsquo;s the paradox that catches everyone off guard: one of the
        largest, most powerful land animals in Africa is essentially a vegetarian.
        Mountain gorillas are overwhelmingly herbivorous, feeding on leaves,
        shoots, stems, and pith, with occasional fruit and the odd insect. An
        adult silverback can eat <strong>18 to 30 kg of vegetation a day</strong>{" "}
        to fuel that bulk.
      </p>

      <p>
        That leafy diet is actually the reason for the size and shape. Digesting
        large volumes of fibrous plants requires a big gut, which needs a broad,
        deep torso to house it &mdash; hence the barrel chest and pot belly. The
        gorilla is big because it eats low-energy food in enormous quantities, not
        because it hunts.
      </p>

      <h2>Silverback vs Human vs Chimpanzee: A Size Check</h2>

      <p>
        To put a silverback in perspective: he outweighs an average man roughly
        two to three times over, and outweighs a chimpanzee &mdash; his fellow
        great ape &mdash; by four or five times. A chimp tips the scales at around
        40&ndash;60 kg; a big silverback can be north of 200 kg. If you&rsquo;re
        curious how these two apes compare beyond size, we cover it in{" "}
        <Link href="/blog/gorilla-vs-chimpanzee">gorilla vs chimpanzee</Link>.
      </p>

      <h2>Are Silverbacks Aggressive?</h2>

      <p>
        Given the size and strength, people expect gorillas to be ferocious.
        They&rsquo;re the opposite. Silverbacks are generally calm, protective,
        and remarkably tolerant. The famous chest-beating display &mdash; standing
        tall and drumming the chest with cupped hands &mdash; is theatre designed
        to avoid a fight, not start one, warning off rivals so that actual combat
        rarely happens.
      </p>

      <p>
        On a trek, this is why the rules exist: keep your distance, stay calm,
        avoid direct staring, and follow your guide&rsquo;s lead. Do that, and a
        silverback will usually carry on feeding a few metres away as if
        you&rsquo;re barely there. We cover the etiquette and preparation in full
        in our{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>.
      </p>

      <PostFaq title="Silverback Size FAQ" items={faq} />

      <h2>See a Silverback for Yourself</h2>

      <p>
        No statistic really lands until you&rsquo;re standing in the forest and a
        silverback shifts his weight a few metres away. If you&rsquo;d like that
        moment, it&rsquo;s the heart of{" "}
        <Link href="/safaris/uganda-gorilla-wildlife-safari">
          our Uganda gorilla &amp; wildlife safari
        </Link>{" "}
        &mdash; tell us your dates and we&rsquo;ll build the trip around it.
      </p>
    </BlogPostLayout>
  );
}
