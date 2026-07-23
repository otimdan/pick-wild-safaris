// ─────────────────────────────────────────────────────────────
//  POST: The Kingdoms of Uganda — Buganda, Bunyoro, Toro & Busoga
//  Culture cluster post, distinct angle from tribes-and-cultures-of-
//  uganda (this is the political-institution/monarchy story, not
//  ethnic-group survey). Facts web-verified (1967 abolition, 1993/95
//  restoration, current monarchs).
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

const meta = getPostMeta("kingdoms-of-uganda")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Does Uganda still have kings?",
    a: "Yes — several traditional kingdoms were restored in 1993 as cultural institutions, with reigning monarchs today.",
  },
  {
    q: "Do the kings have political power?",
    a: "No — Uganda’s constitution explicitly limits them to cultural and ceremonial roles, not government or legislative authority.",
  },
  {
    q: "What is the largest kingdom?",
    a: "Buganda, centred on Kampala, is Uganda’s largest and most prominent traditional kingdom.",
  },
  {
    q: "Why were the kingdoms abolished?",
    a: "The post-independence government abolished them in 1967, viewing them as a threat to national unity; they were restored in 1993.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Uganda is a republic with a president &mdash; and, remarkably,
        also a country of living kings. Several traditional kingdoms, some
        older than European contact with the region, still exist today as
        cultural institutions, complete with palaces, coronations, and
        monarchs recognised by millions. Understanding them adds real depth to
        a Uganda trip.
      </p>

      <p>
        Here&rsquo;s an introduction to Uganda&rsquo;s kingdoms: their history,
        their unusual constitutional status, and where to encounter them today.
      </p>

      <h2>Kingdoms Before Uganda Was a Country</h2>

      <p>
        Long before colonial borders created modern Uganda, the region was a
        patchwork of independent kingdoms and chiefdoms. The most historically
        dominant was <strong>Bunyoro-Kitara</strong>, which rose at the end of
        the 15th century and once held sway across much of the area that is
        now western and central Uganda. Over time it fractured and gave rise
        to several of the kingdoms still recognised today, most notably{" "}
        <strong>Buganda</strong>, <strong>Toro</strong>, and{" "}
        <strong>Busoga</strong>.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a4a2a, #201808)"
        label="Traditional royal drums and regalia representing Uganda's kingdoms"
      />

      <h2>Abolished, Then Restored</h2>

      <p>
        Uganda&rsquo;s traditional kingdoms were officially <strong>abolished
        in 1967</strong> by the post-independence government, which saw them
        as a threat to national unity. They remained abolished for over two
        decades before being <strong>restored in 1993</strong>{" "}as cultural
        institutions under Uganda&rsquo;s constitution. Crucially, the
        restored kingdoms are purely cultural and ceremonial &mdash; the
        1995 Constitution explicitly bars them from political power or
        legislative authority, so today&rsquo;s kings reign over heritage,
        tradition, and community life, not government.
      </p>

      <h2>Buganda: The Largest and Best Known</h2>

      <p>
        Uganda&rsquo;s largest kingdom, <strong>Buganda</strong>, is centred
        on Kampala itself &mdash; the modern capital grew up within the
        kingdom&rsquo;s historic territory, and Buganda culture remains the
        most visible in the city today (see our{" "}
        <Link href="/blog/kampala-city-guide">Kampala city guide</Link>). Its
        king, the <strong>Kabaka</strong>, currently Ronald Muwenda Mutebi
        II, has reigned since 1993, supported by a parliament called the{" "}
        <em>Lukiiko</em> and a prime minister known as the{" "}
        <em>Katikkiro</em>. The Kasubi Tombs, the burial ground of past
        Buganda kings, is a UNESCO World Heritage Site and one of
        Kampala&rsquo;s most important cultural landmarks.
      </p>

      <h2>Bunyoro, Toro &amp; Busoga</h2>

      <p>
        Three further kingdoms round out Uganda&rsquo;s royal landscape:
      </p>

      <ul>
        <li>
          <strong>Bunyoro</strong>, in the west, traces its line directly to
          the old Bunyoro-Kitara empire
        </li>
        <li>
          <strong>Toro</strong>, near Fort Portal, whose current king became
          monarch at just three years old, making him briefly one of the
          youngest reigning monarchs anywhere in the world
        </li>
        <li>
          <strong>Busoga</strong>, east of Kampala near Jinja, whose leader
          (the <em>Kyabazinga</em>) is chosen by a council of hereditary
          chiefs rather than inheriting the title directly
        </li>
      </ul>

      <h2>Encountering the Kingdoms as a Traveller</h2>

      <p>
        The kingdoms remain very much alive in everyday culture &mdash; local
        languages, ceremonies, music, and identity are all still shaped by
        which kingdom a region historically belonged to (see our wider{" "}
        <Link href="/blog/tribes-and-cultures-of-uganda">
          tribes and cultures of Uganda
        </Link>{" "}
        guide). Visiting the Kasubi Tombs or Buganda&rsquo;s Kabaka&rsquo;s
        Palace in Kampala is the easiest way to engage with this history
        directly on a trip.
      </p>

      <PostFaq title="Kingdoms of Uganda FAQ" items={faq} />

      <h2>Explore Uganda&rsquo;s Royal Heritage</h2>

      <p>
        A visit to the Kasubi Tombs or a conversation with a local guide about
        their kingdom adds real depth to a Uganda trip. Tell us if you&rsquo;d
        like cultural sites built into your{" "}
        <Link href="/safaris">Uganda itinerary</Link>.
      </p>
    </BlogPostLayout>
  );
}
