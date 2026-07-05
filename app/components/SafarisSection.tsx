import Link from "next/link";
import Image from "next/image";

const safaris = [
  {
    href: "/safaris/east-africa-mara-serengeti-migration",
    img: "",
    fallback: "linear-gradient(160deg, #5a7a3a, #2a4010)",
    country: "Combo, Kenya, Tanzania",
    title: "The Great Migration Safari",
    days: "9 Days",
    badge: null,
  },
  {
    href: "#",
    img: "",
    fallback: "linear-gradient(160deg, #2a7a6a, #0a4a3a)",
    country: "Botswana",
    title: "Classic Botswana Safari",
    days: "9 Days",
    badge: "Fan Favorite",
  },
  {
    href: "#",
    img: "",
    fallback: "linear-gradient(160deg, #8a7a2a, #4a4010)",
    country: "Kenya",
    title: "Exclusive Kenya Safari",
    days: "8 Days",
    badge: null,
  },
  {
    href: "#",
    img: "",
    fallback: "linear-gradient(160deg, #9a6a3a, #5a3a10)",
    country: "Namibia",
    title: "Namibia Self-Drive Safari",
    days: "12 Days",
    badge: null,
  },
  {
    href: "#",
    img: "",
    fallback: "linear-gradient(160deg, #c05a10, #6a2a00)",
    country: "Tanzania",
    title: "Serengeti Sunset Safari",
    days: "7 Days",
    badge: null,
  },
  {
    href: "/safaris/uganda-gorilla-wildlife-safari",
    img: "",
    fallback: "linear-gradient(160deg, #3a6a2a, #1a3a0e)",
    country: "Uganda",
    title: "Uganda Gorilla & Wildlife",
    days: "10 Days",
    badge: null,
  },
];

export default function SafarisSection() {
  return (
    <section className="safaris-section">
      <h2 className="safaris-heading">Our Favorite Safaris</h2>
      <div className="safaris-grid">
        {safaris.map((safari) => (
          <Link key={safari.title} className="safari-card" href={safari.href}>
            <div className="safari-img-wrap">
              {safari.badge && <span className="safari-badge">{safari.badge}</span>}
              <div className="safari-img-fallback" style={{ background: safari.fallback }} />
              {safari.img && (
                <Image
                  src={safari.img}
                  alt={safari.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
            </div>
            <div className="safari-info">
              <span className="safari-country">{safari.country}</span>
              <h3 className="safari-title">{safari.title}</h3>
              <span className="safari-days">{safari.days}</span>
            </div>
            <div className="safari-cta">View Details</div>
          </Link>
        ))}
      </div>
      <div className="safaris-load-more">
        <Link href="/safaris" className="load-more-btn">Load More Safaris</Link>
      </div>
    </section>
  );
}
