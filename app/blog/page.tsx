// app/blog/page.tsx
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogFeatured from "./BlogFeatured";
import BlogFilter from "./BlogFilter";
import BlogGrid from "./BlogGrid";
import BlogPagination from "./BlogPagination";
import BlogNewsletter from "./BlogNewsletter";

const BASE_URL = "https://pickwildsafaris.com";

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
        url: "https://goodearthtours.com/wp-content/uploads/2025/08/uganda-buffalo.jpg",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
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
        <div className="blog-main-inner">
          <BlogFilter />
          <div>
            <BlogGrid />
            <BlogPagination />
          </div>
        </div>
      </section>
      <BlogNewsletter />
      <Footer />
    </>
  );
}
