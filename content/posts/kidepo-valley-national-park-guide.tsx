// ─────────────────────────────────────────────────────────────
//  POST: Kidepo Valley National Park — The Complete Guide
//  Destination guide for Uganda's wildest, most remote park —
//  cross-linked constantly (cheetah, hartebeest, predator posts)
//  but had no dedicated park guide. Mirrors murchison-falls pattern.
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

const meta = getPostMeta("kidepo-valley-national-park-guide")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Ask any well-travelled safari guide which Ugandan park they&rsquo;d visit
        for themselves, and Kidepo Valley comes up more than any other. Tucked
        into the far north-eastern corner of the country, in the Karamoja region
        bordering South Sudan and Kenya, it&rsquo;s Uganda&rsquo;s most remote
        national park &mdash; and, for exactly that reason, its wildest and least
        crowded.
      </p>

      <p>
        Here&rsquo;s your complete guide to Kidepo Valley: what makes it
        different from every other Ugandan park, the wildlife you won&rsquo;t
        find anywhere else in the country, and how to actually get there.
      </p>

      <h2>Kidepo at a Glance</h2>

      <p>
        Kidepo Valley National Park covers around 1,442 square kilometres of
        rugged savanna, rocky ridgelines, and two seasonal rivers &mdash; the
        Kidepo and the Narus &mdash; roughly 520 km north-east of Kampala.
        It&rsquo;s often compared to the great East African plains parks for its
        wide-open drama, but without the crowds: on a game drive here you can go
        hours without seeing another vehicle.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #7a5228, #241a08)"
        label="Wide, golden savanna of Kidepo's Narus Valley, mountains on the horizon"
      />

      <h2>Wildlife Found Nowhere Else in Uganda</h2>

      <p>
        Kidepo&rsquo;s isolation is exactly what makes its wildlife list so
        unusual. It&rsquo;s the best place in Uganda to see:
      </p>

      <ul>
        <li>
          <strong>Cheetah</strong> &mdash; rare across the rest of Uganda, but
          present in Kidepo&rsquo;s open plains (see{" "}
          <Link href="/blog/how-fast-is-a-cheetah">how fast is a cheetah</Link>)
        </li>
        <li>
          <strong>Ostrich</strong> &mdash; the only Ugandan park where they occur
        </li>
        <li>
          <strong>Bat-eared fox and caracal</strong> &mdash; found in few other
          places in the country
        </li>
      </ul>

      <p>
        Alongside those specialities, Kidepo holds a full savanna cast: lions,
        leopards, elephants, buffalo, and large herds of Jackson&rsquo;s
        hartebeest and zebra (see{" "}
        <Link href="/blog/jacksons-hartebeest-facts">
          Jackson&rsquo;s hartebeest facts
        </Link>
        ). Over 77 mammal species and 475 recorded bird species make this one of
        the richest single parks in East Africa.
      </p>

      <h2>The Narus Valley</h2>

      <p>
        Most game drives concentrate in the <strong>Narus Valley</strong> in the
        south of the park, where a permanent water source keeps wildlife
        concentrated even in the dry season &mdash; consistently good sightings
        in a small area, despite the park&rsquo;s overall size and remoteness.
      </p>

      <h2>How to Get to Kidepo</h2>

      <p>
        Getting there is part of the story. There are two realistic options:
      </p>

      <ul>
        <li>
          <strong>Fly-in</strong> &mdash; scheduled light-aircraft flights from
          Entebbe to Apoka airstrip inside the park, taking around two hours;
          the fast, comfortable way in
        </li>
        <li>
          <strong>Drive</strong> &mdash; a long but scenic road journey, typically
          via Gulu or Kitgum, taking around ten hours; often broken into two
          days with an overnight stop
        </li>
      </ul>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: fly-in schedule and one-way fares change with
          the operator — confirm current days/prices before quoting.]
        </span>
      </p>

      <h2>Best Time to Visit Kidepo</h2>

      <p>
        The dry months (roughly September to March) bring the best game viewing,
        as wildlife concentrates around the Narus Valley&rsquo;s water. The rains
        (April to August) turn the park lush and green, with excellent birding
        but more spread-out game. See our wider seasonal guide in{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <h2>Why Visit Somewhere So Remote?</h2>

      <p>
        Kidepo isn&rsquo;t for a first-time, tightly-scheduled trip &mdash; it
        rewards travellers with a little more time who want Uganda&rsquo;s
        wildest wilderness, and the added culture of the Karamojong people, whose
        cattle-herding traditions remain among the most distinctive in East
        Africa (more on them in{" "}
        <Link href="/blog/tribes-and-cultures-of-uganda">
          the tribes and cultures of Uganda
        </Link>
        ). For those willing to make the journey, it&rsquo;s often the highlight
        of the whole trip.
      </p>

      <h2>Kidepo Valley FAQ</h2>

      <p>
        <strong>Is Kidepo worth the journey?</strong> For travellers with the time
        (and a taste for true wilderness), yes &mdash; it&rsquo;s widely regarded
        as Uganda&rsquo;s most spectacular park.
      </p>

      <p>
        <strong>Can you see cheetahs in Kidepo?</strong> Yes &mdash; it&rsquo;s
        the most reliable place in Uganda for them, along with the country&rsquo;s
        only ostriches.
      </p>

      <p>
        <strong>How do I get to Kidepo?</strong> Fly from Entebbe (about 2 hours)
        or drive via Gulu/Kitgum (around 10 hours), often split over two days.
      </p>

      <p>
        <strong>How many days do I need?</strong> At least two full days to
        justify the journey — three if flying, to properly explore the Narus
        Valley.
      </p>

      <h2>Go Off the Beaten Track</h2>

      <p>
        If you want Uganda at its wildest, Kidepo is where to find it. Tell us
        your dates and we&rsquo;ll build it into a{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley wilderness safari
        </Link>{" "}
        shaped around exactly how much time you have.
      </p>
    </BlogPostLayout>
  );
}
