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
import Link from "next/link";

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
        before you book your permit — where to go, when to trek, what it costs,
        how to prepare, and what that hour with a gorilla family is actually
        like.
      </p>

      <h2>Where to Go: Bwindi vs. Mgahinga</h2>

      <p>
        Uganda has two gorilla trekking destinations. <strong>Bwindi Impenetrable
        Forest</strong> is the main event — it holds about half the world&apos;s
        mountain gorilla population across four sectors (Buhoma, Ruhija,
        Nkuringo, and Rushaga), with more than a dozen habituated families
        between them. <strong>Mgahinga Gorilla National Park</strong> is smaller,
        hosts a single habituated family, and sits on the Ugandan side of the
        Virungas.
      </p>

      <p>
        For most visitors, Bwindi is the right answer. More permit availability,
        more gorilla families to visit, and more accommodation options at every
        price point. Mgahinga is a lovely, quieter alternative — but its lone
        family occasionally wanders across the border into Rwanda or the DRC, so
        sightings are slightly less certain.
      </p>

      <PostImage
        src=""
        alt="Dense forest in Bwindi, Uganda"
        caption="Bwindi Impenetrable Forest — UNESCO World Heritage Site"
      />

      <h2>Uganda vs. Rwanda: Where Should You Trek?</h2>

      <p>
        This is the question we get asked most. Both offer world-class gorilla
        trekking — the deciding factors are budget, time, and the kind of trip
        you want.
      </p>

      <ul>
        <li>
          <strong>Cost:</strong> a Uganda permit is USD $800; Rwanda charges USD
          $1,500 for the same one-hour experience. That gap alone sways many
          travellers toward Uganda.
        </li>
        <li>
          <strong>Access:</strong> Rwanda&apos;s Volcanoes National Park is about
          a 2.5-hour drive from Kigali airport, making it faster for a short
          trip. Bwindi is more remote — a scenic domestic flight or a long drive
          from Entebbe.
        </li>
        <li>
          <strong>The trek itself:</strong> Bwindi is dense, steep rainforest;
          Rwanda&apos;s terrain is more open volcanic slopes, often with shorter
          hikes. Neither is &quot;easy,&quot; but Rwanda can be gentler.
        </li>
        <li>
          <strong>The bigger picture:</strong> Uganda pairs naturally with
          chimpanzee tracking, the Big Five in Queen Elizabeth National Park, and
          the source of the Nile — so it makes for a richer multi-stop safari.
        </li>
      </ul>

      <p>
        Our take: if value and a full safari matter most, choose Uganda. If you
        are short on time and want the quickest possible gorilla encounter, our{" "}
        <Link href="/safaris/rwanda-gorilla-trekking-safari">
          Rwanda Gorilla Trekking Safari
        </Link>{" "}
        is hard to beat. And if you genuinely cannot decide, you don&apos;t have
        to — our{" "}
        <Link href="/safaris/uganda-rwanda-gorilla-safari">
          Uganda &amp; Rwanda Double Gorilla Safari
        </Link>{" "}
        treks a family in each country on one cross-border trip.
      </p>

      <h2>When to Go: The Best Time to Trek</h2>

      <p>
        You can trek gorillas year-round — this is rainforest, so it can rain in
        any month. That said, the <strong>dry seasons make for firmer trails and
        easier hiking</strong>:
      </p>

      <ul>
        <li>
          <strong>June to September</strong> — the long dry season and the most
          popular window. Book permits well ahead.
        </li>
        <li>
          <strong>December to February</strong> — a second, shorter dry spell
          that is quieter than the mid-year peak.
        </li>
      </ul>

      <p>
        The wetter months (March–May and October–November) mean muddier,
        tougher treks — but also lush scenery, fewer visitors, and the best
        chance of last-minute permits. For a full month-by-month view, see our
        guide to the{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          best time to visit Uganda for a safari
        </Link>
        .
      </p>

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
        <li>
          <strong>Minimum age:</strong> 15 years old — this is firmly enforced,
          so gorilla trekking is not an option for younger children
        </li>
      </ul>

      <blockquote>
        Permits are non-refundable and non-transferable. Don&apos;t wait until
        you have your flights confirmed — book the permit first, then build your
        trip around it.
      </blockquote>

      <h2>The Gorilla Habituation Experience</h2>

      <p>
        There is a rare, deeper alternative to the standard trek. In
        Bwindi&apos;s Rushaga sector, the{" "}
        <strong>Gorilla Habituation Experience</strong> lets a tiny number of
        visitors spend <strong>up to four hours</strong> with a semi-habituated
        family, alongside the researchers and trackers who are gradually
        accustoming them to human presence.
      </p>

      <p>
        It costs USD $1,500 and only a handful of permits are issued each day, so
        it books out early. If one hour does not feel like enough — and for many
        people it does not — this is the trek to ask us about.
      </p>

      <h2>Getting to Bwindi</h2>

      <p>
        Bwindi sits in Uganda&apos;s far southwest, and getting there is part of
        the adventure. You have two options:
      </p>

      <ul>
        <li>
          <strong>Fly:</strong> a scheduled or charter flight from Entebbe (or
          Kajjansi) to the Kihihi or Kisoro airstrip takes roughly 1–1.5 hours,
          followed by a short transfer to your sector. This is the fastest,
          most comfortable route.
        </li>
        <li>
          <strong>Drive:</strong> the road journey from Entebbe or Kampala is
          8–9 hours, usually broken up over a couple of days with stops at Lake
          Mburo or Queen Elizabeth National Park — turning the transfer into a
          proper safari.
        </li>
      </ul>

      <p>
        One important detail: permits are tied to a specific sector, so your
        accommodation needs to match. We handle that alignment for you when we
        build your itinerary.
      </p>

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

      <p>
        For broader trip readiness — vaccinations, insurance, money, and more —
        read our{" "}
        <Link href="/resources/how-to-prepare-for-safari">
          how to prepare for a safari
        </Link>{" "}
        guide.
      </p>

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

      <p>
        Our{" "}
        <Link href="/blog/what-to-pack-for-a-safari">complete safari packing list</Link>{" "}
        covers the rest of your bag for the wider trip.
      </p>

      <h2>The One-Hour Rule &amp; Gorilla Etiquette</h2>

      <p>
        Once rangers locate the family, you get exactly one hour with the
        gorillas. No more. This is strictly enforced to protect their health and
        minimise stress. In that hour, a few rules keep both you and the gorillas
        safe:
      </p>

      <ul>
        <li>Stay at least 7 metres away (though the gorillas often ignore this themselves)</li>
        <li>
          If a silverback approaches or charges, stand still, crouch slightly,
          and look away — never run
        </li>
        <li>Keep your voice low and movements slow and calm</li>
        <li>No flash photography, no eating, drinking, or smoking near the family</li>
        <li>Follow every instruction from your ranger without hesitation</li>
      </ul>

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
        guides will have them for you. You will also need a{" "}
        <Link href="/resources/visas-and-e-resources">
          yellow fever certificate and the right visa
        </Link>{" "}
        to enter Uganda.
      </p>

      <h2>Where to Stay</h2>

      <p>
        Accommodation near Bwindi runs the full range, and because permits are
        sector-specific, your lodge should sit close to the sector on your
        permit:
      </p>

      <ul>
        <li>
          <strong>Luxury:</strong> intimate forest lodges with private decks,
          guiding, and full-board dining right on the park edge
        </li>
        <li>
          <strong>Mid-range:</strong> comfortable lodges and tented camps with
          en-suite rooms and reliable hot water
        </li>
        <li>
          <strong>Budget:</strong> simple, warm community-run guesthouses that
          put money straight back into the villages around the park
        </li>
      </ul>

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

      <h2>Make It Part of a Bigger Safari</h2>

      <p>
        Gorilla trekking is unforgettable on its own, but it pairs beautifully
        with the rest of Uganda — chimpanzee tracking in Kibale, tree-climbing
        lions and boat safaris in Queen Elizabeth National Park, and the
        thundering Nile at Murchison Falls. Browse our{" "}
        <Link href="/safaris">safari itineraries</Link> for ideas, or read
        answers to common questions on our{" "}
        <Link href="/resources/faq">FAQ page</Link>.
      </p>

      <p>
        When you are ready, <Link href="/contact">get in touch</Link> and we will
        secure your permit and build the trip around it.
      </p>

    </BlogPostLayout>
  );
}
