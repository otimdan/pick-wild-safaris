// ─────────────────────────────────────────────────────────────
//  POST: Traditional Music & Dance of Uganda
//  Culture cluster post; instruments/dances web-verified (adungu,
//  endingidi, entenga, bakisimba, kadodi, bwola, ekitaguriro).
//  Images added later — <ImagePlaceholder> marks each photo slot.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import { getPostMeta } from "@/content/posts/index";

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

const meta = getPostMeta("traditional-music-dance-uganda")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        With more than 56 tribes, Uganda holds an extraordinary range of
        traditional music and dance &mdash; each community with its own
        instruments, rhythms, and movements, many still performed at
        ceremonies, weddings, and cultural festivals today. A cultural
        evening on a Uganda trip is one of the most memorable ways to
        experience this living heritage.
      </p>

      <p>
        Here&rsquo;s an introduction to Uganda&rsquo;s traditional music and
        dance: the instruments, the dances, and where to see them performed.
      </p>

      <h2>Traditional Instruments</h2>

      <ul>
        <li>
          <strong>Adungu</strong> &mdash; an eight-stringed arched harp, used
          by the Alur and Acholi peoples of northern Uganda, with a warm,
          resonant sound
        </li>
        <li>
          <strong>Endingidi</strong> &mdash; a one-stringed fiddle played with
          a bow, found across several central and western regions
        </li>
        <li>
          <strong>Entenga</strong> &mdash; a set of tuned royal drums from the
          Buganda court, played in interlocking patterns by several musicians
          at once
        </li>
        <li>
          <strong>Amadinda/akadinda</strong> &mdash; wooden xylophones, also
          rooted in Buganda court music, played with the same interlocking
          technique
        </li>
        <li>
          <strong>Engalabi</strong> &mdash; a tall, narrow-waisted drum used
          widely in dance accompaniment
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #7a4a2a, #241808)"
        label="Traditional drummers and dancers performing at a Ugandan cultural event"
      />

      <h2>Bakisimba: The Signature Dance of Buganda</h2>

      <p>
        Perhaps Uganda&rsquo;s best-known traditional dance,{" "}
        <strong>bakisimba</strong> comes from the Kiganda tradition of the
        Buganda kingdom &mdash; a joyful, hip-driven dance performed to
        distinctive drumming, said to have originated as a celebration of a
        king&rsquo;s enjoyment of banana beer. It remains a staple of Ugandan
        cultural performances and celebrations today, instantly recognisable
        by its rolling hip movement and energetic drumbeat.
      </p>

      <h2>Regional Dances Across Uganda</h2>

      <p>
        Nearly every region has its own signature dance, tied closely to
        identity and ceremony:
      </p>

      <ul>
        <li>
          <strong>Kadodi</strong>, from the Bagisu people of eastern Uganda,
          traditionally performed during male circumcision ceremonies to
          encourage the initiate&rsquo;s courage
        </li>
        <li>
          <strong>Bwola and larakaraka</strong>, from the Acholi in northern
          Uganda &mdash; the latter traditionally a courtship dance
        </li>
        <li>
          <strong>Runyege/ntogoro</strong>, from the Batooro and Banyoro in
          the west
        </li>
        <li>
          <strong>Ekitaguriro</strong>, from the cattle-keeping Banyankore,
          echoing the movement of long-horned Ankole cattle
        </li>
      </ul>

      <p>
        This regional richness mirrors the same diversity we cover in{" "}
        <Link href="/blog/tribes-and-cultures-of-uganda">
          the tribes and cultures of Uganda
        </Link>{" "}
        and{" "}
        <Link href="/blog/what-language-is-spoken-in-uganda">
          what language is spoken in Uganda
        </Link>{" "}
        &mdash; each community&rsquo;s music, dance, and language forming one
        connected cultural identity.
      </p>

      <h2>Where to Experience It on Safari</h2>

      <p>
        Many lodges and community tourism projects host cultural evenings with
        live drumming and dance, and a visit to a Batwa, Karamojong, or Bahima
        community can include traditional performance as part of a respectful
        cultural exchange. It&rsquo;s one of the most vivid, joyful ways to
        experience Uganda beyond its wildlife.
      </p>

      <h2>Traditional Music &amp; Dance FAQ</h2>

      <p>
        <strong>What is Uganda&rsquo;s most famous traditional dance?</strong>{" "}
        Bakisimba, from the Buganda kingdom, is probably the best known and
        most widely performed.
      </p>

      <p>
        <strong>What instruments are used in Ugandan traditional
        music?</strong> Instruments like the adungu (harp), endingidi
        (fiddle), and various drums and xylophones, varying by region and
        ethnic group.
      </p>

      <p>
        <strong>Can travellers see traditional performances?</strong> Yes
        &mdash; many lodges and community tourism projects host cultural
        evenings featuring live music and dance.
      </p>

      <p>
        <strong>Is dance tied to specific ceremonies?</strong> Often, yes
        &mdash; kadodi accompanies circumcision ceremonies, larakaraka is
        traditionally a courtship dance, and many others mark weddings or
        cultural celebrations.
      </p>

      <h2>Add a Cultural Evening to Your Trip</h2>

      <p>
        Live drumming and dance are one of the most joyful ways to experience
        Uganda&rsquo;s culture. Tell us and we&rsquo;ll build a cultural
        evening into your{" "}
        <Link href="/safaris">Uganda safari</Link>.
      </p>
    </BlogPostLayout>
  );
}
