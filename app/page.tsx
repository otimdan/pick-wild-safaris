import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SinceSection from "./components/SinceSection";
import SafarisSection from "./components/SafarisSection";
import ExperiencesSection from "./components/ExperiencesSection";
import TripChooser from "./components/TripChooser";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      <SinceSection />
      <SafarisSection />
      <ExperiencesSection />
      <TripChooser />
      <Partners />
      <Footer />
    </>
  );
}
