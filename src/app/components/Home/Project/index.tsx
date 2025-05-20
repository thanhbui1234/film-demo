"use client";
import { AnimatedTestimonialsDemo } from "@/app/components/Slide";
import ButtonCustom from "@/components/ui/ButtonCustom";
import ProjectSlide from "./slide";
const Project = () => {
  return (
    <>
      <ProjectSlide />
      <div className="flex  justify-between mx-32 mt-10 ">
        <h1 className="text-4xl font-bold text-white ">Những dự án nổi bật</h1>
        <ButtonCustom className="hidden lg:block" text="Xem thêm" />
      </div>
      <AnimatedTestimonialsDemo />
    </>
  );
};

export default Project;
