// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPosts, getPostMeta } from "@/content/posts/index";

const BASE_URL = "https://pickwildsafaris.com";

// Absolute image URL for social/SEO metadata, falling back to the site
// hero when a post has no cover image of its own.
const ogImageFor = (src?: string) =>
  src
    ? src.startsWith("http")
      ? src
      : `${BASE_URL}${src}`
    : `${BASE_URL}/hero-gorilla.jpg`;

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};

  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title: `${meta.title} | Pick Wild Safaris Blog`,
    description: meta.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: meta.title,
      description: meta.excerpt,
      siteName: "Pick Wild Safaris",
      publishedTime: meta.date,
      authors: ["Pick Wild Safaris"],
      images: [
        {
          url: ogImageFor(meta.coverImage),
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.excerpt,
      images: [ogImageFor(meta.coverImage)],
    },
  };
}

// JSON-LD structured data for Google rich results
function BlogPostingSchema({
  meta,
  slug,
}: {
  meta: ReturnType<typeof getPostMeta> & {};
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.excerpt,
    image: ogImageFor(meta.coverImage),
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      "@type": "Organization",
      name: "Pick Wild Safaris",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Pick Wild Safaris",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    url: `${BASE_URL}/blog/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb JSON-LD
function BreadcrumbSchema({ title, slug }: { title: string; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${BASE_URL}/blog/${slug}`,
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  let PostContent: React.ComponentType;
  try {
    const mod = await import(`@/content/posts/${slug}`);
    PostContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <>
      <BlogPostingSchema meta={meta} slug={slug} />
      <BreadcrumbSchema title={meta.title} slug={slug} />
      <PostContent />
    </>
  );
}
