// ─────────────────────────────────────────────────────────────
//  POST: Safari Photography Tips
//  Substitute for "Is Uganda Safe to Visit?" — skipped given a live,
//  current health/security advisory situation (see NEEDS-INPUT.md).
//  Safe, evergreen planning topic instead. No web-verification needed
//  (general photography practice, not Uganda-specific volatile facts).
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

const meta = getPostMeta("safari-photography-tips")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        You don&rsquo;t need professional gear to bring home great safari
        photos &mdash; but a few simple habits make an enormous difference,
        whether you&rsquo;re shooting on a phone or a serious camera setup.
        Here&rsquo;s how to come home with images that actually capture what a
        Uganda safari feels like.
      </p>

      <h2>Light: Shoot Early and Late</h2>

      <p>
        The best safari light happens at the same time as the best wildlife
        activity &mdash; early morning and late afternoon, when the sun is low,
        warm, and soft, and animals are most active. The harsh overhead light
        of midday flattens colour and creates unflattering shadows; if
        you&rsquo;re resting at camp during the heat of the day, your camera
        should be too.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #7a5a2a, #241c08)"
        label="Golden-hour light on the savanna, an elephant silhouetted against the sun"
      />

      <h2>Gear: What You Actually Need</h2>

      <ul>
        <li>
          <strong>Zoom reach matters more than megapixels</strong> &mdash; a
          200&ndash;400mm equivalent lens (or a phone with strong digital zoom)
          gets you close without disturbing wildlife
        </li>
        <li>
          <strong>A beanbag or window mount</strong> steadies shots from a
          vehicle far better than a traditional tripod
        </li>
        <li>
          <strong>Spare batteries and memory cards</strong> &mdash; charging
          opportunities can be limited at remote camps
        </li>
        <li>
          <strong>A dry bag or rain cover</strong> for dusty roads and sudden
          downpours alike
        </li>
      </ul>

      <h2>Camera Settings for Moving Wildlife</h2>

      <p>
        For animals in motion, a fast shutter speed (1/1000s or faster) freezes
        action sharply; for a static portrait, you can slow down and prioritise
        depth of field. Continuous/burst shooting mode dramatically increases
        your odds of catching the exact right moment &mdash; a yawn, a leap, a
        head turn &mdash; especially with fast-moving subjects like birds in
        flight or a hunting cheetah.
      </p>

      <h2>Composition: More Than Just the Animal</h2>

      <p>
        The most memorable safari photos often include context: an elephant
        dwarfed by an enormous sky, a lion framed by golden grass, a boat
        safari&rsquo;s wake trailing behind on the Kazinga Channel. Resist the
        urge to zoom all the way in on every subject &mdash; sometimes pulling
        back tells a better story than filling the frame.
      </p>

      <h2>Gorilla Trekking Photography</h2>

      <p>
        Bwindi&rsquo;s dense forest light is challenging &mdash; low, dappled,
        and constantly shifting. Raise your ISO rather than slow your shutter
        speed too far, since gorillas move often even while resting. Flash
        photography is not permitted this close to the gorillas, so getting
        comfortable shooting in low light beforehand pays off. See our full{" "}
        <Link href="/blog/gorilla-trekking-tips">gorilla trekking tips</Link>{" "}
        for the wider preparation picture.
      </p>

      <h2>Respect the Wildlife</h2>

      <p>
        The best safari photographers are patient, quiet, and led by their
        guide rather than chasing the shot. Sudden movement, loud noise, or
        pushing a vehicle too close disturbs the very animals you&rsquo;re
        trying to capture &mdash; and a calm, undisturbed subject almost always
        photographs better anyway.
      </p>

      <h2>Safari Photography FAQ</h2>

      <p>
        <strong>Do I need an expensive camera?</strong> No &mdash; a modern
        phone or a mid-range camera with decent zoom can produce excellent
        results if you get the light and timing right.
      </p>

      <p>
        <strong>What&rsquo;s the single best tip?</strong> Shoot during the
        early morning and late afternoon golden hours, when both light and
        wildlife activity are at their best.
      </p>

      <p>
        <strong>Can I use flash on a gorilla trek?</strong> No &mdash; flash
        photography isn&rsquo;t permitted this close to the gorillas; plan to
        shoot in natural, often low, forest light.
      </p>

      <p>
        <strong>What lens length is ideal for safari?</strong> Something in the
        200&ndash;400mm equivalent range balances reach with flexibility for
        both distant and closer sightings.
      </p>

      <h2>Bring Home the Shot of a Lifetime</h2>

      <p>
        The right light, the right patience, and the right guide make all the
        difference. Tell us what you&rsquo;d most love to photograph and we&rsquo;ll
        build your{" "}
        <Link href="/safaris">Uganda safari</Link> around the best light and
        timing for it.
      </p>
    </BlogPostLayout>
  );
}
