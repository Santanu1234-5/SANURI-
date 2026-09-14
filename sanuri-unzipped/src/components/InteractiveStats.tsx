import { MousePointer2, Sparkles, Droplets, TreePine } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function Interactive() {
  const [activeTheme, setActiveTheme] = useState('Default');

  const themes = [
    { id: 'Default', icon: <MousePointer2 size={18} />, color: 'from-blue-500 to-purple-500' },
    { id: 'Neon', icon: <Sparkles size={18} />, color: 'from-pink-500 to-cyan-500' },
    { id: 'Ocean', icon: <Droplets size={18} />, color: 'from-teal-400 to-blue-600' },
    { id: 'Forest', icon: <TreePine size={18} />, color: 'from-emerald-400 to-green-600' },
  ];

  const currentThemeData = themes.find(t => t.id === activeTheme);

  return (
    <section id="interactive" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-blue-500 font-mono text-sm mb-3">05</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Interactively</h2>
          <p className="text-slate-400 mb-10 max-w-md">
            Click to switch between different themes and see the visual representation adapt instantly.
          </p>
          <div className="flex flex-col gap-3">
            {themes.map((item) => (
              <button 
                key={item.id} 
                onClick={() => setActiveTheme(item.id)}
                className={`flex items-center gap-3 w-48 px-5 py-3.5 rounded-xl border transition-all duration-300 ${activeTheme === item.id ? 'bg-blue-600/10 border-blue-500 text-white translate-x-2' : 'bg-[#0b1120] border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white hover:translate-x-1'}`}
              >
                <span className={activeTheme === item.id ? 'text-blue-500' : ''}>{item.icon}</span>
                <span className="font-medium text-sm">{item.id}</span>
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-2xl overflow-hidden bg-[#0b1120] border border-slate-800 flex items-center justify-center group"
        >
          {/* Abstract representation adapting to theme */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80" 
              alt="Interactive 3D Sphere" 
              className="w-full h-full object-cover mix-blend-screen opacity-50 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className={`w-full h-full absolute inset-0 bg-gradient-to-tr ${currentThemeData?.color} opacity-20 mix-blend-overlay transition-colors duration-700`} />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className={`w-3/4 h-3/4 rounded-full border-2 border-dashed border-white/10 absolute z-10 flex items-center justify-center transition-colors duration-700`}
          >
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-2/3 h-2/3 rounded-full border border-white/20 absolute"
             />
          </motion.div>
          
          <div className="absolute bottom-6 flex items-center gap-2 text-slate-300 text-sm font-medium bg-[#030712]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700 group-hover:-translate-y-1 transition-transform">
            <MousePointer2 size={14} /> Theme: {activeTheme}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50 relative overflow-hidden">
      {/* Subtle technological background visual */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
          alt="Technology grid" 
          className="w-full h-full object-cover mix-blend-screen opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-blue-500 font-mono text-sm mb-3">06</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h2>
        <p className="text-slate-400 mb-16 max-w-md">Numbers that show our journey and the trust our clients have in us.</p>
      </motion.div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-10 relative z-10">
        <StatCounter target={100} label="Happy Clients" isVisible={isVisible} suffix="+" delay={0} />
        <StatCounter target={250} label="Projects Delivered" isVisible={isVisible} suffix="+" delay={0.1} />
        <StatCounter target={5} label="Lines of Code" isVisible={isVisible} suffix="K+" delay={0.2} />
        <StatCounter target={99} label="On-Time Delivery" isVisible={isVisible} suffix="%" delay={0.3} />
      </div>
      
    </section>
  );
}

function StatCounter({ target, label, isVisible, suffix, delay }: { target: number, label: string, isVisible: boolean, suffix: string, delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16); 
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [target, isVisible, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
        {count}<span className="text-blue-500">{suffix}</span>
      </div>
      <div className="text-slate-400 text-sm">{label}</div>
    </motion.div>
  );
}
