import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  title: string;
  updated?: string; // human-readable, e.g. "5 July 2026"
  intro?: React.ReactNode; // lead paragraph(s) under the hero
  children: React.ReactNode; // the policy sections (h2 / p / ul …)
};

// Shared shell for legal / policy pages (Privacy, Terms, etc.).
// Same layout every time — only the content passed in differs.
export default function LegalPageLayout({ title, updated, intro, children }: Props) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Navbar />
      </div>

      <header className="legal-hero">
        <h1>{title}</h1>
        {updated && <p className="legal-updated">Last updated: {updated}</p>}
      </header>

      <div className="legal-body">
        <div className="legal-inner">
          {intro && <div className="legal-intro">{intro}</div>}
          <div className="legal-content">{children}</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
