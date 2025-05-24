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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Momentum scroll effect (giữ nguyên phần này nếu bạn thích)
  useEffect(() => {
    let lastScrollTime = Date.now();
    let animationFrame: number;

    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime;
      lastScrollTime = currentTime;

      const delta = e.deltaY;
      const currentVelocity = delta / timeDelta;
      velocity.set(currentVelocity * 1200);

      const applyMomentum = () => {
        const currentVelocity = velocity.get();
        if (Math.abs(currentVelocity) > 0.5) {
          const momentumScroll = container.scrollTop + currentVelocity;
          container.scrollTo({ top: momentumScroll, behavior: "auto" });
          velocity.set(currentVelocity * 0.995);
          if (Math.abs(currentVelocity) > 0.5) {
            animationFrame = requestAnimationFrame(applyMomentum);
          }
        }
      };

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

  // Banner animation
  const bannerScale = useTransform(smoothProgress, [0, 0.5], [1, 1.1]);
  const bannerBlur = useTransform(smoothProgress, [0, 0.5], ["0px", "10px"]);
  const bannerClip = useTransform(
    smoothProgress,
    [0, 0.4, 0.5],
    ["circle(100% at center)", "circle(50% at center)", "circle(0% at center)"]
  );

  // Text animation
  const textOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);
  const textY = useTransform(smoothProgress, [0.3, 0.5], ["50%", "0%"]);
  const textScale = useTransform(
    smoothProgress,
    [0.3, 0.5, 0.7],
    [0.8, 1.1, 1]
  );

  // Video animation
  const videoClip = useTransform(
    smoothProgress,
    [0.6, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const videoY = useTransform(smoothProgress, [0.6, 0.7], ["40%", "0%"]);

  return (
    <div className="relative w-full">
      <motion.div
        ref={containerRef}
        className="h-[300vh]"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Banner Layer */}
          <AnimatePresence>
            {smoothProgress.get() < 0.5 && (
              <motion.div
                style={{
                  scale: bannerScale,
                  filter: bannerBlur,
                  clipPath: bannerClip,
                  zIndex: 10,
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
              y: textY,
              scale: textScale,
              zIndex: 20,
            }}
            className="absolute inset-0 flex items-center justify-center"
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            <h2 className="text-5xl lg:text-[200px] font-extrabold text-white tracking-widest uppercase select-none pointer-events-none">
              SHOWREEL
            </h2>
          </motion.div>

          {/* Video Banner Layer */}
          <motion.div
            style={{
              clipPath: videoClip,
              y: videoY,
              zIndex: 30,
            }}
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
