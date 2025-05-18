import Slide from "@/app/components/Home/Client";
import HeroSection from "@/app/components/Home/HeroSection";
import Project from "@/app/components/Home/Project";
export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-10">
        <HeroSection />
      </div>
      <Slide />
      <Project />
    </main>
  );
}
