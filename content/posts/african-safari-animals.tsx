// ─────────────────────────────────────────────────────────────
//  POST: African Safari Animals — The Complete Guide
//  PILLAR / HUB post targeting the "african safari animals" (900) /
//  "animals of africa" (1.1K) / "african animals list" (600) /
//  "wild african animals" (200) cluster (competitor:
//  nkuringosafaris.com/50-must-see-african-safari-animals — 754/mo).
//  Beats the generic listicle with an organised, Uganda/East-Africa
//  lens and links out to every animal post in the wildlife cluster.
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

const meta = getPostMeta("african-safari-animals")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "What animals will I see on an African safari?",
    a: "It depends on the park, but a good Uganda or East Africa trip typically delivers elephants, lions, buffalo, hippos, giraffe, many antelope, and — uniquely in Uganda — gorillas and chimpanzees.",
  },
  {
    q: "What are the Big Five?",
    a: "Lion, leopard, elephant, buffalo, and rhino — originally the five animals hardest and most dangerous to hunt on foot.",
  },
  {
    q: "Can you see the Big Five in Uganda?",
    a: "Yes — four in Murchison Falls, with rhino at the Ziwa Rhino Sanctuary on the way north.",
  },
  {
    q: "What makes Uganda different from other safari countries?",
    a: "It combines classic savanna wildlife with mountain gorillas and chimpanzees — a mix you can’t get on a standard plains-only safari.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Africa is home to the greatest gathering of large wild animals left on
        earth &mdash; the lions, elephants, gorillas, and great herds that draw
        travellers from every corner of the world. If you&rsquo;re planning a
        first safari, the sheer variety can be dizzying. So here is a clear,
        organised guide to the animals of Africa you can actually hope to see in
        the wild, grouped so it makes sense, with an honest note on where each
        one lives.
      </p>

      <p>
        We&rsquo;ve written it through a Uganda and East Africa lens, because
        that&rsquo;s the corner of the continent we know best &mdash; and, as it
        happens, one of the richest for wildlife anywhere. Think of this as a map
        of the cast; each animal below links to a deeper story where we have one.
      </p>

      <h2>The Big Five</h2>

      <p>
        The famous &ldquo;Big Five&rdquo; &mdash; lion, leopard, elephant, buffalo,
        and rhino &mdash; were originally the five animals that early hunters
        considered most dangerous to pursue on foot. Today they&rsquo;re the
        headline sightings of any safari:
      </p>

      <ul>
        <li>
          <strong>Lion</strong> &mdash; the icon of the savanna, and in one corner
          of Uganda, a genuine oddity: the{" "}
          <Link href="/blog/tree-climbing-lions-ishasha">
            tree-climbing lions of Ishasha
          </Link>
        </li>
        <li>
          <strong>Leopard</strong> &mdash; the elusive, powerful night hunter (and
          easy to confuse with a cheetah &mdash; see{" "}
          <Link href="/blog/leopard-vs-cheetah">leopard vs cheetah</Link>)
        </li>
        <li>
          <strong>African elephant</strong> &mdash; the largest land animal on
          earth, seen across Uganda&rsquo;s savanna parks
        </li>
        <li>
          <strong>African buffalo</strong> &mdash; formidable, unpredictable, and
          often in vast herds
        </li>
        <li>
          <strong>Rhino</strong> &mdash; in Uganda, found only at the Ziwa Rhino
          Sanctuary, where you track southern white rhinos on foot
        </li>
      </ul>

      <p>
        A common question is whether you can see all five in Uganda. You can
        &mdash; Murchison Falls delivers lion, leopard, elephant, and buffalo, and
        a stop at Ziwa (conveniently on the road north) adds the rhino.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a6230, #221f0a)"
        label="A classic savanna scene — elephants and buffalo on the plains at golden hour"
      />

      <h2>The Great Apes &amp; Primates</h2>

      <p>
        This is where Uganda leaves the classic savanna safari behind. The forests
        of the south-west and west hold some of the rarest primates on earth:
      </p>

      <ul>
        <li>
          <strong>Mountain gorilla</strong> &mdash; the giant of the misty
          forests; just over a thousand remain, and Uganda holds nearly half of
          them (see{" "}
          <Link href="/blog/how-many-mountain-gorillas-are-left">
            how many mountain gorillas are left
          </Link>{" "}
          and{" "}
          <Link href="/blog/how-big-is-a-silverback-gorilla">
            how big is a silverback gorilla
          </Link>
          )
        </li>
        <li>
          <strong>Chimpanzee</strong> &mdash; our closest living relative, trekked
          in Kibale Forest (see{" "}
          <Link href="/blog/chimpanzee-trekking-kibale-forest">
            chimpanzee trekking in Kibale
          </Link>{" "}
          and{" "}
          <Link href="/blog/gorilla-vs-chimpanzee">gorilla vs chimpanzee</Link>)
        </li>
        <li>
          <strong>Golden monkey</strong> &mdash; a striking, endangered forest
          monkey tracked in Mgahinga
        </li>
        <li>
          <strong>Olive baboon, black-and-white colobus, and vervet monkey</strong>{" "}
          &mdash; seen widely across parks and forest edges
        </li>
      </ul>

      <h2>Africa&rsquo;s Big Cats</h2>

      <p>
        Beyond the lion and leopard of the Big Five, the third great cat completes
        the set:
      </p>

      <ul>
        <li>
          <strong>Cheetah</strong> &mdash; the fastest land animal on earth (see{" "}
          <Link href="/blog/how-fast-is-a-cheetah">how fast is a cheetah</Link>),
          in Uganda best looked for in remote Kidepo Valley
        </li>
        <li>
          <strong>Lion &amp; leopard</strong> &mdash; the apex hunters, locked in
          the constant rivalry we unpack in{" "}
          <Link href="/blog/do-lions-eat-leopards-cheetahs-and-hyenas">
            do lions eat leopards, cheetahs, and hyenas
          </Link>
        </li>
        <li>
          <strong>Spotted hyena</strong> &mdash; not a cat, but the great rival at
          every kill, and far cleverer than its reputation suggests
        </li>
      </ul>

      <h2>The Giants</h2>

      <ul>
        <li>
          <strong>Giraffe</strong> &mdash; the tallest animal on earth; Uganda&rsquo;s
          are the endangered Rothschild&rsquo;s giraffe, a stronghold at Murchison
        </li>
        <li>
          <strong>Hippopotamus</strong> &mdash; in huge numbers along the Kazinga
          Channel and the Nile, and more dangerous to people than any big cat
        </li>
        <li>
          <strong>African elephant</strong> &mdash; worth naming twice; herds move
          through both savanna and forest here
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a6a3a, #14200e)"
        label="Rothschild's giraffe browsing acacia, Murchison Falls"
      />

      <h2>Plains Game &amp; Antelope</h2>

      <p>
        The herds are the heartbeat of the savanna &mdash; the prey that everything
        else depends on, and a spectacle in their own right:
      </p>

      <ul>
        <li>
          <strong>Impala</strong> &mdash; the graceful leaper that gave Kampala its
          name (see{" "}
          <Link href="/blog/impala-antelope-facts">impala facts</Link>)
        </li>
        <li>
          <strong>Jackson&rsquo;s hartebeest</strong> &mdash; the odd, high-shouldered
          antelope that is almost a Ugandan signature (see{" "}
          <Link href="/blog/jacksons-hartebeest-facts">
            Jackson&rsquo;s hartebeest facts
          </Link>
          )
        </li>
        <li>
          <strong>Uganda kob</strong> &mdash; the national antelope, on the country&rsquo;s
          coat of arms, gathering in great numbers in Queen Elizabeth
        </li>
        <li>
          <strong>Zebra, eland, topi, waterbuck, and oribi</strong> &mdash; the
          wider supporting cast of the plains
        </li>
      </ul>

      <h2>The Unusual &amp; the Rare</h2>

      <p>
        Some African animals are worth a trip on their own:
      </p>

      <ul>
        <li>
          <strong>Shoebill</strong> &mdash; a five-foot, prehistoric-looking swamp
          bird, and one of Uganda&rsquo;s great wildlife prizes (see{" "}
          <Link href="/blog/is-the-shoebill-stork-a-dinosaur">
            is the shoebill stork a dinosaur
          </Link>
          )
        </li>
        <li>
          <strong>Pangolin, aardvark, and serval</strong> &mdash; secretive,
          mostly nocturnal, and a real stroke of luck to see
        </li>
        <li>
          <strong>African wild dog</strong> &mdash; one of the continent&rsquo;s
          most endangered predators, occasionally seen in the far north
        </li>
      </ul>

      <h2>Africa&rsquo;s Birds</h2>

      <p>
        No African animals list is complete without the birds &mdash; and Uganda,
        with over 1,000 species, is one of the finest birding countries on earth.
        Beyond the shoebill, look for the grey crowned crane (Uganda&rsquo;s
        national bird), and the powerhouse raptors we cover in{" "}
        <Link href="/blog/strongest-birds-in-africa">
          the strongest birds in Africa
        </Link>{" "}
        &mdash; the martial and crowned eagles that hunt across these same plains.
      </p>

      <h2>Where to See Them: Uganda &amp; East Africa</h2>

      <p>
        The animals above aren&rsquo;t scattered at random &mdash; each park has its
        own cast. A few of the best on our trips:
      </p>

      <ul>
        <li>
          <strong>Queen Elizabeth NP</strong> &mdash; lions, elephants, buffalo,
          kob, hippos, and chimps in Kyambura Gorge
        </li>
        <li>
          <strong>Murchison Falls NP</strong> &mdash; the Big Four plus giraffe and
          hartebeest, with rhino nearby at Ziwa (see our{" "}
          <Link href="/blog/murchison-falls-national-park-guide">
            Murchison Falls guide
          </Link>
          )
        </li>
        <li>
          <strong>Bwindi &amp; Mgahinga</strong> &mdash; mountain gorillas and
          golden monkeys
        </li>
        <li>
          <strong>Kidepo Valley</strong> &mdash; the wild north, with cheetah,
          lion, and herds seen almost nowhere else in Uganda
        </li>
        <li>
          <strong>The Masai Mara &amp; Serengeti</strong> &mdash; the classic
          big-cat plains and the Great Migration
        </li>
      </ul>

      <p>
        Timing matters too &mdash; our guide to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>{" "}
        explains the seasons.
      </p>

      <PostFaq title="African Safari Animals FAQ" items={faq} />

      <h2>See Them for Yourself</h2>

      <p>
        Reading a list is one thing; standing among the herds is another entirely.
        If you&rsquo;d like to see Africa&rsquo;s animals in the wild, tell us which
        ones top your list and we&rsquo;ll build them into a{" "}
        <Link href="/safaris/uganda-complete-gorilla-wildlife-safari">
          complete Uganda gorilla &amp; wildlife safari
        </Link>{" "}
        &mdash; from the gorillas of Bwindi to the lions of Queen Elizabeth &mdash;
        or an{" "}
        <Link href="/safaris/east-africa-mara-serengeti-migration">
          East Africa migration safari
        </Link>{" "}
        shaped around exactly what you most want to see.
      </p>
    </BlogPostLayout>
  );
}
