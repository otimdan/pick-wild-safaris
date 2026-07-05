import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ItineraryDays from "./ItineraryDays";
import type { Itinerary } from "@/content/itineraries/types";
import { allItineraries } from "@/content/itineraries/index";

export default function ItineraryLayout({ itinerary }: { itinerary: Itinerary }) {
  // Up to 3 other safaris to suggest at the foot of the page.
  const related = allItineraries
    .filter((it) => it.slug !== itinerary.slug)
    .slice(0, 3);

  return (
    <>
      <div style={{ position: "relative" }}>
        <Navbar />
      </div>

      {/* ── Hero ── */}
      <header className="itin-hero">
        <div
          style={{ position: "absolute", inset: 0, background: itinerary.heroFallback }}
        />
        <Image
          src={itinerary.heroImage}
          alt={itinerary.title}
          fill
          className="itin-hero-img"
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div className="itin-hero-overlay" />
        <div className="itin-hero-content">
          {itinerary.badge && (
            <span className="itin-hero-badge">{itinerary.badge}</span>
          )}
          <span className="itin-hero-country">{itinerary.country}</span>
          <h1 className="itin-hero-title">{itinerary.title}</h1>
          {itinerary.subtitle && (
            <p className="itin-hero-subtitle">{itinerary.subtitle}</p>
          )}
          <div className="itin-hero-meta">
            <span>{itinerary.duration}</span>
            {itinerary.priceFrom && (
              <>
                <span aria-hidden="true">·</span>
                <span>{itinerary.priceFrom}</span>
              </>
            )}
          </div>
          <a href="#enquire" className="itin-hero-cta">
            Enquire About This Safari
          </a>
        </div>
      </header>

      {/* ── At a glance ── */}
      <section className="itin-facts" aria-label="At a glance">
        <div className="itin-facts-inner">
          {itinerary.facts.map((fact) => (
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
              <h2 className="itin-heading">About This Journey</h2>
              <div className="itin-prose">
                {itinerary.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section className="itin-section">
              <span className="itin-eyebrow">Highlights</span>
              <h2 className="itin-heading">Trip Highlights</h2>
              <ul className="itin-highlights">
                {itinerary.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>

            {/* Day by day */}
            <section className="itin-section">
              <span className="itin-eyebrow">Itinerary</span>
              <h2 className="itin-heading">Day by Day</h2>
              <ItineraryDays days={itinerary.days} />
            </section>

            {/* Included / Excluded */}
            <section className="itin-section">
              <span className="itin-eyebrow">The Details</span>
              <h2 className="itin-heading">What&apos;s Included</h2>
              <div className="itin-inex">
                <div className="itin-inex-col itin-inex-in">
                  <h3>Included</h3>
                  <ul>
                    {itinerary.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="itin-inex-col itin-inex-ex">
                  <h3>Not Included</h3>
                  <ul>
                    {itinerary.excluded.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Accommodation */}
            {itinerary.stays && itinerary.stays.length > 0 && (
              <section className="itin-section">
                <span className="itin-eyebrow">Where You&apos;ll Stay</span>
                <h2 className="itin-heading">Accommodation</h2>
                <div className="itin-stays">
                  {itinerary.stays.map((stay) => (
                    <div key={stay.name} className="itin-stay-card">
                      {stay.image && (
                        <div className="itin-stay-img">
                          <Image
                            src={stay.image}
                            alt={stay.name}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="itin-stay-body">
                        <h4>{stay.name}</h4>
                        <span className="itin-stay-loc">{stay.location}</span>
                        {stay.nights && (
                          <span className="itin-stay-nights">{stay.nights}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Enquire */}
            <section className="itin-section" id="enquire">
              <div className="itin-enquire">
                <h2>Ready to Plan This Safari?</h2>
                <p>
                  Every trip we run is private and tailored around you — your
                  dates, your pace, your budget. Tell us what you have in mind
                  and one of our safari planners will craft it into a detailed,
                  costed proposal.
                </p>
                {itinerary.pricingNote && (
                  <p className="itin-enquire-note">{itinerary.pricingNote}</p>
                )}
                <div className="itin-enquire-actions">
                  <Link
                    href={`/contact?trip=${encodeURIComponent(itinerary.title)}`}
                    className="itin-enquire-btn"
                  >
                    Speak With a Planner
                  </Link>
                  {itinerary.priceFrom && (
                    <span className="itin-enquire-price">
                      {itinerary.priceFrom}
                    </span>
                  )}
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="itin-sidebar">
            <div className="itin-summary-card">
              <h4>Trip Summary</h4>
              <dl>
                {itinerary.facts.slice(0, 5).map((fact) => (
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
      {related.length > 0 && (
        <section className="itin-related">
          <div className="itin-related-inner">
            <h2 className="itin-related-heading">Other Safaris You May Like</h2>
            <div className="itin-related-grid">
              {related.map((it) => (
                <Link
                  key={it.slug}
                  href={`/safaris/${it.slug}`}
                  className="itin-related-card"
                >
                  <div className="itin-related-img">
                    <div
                      style={{ position: "absolute", inset: 0, background: it.heroFallback }}
                    />
                    <Image
                      src={it.heroImage}
                      alt={it.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
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
      )}

      <Footer />
    </>
  );
}
