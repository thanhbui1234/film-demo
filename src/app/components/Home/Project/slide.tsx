import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const cardData = [
  {
    img: "/vip1.JPG",
    title: "BE THE SKY",
    subtitle: "MB BANK",
    youtubeId: "qjNOy80MyTc",
  },
  {
    img: "/vip2.jpg",
    title: "VI NHÀ",
    subtitle: "ĐEN",
    youtubeId: "26ozVYUZMcY",
  },
  {
    img: "/vip3.JPG",
    title: "CARD 3",
    subtitle: "ARTIST 3",
    youtubeId: "mngtcfcaVrI",
  },
  {
    img: "/vip5.JPG",
    title: "CARD 4",
    subtitle: "ARTIST 4",
    youtubeId: "VR8ooa3G_5M",
  },
];

const containerVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const ProjectSlide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleOpenModal = useCallback((youtubeId: string) => {
    setActiveYoutubeId(youtubeId);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setActiveYoutubeId(null);
  }, []);

  // Close modal on ESC
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, handleCloseModal]);

  // Focus trap for modal
  useEffect(() => {
    if (isModalOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        className="flex gap-6 flex-wrap justify-center items-center p-6 my-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {cardData.map((card, idx) => (
          <motion.div
            key={card.img}
            tabIndex={0}
            aria-label={`Card ${card.title} by ${card.subtitle}`}
            className="w-80 h-96 rounded-3xl overflow-hidden bg-neutral-900 shadow-lg flex flex-col justify-end relative focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => handleOpenModal(card.youtubeId)}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && card.youtubeId) {
                e.preventDefault();
                handleOpenModal(card.youtubeId);
              }
            }}
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 w-full h-full object-cover"
              priority={idx === 0}
            />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="text-white text-lg font-bold mb-1">
                {card.title}
              </div>
              <div className="text-white text-sm opacity-80">
                {card.subtitle}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {isModalOpen && activeYoutubeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-neutral-900 rounded-2xl shadow-2xl p-0 max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              onClick={handleCloseModal}
              aria-label="Đóng video"
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full w-9 h-9 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-2xl">×</span>
            </button>
            <iframe
              width="960"
              height="540"
              src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-b-2xl w-[95vw] max-w-4xl aspect-video"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSlide;
