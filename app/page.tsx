// app/page.tsx
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SinceSection from "./components/SinceSection";
import SafarisSection from "./components/SafarisSection";
import ExperiencesSection from "./components/ExperiencesSection";
import TripChooser from "./components/TripChooser";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pick Wild Safaris | Private Uganda & East Africa Safaris Since 1995",
  description:
    "Private gorilla trekking, wildlife safaris, and adventure travel across Uganda, Rwanda, Kenya and East Africa. Expertly planned, personally guided. Since 1995.",
  alternates: {
    canonical: "https://pickwildsafaris.com",
  },
  openGraph: {
    type: "website",
    url: "https://pickwildsafaris.com",
    title: "Pick Wild Safaris | Private Uganda & East Africa Safaris",
    description:
      "Private gorilla trekking, wildlife safaris, and adventure travel across Uganda, Rwanda, Kenya and East Africa. Expertly planned, personally guided. Since 1995.",
    siteName: "Pick Wild Safaris",
    images: [
      {
        url: "https://pickwildsafaris.com/hero-gorilla.jpg",
        width: 1200,
        height: 630,
        alt: "Wildlife safari in Uganda — Pick Wild Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pick Wild Safaris | Private Uganda & East Africa Safaris",
    description:
      "Private gorilla trekking, wildlife safaris, and adventure travel across Uganda and East Africa. Since 1995.",
  },
};

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
