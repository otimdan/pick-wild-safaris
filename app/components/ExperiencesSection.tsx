"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const experiences = [
  {
    img: "",
    fallback: "linear-gradient(160deg, #2a7a8a, #0a3a4a)",
    alt: "Beach holidays",
    title: "Beach holidays",
    desc: "Discover Africa's coast and tropical islands.",
  },
  {
    img: "",
    fallback: "linear-gradient(160deg, #6a7a2a, #2a3a10)",
    alt: "Birdwatching",
    title: "Birdwatching safaris",
    desc: "",
  },
  {
    img: "",
    fallback: "linear-gradient(160deg, #9a6a3a, #4a2a10)",
    alt: "Cultural",
    title: "Cultural Experiences",
    desc: "Get authentic insight into Africa's cultures, communities and history.",
  },
  {
    img: "",
    fallback: "linear-gradient(160deg, #1a7a7a, #0a3a4a)",
    alt: "Snorkelling",
    title: "Diving & snorkelling holidays",
    desc: "",
  },
  {
    img: "",
    fallback: "linear-gradient(160deg, #3a6a2a, #1a3a0e)",
    alt: "Family Safaris",
    title: "Family safaris",
    desc: "",
  },
];

export default function ExperiencesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Reflect real scroll position so the arrows can dim at each end.
  const updateEdges = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    // maxScroll <= 0 means everything fits — treat as "at end" too.
    setAtEnd(maxScroll <= 1 || el.scrollLeft >= maxScroll - 1);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const getScrollAmount = () => {
    const card = carouselRef.current?.querySelector(".experience-card") as HTMLElement | null;
    if (!card) return 400;
    return card.offsetWidth + 32;
  };

  const scrollPrev = () => carouselRef.current?.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  const scrollNext = () => carouselRef.current?.scrollBy({ left: getScrollAmount(), behavior: "smooth" });

  return (
    <section className="experiences-section">
      <div className="experiences-header">
        <h2>Discover More Ways to Explore Africa</h2>
      </div>

      <div className="experiences-carousel-wrapper">
        <div className="experiences-carousel" ref={carouselRef} id="experiencesCarousel">
          {experiences.map((exp) => (
            <a key={exp.title} href="#" className="experience-card">
              <span
                aria-hidden
                style={{ position: "absolute", inset: 0, background: exp.fallback }}
              />
              {exp.img && (
                <Image
                  src={exp.img}
                  alt={exp.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="280px"
                />
              )}
              <div className="experience-overlay" />
              <div className="experience-content">
                <h3>{exp.title}</h3>
                {exp.desc && <p>{exp.desc}</p>}
              </div>
            </a>
          ))}
        </div>

        <div className="experience-controls">
          <button className="exp-btn" onClick={scrollPrev} aria-label="Previous" disabled={atStart}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="exp-btn" onClick={scrollNext} aria-label="Next" disabled={atEnd}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
