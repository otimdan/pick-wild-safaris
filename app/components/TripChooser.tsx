import Image from "next/image";
import Link from "next/link";

export default function TripChooser() {
  return (
    <section className="trip-chooser">
      {/* Sits below the fold, so no `priority` — let it lazy-load.
          The CSS gradient on .trip-chooser stays as the fallback layer. */}
      <Image
        src="/trip-chooser-2.jpg"
        alt=""
        aria-hidden
        fill
        style={{ objectFit: "cover" }}
        sizes="100vw"
      />
      <div className="trip-chooser-overlay" />
      <div className="trip-chooser-content">
        <h2>Looking for inspiration on where to travel next?</h2>
        <p>
          Visit our trip chooser to explore your options and find inspiration
          for your perfect African adventure.
        </p>
        <Link href="/safaris" className="trip-chooser-btn">
          Inspire Me
        </Link>
      </div>
    </section>
  );
}
