// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPosts, getPostMeta } from "@/content/posts/index";
import type { FaqItem } from "@/content/types";
import JsonLd from "@/app/components/JsonLd";
import { ORG_ID, SITE_ID } from "@/app/layout";

const BASE_URL = "https://wildsafarisuganda.com";

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

  // SEO title/description with optional per-post overrides. `seoTitle` is a
  // plain string so the root layout's title template brands it exactly once
  // (" | Pick Wild Safaris") — do NOT re-append the brand here or it doubles.
  const seoTitle = meta.metaTitle ?? meta.title;
  const description = meta.metaDescription ?? meta.excerpt;

  return {
    title: seoTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: seoTitle,
      description,
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
      title: seoTitle,
      description,
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
    description: meta.metaDescription ?? meta.excerpt,
    image: ogImageFor(meta.coverImage),
    datePublished: meta.date,
    dateModified: meta.date,
    // Point at the site-wide entity by @id rather than restating the business,
    // so every post reinforces one organization instead of describing a new one.
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    url: `${BASE_URL}/blog/${slug}`,
    isPartOf: { "@id": SITE_ID },
    inLanguage: "en",
    // Names the real-world subject explicitly instead of leaving an answer
    // engine to infer it from the prose.
    ...(meta.topic
      ? {
          about: {
            "@type": "Thing",
            name: meta.topic.name,
            sameAs: meta.topic.wikipedia,
          },
        }
      : {}),
  };

  return (
    <JsonLd schema={schema} />
  );
}

// FAQPage JSON-LD, built from the `faq` array the post exports. This is the
// markup answer engines actually lift question/answer pairs from, so the text
// here is the same text the reader sees — never a separate summary.
function FaqSchema({ items }: { items: readonly FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <JsonLd schema={schema} />;
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
    <JsonLd schema={schema} />
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
  // Posts may also export `faq` — the same array they render via <PostFaq> —
  // which we read off the module we're already importing. Co-locating it with
  // the post keeps the schema and the visible section from drifting apart, and
  // posts that haven't been converted simply leave it undefined.
  let faq: readonly FaqItem[] | undefined;
  try {
    const mod = await import(`@/content/posts/${slug}`);
    PostContent = mod.default;
    faq = mod.faq;
  } catch {
    notFound();
  }

  return (
    <>
      <BlogPostingSchema meta={meta} slug={slug} />
      <BreadcrumbSchema title={meta.title} slug={slug} />
      {faq?.length ? <FaqSchema items={faq} /> : null}
      <PostContent />
    </>
  );
}
