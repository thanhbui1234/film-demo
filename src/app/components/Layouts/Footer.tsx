"use client";

import ButtonCustom from "@/components/ui/ButtonCustom";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaFilm,
  FaInstagram,
  FaLinkedinIn,
  FaVimeoV,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#121212] text-white px-6 pt-20 pb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* CTA Section */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <FaFilm className="text-4xl text-[#FF5F38]" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest relative overflow-hidden">
            FLEX FILMS
            {/* Shine effect */}
            <motion.div
              className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg]"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </h2>
        </motion.div>
        <p className="text-white/70 mb-4 text-lg">
          Not limited to video, we’re your creative comrades.
        </p>
        <Link href="#contact">
          <ButtonCustom text="Let's Collaborate" />
        </Link>
      </motion.div>

      {/* Grid Info Section */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Contact */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-white/60 leading-6">
            11-K1 Street No. 40,
            <br />
            Tan Phong, District 7,
            <br />
            Ho Chi Minh City
            <br />
            <br />
            contact@flexfilms.vn
            <br />
            037 837 8000
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "Projects", "Services", "About", "Contact"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-white/60 mb-4">Get updates & offers</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-2 rounded-full bg-[#1F1F1F] text-white border border-white/10 focus:outline-none text-sm"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF5F38] hover:bg-[#e85628] text-sm px-6 py-2 rounded-full transition"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-4">Social</h4>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaVimeoV, FaLinkedinIn].map(
              (Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-[#1F1F1F] rounded-full text-white/70 hover:text-white hover:bg-[#FF5F38] transition"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="text-center text-white/30 text-xs mt-12">
        © {new Date().getFullYear()} FLEX FILMS. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
