// ─────────────────────────────────────────────────────────────
//  POST: Nile Crocodile Facts
//  Wildlife-facts cluster post; targets "nile crocodile facts".
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

const meta = getPostMeta("nile-crocodile-facts")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Along the banks of the Nile at Murchison Falls, it&rsquo;s common to
        count a dozen or more crocodiles basking in a single glance &mdash; some
        small, some genuinely enormous, all utterly motionless until the moment
        they&rsquo;re not. The Nile crocodile is Africa&rsquo;s largest reptile
        and one of its most formidable predators, and Uganda holds some of the
        best sightings anywhere on the continent.
      </p>

      <p>
        Here are the facts behind the Nile crocodile: its size, its bite, and
        where in Uganda to see the highest concentrations in Africa.
      </p>

      <h2>Nile Crocodile Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Africa&rsquo;s largest crocodilian</strong>, and the
          second-largest in the world after the saltwater crocodile
        </li>
        <li>
          <strong>Typically 3&ndash;4.5 metres long</strong> as a mature adult
        </li>
        <li>
          <strong>One of the strongest bites in the animal kingdom</strong>
          &mdash; roughly 5,000 psi
        </li>
        <li>
          <strong>The largest ever recorded</strong> was shot near Murchison
          Falls in 1926, at over 6.4 metres
        </li>
        <li>
          <strong>Murchison Falls has the highest concentration of crocodiles
          in Africa</strong>
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a4a2a, #101808)"
        label="Nile crocodiles basking on the riverbank at Murchison Falls, jaws open to cool"
      />

      <h2>Size and Bite Force</h2>

      <p>
        A mature Nile crocodile typically measures somewhere between 3 and 4.5
        metres, though exceptional individuals grow much larger &mdash; the
        largest ever reliably recorded, shot near Murchison Falls in 1926,
        measured an astonishing 6.45 metres. Its bite is equally extreme: at
        around <strong>5,000 psi</strong>, it&rsquo;s among the most powerful
        bite forces of any living animal, more than enough to crush bone
        instantly. Curiously, the muscles that open a crocodile&rsquo;s jaw are
        comparatively weak &mdash; which is why a person can hold a
        crocodile&rsquo;s mouth shut with their bare hands, but never pry it
        open.
      </p>

      <h2>An Ambush Predator</h2>

      <p>
        Nile crocodiles hunt mainly by stealth, lying almost entirely submerged
        with only eyes and nostrils above the surface, then exploding into a
        short, violent lunge to seize prey coming to drink. Fish make up the
        bulk of the diet for most individuals, but large crocodiles will take
        antelope, buffalo, and occasionally young hippos &mdash; using pressure
        sensors along the jaw to detect the faintest vibration or movement in
        the water.
      </p>

      <h2>Murchison Falls: Africa&rsquo;s Crocodile Capital</h2>

      <p>
        The stretch of the Nile through{" "}
        <Link href="/blog/murchison-falls-national-park-guide">
          Murchison Falls National Park
        </Link>{" "}
        holds the highest concentration of crocodiles anywhere in Africa,
        making the park&rsquo;s boat safari one of the best places on the
        continent to see them &mdash; both fully submerged, watchful eyes just
        breaking the surface, and hauled out basking on sandbanks in numbers
        that can run into the dozens within view at once.
      </p>

      <h2>Where Else to See Nile Crocodiles in Uganda</h2>

      <p>
        Beyond Murchison, good sightings are also reliable along the{" "}
        <Link href="/blog/queen-elizabeth-national-park-guide">
          Kazinga Channel
        </Link>{" "}
        in Queen Elizabeth National Park, and around Lake Victoria near Jinja
        &mdash; wherever a boat safari puts you close to the water&rsquo;s edge.
      </p>

      <h2>Nile Crocodile FAQ</h2>

      <p>
        <strong>How big do Nile crocodiles get?</strong> Typically 3&ndash;4.5
        metres as adults, with exceptional individuals recorded well over 6
        metres.
      </p>

      <p>
        <strong>How strong is a Nile crocodile&rsquo;s bite?</strong> Around
        5,000 psi &mdash; among the strongest bites of any living animal.
      </p>

      <p>
        <strong>Where can I see the most crocodiles in Uganda?</strong> The Nile
        at Murchison Falls, which holds the highest concentration of Nile
        crocodiles anywhere in Africa.
      </p>

      <p>
        <strong>Are Nile crocodiles dangerous to humans?</strong> Yes &mdash;
        they are responsible for a significant number of attacks across Africa
        each year, which is exactly why boat safaris keep a respectful distance.
      </p>

      <h2>See Them Up Close on a Boat Safari</h2>

      <p>
        A Murchison Falls boat safari gets you closer to Nile crocodiles than
        almost anywhere else in Africa &mdash; safely, from the water. Tell us
        your dates and we&rsquo;ll build it into a{" "}
        <Link href="/safaris/uganda-murchison-falls-safari">
          Murchison Falls safari
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
