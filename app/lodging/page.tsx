// app/lodging/page.tsx
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import LegalPageLayout from "@/app/components/LegalPageLayout";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "Lodging & Accommodation",
  description:
    "The lodges and camps we use across Uganda — hand-picked by region, from simple community-run stays to high-end lodges, matched to your budget and route.",
  alternates: { canonical: `${BASE_URL}/lodging` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/lodging`,
    title: "Lodging & Accommodation | Pick Wild Safaris",
    description:
      "The lodges and camps we use across Uganda, hand-picked by region and matched to your budget.",
    siteName: "Pick Wild Safaris",
    images: [DEFAULT_OG_IMAGE],
  },
};

type RegionLodges = {
  region: string;
  blurb: string;
  lodges: string[];
};

const regions: RegionLodges[] = [
  {
    region: "Entebbe & Kampala",
    blurb:
      "Where most trips begin and end — comfortable stays close to the airport for an easy first or last night.",
    lodges: [
      "Protea Hotel by Marriott Entebbe",
      "ViaVia Entebbe",
      "2 Friends Beach Hotel",
      "Papyrus Guest House",
    ],
  },
  {
    region: "Murchison Falls National Park",
    blurb:
      "Lodges positioned for early game drives and the Nile boat safari, within reach of the falls themselves.",
    lodges: ["Pakuba Safari Lodge", "Fort Murchison Lodge"],
  },
  {
    region: "Kibale Forest",
    blurb:
      "Forest-edge lodges close to the chimpanzee trailheads, in Africa's highest-density primate habitat.",
    lodges: ["Primates Lodge Kibale", "Turaco Treetops", "Chimpanzee Forest Lodge"],
  },
  {
    region: "Queen Elizabeth National Park",
    blurb:
      "Stays overlooking the savanna or the Kazinga Channel, with easy access to the Ishasha sector's tree-climbing lions.",
    lodges: [
      "Mweya Safari Lodge",
      "Buffalo Safari Lodge",
      "Elephant Hab Lodge",
      "Enjojo Lodge",
      "Ishasha Jungle Lodge",
    ],
  },
  {
    region: "Bwindi Impenetrable Forest",
    blurb:
      "Lodges across Bwindi's trekking sectors, from community-run stays to higher-end properties near the trailheads.",
    lodges: ["Buhoma Lodge", "Rushaga Gorilla Haven Lodge", "Bakiga Lodge"],
  },
  {
    region: "Lake Bunyonyi",
    blurb:
      "The natural place to unwind before or after a gorilla trek, on the shores of one of Uganda's safest lakes for swimming.",
    lodges: ["BirdNest Resort", "Arcadia Cottages"],
  },
  {
    region: "Lake Mburo National Park",
    blurb:
      "Lodges set for walking and horseback safaris, unusual among Uganda's savanna parks.",
    lodges: ["Rwakobo Rock Lodge", "Eagle's Nest"],
  },
  {
    region: "Mgahinga & Lake Mutanda",
    blurb:
      "Stays near the Virunga volcanoes for golden monkey trekking, and a quiet lakeside finish at Mutanda.",
    lodges: [
      "Travellers Rest Hotel",
      "Lake Mulehe Safari Lodge",
      "Mutanda Lake Resort",
    ],
  },
  {
    region: "Jinja & Sipi Falls",
    blurb:
      "A change of pace at the Source of the Nile, and a waterfall-hike stay on the slopes of Mount Elgon.",
    lodges: ["2 Friends Jinja", "Nile Village Hotel", "Sipi Heritage Lodge"],
  },
  {
    region: "Kidepo Valley National Park",
    blurb:
      "A small number of lodges in Uganda's most remote and wildest park.",
    lodges: ["Apoka Safari Lodge"],
  },
];

export default function LodgingPage() {
  return (
    <LegalPageLayout
      title="Lodging & Accommodation"
      intro={
        <>
          <p>
            Where you stay shapes a trip as much as where you go. We work with
            a hand-picked set of lodges and camps across Uganda &mdash; chosen
            for location, character, and quality, from simple community-run
            stays to high-end properties &mdash; and match them to your
            itinerary, your pace, and your budget.
          </p>
          <p>
            For a broader look at what to expect at each level, see our guide
            to{" "}
            <Link href="/blog/safari-lodges-in-uganda">
              safari lodges in Uganda
            </Link>
            . Below is where we stay, region by region.
          </p>
        </>
      }
    >
      {regions.map((r) => (
        <section key={r.region}>
          <h2>{r.region}</h2>
          <p>{r.blurb}</p>
          <ul>
            {r.lodges.map((lodge) => (
              <li key={lodge}>{lodge}</li>
            ))}
          </ul>
        </section>
      ))}

      <p style={{ opacity: 0.75, fontStyle: "italic" }}>
        [NEEDS INPUT: a few regions on our itineraries &mdash; Hoima, Fort
        Portal / Semuliki, and Kitgum &mdash; don&rsquo;t yet have a confirmed
        lodge listed internally, so they&rsquo;re left off this page rather than
        shown with a placeholder. Confirm the properties you use for these
        stops and I&rsquo;ll add them here and to the itineraries that pass
        through them.]
      </p>

      <div className="legal-contact">
        <p>
          <strong>Have a lodge preference?</strong>
        </p>
        <p>
          Tell us your budget and style &mdash; simple and authentic, or a
          special-occasion splurge &mdash; and we&rsquo;ll match the lodges to
          your route. <Link href="/contact">Get in touch</Link> or browse our{" "}
          <Link href="/safaris">safari itineraries</Link>.
        </p>
      </div>
    </LegalPageLayout>
  );
}
