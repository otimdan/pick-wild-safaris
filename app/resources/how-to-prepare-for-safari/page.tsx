// app/resources/how-to-prepare-for-safari/page.tsx
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import LegalPageLayout from "@/app/components/LegalPageLayout";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "How to Prepare for a Safari",
  description:
    "A first-timer's guide to preparing for an African safari: vaccinations, visas, packing, fitness, money, tipping, and what to expect on game drives.",
  alternates: { canonical: `${BASE_URL}/resources/how-to-prepare-for-safari` },
  openGraph: {
    type: "article",
    url: `${BASE_URL}/resources/how-to-prepare-for-safari`,
    title: "How to Prepare for a Safari",
    description:
      "Everything you need to do before your African safari — health, documents, packing, money, fitness, and etiquette.",
    siteName: "Pick Wild Safaris",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PrepareForSafariPage() {
  return (
    <LegalPageLayout
      title="How to Prepare for a Safari"
      intro={
        <>
          <p>
            A safari is an unforgettable trip &mdash; but a little planning turns
            a good adventure into a seamless one. This guide walks you through
            everything to sort out before you fly, from vaccinations and visas to
            what actually belongs in your bag.
          </p>
          <p>
            Because you travel with us privately, our team handles the heavy
            lifting: permits, park fees, transfers, and expert guides. Your job is
            simply to arrive prepared. Here is how.
          </p>
        </>
      }
    >
      <h2>1. Book Early &amp; Choose the Right Season</h2>
      <p>
        The best lodges, camps, and gorilla or chimpanzee permits sell out months
        ahead &mdash; especially in peak season (June to September and December to
        February). We recommend booking <strong>6 to 12 months in advance</strong>{" "}
        for the widest choice, and even earlier for gorilla trekking, where daily
        permits are strictly limited.
      </p>
      <p>
        When you travel shapes what you see. The dry seasons make wildlife easier
        to spot as animals gather around water and trails stay passable, while the
        green seasons bring lush scenery, newborn animals, and fewer crowds. Our
        team will match your dates to your priorities.
      </p>

      <h2>2. Health &amp; Vaccinations</h2>
      <p>
        Visit a travel clinic or your doctor <strong>at least 6&ndash;8 weeks
        before departure</strong> to allow time for any vaccines to take effect.
        Common recommendations for East Africa include:
      </p>
      <ul>
        <li>
          <strong>Yellow fever</strong> &mdash; a vaccination certificate is
          required to enter Uganda, Kenya, and Rwanda. Carry the yellow card with
          your passport.
        </li>
        <li>
          <strong>Malaria prophylaxis</strong> &mdash; most safari regions are
          malaria zones. Ask your doctor about antimalarial tablets and start them
          on schedule.
        </li>
        <li>
          Routine and recommended vaccines such as hepatitis A and B, typhoid,
          tetanus, and (depending on your itinerary) rabies.
        </li>
      </ul>
      <p>
        Bring any personal medication in your carry-on, in its original
        packaging, with enough for the whole trip plus a few spare days.
      </p>

      <h2>3. Travel Insurance</h2>
      <p>
        Comprehensive travel insurance is essential &mdash; and for some
        activities, mandatory. Make sure your policy covers medical treatment,
        emergency evacuation, trip cancellation, and your planned activities
        (including trekking at altitude if you are climbing Kilimanjaro or
        trekking gorillas). Keep the policy number and emergency line saved on
        your phone and printed in your bag.
      </p>

      <h2>4. Visas &amp; Travel Documents</h2>
      <p>
        Most travellers need a visa. The <strong>East Africa Tourist Visa</strong>{" "}
        is often the smartest option if your trip spans Uganda, Kenya, and Rwanda.
        Check the full requirements and official application links on our{" "}
        <a href="/resources/visas-and-e-resources">Visas &amp; E-Resources</a>{" "}
        page.
      </p>
      <ul>
        <li>
          Ensure your passport is valid for at least <strong>6 months</strong>{" "}
          beyond your return date and has two or more blank pages.
        </li>
        <li>Apply for e-visas well ahead &mdash; do not leave it to the airport.</li>
        <li>
          Keep digital and printed copies of your passport, visa, insurance, and
          flight details, stored separately from the originals.
        </li>
      </ul>

      <h2>5. What to Pack</h2>
      <p>
        Pack light, in neutral colours, and in a soft duffel rather than a hard
        suitcase (light aircraft on some circuits have strict weight limits, often
        around 15 kg). Our full checklist lives here:{" "}
        <a href="/blog/what-to-pack-for-a-safari">
          What to Pack for a Safari: The Complete Packing List
        </a>
        . The essentials:
      </p>
      <ul>
        <li>
          Neutral, layerable clothing (khaki, olive, brown) &mdash; mornings are
          cold, middays hot. Avoid bright colours and camouflage.
        </li>
        <li>
          A warm fleece or jacket, a wide-brimmed hat, sunglasses, and a light
          rain layer.
        </li>
        <li>Sturdy, broken-in walking shoes or boots for treks.</li>
        <li>
          Binoculars, a good camera with spare batteries and memory cards, and a
          power bank.
        </li>
        <li>
          High-SPF sunscreen, insect repellent (DEET), a personal first-aid kit,
          and hand sanitiser.
        </li>
        <li>
          A universal travel adapter (Uganda, Kenya, and Rwanda use UK-style
          type G plugs, 240V).
        </li>
      </ul>

      <h2>6. Money &amp; Tipping</h2>
      <p>
        The US dollar is widely accepted for tourism &mdash; but bring{" "}
        <strong>clean notes printed in 2013 or later</strong>, as older or worn
        bills are often refused. Carry a mix of small and large denominations, and
        some local currency for markets and tips. Cards work in cities and larger
        lodges, but do not rely on ATMs in remote areas.
      </p>
      <p>
        Tipping is customary and genuinely appreciated. As a rough guide, budget
        for your safari guide, lodge staff, and trekking porters or rangers. We
        will share specific, up-to-date suggestions with your final itinerary.
      </p>

      <h2>7. Fitness &amp; What to Expect</h2>
      <p>
        Most game drives require no special fitness &mdash; but active experiences
        do. Gorilla and chimpanzee trekking can involve several hours of hiking
        through steep, muddy forest, and climbing Kilimanjaro is a serious
        multi-day trek at altitude. If your trip includes these, build up your
        walking and cardio in the weeks beforehand. A reasonable baseline of
        fitness makes every moment more enjoyable.
      </p>

      <h2>8. Photography &amp; Connectivity</h2>
      <p>
        Bring more storage than you think you need and a zoom lens if wildlife
        photography matters to you. Most lodges have Wi-Fi and charging, though it
        can be limited in remote camps &mdash; treat the disconnection as part of
        the escape. A local SIM or eSIM is inexpensive if you want reliable data.
      </p>

      <h2>9. Travel Responsibly</h2>
      <p>
        Africa&apos;s wild places survive because visitors help protect them.
        Please follow your guide&apos;s instructions, keep a respectful distance
        from wildlife, never feed animals, stay on designated tracks and trails,
        and take nothing but photographs. Supporting local communities and
        conservation is at the heart of every trip we run.
      </p>

      <h2>Your Pre-Departure Checklist</h2>
      <ul>
        <li>Passport valid 6+ months, with blank pages</li>
        <li>Visa or East Africa Tourist Visa approved and printed</li>
        <li>Yellow fever certificate and any other vaccinations done</li>
        <li>Antimalarial tablets and personal medication packed</li>
        <li>Comprehensive travel insurance arranged</li>
        <li>Flights, transfers, and itinerary confirmed</li>
        <li>Neutral clothing, layers, and broken-in footwear</li>
        <li>Clean US dollar notes (2013 or newer) plus some local currency</li>
        <li>Camera, binoculars, adapters, and power bank</li>
      </ul>

      <div className="legal-contact">
        <p>
          <strong>Still have questions?</strong>
        </p>
        <p>
          Our team is happy to help you prepare for every detail of your trip.{" "}
          <a href="/contact">Get in touch</a> or read our{" "}
          <a href="/resources/faq">Frequently Asked Questions</a>.
        </p>
      </div>
    </LegalPageLayout>
  );
}
