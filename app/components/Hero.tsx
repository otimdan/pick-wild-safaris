import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Some Parts of Africa You<br />Never Share With a Crowd
        </h1>
        <p>Private safaris, designed for you &nbsp;·&nbsp; Since 1995</p>
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
