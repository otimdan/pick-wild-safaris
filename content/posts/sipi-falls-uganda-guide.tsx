// ─────────────────────────────────────────────────────────────
//  POST: Sipi Falls — Hiking, Coffee & What to Expect
//  Informational/destination post targeting "sipi falls" queries
//  (low SEO difficulty), bridging to the Complete Uganda trip.
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

const meta = getPostMeta("sipi-falls-uganda-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "How many waterfalls are there at Sipi?",
    a: "Three, linked by a half-day hiking trail; the largest drops around 100 metres.",
  },
  {
    q: "Is the Sipi Falls hike difficult?",
    a: "Moderately — some steep and muddy sections, but manageable with reasonable fitness. Shorter options exist.",
  },
  {
    q: "Is the coffee tour worth it?",
    a: "Very — it’s hands-on, authentic, and supports local farmers directly. A highlight for many visitors.",
  },
  {
    q: "How far is Sipi from Kampala?",
    a: "It’s a scenic drive east toward the Kenyan border. <span style={{ opacity: 0.75 }}> [VERIFY: add the drive time / distance you quote clients — commonly cited as roughly 7–8 hours from Kampala.] </span>",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Not every Uganda highlight has fur or feathers. On the north-western
        foothills of Mount Elgon, a series of three waterfalls tumbles down
        emerald, coffee-growing hillsides in one of the prettiest corners of the
        country. Sipi Falls is where travellers come to swap game drives for
        hiking boots &mdash; to walk between waterfalls, tour a smallholder coffee
        farm, and simply breathe in some of Uganda&rsquo;s loveliest scenery.
      </p>

      <p>
        Here&rsquo;s how to make the most of Sipi Falls: the hikes, the coffee, the
        other activities, when to go, and how it fits into a wider Uganda trip.
      </p>

      <h2>Where Is Sipi Falls?</h2>

      <p>
        Sipi Falls lies in eastern Uganda, near the town of Kapchorwa, on the edge
        of <strong>Mount Elgon National Park</strong> &mdash; the enormous, extinct
        volcano that straddles the Uganda&ndash;Kenya border. It&rsquo;s a scenic
        drive east from Kampala or Jinja, and its cool, green, highland setting
        feels a world away from the savanna parks. The area is best known for two
        things: waterfalls and exceptionally good Arabica coffee.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a5a5a, #0a201f)"
        label="The main Sipi Falls plunging down the Mount Elgon escarpment"
      />

      <h2>The Three Falls &amp; the Hike</h2>

      <p>
        &ldquo;Sipi Falls&rdquo; is actually three separate waterfalls strung along
        the escarpment, and the classic thing to do is hike between them with a
        local guide. The walk links the three drops through farmland and along the
        hillsides, with viewpoints that open onto the plains of Karamoja far below.
        The largest and most photographed of the three is a dramatic single plunge
        of around 100 metres.
      </p>

      <p>
        The full circuit is a moderately energetic half-day walk &mdash; some
        steep, sometimes muddy sections, a few river crossings &mdash; but
        it&rsquo;s achievable for anyone with reasonable fitness, and shorter
        options exist if you&rsquo;d rather just visit the main fall. Good walking
        shoes and a light rain jacket are worth having.
      </p>

      <h2>Coffee, Straight From the Source</h2>

      <p>
        The slopes around Sipi grow superb Arabica coffee, and a coffee tour here
        is one of the real highlights. Local farmers walk you through the entire
        journey &mdash; from picking the ripe red cherries, to pulping, drying,
        roasting over a fire, and grinding by hand &mdash; and then you drink a cup
        of what you&rsquo;ve just helped make, looking out over the hills it grew
        on. It&rsquo;s simple, genuine, and a direct way to support the local
        community.
      </p>

      <h2>Other Things to Do</h2>

      <ul>
        <li>
          <strong>Abseiling</strong> down the main waterfall for the
          adventurous
        </li>
        <li>
          <strong>Nature and village walks</strong> through the surrounding
          farmland
        </li>
        <li>
          <strong>Caving</strong> and viewpoint hikes on the Elgon foothills
        </li>
        <li>
          <strong>Mount Elgon trekking</strong>{" "}for those wanting a bigger
          multi-day climb to Wagagai, the caldera&rsquo;s high point
        </li>
      </ul>

      <h2>Best Time to Visit Sipi Falls</h2>

      <p>
        Sipi is beautiful year-round, but trails are easier and views clearer in
        the <strong>drier months</strong> &mdash; roughly June to August and
        December to February. In the rains the falls are at their most powerful and
        the hills their greenest, but paths get slippery. Mornings generally offer
        the clearest views before afternoon cloud builds. See our guide to{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>{" "}
        to line it up with the rest of your trip.
      </p>

      <h2>How Sipi Fits Into a Uganda Trip</h2>

      <p>
        Because it&rsquo;s in the east &mdash; the opposite side of the country
        from the gorillas &mdash; Sipi works best as part of a longer, wider loop or
        as a relaxed extension around Jinja and the source of the Nile. It features
        as an early highlight on our{" "}
        <Link href="/safaris/uganda-complete-gorilla-wildlife-safari">
          complete Uganda gorilla &amp; wildlife safari
        </Link>
        , which strings together adventure, waterfalls, and the big national parks.
        On a shorter gorilla-focused trip, it&rsquo;s usually one to save for a
        return visit.
      </p>

      <PostFaq title="Sipi Falls FAQ" items={faq} />

      <h2>Add Sipi to Your Journey</h2>

      <p>
        If you&rsquo;d like waterfalls, hiking, and fresh mountain coffee alongside
        Uganda&rsquo;s wildlife, Sipi Falls is a beautiful change of pace. Tell us
        what kind of trip you&rsquo;re dreaming of and we&rsquo;ll weave it into a{" "}
        <Link href="/safaris/uganda-complete-gorilla-wildlife-safari">
          complete Uganda safari
        </Link>{" "}
        built around you.
      </p>
    </BlogPostLayout>
  );
}
