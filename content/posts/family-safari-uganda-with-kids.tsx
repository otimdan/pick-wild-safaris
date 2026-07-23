// ─────────────────────────────────────────────────────────────
//  POST: Family Safari to Uganda — Travelling With Kids
//  Planning post; age limits (gorilla 15+, chimp ~12, rhino tracking
//  6+) and malaria/yellow-fever guidance web-verified. Health advice
//  kept general with a "consult a travel clinic" framing, not
//  prescriptive, given this touches medical territory.
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

const meta = getPostMeta("family-safari-uganda-with-kids")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "What’s the best age for a Uganda safari with kids?",
    a: "Roughly 6 to 14 gets the most from the experience, though activity limits (like gorilla trekking’s 15+ rule) shape what’s possible at younger ages.",
  },
  {
    q: "Can young children go gorilla trekking?",
    a: "No — the minimum age is 15, strictly enforced across Uganda, Rwanda, and DR Congo.",
  },
  {
    q: "Is Uganda safe for children health-wise?",
    a: "With proper preparation — travel clinic consultation, yellow fever vaccination, and appropriate malaria prevention — it's considered manageable, but always confirm specifics with a medical professional.",
  },
  {
    q: "What activities work well for younger kids?",
    a: "Game drives, boat safaris, and Lake Mburo’s walking and horseback activities are all good options below the gorilla trekking age limit.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        A safari is one of the great family travel experiences &mdash; and
        Uganda, with its mix of wildlife, primates, and genuinely warm
        hospitality, works well for the right age group with the right
        planning. It&rsquo;s not a trip to wing without preparation, but done
        well, it&rsquo;s the kind of holiday children remember for the rest of
        their lives.
      </p>

      <p>
        Here&rsquo;s a practical guide to planning a family safari to Uganda:
        age limits by activity, health preparation, and how to build an
        itinerary that works for kids.
      </p>

      <h2>What Age Is Right for a Uganda Safari?</h2>

      <p>
        Children roughly <strong>6 to 14</strong>{" "}tend to get the most out of a
        family safari &mdash; old enough to sit through game drives and absorb
        the experience, young enough to still find every animal thrilling. That
        said, activity-specific age limits shape what&rsquo;s actually possible
        at different ages:
      </p>

      <ul>
        <li>
          <strong>Gorilla trekking:</strong>{" "}minimum age 15, strictly enforced
          &mdash; see{" "}
          <Link href="/blog/gorilla-trekking-day-what-to-expect">
            what happens on a gorilla trek
          </Link>
        </li>
        <li>
          <strong>Chimpanzee tracking:</strong> generally possible from around
          age 12, depending on the park
        </li>
        <li>
          <strong>Rhino tracking at Ziwa:</strong> generally welcoming to
          children above around age 6
        </li>
        <li>
          <strong>Game drives and boat safaris:</strong> suitable for most ages,
          with no formal minimum
        </li>
      </ul>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: exact minimum ages for chimp tracking and
          rhino tracking vary somewhat by operator/park policy — confirm
          current rules for your specific dates.]
        </span>
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a5a4a, #101c16)"
        label="A family on a game drive, kids looking through binoculars from a safari vehicle"
      />

      <h2>Health Preparation for Families</h2>

      <p>
        Uganda requires a yellow fever vaccination certificate for entry,
        applying to every family member including children, and the country is
        a malaria risk area, so this needs proper planning well in advance.
        We&rsquo;d strongly encourage every family to consult a travel clinic
        or paediatrician{" "}
        <strong>4&ndash;6 weeks before departure</strong>{" "}to discuss
        age-appropriate malaria prevention and confirm routine vaccinations are
        up to date &mdash; this is genuinely medical advice best given by a
        professional who knows your children&rsquo;s specific health history,
        not something to take from a blog post.
      </p>

      <h2>Building a Kid-Friendly Itinerary</h2>

      <p>
        A few adjustments make a big difference for family trips:
      </p>

      <ul>
        <li>
          <strong>Slower pace, fewer long drives</strong> &mdash; build in rest
          days and shorter transfers where possible
        </li>
        <li>
          <strong>Family-friendly lodges</strong> with pools, gardens, and
          space to run around between activities
        </li>
        <li>
          <strong>A mix of activity types</strong> &mdash; game drives, boat
          safaris, and gentler walks keep energy and interest up better than
          back-to-back long treks
        </li>
        <li>
          <strong>Lake Mburo</strong> is a particularly good family stop, with
          safe walking and horseback activities among the wildlife
        </li>
      </ul>

      <h2>Practical Safety With Kids on Safari</h2>

      <p>
        Uganda is generally considered a safe, welcoming destination for
        families, but ordinary safari discipline matters more with children:
        teach them never to approach wildlife, to stay close to guides during
        walking activities, and to remain seated and calm during game drives.
        Comprehensive travel insurance covering medical evacuation is essential
        for every family member.
      </p>

      <PostFaq title="Family Safari FAQ" items={faq} />

      <h2>Plan a Trip the Whole Family Will Remember</h2>

      <p>
        Tell us the ages of your children and we&rsquo;ll build a pace,
        itinerary, and mix of activities that works for the whole family, into
        a{" "}
        <Link href="/safaris">tailor-made Uganda safari</Link>.
      </p>
    </BlogPostLayout>
  );
}
