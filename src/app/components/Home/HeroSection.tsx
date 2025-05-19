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

  // Banner: nhỏ dần, nghiêng, mờ dần nhưng vẫn còn khi text/video xuất hiện
  const bannerScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7],
    [1, 0.8, 0.6]
  );
  const bannerRotate = useTransform(scrollYProgress, [0.4, 0.7], [0, 50]);
  const bannerOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [1, 0.7, 0.2, 0.1]
  );

  // Text: xuất hiện sau banner, không bị mờ đi khi video xuất hiện, nhỏ lại
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.45, 0.6], [1, 1.1]);
  const textY = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.6],
    ["40%", "0%", "0%"]
  );

  // Video: opacity = 1 luôn khi xuất hiện, chỉ dùng hiệu ứng y (slide up)
  const showVideo = useTransform(scrollYProgress, (v) => (v > 0.6 ? 1 : 0));
  const videoY = useTransform(
    scrollYProgress,
    [0.6, 0.7, 1],
    ["40%", "0%", "0%"]
  );

  return (
    <motion.div ref={containerRef} className="h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Banner Layer */}
        <motion.div
          style={{
            opacity: bannerOpacity,
            scale: bannerScale,
            rotateX: bannerRotate,
            zIndex: 10,
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 flex items-center justify-center"
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
        >
          <h2 className="text-[6vw] font-extrabold text-white tracking-widest uppercase select-none pointer-events-none">
            SHOW PRODUCT
          </h2>
        </motion.div>
        {/* Video Banner Layer */}
        <motion.div
          style={{ opacity: showVideo, y: videoY, zIndex: 30 }}
          className="absolute inset-0 flex items-center justify-center"
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
``;
