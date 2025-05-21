"use client";

import { CompareDemo } from "@/app/components/Home/services/compare";
import Industries from "@/app/components/Home/services/Industries";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col gap-20 justify-center items-center">
        <ButtonCustom
          className="cursor-pointer"
          onClick={() => {
            router.push("/services");
          }}
          text="Khám phá dịch vụ"
        />
        <h3 className=" text-white text-4xl font-bold font-sans">
          We are video experts in many industries!
        </h3>
        <Industries />
        <CompareDemo />
      </div>
    </>
  );
};

export default Services;
