// ─────────────────────────────────────────────────────────────
//  POST: Uganda Kob Facts — The National Animal
//  Wildlife-facts cluster post; targets "uganda kob facts".
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

const meta = getPostMeta("uganda-kob-facts")!;

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

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #7a5a2a, #241c08)"
        label="A herd of Uganda kob on open grassland, a male's lyre-shaped horns catching the light"
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

      <h2>Uganda Kob FAQ</h2>

      <p>
        <strong>Why is the kob Uganda&rsquo;s national animal?</strong> It
        symbolises the country&rsquo;s abundant wildlife and features on the
        national coat of arms alongside the grey crowned crane.
      </p>

      <p>
        <strong>What is a &ldquo;lek&rdquo;?</strong> A traditional breeding
        ground where male kob gather in small, tightly packed territories to
        compete for mates &mdash; unusual, structured behaviour among African
        antelope.
      </p>

      <p>
        <strong>How is a kob different from an impala?</strong> Kob are more
        heavily built and reddish-brown; impala are more slender with a paler
        coat and distinctive black rump markings.
      </p>

      <p>
        <strong>Where are Uganda kob most common?</strong> Queen Elizabeth
        National Park and Murchison Falls, both with huge resident herds.
      </p>

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
