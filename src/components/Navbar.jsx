import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll event listener to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Navbar animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    }
  };

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren"
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      } transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-full">
        {/* Logo */}
        <Link to="/" className="z-50">
          <Logo scrolled={scrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 hover:text-primary-500 relative ${
                  scrolled ? "text-gray-800" : "text-white"
                } ${isActive ? "text-primary-500" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink 
            to="/contact" 
            className="btn-primary"
          >
            Get a Quote
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden z-50 text-2xl mr-1"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <FaTimes className={scrolled || isOpen ? "text-gray-800" : "text-white"} />
          ) : (
            <FaBars className={scrolled ? "text-gray-800" : "text-white"} />
          )}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col items-center justify-center space-y-8 px-4">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={menuItemVariants}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-2xl font-medium hover:text-primary-500 transition-colors ${
                          isActive ? "text-primary-500" : "text-gray-800"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div variants={menuItemVariants}>
                  <NavLink to="/contact" className="btn-primary mt-4">
                    Get a Quote
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
