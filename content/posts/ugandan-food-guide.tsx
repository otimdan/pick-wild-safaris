// ─────────────────────────────────────────────────────────────
//  POST: What to Eat in Uganda — A Food Guide for Travellers
//  Culture cluster post; targets "ugandan food / what to eat in
//  uganda". Dishes web-verified (matoke, luwombo, rolex, posho,
//  groundnut sauce).
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

const meta = getPostMeta("ugandan-food-guide")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Between game drives and gorilla treks, food is one of the easiest,
        most enjoyable ways to connect with Uganda &mdash; hearty, comforting,
        and full of flavours you won&rsquo;t find anywhere else. Here&rsquo;s
        what to look for on the menu, from the everyday staple to the street
        food you&rsquo;ll wish you could bring home.
      </p>

      <h2>Matoke: The National Staple</h2>

      <p>
        If Uganda has one defining dish, it&rsquo;s <strong>matoke</strong>{" "}
        &mdash; green cooking bananas peeled, steamed, and mashed into a soft,
        savoury paste, traditionally wrapped and cooked in banana leaves. It&rsquo;s
        the everyday base of countless meals, usually served alongside
        groundnut sauce, beef stew, or beans, and it&rsquo;s worth trying at
        least once on any Uganda trip &mdash; simple, filling, and genuinely
        central to daily life here.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #6a7a2a, #202808)"
        label="A plate of matoke with groundnut sauce, wrapped in banana leaf"
      />

      <h2>Luwombo: The Royal Dish</h2>

      <p>
        For something more special, seek out <strong>luwombo</strong> &mdash;
        a rich stew of meat, chicken, or mushrooms, slow-cooked inside a sealed
        banana-leaf parcel, which keeps the dish tender and infuses it with a
        subtle, earthy flavour. Believed to have originated in the royal
        kitchens of the Buganda kingdom, luwombo remains a dish reserved for
        weddings, celebrations, and special occasions &mdash; a proper treat if
        you find it on a menu.
      </p>

      <h2>Rolex: Uganda&rsquo;s Favourite Street Food</h2>

      <p>
        No food guide to Uganda is complete without the <strong>rolex</strong>{" "}
        &mdash; not a watch, but a rolled chapati stuffed with fried eggs,
        tomato, onion, and cabbage, cooked fresh at street stalls across the
        country. The name comes simply from &ldquo;rolled eggs.&rdquo; It&rsquo;s
        cheap, filling, and endlessly satisfying &mdash; and watching one being
        made on a sizzling griddle is half the fun. Kampala&rsquo;s streets, in
        particular, are the best place to try one; see our{" "}
        <Link href="/blog/kampala-city-guide">Kampala city guide</Link>.
      </p>

      <h2>Posho and Everyday Staples</h2>

      <p>
        Alongside matoke, <strong>posho</strong> (a stiff, filling maize
        porridge, similar to ugali elsewhere in East Africa) is a daily staple
        across the country, usually paired with a sauce or stew. Rice, sweet
        potatoes, and cassava round out the everyday carbohydrate lineup, and{" "}
        <strong>groundnut sauce</strong> &mdash; a rich, creamy peanut-based
        sauce &mdash; is a beloved accompaniment to almost any of them.
      </p>

      <h2>Fresh Fish and Grilled Meat</h2>

      <p>
        Given Uganda&rsquo;s lakes and the Nile running through it, fresh
        tilapia is widely available and particularly good around Jinja and
        Lake Victoria (see our{" "}
        <Link href="/blog/jinja-source-of-the-nile-guide">
          Jinja guide
        </Link>
        ). Grilled meat &mdash; goat, chicken, and beef &mdash; is also a
        staple at roadside stalls and local restaurants, often served with a
        simple side of chapati or plantain.
      </p>

      <h2>Eating Well on Safari</h2>

      <p>
        Most lodges serve a blend of international and local dishes, so
        you&rsquo;ll always have familiar options &mdash; but asking for
        matoke, luwombo, or a proper Ugandan breakfast is a great way to eat
        more locally during your trip, and most kitchens are happy to oblige.
      </p>

      <h2>Ugandan Food FAQ</h2>

      <p>
        <strong>What is Uganda&rsquo;s national dish?</strong> Matoke &mdash;
        steamed, mashed green bananas &mdash; is the closest thing to a
        national staple, eaten daily across the country.
      </p>

      <p>
        <strong>What is a rolex?</strong> Uganda&rsquo;s favourite street food
        &mdash; a chapati rolled around fried eggs and vegetables, named for
        &ldquo;rolled eggs.&rdquo;
      </p>

      <p>
        <strong>Is Ugandan food spicy?</strong> Generally mild and comforting
        rather than spicy, built around starchy staples, stews, and sauces.
      </p>

      <p>
        <strong>Where can I try luwombo?</strong> Look for it at cultural
        restaurants or ask your lodge in advance &mdash; it&rsquo;s a special
        dish, not always on a standard menu.
      </p>

      <h2>Taste Your Way Through Uganda</h2>

      <p>
        Food is one of the simplest, most rewarding ways to experience Uganda
        beyond the parks. Tell us if you&rsquo;d like a culinary or market
        experience built into your{" "}
        <Link href="/safaris">Uganda safari</Link>.
      </p>
    </BlogPostLayout>
  );
}
