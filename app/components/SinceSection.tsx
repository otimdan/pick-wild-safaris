"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SinceSection() {
  const imgLeftRef = useRef<HTMLDivElement>(null);
  const imgRightRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imgLeft = imgLeftRef.current;
    const imgRight = imgRightRef.current;
    if (!section || !imgLeft || !imgRight) return;

    const SPEED_LEFT = 0.18;
    const SPEED_RIGHT = 0.32;

    function onScroll() {
      const rect = section!.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - rect.bottom / (vh + rect.height);
      const clampedP = Math.max(0, Math.min(1, progress));
      const range = rect.height * 0.6;

      const leftY = clampedP * range * SPEED_RIGHT;
      const rightY = -clampedP * range * SPEED_LEFT;

      imgLeft!.style.transform = `translateY(${-leftY}px)`;
      imgRight!.style.transform = `translateY(${rightY}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="since-section" ref={sectionRef}>
      {/* Left: images */}
      <div className="since-images">
        <div className="img-track">
          <div className="img-card img-card--left" ref={imgLeftRef}>
            <Image
              src="https://goodearthtours.com/wp-content/uploads/2026/05/DSC07387.jpg"
              alt="Safari guide and guest smiling by a vehicle"
              width={400}
              height={520}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="img-card img-card--right" ref={imgRightRef}>
            <Image
              src="https://goodearthtours.com/wp-content/uploads/2026/04/home-about-2.jpg"
              alt="Guests watching elephant from safari vehicle"
              width={400}
              height={420}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Right: text */}
      <div className="since-text">
        <div className="since-eyebrow">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path
              d="M14 3C14 3 8 7 8 13c0 2.5 1.5 4.5 3 5.5C9.5 20 8 22 8 24h16c0-2-1.5-4-3-5.5 1.5-1 3-3 3-5.5 0-6-6-10-10-10z"
              fill="#c8922a" opacity="0.9"
            />
            <path d="M10 24h8M9 24h10" stroke="#c8922a" strokeWidth="1.2" strokeLinecap="round" />
            <ellipse cx="14" cy="13" rx="2" ry="3" fill="#1a3a0f" opacity="0.4" />
          </svg>
          <span>Crafted for You. Rooted in Africa.</span>
        </div>

        <h2 className="since-heading">
          We&apos;ve been doing<br />one thing since 1995.
        </h2>

        <div className="since-body">
          <p>We&apos;ve had clients come back for their honeymoon, their 40s, their 60s, and bring their kids and even grandkids.</p>
          <p>That kind of repeated trust doesn&apos;t happen by accident.</p>
          <p>It happens because we take this as seriously as you do.</p>
          <p>We handle everything. You just show up.</p>
        </div>

        <Link href="/contact" className="since-cta">
          Let&apos;s talk about your trip
        </Link>
      </div>
    </section>
  );
}
