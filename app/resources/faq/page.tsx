// app/resources/faq/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/app/components/LegalPageLayout";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Pick Wild Safaris",
  description:
    "Answers to common questions about African safaris — booking, best time to go, gorilla trekking, visas, health and safety, costs, packing, and travelling with children.",
  alternates: { canonical: `${BASE_URL}/resources/faq` },
  openGraph: {
    type: "article",
    url: `${BASE_URL}/resources/faq`,
    title: "Frequently Asked Questions",
    description:
      "Everything travellers ask us about planning an African safari — answered.",
    siteName: "Pick Wild Safaris",
  },
};

// Q&A content lives here once and drives both the page and the FAQPage
// structured data below, so they can never drift out of sync.
const faqCategories: { category: string; items: { q: string; a: string }[] }[] =
  [
    {
      category: "Booking & Planning",
      items: [
        {
          q: "How far in advance should I book my safari?",
          a: "We recommend booking 6 to 12 months ahead, especially for travel in peak season (June to September and December to February). Gorilla and chimpanzee permits and the best lodges are limited and sell out early, so the sooner you plan, the more choice you have.",
        },
        {
          q: "Are your safaris private or group tours?",
          a: "Every safari we run is private and tailor-made. Your itinerary, pace, vehicle, and guide are yours alone, and we design the whole trip around your interests, budget, and travel dates.",
        },
        {
          q: "How do payments work?",
          a: "We confirm your booking with a deposit, with the balance due before travel. We will share exact amounts, due dates, and secure payment options in your personalised proposal.",
        },
        {
          q: "Can you arrange flights and transfers?",
          a: "Yes. We handle internal flights, road transfers, and airport pick-ups as part of your itinerary. For international flights we are happy to advise on the best routes and timings to connect with your safari.",
        },
      ],
    },
    {
      category: "When to Travel",
      items: [
        {
          q: "When is the best time to go on safari?",
          a: "It depends on what you want to see. The dry seasons make wildlife easier to spot as animals gather at water sources, while the green seasons bring lush scenery, newborn animals, and fewer visitors. Uganda offers rewarding wildlife year-round. Tell us your priorities and we will match your dates.",
        },
        {
          q: "When is the best time for gorilla trekking?",
          a: "Gorilla trekking is possible all year. The drier months (June to September and December to February) usually mean firmer trails and easier hiking, but gorillas are seen in every season and the rainforest is green and beautiful throughout.",
        },
        {
          q: "When can I climb Kilimanjaro?",
          a: "The most reliable windows are January to mid-March and June to October, when conditions are driest and clearest. See our Climbing Mount Kilimanjaro guide for a full breakdown of routes and seasons.",
        },
      ],
    },
    {
      category: "Gorilla & Chimpanzee Trekking",
      items: [
        {
          q: "How fit do I need to be for gorilla trekking?",
          a: "A reasonable level of fitness helps. Treks can last from one to several hours over steep, muddy forest terrain at altitude, and you cannot predict exactly where the gorillas will be on any given day. If you can manage a few hours of uphill walking, you can do it. Porters are available to help carry bags and assist on the trail.",
        },
        {
          q: "How much does a gorilla permit cost?",
          a: "Permit prices are set by the national park authorities and change from time to time. As a guide, a Uganda gorilla permit is around US$800 per person and Rwanda around US$1,500, while chimpanzee permits are lower. Permits are strictly limited each day, so we secure them as soon as your trip is confirmed. We will confirm current rates with your itinerary.",
        },
        {
          q: "Am I guaranteed to see the gorillas?",
          a: "Sightings are very high but never technically guaranteed, as these are wild animals in their natural habitat. Expert trackers locate the gorilla families each morning, and the vast majority of trekkers enjoy an unforgettable hour with them.",
        },
      ],
    },
    {
      category: "Health & Safety",
      items: [
        {
          q: "Is it safe to go on safari?",
          a: "Yes. The destinations we operate in are well-established, welcoming tourism regions, and your safety is our priority. You travel with experienced local guides who know the areas intimately, and we monitor conditions continuously. Following your guide's instructions around wildlife is the most important safety rule.",
        },
        {
          q: "What vaccinations do I need?",
          a: "A yellow fever certificate is required to enter Uganda, Kenya, and Rwanda, and antimalarial precautions are strongly recommended. Visit a travel clinic 6 to 8 weeks before departure for personalised advice. See our How to Prepare for a Safari guide for full details.",
        },
        {
          q: "Do I need travel insurance?",
          a: "Yes, comprehensive travel insurance is essential and, for activities like trekking and climbing, effectively mandatory. Make sure it covers medical treatment, emergency evacuation, cancellation, and all your planned activities.",
        },
      ],
    },
    {
      category: "Visas & Documents",
      items: [
        {
          q: "Do I need a visa?",
          a: "Most visitors do. If your trip covers Uganda, Kenya, and Rwanda, the East Africa Tourist Visa is usually the best value. Tanzania requires its own separate visa. Full requirements and official application links are on our Visas & E-Resources page.",
        },
        {
          q: "How long does my passport need to be valid?",
          a: "Your passport should be valid for at least six months beyond your return date and have at least two blank pages for entry stamps and visas.",
        },
      ],
    },
    {
      category: "On Safari",
      items: [
        {
          q: "What is included in my safari?",
          a: "Your itinerary sets out exactly what is included, but private safaris typically cover accommodation, park and permit fees, a private guide and vehicle, listed meals, and transfers. International flights, visas, travel insurance, tips, and personal spending are usually separate. We spell it all out clearly in your proposal.",
        },
        {
          q: "What are the lodges and camps like?",
          a: "We work with everything from comfortable mid-range lodges to luxury tented camps, chosen for location, quality, and character. We match accommodation to your style and budget, and we are happy to mix comfort levels across a trip.",
        },
        {
          q: "Can I travel with children?",
          a: "Absolutely. Safaris can be wonderful for families, and we tailor the pace, activities, and accommodation to suit younger travellers. Note that some activities, such as gorilla trekking, have a minimum age requirement (usually 15). We will design a trip that works for your whole family.",
        },
        {
          q: "What should I pack?",
          a: "Pack light, in neutral colours, with warm layers for cool mornings and evenings. Our complete packing list and preparation guide cover everything you need, from clothing to cameras.",
        },
      ],
    },
  ];

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FaqPage() {
  return (
    <LegalPageLayout
      title="Frequently Asked Questions"
      intro={
        <p>
          Planning a safari raises plenty of questions &mdash; here are the ones
          we hear most often. Cannot find what you are looking for? Our team is
          always happy to help, so just <a href="/contact">get in touch</a>.
        </p>
      }
    >
      <FaqSchema />
      {faqCategories.map((group) => (
        <section key={group.category}>
          <h2>{group.category}</h2>
          {group.items.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      ))}

      <div className="legal-contact">
        <p>
          <strong>Still have a question?</strong>
        </p>
        <p>
          We would love to help you plan your trip.{" "}
          <a href="/contact">Contact our team</a> or explore our{" "}
          <a href="/resources/how-to-prepare-for-safari">
            How to Prepare for a Safari
          </a>{" "}
          guide.
        </p>
      </div>
    </LegalPageLayout>
  );
}
