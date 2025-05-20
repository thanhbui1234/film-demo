"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Banner from "./Banner";
import VideoBanner from "./Banner/VideoBanner";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Add spring animation for smoother momentum effect
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Banner: nhỏ dần, nghiêng, mờ dần nhưng vẫn còn khi text/video xuất hiện
  const bannerScale = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    [1, 0.99, 0.98, 0.97, 0.96]
  );
  const bannerRotateX = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    [0, -15, -30, -45, -60]
  );
  const bannerTranslateZ = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    [0, -100, -200, -300, -400]
  );
  const bannerOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.9, 0.8, 0.6, 0.4, 0.2]
  );

  // Text: xuất hiện sau banner, không bị mờ đi khi video xuất hiện, nhỏ lại
  const textOpacity = useTransform(
    smoothProgress,
    [0.35, 0.4, 0.5, 0.6, 0.7],
    [0, 0.5, 1, 0.9, 0.7]
  );
  const textScale = useTransform(
    smoothProgress,
    [0.35, 0.4, 0.5, 0.6, 0.7],
    [1.3, 1.2, 1, 0.9, 0.8]
  );
  const textY = useTransform(
    smoothProgress,
    [0.35, 0.4, 0.5, 0.6, 0.7],
    ["40%", "20%", "0%", "-5%", "-10%"]
  );

  // Video: opacity = 1 luôn khi xuất hiện, chỉ dùng hiệu ứng y (slide up)
  const showVideo = useTransform(smoothProgress, (v) => (v > 0.6 ? 1 : 0));
  const videoY = useTransform(
    smoothProgress,
    [0.6, 0.7, 1],
    ["40%", "0%", "0%"]
  );

  return (
    <motion.div
      ref={containerRef}
      className="h-[300vh]"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Banner Layer */}
        <motion.div
          style={{
            opacity: bannerOpacity,
            scale: bannerScale,
            rotateX: bannerRotateX,
            z: bannerTranslateZ,
            zIndex: 10,
            transformStyle: "preserve-3d",
            perspective: "3000px",
            transformOrigin: "center center",
            width: "100%",
            height: "100%",
          }}
          className="absolute inset-0 flex items-center justify-center"
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <Banner />
        </motion.div>
        {/* Text Layer */}
        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
            y: textY,
            zIndex: 20,
          }}
          className="absolute inset-0 flex items-center justify-center"
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <h2 className="text-[6vw] font-extrabold text-white tracking-widest uppercase select-none pointer-events-none">
            SHOW PRODUCT
          </h2>
        </motion.div>
        {/* Video Banner Layer */}
        <motion.div
          style={{ opacity: showVideo, y: videoY, zIndex: 30 }}
          className="absolute inset-0 flex items-center justify-center"
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <div className="w-full max-w-[1500px] h-[200px] flex items-center justify-center mx-auto">
            <VideoBanner />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
