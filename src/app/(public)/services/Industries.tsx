import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "vip1.JPG",
  "vip2.jpg",
  "vip3.JPG",
  "vip5.JPG",
  "khabenh.jpg",
  "pexels-pixabay-459203.jpg",
];

const Industries = () => {
  // Tạo mảng các nhóm: [[full], [half, half], [full], ...]
  const groups: string[][] = [];
  let i = 0;
  while (i < images.length) {
    if (i % 3 === 0) {
      groups.push([images[i]]);
      i++;
    } else {
      groups.push([images[i], images[i + 1]].filter(Boolean));
      i += 2;
    }
  }

  return (
    <div className="w-full px-4 py-4">
      <div className="flex flex-col gap-4">
        {groups.map((group, groupIdx) =>
          group.length === 1 ? (
            // Fullwidth item
            <div key={group[0]} className="grid grid-cols-1 md:grid-cols-2">
              <IndustryItem
                img={group[0]}
                aspect="aspect-[16/3]"
                content={group[0]}
                fullWidth
              />
            </div>
          ) : (
            // 2 item chia đôi
            <div
              key={group.join("-")}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {group.map((img) => (
                <IndustryItem
                  key={img}
                  img={img}
                  aspect="aspect-[4/1.3]"
                  content={img}
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
  aspect,
  content,
  fullWidth,
}: {
  img: string;
  aspect: string;
  content: string;
  fullWidth?: boolean;
}) => {
  return (
    <motion.div
      tabIndex={0}
      aria-label={`Ảnh ${img}`}
      className={`relative rounded-xl overflow-hidden shadow-md bg-neutral-900 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer group ${aspect} ${
        fullWidth ? "md:col-span-2" : ""
      }`}
      whileHover="hover"
      whileFocus="hover"
      initial="rest"
      animate="rest"
    >
      <div className={`relative w-full h-full ${aspect}`}>
        <Image
          src={`/${img}`}
          alt={img}
          fill
          className="object-cover object-center select-none pointer-events-none"
          sizes="100vw"
          priority={false}
        />
        {/* Shine effect */}
        <motion.div
          variants={{
            rest: { x: "-100%" },
            hover: {
              x: "120%",
              transition: { duration: 0.7, ease: "easeInOut" },
            },
          }}
          className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-white/10 via-white/60 to-white/10 blur-lg opacity-80 pointer-events-none"
          style={{ zIndex: 2 }}
        />
        {/* Content overlay */}
        <motion.div
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10"
        >
          <span className="text-white text-lg font-semibold drop-shadow-lg px-4 text-center">
            {content}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Industries;
