"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Industries = () => {
  // Tạo mảng các nhóm: [[full], [half, half], [full], ...]
  const groups: any[][] = [];
  let i = 0;
  while (i < industries.length) {
    if (i % 3 === 0) {
      groups.push([industries[i]]);
      i++;
    } else {
      groups.push([industries[i], industries[i + 1]].filter(Boolean));
      i += 2;
    }
  }

  return (
    <div className="w-full px-4 py-4">
      <div className="flex flex-col gap-4">
        {groups.map((group, groupIdx) =>
          group.length === 1 ? (
            // Fullwidth item
            <div key={group[0].id} className="grid grid-cols-1 md:grid-cols-2">
              <IndustryItem
                img={group[0].image}
                title={group[0].title}
                description={group[0].description}
                aspect="aspect-[16/3]"
                fullWidth
              />
            </div>
          ) : (
            // 2 item chia đôi
            <div
              key={group.map((item) => item.id).join("-")}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {group.map((item) => (
                <IndustryItem
                  key={item.id}
                  img={item.image}
                  title={item.title}
                  description={item.description}
                  aspect="aspect-[4/1.3]"
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

// Item component với hiệu ứng motion shine và content overlay
const IndustryItem = ({
  img,
  title,
  description,
  aspect,
  fullWidth,
}: {
  img: string;
  title: string;
  description: string;
  aspect: string;
  fullWidth?: boolean;
}) => {
  return (
    <motion.div
      tabIndex={0}
      aria-label={`Ảnh ${title}`}
      className={`relative rounded-xl overflow-hidden shadow-md bg-neutral-900 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer group ${aspect} ${
        fullWidth ? "md:col-span-2" : ""
      }`}
      whileHover="hover"
      whileFocus="hover"
      initial="rest"
      animate="rest"
    >
      <motion.div
        variants={{
          rest: { borderWidth: 0 },
          hover: {
            borderWidth: 2,
            transition: {
              duration: 0.4,
              delay: 0.6,
            },
          },
        }}
        className="absolute inset-0 border-white/30 z-20 pointer-events-none rounded-xl"
      />
      <div className={`relative w-full h-full ${aspect} rounded-xl`}>
        <Image
          src={`/${img}`}
          alt={title}
          fill
          className="object-cover object-center select-none pointer-events-none"
          sizes="100vw"
          priority={false}
        />

        {/* Light Streak Effect with Border */}
        <motion.div
          variants={{
            rest: { x: "-100%" },
            hover: {
              x: "100%",
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            },
          }}
          className="absolute inset-0"
          style={{ zIndex: 2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[2px]" />
          <div className="absolute inset-0 border-y-2 border-white/60" />
        </motion.div>

        {/* Black Overlay */}
        <motion.div
          variants={{
            rest: { backgroundColor: "rgba(0,0,0,0)" },
            hover: {
              backgroundColor: "rgba(0,0,0,0.95)",
              transition: {
                duration: 0.4,
                delay: 0.6,
              },
            },
          }}
          className="absolute inset-0"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <motion.div
          variants={{
            rest: { opacity: 1 },
            hover: {
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.8,
              },
            },
          }}
          className="absolute inset-0 flex flex-col justify-between p-6 z-10"
        >
          {/* Top Content */}
          <motion.div
            variants={{
              rest: { y: 0 },
              hover: {
                y: 10,
                transition: {
                  duration: 0.4,
                  delay: 0.8,
                },
              },
            }}
          >
            <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {title}
            </h3>
          </motion.div>

          {/* Bottom Content */}
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: 0.8,
                },
              },
            }}
            initial={{ y: 20 }}
          >
            <p className="text-gray-300 text-sm">{description}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const industries = [
  {
    id: 1,
    title: "Fashion Photography",
    description:
      "Capturing the essence of style and trends in the fashion industry",
    image: "vip1.JPG",
  },
  {
    id: 2,
    title: "Beauty & Makeup",
    description: "Professional beauty and makeup photography services",
    image: "vip2.jpg",
  },
  {
    id: 3,
    title: "Lifestyle",
    description: "Documenting life's beautiful moments and stories",
    image: "vip3.JPG",
  },
  {
    id: 4,
    title: "VIP Events",
    description: "Exclusive coverage for special occasions and events",
    image: "vip5.JPG",
  },
  {
    id: 5,
    title: "Medical Photography",
    description: "Professional medical and clinical photography services",
    image: "khabenh.jpg",
  },
  {
    id: 6,
    title: "Nature & Landscape",
    description: "Capturing the beauty of nature and landscapes",
    image: "pexels-pixabay-459203.jpg",
  },
];

export default Industries;
