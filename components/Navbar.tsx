
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const getTextColor = (isMobileMenu: boolean = false) => {
    if (scrolled || isMobileMenu) return 'text-[#0B172A]';
    return 'md:text-white text-[#0B172A]';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#FF4D4D] p-2 rounded-2xl shadow-lg transform -rotate-6 transition-transform"
            >
              <Heart className="text-white w-6 h-6 fill-current" />
            </motion.div>
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${getTextColor()}`}>
              Heart Home <span className="text-[#FFD93D]">School</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-lg font-medium transition-colors duration-300 hover:text-[#4D96FF] ${
                  isActive(link.path) 
                    ? scrolled ? 'text-[#4D96FF]' : 'text-[#FFD93D]'
                    : scrolled ? 'text-[#0B172A]' : 'text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-current rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              animate={!scrolled ? { 
                boxShadow: ["0px 0px 0px rgba(107, 203, 119, 0)", "0px 0px 15px rgba(107, 203, 119, 0.4)", "0px 0px 0px rgba(107, 203, 119, 0)"]
              } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Link
                to="/contact"
                className="bg-[#6BCB77] hover:bg-[#5bb866] text-white px-6 py-2.5 rounded-full font-bold shadow-lg block relative overflow-hidden group"
              >
                <span className="relative z-10">Enroll Now</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${getTextColor()}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="md:hidden bg-white shadow-2xl overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-4 text-xl font-medium border-b border-gray-50 ${
                      isActive(link.path) ? 'text-[#4D96FF]' : 'text-[#0B172A]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full mt-6 text-center bg-[#FF4D4D] text-white py-4 rounded-2xl font-bold shadow-xl"
                >
                  Enroll Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
