// ─────────────────────────────────────────────────────────────
//  POST: Gorilla vs Chimpanzee — What's the Difference?
//  Informational comparison targeting the "gorilla vs chimpanzee /
//  ape vs gorilla" cluster, bridging to Uganda primate trips.
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

const meta = getPostMeta("gorilla-vs-chimpanzee")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Gorillas and chimpanzees are both African great apes, both share the vast
        majority of their DNA with us, and both can be trekked in Uganda &mdash;
        sometimes on the same trip. But side by side they&rsquo;re strikingly
        different animals: different in size, diet, temperament, social life, and
        even in how closely they&rsquo;re related to humans.
      </p>

      <p>
        Here&rsquo;s a clear, myth-free rundown of how a gorilla and a chimpanzee
        actually differ &mdash; and, because Uganda is one of the only places on
        earth you can see both, where to find each in the wild.
      </p>

      <h2>Gorilla vs Chimpanzee at a Glance</h2>

      <ul>
        <li>
          <strong>Size:</strong> gorillas are far bigger &mdash; a silverback can
          exceed 200 kg; a chimp weighs around 40&ndash;60 kg
        </li>
        <li>
          <strong>Diet:</strong> gorillas are mostly herbivorous; chimps are
          omnivores that also hunt
        </li>
        <li>
          <strong>Temperament:</strong> gorillas are generally calm and
          gentle; chimps are excitable, noisy, and can be aggressive
        </li>
        <li>
          <strong>Social groups:</strong> gorillas live in stable family units led
          by one silverback; chimps live in large, shifting communities
        </li>
        <li>
          <strong>Closest to humans:</strong> chimpanzees &mdash; our single
          closest living relative
        </li>
        <li>
          <strong>Where in Uganda:</strong> gorillas in Bwindi &amp; Mgahinga;
          chimps in Kibale, Kyambura, Budongo and Kalinzu
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a4030, #1a1608)"
        label="Split composition — a silverback gorilla beside a chimpanzee for size/appearance contrast"
      />

      <h2>Size &amp; Strength</h2>

      <p>
        The most obvious difference is scale. Gorillas are the largest primates on
        earth; a mature male silverback stands up to six feet and can weigh three
        times what a chimpanzee does. Chimps are much smaller and leaner &mdash;
        roughly the size of a large dog when on all fours &mdash; but pound for
        pound they&rsquo;re astonishingly strong and far more agile, spending a
        great deal of time climbing and swinging through trees, where an adult
        gorilla is mostly too heavy to go. If you want the full numbers on gorilla
        size, we cover them in{" "}
        <Link href="/blog/how-big-is-a-silverback-gorilla">
          how big is a silverback gorilla
        </Link>
        .
      </p>

      <h2>Diet: Leaf-Eater vs Opportunist</h2>

      <p>
        Gorillas are overwhelmingly herbivorous, eating huge quantities of leaves,
        stems, shoots, and pith, with some fruit. Chimpanzees are true omnivores:
        fruit forms the core of their diet, but they also eat insects, eggs, and
        &mdash; famously &mdash; hunt. Chimp communities cooperatively hunt smaller
        monkeys such as red colobus, sharing the kill afterward. It&rsquo;s one of
        the starkest behavioural differences between the two: one grazes, the
        other forages and, on occasion, hunts.
      </p>

      <h2>Social Life &amp; Temperament</h2>

      <p>
        Gorillas live in tight, stable family groups &mdash; typically one
        dominant silverback with several females and their offspring &mdash; and
        the mood of a gorilla group is usually calm and unhurried. Chimpanzees
        live in much larger communities of dozens of individuals that split into
        smaller parties and rejoin (a pattern scientists call
        &ldquo;fission&ndash;fusion&rdquo;). Chimp society is louder, faster, more
        political, and more overtly aggressive: territorial disputes between
        neighbouring communities can turn violent in a way gorilla life rarely
        does.
      </p>

      <h2>Intelligence &amp; Tool Use</h2>

      <p>
        Both apes are highly intelligent, but chimpanzees are the celebrated
        tool-users of the animal kingdom &mdash; stripping twigs to &ldquo;fish&rdquo;
        for termites, using stones to crack nuts, and chewing leaves into sponges
        to soak up water. Gorillas use tools far less often in the wild. Watching a
        chimp problem-solve in real time is one of the quiet thrills of a Kibale
        trek.
      </p>

      <h2>Which Is More Closely Related to Humans?</h2>

      <p>
        Chimpanzees &mdash; and it&rsquo;s not especially close between the two.
        Chimpanzees (along with bonobos) are humanity&rsquo;s nearest living
        relatives, sharing very roughly 98.8% of our DNA, while gorillas sit a
        little further out on the family tree. In other words, a chimpanzee is
        more closely related to <em>you</em> than it is to a gorilla. It&rsquo;s a
        big part of why time spent watching chimps can feel so uncannily familiar.
      </p>

      <h2>Where to See Each in Uganda</h2>

      <p>
        This is Uganda&rsquo;s great advantage: it&rsquo;s one of the very few
        countries where you can trek both apes on a single trip.
      </p>

      <ul>
        <li>
          <strong>Gorillas:</strong> Bwindi Impenetrable Forest and Mgahinga
          Gorilla National Park, in the misty south-west
        </li>
        <li>
          <strong>Chimpanzees:</strong> Kibale Forest (the primate capital of East
          Africa), plus Kyambura Gorge in Queen Elizabeth, and the Budongo and
          Kalinzu forests
        </li>
      </ul>

      <p>
        Our{" "}
        <Link href="/safaris/uganda-gorilla-primates-safari">
          Uganda gorilla &amp; primates safari
        </Link>{" "}
        is built precisely to pair the two &mdash; chimpanzee tracking in Kibale
        and a gorilla trek in Bwindi within one itinerary.
      </p>

      <h2>Gorilla Trek vs Chimp Trek: What to Expect</h2>

      <p>
        The two experiences feel quite different on the ground. Gorilla trekking
        is slower and more physical &mdash; often hours of steep, muddy hiking to
        reach a family, rewarded with one intense, quiet hour at close range. Chimp
        tracking is faster-paced and noisier: you follow the hoots and screams of a
        community moving and feeding through the canopy, necks craned upward.
      </p>

      <p>
        Permit costs differ too. A Uganda gorilla permit is{" "}
        <strong>USD $800</strong> per person in peak season, while a chimpanzee
        permit in Kibale is considerably less.{" "}
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT / VERIFY: current Kibale chimp permit price &mdash; recent
          UWA sources quote roughly USD $250&ndash;$300 for foreign non-residents,
          and permit rules changed in 2026 (full payment now required at booking).
          Confirm the exact figure you want printed, and whether to show prices at
          all here per your policy.]
        </span>{" "}
        We walk through gorilla-trek preparation in detail in our{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>.
      </p>

      <h2>Gorilla vs Chimpanzee FAQ</h2>

      <p>
        <strong>Which is stronger, a gorilla or a chimpanzee?</strong> A gorilla,
        by a wide margin on raw size and power. But chimps are far more agile and,
        for their size, remarkably strong.
      </p>

      <p>
        <strong>Which is more closely related to humans?</strong> The chimpanzee
        &mdash; it&rsquo;s our closest living relative, closer to us than it is to
        a gorilla.
      </p>

      <p>
        <strong>Are gorillas more dangerous than chimps?</strong> Counter-intuitively,
        no. Gorillas are generally gentle; chimpanzees are more excitable and
        account for more aggressive incidents despite their smaller size.
      </p>

      <p>
        <strong>Can you see both on one trip?</strong> Yes &mdash; Uganda is one of
        the best places in the world to trek gorillas and chimpanzees on a single
        itinerary.
      </p>

      <h2>See Both in One Trip</h2>

      <p>
        If choosing between them feels impossible, the good news is you
        don&rsquo;t have to. Uganda lets you stand with a silverback in Bwindi and
        watch a chimpanzee community swing through Kibale on the same journey. Tell
        us what you&rsquo;d love to see and we&rsquo;ll shape it into{" "}
        <Link href="/safaris/uganda-gorilla-primates-safari">
          a gorilla &amp; primates safari
        </Link>{" "}
        built around you.
      </p>
    </BlogPostLayout>
  );
}
