// app/safaris/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allItineraries, getItinerary } from "@/content/itineraries/index";
import ItineraryLayout from "@/app/components/ItineraryLayout";

const BASE_URL = "https://wildsafarisuganda.com";

// Absolute image URL for social/SEO metadata, falling back to the site
// hero when an itinerary has no image of its own.
const ogImageFor = (src?: string) =>
  src
    ? src.startsWith("http")
      ? src
      : `${BASE_URL}${src}`
    : `${BASE_URL}/hero-gorilla.jpg`;

export function generateStaticParams() {
  return allItineraries.map((it) => ({ slug: it.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const it = getItinerary(slug);
  if (!it) return {};

  const url = `${BASE_URL}/safaris/${slug}`;

  return {
    title: `${it.title} | Pick Wild Safaris`,
    description: it.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: it.title,
      description: it.excerpt,
      siteName: "Pick Wild Safaris",
      images: [
        { url: ogImageFor(it.heroImage), width: 1200, height: 630, alt: it.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: it.title,
      description: it.excerpt,
      images: [ogImageFor(it.heroImage)],
    },
  };
}

// JSON-LD: a safari is a TouristTrip with a day-by-day sub-trip list.
function TouristTripSchema({
  it,
  slug,
}: {
  it: NonNullable<ReturnType<typeof getItinerary>>;
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: it.title,
    description: it.excerpt,
    image: ogImageFor(it.heroImage),
    url: `${BASE_URL}/safaris/${slug}`,
    touristType: "Safari",
    provider: {
      "@type": "TravelAgency",
      name: "Pick Wild Safaris",
      url: BASE_URL,
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: it.days.length,
      itemListElement: it.days.map((day, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristDestination",
          name: `${day.label}: ${day.title}`,
          description: day.body.join(" "),
        },
      })),
    },
    ...(it.priceFrom
      ? {
          offers: {
            "@type": "Offer",
            description: it.priceFrom,
            priceCurrency: "USD",
            url: `${BASE_URL}/safaris/${slug}`,
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ title, slug }: { title: string; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Safaris",
        item: `${BASE_URL}/safaris`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${BASE_URL}/safaris/${slug}`,
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

export default async function ItineraryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const itinerary = getItinerary(slug);
  if (!itinerary) notFound();

  return (
    <>
      <TouristTripSchema it={itinerary} slug={slug} />
      <BreadcrumbSchema title={itinerary.title} slug={slug} />
      <ItineraryLayout itinerary={itinerary} />
    </>
  );
}
