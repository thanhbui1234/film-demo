"use client";
import { AnimatedTestimonialsDemo } from "@/app/components/Slide";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { useRouter } from "next/navigation";
import ProjectSlide from "./slide";
const Project = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/projects");
  };

  return (
    <>
      <div className="flex  justify-between mx-32 mt-10 ">
        <h1 className="text-4xl font-bold text-white ">Những dự án nổi bật</h1>
        <ButtonCustom
          onClick={() => {
            handleNavigate();
          }}
          className="hidden lg:block cursor-pointer"
          text="Xem thêm"
        />
      </div>
      <ProjectSlide />
      <AnimatedTestimonialsDemo />
    </>
  );
};

export default Project;
