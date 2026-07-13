import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { SafariType } from "@/content/safari-types/types";
import { allItineraries } from "@/content/itineraries/index";

export default function SafariTypeLayout({ safariType }: { safariType: SafariType }) {
  const related = allItineraries.filter((it) =>
    safariType.relatedSlugs.includes(it.slug),
  );
  const fallbackRelated = allItineraries.slice(0, 3);
  const relatedToShow = related.length > 0 ? related : fallbackRelated;

  return (
    <>
      <div style={{ position: "relative" }}>
        <Navbar />
      </div>

      {/* ── Hero ── */}
      <header className="itin-hero">
        <div
          style={{ position: "absolute", inset: 0, background: safariType.heroFallback }}
        />
        {safariType.heroImage && (
          <Image
            src={safariType.heroImage}
            alt={safariType.title}
            fill
            className="itin-hero-img"
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
        )}
        <div className="itin-hero-overlay" />
        <div className="itin-hero-content">
          <span className="itin-hero-country">{safariType.eyebrow}</span>
          <h1 className="itin-hero-title">{safariType.title}</h1>
          <p className="itin-hero-subtitle">{safariType.tagline}</p>
          <a href="#enquire" className="itin-hero-cta">
            Enquire About This Style
          </a>
        </div>
      </header>

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
              <h2 className="itin-heading">Why Choose a {safariType.title.replace(/s$/, "")}</h2>
              <div className="itin-prose">
                {safariType.intro.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section className="itin-section">
              <span className="itin-eyebrow">Highlights</span>
              <h2 className="itin-heading">What Makes It Special</h2>
              <ul className="itin-highlights">
                {safariType.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>

            {/* Ideal for */}
            <section className="itin-section">
              <span className="itin-eyebrow">Is This You?</span>
              <h2 className="itin-heading">Perfect For</h2>
              <ul className="itin-highlights">
                {safariType.idealFor.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>

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
                <div className="itin-enquire-actions">
                  <Link
                    href={`/contact?trip=${encodeURIComponent(safariType.title)}`}
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
                {safariType.facts.map((fact) => (
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
          <h2 className="itin-related-heading">{safariType.title} You&apos;ll Love</h2>
          <div className="itin-related-grid">
            {relatedToShow.map((it) => (
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
