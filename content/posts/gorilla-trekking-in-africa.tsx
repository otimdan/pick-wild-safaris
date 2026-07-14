// ─────────────────────────────────────────────────────────────
//  POST: Gorilla Trekking in Africa — The Complete Guide
//  Broad pillar post targeting "gorilla trekking africa" / "gorilla
//  trek africa" / "gorilla tours africa" / "gorilla trekking in
//  africa" — a keyword cluster a competitor (gorillatrekafrica.com)
//  currently owns via one strong homepage. Consolidates and links
//  out to every existing gorilla post rather than repeating them.
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

const meta = getPostMeta("gorilla-trekking-in-africa")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Gorilla trekking is Africa&rsquo;s single most sought-after wildlife
        experience &mdash; a guided hike through misty mountain forest that
        ends, if all goes well, a few metres from a wild mountain gorilla
        family. It&rsquo;s physically demanding, tightly regulated, and
        genuinely unlike anything else on a safari itinerary.
      </p>

      <p>
        This is the complete overview: what gorilla trekking actually
        involves, where in Africa you can do it, what it costs, and how to
        decide where to go. For the deeper dive on any one piece, we&rsquo;ve
        linked our dedicated guides throughout.
      </p>

      <h2>What Is Gorilla Trekking?</h2>

      <p>
        Gorilla trekking means hiking into protected mountain forest with an
        armed ranger and expert trackers to find a specific,{" "}
        <strong>habituated</strong> gorilla family &mdash; one that has been
        gradually accustomed to human presence over years so it tolerates a
        respectful visit without stress. Once your group finds the family,
        you get one hour with them: watching, photographing, and simply
        being present as they feed, rest, and interact.
      </p>

      <p>
        Access is tightly controlled by permit &mdash; only a fixed number of
        visitors are allowed per gorilla family per day, both to protect the
        gorillas from disease and stress and to keep the experience genuinely
        wild rather than crowded.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a4a3a, #0a1c14)"
        label="A mountain gorilla family in misty forest undergrowth"
      />

      <h2>Where Can You Go Gorilla Trekking in Africa?</h2>

      <p>
        Mountain gorillas exist in the wild in exactly two places on earth,
        spanning three countries, all within the same broader Virunga and
        Bwindi ecosystem:
      </p>

      <ul>
        <li>
          <strong>Uganda</strong> &mdash; Bwindi Impenetrable Forest and
          Mgahinga Gorilla National Park, home to roughly half the world&rsquo;s
          remaining mountain gorillas and the most affordable of the three
          countries
        </li>
        <li>
          <strong>Rwanda</strong> &mdash; Volcanoes National Park, offering
          shorter average treks and the easiest access from an international
          airport (Kigali)
        </li>
        <li>
          <strong>DR Congo</strong> &mdash; Virunga National Park, the
          cheapest permits by a wide margin, though access has periodically
          been affected by regional security conditions
        </li>
      </ul>

      <p>
        We compare all three in detail &mdash; cost, access, and trekking
        experience &mdash; in{" "}
        <Link href="/blog/gorilla-trekking-uganda-vs-rwanda-vs-congo">
          Uganda vs Rwanda vs DR Congo
        </Link>
        .
      </p>

      <h2>How Much Does Gorilla Trekking Cost?</h2>

      <p>
        The permit is the single biggest cost, and it varies enormously by
        country &mdash; from around $400 in DR Congo to $1,500 in Rwanda. We
        break down exactly what drives that gap in{" "}
        <Link href="/blog/gorilla-permit-prices-explained">
          gorilla permit prices explained
        </Link>
        , and cover the wider trip budget in{" "}
        <Link href="/blog/how-much-does-an-african-safari-cost">
          how much does an African safari cost
        </Link>
        .
      </p>

      <h2>What Does a Trekking Day Actually Involve?</h2>

      <p>
        Treks can run anywhere from under an hour to several hours each way,
        depending on where the gorilla family happens to be that morning
        &mdash; it&rsquo;s a genuine hike through dense, often steep forest,
        not a stroll. We walk through the full day, start to finish, in{" "}
        <Link href="/blog/gorilla-trekking-day-what-to-expect">
          gorilla trekking: a day, what to expect
        </Link>
        .
      </p>

      <h2>How Fit Do You Need to Be?</h2>

      <p>
        Reasonably fit, comfortable walking on uneven ground for a few
        hours, and mentally prepared for humidity, mud, and the occasional
        steep scramble. Porters are available at every trekking destination
        to carry gear and offer a supporting hand, and we walk through the
        practical prep &mdash; gear, fitness, what to bring &mdash; in{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>.
      </p>

      <h2>Meeting the Gorillas Themselves</h2>

      <p>
        A mountain gorilla family is genuinely awe-inspiring up close &mdash;
        an adult silverback can be more than twice the size most visitors
        expect, covered in{" "}
        <Link href="/blog/how-big-is-a-silverback-gorilla">
          how big is a silverback gorilla
        </Link>
        . Fewer than 1,100 mountain gorillas remain in the wild worldwide,
        a number we cover in{" "}
        <Link href="/blog/how-many-mountain-gorillas-are-left">
          how many mountain gorillas are left
        </Link>
        , which is exactly why permit revenue funds such intensive
        protection. If you&rsquo;re also considering chimpanzee tracking,{" "}
        <Link href="/blog/gorilla-vs-chimpanzee">
          gorilla vs chimpanzee
        </Link>{" "}
        covers how the two experiences differ.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a5a2a, #101c0a)"
        label="A silverback gorilla resting in dense forest, close to the trekking group"
      />

      <h2>Best Time to Go</h2>

      <p>
        Gorilla trekking runs year-round, but the two dry seasons make for
        firmer trails and easier hiking. Our{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          best time to visit Uganda
        </Link>{" "}
        guide covers the seasonal detail, and if you&rsquo;re planning
        around a specific holiday window,{" "}
        <Link href="/blog/christmas-in-africa">
          Christmas in Africa
        </Link>{" "}
        covers what to expect booking a trek over the festive season.
      </p>

      <h2>Gorilla Trekking in Africa FAQ</h2>

      <p>
        <strong>Where in Africa can you go gorilla trekking?</strong> Only
        Uganda, Rwanda, and DR Congo have wild mountain gorilla populations
        open to trekking &mdash; nowhere else on the continent.
      </p>

      <p>
        <strong>Is gorilla trekking in Africa safe?</strong> Yes, within the
        established trekking destinations &mdash; treks are led by armed
        rangers, gorilla families are well studied, and serious incidents
        are extremely rare. DR Congo warrants extra, current-conditions
        research given periodic regional security concerns.
      </p>

      <p>
        <strong>How long does gorilla trekking take?</strong> The trek
        itself can take anywhere from under an hour to five or six hours
        each way; once you find the family, you get exactly one hour with
        them.
      </p>

      <p>
        <strong>Which country is best for gorilla trekking?</strong> It
        depends on your budget and priorities &mdash; see our full{" "}
        <Link href="/blog/gorilla-trekking-uganda-vs-rwanda-vs-congo">
          Uganda vs Rwanda vs DR Congo comparison
        </Link>
        .
      </p>

      <h2>Start Planning Your Gorilla Trek</h2>

      <p>
        Every gorilla trekking trip we run is private, fully permitted in
        advance, and built around you. See the full shape of what we offer
        on our{" "}
        <Link href="/gorilla-trekking">gorilla trekking</Link> page, or tell
        us your dates and priorities and we&rsquo;ll shape the right country
        and itinerary &mdash; starting with a{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          Bwindi gorilla tracking safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
