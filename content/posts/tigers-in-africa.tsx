// ─────────────────────────────────────────────────────────────
//  POST: Are There Tigers in Africa?
//  Myth-busting search-intent post targeting "tigers in africa".
//  Redirects intent toward Africa's real big cats and bridges to
//  Uganda's big-cat parks.
//  Real photos live in public/blog/tigers-in-africa/
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import { getPostMeta } from "@/content/posts/index";
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

const meta = getPostMeta("tigers-in-africa")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Short answer: no. There are no wild tigers in Africa, and there
        never have been. Tigers are an Asian species through and through
        &mdash; their entire evolutionary history, fossil record, and wild
        range sit in Asia, from the Siberian forests of the Russian Far East
        down through India, China, and Southeast Asia. Not one tiger
        subspecies is native to the African continent.
      </p>

      <p>
        It&rsquo;s a genuinely common mix-up, though, and an understandable
        one. Here&rsquo;s why people search for tigers in Africa, what you
        might actually be thinking of, and which big cats you&rsquo;ll
        really find on an African safari &mdash; several of which are just
        as spectacular.
      </p>

      <h2>Why the Confusion?</h2>

      <ul>
        <li>
          <strong>Lions and tigers get mentally lumped together</strong> as
          &ldquo;the big striped/maned cat,&rdquo; especially in children&rsquo;s
          books, cartoons, and phrases like &ldquo;lions and tigers and
          bears&rdquo; that never specify a continent
        </li>
        <li>
          <strong>Zoos and circuses</strong> have displayed tigers alongside
          African animals for over a century, blurring the geographic line
          in popular memory
        </li>
        <li>
          <strong>Captive tigers do exist in Africa</strong> &mdash; South
          Africa in particular has a controversial private big-cat breeding
          industry, and tigers bred and kept in captivity there are
          sometimes photographed in ways that make them look wild. They
          are not; South Africa&rsquo;s wildlife authorities do not classify
          tigers as an indigenous species
        </li>
        <li>
          <strong>&ldquo;Tiger&rdquo; gets used loosely</strong> as slang for
          any large, powerful striped or spotted cat, the way people
          sometimes say &ldquo;tiger stripes&rdquo; to describe a
          leopard&rsquo;s coat
        </li>
      </ul>

      <PostImage
        src="/blog/tigers-in-africa/lion-savanna.jpg"
        alt="A lion in golden savanna grass — Africa's actual big cat"
        caption="No tigers — but Africa has the lion, its own iconic big cat"
      />

      <h2>Tigers vs Lions: The Easy Way to Tell Them Apart</h2>

      <p>
        If what you&rsquo;re picturing is a large cat with a mane, that&rsquo;s
        a lion &mdash; Africa&rsquo;s most iconic big cat, and the one most
        often confused with tigers by people who haven&rsquo;t seen both side
        by side. The differences are simple once you know them:
      </p>

      <ul>
        <li>
          <strong>Coat:</strong> tigers have bold black stripes on orange;
          lions are a plain tawny gold with no stripes at all
        </li>
        <li>
          <strong>Mane:</strong> adult male lions grow a thick mane around
          the head and neck; tigers have no mane
        </li>
        <li>
          <strong>Social life:</strong> lions live in prides and are the
          only truly social big cat; tigers are solitary
        </li>
        <li>
          <strong>Habitat:</strong> lions roam Africa&rsquo;s savanna and
          grassland; tigers live in Asia&rsquo;s forests, mangroves, and
          grasslands
        </li>
      </ul>

      <h2>The Big Cats You Will Actually See in Africa</h2>

      <p>
        Africa&rsquo;s real lineup of big and mid-sized cats is arguably
        more varied than most visitors expect &mdash; we cover the full
        picture in{" "}
        <Link href="/blog/big-cats-of-africa">
          our guide to Africa&rsquo;s big cats
        </Link>
        , but the headline names are:
      </p>

      <ul>
        <li>
          <strong>Lion</strong> &mdash; Africa&rsquo;s apex predator and the
          only cat that lives in social prides. Queen Elizabeth National
          Park in Uganda is famous for its rare tree-climbing lions in the
          Ishasha sector, a behaviour seen in only a handful of places on
          earth (more on that in{" "}
          <Link href="/blog/tree-climbing-lions-ishasha">
            tree-climbing lions in Ishasha
          </Link>
          )
        </li>
        <li>
          <strong>Leopard</strong> &mdash; solitary, powerful, and the
          hardest of the three to spot, thanks to rosette-patterned camouflage
          and mostly nocturnal habits
        </li>
        <li>
          <strong>Cheetah</strong> &mdash; the fastest land animal alive,
          built for daylight sprints across open plains (see{" "}
          <Link href="/blog/leopard-vs-cheetah">
            leopard vs cheetah
          </Link>{" "}
          for how to tell it from a leopard at a glance)
        </li>
        <li>
          <strong>Serval and caracal</strong> &mdash; smaller wild cats,
          less commonly seen but present across many of the same parks
        </li>
      </ul>

      <p>
        Lions, leopards, and hyenas share the same landscape and sometimes
        the same kills &mdash; a rivalry we cover in{" "}
        <Link href="/blog/do-lions-eat-leopards-cheetahs-and-hyenas">
          do lions eat leopards, cheetahs, and hyenas
        </Link>
        .
      </p>

      <h2>Where to See Africa&rsquo;s Big Cats in Uganda</h2>

      <p>
        Queen Elizabeth National Park is the standout destination for big
        cats in Uganda &mdash; home to both tree-climbing lions and healthy
        leopard numbers, alongside hippos, elephants, and the Kazinga
        Channel&rsquo;s boat safaris. Kidepo Valley, in Uganda&rsquo;s remote
        north, is the best bet for the rarer cheetah.
      </p>

      <PostImage
        src="/blog/tigers-in-africa/tree-climbing-lion-ishasha.jpg"
        alt="A tree-climbing lion resting in a fig tree, Ishasha sector, Queen Elizabeth National Park"
        caption="A tree-climbing lion in the Ishasha sector, Queen Elizabeth National Park"
      />

      <h2>Tigers in Africa FAQ</h2>

      <p>
        <strong>Are there wild tigers anywhere in Africa?</strong> No.
        Tigers have never been a native African species; their entire wild
        range is in Asia.
      </p>

      <p>
        <strong>Can you see tigers in Africa at all?</strong> Only in
        captivity &mdash; some private facilities, mostly in South Africa,
        breed and keep tigers, which has drawn significant conservation
        criticism. There is no wild tiger population on the continent.
      </p>

      <p>
        <strong>What&rsquo;s the biggest cat in Africa?</strong> The lion,
        both by typical body size and by its dominance of the food chain
        as Africa&rsquo;s apex predator.
      </p>

      <p>
        <strong>Why do people confuse lions and tigers?</strong> Mostly
        pop culture &mdash; both are iconic &ldquo;big cats&rdquo; often
        pictured together in media without reference to which continent
        each actually comes from.
      </p>

      <h2>See Africa&rsquo;s Real Big Cats</h2>

      <p>
        No stripes required &mdash; Uganda&rsquo;s lions, leopards, and (with
        the right route) cheetahs are every bit as memorable. Tell us what
        you&rsquo;d most like to see and we&rsquo;ll build a route around it,
        starting with a{" "}
        <Link href="/safaris/uganda-queen-elizabeth-express-safari">
          Queen Elizabeth National Park safari
        </Link>{" "}
        for tree-climbing lions.
      </p>
    </BlogPostLayout>
  );
}
