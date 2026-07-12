// ─────────────────────────────────────────────────────────────
//  POST: Murchison Falls National Park — The Complete Safari Guide
//  Destination guide targeting "murchison falls" queries,
//  bridging to the Murchison and fly-in itineraries.
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

const meta = getPostMeta("murchison-falls-national-park-guide")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        There&rsquo;s a moment on every Murchison Falls trip that stops people in
        their tracks: the sight of the entire River Nile &mdash; the longest river
        on earth &mdash; being forced through a gap in the rock barely seven metres
        wide, then exploding into the gorge below in a roar you feel in your chest.
        It&rsquo;s the thunderous centrepiece of Uganda&rsquo;s largest and one of
        its finest national parks.
      </p>

      <p>
        This is your complete guide to Murchison Falls: the falls themselves, the
        wildlife, the famous Nile boat safari, when to go, and how to plan a visit.
      </p>

      <h2>Murchison Falls at a Glance</h2>

      <p>
        Murchison Falls National Park sprawls across roughly 3,840 square
        kilometres of north-western Uganda, making it the country&rsquo;s largest
        protected area. The Victoria Nile bisects it, dropping over the falls
        before flowing west into Lake Albert. That river is the park&rsquo;s
        lifeblood: game-rich savanna to the north, woodland and the falls to the
        south, and along the water some of the densest concentrations of hippo,
        crocodile, and birdlife in Uganda.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a5a2a, #161f08)"
        label="The Nile forcing through the 7-metre gorge at the top of Murchison Falls"
      />

      <h2>The Falls Themselves</h2>

      <p>
        The falls are the reason the park has its name. Here the Nile squeezes
        through a narrow cleft in the rock &mdash; only about seven metres wide
        &mdash; and plunges roughly 43 metres into the churning gorge below. You
        can experience them two ways, and most visitors do both: from a boat at the
        base, looking up at the wall of white water, and from the{" "}
        <strong>Top of the Falls</strong>, a short hike to the very lip where the
        river makes its leap. Standing at the top, with the ground trembling
        underfoot, is unforgettable.
      </p>

      <h2>Wildlife &amp; Game Drives</h2>

      <p>
        The savanna north of the Nile &mdash; the <strong>Buligi</strong> area
        &mdash; is the park&rsquo;s prime game-viewing country. Morning game drives
        here bring good chances of:
      </p>

      <ul>
        <li>
          <strong>Lions</strong>, the park&rsquo;s top predator, along with the
          occasional leopard
        </li>
        <li>
          <strong>Elephants, buffalo, and giraffes</strong> &mdash; Murchison is
          one of the best places in Uganda to see the Rothschild&rsquo;s giraffe
        </li>
        <li>
          <strong>Uganda kob, hartebeest, and oribi</strong> across the plains
        </li>
        <li>
          The chance of a <strong>leopard</strong> in the woodland fringes
        </li>
      </ul>

      <p>
        Murchison is also excellent for birds, with the star being the rare,
        prehistoric-looking shoebill stork, often seen on the Nile delta where the
        river meets Lake Albert. We&rsquo;re slightly obsessed with that bird
        &mdash; more on it in{" "}
        <Link href="/blog/is-the-shoebill-stork-a-dinosaur">
          is the shoebill stork a dinosaur
        </Link>
        .
      </p>

      <h2>The Nile Boat Safari</h2>

      <p>
        No trip to Murchison is complete without the launch trip. A boat carries
        you upriver from the delta toward the base of the falls, cruising past pods
        of hippo, enormous crocodiles basking on the banks, elephants and buffalo
        coming down to drink, and a constant parade of water birds. The journey
        ends with the falls themselves rising ahead of you in a curtain of spray
        &mdash; one of the great river journeys in Africa.
      </p>

      <h2>Ziwa Rhino Sanctuary En Route</h2>

      <p>
        Many Murchison itineraries include a stop at{" "}
        <strong>Ziwa Rhino Sanctuary</strong> on the drive up from Kampala &mdash;
        the only place in Uganda where you can see wild rhinos, tracked on foot with
        a ranger. It&rsquo;s the missing piece that lets you tick off the last of
        the &ldquo;Big Five&rdquo; that the parks themselves no longer hold, and
        it&rsquo;s a superb, up-close experience.
      </p>

      <h2>Best Time to Visit Murchison Falls</h2>

      <p>
        The park is rewarding year-round, but the <strong>dry seasons</strong>{" "}
        &mdash; roughly December to February and June to September &mdash; are
        prime: wildlife concentrates around the river, tracks are easier, and game
        viewing is at its best. The wetter months bring lush scenery, superb
        birding, and fewer vehicles. Our guide to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>{" "}
        goes month by month.
      </p>

      <h2>How to Visit Murchison Falls</h2>

      <p>
        Murchison sits in the north-west, a scenic drive from Kampala (usually with
        that Ziwa rhino stop along the way), or a short domestic flight to an
        airstrip inside the park for those wanting to save time. You can focus on
        the park with a short{" "}
        <Link href="/safaris/uganda-murchison-falls-safari">
          Murchison Falls safari
        </Link>
        , or reach it the quick way as part of our{" "}
        <Link href="/safaris/uganda-gorilla-flyin-safari">
          Uganda gorilla fly-in safari
        </Link>
        , which links Murchison with Queen Elizabeth and Bwindi by light aircraft.
      </p>

      <h2>Murchison Falls FAQ</h2>

      <p>
        <strong>Why is Murchison Falls famous?</strong> For its extraordinary falls
        &mdash; the Nile forced through a seven-metre gap and dropping around 43
        metres &mdash; and for being Uganda&rsquo;s largest, wildlife-rich national
        park.
      </p>

      <p>
        <strong>Can you see the Big Five?</strong> Lions, elephants, buffalo, and
        leopards live in the park; rhinos are seen at nearby Ziwa Rhino Sanctuary,
        so a combined trip lets you see all five.
      </p>

      <p>
        <strong>Is the boat safari worth it?</strong> Absolutely &mdash; the launch
        trip to the base of the falls, past hippos and crocodiles, is a highlight
        of the whole park.
      </p>

      <p>
        <strong>How long should I spend there?</strong> Two to three nights lets
        you enjoy a game drive, the boat safari, and the Top of the Falls without
        rushing.
      </p>

      <h2>Plan Your Murchison Falls Safari</h2>

      <p>
        Thundering water, big game on the plains, and a boat ride to the foot of
        the falls &mdash; Murchison is one of Uganda&rsquo;s truly unmissable parks.
        Tell us your dates and we&rsquo;ll shape it into a{" "}
        <Link href="/safaris/uganda-murchison-falls-safari">
          Murchison Falls safari
        </Link>{" "}
        or a longer journey across the country.
      </p>
    </BlogPostLayout>
  );
}
