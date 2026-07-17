// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/app/components/LegalPageLayout";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "About Us | Pick Wild Safaris",
  description:
    "Pick Wild Safaris is a locally owned, Kampala-based tour operator running private, tailor-made safaris across Uganda, Kenya, Rwanda, and Tanzania since 2012.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/about`,
    title: "About Pick Wild Safaris",
    description:
      "A locally owned Uganda tour operator running private, tailor-made safaris since 2012.",
    siteName: "Pick Wild Safaris",
  },
};

export default function AboutPage() {
  return (
    <LegalPageLayout
      title="About Pick Wild Safaris"
      intro={
        <p>
          We&rsquo;re a locally owned, Kampala-based safari operator, and every
          trip we run is private and built around the person taking it &mdash;
          not sold off a shelf.
        </p>
      }
    >
      <h2>Who We Are</h2>
      <p>
        Pick Wild Safaris is a Ugandan-owned tour operator based in Kampala,
        running private safaris since 2012. We&rsquo;re not a reseller working
        through a foreign agent &mdash; our guides, vehicles, and planning team
        are based here, on the ground, which means the person designing your
        itinerary knows the roads, the parks, and the lodges firsthand.
      </p>

      <h2>Our Story</h2>
      <p>
        Pick Wild Safaris started in Kampala in 2012 with a simple idea:
        Uganda is better shown by the people who actually live here. Rather
        than sell fixed packages designed for the widest possible audience,
        we&rsquo;ve built the business around the opposite approach &mdash;
        listening to what a traveller actually wants, then designing a trip
        around it, run by our own guides and vehicles rather than
        subcontracted out.
      </p>
      <p>
        Over the years that&rsquo;s meant growing carefully rather than
        quickly &mdash; adding routes into Kenya, Rwanda, and Tanzania only
        once we were confident we could run them to the same standard as
        Uganda, and building relationships with lodges and communities we&rsquo;d
        genuinely recommend to a friend.
      </p>
      <p style={{ opacity: 0.75, fontStyle: "italic" }}>
        [NEEDS INPUT: this is a safe, fact-based version of the story &mdash;
        no invented names or events. The real version, in your own words (who
        started it, a specific early trip or moment, what changed along the
        way) will always land better with readers than anything general I can
        write. Send me the details whenever you&rsquo;re ready and I&rsquo;ll
        fold them in.]
      </p>

      <h2>How We Work</h2>
      <p>
        Every safari we run is <strong>private and tailor-made</strong> &mdash;
        never a fixed group departure with a set itinerary. You tell us your
        dates, your interests, and your budget, and we build a trip around
        that, not the other way round. Because we&rsquo;re the ground operator
        rather than a middleman, changes and special requests get handled
        directly, without waiting on a third party overseas.
      </p>

      <h2>Where We Operate</h2>
      <p>
        Uganda is home ground &mdash; gorilla and chimpanzee trekking, the
        savanna parks, and the country&rsquo;s lakes and culture are what we
        know best. We also run safaris into <strong>Kenya, Rwanda, and
        Tanzania</strong>, for travellers combining Uganda with the Masai Mara,
        the Serengeti, or a second gorilla-trekking country. Browse our full
        range of <Link href="/safaris">safari itineraries</Link> to see the
        routes we run most.
      </p>

      <h2>Our Team</h2>
      <p>
        Every trip is led by an experienced, English-speaking Ugandan
        driver-guide &mdash; the same person with you from the airport to the
        last game drive, not a different local operator handed off at each
        stop. Our guides know the parks, the seasons, and the small details
        that make a trip run smoothly: which gorilla sector suits your
        fitness, when to push on and when to slow down, which lodge fits the
        night ahead.
      </p>
      <p style={{ opacity: 0.75, fontStyle: "italic" }}>
        [NEEDS INPUT: naming individual guides here &mdash; even two or three,
        with a photo and a line on their background &mdash; would make this
        section far more convincing than a description of the role in the
        abstract. Send bios/photos for anyone you&rsquo;d like featured
        (yourself included) and I&rsquo;ll add real profiles.]
      </p>

      <h2>Why Travel With Us</h2>
      <ul>
        <li>
          <strong>Private, not packaged</strong> &mdash; your pace, your
          interests, your vehicle and guide alone
        </li>
        <li>
          <strong>A local ground operator</strong>, not a reseller &mdash; direct
          contact with the people actually running your trip
        </li>
        <li>
          <strong>Uganda specialists</strong> who also run trips across Kenya,
          Rwanda, and Tanzania
        </li>
        <li>
          <strong>Hand-picked lodges</strong> across every budget, from simple
          and authentic to high-end &mdash; see our{" "}
          <Link href="/lodging">accommodation guide</Link>
        </li>
      </ul>
      <h2>Travelling Responsibly</h2>
      <p>
        Uganda&rsquo;s wildlife and forests support the communities living
        alongside them, and a well-run safari should put something back. We
        favour community-run lodges where we can, hire local porters on every
        gorilla and chimpanzee trek, and build in cultural experiences &mdash;
        like the Batwa Trail near Bwindi &mdash; that channel tourism income
        directly to the people involved, not just the wildlife.
      </p>
      <p style={{ opacity: 0.75, fontStyle: "italic" }}>
        [NEEDS INPUT: if Pick Wild Safaris holds any formal credentials &mdash;
        AUTO (Association of Uganda Tour Operators) membership, a Uganda
        Tourism Board licence number, UCOTA, ATTA, or similar &mdash; these
        belong here too, as a further trust signal. Confirm what you hold and
        I&rsquo;ll add it; I haven&rsquo;t found any listed publicly, so I&rsquo;m
        not stating any without your confirmation.]
      </p>

      <div className="legal-contact">
        <p>
          <strong>Ready to start planning?</strong>
        </p>
        <p>
          Tell us what you have in mind and we&rsquo;ll shape it into a trip.{" "}
          <Link href="/contact">Get in touch</Link> or browse our{" "}
          <Link href="/safaris">safari itineraries</Link> for inspiration.
        </p>
      </div>
    </LegalPageLayout>
  );
}
