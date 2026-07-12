// app/resources/visas-and-e-resources/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/app/components/LegalPageLayout";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "Visas & E-Resources for East Africa | Pick Wild Safaris",
  description:
    "Visa requirements and official e-visa links for Uganda, Kenya, Rwanda, and Tanzania — including the East Africa Tourist Visa, yellow fever rules, and how to apply online.",
  alternates: {
    canonical: `${BASE_URL}/resources/visas-and-e-resources`,
  },
  openGraph: {
    type: "article",
    url: `${BASE_URL}/resources/visas-and-e-resources`,
    title: "Visas & E-Resources for East Africa",
    description:
      "How to get your visa for Uganda, Kenya, Rwanda, and Tanzania — official portals, costs, and the East Africa Tourist Visa explained.",
    siteName: "Pick Wild Safaris",
  },
};

export default function VisasPage() {
  return (
    <LegalPageLayout
      title="Visas & E-Resources"
      intro={
        <>
          <p>
            Almost every visitor to East Africa needs a visa, and the good news is
            that most are now issued online before you travel. This page explains
            your options country by country and links you straight to the official
            government portals.
          </p>
          <p>
            <strong>Always apply through official government websites only.</strong>{" "}
            Many look-alike sites charge inflated fees for the same service. If you
            are unsure, ask us &mdash; we help our travellers navigate this every
            day.
          </p>
        </>
      }
    >
      <h2>The East Africa Tourist Visa</h2>
      <p>
        If your trip covers <strong>Uganda, Kenya, and Rwanda</strong>, the{" "}
        <strong>East Africa Tourist Visa (EATV)</strong> is usually the best
        value. It is a single multiple-entry visa that lets you move freely
        between all three countries.
      </p>
      <ul>
        <li>
          <strong>Cost:</strong> around US$100
        </li>
        <li>
          <strong>Validity:</strong> 90 days, multiple entry
        </li>
        <li>
          <strong>Important:</strong> you must apply through the country you will
          enter first, and you cannot leave the three-country zone and return on
          the same visa.
        </li>
      </ul>
      <p>
        If you are only visiting one country, a standard single-country tourist
        visa is simpler and cheaper. Tanzania is not part of the EATV and always
        requires its own visa.
      </p>

      <h2>Visa Requirements by Country</h2>
      <p>
        Fees, validity, and rules change from time to time. The figures below are
        a general guide &mdash; always confirm the current requirements on the
        official portal before you apply.
      </p>
      <div className="legal-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Tourist Visa</th>
              <th>Approx. Cost</th>
              <th>Validity</th>
              <th>How to Apply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uganda</td>
              <td>Single-entry e-visa</td>
              <td>US$50</td>
              <td>90 days</td>
              <td>Online e-visa (apply before travel)</td>
            </tr>
            <tr>
              <td>Kenya</td>
              <td>Electronic Travel Authorisation (eTA)</td>
              <td>Varies</td>
              <td>90 days</td>
              <td>Online eTA (required for all visitors)</td>
            </tr>
            <tr>
              <td>Rwanda</td>
              <td>e-visa / visa on arrival</td>
              <td>US$50</td>
              <td>30 days</td>
              <td>Online or on arrival</td>
            </tr>
            <tr>
              <td>Tanzania</td>
              <td>Single-entry e-visa</td>
              <td>US$50*</td>
              <td>90 days</td>
              <td>Online e-visa (apply before travel)</td>
            </tr>
            <tr>
              <td>East Africa (UG + KE + RW)</td>
              <td>East Africa Tourist Visa</td>
              <td>US$100</td>
              <td>90 days, multiple entry</td>
              <td>Apply via first country of entry</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <em>
          *US citizens are charged a higher rate (around US$100) for the Tanzania
          visa. Rates for all countries are subject to change.
        </em>
      </p>

      <h2>Official Application Portals</h2>
      <p>
        Apply directly through these official government sites &mdash; never a
        third-party reseller:
      </p>
      <ul>
        <li>
          <strong>Uganda:</strong>{" "}
          <a
            href="https://visas.immigration.go.ug"
            target="_blank"
            rel="noopener noreferrer"
          >
            visas.immigration.go.ug
          </a>{" "}
          (Uganda e-visa &amp; East Africa Tourist Visa)
        </li>
        <li>
          <strong>Kenya:</strong>{" "}
          <a
            href="https://www.etakenya.go.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            etakenya.go.ke
          </a>{" "}
          (Electronic Travel Authorisation)
        </li>
        <li>
          <strong>Rwanda:</strong>{" "}
          <a
            href="https://irembo.gov.rw"
            target="_blank"
            rel="noopener noreferrer"
          >
            irembo.gov.rw
          </a>{" "}
          (Rwanda e-visa)
        </li>
        <li>
          <strong>Tanzania:</strong>{" "}
          <a
            href="https://visa.immigration.go.tz"
            target="_blank"
            rel="noopener noreferrer"
          >
            visa.immigration.go.tz
          </a>{" "}
          (Tanzania e-visa)
        </li>
      </ul>

      <h2>Yellow Fever &amp; Health Documents</h2>
      <p>
        A <strong>yellow fever vaccination certificate</strong> is required to
        enter Uganda, Kenya, and Rwanda, and is often checked at the border. Get
        vaccinated at least 10 days before travel and carry the yellow
        certificate with your passport. See our{" "}
        <a href="/resources/how-to-prepare-for-safari">
          How to Prepare for a Safari
        </a>{" "}
        guide for full health and vaccination advice.
      </p>

      <h2>Before You Apply &mdash; Checklist</h2>
      <ul>
        <li>Passport valid for at least 6 months beyond your return date</li>
        <li>Two or more blank passport pages</li>
        <li>A recent passport-style digital photo</li>
        <li>Your travel dates and first country of entry confirmed</li>
        <li>A card for the online payment</li>
        <li>Yellow fever certificate ready to upload or present</li>
      </ul>

      <div className="legal-contact">
        <p>
          <strong>Need a hand with your visa?</strong>
        </p>
        <p>
          We guide every traveller through the right visa for their route.{" "}
          <a href="/contact">Contact our team</a> and we will point you to exactly
          what you need.
        </p>
        <p>
          <em>
            This page is general guidance, not official immigration advice.
            Requirements change &mdash; always confirm with the official portal or
            the relevant embassy before you travel.
          </em>
        </p>
      </div>
    </LegalPageLayout>
  );
}
