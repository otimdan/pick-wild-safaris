// ─────────────────────────────────────────────────────────────
//  POST: Leopard vs Cheetah — How to Tell Them Apart
//  Informational comparison supporting the predator cluster;
//  targets "leopard vs cheetah / cheetah vs leopard difference".
//  Bridges to Uganda/East Africa big-cat safaris.
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

const meta = getPostMeta("leopard-vs-cheetah")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        At a glance they look like the same animal &mdash; two tawny, spotted
        cats slinking across the savanna. But a leopard and a cheetah are
        completely different creatures, and once you know what to look for
        you&rsquo;ll never confuse them again. One is a powerful, tree-climbing
        ambush hunter of the night; the other is the fastest land animal on
        earth, built for daylight sprints across open ground.
      </p>

      <p>
        Here&rsquo;s a clear, practical guide to telling a leopard from a cheetah
        &mdash; the spots, the face, the body, and the behaviour &mdash; so you
        can call it correctly from the safari vehicle.
      </p>

      <h2>Leopard vs Cheetah at a Glance</h2>

      <ul>
        <li>
          <strong>Spots:</strong> leopards have rosettes (little rose-shaped
          clusters); cheetahs have simple, solid round spots
        </li>
        <li>
          <strong>Face:</strong> cheetahs have two black &ldquo;tear marks&rdquo;
          running from eye to mouth; leopards don&rsquo;t
        </li>
        <li>
          <strong>Build:</strong> leopards are stocky and muscular; cheetahs are
          slender, tall-legged, and greyhound-like
        </li>
        <li>
          <strong>Speed vs strength:</strong> cheetahs are all speed; leopards
          are all power
        </li>
        <li>
          <strong>Trees:</strong> leopards climb superbly and stash kills up high;
          cheetahs stay on the ground
        </li>
        <li>
          <strong>When:</strong> leopards hunt mostly at night; cheetahs hunt by
          day
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a5230, #241a0c)"
        label="Split composition — a leopard's rosettes beside a cheetah's tear-marked face"
      />

      <h2>The Easiest Tell: Spots and Tear Marks</h2>

      <p>
        If you remember only one thing, remember the <strong>tear marks</strong>.
        A cheetah has two distinct black lines running down from the inner corner
        of each eye to the sides of its mouth &mdash; unmistakable once you spot
        them, and thought to cut glare and help it focus on prey in bright sun. A
        leopard&rsquo;s face is clean of these lines.
      </p>

      <p>
        Then look at the coat. A cheetah&rsquo;s spots are <em>solid</em> round
        dots, like ink pressed onto the fur. A leopard&rsquo;s are{" "}
        <strong>rosettes</strong> &mdash; irregular rings of dark spots enclosing
        a slightly darker centre, a bit like a paw print or a small rose. Solid
        dots mean cheetah; ringed rosettes mean leopard.
      </p>

      <h2>Body and Build</h2>

      <p>
        Their bodies tell the same story of speed versus power. The cheetah is
        the sports car: long-legged, deep-chested, narrow-waisted, small-headed,
        and light &mdash; every line of it shaped to accelerate. The leopard is
        the four-wheel-drive: shorter-legged, heavily muscled, thick through the
        neck and shoulders, and far heavier for its length. A leopard can drag a
        carcass heavier than itself up a tree; a cheetah couldn&rsquo;t begin to.
      </p>

      <h2>How They Hunt</h2>

      <p>
        The difference in build is a difference in strategy. The cheetah is a{" "}
        <strong>daylight sprinter</strong>: it stalks close, then explodes into a
        short, spectacular chase, relying on pure speed to run down gazelle and
        impala before its body overheats. The leopard is a{" "}
        <strong>nocturnal ambush hunter</strong>: patient, powerful, and stealthy,
        it gets within a few metres under cover of darkness and takes prey with a
        single overwhelming pounce, then hauls the kill up a tree away from lions
        and hyenas.
      </p>

      <p>
        That&rsquo;s also why the two cats fare so differently against bigger
        predators. The leopard&rsquo;s strength and climbing ability let it
        coexist with lions; the cheetah&rsquo;s fragility means it must simply
        avoid them &mdash; a rivalry we cover in{" "}
        <Link href="/blog/do-lions-eat-leopards-cheetahs-and-hyenas">
          do lions eat leopards, cheetahs, and hyenas
        </Link>
        .
      </p>

      <h2>Where to See Each in East Africa</h2>

      <ul>
        <li>
          <strong>Leopards:</strong> widespread but elusive &mdash; Queen
          Elizabeth and Kidepo in Uganda, and the Masai Mara and Serengeti, all
          hold good numbers. Look in trees at dusk.
        </li>
        <li>
          <strong>Cheetahs:</strong> much rarer in Uganda &mdash; Kidepo Valley
          is your best bet in the north &mdash; and more reliably seen on the
          open plains of the Masai Mara and Serengeti.
        </li>
      </ul>

      <p>
        Because cheetahs need wide open country and leopards prefer cover, seeing
        both well often means combining a savanna park with a wilder, more remote
        one. Timing helps too &mdash; our guide to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>{" "}
        walks through the seasons.
      </p>

      <h2>Leopard vs Cheetah FAQ</h2>

      <p>
        <strong>What&rsquo;s the easiest way to tell them apart?</strong> The
        cheetah&rsquo;s black tear marks and solid round spots versus the
        leopard&rsquo;s clean face and ringed rosettes.
      </p>

      <p>
        <strong>Which is faster, a leopard or a cheetah?</strong> The cheetah, by
        a huge margin &mdash; it&rsquo;s the fastest land animal alive. The
        leopard is stronger but far slower.
      </p>

      <p>
        <strong>Which is more dangerous?</strong> The leopard is the more
        powerful and formidable predator; the cheetah is comparatively timid and
        avoids confrontation.
      </p>

      <p>
        <strong>Can they climb trees?</strong> Leopards are expert climbers and
        store kills in trees; cheetahs rarely climb beyond low, sloping branches.
      </p>

      <h2>Track Both on Safari</h2>

      <p>
        Learning to read a spotted cat at a glance is one of the quiet pleasures
        of an African safari. If you&rsquo;d like the best chance at both, tell us
        and we&rsquo;ll build a route that pairs Uganda&rsquo;s parks &mdash; a{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley wilderness safari
        </Link>{" "}
        for cheetah country &mdash; with the wider region&rsquo;s big-cat plains.
      </p>
    </BlogPostLayout>
  );
}
