"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nguyễn Vĩnh Duy",
    role: "Founder & Creative Producer",
    image: "/vip1.JPG",
    facebook: "https://facebook.com/duy",
  },
  {
    name: "Tú Nguyễn",
    role: "Founder & Executive Producer",
    image: "/vip2.jpg",
    facebook: "https://facebook.com/tu",
  },
  {
    name: "Thái Hà",
    role: "Partner & Executive Producer",
    image: "/vip3.JPG",
    facebook: "https://facebook.com/ha",
  },
  {
    name: "Kiên Nguyễn",
    role: "Partner & Executive Producer",
    image: "/vip5.JPG",
    facebook: "https://facebook.com/kien",
  },
];

const cardVariants = {
  rest: { scale: 1, boxShadow: "0 0 #0000" },
  hover: { scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

const Team = () => {
  return (
    <div className="space-y-8 mt-10">
      <div>
        <TextGenerateEffect
          words="Peek Behind the Curtain: Meet Our Fantastic Team!"
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            className="relative bg-black rounded-xl overflow-hidden border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary group"
            tabIndex={0}
            aria-label={`Team member: ${member.name}`}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            animate="rest"
            variants={cardVariants}
            onClick={() => window.open(member.facebook, "_blank")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                window.open(member.facebook, "_blank");
            }}
          >
            <div className="relative w-full aspect-[4/5] flex items-center justify-center">
              <div className="p-2 bg-black rounded-lg border border-gray-300 dark:border-gray-700 w-full h-full relative">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  fill
                  className="object-cover object-top rounded-md"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx < 2}
                />
                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity rounded-md"
                >
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white border border-white/20 hover:bg-primary/80 focus:bg-primary/80 focus:outline-none"
                    aria-label={`Open ${member.name}'s Facebook`}
                    tabIndex={-1}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(member.facebook, "_blank");
                    }}
                  >
                    <FaFacebook className="w-5 h-5" />
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                </motion.div>
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="text-lg font-semibold text-white mb-1">
                {member.name}
              </div>
              <div className="text-xs text-white/60 tracking-wide uppercase">
                {member.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Team;
