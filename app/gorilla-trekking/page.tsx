// app/gorilla-trekking/page.tsx
//
// Flagship commercial landing page for the "gorilla trekking africa" /
// "gorilla trek africa" / "gorilla tours africa" keyword cluster — see
// content/posts/gorilla-trekking-in-africa.tsx for the companion
// informational blog pillar this page bridges from. Reuses the itin-*
// CSS classes from ItineraryLayout/SafariTypeLayout; no new CSS needed.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { allItineraries } from "@/content/itineraries/index";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "Gorilla Trekking in Africa",
  description:
    "Private, permit-secured gorilla trekking safaris across Uganda, Rwanda, and DR Congo — expertly planned, personally guided.",
  alternates: { canonical: `${BASE_URL}/gorilla-trekking` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/gorilla-trekking`,
    title: "Gorilla Trekking in Africa | Pick Wild Safaris",
    description:
      "Private, permit-secured gorilla trekking safaris across Uganda, Rwanda, and DR Congo — expertly planned, personally guided.",
    siteName: "Pick Wild Safaris",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorilla Trekking in Africa | Pick Wild Safaris",
    description:
      "Private, permit-secured gorilla trekking safaris across Uganda, Rwanda, and DR Congo.",
  },
};

const GORILLA_ITINERARY_SLUGS = [
  "uganda-gorilla-tracking-safari",
  "uganda-gorilla-wildlife-safari",
  "uganda-gorilla-chimpanzee-express-safari",
  "uganda-gorilla-lake-bunyonyi-safari",
  "rwanda-gorilla-trekking-safari",
  "uganda-rwanda-gorilla-safari",
];

function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gorilla Trekking",
        item: `${BASE_URL}/gorilla-trekking`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function GorillaTrekkingPage() {
  const gorillaSafaris = allItineraries.filter((it) =>
    GORILLA_ITINERARY_SLUGS.includes(it.slug),
  );

  const facts = [
    { label: "Countries", value: "Uganda · Rwanda · DR Congo" },
    { label: "Permits From", value: "~$400 per person" },
    { label: "Trek Length", value: "1–6 hours, each way" },
    { label: "Time With Gorillas", value: "One hour, guaranteed" },
    { label: "Best Time", value: "Dry seasons, year-round access" },
    { label: "Fitness", value: "Moderate to strenuous" },
  ];

  const highlights = [
    "Permits secured and confirmed before you travel — no last-minute surprises",
    "Private vehicle and guide for every trek, not a shared group departure",
    "Expert route planning across Uganda, Rwanda, and DR Congo",
    "Porters arranged at every trailhead to carry gear and assist on the climb",
    "Paired with wider wildlife safaris, not sold as a standalone add-on",
    "A dedicated planner from first enquiry through to your return flight",
  ];

  return (
    <>
      <BreadcrumbSchema />

      <div style={{ position: "relative" }}>
        <Navbar />
      </div>

      {/* ── Hero ── */}
      <header className="itin-hero">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(160deg, #2a4a3a, #0a1c14)",
          }}
        />
        <div className="itin-hero-overlay" />
        <div className="itin-hero-content">
          <span className="itin-hero-country">Gorilla Trekking</span>
          <h1 className="itin-hero-title">Gorilla Trekking in Africa</h1>
          <p className="itin-hero-subtitle">
            Private, permit-secured treks to wild mountain gorillas across
            Uganda, Rwanda, and DR Congo.
          </p>
          <a href="#enquire" className="itin-hero-cta">
            Plan Your Gorilla Trek
          </a>
        </div>
      </header>

      {/* ── At a glance ── */}
      <section className="itin-facts" aria-label="At a glance">
        <div className="itin-facts-inner">
          {facts.map((fact) => (
            <div key={fact.label} className="itin-fact">
              <span className="itin-fact-label">{fact.label}</span>
              <span className="itin-fact-value">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Body ── */}
      <div className="itin-body">
        <div className="itin-body-inner">
          <main className="itin-main">
            <Link href="/safaris" className="itin-back-link">
              ← All Safaris
            </Link>

            {/* Overview */}
            <section className="itin-section">
              <span className="itin-eyebrow">Overview</span>
              <h2 className="itin-heading">
                Africa&rsquo;s Most Sought-After Wildlife Encounter
              </h2>
              <div className="itin-prose">
                <p>
                  Gorilla trekking means hiking into protected mountain
                  forest with rangers and expert trackers to find a specific,
                  habituated gorilla family, then spending one hour in their
                  company &mdash; watching, photographing, and simply being
                  present. It&rsquo;s physically demanding, tightly permitted,
                  and unlike anything else on a safari itinerary.
                </p>
                <p>
                  We run gorilla trekking trips across all three countries
                  where wild mountain gorillas remain: Uganda, Rwanda, and DR
                  Congo. Every trek is private, permit-secured in advance,
                  and built into a wider itinerary that suits how you
                  actually want to travel.
                </p>
              </div>
            </section>

            {/* Highlights */}
            <section className="itin-section">
              <span className="itin-eyebrow">Why Book With Us</span>
              <h2 className="itin-heading">What&rsquo;s Included</h2>
              <ul className="itin-highlights">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>

            {/* Where to go */}
            <section className="itin-section">
              <span className="itin-eyebrow">Where to Go</span>
              <h2 className="itin-heading">Uganda, Rwanda &amp; DR Congo</h2>
              <div className="itin-prose">
                <p>
                  <strong>Uganda</strong> holds roughly half the world&rsquo;s
                  remaining mountain gorillas across Bwindi Impenetrable
                  Forest and Mgahinga Gorilla National Park, with the most
                  affordable permits and the widest wildlife safari to pair
                  it with. <strong>Rwanda&rsquo;s</strong> Volcanoes National
                  Park offers the shortest average treks and the easiest
                  airport access, at a premium price. <strong>DR
                  Congo&rsquo;s</strong> Virunga National Park has the
                  cheapest permits by far, with access that depends on
                  current regional conditions.
                </p>
                <p>
                  For the full breakdown of cost, access, and which country
                  suits your trip, see our guides to{" "}
                  <Link href="/blog/gorilla-trekking-in-africa">
                    gorilla trekking in Africa
                  </Link>{" "}
                  and{" "}
                  <Link href="/blog/gorilla-trekking-uganda-vs-rwanda-vs-congo">
                    Uganda vs Rwanda vs DR Congo
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="itin-section">
              <span className="itin-eyebrow">Questions</span>
              <h2 className="itin-heading">Gorilla Trekking FAQ</h2>
              <div className="itin-prose">
                <p>
                  <strong>How much does gorilla trekking cost?</strong>{" "}
                  Permits alone range from roughly $400 in DR Congo to
                  $1,500 in Rwanda, before the rest of the trip &mdash; see
                  our{" "}
                  <Link href="/blog/gorilla-permit-prices-explained">
                    full permit price breakdown
                  </Link>
                  .
                </p>
                <p>
                  <strong>How fit do I need to be?</strong> Reasonably fit
                  and comfortable on uneven ground for a few hours. Porters
                  are available at every trailhead if you&rsquo;d like the
                  extra help.
                </p>
                <p>
                  <strong>When&rsquo;s the best time to go?</strong>{" "}
                  Trekking runs year-round, though the dry seasons make for
                  firmer trails &mdash; see our{" "}
                  <Link href="/blog/best-time-to-visit-uganda">
                    best time to visit Uganda
                  </Link>{" "}
                  guide.
                </p>
                <p>
                  <strong>Can I combine gorilla trekking with a wider
                  safari?</strong> Yes &mdash; it&rsquo;s how we build almost
                  every gorilla itinerary, pairing trekking with wildlife
                  parks, chimpanzee tracking, or a lakeside close to the
                  trip.
                </p>
              </div>
            </section>

            {/* Enquire */}
            <section className="itin-section" id="enquire">
              <div className="itin-enquire">
                <h2>Ready to Plan Your Gorilla Trek?</h2>
                <p>
                  Every trip we run is private and tailored around you —
                  your dates, your pace, your budget. Tell us what you have
                  in mind and one of our safari planners will craft it into
                  a detailed, costed proposal.
                </p>
                <div className="itin-enquire-actions">
                  <Link
                    href="/contact?trip=Gorilla%20Trekking"
                    className="itin-enquire-btn"
                  >
                    Speak With a Planner
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="itin-sidebar">
            <div className="itin-summary-card">
              <h4>At a Glance</h4>
              <dl>
                {facts.slice(0, 4).map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <a href="#enquire" className="itin-summary-btn">
                Enquire Now
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Related safaris ── */}
      <section className="itin-related">
        <div className="itin-related-inner">
          <h2 className="itin-related-heading">Gorilla Safaris You&rsquo;ll Love</h2>
          <div className="itin-related-grid">
            {gorillaSafaris.map((it) => (
              <Link
                key={it.slug}
                href={`/safaris/${it.slug}`}
                className="itin-related-card"
              >
                <div className="itin-related-img">
                  <div
                    style={{ position: "absolute", inset: 0, background: it.heroFallback }}
                  />
                  {it.heroImage && (
                    <Image
                      src={it.heroImage}
                      alt={it.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="itin-related-body">
                  <span className="itin-related-country">{it.country}</span>
                  <h3>{it.title}</h3>
                  <span className="itin-related-days">{it.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
