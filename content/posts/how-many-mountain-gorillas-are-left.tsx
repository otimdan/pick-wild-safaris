// ─────────────────────────────────────────────────────────────
//  POST: How Many Mountain Gorillas Are Left in the World?
//  Informational post targeting the "how many gorillas left /
//  mountain gorilla population" cluster, bridging to gorilla trips.
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

const meta = getPostMeta("how-many-mountain-gorillas-are-left")!;

// Drives both the rendered FAQ section below and the FAQPage JSON-LD
// emitted by app/blog/[slug]/page.tsx. Plain text only — an answer
// engine quotes this verbatim, so markup would leak into the citation.
export const faq: FaqItem[] = [
  {
    q: "How many mountain gorillas are left in the world?",
    a: "Just over 1,000 — the last full census counted 1,063, and the number has been rising.",
  },
  {
    q: "Are mountain gorillas still endangered?",
    a: "Yes. They were downlisted from Critically Endangered to Endangered in 2018, but Endangered still means they remain at real risk.",
  },
  {
    q: "Where do mountain gorillas live?",
    a: "Only in two forest ecosystems spanning Uganda, Rwanda, and the DRC — the Bwindi–Sarambwe area and the Virunga Massif. None survive in captivity.",
  },
  {
    q: "Can you still see them in the wild?",
    a: "Yes — through permitted, guided trekking in Uganda, Rwanda, or the DRC. It is strictly limited, which is exactly what keeps the gorillas safe.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        There are just over <strong>1,000 mountain gorillas</strong> left on
        earth. It sounds impossibly small &mdash; and it is &mdash; but it comes
        with a twist that almost no other endangered species can claim: the
        number is going <em>up</em>. Mountain gorillas are the only great ape on
        the planet whose population is known to be increasing, which makes
        counting them one of the most hopeful jobs in conservation.
      </p>

      <p>
        Here&rsquo;s the latest figure, where those gorillas actually live, how
        the count has changed, and why an hour spent trekking to see one does
        more good than almost any other thing a traveller can do in East Africa.
      </p>

      <h2>How Many Mountain Gorillas Are Left? The Latest Count</h2>

      <p>
        The most recent comprehensive census put the world&rsquo;s mountain
        gorilla population at <strong>1,063 individuals</strong>. They exist in
        just two places on earth &mdash; two isolated forest populations, with no
        mountain gorillas surviving anywhere in captivity:
      </p>

      <ul>
        <li>
          <strong>The Bwindi&ndash;Sarambwe ecosystem</strong> &mdash; Bwindi
          Impenetrable Forest in Uganda and the adjoining Sarambwe reserve in the
          DRC
        </li>
        <li>
          <strong>The Virunga Massif</strong> &mdash; a chain of volcanoes
          straddling Uganda (Mgahinga), Rwanda (Volcanoes National Park), and the
          DRC (Virunga National Park)
        </li>
      </ul>

      <p>
        A fresh count of the Bwindi&ndash;Sarambwe population is underway as we
        write, conducted in careful sweeps to avoid missing or double-counting
        any animals.{" "}
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT / UPDATE LATER: the 2025 Bwindi&ndash;Sarambwe census
          results weren&rsquo;t published at time of writing &mdash; worth
          updating this figure once the new total is released.]
        </span>
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2f4a2a, #0e1f0c)"
        label="Mountain gorilla family resting in Bwindi Impenetrable Forest"
      />

      <h2>Mountain Gorillas by Country</h2>

      <p>
        Because the two populations span four national parks in three countries,
        the gorillas don&rsquo;t belong to any one nation &mdash; they roam
        forests that cross international borders. From the last full census:
      </p>

      <ul>
        <li>
          <strong>Bwindi&ndash;Sarambwe:</strong> around 459 gorillas, in roughly
          36 social groups plus a number of solitary males
        </li>
        <li>
          <strong>Virunga Massif:</strong> a minimum of around 604 gorillas
        </li>
      </ul>

      <p>
        Uganda is the single best country for seeing them, holding roughly half
        the world&rsquo;s population in Bwindi alone, plus a habituated family in
        Mgahinga. Rwanda&rsquo;s Volcanoes National Park and the DRC&rsquo;s
        Virunga share the rest.
      </p>

      <h2>A Rare Conservation Success Story</h2>

      <p>
        To appreciate why 1,000 is a number worth celebrating, you have to know
        where the species came from. In the 1980s, mountain gorillas were down to
        an estimated <strong>250&ndash;300 animals</strong>, and many
        conservationists genuinely expected them to be extinct by the turn of the
        century.
      </p>

      <p>
        Instead, decades of daily protection &mdash; ranger patrols, snare
        removal, veterinary intervention, and tightly controlled tourism &mdash;
        turned the tide. The population has more than tripled. In 2018 the
        species was <strong>downlisted by the IUCN from &ldquo;Critically
        Endangered&rdquo; to &ldquo;Endangered,&rdquo;</strong> a rare piece of
        genuinely good news in African wildlife, reflecting that steady climb.
      </p>

      <blockquote>
        Mountain gorillas are the only great ape whose numbers are confirmed to
        be rising. Every other &mdash; chimpanzees, bonobos, orangutans, and the
        other gorilla subspecies &mdash; is in decline.
      </blockquote>

      <h2>Wait &mdash; Aren&rsquo;t There Other Gorillas?</h2>

      <p>
        Yes, and this is where a lot of confusion creeps into the &ldquo;how many
        gorillas are left&rdquo; question. &ldquo;Mountain gorilla&rdquo; refers
        to one specific subspecies. Gorillas as a whole are split into two
        species and four subspecies:
      </p>

      <ul>
        <li>
          <strong>Mountain gorilla</strong> (a subspecies of the eastern gorilla)
          &mdash; the ~1,063 we&rsquo;ve been discussing; Endangered
        </li>
        <li>
          <strong>Grauer&rsquo;s / eastern lowland gorilla</strong> &mdash;
          confined to the eastern DRC, numbering a few thousand and Critically
          Endangered
        </li>
        <li>
          <strong>Western lowland gorilla</strong> &mdash; by far the most
          numerous, in the tens of thousands across Central Africa, but still
          Critically Endangered and declining
        </li>
        <li>
          <strong>Cross River gorilla</strong> &mdash; the rarest of all, with
          only a couple of hundred left on the Nigeria&ndash;Cameroon border
        </li>
      </ul>

      <p>
        So when someone asks how many gorillas are left &ldquo;in the world,&rdquo;
        the honest answer depends on which gorilla they mean. The mountain gorilla
        &mdash; the one you trek to see in Uganda and Rwanda &mdash; is the rarest
        of the well-known kinds, but also the only one that&rsquo;s recovering.
      </p>

      <h2>Why Are There So Few?</h2>

      <p>
        Mountain gorillas have never been numerous, but the pressures that pushed
        them to the brink are all human in origin:
      </p>

      <ul>
        <li>
          <strong>Habitat loss</strong> &mdash; their forests are islands of
          green surrounded by some of the most densely farmed land in Africa
        </li>
        <li>
          <strong>Snares</strong> &mdash; gorillas are rarely targeted directly,
          but they&rsquo;re maimed or killed by traps set for other animals
        </li>
        <li>
          <strong>Disease</strong> &mdash; sharing ~98% of our DNA, gorillas are
          vulnerable to human respiratory illnesses, which is why trekking rules
          are so strict
        </li>
        <li>
          <strong>Regional instability</strong> &mdash; parts of their range have
          been affected by conflict, making protection harder
        </li>
      </ul>

      <h2>How Tourism Actually Helps</h2>

      <p>
        Here&rsquo;s the part that surprises people: responsible gorilla tourism
        is one of the main reasons the population is growing. The permit fee that
        each trekker pays flows into park protection, ranger salaries, veterinary
        care, and community projects around the forests &mdash; giving local
        people a direct, tangible reason to value living gorillas over cleared
        farmland.
      </p>

      <p>
        Numbers are kept deliberately low: only habituated families are visited,
        a maximum of eight people spend just one hour with a group per day, and
        health precautions are strict. It&rsquo;s conservation funded by wonder.
        We break down exactly how a trek works, what to pack, and how to prepare
        in our guide to{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>.
      </p>

      <h2>Where to See Mountain Gorillas</h2>

      <p>
        There are only three countries on earth where you can trek to see a
        mountain gorilla: <strong>Uganda</strong> (Bwindi Impenetrable Forest and
        Mgahinga), <strong>Rwanda</strong> (Volcanoes National Park), and the{" "}
        <strong>DRC</strong> (Virunga National Park). Uganda offers the most
        gorilla families, the most permit availability, and the widest range of
        lodges at every budget, which makes it the natural choice for most first
        visits.
      </p>

      <p>
        A morning with a habituated family is the centrepiece of{" "}
        <Link href="/safaris/uganda-gorilla-wildlife-safari">
          our Uganda gorilla &amp; wildlife safari
        </Link>
        , and if your time is tight, a focused{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          short gorilla-tracking trip
        </Link>{" "}
        can put you in the forest in as little as three days.
      </p>

      <PostFaq title="Mountain Gorilla FAQ" items={faq} />

      <h2>Be Part of the Good News</h2>

      <p>
        Every mountain gorilla alive today exists because enough people decided
        they were worth protecting &mdash; and trekkers are part of that equation.
        If you&rsquo;d like to stand a few metres from a silverback and help fund
        the patrols that keep his family safe, tell us your dates and our planners
        will build the trip around{" "}
        <Link href="/safaris/uganda-gorilla-wildlife-safari">
          a Bwindi gorilla trek
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
