"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BannerAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/khabenh.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_25%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.1)_75%,transparent_100%)]" />

      <div className="relative h-full flex items-end pb-24 px-8 md:px-16 lg:px-24">
        <motion.div className="text-left max-w-2xl" style={{ y: textY }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Join us on a journey where ideas transform into captivating video
            content, with a dash of creativity and a whole lot of fun.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default BannerAbout;
