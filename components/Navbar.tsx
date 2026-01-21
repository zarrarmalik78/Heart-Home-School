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
    <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ 
                scale: [1, 1.2, 1, 1.1, 1],
              }}
              transition={{ 
                duration: 0.6,
                times: [0, 0.2, 0.4, 0.7, 1],
                ease: "easeInOut"
              }}
              className="bg-[#FF4D4D] p-2.5 rounded-[1.2rem] shadow-xl transform -rotate-6 group-hover:rotate-0 transition-all duration-500"
            >
              <Heart className="text-white w-6 h-6 fill-current" />
            </motion.div>
            <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${getTextColor()}`}>
              Heart Home <span className="text-[#FFD93D]">School</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-lg font-bold transition-all duration-300 hover:scale-105 ${
                  isActive(link.path) 
                    ? scrolled ? 'text-[#4D96FF]' : 'text-[#FFD93D]'
                    : scrolled ? 'text-[#0B172A]' : 'text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-1 bg-current rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 1 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-[#6BCB77] hover:bg-[#5bb866] text-white px-8 py-3 rounded-full font-black shadow-xl block relative overflow-hidden group/enroll transition-all"
              >
                <span className="relative z-10">Enroll Now</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover/enroll:translate-x-full transition-transform duration-700 ease-in-out"
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 rounded-full hover:bg-black/5 ${getTextColor()}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl shadow-inner overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-6 pt-4 pb-12 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-5 text-2xl font-black border-b border-gray-100 ${
                      isActive(link.path) ? 'text-[#4D96FF]' : 'text-[#0B172A]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#FF4D4D] text-white py-5 rounded-[1.5rem] text-xl font-black shadow-2xl active:scale-95 transition-all"
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