import { Hexagon, Instagram, Github, Linkedin, Youtube, ArrowUp, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 text-white font-bold text-xl tracking-tight cursor-pointer"
        >
          <Hexagon className="text-blue-500 fill-blue-500/20" size={24} />
          SANURI
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {navLinks.map((link) => (
            <button 
              key={link.label}
              onClick={() => handleNavClick(link.id)}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="/login.html" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Sign In
          </a>
          <button 
            onClick={() => handleNavClick('cta')}
            className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-800 bg-[#030712]"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.label}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-slate-300 hover:text-white text-lg py-2 border-b border-slate-800/50"
                >
                  {link.label}
                </button>
              ))}
              <a 
                href="/login.html"
                className="text-left text-blue-400 hover:text-blue-300 text-lg py-2 border-b border-slate-800/50 font-medium block"
              >
                Sign In
              </a>
              <button 
                onClick={() => handleNavClick('cta')}
                className="bg-white text-black px-5 py-3 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors mt-2 text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div 
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 text-white font-bold text-xl tracking-tight mb-4 cursor-pointer"
            >
              <Hexagon className="text-blue-500 fill-blue-500/20" size={24} />
              SANURI
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Creating digital experiences that people remember. Built with passion and precision.
            </p>
            <div className="flex flex-col gap-1 mb-6 text-slate-300 text-sm">
              <span className="font-medium text-white">Santanu Maiti</span>
              <a href="mailto:santanumaiti424@gmail.com" className="hover:text-blue-400 transition-colors">
                santanumaiti424@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub"><Github size={20} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <button onClick={() => scrollTo('hero')} className="text-left hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollTo('about')} className="text-left hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollTo('projects')} className="text-left hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollTo('services')} className="text-left hover:text-blue-400 transition-colors">Services</button>
              <button onClick={() => scrollTo('contact')} className="text-left hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <button onClick={() => scrollTo('blog')} className="text-left hover:text-blue-400 transition-colors">Blog</button>
              <a href="#" className="hover:text-blue-400 transition-colors">FAQs</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800 text-slate-500 text-sm">
          <p>© 2026 SANURI. All rights reserved.</p>
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 hover:text-white transition-colors mt-4 md:mt-0 group">
            Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
