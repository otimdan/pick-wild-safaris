import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <Image
        src="/hero-gorilla.jpg"
        alt="Mountain gorilla in Bwindi Impenetrable Forest, Uganda"
        fill
        className="hero-img"
        preload
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-text">
        <h1>
          Some Parts of Africa You
          <br />
          Never Share With a Crowd
        </h1>
        <p>Private safaris, designed for you </p>
        <div className="hero-cta-group">
          <Link href="/safaris" className="hero-btn hero-btn-outline">
            Explore Safaris
          </Link>
          <Link href="/contact" className="hero-btn hero-btn-gold">
            Speak With a Planner
          </Link>
        </div>
      </div>
    </div>
  );
}
