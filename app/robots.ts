// app/robots.ts
import type { MetadataRoute } from "next";

// AI crawlers come in two kinds and it's worth keeping them labelled:
//
//   Retrieval bots fetch a page live when someone asks a question, and are the
//   ones that decide whether we can be *cited* in an AI answer. Blocking these
//   removes us from ChatGPT / Claude / Perplexity results entirely.
//
//   Training bots scrape in bulk to train models. Allowing them builds brand
//   familiarity in the models themselves, at the cost of our writing feeding
//   corpora we don't control.
//
// We allow both. `User-agent: *` already permits them implicitly, but naming
// them keeps that a deliberate choice rather than a default we might silently
// lose if a crawler changes its assumptions.
const AI_RETRIEVAL_BOTS = [
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT fetching a page on a user's behalf
  "Claude-SearchBot", // Claude search index
  "Claude-User", // Claude fetching a page on a user's behalf
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity live fetch
];

const AI_TRAINING_BOTS = [
  "GPTBot", // OpenAI
  "ClaudeBot", // Anthropic
  "Google-Extended", // Gemini / Vertex grounding
  "Applebot-Extended", // Apple Intelligence
  "Meta-ExternalAgent", // Meta
  "Amazonbot", // Amazon
  "CCBot", // Common Crawl
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      ...[...AI_RETRIEVAL_BOTS, ...AI_TRAINING_BOTS].map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: "https://wildsafarisuganda.com/sitemap.xml",
  };
}
