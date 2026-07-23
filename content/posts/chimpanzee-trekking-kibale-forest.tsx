// ─────────────────────────────────────────────────────────────
//  POST: Chimpanzee Trekking in Kibale Forest — Complete Guide
//  Informational/commercial guide targeting the "chimpanzee
//  trekking Kibale / cost" cluster, bridging to Kibale trips.
//  Images added later — <ImagePlaceholder> marks each photo slot.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import PostFaq from "@/app/components/PostFaq";
import { getPostMeta } from "@/content/posts/index";
import type { FaqItem } from "@/content/types";

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

const meta = getPostMeta("chimpanzee-trekking-kibale-forest")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "How much does chimpanzee trekking cost in Uganda?",
    a: "A Kibale permit is around $250 per person for foreign non-residents — far less than a gorilla permit. The full-day habituation experience costs more.",
  },
  {
    q: "How likely am I to see chimps?",
    a: "Very likely in Kibale, where communities are well habituated — though, as with all wild animals, sightings are never guaranteed.",
  },
  {
    q: "Is chimp trekking hard?",
    a: "Generally easier than gorilla trekking — flatter terrain and better trails — but still a forest walk of one to four hours.",
  },
  {
    q: "What’s the minimum age?",
    a: "Chimpanzee tracking typically has a minimum age (often 12), the same as gorilla trekking. <span style={{ opacity: 0.75 }}> [VERIFY: confirm the current UWA minimum age you want stated.] </span>",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        If gorilla trekking is Uganda&rsquo;s headline act, chimpanzee tracking is
        its brilliant, underrated support &mdash; and nowhere does it better than
        Kibale Forest. Home to the highest density of primates in Africa, Kibale
        offers the continent&rsquo;s finest chances of spending an hour with a
        wild chimpanzee community, our closest living relatives, as they hoot,
        feed, groom, and swing through the canopy overhead.
      </p>

      <p>
        Here&rsquo;s everything you need to know before you go: what the trek is
        actually like, what it costs, when to visit, how hard it is, and how it
        fits into a wider Uganda safari.
      </p>

      <h2>Why Kibale Forest?</h2>

      <p>
        Kibale Forest National Park sits in western Uganda, just east of the
        Rwenzori Mountains near the town of Fort Portal. It protects one of the
        loveliest tracts of tropical rainforest in the country and shelters an
        extraordinary <strong>13 primate species</strong> &mdash; the richest
        concentration anywhere in East Africa.
      </p>

      <p>
        Its star residents are around 1,500 chimpanzees, several communities of
        which are habituated to human presence, which is what makes reliable,
        close-up tracking possible. But you&rsquo;ll share the forest with red
        colobus, black-and-white colobus, red-tailed and L&rsquo;Hoest&rsquo;s
        monkeys, grey-cheeked mangabeys, olive baboons, and, after dark, bushbabies
        and pottos.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #24471f, #08160a)"
        label="Wild chimpanzee in the Kibale Forest canopy"
      />

      <h2>What Chimpanzee Trekking Is Actually Like</h2>

      <p>
        The day starts with an early briefing at Kanyanchu, the park&rsquo;s main
        tracking centre. From there, rangers lead small groups into the forest on
        foot, following the previous night&rsquo;s nests and, before long, the
        sound of the chimps themselves &mdash; a rising chorus of pant-hoots and
        screams that carries a long way through the trees.
      </p>

      <p>
        Chimp tracking feels faster and more energetic than a gorilla trek. Chimps
        move fast and spend much of their time high in the canopy, so you&rsquo;ll
        often be looking up, following a party as it feeds and travels. When they
        drop to the forest floor to move between fruiting trees, you can find
        yourself remarkably close. As with gorillas, once your group finds the
        chimps you have <strong>one hour</strong> in their company.
      </p>

      <h2>Chimpanzee Trekking Cost &amp; Permits</h2>

      <p>
        You need a permit, and numbers are capped to protect the chimps and keep
        the experience calm. A standard Kibale chimpanzee permit costs{" "}
        <strong>around USD $250</strong>{" "}per person for foreign non-residents
        &mdash; a fraction of a gorilla permit.
      </p>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: 2026 UWA sources quote the Kibale chimp permit
          at roughly $250&ndash;$300 for foreign non-residents; the chimpanzee
          habituation experience is higher (~$400). Permit rules also changed in
          2026 &mdash; full payment is now required at booking. Confirm the exact
          figures you want printed, and whether to show prices at all per your
          policy.]
        </span>
      </p>

      <p>
        For something deeper, Kibale also offers a{" "}
        <strong>Chimpanzee Habituation Experience (CHEX)</strong>: instead of one
        hour, you spend a full day with researchers and a semi-habituated
        community, following them from their morning nests. It costs more and suits
        serious primate enthusiasts and photographers.
      </p>

      <h2>How Hard Is It? Difficulty &amp; What to Bring</h2>

      <p>
        Chimp tracking is generally less strenuous than gorilla trekking &mdash;
        Kibale&rsquo;s terrain is flatter and the trails are better established
        &mdash; but it&rsquo;s still a forest walk that can last anywhere from one
        to four hours or more, often over damp, uneven ground. Reasonable fitness
        makes it more enjoyable. Bring:
      </p>

      <ul>
        <li>Sturdy, waterproof walking shoes or light boots</li>
        <li>Long trousers and a long-sleeved shirt (insects, undergrowth)</li>
        <li>A light rain jacket &mdash; it&rsquo;s rainforest</li>
        <li>Drinking water and insect repellent</li>
        <li>A camera without flash &mdash; flash is not allowed</li>
        <li>Binoculars, since chimps are often high in the canopy</li>
      </ul>

      <p>
        The same health rules that protect gorillas apply here: if you&rsquo;re
        unwell you may be asked not to trek, and you keep a respectful distance.
        Much of this overlaps with our{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>,
        which are worth a read even for a chimp-only trip.
      </p>

      <h2>Best Time for Chimpanzee Trekking</h2>

      <p>
        Chimps can be tracked year-round, but the drier months &mdash; roughly
        June to September and December to February &mdash; make for easier trails
        and more comfortable walking. In the wetter months the forest is lush and
        quieter with visitors, and fruiting patterns can actually make chimps
        easier to locate. Timing largely comes down to your wider itinerary; our
        guide to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>{" "}
        breaks it down month by month.
      </p>

      <h2>Chimps vs Gorillas: Which Trek?</h2>

      <p>
        They&rsquo;re different experiences, not competing ones. A gorilla trek is
        slower, steeper, and hushed; chimp tracking is quicker, noisier, and spent
        largely looking upward. The best news is that in Uganda you don&rsquo;t
        have to choose &mdash; many trips do both. We compare the two apes in
        detail in{" "}
        <Link href="/blog/gorilla-vs-chimpanzee">gorilla vs chimpanzee</Link>.
      </p>

      <h2>Where Kibale Fits in Your Trip</h2>

      <p>
        Kibale pairs naturally with Queen Elizabeth National Park next door, and
        with a gorilla trek further south. You can visit it as a focused short
        break on{" "}
        <Link href="/safaris/uganda-kibale-chimpanzee-safari">
          our Kibale chimpanzee safari
        </Link>
        , or fold it into a bigger loop such as the{" "}
        <Link href="/safaris/uganda-gorilla-primates-safari">
          gorilla &amp; primates safari
        </Link>
        , which combines Kibale&rsquo;s chimps with Bwindi&rsquo;s gorillas.
      </p>

      <PostFaq title="Chimpanzee Trekking FAQ" items={faq} />

      <h2>Track Chimps in Kibale</h2>

      <p>
        An hour beneath a feeding chimpanzee community &mdash; all pant-hoots,
        drumming, and uncannily human expressions &mdash; is one of Uganda&rsquo;s
        great wildlife moments. Tell us your dates and we&rsquo;ll build it into{" "}
        <Link href="/safaris/uganda-kibale-chimpanzee-safari">
          a Kibale chimpanzee trip
        </Link>{" "}
        or a longer primate safari.
      </p>
    </BlogPostLayout>
  );
}
