// ─────────────────────────────────────────────────────────────
//  POST: Planning a Trip to Uganda — A First-Timer's Guide
//  Commercial-intent planning post targeting "uganda trip" (100)
//  (competitor experienceuganda.com). Funnels to /safaris + /contact.
//  Visa/yellow-fever facts web-verified (e-visa $50, YF mandatory).
//  Images later — <ImagePlaceholder> marks each photo slot.
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

const meta = getPostMeta("planning-a-trip-to-uganda")!;

export default function Post() {
  return (
    <BlogPostLayout meta={meta}>
      <p>
        Planning a trip to Uganda for the first time can feel like a lot &mdash;
        gorilla permits, visas, yellow fever certificates, which parks, how many
        days. The good news is that it&rsquo;s far simpler than it looks, and
        Uganda rewards the effort like almost nowhere else: it&rsquo;s the only
        place on earth where you can trek mountain gorillas and chimpanzees and go
        on a classic savanna safari, all in one trip.
      </p>

      <p>
        Here&rsquo;s a clear, first-timer&rsquo;s guide to planning a Uganda trip
        &mdash; when to go, how long you need, the practical paperwork, and how to
        put it all together.
      </p>

      <h2>When to Go</h2>

      <p>
        Uganda is a year-round destination, but the <strong>dry seasons &mdash;
        roughly June to September and December to February</strong> &mdash; are
        generally the easiest for trekking and game drives, with firmer forest
        trails and better wildlife viewing. The green &ldquo;low&rdquo; seasons
        bring lush landscapes, fewer visitors, and (in low season) a cheaper
        gorilla permit. We break the year down month by month in{" "}
        <Link href="/blog/best-time-to-visit-uganda">
          the best time to visit Uganda
        </Link>
        .
      </p>

      <h2>How Long Do You Need?</h2>

      <ul>
        <li>
          <strong>3&ndash;4 days</strong> &mdash; a focused gorilla-trekking trip,
          often flying in and out
        </li>
        <li>
          <strong>7&ndash;10 days</strong> &mdash; the sweet spot: gorillas plus a
          savanna park or two and chimps in Kibale
        </li>
        <li>
          <strong>12&ndash;14+ days</strong> &mdash; a comprehensive loop taking in
          the gorillas, multiple parks, and the remote north
        </li>
      </ul>

      <p>
        Uganda&rsquo;s parks are spread out and roads can be slow, so it&rsquo;s
        better to see fewer places well than to race between them. A good operator
        will build in realistic drive times &mdash; or fly you between parks to
        save a day.
      </p>

      <ImagePlaceholder
        gradient="linear-gradient(160deg, #5a6a3a, #1c2410)"
        label="A safari vehicle on a red-dirt road winding through green Uganda hills"
      />

      <h2>Visas &amp; Entry Requirements</h2>

      <p>
        The essentials, verified at the time of writing:
      </p>

      <ul>
        <li>
          <strong>Tourist e-visa:</strong> most visitors need one, applied for
          online in advance &mdash; the single-entry Uganda tourist e-visa costs{" "}
          <strong>USD $50</strong>. If you&rsquo;re combining Uganda with Kenya
          and Rwanda, the <strong>East Africa Tourist Visa</strong> (around USD
          $100) covers all three.
        </li>
        <li>
          <strong>Yellow fever certificate:</strong> mandatory &mdash; you must be
          vaccinated at least 10 days before arrival and carry the certificate.
        </li>
        <li>
          <strong>Passport:</strong> valid for at least six months beyond entry,
          with blank pages.
        </li>
      </ul>

      <p>
        <span style={{ opacity: 0.75 }}>
          [VERIFY / KEEP CURRENT: government visa fees and rules change &mdash;
          Uganda tourist e-visa $50 single-entry and East Africa Tourist Visa
          ~$100 at time of writing, applied via the official immigration portal.
          Yellow fever certificate is mandatory. Confirm current figures before
          relying on them.]
        </span>
      </p>

      <h2>Health &amp; Safety</h2>

      <p>
        Uganda is a malaria area, so antimalarial medication and insect
        precautions are strongly advised &mdash; speak to a travel clinic well
        before you go, as they&rsquo;ll also advise on routine and recommended
        vaccinations. Otherwise, Uganda is a warm, welcoming country to travel in;
        as anywhere, use normal common sense in cities, and follow your
        guide&rsquo;s instructions around wildlife. Comprehensive travel insurance
        that covers your activities is a must.{" "}
        <span style={{ opacity: 0.75 }}>
          [VERIFY: keep health guidance general and current; travellers should
          confirm requirements with an official travel-health source for their
          country.]
        </span>
      </p>

      <h2>What Will It Cost?</h2>

      <p>
        Uganda can be done on a range of budgets, but it&rsquo;s worth knowing
        where the money goes. The one fixed, unavoidable cost on a gorilla trip is
        the permit &mdash; <strong>USD $800</strong> per person in peak season,
        set by the government. Beyond that, your total depends on trip length,
        the standard of lodges, and whether you drive or fly between parks. Rather
        than quote package prices here, we&rsquo;ll build a trip to your budget
        &mdash; just ask.
      </p>

      <h2>What to Pack</h2>

      <p>
        Layers, neutral colours, sturdy boots for trekking, a good rain jacket,
        and a decent camera cover most of it &mdash; and the gorilla trek has a few
        specifics worth getting right. Our full{" "}
        <Link href="/blog/what-to-pack-for-a-safari">safari packing list</Link>{" "}
        covers exactly what to bring (and what to leave at home).
      </p>

      <h2>Putting the Trip Together</h2>

      <p>
        A classic first Uganda itinerary strings together the gorillas of Bwindi,
        chimps in Kibale, and a savanna park like Queen Elizabeth or Murchison
        Falls. From there you can add the remote north (Kidepo), the Nile at
        Jinja, or the culture and scenery of the east. See how the pieces fit on
        our{" "}
        <Link href="/safaris">Uganda &amp; East Africa safaris</Link>, and for the
        wildlife you&rsquo;ll meet, browse{" "}
        <Link href="/blog/african-safari-animals">African safari animals</Link>.
      </p>

      <h2>Planning a Uganda Trip FAQ</h2>

      <p>
        <strong>How many days do you need in Uganda?</strong> Around 7&ndash;10
        days is ideal for gorillas plus a savanna park and chimps; a focused
        gorilla trip can be done in 3&ndash;4.
      </p>

      <p>
        <strong>Do I need a visa for Uganda?</strong> Most visitors do &mdash; a
        single-entry tourist e-visa (USD $50) applied for online, or the East
        Africa Tourist Visa if combining countries.
      </p>

      <p>
        <strong>Is a yellow fever certificate required?</strong> Yes &mdash;
        it&rsquo;s mandatory, and must date from at least 10 days before arrival.
      </p>

      <p>
        <strong>Is Uganda safe for tourists?</strong> Uganda is a popular,
        welcoming safari destination; travel with a reputable operator, use normal
        precautions, and follow your guide&rsquo;s advice around wildlife.
      </p>

      <h2>Start Planning</h2>

      <p>
        The best Uganda trips are built around the traveller, not squeezed into a
        template. Tell us your dates, how long you have, and what you most want to
        see, and we&rsquo;ll turn it into a{" "}
        <Link href="/safaris">tailor-made Uganda safari</Link> &mdash;{" "}
        <Link href="/contact">get in touch</Link> and we&rsquo;ll take it from
        there.
      </p>
    </BlogPostLayout>
  );
}
