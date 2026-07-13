// ─────────────────────────────────────────────────────────────
//  POST: Queen Elizabeth National Park — The Complete Guide
//  Broader park guide (distinct from tree-climbing-lions-ishasha,
//  which is Ishasha-sector-specific). Mirrors murchison-falls pattern.
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

const meta = getPostMeta("queen-elizabeth-national-park-guide")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        If you could only choose one Ugandan park to explain the country&rsquo;s
        wildlife range in a single visit, Queen Elizabeth would be the answer.
        Savanna, wetland, crater lakes, and forest gorge sit side by side, and the
        result is one of the highest mammal counts of any national park in
        Africa &mdash; from tree-climbing lions to hippo-packed channels to
        forest chimpanzees, all within one park boundary.
      </p>

      <p>
        Here&rsquo;s your complete guide to Queen Elizabeth National Park: its
        landscape, its wildlife, the famous Kazinga Channel boat safari, and how
        to plan a visit.
      </p>

      <h2>Queen Elizabeth at a Glance</h2>

      <p>
        Queen Elizabeth National Park covers roughly 1,978 square kilometres of
        south-western Uganda, straddling the equator between Lake Edward and
        Lake George. Its landscape is unusually varied for one park &mdash; open
        savanna, papyrus wetlands, at least ten volcanic crater lakes, patches of
        forest, and the Ishasha sector&rsquo;s riverine woodland in the far south.
        More than 95 mammal species have been recorded here, one of the highest
        totals of any African park.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a5a3a, #0e1c10)"
        label="A boat on the Kazinga Channel with hippos and elephants along the bank"
      />

      <h2>The Kazinga Channel</h2>

      <p>
        The park&rsquo;s ecological heart is the <strong>Kazinga Channel</strong>,
        a 32-kilometre natural waterway connecting Lake Edward and Lake George.
        The boat safari along it is one of the best wildlife experiences in
        Uganda: enormous hippo pods, some of Africa&rsquo;s densest elephant
        concentrations coming down to drink, basking crocodiles, and a
        non-stop parade of waterbirds, often at astonishingly close range.
      </p>

      <h2>The Tree-Climbing Lions of Ishasha</h2>

      <p>
        In the park&rsquo;s remote southern sector, lions have learned to climb
        into the branches of fig trees &mdash; one of the strangest and most
        photographed sights on an East African safari, and rare enough that it&rsquo;s
        worth its own deep dive: see{" "}
        <Link href="/blog/tree-climbing-lions-ishasha">
          the tree-climbing lions of Ishasha
        </Link>
        .
      </p>

      <h2>Kyambura Gorge: Chimps in a Rift Valley</h2>

      <p>
        A forested gorge cut into the savanna, Kyambura (nicknamed the
        &ldquo;Valley of Apes&rdquo;) holds a small, habituated chimpanzee
        community &mdash; a surprising and beautiful contrast to the open plains
        above, and an easy add-on for travellers who want a taste of primate
        trekking without a special trip to Kibale.
      </p>

      <h2>Game Drives &amp; the Kasenyi Plains</h2>

      <p>
        The <strong>Kasenyi</strong> area in the park&rsquo;s north is the classic
        game-drive ground &mdash; open plains thick with Uganda kob (Uganda&rsquo;s
        national antelope), and the lions that hunt them, plus regular sightings
        of elephant, buffalo, and hyena. Birders will find the crater lakes and
        wetlands exceptional too, with over 600 species recorded park-wide.
      </p>

      <h2>Best Time to Visit Queen Elizabeth</h2>

      <p>
        The park rewards a visit year-round, but the <strong>dry seasons</strong>{" "}
        &mdash; roughly December to February and June to September &mdash; bring
        the easiest game viewing as animals concentrate around water sources. See
        our fuller breakdown in{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <h2>How to Visit Queen Elizabeth</h2>

      <p>
        Queen Elizabeth sits centrally in Uganda&rsquo;s south-west, making it a
        natural link between Kibale&rsquo;s chimps and Bwindi&rsquo;s gorillas.
        Build it into our{" "}
        <Link href="/safaris/uganda-queen-elizabeth-express-safari">
          Queen Elizabeth express safari
        </Link>{" "}
        or combine it with gorilla trekking on our{" "}
        <Link href="/safaris/uganda-gorilla-queen-elizabeth-safari">
          gorilla &amp; Queen Elizabeth safari
        </Link>
        .
      </p>

      <h2>Queen Elizabeth National Park FAQ</h2>

      <p>
        <strong>What makes Queen Elizabeth special?</strong> Its landscape
        diversity &mdash; savanna, wetland, crater lakes, and forest in one park
        &mdash; supports over 95 mammal species, among the highest of any African
        park.
      </p>

      <p>
        <strong>Is the Kazinga Channel boat safari worth it?</strong> Yes &mdash;
        it&rsquo;s widely considered one of the best wildlife boat trips in
        Africa, for hippo and elephant sightings alone.
      </p>

      <p>
        <strong>Can I see the tree-climbing lions here?</strong> Yes &mdash; in
        the remote Ishasha sector in the park&rsquo;s south.
      </p>

      <p>
        <strong>How long should I spend in Queen Elizabeth?</strong> Two to three
        nights allows a game drive, the Kazinga Channel boat safari, and either
        Ishasha or Kyambura Gorge.
      </p>

      <h2>Plan Your Queen Elizabeth Safari</h2>

      <p>
        Few parks pack in this much variety. Tell us your dates and we&rsquo;ll
        build Queen Elizabeth into a{" "}
        <Link href="/safaris/uganda-queen-elizabeth-express-safari">
          Queen Elizabeth safari
        </Link>{" "}
        or a longer journey through Uganda&rsquo;s south-west.
      </p>
    </BlogPostLayout>
  );
}
