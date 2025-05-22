"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const slides = [
  { label: "VFX", img: "/vfx.webp" },
  { label: "Filming", img: "/pexels-pixabay-459203.jpg" },
  { label: "Scriptwriting", img: "/scriptwriting.webp" },
  { label: "Sound Design", img: "/soundesign.webp" },
  { label: "Color Grading", img: "/colorgrading.webp" },
];

const infiniteSlides = [...slides, ...slides];
const SLIDE_WIDTH = 260;
const ANIMATION_DURATION = 18;

const SlideFoot = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full overflow-hidden  py-48 mt-10 ">
      <motion.div
        className="flex items-center gap-x-4"
        animate={{ x: [0, -slides.length * 320] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: ANIMATION_DURATION,
          ease: "linear",
        }}
      >
        {infiniteSlides.map((slide, idx) => (
          <>
            <div
              key={slide.label + idx}
              className="relative flex flex-col items-center justify-center"
            >
              <motion.span
                tabIndex={0}
                aria-label={slide.label}
                className="text-4xl md:text-5xl font-bold px-8 select-none whitespace-nowrap"
                style={{
                  background: "linear-gradient(90deg, #fff 40%, #888 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shine 2s linear infinite",
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onFocus={() => setHoveredIdx(idx)}
                onBlur={() => setHoveredIdx(null)}
              >
                {slide.label}
                {/* Ảnh hiện khi hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={
                    hoveredIdx === idx
                      ? { opacity: 1, scale: 1.08 }
                      : { opacity: 0, scale: 0.95 }
                  }
                  transition={{ duration: 0.35, type: "spring" }}
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full z-20 pointer-events-none w-[280px] h-[160px] flex items-center justify-center overflow-hidden rounded-xl"
                >
                  <Image
                    src={slide.img}
                    alt={slide.label}
                    width={280}
                    height={160}
                    className="object-cover w-full h-full shadow-2xl border-2 border-white select-none"
                    priority={false}
                  />
                </motion.div>
              </motion.span>
            </div>
            {/* Dấu chấm đỏ, không render sau item cuối */}
            {idx !== infiniteSlides.length - 1 && (
              <span className="text-red-600 text-4xl mx-2 select-none">●</span>
            )}
          </>
        ))}
      </motion.div>
      {/* CSS cho hiệu ứng shine */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }
        span[style*="shine"] {
          background-size: 200% auto;
        }
      `}</style>
    </div>
  );
};

export default SlideFoot;
