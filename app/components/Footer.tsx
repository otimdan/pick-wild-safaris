import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <span className="icon">☎</span>
            <span>+256 782 914245</span>
          </div>
          <div className="contact-item">
            <span className="icon">☎</span>
            <span>+256 760 686013</span>
          </div>
          <div className="contact-item">
            <span className="icon">✉</span>
            <span>info@wildsafarisuganda.com</span>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>
              Plot 6 Portal Road / 19 Hill Road,
              <br />
              HMJ Building, 2nd Floor,
              <br />
              Entebbe, Uganda
            </span>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              {[
                { icon: "fab fa-facebook-f", label: "Facebook", href: "https://facebook.com/PickWildSafaris", },
                { icon: "fab fa-instagram", label: "Instagram", href: "https://instagram.com/pick_wild_safaris", },
                { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://linkedin.com/company/pick-wild-safaris", },
                { icon: "fab fa-youtube", label: "YouTube", href: "https://youtube.com/@pickwildsafaris", },
                { icon: "fab fa-tiktok", label: "TikTok", href: "https://tiktok.com/@pickwildsafaris", },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} aria-label={label}>
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/lodging">Lodging &amp; Accommodation</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link href="/resources/how-to-prepare-for-safari">
                How to Prepare for Safari
              </Link>
            </li>
            <li>
              <Link href="/resources/visas-and-e-resources">
                Visas &amp; E-Resources
              </Link>
            </li>
            <li>
              <Link href="/resources/climbing-kilimanjaro">
                Climbing Mount Kilimanjaro
              </Link>
            </li>
            <li>
              <Link href="/blog/gorilla-trekking-tips">
                Gorilla Trekking Tips
              </Link>
            </li>
            <li>
              <Link href="/resources/faq">Frequently Asked Questions</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/safaris">Safaris</Link>
            </li>
            <li>
              <Link href="/gorilla-trekking">Gorilla Trekking</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Pick Wild Safaris. All Rights Reserved.
      </div>
    </footer>
  );
}
