"use client";

import { useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    img: "https://goodearthtours.com/wp-content/uploads/2026/05/beach.jpg",
    alt: "Beach holidays",
    title: "Beach holidays",
    desc: "Discover Africa's coast and tropical islands.",
  },
  {
    img: "https://goodearthtours.com/wp-content/uploads/2026/05/birdwatching.jpg",
    alt: "Birdwatching",
    title: "Birdwatching safaris",
    desc: "",
  },
  {
    img: "https://goodearthtours.com/wp-content/uploads/2026/05/cultural.jpg",
    alt: "Cultural",
    title: "Cultural Experiences",
    desc: "Get authentic insight into Africa's cultures, communities and history.",
  },
  {
    img: "https://goodearthtours.com/wp-content/uploads/2026/05/snorkelling.jpg",
    alt: "Snorkelling",
    title: "Diving & snorkelling holidays",
    desc: "",
  },
  {
    img: "https://goodearthtours.com/wp-content/uploads/2026/05/family.jpg",
    alt: "Family Safaris",
    title: "Family safaris",
    desc: "",
  },
];

export default function ExperiencesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

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
              <Image
                src={exp.img}
                alt={exp.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="280px"
              />
              <div className="experience-overlay" />
              <div className="experience-content">
                <h3>{exp.title}</h3>
                {exp.desc && <p>{exp.desc}</p>}
              </div>
            </a>
          ))}
        </div>

        <div className="experience-controls">
          <button className="exp-btn" onClick={scrollPrev} aria-label="Previous">&#8249;</button>
          <button className="exp-btn active" onClick={scrollNext} aria-label="Next">&#8250;</button>
        </div>
      </div>
    </section>
  );
}
