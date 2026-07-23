// ─────────────────────────────────────────────────────────────
//  POST: What Language Is Spoken in Uganda?
//  Informational post targeting "what language is spoken in uganda"
//  / "uganda language" — beats the competitor generalist on a
//  region-by-region map + a proper traveller phrasebook.
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

const meta = getPostMeta("what-language-is-spoken-in-uganda")!;

// FAQ data — drives the rendered <PostFaq> section and the FAQPage
// JSON-LD in app/blog/[slug]/page.tsx. Plain text (answer engines quote
// it verbatim), so any inline links were flattened to their text.
export const faq: FaqItem[] = [
  {
    q: "What is the main language spoken in Uganda?",
    a: "English is the primary official language and is used everywhere in tourism; Luganda is the most widely spoken indigenous language, especially around Kampala.",
  },
  {
    q: "Is English widely spoken in Uganda?",
    a: "Yes — it’s an official language and the common language of government, business, and travel. You can get by entirely in English.",
  },
  {
    q: "How many languages are spoken in Uganda?",
    a: "More than 40 indigenous languages, with total estimates of 70 or more, across four broad language families.",
  },
  {
    q: "Is Swahili spoken in Uganda?",
    a: "It’s an official language and understood in many areas, though less dominant in daily life than in Kenya or Tanzania. It’s handy across the wider region.",
  },
];

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        If you&rsquo;re planning a safari and wondering whether you&rsquo;ll be
        able to make yourself understood in Uganda, here&rsquo;s the reassuring
        short version: <strong>yes, easily</strong>. English is an official
        language and is spoken widely &mdash; in hotels, on safari, in shops, and
        by your guides. But that&rsquo;s only the beginning of the story, because
        Uganda is one of the most linguistically rich countries in Africa, and
        knowing what you&rsquo;ll actually hear where can make your trip far more
        rewarding.
      </p>

      <p>
        This is a traveller&rsquo;s guide to the languages of Uganda: what&rsquo;s
        official, what you&rsquo;ll hear most, which local languages belong to
        which safari region, and a handful of phrases worth packing.
      </p>

      <h2>The Short Answer</h2>

      <p>
        English is Uganda&rsquo;s main official language and the one that ties the
        country together across its many ethnic groups. It&rsquo;s the language of
        government, business, schooling, road signs, and tourism &mdash; so as a
        visitor you can travel the whole country comfortably in English alone. No
        one expects you to arrive speaking a local language. But a few words of one
        go a very long way, as we&rsquo;ll come to.
      </p>

      <h2>Uganda&rsquo;s Official Languages</h2>

      <p>
        Uganda actually has <strong>two official languages: English and
        Swahili</strong>. English dates back to the country&rsquo;s time under
        British rule and remains the primary language of officialdom. Swahili
        &mdash; the great lingua franca of East Africa &mdash; was adopted as a
        second official language in 2005, and continues to be promoted, partly to
        strengthen ties across the East African Community.
      </p>

      <p>
        One nuance often missed: Uganda has no single indigenous
        &ldquo;national&rdquo; language. With so many ethnic groups, choosing one
        local tongue over the others has always been politically sensitive, which
        is a big part of why neutral English has remained the common ground.{" "}
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: Swahili&rsquo;s official-language status and its
          rollout in schools have been the subject of renewed government pushes in
          recent years &mdash; worth a quick check that the wording still matches
          the latest position.]
        </span>
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a5a4a, #221a12)"
        label="Multilingual street signage or a market scene in Kampala"
      />

      <h2>Luganda: The Language You&rsquo;ll Hear Most</h2>

      <p>
        After English, the language you&rsquo;re most likely to hear &mdash;
        especially around Kampala and Entebbe, where most trips begin &mdash; is{" "}
        <strong>Luganda</strong>. It&rsquo;s the language of the Baganda, Uganda&rsquo;s
        largest ethnic group, and functions as an unofficial lingua franca across
        much of the central and southern parts of the country. You&rsquo;ll see it
        on signs, hear it in markets and on the radio, and pick it up in the
        rhythm of everyday greetings. If you learn a few words of any Ugandan
        language, Luganda is the most useful place to start.
      </p>

      <h2>How Many Languages Does Uganda Have?</h2>

      <p>
        A lot. Uganda is home to <strong>more than 40 indigenous languages</strong>{" "}
        &mdash; with total estimates, counting dialects and non-indigenous
        languages, running to 70 or more. They fall into a few broad families that
        also map roughly onto the country&rsquo;s geography:
      </p>

      <ul>
        <li>
          <strong>Bantu languages</strong>{" "}dominate the centre, south, and west
          &mdash; Luganda, Runyankole, Rukiga, Runyoro, Rutooro, Lusoga, Lumasaba
          and more
        </li>
        <li>
          <strong>Nilotic languages</strong>{" "}are spoken across the north and east
          &mdash; Acholi, Lango, Alur, Ateso, and Karamojong among them
        </li>
        <li>
          <strong>Central Sudanic languages</strong> such as Lugbara are found in
          the north-west (the West Nile region)
        </li>
        <li>
          <strong>Kuliak languages</strong> &mdash; a small, distinctive group in
          the remote north-east
        </li>
      </ul>

      <p>
        This diversity is the linguistic side of the same story we tell in{" "}
        <Link href="/blog/tribes-and-cultures-of-uganda">
          the tribes and cultures of Uganda
        </Link>{" "}
        &mdash; each people with its own language, and the country held together in
        English.
      </p>

      <h2>Which Language Where? A Region-by-Region Guide</h2>

      <p>
        Here&rsquo;s the part most language guides skip &mdash; matching languages
        to the places you&rsquo;ll actually travel. English works everywhere below;
        this is simply what you&rsquo;re likely to hear locally:
      </p>

      <ul>
        <li>
          <strong>Kampala &amp; Entebbe (arrival):</strong>{" "}Luganda &mdash; the
          language of the Baganda
        </li>
        <li>
          <strong>Jinja &amp; the Source of the Nile:</strong>{" "}Lusoga &mdash; the
          language of the Basoga
        </li>
        <li>
          <strong>Sipi Falls &amp; Mount Elgon (east):</strong> Lumasaba (Lugisu)
          of the Bagisu, and Kupsabiny around Kapchorwa
        </li>
        <li>
          <strong>Kibale, Fort Portal &amp; the Rwenzoris:</strong> Rutooro and
          Runyoro; Lukonzo of the Bakonzo up in the Rwenzori foothills
        </li>
        <li>
          <strong>Queen Elizabeth &amp; Lake Mburo:</strong> Runyankole of the
          Banyankole and Bahima
        </li>
        <li>
          <strong>Bwindi, Lake Bunyonyi &amp; the gorilla south-west:</strong>{" "}
          Rukiga of the Bakiga (closely related to Runyankole)
        </li>
        <li>
          <strong>Murchison Falls &amp; the north:</strong>{" "}Luo languages &mdash;
          Acholi, Lango, and Alur &mdash; and Lugbara further into the West Nile
        </li>
        <li>
          <strong>Kidepo Valley &amp; Karamoja (north-east):</strong> Karamojong,
          and Ateso toward the east
        </li>
      </ul>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY: this is a traveller-friendly generalisation of a genuinely
          complex language map &mdash; regions overlap and border areas are mixed.
          Happy to fine-tune any entry to match how you&rsquo;d describe it to
          clients.]
        </span>
      </p>

      <h2>Useful Phrases for Travellers</h2>

      <p>
        You don&rsquo;t need these &mdash; but Ugandans genuinely light up when a
        visitor tries, and greetings are culturally important here. A few words of
        Luganda around Kampala, or Swahili anywhere in East Africa, will earn you
        warm smiles. Pronunciations below are approximate:
      </p>

      <p>
        <strong>Luganda (central &amp; southern Uganda)</strong>
      </p>
      <ul>
        <li>
          <em>Oli otya?</em> &mdash; How are you? (oh-lee-OH-cha)
        </li>
        <li>
          <em>Gyendi</em> &mdash; I&rsquo;m fine (jen-dee), a common reply
        </li>
        <li>
          <em>Webale</em> &mdash; Thank you (weh-BAH-leh);{" "}
          <em>Webale nnyo</em> &mdash; thank you very much
        </li>
        <li>
          <em>Ssebo</em> / <em>Nnyabo</em> &mdash; Sir / Madam
        </li>
        <li>
          <em>Yee</em> / <em>Nedda</em> &mdash; Yes / No
        </li>
      </ul>

      <p>
        <strong>Swahili (useful across all of East Africa)</strong>
      </p>
      <ul>
        <li>
          <em>Jambo</em> or <em>Habari?</em> &mdash; Hello / How are you?
        </li>
        <li>
          <em>Asante</em> &mdash; Thank you (ah-SAHN-teh);{" "}
          <em>asante sana</em> &mdash; thank you very much
        </li>
        <li>
          <em>Karibu</em> &mdash; Welcome / You&rsquo;re welcome
        </li>
        <li>
          <em>Ndiyo</em> / <em>Hapana</em> &mdash; Yes / No
        </li>
        <li>
          <em>Safari</em> &mdash; &ldquo;journey&rdquo; &mdash; yes, the word is
          Swahili
        </li>
      </ul>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY: quick sense-check of spellings and pronunciations with a
          Luganda- or Swahili-speaking guide before publishing &mdash; tones and
          local spellings vary, and Luganda greetings in particular are more
          layered than a phrasebook can show.]
        </span>
      </p>

      <h2>Do You Actually Need to Speak the Language?</h2>

      <p>
        No. English will carry you through every part of a Uganda safari with ease,
        from the airport to the remotest lodge. Your guide will speak excellent
        English &mdash; and, very often, several local languages too, switching
        effortlessly as you cross the country. Learning a few words isn&rsquo;t
        about necessity; it&rsquo;s about connection, and it&rsquo;s one of the
        simplest ways to travel a little more kindly.
      </p>

      <PostFaq title="Uganda Language FAQ" items={faq} />

      <h2>Travel Deeper Into Uganda</h2>

      <p>
        Language is a window into a country, and Uganda&rsquo;s is unusually rich.
        If you&rsquo;d like a trip that gets you beyond the game drives and into the
        culture &mdash; a Batwa visit near Bwindi, a Karamojong community in the
        far north-east on a{" "}
        <Link href="/safaris/uganda-kidepo-valley-wilderness-safari">
          Kidepo Valley safari
        </Link>{" "}
        &mdash; tell us what interests you and we&rsquo;ll build it in. And for the
        people behind the languages, read{" "}
        <Link href="/blog/tribes-and-cultures-of-uganda">
          the tribes and cultures of Uganda
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
