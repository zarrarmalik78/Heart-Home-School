
import React from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../constants';
import CloudDivider from '../components/CloudDivider';
import { Check } from 'lucide-react';

const ProgramsPage: React.FC = () => {
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
            Gentle <span className="text-[#6BCB77]">Learning</span> Tiers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mb-12"
          >
            Our curriculum adapts to each stage of development, ensuring that challenges are met with encouragement and support.
          </motion.p>
        </div>
        <CloudDivider />
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {PROGRAMS.map((program, i) => (
            <div key={program.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className={`relative p-4 rounded-[3rem] overflow-hidden`} style={{ backgroundColor: program.accentColor + '20' }}>
                   <img 
                    src={program.image} 
                    alt={program.title} 
                    className="rounded-[2.5rem] shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <span className="font-bold text-lg mb-2 block uppercase tracking-wider" style={{ color: program.accentColor }}>
                  {program.ageRange}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B172A] mb-8">{program.title}</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {program.description} Our program emphasizes social-emotional intelligence alongside basic cognitive skills to provide a holistic foundation for every child.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Sensory Exploration', 'Social Development', 'Early Literacy', 'Creative Expression'].map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="bg-[#6BCB77] text-white p-1 rounded-full">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-lg font-medium text-[#0B172A]">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:opacity-90 transition" 
                    style={{ backgroundColor: program.accentColor }}
                  >
                    Check Availability
                  </motion.button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
