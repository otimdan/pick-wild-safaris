// ─────────────────────────────────────────────────────────────
//  POST: Uganda's History: What Travellers Should Know
//  Culture cluster post; scoped to pre-independence through the
//  1986 transition (established, well-documented history) rather
//  than current-day politics — matches the honest-but-measured tone
//  used elsewhere in the series for sensitive topics.
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

const meta = getPostMeta("uganda-history-what-travellers-should-know")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "When did Uganda gain independence?",
    a: "On 9 October 1962, from British colonial rule.",
  },
  {
    q: "Who was Idi Amin?",
    a: "A military ruler who seized power in 1971 and governed Uganda until 1979, a period widely regarded as one of the most violent in the country’s modern history.",
  },
  {
    q: "Is this history visible to visitors today?",
    a: "Mostly through museums, historical sites in Kampala, and conversations with guides — day-to-day travel in Uganda's tourist areas is unaffected by this history.",
  },
  {
    q: "Where can I learn more during my trip?",
    a: "The Uganda Museum in Kampala offers a good starting point — see our Kampala city guide.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        You don&rsquo;t need a history degree to enjoy a Uganda safari &mdash;
        but knowing the outline of the country&rsquo;s modern history adds real
        depth to the trip, and it comes up naturally in conversation with
        guides, hosts, and communities you&rsquo;ll meet along the way. Here&rsquo;s
        the essential background, told plainly.
      </p>

      <h2>Before Independence: A Land of Kingdoms</h2>

      <p>
        Long before it was a single country, the region was home to
        independent kingdoms &mdash; Buganda, Bunyoro, Toro, and others &mdash;
        each with its own monarchy and history, some centuries old. Britain
        established the Uganda Protectorate in 1894, ruling through these
        existing kingdom structures rather than replacing them outright. We
        cover this royal history in more depth in{" "}
        <Link href="/blog/kingdoms-of-uganda">the kingdoms of Uganda</Link>.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a4a3a, #141410)"
        label="An archival-style image evoking Uganda's mid-20th century transition to independence"
      />

      <h2>Independence: 9 October 1962</h2>

      <p>
        Uganda gained independence from Britain on <strong>9 October
        1962</strong>, becoming a republic within the Commonwealth. Milton
        Obote became the country&rsquo;s first prime minister, with Buganda&rsquo;s
        Kabaka, Sir Edward Muteesa II, initially serving as president &mdash; an
        early attempt to balance the new national government with the old
        kingdom structures. That balance proved difficult, and in 1966 Obote
        suspended the constitution and abolished the presidency, concentrating
        power in his own hands.
      </p>

      <h2>The Idi Amin Years: 1971&ndash;1979</h2>

      <p>
        In 1971, Idi Amin seized power in a military coup. His eight-year rule
        remains one of the darkest periods in Uganda&rsquo;s history &mdash;
        estimates of the death toll from his regime&rsquo;s violence range
        widely, with credible figures running into the hundreds of thousands.
        In 1972, Amin expelled tens of thousands of Ugandans of Indian
        descent, devastating the country&rsquo;s economy in the process. His
        rule ended in 1979 following the Uganda&ndash;Tanzania War.
      </p>

      <h2>The Path to Today: 1980&ndash;1986</h2>

      <p>
        The years after Amin&rsquo;s fall were turbulent, marked by disputed
        elections and continued conflict. Yoweri Museveni, then leading an
        armed resistance movement, took power in January 1986 after his forces
        captured Kampala &mdash; ending years of civil war and beginning a new
        chapter that brought a longer period of relative stability to much of
        the country.
      </p>

      <h2>How This Shapes a Visit Today</h2>

      <p>
        This history is present in quiet, meaningful ways &mdash; in the
        resilience and warmth you&rsquo;ll encounter across the country, in
        museum exhibits in Kampala, and often in conversation with older
        guides and hosts who lived through parts of it directly. It&rsquo;s
        not the whole story of Uganda by any means &mdash; the wildlife,
        culture, and landscapes covered throughout this blog are just as much
        a part of the country&rsquo;s identity &mdash; but understanding this
        chapter adds context that&rsquo;s easy to miss on a first visit.
      </p>

      <PostFaq title="Uganda History FAQ" items={faq} />

      <h2>Travel With Context</h2>

      <p>
        Understanding a country&rsquo;s history makes travelling through it
        richer. Tell us if you&rsquo;d like a Kampala history tour built into
        your{" "}
        <Link href="/safaris">Uganda itinerary</Link>.
      </p>
    </BlogPostLayout>
  );
}
