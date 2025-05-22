"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "We created Flex Films to solve Client issues, constant improvement, and a spirit of partnership.",
  "Our mission is to bring a fresh way of producing films to the industry.",
  "Our mission is to bring a fresh way of producing films to the industry.",
  "Our mission is to bring a fresh way of producing films to the industry.",
  "Our mission is to bring a fresh way of producing films to the industry.",
  "Our mission is to bring a fresh way of producing films to the industry.",
  "Our mission is to bring a fresh way of producing films to the industry.",
];

const BannerSlideFoot = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + slides.length) % slides.length;
  };

  return (
    <>
      <section className="relative w-full min-h-[80vh] mt-10 flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="/IMG_3706.JPG"
            alt="Banner Background"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 z-10" />

        {/* Animated Particles */}
        <div className="absolute inset-0 z-15 mt-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        {/* Main Carousel Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center relative">
            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={isAnimating}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={isAnimating}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Slides Container */}
            <div className="flex items-center justify-center w-full relative">
              {/* Previous Slide (Peek) */}
              <motion.div
                className="hidden lg:block relative"
                animate={{
                  x: isAnimating ? -50 : 0,
                  opacity: isAnimating ? 0.3 : 0.6,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div
                  className="w-80 h-64 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-all duration-300"
                  onClick={() => goToSlide(getSlideIndex(-1))}
                >
                  <p className="text-white/70 text-sm text-center line-clamp-6">
                    {slides[getSlideIndex(-1)]}
                  </p>
                </div>
              </motion.div>

              {/* Current Slide (Main) */}
              <motion.div
                className="mx-6 relative z-10"
                animate={{
                  scale: isAnimating ? 0.95 : 1,
                  y: isAnimating ? 10 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="w-full max-w-4xl h-80 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-lg border-2 border-white/30 rounded-3xl p-8 lg:p-12 flex items-center justify-center shadow-2xl"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <motion.p
                      className="text-white text-xl lg:text-2xl xl:text-3xl font-medium text-center leading-relaxed max-w-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {slides[currentSlide]}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Next Slide (Peek) */}
              <motion.div
                className="hidden lg:block relative"
                animate={{
                  x: isAnimating ? 50 : 0,
                  opacity: isAnimating ? 0.3 : 0.6,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div
                  className="w-80 h-64 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-all duration-300"
                  onClick={() => goToSlide(getSlideIndex(1))}
                >
                  <p className="text-white/70 text-sm text-center line-clamp-6">
                    {slides[getSlideIndex(1)]}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-12 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                disabled={isAnimating}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full max-w-md mx-auto bg-white/20 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, repeat: Infinity }}
              key={currentSlide}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSlideFoot;
