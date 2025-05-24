"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  SiAmazon,
  SiMastercard,
  SiPaypal,
  SiPorsche,
  SiSamsung,
  SiVisa,
} from "react-icons/si";

// Danh sách icon giả lập
const ICONS = [
  SiSamsung,
  SiPorsche,
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiAmazon,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  SiSamsung,
  SiPaypal,
  SiVisa,
  FaInstagram,
  FaGoogle,
];

const BrandIcon = ({ icon: Icon }: { icon: any }) => (
  <motion.div
    whileHover={{ scale: 1.15, rotate: 3 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center p-6 border border-white/10 rounded-lg transition-all duration-300 hover:border-white"
  >
    <Icon
      size={40}
      className="text-white/70 hover:text-white transition-colors duration-300"
    />
  </motion.div>
);

const SlideGrid = () => {
  return (
    <>
      <div className="text-center w-full pb-8 mt-36">
        <p className="text-white text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md transform transition-all hover:scale-105 duration-300">
          Khách hàng
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex justify-center pb-16"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl w-full px-6">
          {ICONS.map((Icon, index) => (
            <BrandIcon key={index} icon={Icon} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SlideGrid;
