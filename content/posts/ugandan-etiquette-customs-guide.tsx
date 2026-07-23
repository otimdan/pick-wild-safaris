// ─────────────────────────────────────────────────────────────
//  POST: Ugandan Etiquette — Customs & Greetings to Know Before You Go
//  Culture/planning cluster post; customs web-verified (greetings,
//  dress, photography consent, left-hand convention). LGBTQ+ legal
//  note included factually/neutrally, matching how official travel
//  advisories (gov.uk, responsibletravel.com) present it — a stable,
//  well-documented law, not a fast-moving live situation.
//  Images added later — <ImagePlaceholder> marks each photo slot.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import PostFaq from "@/app/components/PostFaq";
import { getPostMeta } from "@/content/posts/index";
import type { FaqItem } from "@/content/types";

function ImagePlaceholder({
  gradient,
  label,
}: {
  gradient: string;
  label: string;
}) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "flex-end",
        minHeight: 260,
        margin: "2rem 0",
        padding: "1rem 1.25rem",
        borderRadius: 12,
        background: gradient,
        color: "rgba(255,255,255,0.92)",
        fontSize: "0.85rem",
        fontStyle: "italic",
        letterSpacing: "0.01em",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      Image: {label}
    </span>
  );
}

const meta = getPostMeta("ugandan-etiquette-customs-guide")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "Is it rude to use my left hand?",
    a: "Traditionally, yes — use your right hand (or both) for greetings, eating, and exchanging items where possible.",
  },
  {
    q: "Do I need to dress conservatively?",
    a: "In cities, smart casual is fine; in rural areas and religious sites, covering shoulders and knees is respectful and often expected.",
  },
  {
    q: "Can I take photos of people freely?",
    a: "Always ask first — it's simple courtesy, and most people are glad to say yes.",
  },
  {
    q: "Are there legal considerations LGBTQ+ travellers should know?",
    a: "Yes — Uganda has strict laws against same-sex relationships and public affection; this is worth knowing before you travel.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Ugandans are famously warm and welcoming, and a little cultural
        awareness goes a long way toward being a respectful, well-received
        guest. None of this is complicated &mdash; mostly small courtesies
        that make a real difference to how your visit feels, both to you and
        to the people you meet.
      </p>

      <p>
        Here&rsquo;s a practical guide to etiquette, customs, and greetings in
        Uganda.
      </p>

      <h2>Greetings Matter</h2>

      <p>
        A greeting in Uganda is rarely rushed. A handshake &mdash; often
        gentler and longer-held than you might be used to &mdash; typically
        comes with a genuine &ldquo;How are you?&rdquo; before any actual
        conversation begins; skipping straight to business can come across as
        abrupt. Learning a simple greeting in a local language, even just{" "}
        <em>oli otya?</em>{" "}in Luganda, is always warmly received &mdash; we
        cover a few more phrases in{" "}
        <Link href="/blog/what-language-is-spoken-in-uganda">
          what language is spoken in Uganda
        </Link>
        . Showing deference to elders, greeting them first, is genuinely
        valued.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #5a4a3a, #1c1610)"
        label="A warm handshake greeting between a guide and a traveller"
      />

      <h2>A Few Physical Customs</h2>

      <ul>
        <li>
          <strong>Use your right hand</strong> (or both) for greetings,
          eating, and giving or receiving objects &mdash; the left hand is
          traditionally considered unclean in many communities
        </li>
        <li>
          <strong>Avoid pointing directly</strong> at someone with a single
          finger; gesturing with an open hand is considered more polite
        </li>
        <li>
          <strong>Public displays of affection</strong>{" "}between couples are
          uncommon and can draw unwanted attention &mdash; a low-key approach
          is best
        </li>
      </ul>

      <h2>What to Wear</h2>

      <p>
        In Kampala, Entebbe, and Jinja, smart casual dress is entirely normal.
        In rural areas and villages, more conservative clothing is appreciated
        &mdash; covering shoulders and knees shows respect, and is expected at
        religious sites in particular. On game drives and treks, practical
        safari clothing is what matters most; see our{" "}
        <Link href="/blog/what-to-pack-for-a-safari">
          safari packing list
        </Link>
        .
      </p>

      <h2>Photography and Consent</h2>

      <p>
        Always ask before photographing people directly &mdash; it&rsquo;s
        simple courtesy, and most people are happy to say yes when asked. Some
        individuals, particularly in community visits, may expect a small
        appreciation for being photographed, which your guide can advise on.
        Avoid photographing government buildings, military or police
        personnel, or checkpoints, which is against the law.
      </p>

      <h2>A Legal Note for LGBTQ+ Travellers</h2>

      <p>
        Uganda has strict laws criminalising same-sex relationships, and
        public displays of same-sex affection can carry serious legal risk for
        both visitors and residents. This is an important practical fact for
        any traveller to know before arriving, regardless of personal views on
        the matter &mdash; we mention it here plainly, as several official
        government travel advisories also do, simply so nobody arrives
        uninformed.
      </p>

      <h2>Visiting Communities Respectfully</h2>

      <p>
        On cultural visits &mdash; a Batwa community near Bwindi, a Karamojong
        homestead in Kidepo &mdash; follow your guide&rsquo;s lead on what&rsquo;s
        appropriate, ask before entering homes or photographing individuals,
        and remember that tourism income genuinely matters to these
        communities. We go deeper on specific communities in{" "}
        <Link href="/blog/tribes-and-cultures-of-uganda">
          the tribes and cultures of Uganda
        </Link>
        .
      </p>

      <PostFaq title="Ugandan Etiquette FAQ" items={faq} />

      <h2>Travel Respectfully, Travel Well</h2>

      <p>
        A little cultural awareness makes every interaction warmer on both
        sides. For the rest of your trip planning, see our guide to{" "}
        <Link href="/blog/planning-a-trip-to-uganda">
          planning a trip to Uganda
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
