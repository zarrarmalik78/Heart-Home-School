
import React from 'react';
import { motion } from 'framer-motion';
import { TEACHERS } from '../constants';
import CloudDivider from '../components/CloudDivider';

const About: React.FC = () => {
  return (
    <div>
      {/* Header - No pt-24 on parent to allow navbar to sit on dark bg */}
      <section className="bg-[#0B172A] pt-32 md:pt-48 pb-0 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-white relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Our <span className="text-[#FFD93D]">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mb-12"
          >
            Founded with a simple vision: to create a space where education feels like home. We believe that when a child feels safe and loved, learning becomes a natural adventure.
          </motion.p>
        </div>
        <CloudDivider />
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#F0F7FF] p-12 rounded-[2.5rem] shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#4D96FF] mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To nurture independent, empathetic, and curious learners through a balanced approach of play-based exploration and structured early education.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#F0FFF4] p-12 rounded-[2.5rem] shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#6BCB77] mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To be the foundation for a lifetime of success, cultivating children who are not just ready for school, but ready for life's challenges with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Educators */}
      <section className="py-24 bg-[#FDFCF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FF4D4D] font-bold text-lg mb-2 block uppercase tracking-wider">The Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B172A] mb-16">Meet the Educators Who <br /> Care For Your Child</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {TEACHERS.map((teacher, i) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-6 relative mx-auto w-64 h-64 overflow-hidden rounded-full border-8 border-white shadow-lg group-hover:border-[#FFD93D] transition-all">
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B172A]">{teacher.name}</h3>
                <p className="text-[#FF4D4D] font-bold mb-4">{teacher.role}</p>
                <p className="text-gray-600 px-8">{teacher.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
