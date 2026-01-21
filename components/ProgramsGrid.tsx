import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PROGRAMS } from '../constants.tsx';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  program: typeof PROGRAMS[0];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);

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
      whileHover={{ y: -15 }}
      className={`${program.color} rounded-[2.8rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border border-transparent hover:border-white/60 relative overflow-hidden h-full`}
    >
      {/* Dynamic Shine Overlay */}
      <motion.div 
        style={{ x: shineX, opacity: 0.3 }}
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent pointer-events-none z-30 transform -skew-x-20 transition-opacity" 
      />
      
      <div 
        style={{ transform: "translateZ(60px)" }}
        className="mb-8 relative h-52 overflow-hidden rounded-[2.2rem] shadow-inner"
      >
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black shadow-lg text-[#0B172A] tracking-wider uppercase">
          {program.ageRange}
        </div>
      </div>
      
      <div style={{ transform: "translateZ(40px)" }} className="flex-grow flex flex-col">
        <h3 className="text-2xl font-black mb-4 text-[#0B172A] tracking-tight group-hover:text-[#4D96FF] transition-colors">{program.title}</h3>
        <p className="text-gray-600 mb-10 flex-grow leading-relaxed font-medium">{program.description}</p>
        
        <Link
          to="/programs"
          className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-[#0B172A] hover:text-[#4D96FF] transition-all group/btn"
        >
          Learn More 
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-3 transition-transform duration-300" />
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      },
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Living Background Decor: Shifting Organic Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#FFD93D]/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#4D96FF]/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-3 text-[#FF4D4D] font-black text-sm mb-4 uppercase tracking-[0.4em]">
            <Sparkles size={16} className="animate-pulse" />
            <span>Programs We Offer</span>
            <Sparkles size={16} className="animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0B172A] mb-8 tracking-tighter leading-tight">
            Daycare Programs <br className="hidden md:block" /> Designed For Every Stage
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            From the first steps to the final day of preschool, we provide a continuous journey of discovery and gentle guidance.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
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