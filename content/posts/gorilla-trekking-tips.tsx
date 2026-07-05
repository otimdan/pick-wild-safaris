// ─────────────────────────────────────────────────────────────
//  HOW TO ADD A NEW POST
//  1. Copy this file, rename it to your-slug.tsx
//  2. Update the meta import in getPostMeta (content/posts/index.ts)
//  3. Add your metadata entry to allPosts (content/posts/index.ts)
//  4. Change the content below — h2, p, ul, PostImage are all you need
// ─────────────────────────────────────────────────────────────

import BlogPostLayout from "@/app/components/BlogPostLayout";
import { getPostMeta } from "@/content/posts/index";
import Image from "next/image";

// A tiny helper for inline images — use it inside any post
function PostImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  if (!src) return null;
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={820}
        height={480}
        className="post-img"
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 1024px) 100vw, 820px"
      />
      {caption && <span className="post-img-caption">{caption}</span>}
    </>
  );
}

const meta = getPostMeta("gorilla-trekking-tips")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>

      <p>
        There are fewer than 1,100 mountain gorillas left on earth. Almost all
        of them live in the Virunga Massif — a chain of volcanoes straddling
        Uganda, Rwanda, and the DRC — and in Uganda&apos;s Bwindi Impenetrable
        Forest. Seeing them in the wild is one of the most quietly overwhelming
        things a person can do.
      </p>

      <p>
        But it takes planning. This guide covers everything you need to know
        before you book your permit.
      </p>

      <h2>Where to Go: Bwindi vs. Mgahinga</h2>

      <p>
        Uganda has two gorilla trekking destinations. <strong>Bwindi Impenetrable
        Forest</strong> is the main event — it holds about half the world&apos;s
        mountain gorilla population across four sectors (Buhoma, Ruhija,
        Nkuringo, and Rushaga). <strong>Mgahinga Gorilla National Park</strong>{" "}
        is smaller, hosts a single habituated family, and sits on the
        Ugandan side of the Virungas.
      </p>

      <p>
        For most visitors, Bwindi is the right answer. More permit availability,
        more gorilla families to visit, and more accommodation options at every
        price point.
      </p>

      <PostImage
        src=""
        alt="Dense forest in Bwindi, Uganda"
        caption="Bwindi Impenetrable Forest — UNESCO World Heritage Site"
      />

      <h2>Getting Your Permit</h2>

      <p>
        Each gorilla family is visited by a maximum of eight people per day.
        That strict cap is what keeps the gorillas healthy — and what makes
        permits both precious and expensive.
      </p>

      <ul>
        <li>
          <strong>Uganda permit cost:</strong> USD $800 per person (as of 2026)
        </li>
        <li>
          <strong>Booking:</strong> Through Uganda Wildlife Authority (UWA) or a
          licensed operator like us
        </li>
        <li>
          <strong>How far in advance:</strong> 3–6 months for peak season
          (June–September, December–January); shoulder seasons have more
          flexibility
        </li>
      </ul>

      <blockquote>
        Permits are non-refundable and non-transferable. Don&apos;t wait until
        you have your flights confirmed — book the permit first, then build your
        trip around it.
      </blockquote>

      <h2>What the Trek Is Actually Like</h2>

      <p>
        Treks start at 7:30 AM with a briefing at the park gate. From there,
        rangers and a tracker lead your group into the forest. The trek
        itself can be anywhere from 30 minutes to 8 hours depending on where the
        gorillas have moved overnight.
      </p>

      <p>
        The terrain is real jungle — steep, muddy, and dense. Altitude in
        Bwindi ranges from 1,160 to 2,607 metres. Most people are fine, but
        it&apos;s not a gentle stroll.
      </p>

      <h2>How to Prepare Physically</h2>

      <ul>
        <li>Walk uphill regularly in the 4–6 weeks before your trip</li>
        <li>
          If you&apos;re not a regular hiker, consider hiring a porter — they
          carry your bag, help you up steep sections, and the fees go directly
          into the local community
        </li>
        <li>
          Altitude acclimatisation matters: spend a night or two in a mid-altitude
          area before trekking
        </li>
      </ul>

      <h2>What to Wear and Bring</h2>

      <ul>
        <li>Long-sleeved shirt and long trousers (protects against nettles and insects)</li>
        <li>Waterproof hiking boots — non-negotiable</li>
        <li>Garden gloves (the stinging nettles are genuine)</li>
        <li>Rain jacket</li>
        <li>2 litres of water minimum</li>
        <li>Camera without flash — flash is not permitted near gorillas</li>
        <li>A small snack</li>
      </ul>

      <h2>The One-Hour Rule</h2>

      <p>
        Once rangers locate the family, you get exactly one hour with the
        gorillas. No more. This is strictly enforced to protect their health and
        minimise stress. In that hour, you must stay at least 7 metres away (though
        the gorillas frequently ignore this boundary — if a silverback walks
        toward you, you stand still and look away).
      </p>

      <p>
        Most people say the hour passes in about five minutes. And then they
        spend the rest of the trip thinking about it.
      </p>

      <h2>Health Requirements</h2>

      <p>
        If you are sick — cold, flu, stomach bug — you will be asked not to
        trek that day. Gorillas are highly susceptible to human respiratory
        illnesses. This is taken seriously. Your permit may be deferred if
        you inform UWA in advance; it will not be refunded.
      </p>

      <p>
        Masks are worn within 10 metres of gorillas as a precaution. Your
        guides will have them for you.
      </p>

      <h2>Is It Worth the Cost?</h2>

      <p>
        That USD $800 goes directly to UWA and funds anti-poaching patrols,
        veterinary care for the gorillas, and community projects around the park.
        The gorilla population has been growing steadily since conservation
        efforts began — a rare piece of good news in African wildlife.
      </p>

      <p>
        Every person we have ever taken gorilla trekking has said the same
        thing afterward: it was worth every dollar.
      </p>

    </BlogPostLayout>
  );
}
