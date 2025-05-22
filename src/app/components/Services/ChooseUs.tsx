"use client";

import ButtonCustom from "@/components/ui/ButtonCustom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const slides = [
  {
    title: "Recording Facility",
    image: "/vip1.JPG",
    description:
      "State-of-the-art recording studios equipped with the latest technology.",
  },
  {
    title: "Professional Setup",
    image: "/vip2.jpg",
    description:
      "Expert team and professional equipment for high-quality productions.",
  },
  {
    title: "Premium Backdrops",
    image: "/vip3.JPG",
    description:
      "Diverse selection of premium backdrops for versatile shooting options.",
  },
  {
    title: "Sound Design Studio",
    image: "/vip5.JPG",
    description:
      "Professional sound design and mixing facilities for perfect audio.",
  },
  {
    title: "Color Grading Suite",
    image: "/44.JPG",
    description:
      "Advanced color grading equipment for cinematic visual enhancement.",
  },
  {
    title: "VFX Workspace",
    image: "/55.jpg",
    description:
      "Cutting-edge VFX workstations for stunning visual effects creation.",
  },
];

const ChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16  ">
      <div className="max-w-[1400px] mx-auto border-[0.2px] border-gray-500/20 p-5 rounded-lg px-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Flex Films?
          </h2>
          <div className="space-y-2 text-gray-300">
            <p>
              Local Expertise - Years of experience working with international
              clients in Vietnam.
            </p>
            <p>
              Cost-Effective Solutions - Competitive pricing without
              compromising on quality.
            </p>
            <p>
              Seamless Execution - Efficient workflows and logistical support
              for smooth productions.
            </p>
          </div>
          <ButtonCustom
            text="Book a tour"
            className="bg-white mt-5 text-black cursor-pointer"
            onClick={() => {}}
          />
        </div>

        <div className="relative h-[400px] rounded-2xl overflow-hidden group flex items-center gap-8 px-4">
          <motion.button
            className="absolute left-8 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoChevronBackOutline size={24} />
          </motion.button>

          <motion.button
            className="absolute right-8 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoChevronForwardOutline size={24} />
          </motion.button>
          <div
            className="w-48 h-48 relative opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-105 rounded-xl overflow-hidden"
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  slides[(currentSlide - 1 + slides.length) % slides.length]
                    .image
                })`,
              }}
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300" />
          </div>

          <div className="relative flex-1 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
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
                whileHover={{
                  scale: 1.02,
                  filter: "brightness(1.1) contrast(1.1)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                style={{
                  transformOrigin: "center",
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {slides[currentSlide].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="w-48 h-48 relative opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-105 rounded-xl overflow-hidden"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  slides[(currentSlide + 1) % slides.length].image
                })`,
              }}
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300" />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
