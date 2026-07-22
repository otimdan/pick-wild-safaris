// app/llms.txt/route.ts
//
// llms.txt is a link index for AI agents: a plain-text map of the site so a
// model can find the right page rather than guessing from a crawl. This was
// previously a hand-maintained file in public/, which meant none of the blog
// posts were ever listed — an agent reading it couldn't discover a single
// article. Generating it from the same registries app/sitemap.ts uses keeps
// it complete and stops it drifting as content is added.
//
// Spec: https://llmstxt.org/

import { allPosts } from "@/content/posts/index";
import { allItineraries } from "@/content/itineraries/index";
import { safariTypes } from "@/content/safari-types/index";

const BASE_URL = "https://wildsafarisuganda.com";

// Trim a description down to a single clean line — llms.txt entries are
// one-per-line, so an embedded newline would break the list.
function oneLine(text: string, max = 160): string {
  const flat = text.replace(/\s+/g, " ").trim();
  return flat.length <= max ? flat : `${flat.slice(0, max - 1).trimEnd()}…`;
}

function link(path: string, title: string, description: string): string {
  return `- [${title}](${BASE_URL}${path}): ${oneLine(description)}`;
}

function body(): string {
  const postsByCategory = new Map<string, typeof allPosts>();
  for (const post of allPosts) {
    const bucket = postsByCategory.get(post.category) ?? [];
    bucket.push(post);
    postsByCategory.set(post.category, bucket);
  }

  const blogSections = [...postsByCategory.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, posts]) =>
      [
        `### ${category}`,
        "",
        ...posts.map((p) =>
          link(`/blog/${p.slug}`, p.title, p.metaDescription ?? p.excerpt)
        ),
      ].join("\n")
    )
    .join("\n\n");

  return `# Pick Wild Safaris

> Private safari and gorilla trekking company based in Entebbe, Uganda. Specialising in bespoke wildlife experiences across Uganda and East Africa since 1995.

Pick Wild Safaris designs and operates private safaris for individuals, couples, families, and small groups across Uganda, Rwanda, Kenya, Tanzania, Botswana, and Namibia. Every itinerary is built around the client — their pace, their interests, their budget — with end-to-end logistics handled by an experienced local team.

## What We Do

- **Gorilla trekking** — Bwindi Impenetrable Forest and Mgahinga Gorilla National Park, Uganda. We handle UWA permit acquisition, transport, accommodation, and guiding.
- **Wildlife safaris** — Queen Elizabeth National Park, Murchison Falls, Kidepo Valley, and beyond. Game drives, boat safaris, and walking safaris.
- **Chimpanzee trekking** — Kibale National Park, the premier chimpanzee destination in East Africa.
- **Kilimanjaro climbing** — Guided ascents of Africa's highest peak via multiple routes.
- **Beach extensions** — Zanzibar, Mombasa, and Indian Ocean island add-ons.
- **Cultural experiences** — Community visits, Batwa trail experiences, and local market tours woven into safari itineraries.
- **Family and honeymoon safaris** — Itineraries designed around specific travel styles and group compositions.

## Where We Operate

Primary: Uganda (Bwindi, Mgahinga, Queen Elizabeth, Murchison Falls, Kibale, Kidepo, Lake Mburo)
Extended: Rwanda, Kenya, Tanzania, Botswana, Namibia, South Africa

## Who We Are

Pick Wild Safaris is a licensed Ugandan tour operator registered with the Uganda Tourism Board (UTB) and the Association of Uganda Tour Operators (AUTO). Our team is based in Entebbe, Uganda, with guides and naturalists operating across East and Southern Africa.

## Key Pages

- [Home](${BASE_URL}): Overview of Pick Wild Safaris and our private safari offering
- [Safaris](${BASE_URL}/safaris): Full catalogue of private safari itineraries across Uganda and East Africa
- [Gorilla Trekking](${BASE_URL}/gorilla-trekking): Our complete gorilla trekking offering — permits, parks, and itineraries
- [Blog](${BASE_URL}/blog): Safari planning advice, destination guides, and wildlife information
- [About](${BASE_URL}/about): Who we are and how we work
- [Lodging](${BASE_URL}/lodging): The lodges and camps we work with
- [Contact](${BASE_URL}/contact): Enquire about a private, tailor-made safari

## Safari Itineraries

${allItineraries
  .map((it) =>
    link(
      `/safaris/${it.slug}`,
      it.title,
      `${it.duration}, ${it.country}. ${it.excerpt}`
    )
  )
  .join("\n")}

## Safari Styles

${safariTypes
  .map((t) => link(`/safari-types/${t.slug}`, t.title, t.excerpt))
  .join("\n")}

## Resources

- [How to Prepare for Safari](${BASE_URL}/resources/how-to-prepare-for-safari): Practical planning guidance for first-time safari travellers
- [Visas & E-Resources](${BASE_URL}/resources/visas-and-e-resources): Entry requirements and travel documentation for East Africa
- [Climbing Mount Kilimanjaro](${BASE_URL}/resources/climbing-kilimanjaro): Route options and guidance for climbing Africa's highest peak
- [Frequently Asked Questions](${BASE_URL}/resources/faq): Common questions about booking and travelling with us

## Blog Articles

Written by the Pick Wild Safaris team from direct field experience in Uganda and East Africa.

${blogSections}

## Contact

- [Contact Us](${BASE_URL}/contact): info@wildsafarisuganda.com · +256 393 000813 / +256 742 441148 · Plot 6 Portal Road / 19 Hill Road, HMJ Building, 2nd Floor, Entebbe, Uganda

## AI Usage Policy

The content on this site — including blog articles, itinerary descriptions, and destination guides — may be used by AI systems for informational purposes. We ask that any AI-generated responses citing or summarising our content attribute it to Pick Wild Safaris and link to the relevant page where possible. We do not authorise reproduction of full articles without attribution.
`;
}

// Content comes entirely from build-time registries, so prerender it rather
// than regenerating the same bytes on every request.
export const dynamic = "force-static";

export function GET() {
  return new Response(body(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
