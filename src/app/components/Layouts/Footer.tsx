"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaVimeoV,
} from "react-icons/fa";

const quickLinks = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const socialLinks = [
  { name: "FACEBOOK", href: "https://facebook.com", icon: <FaFacebookF /> },
  { name: "INSTAGRAM", href: "https://instagram.com", icon: <FaInstagram /> },
  { name: "VIMEO", href: "https://vimeo.com", icon: <FaVimeoV /> },
  { name: "LINKEDIN", href: "https://linkedin.com", icon: <FaLinkedinIn /> },
];

const MotionLink = motion(Link);

const Footer = () => (
  <footer className="w-full  ">
    <div
      className="w-full max-w-[1200px] mx-auto px-4 py-12 rounded-[40px]"
      style={{
        background:
          "radial-gradient(132.5% 150% at 3.7% 0%, rgb(255, 115, 0) 0%, rgba(255, 255, 255, 0.03) 37.64%)",
        opacity: 1,
      }}
    >
      {/* Logo */}
      <motion.div
        className="flex justify-center mb-12"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src="/logo.svg" alt="FLEX FILMS" className="h-12" />
      </motion.div>

      {/* Slogan */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-[#0066FF] mb-2 leading-tight"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Not limited to video,
        </motion.h2>
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          we're your creative comrades.
        </motion.h2>
        <p className="text-white/80 text-base mb-6">
          Got questions, project ideas, or just want to say hi? We're all ears!
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center bg-[#FF5F38] hover:bg-[#ff4a1f] text-white font-medium px-8 py-3 rounded-full transition-all text-sm"
          >
            Let's Collaborate <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>

      {/* Contact Info & Links Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border border-white/10 rounded-2xl p-8 "
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <div className="text-xs text-white/80 space-y-2">
            <p>
              ADDRESS: 11- K1 STREET NO. 40, TAN PHONG WARD, DISTRICT 7, HO CHI
              MINH CITY, VIETNAM
            </p>
            <p>EMAIL: CONTACT@FLEXFILMS.VN</p>
            <p>PHONE: 037 837 8000</p>
          </div>
          <div className="space-y-3">
            <p className="text-white font-medium text-sm">
              Subscribe to our newsletter
            </p>
            <div className="flex gap-2">
              <motion.input
                type="email"
                placeholder="name@email.com"
                className="flex-1 0 border border-white/10 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5F38] focus:border-[#FF5F38]"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.button
                className="bg-[#FF5F38] hover:bg-[#ff4a1f] text-white px-6 py-2 rounded-full transition-all text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Right Column - Quick Links & Social */}
        <div className="grid grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#FF5F38] transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">
              Social Medias
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#FF5F38] transition-colors text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {socialLinks.map((link) => (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href={link.href}
              className="flex items-center justify-between bg-gray-800/50 hover:bg-gray-700/50 text-white p-4 rounded-xl border border-white/10 transition-all group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {link.icon}
                </motion.span>
                <span className="font-medium text-sm">{link.name}</span>
              </div>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
