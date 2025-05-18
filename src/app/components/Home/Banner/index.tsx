"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Điều chỉnh animation để thu nhỏ khi nghiêng
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 5, 10, 15, 18, 20]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 0.95, 0.9, 0.85, 0.82, 0.8]
  );

  const translate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -20, -40, -60, -80, -100]
  );

  return (
    <motion.div
      ref={containerRef}
      className="h-[80vh] md:h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="w-full h-full relative"
        style={{
          perspective: "1500px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </motion.div>
  );
};

const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="absolute top-[20%] left-1/2 -translate-x-1/2 z-10 w-full text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: any;
  scale: any;
  translate: any;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformStyle: "preserve-3d",
      }}
      className="w-full h-full relative flex items-center justify-center"
    >
      <div className="w-[100%] max-w-full aspect-[16/9] relative">
        {children}
      </div>
    </motion.div>
  );
};

const Banner = () => {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      <div className="w-full h-full relative">
        <Image
          src="/pexels-pixabay-459203.jpg"
          alt="Banner Image"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 90vw, 80vw"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
              Welcome to <span className="text-[#FF5F38]">FLEX WEDDING</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Capture your special moments with our professional wedding
              photography and videography services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
