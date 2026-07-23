// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import LegalPageLayout from "@/app/components/LegalPageLayout";

const BASE_URL = "https://wildsafarisuganda.com";
const UPDATED = "5 July 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pick Wild Safaris collects, uses, shares, and protects your personal information when you use our website and book a safari.",
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/privacy-policy`,
    title: "Privacy Policy",
    description:
      "How Pick Wild Safaris collects, uses, and protects your personal information.",
    siteName: "Pick Wild Safaris",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      updated={UPDATED}
      intro={
        <>
          <p>
            This Privacy Policy explains how Pick Wild Safaris (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) collects, uses, shares, and
            protects your personal information when you visit{" "}
            <strong>wildsafarisuganda.com</strong>, enquire about a trip, or travel
            with us.
          </p>
          <p>
            By using our website or services, you agree to the practices
            described here. If you do not agree, please do not use the site.
          </p>
        </>
      }
    >
      <h2>1. Who We Are</h2>
      <p>
        Pick Wild Safaris is a licensed tour operator based in Entebbe, Uganda,
        arranging private safaris and trekking experiences across Uganda,
        Rwanda, Kenya, Tanzania, Botswana, and Namibia. We are the data
        controller responsible for your personal information.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect information in three ways:</p>
      <h3>Information you give us</h3>
      <ul>
        <li>
          Contact details — name, email address, phone number, and postal
          address
        </li>
        <li>
          Booking and travel details — passport details, date of birth,
          nationality, dietary requirements, medical or accessibility needs, and
          emergency contacts
        </li>
        <li>
          Payment information processed by our secure third-party payment
          providers (we do not store full card numbers ourselves)
        </li>
        <li>
          Any information you share in enquiries, messages, reviews, or
          newsletter sign-ups
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          Device and usage data such as IP address, browser type, pages viewed,
          and the date and time of your visit
        </li>
        <li>Data collected through cookies and similar technologies</li>
      </ul>
      <h3>Information from third parties</h3>
      <p>
        We may receive information from travel partners, referral sources, or
        social media platforms where you have interacted with us.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use your personal information to:</p>
      <ul>
        <li>Respond to your enquiries and prepare safari proposals</li>
        <li>
          Arrange, confirm, and manage your bookings — including flights,
          accommodation, permits, and activities
        </li>
        <li>Process payments and send booking confirmations and invoices</li>
        <li>Provide customer support before, during, and after your trip</li>
        <li>
          Send you marketing communications and newsletters where you have
          opted in (you can unsubscribe at any time)
        </li>
        <li>Improve our website, services, and customer experience</li>
        <li>Comply with legal, tax, and regulatory obligations</li>
      </ul>

      <h2>4. Cookies &amp; Analytics</h2>
      <p>
        Our website uses cookies — small files stored on your device — to keep
        the site working, remember your preferences, and understand how visitors
        use our pages. We use analytics tools such as Google Analytics to measure
        website traffic in aggregate.
      </p>
      <p>
        You can control or disable cookies through your browser settings.
        Disabling some cookies may affect how parts of the site function.
      </p>

      <h2>5. How We Share Your Information</h2>
      <p>
        We do not sell your personal information. We share it only as needed to
        deliver your trip and run our business:
      </p>
      <ul>
        <li>
          <strong>Travel suppliers</strong> — lodges, camps, airlines, ground
          operators, park authorities, and permit offices, in order to fulfil
          your booking
        </li>
        <li>
          <strong>Service providers</strong> — payment processors, IT and
          hosting providers, and email or marketing platforms who act on our
          behalf
        </li>
        <li>
          <strong>Legal and safety reasons</strong> — where required by law, to
          protect our rights, or to respond to an emergency
        </li>
      </ul>
      <p>
        We require these parties to protect your information and use it only for
        the purposes we specify.
      </p>

      <h2>6. International Transfers</h2>
      <p>
        Because your trip may span several countries, your information may be
        transferred to and processed in destinations outside Uganda or the
        European Economic Area, including by the suppliers who host your safari.
        Where we transfer data internationally, we take reasonable steps to
        ensure it remains protected.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We keep your personal information only for as long as necessary to
        provide our services and to meet our legal, accounting, and tax
        obligations. When it is no longer needed, we securely delete or anonymise
        it.
      </p>

      <h2>8. How We Protect Your Information</h2>
      <p>
        We use appropriate organisational and technical measures to safeguard
        your data. However, no method of transmission over the internet is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>9. Your Rights</h2>
      <p>
        Depending on your location — including under the EU/UK General Data
        Protection Regulation (GDPR) and Uganda&apos;s Data Protection and
        Privacy Act, 2019 — you may have the right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Correct inaccurate or incomplete information</li>
        <li>Request deletion of your information</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent to marketing at any time</li>
        <li>Request a copy of your data in a portable format</li>
      </ul>
      <p>
        To exercise any of these rights, contact us using the details below. We
        may need to verify your identity before responding.
      </p>

      <h2>10. Third-Party Links</h2>
      <p>
        Our website may link to third-party sites. We are not responsible for
        the privacy practices of those sites and encourage you to read their
        policies.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        Our website is not directed at children, and we do not knowingly collect
        personal information from anyone under 18 without the consent of a parent
        or guardian. Where children travel with us, their details are provided by
        the responsible adult making the booking.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with a revised &quot;Last updated&quot; date. Please
        review it periodically.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about this policy or how we handle your
        information, please contact us:
      </p>
      <div className="legal-contact">
        <p>
          <strong>Pick Wild Safaris</strong>
        </p>
        <p>Plot 6 Portal Road / 19 Hill Road, HMJ Building, 2nd Floor, Entebbe, Uganda</p>
        <p>
          Email:{" "}
          <a href="mailto:info@wildsafarisuganda.com">info@wildsafarisuganda.com</a>
        </p>
        <p>Phone: +256 393 000813 · +256 742 441148</p>
      </div>
    </LegalPageLayout>
  );
}
