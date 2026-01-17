
import React from 'react';
import Hero from '../components/Hero';
import ProgramsGrid from '../components/ProgramsGrid';
import WhyUs from '../components/WhyUs';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProgramsGrid />
      <WhyUs />
      
      {/* Testimonials Section */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-xl relative"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#FFD93D] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-4xl text-white">❤</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B172A] mb-8 mt-4 leading-relaxed">
              "Heart Home School has been a second home for my daughter. Her confidence in speaking both Urdu and English has improved tremendously!"
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <img src={IMAGES.parentSaima} className="w-16 h-16 rounded-full border-4 border-[#6BCB77]" alt="Parent" />
              <div className="text-left">
                <p className="font-bold text-[#0B172A]">Mrs. Saima Rashid</p>
                <p className="text-gray-500">Mother of Fatima (Preschool Program)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
