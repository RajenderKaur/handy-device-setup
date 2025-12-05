
import { motion } from "framer-motion";

const Logo = ({ scrolled }) => {
  return (
    <motion.div 
      className="flex items-center" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-primary-500 p-2 rounded-lg mr-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M8 11V13" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 9V15" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M16 11V13" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className={`text-xl font-bold font-heading ${scrolled ? "text-gray-800" : "text-white"}`}>
            HandyDeviceSetup
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Logo;
