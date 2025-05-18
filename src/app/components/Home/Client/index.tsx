"use client";

import { ContainerTextFlip } from "@/components/container-text-flip";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  SiAmazon,
  SiMastercard,
  SiPaypal,
  SiPorsche,
  SiSamsung,
  SiVisa,
} from "react-icons/si";

const BrandIcon = ({ icon: Icon }: { icon: any }) => (
  <div className="mx-8 text-white/30 hover:text-white/60 transition-colors duration-300">
    <Icon size={32} />
  </div>
);

const SlideContent = () => (
  <div className="flex items-center">
    <BrandIcon icon={SiSamsung} />
    <BrandIcon icon={SiPorsche} />
    <BrandIcon icon={SiVisa} />
    <BrandIcon icon={SiMastercard} />
    <BrandIcon icon={SiPaypal} />
    <BrandIcon icon={SiAmazon} />
    <BrandIcon icon={FaGoogle} />
    <BrandIcon icon={FaFacebookF} />
    <BrandIcon icon={FaTwitter} />
    <BrandIcon icon={FaInstagram} />
  </div>
);

const Slide = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: {
            duration: 20,
            ease: "linear",
          },
        });
        await controls.set({ x: "0%" });
      }
    };

    animate();
  }, [controls]);

  return (
    <>
      <p className="text-white text-center text-2xl font-bold pt-16 py-8">
        <ContainerTextFlip
          words={["Khách hàng", "Uy tín", "Chất lượng", "Pro"]}
        />
      </p>
      <div className="w-full flex justify-center bg-[#0d0d0d] pb-16">
        <div className="w-[800px] overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 py-10">
          <div className="relative">
            <motion.div animate={controls} className="flex whitespace-nowrap ">
              <SlideContent />
              <SlideContent />
              <SlideContent />
              <SlideContent />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
