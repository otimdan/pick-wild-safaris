"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const toggleMobileItem = (item: string) => {
    setOpenMobileItem((prev) => (prev === item ? null : item));
  };

  const navClass = `${scrolled ? "scrolled" : ""}`;

  return (
    <>
      <nav
        id="navbar"
        ref={navRef}
        className={navClass}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          {/* Logo */}
          <div className="logo-wrap">
            <Link href="/" aria-label="Pick Wild Safaris home">
              <Image
                className="logo-scroll"
                src="/pick-wild-safaris.png"
                alt="Pick Wild Safaris"
                width={160}
                height={44}
                style={{ height: "44px", width: "auto" }}
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className="nav-links" role="list">
            <li>
              <a href="#">
                Safaris <span className="chevron" aria-hidden="true" />
              </a>
              <ul className="dropdown" role="list">
                <li>
                  <a href="https://goodearthtours.com/tour-type/safaris/">
                    All Safaris
                  </a>
                </li>
                <li>
                  <a href="#">
                    Experiences <span className="arrow" aria-hidden="true" />
                  </a>
                  <ul className="sub-dropdown" role="list">
                    <li>
                      <a href="#">All-Inclusive African Safaris</a>
                    </li>
                    <li>
                      <a href="#">Family African Safari</a>
                    </li>
                    <li>
                      <a href="#">Romantic Getaways</a>
                    </li>
                    <li>
                      <a href="#">Safaris for Seniors</a>
                    </li>
                    <li>
                      <a href="#">Small Group Safaris</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Countries <span className="arrow" aria-hidden="true" />
                  </a>
                  <ul className="sub-dropdown" role="list">
                    <li>
                      <a href="#">Tanzania</a>
                    </li>
                    <li>
                      <a href="#">South Africa</a>
                    </li>
                    <li>
                      <a href="#">Botswana</a>
                    </li>
                    <li>
                      <a href="#">Uganda</a>
                    </li>
                    <li>
                      <a href="#">Rwanda</a>
                    </li>
                    <li>
                      <a href="#">Kenya</a>
                    </li>
                    <li>
                      <a href="#">Namibia</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                Trekking <span className="chevron" aria-hidden="true" />
              </a>
              <ul className="dropdown" role="list">
                <li>
                  <a href="#">Climb Kilimanjaro</a>
                </li>
                <li>
                  <a href="#">Gorilla Trekking</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                Resources <span className="chevron" aria-hidden="true" />
              </a>
              <ul className="dropdown" role="list">
                <li>
                  <a href="#">How to Prepare for Safari</a>
                </li>
                <li>
                  <a href="#">Visas &amp; E-Resources</a>
                </li>
                <li>
                  <a href="#">Climbing Mount Kilimanjaro</a>
                </li>
                <li>
                  <a href="#">Gorilla Trekking Tips</a>
                </li>
                <li>
                  <a href="#">Frequently Asked Questions</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                More <span className="chevron" aria-hidden="true" />
              </a>
              <ul className="dropdown" role="list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Impact</a>
                </li>
                <li>
                  <a href="#">Meet the Team</a>
                </li>
                <li>
                  <a href="#">Lodging &amp; Accommodation</a>
                </li>
                <li>
                  <a href="#">Custom Safari Builder Tool</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          {/* Desktop extras */}
          <div className="nav-extras">
            <button className="search-btn" aria-label="Open search">
              <svg
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
            </button>
            <a href="/contact" className="cta-btn">
              Contact Us
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            id="ham-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
      >
        <ul>
          {[
            {
              label: "Safaris",
              links: [
                "All Safaris",
                "All-Inclusive African Safaris",
                "Family African Safari",
                "Romantic Getaways",
                "Tanzania",
                "South Africa",
                "Kenya",
                "Botswana",
                "Uganda",
                "Rwanda",
              ],
            },
            {
              label: "Trekking",
              links: ["Climb Kilimanjaro", "Gorilla Trekking"],
            },
            {
              label: "Resources",
              links: [
                "How to Prepare for Safari",
                "Visas & E-Resources",
                "FAQ",
              ],
            },
            {
              label: "More",
              links: ["About Us", "Our Impact", "Meet the Team"],
            },
          ].map(({ label, links }) => (
            <li key={label} className={openMobileItem === label ? "open" : ""}>
              <a
                href="#"
                className="mobile-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMobileItem(label);
                }}
              >
                {label} <span className="chevron" aria-hidden="true" />
              </a>
              <ul className="mobile-sub">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <a href="#" className="mobile-toggle">
              Blog
            </a>
          </li>
        </ul>
        <div className="mobile-cta">
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </>
  );
}
