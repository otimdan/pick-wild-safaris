// ─────────────────────────────────────────────────────────────
//  POST: What Happens on a Gorilla Trek — Hour by Hour
//  Companion to gorilla-trekking-tips (prep-focused); this post
//  walks the actual day itself. Age-limit fact web-verified (15+).
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

const meta = getPostMeta("gorilla-trekking-day-what-to-expect")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        You&rsquo;ve booked the permit, packed the boots, and read every
        preparation guide &mdash; but what does gorilla trekking day actually
        feel like, hour by hour? Here&rsquo;s a realistic walk-through of how
        the day unfolds, from the early wake-up to the moment you&rsquo;re
        standing in front of a silverback. If you&rsquo;re still deciding
        where and how to book, start with{" "}
        <Link href="/blog/gorilla-trekking-in-africa">
          gorilla trekking in Africa: the complete guide
        </Link>
        .
      </p>

      <h2>6:00&ndash;7:00am: Early Start</h2>

      <p>
        Gorilla trekking days begin early. You&rsquo;ll have a quick breakfast
        at your lodge before heading to the park headquarters for your
        assigned sector &mdash; timing that gives rangers the whole day to
        locate the gorilla families, who move through the forest overnight.
      </p>

      <h2>7:30&ndash;8:30am: Briefing at Park Headquarters</h2>

      <p>
        At the trailhead, rangers hold a briefing covering safety rules
        (keeping a respectful distance, staying quiet, what to do if a gorilla
        approaches), an introduction to the specific family groups being
        tracked that day, and a check of permits and passports &mdash; the
        minimum age for gorilla trekking is <strong>15 years old</strong>{" "}
        across Uganda, Rwanda, and DR Congo, strictly enforced. Groups are
        typically capped at eight trekkers per gorilla family, keeping the
        experience intimate.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2a3a24, #0a140a)"
        label="Trekkers receiving a ranger briefing at a forest trailhead before setting off"
      />

      <h2>8:30am Onwards: Into the Forest</h2>

      <p>
        You&rsquo;ll set off behind an armed ranger and one or more trackers,
        who often left before dawn to relocate the gorilla family from where
        they were last seen the previous evening. The trek itself is genuinely
        variable &mdash; anywhere from thirty minutes to six hours or more,
        depending on where the family has moved &mdash; over steep, sometimes
        muddy and thickly vegetated terrain. A local porter is well worth
        hiring here, both to help with the climb and to support the local
        community.
      </p>

      <h2>The Moment You Find Them</h2>

      <p>
        When trackers locate the family, you&rsquo;ll leave backpacks and
        walking sticks behind and approach quietly on foot, following your
        ranger&rsquo;s lead. The first sighting &mdash; often a young gorilla
        tumbling through the undergrowth, or a silverback&rsquo;s huge frame
        emerging from the foliage &mdash; is the moment every earlier hour of
        effort was for.
      </p>

      <h2>One Hour With the Gorillas</h2>

      <p>
        Once with the family, you get exactly <strong>one hour</strong>{" "}
        &mdash; a strict limit set to protect the gorillas from stress and
        disease transmission. Rangers keep the group at a safe distance
        (usually around seven metres) and guide you around the family as they
        feed, rest, or move, translating behaviour and answering questions
        quietly. It passes remarkably fast; most trekkers describe it as both
        far too short and completely overwhelming.
      </p>

      <h2>The Walk Back</h2>

      <p>
        The return trek retraces your route to the trailhead, where you&rsquo;ll
        receive a certificate marking your trek &mdash; a nice memento of a day
        that&rsquo;s genuinely unlike anything else in African travel. Most
        trekkers are back at their lodge by early-to-mid afternoon, tired,
        muddy, and thoroughly satisfied.
      </p>

      <h2>Gorilla Trekking Day FAQ</h2>

      <p>
        <strong>How long does the whole day take?</strong> Typically 6&ndash;10
        hours door to door, including the briefing, the trek itself (30
        minutes to 6+ hours each way), and the hour with the gorillas.
      </p>

      <p>
        <strong>What&rsquo;s the minimum age?</strong> 15 years old, strictly
        enforced across Uganda, Rwanda, and DR Congo.
      </p>

      <p>
        <strong>How close do you get to the gorillas?</strong> Rangers
        typically maintain a distance of around seven metres, for the health
        and safety of both trekkers and gorillas.
      </p>

      <p>
        <strong>Should I hire a porter?</strong> Yes — it makes a real
        difference on steep terrain and directly supports the local community.
        See our full{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>{" "}
        for preparation advice.
      </p>

      <h2>Experience It Yourself</h2>

      <p>
        Reading about it is one thing &mdash; the day itself is something else
        entirely. Tell us your dates and we&rsquo;ll build the whole experience
        into a{" "}
        <Link href="/safaris/uganda-gorilla-tracking-safari">
          gorilla trekking safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
