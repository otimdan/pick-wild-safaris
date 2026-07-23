// ─────────────────────────────────────────────────────────────
//  POST: Impala Facts — The Antelope That Named a Capital
//  Targets "impala facts / impala antelope" (competitor:
//  wildtravelsafaris.com/facts-about-the-common-impala-antelope).
//  Uganda hook — Kampala's name + Lake Mburo (only UG park with impala).
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

const meta = getPostMeta("impala-antelope-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Is Kampala really named after the impala?",
    a: "Yes — the name traces to a phrase meaning “hill of the impala,” from the herds that once grazed the site of the modern city.",
  },
  {
    q: "How high can an impala jump?",
    a: "Around 3 metres high and up to roughly 10 metres in a single leap — among the best jumpers of any antelope.",
  },
  {
    q: "Do female impala have horns?",
    a: "No — only males carry the lyre-shaped horns; females are hornless.",
  },
  {
    q: "Where can I see impala in Uganda?",
    a: "Only in Lake Mburo National Park, the single Ugandan park where the species occurs.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        The impala is one of Africa&rsquo;s most graceful and abundant antelopes
        &mdash; and in Uganda it comes with a twist most visitors never expect:
        the capital city, <strong>Kampala, is named after it</strong>. Yet
        curiously, there&rsquo;s only one national park in the whole country where
        you can actually see one. It&rsquo;s a small antelope with a surprisingly
        big story.
      </p>

      <p>
        Here are the essential facts about the impala &mdash; its record-breaking
        leaps, its unusual place in Uganda, and where to find it.
      </p>

      <h2>Impala Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Master jumper:</strong> can leap around 3 metres high and up to
          10 metres in a single bound
        </li>
        <li>
          <strong>Only its kind:</strong> the sole species in its genus,{" "}
          <em>Aepyceros</em> &mdash; not closely related to other antelope
        </li>
        <li>
          <strong>Horns on males only:</strong> elegant, lyre-shaped, and ridged
        </li>
        <li>
          <strong>The &ldquo;M&rdquo; marking:</strong> distinctive black stripes
          on the rump and tail
        </li>
        <li>
          <strong>Uganda link:</strong> Kampala takes its name from the impala
        </li>
        <li>
          <strong>Where in Uganda:</strong>{" "}Lake Mburo &mdash; the only Ugandan
          park with impala
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a5a3a, #241c10)"
        label="A herd of impala at Lake Mburo, a male's lyre-shaped horns catching the light"
      />

      <h2>Why Kampala Is Named After the Impala</h2>

      <p>
        Long before it was Uganda&rsquo;s capital, the hills where Kampala now
        stands were grazing ground for herds of impala. The name is usually traced
        to a local phrase along the lines of <em>Kasozi k&rsquo;empala</em>{" "}
        &mdash; &ldquo;the hill of the impala&rdquo; &mdash; from the era when a
        British colonial official reportedly kept impala on the hill. Over time
        &ldquo;K&rsquo;empala&rdquo; became Kampala. It&rsquo;s a lovely piece of
        trivia: a bustling city of well over a million people carries the name of
        a slender antelope.
      </p>

      <h2>The Impala&rsquo;s Famous Leap</h2>

      <p>
        The impala is one of the great athletes of the animal kingdom. When
        startled, a herd will scatter in an explosion of soaring, criss-crossing
        jumps &mdash; individuals clearing around <strong>3 metres in height and
        up to 10 metres in length</strong>{" "}in a single bound, sometimes leaping
        clean over one another. This chaotic display is thought to confuse
        predators, making it hard to single out one target. It&rsquo;s one of the
        most beautiful things to watch on a savanna, and a big part of why the
        impala is so photogenic.
      </p>

      <h2>A Species All Its Own</h2>

      <p>
        For all that it looks like a &ldquo;typical&rdquo; antelope, the impala is
        unusual: it&rsquo;s the <strong>only living species in its genus</strong>,{" "}
        <em>Aepyceros melampus</em>, sitting on its own branch of the family tree.
        Only the males grow horns &mdash; the graceful, lyre-shaped, ridged horns
        that make a mature ram so striking &mdash; while females are hornless.
        Look, too, for the tell-tale vertical black stripes on the rump and tail
        that form a rough &ldquo;M&rdquo; shape, a quick field mark for the
        species.
      </p>

      <h2>Behaviour and Herds</h2>

      <p>
        Impala are highly social and adaptable, grazing on grasses and browsing on
        leaves and shoots as the seasons change &mdash; a flexibility that helps
        them thrive where fussier antelope struggle. In the breeding season, males
        hold territories and gather harems of females, filling the air with a
        surprisingly loud roar and grunt. The rest of the year they gather in
        large, relaxed herds that mix freely with zebra, warthog, and other plains
        game, extra eyes and ears against predators.
      </p>

      <h2>Where to See Impala in Uganda</h2>

      <p>
        Here&rsquo;s the surprise: despite lending its name to the capital, the
        impala is found in just <strong>one Ugandan national park &mdash; Lake
        Mburo</strong>, in the west of the country. Compact, scenic, and easy to
        reach on the road to the gorillas, Lake Mburo is a lovely half-way stop,
        with impala, zebra, eland, and topi on the plains and hippos and crocodiles
        in its lakes. It&rsquo;s also one of the few parks where you can explore on
        foot or by boat.
      </p>

      <p>
        You can build it into a{" "}
        <Link href="/safaris/uganda-lake-mburo-safari">Lake Mburo safari</Link>{" "}
        or fold it into a longer gorilla trip &mdash; timing tips are in our guide
        to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        . While you&rsquo;re reading up on Uganda&rsquo;s plains game, the
        oddly-built{" "}
        <Link href="/blog/jacksons-hartebeest-facts">
          Jackson&rsquo;s hartebeest
        </Link>{" "}
        is another one worth knowing.
      </p>

      <PostFaq title="Impala FAQ" items={faq} />

      <h2>See the Antelope That Named a City</h2>

      <p>
        There&rsquo;s something fitting about ending a Uganda safari at Lake Mburo,
        watching the very animal that gave the capital its name bound across the
        plains. Tell us your plans and we&rsquo;ll build a{" "}
        <Link href="/safaris/uganda-lake-mburo-safari">Lake Mburo safari</Link>{" "}
        into your trip &mdash; a gentle, scenic counterpoint to the forests and
        the gorillas.
      </p>
    </BlogPostLayout>
  );
}
