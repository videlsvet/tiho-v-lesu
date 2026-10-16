import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Rating } from "@/components/sections/Rating";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Benefits />
        <Menu />
        <Gallery />
        <Reviews />
        <Rating />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
