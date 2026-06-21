import Link from "next/link";

export default function TripChooser() {
  return (
    <section className="trip-chooser">
      <div className="trip-chooser-overlay" />
      <div className="trip-chooser-content">
        <h2>Looking for inspiration on where to travel next?</h2>
        <p>
          Visit our trip chooser to explore your options and find inspiration
          for your perfect African adventure.
        </p>
        <Link href="/trip-chooser" className="trip-chooser-btn">
          Inspire Me
        </Link>
      </div>
    </section>
  );
}
