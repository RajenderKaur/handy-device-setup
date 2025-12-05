import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const CallButton = () => {
  return (
    <motion.div
      className="fixed z-40 bottom-6 left-6"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <a 
        href="tel:18557717123"
        className="relative flex items-center justify-center bg-primary-500 rounded-full shadow-lg call-button-pulse hover:bg-primary-600 transition-colors px-4 py-3"
        aria-label="Call us"
      >
        <FaPhone className="text-white text-lg mr-2" />
        <span className="text-white font-medium whitespace-nowrap">1-855-771-7123</span>
      </a>
    </motion.div>
  );
};

export default CallButton;
