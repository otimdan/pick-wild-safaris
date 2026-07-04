// app/terms/page.tsx
import type { Metadata } from "next";
import LegalPageLayout from "@/app/components/LegalPageLayout";

const BASE_URL = "https://pickwildsafaris.com";
const UPDATED = "5 July 2026";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pick Wild Safaris",
  description:
    "The booking terms and conditions for safaris and trekking experiences arranged by Pick Wild Safaris — deposits, payment, cancellation, insurance, and liability.",
  alternates: { canonical: `${BASE_URL}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      updated={UPDATED}
      intro={
        <>
          <p>
            These Terms &amp; Conditions govern your booking with Pick Wild
            Safaris (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Please
            read them carefully — by paying a deposit you confirm that you have
            read, understood, and accepted them on behalf of everyone named in
            your booking.
          </p>
        </>
      }
    >
      <h2>1. Your Booking</h2>
      <p>
        A booking is confirmed once we have received your deposit and issued a
        written confirmation. The person making the booking must be at least 18
        years old and is responsible for ensuring the accuracy of all traveller
        details and that all members of the party accept these terms.
      </p>

      <h2>2. Deposit</h2>
      <p>
        To secure your safari, a non-refundable deposit of{" "}
        <strong>25% of the total trip cost</strong> is required at the time of
        booking. Certain items — such as gorilla and chimpanzee permits, internal
        flights, and peak-season lodges — may require full, non-refundable
        payment at the time of booking in order to secure availability. We will
        tell you where this applies before you pay.
      </p>

      <h2>3. Final Payment</h2>
      <p>
        The balance of your trip cost is due <strong>60 days before
        departure</strong>. For bookings made within 60 days of departure, full
        payment is required at the time of booking. If we do not receive final
        payment by the due date, we may treat your booking as cancelled and apply
        the cancellation charges below.
      </p>

      <h2>4. Prices</h2>
      <p>
        Prices are quoted per person based on two people sharing unless stated
        otherwise, and are typically in US Dollars. Quotes are valid until the
        date shown and are only guaranteed once your deposit is paid. Before that
        point, prices may change due to supplier rates, government or park fees,
        fuel costs, or currency fluctuations.
      </p>

      <h2>5. Cancellation by You</h2>
      <p>
        Cancellations must be made in writing. The date we receive your written
        notice determines the charge, calculated as a percentage of the total
        trip cost:
      </p>
      <div className="legal-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Notice before departure</th>
              <th>Cancellation charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>60 days or more</td>
              <td>Deposit only</td>
            </tr>
            <tr>
              <td>59 – 30 days</td>
              <td>50% of total trip cost</td>
            </tr>
            <tr>
              <td>29 – 15 days</td>
              <td>75% of total trip cost</td>
            </tr>
            <tr>
              <td>14 days or less</td>
              <td>100% of total trip cost</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Regardless of the notice given, gorilla and chimpanzee permits, internal
        flights, and other non-refundable supplier costs are charged in full, as
        these cannot be recovered.
      </p>

      <h2>6. Changes by You</h2>
      <p>
        We will do our best to accommodate changes to a confirmed booking.
        Amendments requested more than 60 days before departure may incur an
        administration fee plus any additional supplier costs. Changes within 60
        days may be treated as a cancellation and re-booking.
      </p>

      <h2>7. Changes or Cancellation by Us</h2>
      <p>
        Occasionally we may need to change or cancel arrangements. We will always
        aim to offer a comparable alternative of similar standard. If we cancel a
        trip for reasons within our control and cannot offer a suitable
        alternative, you will receive a refund of monies paid to us, excluding
        any non-refundable third-party costs already committed on your behalf. We
        are not liable for incidental costs you may have incurred, such as flights
        or visas.
      </p>

      <h2>8. Travel Insurance</h2>
      <p>
        Comprehensive travel insurance is a <strong>condition of travelling with
        us</strong>. Your policy must cover trip cancellation and curtailment,
        emergency medical treatment, evacuation and repatriation, and personal
        belongings. Please carry proof of your policy on your trip.
      </p>

      <h2>9. Passports, Visas &amp; Health</h2>
      <p>
        You are responsible for holding a valid passport, obtaining any required
        visas, and meeting all health and vaccination requirements for the
        countries you visit (including yellow fever certification where required).
        We can offer general guidance, but requirements are your responsibility
        and we accept no liability for refused entry or additional costs arising
        from incorrect documentation.
      </p>

      <h2>10. Gorilla &amp; Chimpanzee Trekking Permits</h2>
      <p>
        Where your trip includes primate trekking, permits are issued by the
        relevant national wildlife authority and are strictly limited,
        non-refundable, and non-transferable. Trekking involves demanding terrain
        and is subject to park rules — including a maximum group size, minimum
        distance from the animals, and a requirement that visitors who are unwell
        may be refused entry to protect the animals. No refund is due if you are
        unable to trek for health or fitness reasons.
      </p>

      <h2>11. Your Responsibilities &amp; Conduct</h2>
      <p>
        You must ensure you are in suitable physical and mental health for an
        active safari, follow the reasonable instructions of your guides and
        park rangers, and respect local laws, wildlife, and communities. We may
        decline to carry or may remove any traveller whose behaviour endangers
        others or seriously disrupts the trip, without refund.
      </p>

      <h2>12. Our Responsibility &amp; Liability</h2>
      <p>
        We act as an organiser, arranging services provided by independent
        suppliers such as lodges, airlines, and ground operators. We take care in
        selecting our partners but do not directly control their operations. To
        the fullest extent permitted by law, we are not liable for loss, injury,
        delay, or damage caused by circumstances beyond our reasonable control or
        by the acts of independent suppliers or third parties.
      </p>

      <h2>13. Assumption of Risk</h2>
      <p>
        Safaris take place in remote, wild environments where wildlife is free
        and unpredictable and medical facilities may be limited or distant. You
        acknowledge and accept the inherent risks of this kind of travel and
        agree to take reasonable care for your own safety.
      </p>

      <h2>14. Force Majeure</h2>
      <p>
        We are not liable for any failure or delay in performing our obligations
        caused by events beyond our reasonable control, including but not limited
        to natural disasters, extreme weather, epidemics or pandemics, war,
        civil unrest, strikes, government action, or border and airport closures.
      </p>

      <h2>15. Complaints</h2>
      <p>
        If a problem arises during your trip, please tell your guide or contact
        us immediately so we can try to resolve it on the spot. If the matter is
        not resolved to your satisfaction, please write to us within 30 days of
        your return so we can investigate fully.
      </p>

      <h2>16. Photography &amp; Marketing</h2>
      <p>
        We may use photographs or video taken during trips for promotional
        purposes. If you do not wish to appear in our marketing, please let us
        know in writing and we will honour your request.
      </p>

      <h2>17. Governing Law</h2>
      <p>
        These Terms &amp; Conditions are governed by the laws of the Republic of
        Uganda, and any disputes shall be subject to the exclusive jurisdiction
        of the Ugandan courts.
      </p>

      <h2>18. Contact Us</h2>
      <p>Questions about these terms? Please get in touch:</p>
      <div className="legal-contact">
        <p>
          <strong>Pick Wild Safaris</strong>
        </p>
        <p>Plot 6 Portal Road / 19 Hill Road, HMJ Building, 2nd Floor, Entebbe, Uganda</p>
        <p>
          Email:{" "}
          <a href="mailto:info@pickwildsafaris.com">info@pickwildsafaris.com</a>
        </p>
        <p>Phone: +256 393 000813 · +256 742 441148</p>
      </div>
    </LegalPageLayout>
  );
}
