import { motion } from "framer-motion";

const ButtonCustom = ({
  className = "",
  text,
  onClick,
}: {
  className?: string;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow:
            "0 0 20px rgba(255, 128, 0, 0.8), 0 0 40px rgba(255, 128, 0, 0.6)",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`px-8 py-3 rounded-xl font-bold uppercase tracking-wide text-white bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 shadow-lg border border-orange-300 ${className}`}
        onClick={onClick}
      >
        {text}
      </motion.button>
    </>
  );
};

export default ButtonCustom;
