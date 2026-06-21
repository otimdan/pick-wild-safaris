const partners = [
  { src: "/partner-logos/uganda-tourism-board-logo.png", alt: "Uganda Tourism Board" },
  { src: "/partner-logos/uganda-wildlife-authority-logo.png", alt: "Uganda Wildlife Authority" },
  { src: "/partner-logos/uganda-tourism-board.png", alt: "Uganda Tourism" },
  { src: "/partner-logos/safari-bookings-logo.png", alt: "Safari Bookings" },
];

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-inner">
        <h2>Our Partners</h2>
        <div className="partners-bar">
          {partners.map((p) => (
            <div key={p.alt} className="partner-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
