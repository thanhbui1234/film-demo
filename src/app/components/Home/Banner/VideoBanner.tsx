"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const VideoBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[40vh] flex justify-center items-center"
    >
      <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/105296-669669130_medium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};

export default VideoBanner;
