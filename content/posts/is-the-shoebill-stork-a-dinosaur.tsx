// ─────────────────────────────────────────────────────────────
//  POST: Is the Shoebill Stork a Dinosaur?
//  Informational deep-dive targeting the "shoebill / dinosaur bird"
//  keyword cluster, bridging to Pick Wild's Uganda birding safaris.
//  Images to be added later — inline <ImagePlaceholder> renders a
//  gradient card marking where each photo should go.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import BlogPostLayout from "@/app/components/BlogPostLayout";
import { getPostMeta } from "@/content/posts/index";

// Gradient placeholder card standing in for a photo not yet added.
// Delete the wrapper and drop a <PostImage src=…/> in when ready.
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

const meta = getPostMeta("is-the-shoebill-stork-a-dinosaur")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        The first time most people see a photo of a shoebill, they assume it&rsquo;s
        fake. It stands up to a metre and a half tall, wears a bill shaped like a
        wooden clog, and fixes the camera with a pale, unblinking, faintly
        murderous stare. It looks less like a living bird than something that
        should have gone extinct with the dinosaurs &mdash; which is exactly why
        one of the most-searched questions about it is whether it actually{" "}
        <em>is</em> one.
      </p>

      <p>
        Here&rsquo;s the honest answer to that question &mdash; the one most
        articles dodge &mdash; along with everything else worth knowing about
        this swamp giant: how big it really is, what it eats, why it isn&rsquo;t
        as terrifying as it looks, how many are left, and, because we run birding
        trips to the one wetland where you&rsquo;re almost certain to meet one,
        exactly where and when to see a shoebill in the wild.
      </p>

      <h2>What Exactly Is a Shoebill?</h2>

      <p>
        The shoebill (<em>Balaeniceps rex</em>) is a large wading bird of Central
        and East African freshwater swamps. Its name comes from the obvious
        feature: that massive, shoe-shaped bill. You&rsquo;ll also see it called
        the &ldquo;whale-headed stork&rdquo; or simply &ldquo;whalehead,&rdquo;
        and in Arabic <em>abu markub</em> &mdash; &ldquo;father of the shoe.&rdquo;
      </p>

      <p>
        Despite the &ldquo;stork&rdquo; label, it isn&rsquo;t a true stork at
        all. For birdwatchers it sits near the very top of the global
        &ldquo;most wanted&rdquo; list &mdash; a genuinely strange, hard-to-find
        species that people plan entire trips around. And Uganda is its
        stronghold, which is where the story gets interesting for anyone hoping
        to see one.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #3a4a4a, #12201c)"
        label="Portrait of a shoebill in papyrus swamp, showing the clog-shaped bill and pale eye"
      />

      <h2>Is the Shoebill Stork a Dinosaur?</h2>

      <p>
        Short answer: not in the way people usually mean &mdash; but there&rsquo;s
        a genuine twist that makes the question smarter than it sounds.
      </p>

      <p>
        The shoebill is <strong>not</strong> a leftover from the age of
        dinosaurs. It isn&rsquo;t a surviving pterosaur, it didn&rsquo;t coexist
        with <em>T. rex</em>, and it&rsquo;s no more a direct relic of the
        Mesozoic than a pigeon is. Its prehistoric look is a coincidence of size,
        that reptilian yellow eye, the hooked bill, and its habit of standing
        dead still for minutes at a time.
      </p>

      <p>
        Now the twist: <strong>birds genuinely are dinosaurs.</strong> Modern
        science places all birds within the theropod dinosaurs &mdash; the same
        lineage as <em>Velociraptor</em> and <em>T. rex</em>. So in the strict
        scientific sense, every living bird is an avian dinosaur, and the shoebill
        is exactly as much a &ldquo;living dinosaur&rdquo; as a sparrow or a
        chicken. It just happens to <em>look</em> the part far more convincingly
        than either.
      </p>

      <p>
        As for its actual family tree: genetic studies place the shoebill in the
        order Pelecaniformes, alongside pelicans and herons, in a family all its
        own (Balaenicipitidae). Its closest living relative is the hamerkop, a
        far smaller brown wading bird. So it&rsquo;s not a stork, not a dinosaur
        in the Hollywood sense, and not quite like anything else alive &mdash;
        which is a large part of the appeal.
      </p>

      <h2>How Big Is a Shoebill?</h2>

      <p>
        Big enough to stop you mid-sentence when one stands up. Shoebills are
        among the tallest flying birds on earth, and up close the scale of the
        bill is genuinely startling.
      </p>

      <ul>
        <li>
          <strong>Height:</strong> typically 110&ndash;140 cm (about
          3.6&ndash;4.6 ft), with large individuals reaching 152 cm &mdash;
          roughly five feet
        </li>
        <li>
          <strong>Wingspan:</strong> around 2.3&ndash;2.6 m (7.5&ndash;8.5 ft)
        </li>
        <li>
          <strong>Weight:</strong> roughly 4&ndash;7 kg (9&ndash;15 lb)
        </li>
        <li>
          <strong>Bill:</strong> up to about 24 cm long and unusually wide, with
          a sharp hooked tip &mdash; the whole reason for the name
        </li>
      </ul>

      <h2>What Does a Shoebill Eat, and How Does It Hunt?</h2>

      <p>
        The shoebill is an ambush predator of swamps, and its favourite prey
        tells you why it hangs around Uganda&rsquo;s papyrus channels: lungfish
        and catfish, the air-breathing fish that come to the surface in
        oxygen-poor swamp water. It will also take tilapia, water snakes, frogs,
        monitor lizards, and &mdash; on the larger end &mdash; baby crocodiles
        and turtles.
      </p>

      <p>
        Its hunting style is unforgettable to watch. A shoebill will stand
        utterly motionless for long stretches, head lowered, giving the famous
        &ldquo;death stare&rdquo; down into the water. When prey surfaces, it
        pitches its entire body forward in a violent lunge birders call the
        &ldquo;collapse,&rdquo; scooping up fish, water, and vegetation together,
        then using the sharp edges of that bill to decapitate the catch before
        swallowing. All that patience, and then a fraction of a second of chaos.
      </p>

      <h2>Is the Shoebill Dangerous? Its Strange Behaviour</h2>

      <p>
        It looks like it wants to hurt you. It doesn&rsquo;t. For all the menace
        of that stare, shoebills are not known to attack people &mdash; they&rsquo;re
        famously calm and tolerant, and captive birds are even documented
        &ldquo;bowing&rdquo; to keepers they recognise. On a quiet canoe approach,
        a wild shoebill will often simply hold its ground and watch you, which is
        precisely what makes the encounter so extraordinary.
      </p>

      <p>A few things that make its behaviour genuinely odd:</p>

      <ul>
        <li>
          <strong>They&rsquo;re loners.</strong> Even a breeding pair will often
          feed at opposite ends of their territory, and the birds are usually
          seen singly.
        </li>
        <li>
          <strong>They&rsquo;re mostly silent</strong> &mdash; but when they do
          make noise, they clatter the two halves of the bill together in a
          rapid burst that&rsquo;s often compared to a machine gun.
        </li>
        <li>
          <strong>They practise siblicide.</strong> A female usually lays two
          eggs, but the stronger, older chick typically outcompetes and kills the
          younger one, and the parents raise a single chick. It&rsquo;s bleak, but
          it&rsquo;s normal for the species.
        </li>
      </ul>

      <h2>How Many Shoebills Are Left?</h2>

      <p>
        Not many, and that&rsquo;s part of what makes seeing one feel like such a
        privilege. The shoebill is listed as <strong>Vulnerable</strong> on the
        IUCN Red List, with a wild population commonly estimated at roughly
        5,000&ndash;8,000 birds &mdash; though estimates vary and the number of
        breeding adults is lower.{" "}
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: if you want to cite a single figure, confirm which source
          you&rsquo;d like to stand behind &mdash; IUCN/BirdLife estimates the
          range above; some tour sites quote 3,000&ndash;5,000.]
        </span>
      </p>

      <p>
        Its range spans the swamps of South Sudan, Uganda, the eastern
        Democratic Republic of the Congo, and Zambia&rsquo;s Bangweulu wetlands,
        with smaller numbers elsewhere in the region. The main threats are all
        human: the drainage and conversion of wetlands, disturbance at nesting
        sites, and illegal capture of eggs and chicks for the exotic-bird trade.
        Low-impact, respectful birding tourism &mdash; the kind that gives these
        swamps an economic reason to stay wet &mdash; is one of the quiet forces
        working in the shoebill&rsquo;s favour.
      </p>

      <h2>Where to See a Shoebill in Uganda</h2>

      <p>
        This is where Uganda earns its reputation. If seeing a shoebill in the
        wild is on your list, the country offers arguably the best odds on earth
        &mdash; concentrated in a handful of accessible wetlands.
      </p>

      <p>
        <strong>Mabamba Bay Wetland</strong> is the headline. A Ramsar-listed
        swamp on the northern shore of Lake Victoria, it sits only about an
        hour&rsquo;s drive from Entebbe International Airport, and it&rsquo;s
        widely considered the single most reliable place in the world to find a
        shoebill. You explore it the way the fishermen do &mdash; gliding through
        narrow papyrus channels in a dugout canoe, with a local guide reading the
        water for that unmistakable grey silhouette. It&rsquo;s the centrepiece
        of{" "}
        <Link href="/safaris/uganda-gorilla-birding-safari">
          our Uganda birding safari
        </Link>
        , and because it&rsquo;s so close to Entebbe it also makes a perfect
        first or last morning of almost any trip.
      </p>

      <p>
        <strong>Murchison Falls National Park</strong> is the other classic. Where
        the Victoria Nile spills into Lake Albert, the delta shelters shoebills
        among the papyrus, and they&rsquo;re spotted on the boat cruises there &mdash;
        a very different, more expansive setting than the intimate Mabamba canoe.
        It slots naturally into{" "}
        <Link href="/safaris/uganda-murchison-falls-safari">
          a Murchison Falls safari
        </Link>{" "}
        alongside the park&rsquo;s big game and the falls themselves.
      </p>

      <p>
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: do you want to state a sighting success rate or any kind
          of &ldquo;likely to see&rdquo; claim for Mabamba? If so, give me the
          wording you&rsquo;re comfortable standing behind &mdash; I won&rsquo;t
          invent a statistic.]
        </span>
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #2f5d4a, #0e2a20)"
        label="Dugout canoe gliding through papyrus channels at Mabamba Bay, shoebill in the reeds"
      />

      <h2>When to Go &amp; What a Shoebill Safari Is Actually Like</h2>

      <p>
        Shoebills are present in Uganda&rsquo;s wetlands year-round, so there is
        no closed season for seeing one. The best time of day matters more than
        the month: an <strong>early-morning</strong> start gives you calmer
        water, cooler air, and more active birds, which is why Mabamba trips
        usually launch not long after dawn. Timing your wider trip around{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>{" "}
        is really about the rest of your itinerary &mdash; the shoebill will be
        there either way.
      </p>

      <p>
        The experience itself is unlike any other African wildlife moment. There
        are no engines and no crowds &mdash; just the slow push of a canoe pole,
        the rustle of papyrus, and your guide scanning the channels. It can take
        twenty minutes or it can take a couple of patient hours; the swamp
        doesn&rsquo;t run to schedule. But when you finally round a bend and find
        a shoebill standing motionless a few metres away, five feet of
        prehistoric stillness staring straight back at you, most people simply
        stop talking.
      </p>

      <p>
        <span style={{ opacity: 0.75 }}>
          [NEEDS INPUT: do you offer a standalone half-day Mabamba shoebill trip
          from Entebbe/Kampala (separate from the full birding safari)? If so,
          I&rsquo;ll add it here with a link &mdash; and let me know if you want a
          &ldquo;from $X&rdquo; price mentioned or kept off, per your usual
          policy.]
        </span>
      </p>

      <h2>Shoebill FAQ</h2>

      <p>
        <strong>Is the shoebill stork a dinosaur?</strong> Not a surviving
        prehistoric one &mdash; but since all birds descend from theropod
        dinosaurs, it&rsquo;s technically an avian dinosaur, just like every other
        bird. It only <em>looks</em> more the part than most.
      </p>

      <p>
        <strong>Is the shoebill dangerous to humans?</strong> No. Despite the
        intimidating appearance, shoebills are not known to attack people and are
        strikingly tolerant of a calm, respectful approach.
      </p>

      <p>
        <strong>How rare is the shoebill?</strong> Genuinely rare &mdash; a
        Vulnerable species with only a few thousand left in the wild, which is
        why dedicated birders travel a long way to see one.
      </p>

      <p>
        <strong>Can you see shoebills year-round in Uganda?</strong> Yes. They
        live in the wetlands permanently, so any time of year can work; early
        morning is the prime window.
      </p>

      <p>
        <strong>How tall is a shoebill?</strong> Usually 110&ndash;140 cm, with
        the biggest birds reaching about 152 cm &mdash; roughly five feet tall.
      </p>

      <h2>See One for Yourself</h2>

      <p>
        A shoebill is one of those animals that photographs can&rsquo;t quite
        prepare you for &mdash; the scale, the stillness, the sense that
        you&rsquo;re looking at something far older than you are. If you&rsquo;d
        like to meet one, the Mabamba swamp is only an hour from where most Uganda
        trips begin, and it pairs beautifully with gorillas, chimps, and big-game
        country on{" "}
        <Link href="/safaris/uganda-gorilla-birding-safari">
          our Uganda birding safari
        </Link>
        . Tell us what you&rsquo;d love to see and our planners will build the
        trip around it.
      </p>
    </BlogPostLayout>
  );
}
