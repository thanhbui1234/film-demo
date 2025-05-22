import { motion } from "framer-motion";
import {
  FiArchive,
  FiCpu,
  FiDisc,
  FiEdit,
  FiSliders,
  FiType,
  FiVideo,
  FiVolume2,
} from "react-icons/fi";

const services = [
  {
    title: "Video Editing",
    desc: "Our skilled editors meticulously assemble and edit the footage, creating a seamless, coherent, and compelling narrative.",
    icon: FiVideo,
  },
  {
    title: "Color Grading",
    desc: "We enhance the visuals by applying color grading techniques for a professional finish.",
    icon: FiSliders,
  },
  {
    title: "Audio Enhancement",
    desc: "We provide audio enhancement services to ensure crystal clear message delivery.",
    icon: FiVolume2,
  },
  {
    title: "3D Animation and CGI",
    desc: "We offer 3D animation and CGI services for immersive visual effects.",
    icon: FiCpu,
  },
  {
    title: "Subtitles and Closed Captions",
    desc: "We add subtitles and captions to ensure your content is accessible.",
    icon: FiType,
  },
  {
    title: "Whiteboard Animation",
    desc: "We turn ideas into captivating whiteboard animations.",
    icon: FiEdit,
  },
  {
    title: "DVD and Blu-ray Authoring",
    desc: "For physical distribution, we ensure professional presentation.",
    icon: FiDisc,
  },
  {
    title: "Archiving and Backup",
    desc: "Secure storage and retrieval of your valuable content.",
    icon: FiArchive,
  },
];

const images = ["/vip1.JPG", "/vip2.JPG", "/vip3.JPG", "/vip5.JPG"];
const duplicatedImages = [...images, ...images];

export default function PostProductionSection() {
  return (
    <section className="relative text-white py-16 px-6 w-[1400px!important] left-[13%]">
      {/* Background stripes */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-black/40 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(to_right,_transparent,_transparent_90px,_rgba(255,255,255,0.05)_91px,_transparent_92px)] rounded-2xl border border-gray-600/30" />

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto p-10 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="relative pb-32">
            {" "}
            {/* padding-bottom for space under content */}
            <h2 className="text-3xl font-bold mb-2">Post-Production</h2>
            <p className="text-sm text-gray-300 mb-6">
              Editing, color grading, and VFX services to bring your vision to
              life.
            </p>
            {/* Slider positioned at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-xl border border-gray-500/40">
              <motion.div
                className="flex gap-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {duplicatedImages.map((src, i) => (
                  <div
                    key={i}
                    className="min-w-[200px] max-w-[200px] flex-shrink-0"
                  >
                    <img
                      src={src}
                      alt={`Slide ${i}`}
                      className="w-full h-[130px] object-cover rounded-lg"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  {/* Icon spin on hover */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="mt-1"
                  >
                    <Icon className="text-orange-400 text-lg" />
                  </motion.div>

                  {/* Text motion on hover */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                    <p className="text-sm text-gray-400">{service.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
