// ─────────────────────────────────────────────────────────────
//  POST: How Fast Is a Cheetah?
//  Targets the "world's fastest animal / cheetah speed / fastest
//  sprinter animal" cluster (competitor:
//  wildtravelsafaris.com/the-worlds-fastest-sprinter-animal...).
//  Bridges to Kidepo (Uganda cheetah country) + migration safaris.
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

const meta = getPostMeta("how-fast-is-a-cheetah")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        The cheetah is the fastest land animal on earth &mdash; and it isn&rsquo;t
        close. In full flight it reaches around <strong>70 miles per hour
        (about 110&ndash;120 km/h)</strong>, faster than any other creature that
        runs. But the headline speed is only half the story. What makes the
        cheetah extraordinary is how quickly it gets there, and the remarkable
        set of adaptations that let it move like nothing else alive.
      </p>

      <p>
        Here&rsquo;s exactly how fast a cheetah is, how it compares to other
        speedsters, why it can only keep it up for seconds, and where you can
        watch one run.
      </p>

      <h2>How Fast Can a Cheetah Run?</h2>

      <p>
        A cheetah&rsquo;s top speed is roughly <strong>70 mph (112 km/h)</strong>,
        with reliably measured sprints in the high 60s and occasional bursts
        cited a little higher. More astonishing than the top figure is the
        acceleration: a cheetah can go from a standstill to 60 mph in around{" "}
        <strong>three seconds</strong> &mdash; quicker off the line than most
        supercars. In just a few bounds it&rsquo;s already at highway speed.
      </p>

      <p>
        The catch is stamina. All that power generates enormous heat, and a
        cheetah can only sustain a full sprint for around <strong>20 to 30
        seconds</strong>, covering a few hundred metres at most, before it has to
        stop and cool down. A hunt is won or lost in that brief, explosive window
        &mdash; and if the chase runs long, the antelope usually wins.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #8a6a2a, #322208)"
        label="A cheetah at full sprint, all four feet off the ground, dust flying"
      />

      <h2>What Makes a Cheetah So Fast?</h2>

      <p>
        Every part of the cheetah is engineered for speed:
      </p>

      <ul>
        <li>
          <strong>A flexible spine</strong> that coils and springs like a bow,
          hugely extending each stride &mdash; a cheetah can cover seven metres or
          more in a single bound
        </li>
        <li>
          <strong>A long, muscular tail</strong> used as a rudder to balance and
          steer through tight, high-speed turns after jinking prey
        </li>
        <li>
          <strong>Semi-retractable claws</strong> that grip the ground like the
          spikes on a sprinter&rsquo;s shoes &mdash; unusual among cats
        </li>
        <li>
          <strong>An oversized heart, lungs, and nostrils</strong> to pump oxygen
          fast enough to feed the effort
        </li>
        <li>
          <strong>A light, slender frame and small head</strong> &mdash; low
          weight to accelerate, at the cost of any real fighting strength
        </li>
      </ul>

      <p>
        Those last two points are the cheetah&rsquo;s bargain: it traded muscle
        and toughness for speed, which is why it loses almost every encounter with
        lions and hyenas &mdash; the rivalry we cover in{" "}
        <Link href="/blog/do-lions-eat-leopards-cheetahs-and-hyenas">
          do lions eat leopards, cheetahs, and hyenas
        </Link>
        .
      </p>

      <h2>Cheetah vs Other Fast Animals</h2>

      <p>
        On land, nothing outruns a cheetah. A pronghorn antelope can sustain high
        speed over far longer distances, and a greyhound is quick, but neither
        matches the cheetah&rsquo;s outright top speed. (In the air it&rsquo;s a
        different contest &mdash; a diving peregrine falcon is far faster still,
        but that&rsquo;s a stoop, not a run.) Among animals that run on the
        ground, the cheetah is the undisputed champion.
      </p>

      <h2>Why Speed Isn&rsquo;t Everything</h2>

      <p>
        Being the fastest comes at a price. A cheetah that makes a kill often has
        to eat fast and nervously, because a lion or a clan of hyenas can arrive
        and simply take it &mdash; and a cheetah won&rsquo;t risk injury fighting
        back. Cubs are terribly vulnerable to larger predators, which keeps
        cheetah numbers low even where prey is plentiful. The fastest animal on
        earth is also one of its most fragile, and that tension is a big part of
        what makes seeing one so special.
      </p>

      <h2>Where to See Cheetahs in East Africa</h2>

      <p>
        Cheetahs need wide, open country to do what they do, so the best sightings
        come on the plains:
      </p>

      <ul>
        <li>
          <strong>Kidepo Valley, Uganda</strong> &mdash; the remote north-eastern
          wilderness that is Uganda&rsquo;s cheetah stronghold, and one of the few
          places in the country you have a realistic chance
        </li>
        <li>
          <strong>The Masai Mara &amp; Serengeti</strong> &mdash; the classic
          cheetah plains, where open grassland and abundant gazelle make for the
          most reliable sightings in the region
        </li>
      </ul>

      <p>
        Not sure how a cheetah differs from the other spotted cat you&rsquo;ll
        see out there? Our guide to{" "}
        <Link href="/blog/leopard-vs-cheetah">leopard vs cheetah</Link> makes it
        easy to tell them apart.
      </p>

      <h2>Cheetah Speed FAQ</h2>

      <p>
        <strong>How fast is a cheetah in mph?</strong> About 70 mph (roughly
        112&ndash;120 km/h) at full sprint &mdash; the fastest of any land
        animal.
      </p>

      <p>
        <strong>How long can a cheetah run at top speed?</strong> Only around
        20&ndash;30 seconds, over a few hundred metres, before it overheats and
        must stop.
      </p>

      <p>
        <strong>How fast does a cheetah accelerate?</strong> From 0 to 60 mph in
        roughly three seconds &mdash; faster than most sports cars off the line.
      </p>

      <p>
        <strong>Is the cheetah the fastest animal in the world?</strong> The
        fastest on land, yes. In the air, a diving peregrine falcon is faster,
        but that&rsquo;s a dive rather than a run.
      </p>

      <h2>Watch One Run</h2>

      <p>
        There are few sights in nature to match a cheetah unfolding into a full
        sprint. If you&rsquo;d like the chance to see it, tell us your dates and
        we&rsquo;ll build it into a{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley wilderness safari
        </Link>{" "}
        or an{" "}
        <Link href="/safaris/east-africa-mara-serengeti-migration">
          East Africa migration safari
        </Link>{" "}
        across the great cheetah plains.
      </p>
    </BlogPostLayout>
  );
}
