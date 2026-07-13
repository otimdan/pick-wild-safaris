// ─────────────────────────────────────────────────────────────
//  POST: Mgahinga Gorilla National Park & Golden Monkey Trekking
//  Destination guide targeting "mgahinga / golden monkey trekking".
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

const meta = getPostMeta("mgahinga-gorilla-national-park-golden-monkeys")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Tucked into Uganda&rsquo;s far south-western tip, where three countries
        and three volcanoes meet, Mgahinga is Uganda&rsquo;s smallest national
        park &mdash; and the only place in the country to trek the golden
        monkey, one of Africa&rsquo;s most strikingly coloured and least-known
        primates.
      </p>

      <p>
        Here&rsquo;s a guide to Mgahinga Gorilla National Park: the volcanoes, the
        golden monkeys, gorilla trekking here, and how it compares to Bwindi.
      </p>

      <h2>Mgahinga at a Glance</h2>

      <p>
        Mgahinga Gorilla National Park covers just 33.9 square kilometres &mdash;
        Uganda&rsquo;s smallest park by a wide margin &mdash; in the far
        south-west corner of the country. It forms the Ugandan section of the{" "}
        <strong>Virunga Conservation Area</strong>, a chain of volcanoes shared
        with Rwanda&rsquo;s Volcanoes National Park and DR Congo&rsquo;s Virunga
        National Park. Three volcanoes rise within Mgahinga itself: Muhavura
        (4,127 m), Sabinyo (3,645 m), and Gahinga (3,474 m), all climbable for
        travellers who want a serious day hike alongside the primate trekking.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a4a2a, #101808)"
        label="Volcanic peaks of the Virunga range rising above Mgahinga's bamboo forest"
      />

      <h2>Golden Monkey Trekking</h2>

      <p>
        Mgahinga is <strong>the only place in Uganda</strong> to trek the golden
        monkey &mdash; a small, endangered, and genuinely gorgeous primate with
        a bright orange-gold body and black limbs, found only in the bamboo zones
        of the Virunga volcanoes (shared with Rwanda&rsquo;s population; nowhere
        else on earth). Golden monkeys are playful, highly active, and move
        quickly through the bamboo, making for a livelier, faster-paced trek than
        a gorilla family&rsquo;s slow forage. It&rsquo;s also considerably shorter
        and less physically demanding than gorilla trekking &mdash; a good option
        for travellers with limited time or fitness, or as an add-on for those
        who&rsquo;ve already trekked gorillas elsewhere.
      </p>

      <h2>Gorilla Trekking at Mgahinga</h2>

      <p>
        Mgahinga also offers mountain gorilla trekking, though with far fewer
        habituated families than Bwindi &mdash; typically just one, meaning
        permits here can be harder to secure and availability is limited. The
        park&rsquo;s gorilla population also moves freely across the border into
        Rwanda and Congo, so on any given day the resident family may be out of
        the park entirely, which is worth knowing before you plan around it.
        Most gorilla trekkers choose Bwindi for its greater number of habituated
        families; see our full{" "}
        <Link href="/blog/bwindi-impenetrable-forest-guide">
          Bwindi Impenetrable Forest guide
        </Link>{" "}
        for comparison.
      </p>

      <h2>Volcano Hiking</h2>

      <p>
        For travellers with an extra day and strong legs, climbing one of
        Mgahinga&rsquo;s three volcanoes is a genuine highlight &mdash; Mount
        Sabinyo&rsquo;s ridge famously lets you stand with one foot in Uganda,
        one in Rwanda, and one in DR Congo at its summit. These are full-day,
        strenuous hikes best suited to fit, well-prepared trekkers.
      </p>

      <h2>How Mgahinga Fits Into a Trip</h2>

      <p>
        Because it&rsquo;s small and has limited gorilla permits, Mgahinga is
        usually visited primarily for golden monkey trekking, often paired with
        gorilla trekking in nearby Bwindi rather than instead of it. It also sits
        close to the Rwanda border, making it a natural link if you&rsquo;re
        combining countries &mdash; see{" "}
        <Link href="/blog/uganda-vs-rwanda-gorilla-trekking">
          Uganda vs Rwanda gorilla trekking
        </Link>
        .
      </p>

      <h2>Mgahinga FAQ</h2>

      <p>
        <strong>What is Mgahinga famous for?</strong> Golden monkey trekking
        &mdash; it&rsquo;s the only place in Uganda where it&rsquo;s offered
        &mdash; and its three climbable Virunga volcanoes.
      </p>

      <p>
        <strong>Can you trek gorillas at Mgahinga?</strong> Yes, though with far
        fewer permits and habituated families than Bwindi, and the resident
        family sometimes crosses into Rwanda or Congo.
      </p>

      <p>
        <strong>Is golden monkey trekking easier than gorilla trekking?</strong>{" "}
        Generally yes &mdash; shorter and less physically demanding, making it a
        good option for less time or fitness.
      </p>

      <p>
        <strong>Can I climb the volcanoes?</strong> Yes &mdash; Muhavura,
        Sabinyo, and Gahinga are all climbable as full-day, strenuous hikes.
      </p>

      <h2>Add Golden Monkeys to Your Trip</h2>

      <p>
        Mgahinga is an easy, rewarding add-on to a gorilla safari in the
        south-west. Tell us your dates and we&rsquo;ll work golden monkey
        trekking into your itinerary alongside{" "}
        <Link href="/blog/bwindi-impenetrable-forest-guide">Bwindi</Link>.
      </p>
    </BlogPostLayout>
  );
}
