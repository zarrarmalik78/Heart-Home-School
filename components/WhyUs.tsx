import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Cloud, Sun, Heart } from 'lucide-react';
import { IMAGES } from '../constants.tsx';

const WhyUs: React.FC = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const listContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const listItem: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: -30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 120, damping: 12 } 
    }
  };

  return (
    <section className="py-24 bg-[#FDFCF8] overflow-hidden relative">
      {/* Shifting Heart Backdrop */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, 45, -45, 0],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 text-[#FF4D4D] pointer-events-none blur-sm"
      >
        <Heart size={600} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Animated Floating Image Container */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white group"
            >
              <img
                src={IMAGES.whyUs}
                alt="About us scene"
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B172A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            
            {/* Atmospheric Decor */}
            <motion.div 
              animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -top-12 -left-12 text-[#4D96FF]/30 drop-shadow-xl"
            >
              <Cloud size={140} fill="currentColor" />
            </motion.div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-12 -right-12 text-[#FFD93D] drop-shadow-2xl"
            >
              <Sun size={120} />
            </motion.div>

            {/* Achievement Badge with Bounce */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -25 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute top-1/2 -right-10 bg-white p-7 rounded-[2.5rem] shadow-2xl hidden lg:block border-[6px] border-[#FFF8F0] cursor-default"
            >
              <p className="text-[#FF4D4D] font-black text-5xl tracking-tighter">15+</p>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-1">Years of Love</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-[#6BCB77] font-black text-lg mb-4 block uppercase tracking-[0.2em]">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B172A] mb-8 leading-tight tracking-tight">
              A Smarter Way To Learn, <br /> Play, And Grow
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-medium">
              We believe every child is a unique world of wonder. Our curriculum is designed to spark curiosity while providing the emotional support needed for healthy development.
            </p>

            <motion.div 
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-5"
            >
              {[
                { text: "Clean & Hygienic Learning Spaces", color: "#6BCB77", label: "Safe" },
                { text: "Qualified & Empathetic Educators", color: "#4D96FF", label: "Caring" },
                { text: "Play-Based Interactive Curriculum", color: "#FFD93D", label: "Oxford" },
                { text: "Daily Parent Progress Updates", color: "#FF4D4D", label: "Live" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={listItem}
                  whileHover={{ x: 15, scale: 1.02 }}
                  className="flex items-center space-x-5 group bg-white p-5 rounded-[1.8rem] shadow-sm hover:shadow-xl transition-all border border-gray-50 hover:border-gray-200"
                >
                  <div 
                    className="p-2.5 rounded-full text-white shadow-lg transform group-hover:rotate-12 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-0.5" style={{ color: item.color }}>{item.label}</span>
                    <span className="text-lg font-bold text-[#0B172A]">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-14"
              variants={fadeInUp}
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0B172A] text-white px-12 py-5 rounded-full text-lg font-black shadow-2xl hover:shadow-[#0B172A]/30 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Our Full Philosophy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;