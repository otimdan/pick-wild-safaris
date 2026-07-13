// ─────────────────────────────────────────────────────────────
//  POST: Warthog Facts
//  Wildlife-facts cluster post; targets "warthog facts".
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

const meta = getPostMeta("warthog-facts")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Thanks to a certain animated warthog, this is probably the safari animal
        travellers already feel they know before they arrive. The real thing is
        just as charming &mdash; and a good deal stranger &mdash; trotting across
        the savanna tail-up, dropping to its knees to graze, and vanishing
        backward into a stolen burrow at the first sign of danger.
      </p>

      <p>
        Here are the facts behind the common warthog: its tusks, its odd
        grazing posture, and its unlikely friendship with the mongoose.
      </p>

      <h2>Warthog Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Named for the wart-like bumps</strong> on its face, which
          protect it during fights
        </li>
        <li>
          <strong>Curved tusks</strong> up to 60&ndash;65 cm long in large males
        </li>
        <li>
          <strong>Grazes on its knees</strong>, using thickened, padded joints
        </li>
        <li>
          <strong>Lives in stolen homes:</strong> shelters in abandoned aardvark
          burrows
        </li>
        <li>
          <strong>Runs backward into its burrow</strong>, tusks facing outward
          to meet any threat
        </li>
        <li>
          <strong>Forms a real mutualism with mongooses</strong>, which groom
          off its ticks
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a5a3a, #201c10)"
        label="A warthog family trotting across the savanna, tails raised"
      />

      <h2>The &ldquo;Warts&rdquo; and the Tusks</h2>

      <p>
        The warthog&rsquo;s name comes from the thick, wart-like bumps on its
        face &mdash; actually protective pads that cushion blows during fights
        between males. Both sexes grow tusks, but a mature male&rsquo;s curved
        upper pair can reach an impressive 60&ndash;65 centimetres, with a
        shorter, razor-sharp lower pair honed against the upper tusks every time
        the mouth closes &mdash; a formidable, self-sharpening weapon.
      </p>

      <h2>Grazing on Bent Knees</h2>

      <p>
        One of the warthog&rsquo;s most recognisable habits is grazing while
        kneeling &mdash; dropping onto thickened, padded wrist joints to get its
        short neck close enough to the ground for short grass. It&rsquo;s an
        oddly endearing sight on any game drive, and a genuinely useful
        adaptation given how little clearance a warthog&rsquo;s neck otherwise
        gives it.
      </p>

      <h2>Borrowed Burrows</h2>

      <p>
        Warthogs rarely dig their own burrows, instead moving into ones
        abandoned by aardvarks. Cleverly, they typically back in tail-first,
        leaving their tusks facing the entrance &mdash; ready to meet any
        predator that follows them in head-on. When alarmed, a warthog&rsquo;s
        signature move is to bolt for its burrow at speed, tail held stiffly
        upright like a small flag.
      </p>

      <h2>A Real-Life Pumbaa and Timon</h2>

      <p>
        The famous warthog-and-mongoose friendship from popular culture is
        rooted in genuine behaviour: warthogs and banded mongooses have a real
        mutualistic relationship, with mongooses picking ticks and other
        parasites off a warthog&rsquo;s skin while the warthog simply stands
        still and tolerates it &mdash; a small, mutually beneficial partnership
        you can occasionally spot on safari.
      </p>

      <h2>Family Life</h2>

      <p>
        Female warthogs and their young live in social groups called
        <strong> sounders</strong>, typically two to ten animals, while adult
        males are largely solitary or gather in loose bachelor groups outside
        the breeding season.
      </p>

      <h2>Where to See Warthogs in Uganda</h2>

      <p>
        Warthogs are common and easy to spot across nearly every Ugandan
        savanna park &mdash; Queen Elizabeth, Murchison Falls, Lake Mburo, and
        Kidepo Valley all have healthy populations, often seen grazing right
        beside the road.
      </p>

      <h2>Warthog FAQ</h2>

      <p>
        <strong>Why does a warthog run with its tail up?</strong> It&rsquo;s
        thought to help family members keep track of each other while fleeing at
        speed through tall grass.
      </p>

      <p>
        <strong>Why do warthogs kneel to graze?</strong> Their short necks make
        it easier to reach short grass from padded, thickened wrist joints built
        for the purpose.
      </p>

      <p>
        <strong>Do warthogs dig their own burrows?</strong> Rarely — they
        typically move into burrows abandoned by aardvarks, backing in tail
        first.
      </p>

      <p>
        <strong>Is the mongoose friendship real?</strong> Yes — mongooses
        genuinely groom ticks and parasites off warthogs in a mutually
        beneficial relationship.
      </p>

      <h2>Spot Them on Your Game Drive</h2>

      <p>
        Warthogs are a near-guaranteed, endlessly entertaining sighting on any
        Uganda safari. Tell us your dates and we&rsquo;ll build a game drive
        into your{" "}
        <Link href="/safaris/uganda-queen-elizabeth-express-safari">
          Queen Elizabeth
        </Link>{" "}
        or wider Uganda itinerary.
      </p>
    </BlogPostLayout>
  );
}
