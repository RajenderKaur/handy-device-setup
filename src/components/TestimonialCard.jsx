
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, location, testimonial, rating, delay = 0 }) => {
  const stars = Array(rating).fill(0);
  
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        {stars.map((_, index) => (
          <FaStar key={index} className="text-amber-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial}"</p>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
