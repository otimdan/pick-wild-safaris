// ─────────────────────────────────────────────────────────────
//  POST: Big Cats of Africa — A Complete Guide
//  Wildlife hub post rounding out the predator cluster; links out
//  to tigers-in-africa, leopard-vs-cheetah, how-fast-is-a-cheetah,
//  tree-climbing-lions-ishasha, and do-lions-eat-leopards-etc.
//  Images added later — <ImagePlaceholder> marks each photo slot.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import { getPostMeta } from "@/content/posts/index";

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

const meta = getPostMeta("big-cats-of-africa")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Ask most people to name Africa&rsquo;s big cats and you&rsquo;ll get
        two answers: lion, and maybe leopard. The real picture is richer
        &mdash; five distinct wild cat species share the continent&rsquo;s
        savannas and forests, from the apex-predator lion down to cats
        barely bigger than a house cat that most visitors never even know
        they&rsquo;ve driven past.
      </p>

      <p>
        Notably absent from that list: tigers, which are native to Asia and
        have never lived wild in Africa &mdash; we cover that mix-up
        properly in{" "}
        <Link href="/blog/tigers-in-africa">
          are there tigers in Africa?
        </Link>{" "}
        Here&rsquo;s the real lineup.
      </p>

      <h2>Lion</h2>

      <p>
        Africa&rsquo;s apex predator and its only truly social cat, living in
        prides of related females, their cubs, and a small coalition of
        males. Lions are the cat most visitors picture first, and Uganda
        has an unusual claim to fame here: the tree-climbing lions of
        Ishasha, in Queen Elizabeth National Park, are one of only a
        handful of lion populations on earth known to regularly climb and
        rest in trees &mdash; the full story is in{" "}
        <Link href="/blog/tree-climbing-lions-ishasha">
          the tree-climbing lions of Ishasha
        </Link>
        .
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #7a6020, #241c08)"
        label="A lioness resting on a rocky outcrop, savanna behind her"
      />

      <h2>Leopard</h2>

      <p>
        Solitary, immensely powerful for its size, and the hardest of
        Africa&rsquo;s big cats to reliably spot. Leopards hunt mostly at
        night, drag kills far heavier than themselves up into trees to keep
        them from lions and hyenas, and are found across a wider range of
        habitats than any other African cat &mdash; forest, savanna, and
        mountain alike. Queen Elizabeth and Kidepo Valley are both strong
        Uganda destinations for a sighting.
      </p>

      <h2>Cheetah</h2>

      <p>
        The fastest land animal on earth, built entirely for a short,
        explosive daylight sprint rather than raw strength &mdash; we cover
        exactly how fast in{" "}
        <Link href="/blog/how-fast-is-a-cheetah">
          how fast is a cheetah
        </Link>
        . Cheetahs need wide open country to hunt and are genuinely rare in
        Uganda; Kidepo Valley in the remote north is your best chance. If
        you&rsquo;ve ever struggled to tell a cheetah from a leopard at a
        distance, our{" "}
        <Link href="/blog/leopard-vs-cheetah">leopard vs cheetah guide</Link>{" "}
        breaks down the spots, face, and build that separate them at a
        glance.
      </p>

      <h2>Serval</h2>

      <p>
        A slender, long-legged wild cat about the size of a large domestic
        cat, with a small head and enormous ears tuned for hunting rodents
        in tall grass by sound alone. Servals are shy and mostly
        nocturnal, so sightings are a genuine bonus rather than something
        to plan an itinerary around &mdash; but they turn up in several of
        Uganda&rsquo;s savanna parks.
      </p>

      <h2>Caracal</h2>

      <p>
        A powerful, tufted-eared cat capable of leaping several metres
        straight up to snatch birds out of the air &mdash; one of the most
        athletic hunters, pound for pound, in the entire cat family. Like
        the serval, caracals are elusive and mostly nocturnal, more often
        heard about than seen.
      </p>

      <h2>How the Cats Compete With Each Other</h2>

      <p>
        Sharing the same landscape means these predators regularly compete
        &mdash; and not always the way you&rsquo;d guess. Lions will kill
        leopards and cheetahs given the chance, and hyenas complicate the
        picture further; we untangle exactly who eats or displaces whom in{" "}
        <Link href="/blog/do-lions-eat-leopards-cheetahs-and-hyenas">
          do lions eat leopards, cheetahs, and hyenas
        </Link>
        .
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a5a2a, #10160a)"
        label="A leopard resting on a high tree branch at dusk"
      />

      <h2>Where to See the Most Big Cats in Uganda</h2>

      <ul>
        <li>
          <strong>Queen Elizabeth National Park:</strong> the best
          all-rounder &mdash; tree-climbing lions, healthy leopard numbers,
          and a Kazinga Channel boat safari alongside them
        </li>
        <li>
          <strong>Kidepo Valley National Park:</strong> Uganda&rsquo;s best
          shot at cheetah, in wild, remote wilderness with far fewer
          vehicles than the southern circuit
        </li>
        <li>
          <strong>Murchison Falls National Park:</strong> strong lion and
          leopard numbers across open savanna north of the Nile
        </li>
      </ul>

      <p>
        For photographers hoping to come home with real big-cat images,
        our{" "}
        <Link href="/safari-types/photography-safaris">
          photography safaris
        </Link>{" "}
        are built around exactly this kind of patient, golden-hour game
        drive.
      </p>

      <h2>Big Cats of Africa FAQ</h2>

      <p>
        <strong>How many wild cat species live in Africa?</strong> Five
        widely recognised big and mid-sized cats &mdash; lion, leopard,
        cheetah, serval, and caracal &mdash; alongside the smaller African
        wildcat, ancestor of the domestic cat.
      </p>

      <p>
        <strong>Are there tigers in Africa?</strong> No &mdash; tigers are
        native to Asia and have never lived wild in Africa. See{" "}
        <Link href="/blog/tigers-in-africa">
          are there tigers in Africa?
        </Link>{" "}
        for the full explanation.
      </p>

      <p>
        <strong>Which African cat is fastest?</strong> The cheetah, by a
        huge margin &mdash; the fastest land animal alive.
      </p>

      <p>
        <strong>Which African cat is most dangerous?</strong> The lion,
        both for its size and its social hunting behaviour, though all of
        Africa&rsquo;s big cats warrant serious respect and distance in the
        wild.
      </p>

      <h2>See Africa&rsquo;s Big Cats for Yourself</h2>

      <p>
        Five cats, three very different parks, one Uganda itinerary. Tell
        us which big cat is top of your list and we&rsquo;ll build a route
        around the best chance of seeing it.
      </p>
    </BlogPostLayout>
  );
}
