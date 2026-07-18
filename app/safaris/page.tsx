// app/safaris/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { allItineraries } from "@/content/itineraries/index";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "Safaris & Itineraries | Private Uganda & East Africa Tours",
  description:
    "Browse our private, expertly guided safari itineraries across Uganda, Kenya, Tanzania and East Africa — from the Great Migration to gorilla trekking. Every trip tailored around you.",
  alternates: { canonical: `${BASE_URL}/safaris` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/safaris`,
    title: "Safaris & Itineraries | Pick Wild Safaris",
    description:
      "Private, expertly guided safari itineraries across Uganda and East Africa — from the Great Migration to gorilla trekking.",
    siteName: "Pick Wild Safaris",
  },
};

export default async function SafarisPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  const filtered = country
    ? allItineraries.filter((it) =>
        it.country.toLowerCase().includes(country.toLowerCase()),
      )
    : allItineraries;

  return (
    <>
      <div style={{ position: "relative" }}>
        <Navbar />
      </div>

      <header className="legal-hero">
        <h1>{country ? `${country} Safaris` : "Our Safaris"}</h1>
        <p className="legal-updated">
          {country ? (
            <>
              Private, expertly guided journeys in {country} —{" "}
              <Link href="/safaris">view all safaris</Link>
            </>
          ) : (
            "Private, expertly guided journeys — tailored around you"
          )}
        </p>
      </header>

      <section className="safaris-section">
        <div className="safaris-grid">
          {filtered.map((it) => (
            <Link
              key={it.slug}
              className="safari-card"
              href={`/safaris/${it.slug}`}
            >
              <div className="safari-img-wrap">
                {it.badge && <span className="safari-badge">{it.badge}</span>}
                <div
                  className="safari-img-fallback"
                  style={{ background: it.heroFallback }}
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
                <div className="safari-info">
                  <span className="safari-country">{it.country}</span>
                  <h3 className="safari-title">{it.title}</h3>
                  <span className="safari-days">{it.duration}</span>
                </div>
              </div>
              <div className="safari-cta">View Details</div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
