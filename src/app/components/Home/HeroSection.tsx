"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Banner from "./Banner";
import VideoBanner from "./Banner/VideoBanner";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for Banner
  const bannerRotate = useTransform(scrollYProgress, [0, 0.5], [0, 20]);
  const bannerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const bannerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-25%"]);
  const bannerOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5],
    [1, 0.5, 0]
  );

  // Transform values for Show Reel Text
  const textScale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0.8, 1.2, 0.8]
  );
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  // Transform values for Video Banner
  const videoOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0, 0.5, 1]
  );
  const videoScale = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6],
    [0.8, 0.9, 1]
  );
  const videoY = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6, 0.8, 1],
    ["5%", "0%", "0%", "50%", "50%"]
  );

  // Section opacity for smooth transition with next section
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.9, 1],
    [1, 1, 0.5, 0]
  );

  return (
    <motion.div
      ref={containerRef}
      className="h-[200vh]"
      style={{ opacity: sectionOpacity }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="relative h-full w-full flex items-center justify-center"
          style={{ perspective: "1500px" }}
        >
          {/* Banner with tilt effect */}
          <motion.div
            style={{
              rotateX: bannerRotate,
              scale: bannerScale,
              y: bannerY,
              opacity: bannerOpacity,
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 z-10"
          >
            <Banner />
          </motion.div>

          {/* Video Banner */}
          <motion.div
            style={{
              scale: videoScale,
              y: videoY,
              opacity: videoOpacity,
            }}
            className="absolute w-full z-40 flex items-center justify-center mt-64"
          >
            <div className="w-full max-w-7xl px-4">
              <VideoBanner />
            </div>
          </motion.div>

          {/* Show Reel Text */}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
