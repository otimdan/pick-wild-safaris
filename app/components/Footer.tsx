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
                { icon: "fab fa-facebook-f", label: "Facebook" },
                { icon: "fab fa-instagram", label: "Instagram" },
                { icon: "fab fa-linkedin-in", label: "LinkedIn" },
                { icon: "fab fa-youtube", label: "YouTube" },
                { icon: "fab fa-tiktok", label: "TikTok" },
              ].map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label}>
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
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Impact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Safari Prep</a>
            </li>
            <li>
              <a href="#">E-Resources</a>
            </li>
            <li>
              <a href="#">Gorilla Trekking Tips</a>
            </li>
            <li>
              <a href="#">Climbing Mt Kilimanjaro</a>
            </li>
            <li>
              <a href="#">Craft Your Adventure</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Sustainability Policy</a>
            </li>
            <li>
              <a href="#">Safaris</a>
            </li>
            <li>
              <a href="#">Trekking</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
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
