// app/blog/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogFeatured from "./BlogFeatured";
import BlogFilter from "./BlogFilter";
import BlogGrid from "./BlogGrid";
import BlogPagination from "./BlogPagination";
import BlogNewsletter from "./BlogNewsletter";
import JsonLd from "@/app/components/JsonLd";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "Safari Travel Blog | Uganda & East Africa Tips, Stories & Guides",
  description:
    "Expert safari advice, gorilla trekking tips, packing lists, and destination guides for Uganda and East Africa. Written by the team at Pick Wild Safaris.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/blog`,
    title: "Safari Travel Blog | Pick Wild Safaris",
    description:
      "Expert safari advice, gorilla trekking tips, packing lists, and destination guides for Uganda and East Africa.",
    siteName: "Pick Wild Safaris",
    images: [
      {
        url: "https://wildsafarisuganda.com/hero-gorilla.jpg",
        width: 1200,
        height: 630,
        alt: "Uganda safari — Pick Wild Safaris blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Travel Blog | Pick Wild Safaris",
    description:
      "Expert safari advice, gorilla trekking tips, packing lists, and destination guides for Uganda and East Africa.",
  },
};

function BlogIndexSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Pick Wild Safaris Blog",
    description:
      "Safari travel tips, destination guides and stories from Uganda and East Africa.",
    url: `${BASE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Pick Wild Safaris",
      url: BASE_URL,
    },
  };

  return (
    <JsonLd schema={schema} />
  );
}

export default function BlogPage() {
  return (
    <>
      <BlogIndexSchema />
      <div className="blog-hero">
        <Navbar />
        <h1>Blog</h1>
      </div>
      <BlogFeatured />
      <section className="blog-main">
        <div id="blog-grid-anchor" className="blog-main-inner">
          <Suspense fallback={null}>
            <BlogFilter />
          </Suspense>
          <div>
            <Suspense
              fallback={
                <div
                  style={{
                    padding: "2rem",
                    color: "#888",
                    fontFamily: "var(--serif)",
                  }}
                >
                  Loading posts...
                </div>
              }
            >
              <BlogGrid />
            </Suspense>
            <Suspense fallback={null}>
              <BlogPagination />
            </Suspense>
          </div>
        </div>
      </section>
      <BlogNewsletter />
      <Footer />
    </>
  );
}
