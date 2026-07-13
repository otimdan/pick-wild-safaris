// ─────────────────────────────────────────────────────────────
//  POST: Black-and-White Colobus Monkey Facts
//  Wildlife-facts cluster post; targets "colobus monkey facts".
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

const meta = getPostMeta("black-and-white-colobus-monkey-facts")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        High in the forest canopy, a flash of black-and-white fur leaps between
        branches, a long white tail trailing behind like a plume. The
        black-and-white colobus is one of Africa&rsquo;s most elegant monkeys
        &mdash; and one with a genuinely strange anatomical quirk that gives the
        whole family its name.
      </p>

      <p>
        Here are the facts behind the black-and-white colobus: its missing
        thumb, its leaf-eating diet, and where to see it in Uganda&rsquo;s
        forests.
      </p>

      <h2>Black-and-White Colobus Facts at a Glance</h2>

      <ul>
        <li>
          <strong>The name means &ldquo;mutilated one&rdquo;</strong> &mdash;
          referring to its missing thumb
        </li>
        <li>
          <strong>Striking black-and-white coat</strong>, with a flowing white
          tail plume and cape
        </li>
        <li>
          <strong>Strict leaf-eater</strong>, with a complex stomach built for
          digesting tough foliage
        </li>
        <li>
          <strong>Lives in small territorial troops</strong> of 5&ndash;15
          individuals
        </li>
        <li>
          <strong>Common in Uganda&rsquo;s forests</strong>, including Kibale
          and Bwindi
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a2a2a, #0a0a0a)"
        label="A black-and-white colobus monkey leaping between branches, white tail trailing"
      />

      <h2>The Monkey With No Thumb</h2>

      <p>
        &ldquo;Colobus&rdquo; comes from a Greek word meaning &ldquo;mutilated
        one&rdquo; &mdash; a reference to the genus&rsquo;s most distinctive
        feature: it has no thumb. Rather than a disadvantage, the reduced,
        four-fingered hand actually works in the colobus&rsquo;s favour, forming
        a hook-like grip that&rsquo;s ideally suited to fast, confident movement
        through the forest canopy, swinging and leaping between branches with
        striking agility.
      </p>

      <h2>A Stomach Built for Leaves</h2>

      <p>
        Black-and-white colobus are strict leaf-eaters, and their digestive
        system is built accordingly &mdash; a large, multi-chambered stomach,
        similar in principle to a cow&rsquo;s, that ferments tough plant fibre
        with the help of specialised bacteria. This lets them extract energy
        from mature or even mildly toxic leaves that most other monkeys simply
        can&rsquo;t digest, giving them access to a food source with very little
        competition from other primates.
      </p>

      <h2>Troop Life</h2>

      <p>
        Colobus live in small, well-defined troops of roughly 5 to 15
        individuals &mdash; typically one dominant male, several females, and
        their young &mdash; each defending its own patch of forest from
        neighbouring troops. Watching a troop move through the high canopy, black
        fur and white tail plumes flashing against the green, is one of the
        quieter pleasures of forest trekking in Uganda.
      </p>

      <h2>Where to See Black-and-White Colobus in Uganda</h2>

      <p>
        They&rsquo;re widespread across Uganda&rsquo;s forested parks &mdash;
        commonly seen during{" "}
        <Link href="/blog/chimpanzee-trekking-kibale-forest">
          chimpanzee trekking in Kibale
        </Link>{" "}
        and gorilla trekking in{" "}
        <Link href="/blog/bwindi-impenetrable-forest-guide">Bwindi</Link>, as
        well as along many of the country&rsquo;s forest nature walks &mdash; a
        reliable, beautiful bonus sighting on almost any primate trek.
      </p>

      <h2>Black-and-White Colobus FAQ</h2>

      <p>
        <strong>Why doesn&rsquo;t the colobus have a thumb?</strong> Its reduced,
        four-fingered hand forms a hook-like grip suited to fast movement through
        the forest canopy &mdash; an adaptation, not a disability.
      </p>

      <p>
        <strong>What do colobus monkeys eat?</strong> Almost exclusively leaves,
        digested with the help of a complex, multi-chambered stomach.
      </p>

      <p>
        <strong>Where can I see them in Uganda?</strong> Widely, including
        Kibale Forest and Bwindi, often spotted during chimp or gorilla treks.
      </p>

      <p>
        <strong>How big are colobus troops?</strong> Typically 5 to 15
        individuals, each troop defending its own patch of forest.
      </p>

      <h2>Spot Them on a Forest Trek</h2>

      <p>
        Colobus monkeys are one of the loveliest bonus sightings on any Ugandan
        forest trek. Tell us your plans and we&rsquo;ll build one into your{" "}
        <Link href="/safaris/uganda-kibale-chimpanzee-safari">
          Kibale
        </Link>{" "}
        or{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          Bwindi
        </Link>{" "}
        itinerary.
      </p>
    </BlogPostLayout>
  );
}
