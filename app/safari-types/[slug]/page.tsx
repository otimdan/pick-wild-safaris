// app/safari-types/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { safariTypes, getSafariType } from "@/content/safari-types/index";
import SafariTypeLayout from "@/app/components/SafariTypeLayout";
import JsonLd from "@/app/components/JsonLd";

const BASE_URL = "https://wildsafarisuganda.com";

export function generateStaticParams() {
  return safariTypes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const safariType = getSafariType(slug);
  if (!safariType) return {};

  const url = `${BASE_URL}/safari-types/${slug}`;

  return {
    title: safariType.title,
    description: safariType.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: safariType.title,
      description: safariType.excerpt,
      siteName: "Pick Wild Safaris",
    },
    twitter: {
      card: "summary_large_image",
      title: safariType.title,
      description: safariType.excerpt,
    },
  };
}

// JSON-LD breadcrumb so search engines see this as part of the site hierarchy.
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
        item: `${BASE_URL}/safari-types/${slug}`,
      },
    ],
  };

  return (
    <JsonLd schema={schema} />
  );
}

export default async function SafariTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const safariType = getSafariType(slug);
  if (!safariType) notFound();

  return (
    <>
      <BreadcrumbSchema title={safariType.title} slug={slug} />
      <SafariTypeLayout safariType={safariType} />
    </>
  );
}
