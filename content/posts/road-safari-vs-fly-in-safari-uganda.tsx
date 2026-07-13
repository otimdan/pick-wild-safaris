// ─────────────────────────────────────────────────────────────
//  POST: Road Safari vs Fly-In Safari in Uganda
//  Planning post; practical/logistical content, low volatile-fact
//  surface. Aerolink flight route to Kidepo already verified earlier
//  in the series (kidepo-valley-national-park-guide).
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

const meta = getPostMeta("road-safari-vs-fly-in-safari-uganda")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Uganda&rsquo;s parks are spread across a genuinely large country, and
        one of the first practical decisions on any itinerary is how to move
        between them: by road, or by light aircraft. Neither is universally
        better &mdash; the right choice depends on how much time you have and
        what kind of trip you want.
      </p>

      <p>
        Here&rsquo;s a clear comparison of road safaris and fly-in safaris in
        Uganda, and how to decide which suits your trip.
      </p>

      <h2>Road Safaris: The Classic Choice</h2>

      <p>
        Most Uganda itineraries are built around road travel, in a private
        4&times;4 with your driver-guide for the whole trip. The advantages are
        real: it&rsquo;s more affordable, the drives themselves often pass
        through beautiful, changing scenery, and you get a far better sense of
        the country between parks &mdash; markets, villages, tea plantations,
        the everyday texture of Uganda that you&rsquo;d otherwise fly straight
        over. The trade-off is time: some transfers, particularly toward
        remote Kidepo Valley, can run 8&ndash;10 hours in a single day.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #4a5a3a, #141c10)"
        label="A 4x4 safari vehicle on a red dirt road through green Ugandan countryside"
      />

      <h2>Fly-In Safaris: Speed and Comfort</h2>

      <p>
        Domestic light-aircraft flights connect Entebbe to airstrips near most
        major parks &mdash; Kidepo, Murchison Falls, Queen Elizabeth, and
        Bwindi among them &mdash; turning what might be a full day&rsquo;s
        drive into a flight of one to two hours. This is the better choice
        when your time is limited, when you want to maximise time actually in
        the parks rather than on the road, or when a destination like Kidepo
        would otherwise eat two full travel days out of a short trip. It comes
        at a higher cost than road transfers, and you miss the between-park
        scenery entirely.
      </p>

      <h2>A Hybrid Approach</h2>

      <p>
        Many of the best itineraries mix the two: driving between parks that
        are reasonably close together (where the journey itself adds value),
        and flying the longer, less scenic, or more remote legs &mdash;
        particularly to and from Kidepo Valley. Our{" "}
        <Link href="/safaris/uganda-gorilla-flyin-safari">
          gorilla fly-in safari
        </Link>{" "}
        uses exactly this approach, linking Bwindi, Queen Elizabeth, and
        Murchison Falls by air to fit a full circuit into fewer days.
      </p>

      <h2>Which Should You Choose?</h2>

      <ul>
        <li>
          <strong>Choose road</strong> if you have 10+ days, want to see the
          country between parks, and are comfortable with some long travel
          days
        </li>
        <li>
          <strong>Choose fly-in</strong> if your trip is a week or less,
          you&rsquo;re prioritising time in the parks over the journey between
          them, or Kidepo is on your list with limited days to spare
        </li>
        <li>
          <strong>Choose a hybrid</strong> for the best of both &mdash; the
          approach most of our longer itineraries use
        </li>
      </ul>

      <h2>Road vs Fly-In FAQ</h2>

      <p>
        <strong>Is flying between parks worth the extra cost?</strong> For
        shorter trips or remote parks like Kidepo, yes &mdash; it can save a
        full day or more of driving each way.
      </p>

      <p>
        <strong>How long are Uganda&rsquo;s longest road transfers?</strong>{" "}
        The drive to Kidepo Valley can take around 8&ndash;10 hours; most other
        park-to-park transfers are considerably shorter.
      </p>

      <p>
        <strong>Can I mix road and fly-in on one trip?</strong> Yes &mdash;
        it&rsquo;s a common and effective approach, driving shorter, scenic
        legs and flying the longer or more remote ones.
      </p>

      <p>
        <strong>Do all parks have airstrips?</strong> Most major parks
        (Kidepo, Murchison Falls, Queen Elizabeth, Bwindi) have nearby
        airstrips served by scheduled domestic flights.
      </p>

      <h2>Plan the Right Route for You</h2>

      <p>
        Tell us how much time you have and we&rsquo;ll recommend the right mix
        of road and air travel for your{" "}
        <Link href="/safaris/uganda-gorilla-flyin-safari">
          Uganda itinerary
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
