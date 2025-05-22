"use client";

import SlideFoot from "@/app/components/Layouts/SlideFoot";
import BannerServices from "@/app/components/Services/BannerServices";
import ChooseUs from "@/app/components/Services/ChooseUs";
import PostProductionSection from "@/app/components/Services/postProduction";
import InfiniteSlider from "@/app/components/Services/Suppoort";
import { useRouter } from "next/navigation";
const images = [
  "/vip1.JPG",
  "/vip2.JPG",
  "/vip3.JPG",
  "/vip5.JPG",
  "/vip1.JPG",
  "/vip2.JPG",
  "/vip3.JPG",
  "/vip5.JPG",
];
const images2 = [
  "/vfx.webp",
  "/scriptwriting.webp",
  "/pexels-pixabay-459203.jpg",
  "/motiongraphic.webp",
];
const Services = () => {
  const router = useRouter();
  return (
    <>
      <BannerServices />
      <ChooseUs />
      {/* Slider đi từ trái qua phải */}
      {/* <InfiniteSlider
        images={images}
        direction="right"
        title="Casting & Talent Management"
        description="Access to professional actors, models, and extras tailored to your production needs."
      /> */}

      <InfiniteSlider
        images={images}
        direction="left"
        title="Casting & Talent Management"
        description="Access to professional actors, models, and extras tailored to your production needs."
      />

      <InfiniteSlider
        images={images2}
        direction="left"
        title="Equipment & Crew
"
        description="We provide state-of-the-art cameras, lighting, and grip equipment, along with experienced English-speaking crew members. "
      />

      <InfiniteSlider
        speed={0.9}
        images={images}
        direction="left"
        title="Em yêu aoro li"
        description="Access to professional actors, models, and extras tailored to your production needs."
      />
      <PostProductionSection />
      <SlideFoot />
    </>
  );
};

export default Services;
