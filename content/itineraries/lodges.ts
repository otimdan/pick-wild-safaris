// ─────────────────────────────────────────────────────────────
//  ACCOMMODATION — SINGLE SOURCE OF TRUTH
//  One lodge/camp name per stop. Every itinerary in `index.ts`
//  reads its `accommodation` values from here, so swapping in a
//  new property for a given stop updates every itinerary that
//  uses that stop at once.
//
//  A handful of entries below are already confirmed — they match
//  the accommodation already live on the `uganda-gorilla-wildlife-
//  safari` page and/or named explicitly in a source itinerary doc.
//  The rest are still "TBC" placeholders; replace them when the
//  real property is confirmed — nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const LODGES = {
  kampala: "Lodge TBC — Kampala",
  entebbe: "Protea Hotel Entebbe", // confirmed — live on uganda-gorilla-wildlife-safari
  jinja: "Lodge TBC — Jinja",
  sipiFalls: "Lodge TBC — Sipi Falls",
  murchisonFalls: "Lodge TBC — Murchison Falls NP",
  hoima: "Lodge TBC — Hoima",
  fortPortal: "Lodge TBC — Fort Portal / Semuliki",
  kibale: "Primates Lodge Kibale", // confirmed — live on uganda-gorilla-wildlife-safari
  queenElizabeth: "Mweya Safari Lodge", // confirmed — live page + named in the fly-in source doc
  bwindi: "Buhoma Lodge", // confirmed — live on uganda-gorilla-wildlife-safari
  lakeMutanda: "Lodge TBC — Lake Mutanda",
  lakeBunyonyi: "BirdNest Resort", // confirmed — live on uganda-gorilla-wildlife-safari
  lakeMburo: "Lodge TBC — Lake Mburo NP",
  kitgum: "Lodge TBC — Kitgum",
  kidepo: "Apoka Safari Lodge", // confirmed — named in the Kidepo source doc
} as const;
