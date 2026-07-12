// app/contact/page.tsx
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";

const BASE_URL = "https://wildsafarisuganda.com";

export const metadata: Metadata = {
  title: "Contact Us | Pick Wild Safaris",
  description:
    "Speak with a Pick Wild Safaris planner. Tell us about your dream safari and we'll craft a private, tailored itinerary just for you.",
  alternates: { canonical: `${BASE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Navbar />
      </div>

      <header className="legal-hero">
        <h1>Speak With a Planner</h1>
        <p className="legal-updated">
          Private safaris, tailored around you
        </p>
      </header>

      <div className="contact-body">
        <div className="contact-inner">
          {/* Intro / details */}
          <aside className="contact-aside">
            <h2>Let&apos;s plan your safari</h2>
            <p>
              Tell us a little about the trip you have in mind and one of our
              planners will get back to you with ideas and a costed proposal.
              There&apos;s no obligation — just expert help from people who know
              these places first-hand.
            </p>
            <ul className="contact-details">
              <li>
                <span className="contact-details-label">Email</span>
                <a href="mailto:info@wildsafarisuganda.com">
                  info@wildsafarisuganda.com
                </a>
              </li>
              <li>
                <span className="contact-details-label">Phone</span>
                <span>+256 393 000813</span>
                <span>+256 742 441148</span>
              </li>
              <li>
                <span className="contact-details-label">Office</span>
                <span>
                  Plot 6 Portal Road / 19 Hill Road,
                  <br />
                  HMJ Building, 2nd Floor,
                  <br />
                  Entebbe, Uganda
                </span>
              </li>
            </ul>
          </aside>

          {/* The form */}
          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
