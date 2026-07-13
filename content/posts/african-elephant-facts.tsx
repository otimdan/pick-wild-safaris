// ─────────────────────────────────────────────────────────────
//  POST: African Elephant Facts
//  Wildlife-facts cluster post; targets "african elephant facts".
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

const meta = getPostMeta("african-elephant-facts")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        No safari animal announces itself quite like the African elephant. It&rsquo;s
        the largest land animal on earth, it moves in close, intelligent family
        groups, and a close encounter with one on foot or from a boat is the kind
        of moment that stays with people for life. Here are the facts behind the
        giant &mdash; its size, its family structure, and where to see it in
        Uganda.
      </p>

      <h2>African Elephant Facts at a Glance</h2>

      <ul>
        <li>
          <strong>Largest land animal alive:</strong> bulls can stand over 3
          metres at the shoulder and weigh up to 7 tonnes
        </li>
        <li>
          <strong>Matriarchal herds:</strong> led by the oldest, most experienced
          female
        </li>
        <li>
          <strong>Remarkable memory and intelligence:</strong> among the most
          cognitively advanced animals on earth
        </li>
        <li>
          <strong>Tusks are teeth:</strong> elongated incisors that keep growing
          throughout life
        </li>
        <li>
          <strong>Uganda population:</strong> around 5,000, concentrated in
          Murchison Falls, Queen Elizabeth, and Kidepo
        </li>
      </ul>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #5a5a4a, #1c1c14)"
        label="A family herd of elephants crossing open savanna, a matriarch leading"
      />

      <h2>Size and Strength</h2>

      <p>
        A fully grown African bush elephant bull stands around 3&ndash;3.4
        metres at the shoulder and can weigh between 5 and nearly 7 tonnes
        &mdash; heavier than a fully loaded truck. Despite that bulk, elephants
        are surprisingly quiet and agile movers, walking on padded feet that
        muffle their footsteps. Their trunks alone contain tens of thousands of
        muscles, giving them the dexterity to pluck a single leaf or uproot a
        tree with equal ease.
      </p>

      <h2>Tusks</h2>

      <p>
        An elephant&rsquo;s tusks are simply very long incisor teeth, growing
        continuously throughout its life and used for digging, stripping bark,
        and fighting. They can reach well over two metres and weigh dozens of
        kilograms each &mdash; a feature that has also made elephants tragic
        targets of poaching for ivory, which is why sightings of large-tusked
        bulls are increasingly rare and valued.
      </p>

      <h2>Family Life: The Matriarch&rsquo;s Herd</h2>

      <p>
        Elephant society is built around female-led family units of roughly
        8&ndash;100 individuals: adult females, their daughters, and young sons,
        all led by an older, highly experienced <strong>matriarch</strong> whose
        memory of water sources, migration routes, and danger can span decades.
        Adult males generally leave the family group at adolescence, living
        alone or in loose bachelor groups. Elephant bonds are deep and long-lived
        &mdash; families have been observed appearing to grieve their dead, one
        of several behaviours that point to genuine emotional depth.
      </p>

      <h2>Diet &amp; Daily Life</h2>

      <p>
        An adult elephant eats an enormous amount &mdash; often well over 100 kg
        of vegetation a day, grasses, bark, roots, and fruit &mdash; and spends
        the majority of its waking hours feeding. That appetite makes elephants
        powerful &ldquo;ecosystem engineers&rdquo;: by pushing over trees and
        opening up woodland, they shape the savanna landscape for countless
        other species.
      </p>

      <h2>Where to See Elephants in Uganda</h2>

      <p>
        Uganda holds roughly 5,000 elephants, concentrated in a few key
        landscapes:
      </p>

      <ul>
        <li>
          <strong>Murchison Falls</strong> &mdash; large herds on the savanna
          north of the Nile, and along the river itself (see our{" "}
          <Link href="/blog/murchison-falls-national-park-guide">
            Murchison Falls guide
          </Link>
          )
        </li>
        <li>
          <strong>Queen Elizabeth</strong> &mdash; regularly seen along the{" "}
          <Link href="/blog/queen-elizabeth-national-park-guide">
            Kazinga Channel
          </Link>
          , some of the densest concentrations in Uganda
        </li>
        <li>
          <strong>Kidepo Valley</strong> &mdash; part of the wider Greater
          Virunga/Kidepo elephant landscape
        </li>
      </ul>

      <h2>African Elephant FAQ</h2>

      <p>
        <strong>How big is an African elephant?</strong> Bulls can stand over 3
        metres at the shoulder and weigh up to around 7 tonnes &mdash; the
        largest land animal alive.
      </p>

      <p>
        <strong>Who leads an elephant herd?</strong> The matriarch, usually the
        oldest and most experienced female, who guides the family to food,
        water, and safety.
      </p>

      <p>
        <strong>How many elephants are in Uganda?</strong> Roughly 5,000,
        concentrated mainly in Murchison Falls, Queen Elizabeth, and Kidepo.
      </p>

      <p>
        <strong>Are elephants dangerous?</strong> They can be, particularly
        lone bulls or mothers protecting calves — always follow your guide&rsquo;s
        instructions and keep a respectful distance.
      </p>

      <h2>Meet the Giants on Safari</h2>

      <p>
        Few wildlife encounters compare to a close, calm moment with an elephant
        family. Tell us which park you&rsquo;d like to see them in and we&rsquo;ll
        build it into a{" "}
        <Link href="/safaris/uganda-murchison-falls-safari">
          Murchison Falls safari
        </Link>{" "}
        or your wider Uganda itinerary.
      </p>
    </BlogPostLayout>
  );
}
