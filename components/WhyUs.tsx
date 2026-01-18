
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Cloud, Sun, Heart } from 'lucide-react';
import { IMAGES } from '../constants.tsx';

const WhyUs: React.FC = () => {
  // Explicitly typing variants to avoid string literal inference issues
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const listContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const listItem: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: -20 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 bg-[#FDFCF8] overflow-hidden relative">
      {/* Decorative Floating Shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 text-[#FF4D4D] pointer-events-none"
      >
        <Heart size={400} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Animated Floating Image Container */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
            >
              <img
                src={IMAGES.whyUs}
                alt="Child learning"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B172A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              animate={{ x: [-15, 15, -15], y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-10 -left-10 text-[#4D96FF] opacity-30 drop-shadow-lg"
            >
              <Cloud size={120} fill="currentColor" />
            </motion.div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 text-[#FFD93D] drop-shadow-xl"
            >
              <Sun size={100} />
            </motion.div>

            {/* Float Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
              className="absolute top-1/2 -right-12 bg-white p-6 rounded-3xl shadow-2xl hidden md:block border-4 border-[#FFF8F0]"
            >
              <p className="text-[#FF4D4D] font-black text-4xl">15+</p>
              <p className="text-gray-500 font-bold text-xs uppercase">Years of Love</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-[#6BCB77] font-bold text-lg mb-2 block uppercase tracking-wider">About Heart Home</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B172A] mb-8 leading-tight">
              A Smarter Way To Learn, <br /> Play, And Grow
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We believe every child is a unique world of wonder. Our curriculum is designed to spark curiosity while providing the emotional support needed for healthy development.
            </p>

            <motion.div 
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {[
                { text: "Clean & Hygienic Learning Spaces", color: "#6BCB77" },
                { text: "Qualified & Emathetic Educators", color: "#4D96FF" },
                { text: "Play-Based Interactive Curriculum", color: "#FFD93D" },
                { text: "Daily Parent Progress Updates", color: "#FF4D4D" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={listItem}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-50"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    className="p-1.5 rounded-full text-white transition-all shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    <CheckCircle2 size={24} />
                  </motion.div>
                  <span className="text-xl font-semibold text-[#0B172A]">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-12"
              variants={fadeInUp}
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0B172A] text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-[0_10px_0_0_rgba(0,0,0,0.1)] transition-all shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Our Full Philosophy</span>
                <motion.div 
                  className="absolute inset-0 bg-[#FFD93D] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0 opacity-20"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
