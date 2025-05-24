"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export default function AboutCompany() {
  return (
    <>
      <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="105296-669669130_medium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 w-full mx-auto px-4 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 md:gap-x-8">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white text-left"
          >
            Về công ty chúng tôi
          </motion.h2>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-right md:text-left"
          >
            <TextGenerateEffect
              words="Flex Films is a full service creative production based in Ho Chi Minh City, Vietnam. We committed to bringing a fresh way of producing films to our industry. Since then we have become one of the country's leading production house, crafting TV, Viral and online content, KV for a wide array of local and international clients such as Apple, Porsche, Samsung, Pepsi, Honda, Milo, Lazada, PNJ, Biti's, DJI, Panasonic, Pantene, Dove, Garena, Fifa, and many more."
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            />
          </motion.div>

          {/* Secondary Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg max-w-[550px] text-white/80 leading-relaxed col-span-1 md:col-span-2 justify-self-center text-center"
          >
            <TextGenerateEffect
              words="As well as our production facilities we also offer fully functional
              and high-quality line production services that cater to all projects.
              We are also proud to be Vietnam's sole representative of the
              Production Service Network. We can't wait to get you on board!"
            />
          </motion.p>
        </div>
      </section>
    </>
  );
}
