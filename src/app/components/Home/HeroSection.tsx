"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Banner from "./Banner";
import VideoBanner from "./Banner/VideoBanner";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocity = useMotionValue(0);
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

  // Add momentum scroll effect
  useEffect(() => {
    let lastScrollTime = Date.now();
    let lastDelta = 0;
    let animationFrame: number;

    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime;
      lastScrollTime = currentTime;

      // Calculate velocity based on time and delta
      const delta = e.deltaY;
      const currentVelocity = delta / timeDelta;
      velocity.set(currentVelocity * 1200); // Increased scale for much stronger initial momentum

      // Apply momentum after natural scroll
      const applyMomentum = () => {
        const currentVelocity = velocity.get();
        if (Math.abs(currentVelocity) > 0.5) {
          const momentumScroll = container.scrollTop + currentVelocity;
          container.scrollTo({
            top: momentumScroll,
            behavior: "auto",
          });

          // Gradually reduce velocity with much slower decay
          velocity.set(currentVelocity * 0.995); // Increased decay rate for much longer momentum

          // Continue momentum if significant
          if (Math.abs(currentVelocity) > 0.5) {
            animationFrame = requestAnimationFrame(applyMomentum);
          }
        }
      };

      // Start momentum animation
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      animationFrame = requestAnimationFrame(applyMomentum);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Banner: rotate and fade out completely when text appears
  const bannerOpacity = useTransform(
    smoothProgress,
    [0, 0.35, 0.4],
    [1, 0.5, 0]
  );
  const bannerRotateX = useTransform(
    smoothProgress,
    [0, 0.35, 0.4],
    [0, -45, -60]
  );
  const bannerScale = useTransform(
    smoothProgress,
    [0, 0.35, 0.4],
    [1, 0.95, 0.9]
  );
  const bannerTranslateZ = useTransform(
    smoothProgress,
    [0, 0.35, 0.4],
    [0, -200, -300]
  );

  // Text: appear after banner fades out
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
    <div className="relative w-full">
      <motion.div
        ref={containerRef}
        className="h-[300vh]"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="sticky top-0 h-screen w-full">
          {/* Banner Layer */}
          <AnimatePresence>
            {smoothProgress.get() < 0.4 && (
              <motion.div
                style={{
                  opacity: bannerOpacity,
                  rotateX: bannerRotateX,
                  scale: bannerScale,
                  z: bannerTranslateZ,
                  zIndex: 10,
                  transformStyle: "preserve-3d",
                  perspective: "3000px",
                  transformOrigin: "center center",
                }}
                className="absolute inset-0 flex items-center justify-center"
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              >
                <Banner />
              </motion.div>
            )}
          </AnimatePresence>

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
            <div>
              <h2 className="text-5xl lg:text-[200px] font-extrabold text-white tracking-widest uppercase select-none pointer-events-none">
                SHOWREEL
              </h2>
            </div>
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
    </div>
  );
};

export default HeroSection;
