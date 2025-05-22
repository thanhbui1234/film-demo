import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

interface InfiniteSliderProps {
  images: string[];
  direction?: "left" | "right";
  title: string;
  description: string;
  speed?: number; // thêm option tốc độ
}

export default function InfiniteSlider({
  images,
  direction = "left",
  title,
  description,
  speed = 0.5,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  useAnimationFrame(() => {
    const scrollWidth = containerRef.current?.scrollWidth ?? 0;
    const visibleWidth = scrollWidth / 2;

    x.current += direction === "left" ? -speed : speed;

    // reset mềm mại khi đi quá nửa
    if (Math.abs(x.current) >= visibleWidth) {
      x.current = 0;
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full flex flex-col items-center py-10 text-white">
      <div className="w-[1400px] rounded-2xl p-10 border border-gray-500/20 overflow-hidden bg-[#111111] shadow-xl">
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-6">{description}</p>

        <div className="overflow-hidden">
          <div ref={containerRef} className="flex gap-4">
            {duplicatedImages.map((src, i) => (
              <div
                key={i}
                className="min-w-[220px] max-w-[220px] h-[220px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10"
              >
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
