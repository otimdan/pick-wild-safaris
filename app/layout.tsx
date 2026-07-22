// app/layout.tsx
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { PostHogProvider } from "./providers";
import JsonLd from "./components/JsonLd";

const BASE_URL = "https://wildsafarisuganda.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// Only load analytics in production so local dev traffic stays out of the stats.
const ANALYTICS_ENABLED = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pick Wild Safaris | Private African Safaris, Expertly Guided",
    template: "%s | Pick Wild Safaris",
  },
  description:
    "Private safaris designed for you. Expertly crafted gorilla trekking, wildlife, and adventure experiences across Uganda and East Africa.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Pick Wild Safaris",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pickwildsafaris",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Site-wide entity graph.
//
// Both nodes carry a stable `@id` so every other page can point at them by
// reference instead of restating the business. That is what lets search and
// answer engines merge all our pages into a single known entity rather than
// treating each page's org block as a separate company.
//
// Exported so other routes can reference the same identifiers.
export const ORG_ID = `${BASE_URL}/#organization`;
export const SITE_ID = `${BASE_URL}/#website`;

function SiteEntitySchema() {
  const organization = {
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: "Pick Wild Safaris",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/pick-wild-safaris.png`,
    },
    image: `${BASE_URL}/pick-wild-safaris.png`,
    description:
      "Private safaris designed for you. Gorilla trekking, wildlife safaris, and adventure travel across Uganda and East Africa.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Plot 6 Portal Road / 19 Hill Road, HMJ Building, 2nd Floor",
      addressLocality: "Entebbe",
      addressCountry: "UG",
    },
    telephone: ["+256393000813", "+256742441148"],
    email: "info@wildsafarisuganda.com",
    // Only verified profiles belong here — a sameAs that 404s is a negative
    // trust signal, so leave one out until its real URL is confirmed.
    sameAs: [
      "https://www.facebook.com/pickwildsafaris",
      "https://www.instagram.com/pickwildsafaris",
    ],
    areaServed: [
      "Uganda",
      "Rwanda",
      "Kenya",
      "Tanzania",
      "Botswana",
      "Namibia",
    ],
    knowsAbout: [
      "Gorilla trekking",
      "Chimpanzee trekking",
      "Wildlife safaris",
      "Bird watching",
      "Kilimanjaro climbing",
      "Uganda travel",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: BASE_URL,
    name: "Pick Wild Safaris",
    description:
      "Private safaris designed for you. Expertly crafted gorilla trekking, wildlife, and adventure experiences across Uganda and East Africa.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };

  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@graph": [organization, website],
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <SiteEntitySchema />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
      {ANALYTICS_ENABLED && GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
