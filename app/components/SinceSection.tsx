"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Drop local photo paths here (e.g. "/since-left.jpg") to replace the
// gradient placeholders. Empty string = show the gradient only.
const LEFT_PHOTO = "";
const RIGHT_PHOTO = "";

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
          <div
            className="img-card img-card--left"
            ref={imgLeftRef}
            style={{ background: "linear-gradient(160deg, #3a6a2a, #1a3a0e)" }}
          >
            {LEFT_PHOTO && (
              <Image
                src={LEFT_PHOTO}
                alt="Safari guide and guest smiling by a vehicle"
                width={400}
                height={520}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>
          <div
            className="img-card img-card--right"
            ref={imgRightRef}
            style={{ background: "linear-gradient(160deg, #9a6a3a, #4a2a10)" }}
          >
            {RIGHT_PHOTO && (
              <Image
                src={RIGHT_PHOTO}
                alt="Guests watching elephant from safari vehicle"
                width={400}
                height={420}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
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
          We only do one thing<br />&mdash; build it around you.
        </h2>

        <div className="since-body">
          <p>Every itinerary starts blank. We fill it in around your dates, your pace, and exactly what you want to see.</p>
          <p>No fixed departures. No being folded into someone else&apos;s group.</p>
          <p>Just a private Ugandan guide, a private vehicle, and a trip built for you alone.</p>
          <p>You tell us what you&apos;re after. We handle everything else.</p>
        </div>

        <Link href="/contact" className="since-cta">
          Let&apos;s talk about your trip
        </Link>
      </div>
    </section>
  );
}
