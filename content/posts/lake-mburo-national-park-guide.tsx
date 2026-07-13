// ─────────────────────────────────────────────────────────────
//  POST: Lake Mburo National Park — The Complete Guide
//  Destination guide; cross-linked from the impala post but had no
//  dedicated park guide. Mirrors murchison-falls-national-park-guide.
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

const meta = getPostMeta("lake-mburo-national-park-guide")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Lake Mburo is easy to underestimate. It&rsquo;s Uganda&rsquo;s smallest
        savanna park, it sits conveniently on the main road between Kampala and
        the gorillas, and it&rsquo;s often treated as a one-night stopover. That
        undersells it: Mburo has wildlife found nowhere else in the country, and
        it&rsquo;s one of the only Ugandan parks where you can safely walk,
        cycle, and ride a horse among the animals.
      </p>

      <p>
        Here&rsquo;s your complete guide to Lake Mburo &mdash; what makes it
        different, the activities that set it apart, and how to fit it into a
        Uganda itinerary.
      </p>

      <h2>Lake Mburo at a Glance</h2>

      <p>
        Lake Mburo National Park covers roughly 370 square kilometres of western
        Uganda, a mosaic of acacia woodland, rolling grassland, rocky outcrops,
        and open water &mdash; five lakes and a broader wetland system thread
        through the park, with wetlands covering around a fifth of its area.
        It&rsquo;s Uganda&rsquo;s smallest savanna park by some distance, and one
        of its most conveniently located, roughly midway between Kampala and the
        gorillas of Bwindi.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a6a2a, #141f08)"
        label="Zebra grazing beside the lake at Lake Mburo, acacia trees on the horizon"
      />

      <h2>The Only Park With Impala and Zebra Together</h2>

      <p>
        Lake Mburo is the <strong>only national park in Uganda with impala</strong>{" "}
        (the antelope that gave Kampala its name &mdash; see{" "}
        <Link href="/blog/impala-antelope-facts">impala facts</Link>) and one of
        the very few with plains zebra, so seeing the two together on the same
        open grassland is a genuinely Mburo-only sight. It&rsquo;s also the best
        place in the country to see the giant eland, the world&rsquo;s largest
        antelope, along with topi and abundant birdlife &mdash; over 350 recorded
        species, drawing serious birders on their own.
      </p>

      <h2>Walking, Cycling &amp; Horseback Safaris</h2>

      <p>
        Because Lake Mburo has no resident lions, it&rsquo;s one of the only
        Ugandan parks where walking safaris, guided cycling, and horseback rides
        among the wildlife are all offered &mdash; a completely different way to
        experience the bush than from a vehicle window, and a real point of
        difference from the bigger savanna parks. A two-hour boat cruise on the
        lake adds hippos, crocodiles, and waterbirds at close range.
      </p>

      <h2>Where It Fits in a Uganda Trip</h2>

      <p>
        Mburo&rsquo;s location is its other great strength: it sits right on the
        main road south-west from Kampala toward Bwindi, making it a natural,
        scenic overnight break rather than a special detour. Many travellers use
        it to unwind after a long travel day, or as a gentle warm-up before the
        physical demands of a gorilla trek.
      </p>

      <h2>Best Time to Visit Lake Mburo</h2>

      <p>
        Lake Mburo is rewarding year-round, since its wildlife doesn&rsquo;t
        depend on seasonal migration. The dry months (June&ndash;September and
        December&ndash;February) make walking and cycling activities easiest
        underfoot; the wetter months bring lush green scenery and excellent
        birding. See the wider picture in{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <h2>How to Visit Lake Mburo</h2>

      <p>
        Lake Mburo is easily reached by road from Kampala, and works best as a
        stop en route to or from the gorillas rather than a stand-alone trip. You
        can build it into a{" "}
        <Link href="/safaris/uganda-lake-mburo-safari">Lake Mburo safari</Link>,
        or fold it into a longer gorilla itinerary as the perfect scenic
        stopover.
      </p>

      <h2>Lake Mburo FAQ</h2>

      <p>
        <strong>What makes Lake Mburo different?</strong> It&rsquo;s the only
        Ugandan park with impala, one of the few with zebra, and one of the only
        ones where walking and horseback safaris are offered thanks to the
        absence of lions.
      </p>

      <p>
        <strong>Is Lake Mburo worth visiting on its own?</strong> It&rsquo;s best
        used as a scenic stop on the road to or from Bwindi rather than a
        stand-alone destination, though its activities are genuinely distinctive.
      </p>

      <p>
        <strong>Can you walk among the animals?</strong> Yes &mdash; guided
        walking, cycling, and horseback safaris are all available, unusual for a
        Ugandan savanna park.
      </p>

      <p>
        <strong>How long should I stay?</strong> One or two nights is typically
        enough to enjoy a game drive, the boat cruise, and one of the walking or
        horseback activities.
      </p>

      <h2>Add It to Your Route</h2>

      <p>
        Lake Mburo is proof that a small park can still surprise you. Tell us
        your route and we&rsquo;ll build it into a{" "}
        <Link href="/safaris/uganda-lake-mburo-safari">Lake Mburo safari</Link>{" "}
        or slot it neatly into your journey toward the gorillas.
      </p>
    </BlogPostLayout>
  );
}
