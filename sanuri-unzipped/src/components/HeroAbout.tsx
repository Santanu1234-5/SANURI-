import { Play, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { Modal } from './ui/Modal';
import { scrollTo } from './Navigation';
import { motion } from 'motion/react';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-[100vh] relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-3xl z-10 relative"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Ideas</span> Today.<br />
          Digital <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Tomorrow.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
          We build modern, interactive web experiences that turn your ideas into reality. Explore our work and see how creativity meets technology.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
          <button 
            onClick={() => scrollTo('projects')}
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Explore Now
          </button>
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="group flex items-center gap-2 text-white px-6 py-3.5 rounded-full font-medium hover:bg-white/5 transition-colors border border-transparent hover:border-slate-700"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-500 group-hover:bg-white group-hover:border-white transition-colors">
              <Play size={14} className="ml-0.5 fill-white group-hover:fill-black transition-colors" />
            </span>
            Watch Video
          </button>
        </motion.div>
      </motion.div>

      {/* Cinematic Hero Visual */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute right-[-10%] md:right-0 lg:right-[5%] top-[20%] md:top-[15%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] pointer-events-none -z-10 rounded-full overflow-hidden opacity-50 mix-blend-screen mask-radial-gradient"
        style={{ WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
      >
        <motion.img 
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
          alt="Cinematic abstract digital space" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-10 right-6 flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm font-medium animate-pulse cursor-pointer transition-colors"
      >
        <ArrowDown size={16} /> Scroll Down
      </motion.button>

      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
        <div className="aspect-video bg-black rounded-lg flex items-center justify-center border border-slate-800 relative overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" alt="Video cover" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="text-center relative z-10">
            <button className="w-20 h-20 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/20 transition-all hover:scale-110">
              <Play size={32} className="ml-1 fill-white text-white" />
            </button>
            <p className="text-white font-medium text-lg">Watch Showreel</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-blue-500 font-mono text-sm mb-3">02</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
            We are a team of passionate developers, designers and creators who love building web experiences that inspire, engage and make an impact. Under the SANURI brand, we strive for perfection in every pixel.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 mb-10"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">2+</div>
              <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </motion.div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border border-slate-700 text-white hover:bg-white/5 hover:-translate-y-0.5 px-6 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            Learn More
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-[#0b1120] relative group">
             <img 
               src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
               alt="Creative Developer Workspace" 
               className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#030712]/80 via-transparent to-blue-900/20 mix-blend-overlay pointer-events-none" />
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 md:-right-8 top-1/4 bg-[#0b1120]/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl hidden md:block rotate-3 shadow-2xl"
          >
             <p className="font-serif italic text-3xl text-white leading-tight">Build<br/><span className="text-blue-400">Create</span><br/>Innovate</p>
          </motion.div>
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-2xl font-bold text-white mb-4">Our Vision & Mission</h3>
        <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="space-y-4 text-slate-300">
          <p>
            At SANURI, led by Santanu Maiti, we believe that the web is a canvas for innovation. 
            Our mission is to bridge the gap between complex functionality and beautiful design.
          </p>
          <p>
            We specialize in creating robust, scalable, and visually stunning applications that 
            help businesses grow and engage their audiences effectively. Every project is crafted 
            with precision, care, and a deep understanding of user experience.
          </p>
          <p className="pt-4 border-t border-slate-800 mt-6 text-sm text-slate-500">
            Reach out to us in the contact section to discuss your next big idea.
          </p>
        </div>
      </Modal>
    </section>
  );
}
