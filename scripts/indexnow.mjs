#!/usr/bin/env node
// Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam,
// Naver, Yep — NOT Google; keep using Search Console for Google).
//
// Usage:
//   node scripts/indexnow.mjs            # submit all sitemap URLs
//   node scripts/indexnow.mjs --dry-run  # print URLs, submit nothing
//   node scripts/indexnow.mjs <url> ...  # submit only the URLs you list
//
// The key file (public/<KEY>.txt) must already be deployed and reachable at
// https://<HOST>/<KEY>.txt, or IndexNow rejects the batch (403). HOST and the
// submitted URLs must share the same host as that key file.

const HOST = process.env.INDEXNOW_HOST ?? "wildsafarisuganda.com";
const KEY = process.env.INDEXNOW_KEY ?? "631d7c9bde66f1c4ade2dcb3b6eb7226";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow"; // fans out to all engines

const dryRun = process.argv.includes("--dry-run");
const explicitUrls = process.argv.slice(2).filter((a) => a.startsWith("http"));

async function sitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`sitemap ${SITEMAP_URL} -> HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const urls = explicitUrls.length ? explicitUrls : await sitemapUrls();

  // IndexNow requires every URL to be on the same host as the key file.
  const wrongHost = urls.filter((u) => new URL(u).host !== HOST);
  if (wrongHost.length) {
    console.error(
      `Refusing to submit: ${wrongHost.length} URL(s) are not on ${HOST}, e.g. ${wrongHost[0]}`,
    );
    process.exit(1);
  }

  console.log(`${urls.length} URL(s) for ${HOST}`);
  if (dryRun) {
    for (const u of urls) console.log("  " + u);
    console.log("\n(dry run — nothing submitted)");
    return;
  }

  // IndexNow accepts up to 10,000 URLs per request; batch to stay well under.
  const BATCH = 1000;
  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    });
    const hint =
      {
        200: "OK — accepted",
        202: "Accepted — key validation pending",
        400: "Bad request — check payload",
        403: "Forbidden — key file not found/valid at " + KEY_LOCATION,
        422: "Unprocessable — URLs don't match host, or key mismatch",
        429: "Too many requests — slow down",
      }[res.status] ?? "see status";
    console.log(`Submitted ${urlList.length} URL(s) -> HTTP ${res.status} (${hint})`);
    if (res.status >= 400) process.exit(1);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
