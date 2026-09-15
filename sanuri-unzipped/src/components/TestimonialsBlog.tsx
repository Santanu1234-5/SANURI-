import { Quote, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Modal } from './ui/Modal';
import { motion, AnimatePresence } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    { 
      quote: "Working with SANURI was an amazing experience. They understood our vision perfectly and delivered a product far beyond our expectations. Santanu's attention to detail is unmatched.",
      name: "Rimi Bag",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    { 
      quote: "The level of professionalism and technical expertise is outstanding. They transformed our outdated platform into a modern, lightning-fast application that our users love.",
      name: "David Chen",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    { 
      quote: "Exceptional design sense combined with flawless execution. They don't just write code; they craft digital experiences that genuinely elevate the brand.",
      name: "Sarah Williams",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="text-blue-500 font-mono text-sm mb-3">07</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">What People Say</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0b1120] border border-slate-800 rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden min-h-[400px]"
        >
          <Quote className="text-blue-500/20 mb-8 absolute top-8 left-8" size={80} />
          
          <div className="relative z-10 flex-grow flex items-center mt-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.p 
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -20 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium mb-12"
              >
                "{current.quote}"
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between border-t border-slate-800/80 pt-8 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700 bg-slate-800">
                  <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold">{current.name}</div>
                  <div className="text-slate-500 text-sm">{current.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-3">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full border border-slate-700 bg-[#030712] flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 hover:-translate-x-1 transition-all"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full border border-slate-700 bg-[#030712] flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 hover:translate-x-1 transition-all"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto border border-slate-800 bg-[#0b1120] relative group"
        >
           <img 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
             alt="Creative Team" 
             className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" 
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-[#030712]/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export function Blog() {
  const [activeArticle, setActiveArticle] = useState<any>(null);

  const posts = [
    { title: "Web Design Trends in 2026", date: "Mar 12, 2026", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80", content: "Explore the shift towards minimalist, highly functional interfaces. We discuss the rise of micro-interactions, bold typography, and accessible color palettes that define the modern web era." },
    { title: "How to Build a Modern Website", date: "Mar 10, 2026", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80", content: "A comprehensive guide to selecting the right stack. From React and Vite to modern CSS frameworks like Tailwind, learn how we architect applications for scale and speed." },
    { title: "The Future of Web Development", date: "Mar 05, 2026", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80", content: "AI is reshaping how we code. Discover how tools like Gemini and Antigravity are empowering developers to build complex systems faster than ever before." }
  ];

  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="text-blue-500 font-mono text-sm mb-3">08</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Updates</h2>
        <p className="text-slate-400 mb-12">Read our latest articles, tips and insights.</p>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {posts.map((post, i) => (
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            key={i} 
            className="group cursor-pointer flex flex-col h-full"
            onClick={() => setActiveArticle(post)}
          >
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-slate-800 bg-[#0b1120] relative">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
            <p className="text-slate-500 text-sm mb-5 flex-grow">{post.date}</p>
            <div className="flex items-center gap-2 text-sm text-blue-500 font-medium group-hover:translate-x-1 transition-transform">
              Read More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Modal isOpen={!!activeArticle} onClose={() => setActiveArticle(null)}>
        {activeArticle && (
          <div>
            <div className="text-blue-500 font-medium text-sm mb-2">{activeArticle.date}</div>
            <h3 className="text-3xl font-bold text-white mb-6">{activeArticle.title}</h3>
            <div className="aspect-video bg-slate-900 rounded-xl mb-6 border border-slate-800 overflow-hidden">
              <img src={activeArticle.img} alt={activeArticle.title} className="w-full h-full object-cover opacity-80" />
            </div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              {activeArticle.content}
            </p>
            <p className="text-slate-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}
