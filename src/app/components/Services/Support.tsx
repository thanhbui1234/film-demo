"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/11.JPG", "/22.JPG", "/33.JPG", "/44.JPG", "/55.jpg"];

const Support = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
            mass: 0.5,
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Production support"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-8">
        <h2 className="text-4xl font-bold mb-4">Full Production Support</h2>
        <p className="text-xl text-center max-w-2xl">
          From pre-production planning to final delivery, we handle every aspect
          of your shoot.
        </p>
      </div>
    </div>
  );
};

export default Support;
