// ─────────────────────────────────────────────────────────────
//  POST: Uganda Kob Facts — The National Animal
//  Wildlife-facts cluster post; targets "uganda kob facts".
//  Real photos live in public/blog/uganda-kob-facts/
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

const meta = getPostMeta("uganda-kob-facts")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Why is the kob Uganda’s national animal?",
    a: "It symbolises the country’s abundant wildlife and features on the national coat of arms alongside the grey crowned crane.",
  },
  {
    q: "What is a “lek”?",
    a: "A traditional breeding ground where male kob gather in small, tightly packed territories to compete for mates — unusual, structured behaviour among African antelope.",
  },
  {
    q: "How is a kob different from an impala?",
    a: "Kob are more heavily built and reddish-brown; impala are more slender with a paler coat and distinctive black rump markings.",
  },
  {
    q: "Where are Uganda kob most common?",
    a: "Queen Elizabeth National Park and Murchison Falls, both with huge resident herds.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Look closely at Uganda&rsquo;s coat of arms and you&rsquo;ll find two
        animals standing either side of the shield: a grey crowned crane, and a
        reddish-brown antelope with elegant, lyre-shaped horns. That antelope is
        the <strong>Uganda kob</strong> &mdash; the country&rsquo;s national
        animal, and one of the most abundant, easiest antelope to see on a
        Ugandan safari.
      </p>

      <p>
        Here are the facts behind the Uganda kob: what it looks like, its
        unusual mating ritual, and where you&rsquo;ll see it in huge numbers.
      </p>

      <h2>Uganda Kob Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Uganda&rsquo;s national animal</strong> &mdash; featured on the
          national coat of arms
        </li>
        <li>
          <strong>Impala look-alike, but sturdier</strong> &mdash; reddish-brown,
          with a stockier build
        </li>
        <li>
          <strong>Only males have horns</strong> &mdash; lyre-shaped and strongly
          ridged
        </li>
        <li>
          <strong>Unique mating grounds called &ldquo;leks&rdquo;</strong> where
          males compete in tightly packed territories
        </li>
        <li>
          <strong>Abundant in Queen Elizabeth and Murchison Falls</strong>
        </li>
      </ul>

      <PostImage
        src="/blog/uganda-kob-facts/kob-herd.jpg"
        alt="A herd of Uganda kob on open grassland, a male's lyre-shaped horns catching the light"
        caption="A herd of Uganda kob — the antelope on the national coat of arms"
      />

      <h2>How to Recognise a Uganda Kob</h2>

      <p>
        At a glance, the Uganda kob resembles an impala, but it&rsquo;s more
        heavily built, with a shorter, sturdier frame and a rich reddish-brown
        coat &mdash; a shade distinct from other kob subspecies elsewhere in
        Africa. As with impala, only males carry horns: strongly ridged, lyre-shaped,
        and diverging outward, a striking silhouette against the savanna sky.
      </p>

      <h2>The Lek: A Very Unusual Mating Ground</h2>

      <p>
        The Uganda kob is famous among biologists for its breeding behaviour.
        Males gather at traditional breeding grounds called <strong>leks</strong>{" "}
        &mdash; small, tightly packed territories, often on raised ground close
        to water, where they compete fiercely for the tiny patches of space that
        attract the most females. A single lek can hold dozens of males in an
        area barely larger than a few tennis courts, each defending his own
        spot. Kob return to the same leks season after season over a lifespan of
        around 20 years, making these breeding grounds a genuinely reliable
        wildlife spectacle for visitors during the right season.
      </p>

      <h2>Why the Kob Became Uganda&rsquo;s National Animal</h2>

      <p>
        The Uganda kob was chosen for the national coat of arms as a symbol of
        the country&rsquo;s abundant wildlife &mdash; and few animals better
        represent that abundance. In parks like Queen Elizabeth, kob gather in
        herds numbering in the thousands, their reddish coats scattered across
        the plains in every direction, making them one of the first and most
        memorable sights on a Uganda game drive.
      </p>

      <h2>Where to See Uganda Kob</h2>

      <p>
        Kob are among the easiest animals to see in Uganda, with huge
        populations in{" "}
        <Link href="/blog/queen-elizabeth-national-park-guide">
          Queen Elizabeth National Park
        </Link>{" "}
        (particularly the Kasenyi plains) and{" "}
        <Link href="/blog/murchison-falls-national-park-guide">
          Murchison Falls
        </Link>
        . Their abundance also makes them one of the primary prey species for
        the lions in both parks &mdash; watching a kob herd stay alert to a
        distant pride is a classic piece of savanna drama.
      </p>

      <PostFaq title="Uganda Kob FAQ" items={faq} />

      <h2>See Uganda&rsquo;s National Animal</h2>

      <p>
        Few animals sum up the abundance of Uganda&rsquo;s savanna quite like a
        kob herd stretching to the horizon. Tell us your dates and we&rsquo;ll
        build it into a{" "}
        <Link href="/safaris/uganda-queen-elizabeth-express-safari">
          Queen Elizabeth safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
