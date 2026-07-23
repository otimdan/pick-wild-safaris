// ─────────────────────────────────────────────────────────────
//  POST: Jinja & the Source of the Nile — Adventure Guide
//  Destination/adventure guide targeting "jinja uganda / source of
//  the nile" queries. Third-party activity prices (rafting/bungee)
//  deliberately NOT printed — flagged, per no-prices policy caution.
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

const meta = getPostMeta("jinja-source-of-the-nile-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Is Jinja worth visiting?",
    a: "Yes — between the historical Source of the Nile, world-class rafting, and a relaxed town to explore, it’s one of the best breaks from a wildlife-focused itinerary.",
  },
  {
    q: "How far is Jinja from Kampala?",
    a: "About two hours by road, making it an easy stop on the way east or as a stand-alone day or overnight trip.",
  },
  {
    q: "Is the white water rafting safe for beginners?",
    a: "Operators run both full-grade rapids and gentler sections, with safety kayakers and full equipment provided; no prior rafting experience is required.",
  },
  {
    q: "How many days do I need in Jinja?",
    a: "One full day covers the source of the Nile and one adventure activity; two days allows a more relaxed pace or multiple activities.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Two hours east of Kampala, the world&rsquo;s longest river begins its
        6,650-kilometre journey to the Mediterranean. Jinja, on the shore of Lake
        Victoria, marks the spot where the Nile leaves the lake &mdash; a place of
        real historical weight that has also become East Africa&rsquo;s
        undisputed adventure capital, packed with white water, wildlife, and one
        of the best change-of-pace stops on a Uganda itinerary.
      </p>

      <p>
        Here&rsquo;s your guide to Jinja and the Source of the Nile: the history,
        the adventure activities, and how to fit it into your trip.
      </p>

      <h2>The Source of the Nile</h2>

      <p>
        On 28 July 1862, the British explorer John Hanning Speke stood at this
        spot and declared he had found the source of the Nile &mdash; ending
        decades of European debate over the river&rsquo;s origin. A monument on
        the western bank marks the site today, and a short boat ride out onto the
        water lets you see the exact point where Lake Victoria&rsquo;s outflow
        becomes the river itself. It&rsquo;s a quietly moving stop even before you
        get to the adventure activities the town is famous for.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a5a6a, #0a1c22)"
        label="The Nile leaving Lake Victoria at Jinja, calm water and green banks"
      />

      <h2>White Water Rafting</h2>

      <p>
        Downstream of Jinja, the Nile delivers some of the best commercially
        raftable white water on earth &mdash; a full day covering roughly 24
        kilometres of rapids ranging from Grade 3 up to Grade 5, run by
        established local operators with safety kayakers and full equipment. The
        Nile&rsquo;s big-volume rapids are famous among rafters worldwide;
        smaller, family-friendly sections are also available for those who want
        the thrill without the biggest drops.
      </p>

      <h2>Bungee Jumping &amp; Other Adventure Activities</h2>

      <p>
        A platform above the river offers a freefall bungee jump toward the Nile
        itself &mdash; one of the most photographed thrills in East Africa.
        Beyond rafting and bungee, Jinja offers kayaking, stand-up paddleboarding,
        quad biking, horseback riding, and gentler boat cruises on the river,
        making it a destination for both adrenaline-seekers and travellers who
        just want a relaxed day by the water.
      </p>

      <p>
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: rafting/bungee are typically booked with third-party
          adventure operators in Jinja rather than run by us directly — say if
          you&rsquo;d like us to name preferred partner operators, or keep this
          general. Activity prices intentionally not printed here.]
        </span>
      </p>

      <h2>Beyond the Adrenaline: Culture &amp; Wildlife</h2>

      <p>
        Jinja itself is a relaxed, leafy town with faded colonial architecture,
        a lively market, and good cafes &mdash; a pleasant change of pace from
        safari lodges. Nearby, the Mabira Forest offers guided walks and
        zip-lining, and boat trips on the Nile and Lake Victoria bring sightings
        of otters, monitor lizards, and excellent birdlife along the banks.
      </p>

      <h2>How Jinja Fits Into a Uganda Trip</h2>

      <p>
        Jinja works best as a one- or two-night stop between Kampala/Entebbe and
        the parks further west, or as a dedicated adventure add-on for travellers
        who want a day of rafting or bungee jumping alongside the wildlife side of
        the trip. It&rsquo;s an easy, low-effort way to add real variety to an
        itinerary that&rsquo;s otherwise all game drives and treks.
      </p>

      <PostFaq title="Jinja & Source of the Nile FAQ" items={faq} />

      <h2>Add Some Adrenaline to Your Trip</h2>

      <p>
        Whether it&rsquo;s the history of the source of the Nile or the thrill of
        the rapids, Jinja is an easy, rewarding addition to a Uganda safari. Tell
        us your plans and we&rsquo;ll build a stop in Jinja into your{" "}
        <Link href="/safaris">Uganda itinerary</Link>.
      </p>
    </BlogPostLayout>
  );
}
