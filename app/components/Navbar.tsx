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
                  <Link href="/safaris">All Safaris</Link>
                </li>
                <li>
                  <a href="#">
                    Experiences <span className="arrow" aria-hidden="true" />
                  </a>
                  <ul className="sub-dropdown" role="list">
                    <li>
                      <Link href="/safari-types/luxury-safaris">
                        Luxury Safaris
                      </Link>
                    </li>
                    <li>
                      <Link href="/safari-types/family-friendly-safaris">
                        Family-Friendly Safaris
                      </Link>
                    </li>
                    <li>
                      <Link href="/safari-types/honeymoon-safaris">
                        Honeymoon Safaris
                      </Link>
                    </li>
                    <li>
                      <Link href="/safari-types/bird-watching-safaris">
                        Bird Watching Safaris
                      </Link>
                    </li>
                    <li>
                      <Link href="/safari-types/beach-safaris">
                        Beach Safaris
                      </Link>
                    </li>
                    <li>
                      <Link href="/safari-types/fly-in-safaris">
                        Fly-In Safaris
                      </Link>
                    </li>
                    <li>
                      <Link href="/safari-types/photography-safaris">
                        Photography Safaris
                      </Link>
                    </li>
                    <li>
                      <Link href="/safari-types/female-travel-safaris">
                        Female Travel Safaris
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Countries <span className="arrow" aria-hidden="true" />
                  </a>
                  <ul className="sub-dropdown" role="list">
                    <li>
                      <Link href="/safaris?country=Uganda">Uganda</Link>
                    </li>
                    <li>
                      <Link href="/safaris?country=Rwanda">Rwanda</Link>
                    </li>
                    <li>
                      <Link href="/safaris?country=Kenya">Kenya</Link>
                    </li>
                    <li>
                      <Link href="/safaris?country=Tanzania">Tanzania</Link>
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
                  <Link href="/blog/rwenzori-mountains-trekking-guide">
                    Climb Rwenzori
                  </Link>
                </li>
                <li>
                  <Link href="/gorilla-trekking">Gorilla Trekking</Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                Resources <span className="chevron" aria-hidden="true" />
              </a>
              <ul className="dropdown" role="list">
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
            </li>

            <li>
              <a href="#">
                More <span className="chevron" aria-hidden="true" />
              </a>
              <ul className="dropdown" role="list">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/lodging">Lodging &amp; Accommodation</Link>
                </li>
                <li>
                  <Link href="/contact">Custom Safari Builder Tool</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
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
            <Link href="/contact" className="cta-btn">
              Contact Us
            </Link>
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
                { label: "All Safaris", href: "/safaris" },
                {
                  label: "Luxury Safaris",
                  href: "/safari-types/luxury-safaris",
                },
                {
                  label: "Family-Friendly Safaris",
                  href: "/safari-types/family-friendly-safaris",
                },
                {
                  label: "Honeymoon Safaris",
                  href: "/safari-types/honeymoon-safaris",
                },
                {
                  label: "Bird Watching Safaris",
                  href: "/safari-types/bird-watching-safaris",
                },
                { label: "Beach Safaris", href: "/safari-types/beach-safaris" },
                {
                  label: "Fly-In Safaris",
                  href: "/safari-types/fly-in-safaris",
                },
                {
                  label: "Photography Safaris",
                  href: "/safari-types/photography-safaris",
                },
                {
                  label: "Female Travel Safaris",
                  href: "/safari-types/female-travel-safaris",
                },
                { label: "Uganda Safaris", href: "/safaris?country=Uganda" },
                { label: "Rwanda Safaris", href: "/safaris?country=Rwanda" },
                { label: "Kenya Safaris", href: "/safaris?country=Kenya" },
                {
                  label: "Tanzania Safaris",
                  href: "/safaris?country=Tanzania",
                },
              ],
            },
            {
              label: "Trekking",
              links: [
                {
                  label: "Climb Rwenzori",
                  href: "/blog/rwenzori-mountains-trekking-guide",
                },
                { label: "Gorilla Trekking", href: "/gorilla-trekking" },
              ],
            },
            {
              label: "Resources",
              links: [
                {
                  label: "How to Prepare for Safari",
                  href: "/resources/how-to-prepare-for-safari",
                },
                {
                  label: "Visas & E-Resources",
                  href: "/resources/visas-and-e-resources",
                },
                {
                  label: "Climbing Mount Rwenzori",
                  href: "/blog/rwenzori-mountains-trekking-guide",
                },
                {
                  label: "Gorilla Trekking Tips",
                  href: "/blog/gorilla-trekking-tips",
                },
                {
                  label: "Frequently Asked Questions",
                  href: "/resources/faq",
                },
              ],
            },
            {
              label: "More",
              links: [
                { label: "About Us", href: "/about" },
                { label: "Lodging & Accommodation", href: "/lodging" },
                {
                  label: "Custom Safari Builder Tool",
                  href: "/contact",
                },
              ],
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
                  <li key={link.label}>
                    <Link href={link.href} onClick={toggleMenu}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <Link href="/blog" className="mobile-toggle" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
        </ul>
        <div className="mobile-cta">
          <Link href="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
