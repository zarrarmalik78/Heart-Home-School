
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../constants';
import { Link } from 'react-router-dom';

// Added interface for props to ensure React.FC compatibility
interface ProgramCardProps {
  program: typeof PROGRAMS[0];
}

// Fixed 'key' prop error by using React.FC which includes standard React props like key
const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -12 }}
      className={`${program.color} rounded-[2rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border border-transparent hover:border-white/50 relative overflow-hidden`}
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-white via-transparent to-transparent pointer-events-none" />
      
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="mb-6 relative h-48 overflow-hidden rounded-3xl"
      >
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {program.ageRange}
        </div>
      </div>
      
      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-2xl font-bold mb-4 text-[#0B172A]">{program.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{program.description}</p>
        <Link
          to="/programs"
          className="flex items-center text-sm font-bold uppercase tracking-widest text-[#0B172A] hover:text-[#4D96FF] transition-colors"
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

const ProgramsGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      },
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor with Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#FFD93D]/5 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4D96FF]/5 rounded-full blur-[100px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF4D4D] font-bold text-lg mb-2 block uppercase tracking-wider">Programs We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B172A] mb-6">
            Daycare Programs <br className="hidden md:block" /> Designed For Every Stage
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
