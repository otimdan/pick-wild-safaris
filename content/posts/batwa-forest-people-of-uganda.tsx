// ─────────────────────────────────────────────────────────────
//  POST: The Batwa — Uganda's Forest People
//  Standalone deep-dive (tribes-and-cultures-of-uganda mentions them
//  briefly; this covers their full story). Facts web-verified: 2024
//  census population (3,857, down from 6,198 in 2014), 1991 eviction
//  (~4,000 people, no compensation), Batwa Trail community tourism.
//  Told plainly and respectfully per established series tone — see
//  NEEDS-INPUT.md facts-sourcing note on this topic.
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

const meta = getPostMeta("batwa-forest-people-of-uganda")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Who are the Batwa?",
    a: "An indigenous forest people of south-western Uganda, historically hunter-gatherers in what are now Bwindi and Mgahinga National Parks.",
  },
  {
    q: "Why were they evicted from the forest?",
    a: "In 1991, the Ugandan government gazetted their ancestral forest as protected national parks to conserve the mountain gorilla, displacing roughly 4,000 Batwa without compensation.",
  },
  {
    q: "How many Batwa remain today?",
    a: "Uganda’s 2024 census recorded 3,857 — a significant decline from 6,198 in 2014.",
  },
  {
    q: "How can I visit respectfully?",
    a: "The community-led Batwa Trail near Bwindi offers a structured, income-generating cultural experience led by Batwa guides themselves.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Before Bwindi and Mgahinga were national parks, they were home. The
        Batwa lived in these forests for generations as skilled hunter-gatherers,
        intimately connected to the same trees that now shelter the mountain
        gorillas travellers come from around the world to see. Their story is
        one of the most important &mdash; and most difficult &mdash; to
        understand about this corner of Uganda.
      </p>

      <p>
        Here&rsquo;s an honest introduction to the Batwa: their history, their
        displacement, and how travellers can visit their communities
        respectfully today.
      </p>

      <h2>Forest People</h2>

      <p>
        The Batwa are believed to have migrated into the forests of
        south-western Uganda from the Ituri Forest region of what is now DR
        Congo, living as hunter-gatherers for countless generations in what
        became Bwindi Impenetrable Forest, Mgahinga, and the Echuya Forest
        Reserve. They developed deep, specialised knowledge of the forest
        &mdash; its plants, its animals, and how to live within it sustainably
        &mdash; that few other communities on earth possess.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a4a2a, #101808)"
        label="A Batwa community elder in traditional dress at the edge of Bwindi Forest"
      />

      <h2>The 1991 Eviction</h2>

      <p>
        In 1991, the Ugandan government gazetted Bwindi and Mgahinga as
        national parks to protect the critically endangered mountain gorilla
        &mdash; a conservation decision that undeniably helped save the
        species. But it came at a severe human cost: <strong>over 800 Batwa
        families, roughly 4,000 people, were evicted from their ancestral
        forest home, without compensation or alternative land</strong>. Almost
        overnight, a self-sufficient forest people became landless, forced to
        adapt to an agricultural life on the forest&rsquo;s edge that their
        culture had never required.
      </p>

      <p>
        We think this history deserves to be told plainly rather than glossed
        over, even within a blog built around the very tourism that grew from
        this conservation decision.
      </p>

      <h2>A Community Under Pressure</h2>

      <p>
        The consequences have been severe and lasting. Uganda&rsquo;s 2024
        census recorded just <strong>3,857 Batwa</strong> &mdash; down sharply
        from 6,198 a decade earlier in 2014 &mdash; making them one of the
        smallest and most vulnerable communities in the country. Reporting has
        highlighted a life expectancy and child survival rate far below the
        national average, the result of decades without secure land, reliable
        income, or full integration into surrounding systems of healthcare and
        education.
      </p>

      <h2>The Batwa Trail: Tourism as a Path Forward</h2>

      <p>
        Since 2011, the <strong>Batwa Trail</strong>{" "}has offered a structured,
        community-led way for visitors to meet Batwa communities near Bwindi
        &mdash; walking into the forest with Batwa guides who demonstrate
        traditional hunting and gathering skills, fire-making, medicinal plant
        knowledge, and forest songs and dances, with proceeds going directly to
        the community. It&rsquo;s become one of the most meaningful sources of
        income available to Batwa families today, and a genuine opportunity
        for cultural exchange rather than a passive display.
      </p>

      <h2>Visiting Respectfully</h2>

      <p>
        A Batwa cultural visit works best approached with the same respect
        you&rsquo;d bring to any encounter with people, not simply a
        &ldquo;sight&rdquo; to check off &mdash; ask questions, listen to the
        history in the Batwa&rsquo;s own words where possible, and understand
        that your visit directly supports a community still recovering from
        profound loss. We touch on this within the wider context of{" "}
        <Link href="/blog/tribes-and-cultures-of-uganda">
          the tribes and cultures of Uganda
        </Link>
        , and it pairs naturally with gorilla trekking in{" "}
        <Link href="/blog/bwindi-impenetrable-forest-guide">Bwindi</Link>.
      </p>

      <PostFaq title="The Batwa FAQ" items={faq} />

      <h2>Meet the Batwa on Your Trip</h2>

      <p>
        A Batwa Trail visit is one of the most meaningful cultural experiences
        available on a Uganda safari, both for what it teaches and for the
        community it directly supports. Tell us if you&rsquo;d like it built
        into your{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          Bwindi gorilla trekking safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
