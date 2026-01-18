
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Sun, Cloud, Heart } from 'lucide-react';
import CloudDivider from './CloudDivider.tsx';
import { IMAGES } from '../constants.tsx';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('scroll', handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 120 };
  const mouseX = useSpring(mousePos.x, springConfig);
  const mouseY = useSpring(mousePos.y, springConfig);

  // Parallax transformations
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgElementY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section ref={containerRef} className="relative bg-[#0B172A] pt-32 md:pt-48 pb-0 overflow-hidden">
      {/* Dynamic Background Spotlight */}
      <motion.div 
        style={{ 
          x: useSpring(mousePos.x * 2, springConfig), 
          y: useSpring(mousePos.y * 2, springConfig),
          opacity: 0.15
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4D96FF] rounded-full blur-[120px] pointer-events-none"
      />

      {/* Whimsical Floating Icons with Mouse Parallax */}
      <motion.div 
        style={{ y: bgElementY, x: mouseX, rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
        className="absolute top-20 right-[15%] text-white/5 pointer-events-none"
      >
        <Sun size={400} />
      </motion.div>

      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 hidden lg:block text-[#FFD93D]"
      >
        <Star size={40} fill="currentColor" />
      </motion.div>
      
      <motion.div 
        style={{ x: useSpring(-mousePos.x, springConfig), y: useSpring(-mousePos.y, springConfig) }}
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-20 hidden lg:block text-[#4D96FF]"
      >
        <Sparkles size={48} />
      </motion.div>

      <motion.div 
        style={{ x: useSpring(mousePos.x * 0.5, springConfig) }}
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 hidden lg:block text-white/10"
      >
        <Cloud size={120} fill="currentColor" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-[#FFD93D] mb-6 border border-white/20"
            >
              <Sparkles size={18} />
              <span className="font-bold uppercase tracking-wider text-sm">Now Enrolling for 2026-27</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Care, Play, and <span className="text-[#FFD93D]">Learning</span> for Little Ones
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Heart Home School provides a trusted daycare with gentle learning, caring teachers, and a joyful environment where your child feels safe every day.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/programs"
                  className="bg-[#6BCB77] hover:bg-[#5bb866] text-white px-10 py-5 rounded-full text-xl font-bold shadow-[0_10px_0_0_#4a9c53] block text-center transform transition active:translate-y-2 active:shadow-none"
                >
                  Explore Programs
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-[#0B172A] px-10 py-5 rounded-full text-xl font-bold border-2 border-transparent block text-center transition shadow-lg"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Imagery */}
          <motion.div
            style={{ y: imageY, rotate: rotateY }}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#FFD93D]/20 to-[#4D96FF]/20 rounded-full blur-3xl animate-pulse" />
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative z-20 w-full aspect-square md:aspect-auto overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-8 border-white shadow-2xl transition-transform duration-500"
            >
              <img
                src={IMAGES.hero}
                alt="Children playing"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              style={{ rotate: rotateY }}
              animate={{ 
                y: [0, -15, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 z-30 w-48 h-48 pointer-events-none opacity-90 drop-shadow-2xl"
            >
               <svg viewBox="0 0 200 200" className="w-full h-full text-[#4D96FF]">
                 <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,70.1,-58.5,78.2,-45.4C86.3,-32.3,90.4,-16.8,88.7,-2C86.9,12.8,79.2,26.9,70.6,39.4C62,51.8,52.5,62.6,40.7,70.1C28.8,77.5,14.4,81.5,0.1,81.4C-14.2,81.3,-28.4,77.1,-41.2,70.1C-54,63.1,-65.4,53.2,-73.3,41.1C-81.1,28.9,-85.4,14.5,-85,0.2C-84.6,-14,-79.6,-28.1,-71.4,-40.3C-63.1,-52.5,-51.6,-62.8,-38.7,-70.3C-25.9,-77.8,-13,-82.5,0.2,-82.9C13.5,-83.4,26.9,-79.6,44.7,-76.4Z" transform="translate(100 100)" />
               </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 relative z-20">
        <CloudDivider />
      </div>
    </section>
  );
};

export default Hero;
