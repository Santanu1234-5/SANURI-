import { Layout, Palette, Lightbulb, ArrowRight, Code } from 'lucide-react';
import { useState } from 'react';
import { Modal } from './ui/Modal';
import { motion } from 'motion/react';

export function Services() {
  const [activeService, setActiveService] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  const services = [
    { icon: <Layout size={24} />, title: "Web Development", desc: "Modern, responsive and high-performance websites built with the latest technologies.", fullDesc: "We build scalable, secure, and blazing-fast web applications using modern frameworks like React, Next.js, and Node.js. Our architectures are designed for performance and SEO optimization from day one." },
    { icon: <Palette size={24} />, title: "UI/UX Design", desc: "Clean, creative and user-focused designs that bring your brand to life.", fullDesc: "Our design philosophy centers around the user. We create intuitive, accessible, and beautiful interfaces that not only look great but drive conversions and enhance user engagement." },
    { icon: <Lightbulb size={24} />, title: "Creative Solutions", desc: "From concept to launch, we bring your vision to reality with innovation.", fullDesc: "Beyond standard development, we offer strategic consulting, branding, and innovative digital solutions to solve complex business problems and set you apart from the competition." },
    { icon: <Code size={24} />, title: "Backend Architecture", desc: "Robust APIs and database structures to power your applications.", fullDesc: "We design secure and scalable backend systems, utilizing RESTful and GraphQL APIs, microservices, and cloud-native infrastructure to ensure your app runs smoothly under heavy load." }
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-blue-500 font-mono text-sm mb-3">03</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-slate-400 mb-12">We turn your ideas into powerful digital solutions.</p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {visibleServices.map((s, i) => (
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            key={i} 
            onClick={() => setActiveService(s)}
            className="bg-[#0b1120] border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-blue-900/20"
          >
            <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 flex justify-center md:justify-start">
         <button 
           onClick={() => setShowAll(!showAll)}
           className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group"
         >
           {showAll ? "Show Less" : "View All Services"} 
           <ArrowRight size={16} className={`transition-transform ${showAll ? "-rotate-90" : "group-hover:translate-x-1"}`} />
         </button>
      </div>

      <Modal isOpen={!!activeService} onClose={() => setActiveService(null)}>
        {activeService && (
          <div>
            <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
              {activeService.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{activeService.title}</h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              {activeService.fullDesc}
            </p>
            <button 
              onClick={() => {
                setActiveService(null);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Inquire About This Service
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<any>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const categories = ['All', 'Web', 'UI/UX', 'Branding', 'App'];

  const allProjects = [
    { num: "01", title: "EcoTrack", desc: "Sustainability Web App", category: "Web", details: "A comprehensive platform for tracking carbon footprints and sustainable habits.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" },
    { num: "02", title: "PixelPlay", desc: "Gaming Website", category: "UI/UX", details: "Immersive dark-mode interface designed for a modern cloud gaming service.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" },
    { num: "03", title: "Mindful", desc: "Wellness App", category: "App", details: "Cross-platform mobile application focusing on mental health and daily meditation.", img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80" },
    { num: "04", title: "Framez", desc: "Photography Portfolio", category: "Branding", details: "Complete brand identity and minimalist showcase portfolio for professional photographers.", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80" },
    { num: "05", title: "FinDash", desc: "Financial Dashboard", category: "Web", details: "Real-time analytics dashboard with complex data visualization for traders.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" },
    { num: "06", title: "Lumina", desc: "Smart Home Controller", category: "UI/UX", details: "Intuitive touch interface for managing IoT home devices effortlessly.", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80" }
  ];

  const filteredProjects = allProjects.filter(p => activeCategory === 'All' || p.category === activeCategory);
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="text-blue-500 font-mono text-sm mb-3">04</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Latest Work</h2>
          <p className="text-slate-400">A glimpse of what we've built. Each project tells a story.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-2">
          {categories.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveCategory(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${activeCategory === tab ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-800 bg-[#0b1120] text-slate-400 hover:border-slate-600 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {visibleProjects.map((p, i) => (
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
            key={i} 
            className="group relative rounded-2xl overflow-hidden bg-[#0b1120] border border-slate-800 aspect-[4/3] md:aspect-[16/10] flex flex-col justify-end p-8 cursor-pointer"
            onClick={() => setActiveProject(p)}
          >
            <div className="absolute inset-0 z-0">
               <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 ease-out" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent z-0 opacity-90 group-hover:opacity-80 transition-opacity" />
            
            <div className="relative z-10 flex flex-col items-start transform group-hover:-translate-y-2 transition-transform duration-300">
              <div className="text-blue-400 font-mono text-sm mb-2">{p.num}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{p.title}</h3>
              <p className="text-slate-300 text-sm mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{p.desc}</p>
              <button 
                className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-blue-400 transition-colors"
              >
                <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  View Project
                </span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          No projects found in this category.
        </div>
      )}

      {filteredProjects.length > 4 && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            {showAllProjects ? "Show Less" : "View All Projects"} <ArrowRight size={16} className={showAllProjects ? "-rotate-90" : ""} />
          </button>
        </div>
      )}

      <Modal isOpen={!!activeProject} onClose={() => setActiveProject(null)}>
        {activeProject && (
          <div>
            <div className="aspect-video bg-slate-900 rounded-xl mb-6 flex items-center justify-center border border-slate-800 overflow-hidden relative group">
              <img src={activeProject.img} alt={activeProject.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-white">{activeProject.title}</h3>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                {activeProject.category}
              </span>
            </div>
            <p className="text-xl text-slate-300 mb-6">{activeProject.desc}</p>
            <p className="text-slate-400 leading-relaxed mb-8">
              {activeProject.details} This is a detailed view of the project, showcasing the problem we solved, the methodology, and the final outcome that exceeded client expectations.
            </p>
            <button 
              onClick={() => setActiveProject(null)}
              className="bg-white text-black hover:bg-slate-200 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Close Project
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}
