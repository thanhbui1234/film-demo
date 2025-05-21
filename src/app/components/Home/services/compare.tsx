import { Compare } from "@/components/compare";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export function CompareDemo() {
  return (
    <>
      <div className="flex  gap-4">
        <h3 className="text-white text-4xl font-bold font-sans">
          <div className="flex items-center justify-center bg-[#0E0E10]  rounded-2xl w-full">
            <TextRevealCard
              text="Cải thiện chất lượng"
              revealText="Dịch vụ tốt nhất"
            ></TextRevealCard>
          </div>
        </h3>
      </div>
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
        <Compare
          firstImage="/kem.webp"
          secondImage="/vip1.JPG"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>
    </>
  );
}
