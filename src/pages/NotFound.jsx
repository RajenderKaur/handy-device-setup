
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-500">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Oops! We couldn't find the page you're looking for.
            </p>
            <div className="space-x-4">
              <Link to="/" className="btn-primary">
                Go to Homepage
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
