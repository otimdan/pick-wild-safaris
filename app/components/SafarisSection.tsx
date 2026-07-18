import Link from "next/link";
import Image from "next/image";
import { allItineraries } from "@/content/itineraries/index";

// Curated homepage picks, in display order — best of Uganda first, then a
// Kenya safari, then the East Africa (Serengeti/Ngorongoro Crater) migration
// route. Pulled live from allItineraries so this can never drift out of sync
// the way the old hand-typed list did (dead links, no images).
const FEATURED_SLUGS = [
  "uganda-gorilla-wildlife-safari",
  "uganda-complete-gorilla-wildlife-safari",
  "uganda-kidepo-valley-wilderness-safari",
  "uganda-gorilla-tracking-safari",
  "kenya-amboseli-meru-masai-mara-safari",
  "east-africa-mara-serengeti-migration",
];

const safaris = FEATURED_SLUGS.map((slug) =>
  allItineraries.find((it) => it.slug === slug),
).filter((it): it is NonNullable<typeof it> => Boolean(it));

export default function SafarisSection() {
  return (
    <section className="safaris-section">
      <h2 className="safaris-heading">Our Favorite Safaris</h2>
      <div className="safaris-grid">
        {safaris.map((safari) => (
          <Link
            key={safari.slug}
            className="safari-card"
            href={`/safaris/${safari.slug}`}
          >
            <div className="safari-img-wrap">
              {safari.badge && (
                <span className="safari-badge">{safari.badge}</span>
              )}
              <div
                className="safari-img-fallback"
                style={{ background: safari.heroFallback }}
              />
              {safari.heroImage && (
                <Image
                  src={safari.heroImage}
                  alt={safari.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
              <div className="safari-info">
                <span className="safari-country">{safari.country}</span>
                <h3 className="safari-title">{safari.title}</h3>
                <span className="safari-days">{safari.duration}</span>
              </div>
            </div>
            <div className="safari-cta">View Details</div>
          </Link>
        ))}
      </div>
      <div className="safaris-load-more">
        <Link href="/safaris" className="load-more-btn">
          Load More Safaris
        </Link>
      </div>
    </section>
  );
}
