// ─────────────────────────────────────────────────────────────
//  POST: Do Lions Eat Leopards, Cheetahs, and Hyenas?
//  Flagship predator-rivalry post targeting the high-volume
//  "do lions eat cheetahs/leopards/hyenas" + "do cheetahs eat
//  lions/hyenas" cluster (competitor: wildtravelsafaris.com).
//  Bridges to Uganda/East Africa game-drive safaris.
//  Real photos live in public/blog/do-lions-eat-leopards-cheetahs-and-hyenas/
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

const meta = getPostMeta("do-lions-eat-leopards-cheetahs-and-hyenas")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        It&rsquo;s one of the most-asked questions on an African safari: if a lion
        runs into a leopard, a cheetah, or a hyena, does it eat them? The short,
        slightly surprising answer is that lions <strong>kill</strong> these
        animals fairly often &mdash; but they very rarely <strong>eat</strong>{" "}
        them. And that one distinction explains almost everything about how
        Africa&rsquo;s big predators live alongside each other.
      </p>

      <p>
        Here&rsquo;s the honest, myth-free version of the great predator
        rivalries: who kills whom, why they do it when there&rsquo;s no meal in
        it, and where on an East African game drive you&rsquo;re most likely to
        see this drama play out.
      </p>

      <h2>The Short Answer</h2>

      <ul>
        <li>
          <strong>Do lions eat leopards?</strong> Lions readily kill leopards
          when they can catch them, but they almost never eat them.
        </li>
        <li>
          <strong>Do lions eat cheetahs?</strong> Same story &mdash; lions kill
          cheetahs, especially cubs, but don&rsquo;t feed on them.
        </li>
        <li>
          <strong>Do lions eat hyenas?</strong> Lions kill hyenas in fights over
          food and territory; eating them is rare.
        </li>
        <li>
          <strong>Do cheetahs eat lions or hyenas?</strong> No &mdash; cheetahs
          are the ones on the back foot here, and they avoid both.
        </li>
      </ul>

      <p>
        So why kill an animal you have no intention of eating? Because for a lion,
        a rival predator isn&rsquo;t food &mdash; it&rsquo;s competition.
      </p>

      <PostImage
        src="/blog/do-lions-eat-leopards-cheetahs-and-hyenas/lion-pride.jpg"
        alt="A lion pride on the open savanna at golden hour"
        caption="A lion pride on the open savanna — Queen Elizabeth National Park"
      />

      <h2>Killing the Competition, Not the Meal</h2>

      <p>
        Biologists have a name for this behaviour:{" "}
        <strong>intraguild predation</strong>. When several meat-eaters share the
        same landscape and hunt the same prey &mdash; lions, leopards, cheetahs,
        hyenas and wild dogs all chasing the same antelope &mdash; the biggest and
        most dominant of them will kill the smaller ones to remove rivals from the
        board. It&rsquo;s not about hunger. It&rsquo;s about reducing the number of
        mouths competing for the same herds.
      </p>

      <p>
        Lions sit at the top of that hierarchy, so they win most of these
        encounters. A lion gains very little nutritionally from eating another
        predator &mdash; the flesh of a fellow carnivore is a poor, stringy meal
        compared with a fat antelope, and catching one is dangerous work. But by
        killing a leopard or a cheetah, a lion pride quietly protects the food
        supply for its own cubs. That&rsquo;s the whole logic in a sentence.
      </p>

      <h2>Lions vs Leopards</h2>

      <p>
        Lions and leopards are direct rivals, and lions dominate. When a lion
        finds a leopard, it will chase and, if it catches it, kill it &mdash;
        cubs most of all. The leopard&rsquo;s answer is avoidance and altitude:
        leopards are superb climbers, and hauling a kill high into a tree keeps
        both the meal and the leopard out of a lion&rsquo;s reach. Being solitary,
        secretive, and largely nocturnal is a leopard&rsquo;s way of sharing the
        same ground as a lion pride without meeting it.
      </p>

      <h2>Lions vs Cheetahs</h2>

      <p>
        The cheetah comes off worst of all. It&rsquo;s built for one thing &mdash;
        blistering speed &mdash; and everything it gives up to be that fast (a
        light frame, small head, non-retractable claws) leaves it poorly equipped
        to fight. Lions and hyenas kill a heartbreaking number of cheetah cubs,
        which is one of the main reasons cheetah numbers stay low even in
        well-protected parks. An adult cheetah&rsquo;s best defence is simply to
        see danger coming and run &mdash; it will abandon a fresh kill rather than
        risk a confrontation. (We dig into just how fast that getaway is in{" "}
        <Link href="/blog/how-fast-is-a-cheetah">how fast is a cheetah</Link>.)
      </p>

      <PostImage
        src="/blog/do-lions-eat-leopards-cheetahs-and-hyenas/cheetah-scanning.jpg"
        alt="A cheetah scanning the horizon, alert for lions and hyenas"
        caption="A cheetah stays alert — lions and hyenas are its biggest threats"
      />

      <h2>Lions vs Hyenas: The Oldest Feud</h2>

      <p>
        The lion&rsquo;s relationship with the spotted hyena is different &mdash;
        it&rsquo;s less predator-and-victim than an open, ongoing war between two
        heavyweights. Hyenas are powerful, clever, and hunt in numbers, and they
        will happily steal a lion&rsquo;s kill if they outnumber the pride;
        equally, lions will rob hyenas and kill them in the scuffles. Male lions
        in particular kill hyenas when they get the chance. The two species
        compete for exactly the same food, and much of the drama you&rsquo;ll
        witness around a carcass at dawn is this rivalry in action. Neither
        &ldquo;eats&rdquo; the other in any meaningful sense &mdash; they&rsquo;re
        fighting over the third animal.
      </p>

      <h2>Do Cheetahs Eat Hyenas or Lions? The Other Way Round</h2>

      <p>
        Not a chance. A cheetah is a specialist hunter of gazelles, impala, and
        other small-to-medium antelope &mdash; it neither hunts nor eats other
        predators. Against a lion or a clan of hyenas it is completely
        outmatched, so its entire strategy is to hunt at different times, in more
        open ground, and to give way the instant a bigger carnivore appears.
        Hyenas routinely bully cheetahs off their own kills. So while the search
        engines fill up with &ldquo;do cheetahs eat hyenas&rdquo; and &ldquo;do
        cheetahs eat lions,&rdquo; the reality runs firmly in the opposite
        direction &mdash; we unpack it in{" "}
        <Link href="/blog/do-cheetahs-eat-lions-and-hyenas">
          do cheetahs eat lions and hyenas
        </Link>
        .
      </p>

      <h2>Where to See Africa&rsquo;s Predator Drama</h2>

      <p>
        You don&rsquo;t need to witness a kill to feel these rivalries &mdash;
        they shape the behaviour of every animal on the plains. A few of the best
        places on our trips to see the cast in one landscape:
      </p>

      <ul>
        <li>
          <strong>Queen Elizabeth National Park, Uganda</strong> &mdash; lions
          (including the famous tree-climbers of Ishasha), leopards, and hyenas,
          plus a superb boat safari on the Kazinga Channel
        </li>
        <li>
          <strong>Kidepo Valley, Uganda</strong> &mdash; a remote northern
          wilderness that is one of the few places in the country to hold lions,
          leopards, cheetahs, <em>and</em> hyenas together
        </li>
        <li>
          <strong>The Masai Mara &amp; Serengeti</strong> &mdash; the classic
          big-cat stage, where the Great Migration concentrates predators like
          nowhere else on earth
        </li>
      </ul>

      <p>
        For the strangest lions of the lot, read about{" "}
        <Link href="/blog/tree-climbing-lions-ishasha">
          the tree-climbing lions of Ishasha
        </Link>
        , and if you&rsquo;re trying to tell the two spotted cats apart, see{" "}
        <Link href="/blog/leopard-vs-cheetah">leopard vs cheetah</Link>.
      </p>

      <h2>Predator Rivalry FAQ</h2>

      <p>
        <strong>Do lions eat leopards, cheetahs, and hyenas?</strong> They kill
        all three to remove competition, but they very rarely eat them &mdash;
        the flesh of another predator is a poor meal.
      </p>

      <p>
        <strong>Why do lions kill animals they don&rsquo;t eat?</strong> To
        protect their food supply. Killing a rival carnivore (and its cubs) means
        fewer hunters competing for the same antelope herds.
      </p>

      <p>
        <strong>Do cheetahs eat hyenas or lions?</strong> No. Cheetahs hunt
        antelope and avoid other predators entirely &mdash; hyenas and lions
        regularly steal cheetah kills and hunt cheetah cubs.
      </p>

      <p>
        <strong>Who wins, a lion or a hyena?</strong> One-on-one the lion, easily.
        But a large clan of hyenas can overwhelm a lone lion or drive a small
        pride off a kill.
      </p>

      <h2>See It for Yourself</h2>

      <p>
        The rivalries between Africa&rsquo;s predators are the hidden engine of
        every game drive &mdash; the reason a cheetah bolts, a leopard climbs, and
        a hyena laughs in the dark. If you&rsquo;d like to watch it unfold, tell
        us what you&rsquo;d most love to see and we&rsquo;ll build it into a{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley wilderness safari
        </Link>{" "}
        or an{" "}
        <Link href="/safaris/east-africa-mara-serengeti-migration">
          East Africa migration safari
        </Link>{" "}
        shaped around your dates.
      </p>
    </BlogPostLayout>
  );
}
