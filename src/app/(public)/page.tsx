import AboutCompany from "@/app/components/Home/About";
import Slide from "@/app/components/Home/Client";
import { CollapsibleSectionPage } from "@/app/components/Home/Colspance";
import HeroSection from "@/app/components/Home/HeroSection";
import Project from "@/app/components/Home/Project";
import SlideFoot from "@/app/components/Layouts/SlideFoot";
import BannerSlideFoot from "@/app/components/Slide/SlideFoot";
import Services from "./services";
export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-10">
        <HeroSection />
      </div>
      <Slide />
      <Project />
      <CollapsibleSectionPage />
      <Services />
      <AboutCompany />
      <BannerSlideFoot />
      <SlideFoot />
    </main>
  );
}
