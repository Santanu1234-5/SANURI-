import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { scrollTo } from './Navigation';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <section id="cta" className="py-32 px-6 max-w-7xl mx-auto text-center border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: "linear" }}
          src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?auto=format&fit=crop&q=80"
          alt="Futuristic Landscape"
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="inline-block bg-blue-900/20 border border-blue-500/30 px-5 py-2 rounded-full text-blue-400 text-sm font-medium mb-8">
          Ready to start your next project?
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 max-w-4xl mx-auto leading-tight tracking-tight">
          Let's Build <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Something</span><br />
          Amazing Together.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="bg-[#0b1120] border border-slate-700 text-white hover:bg-white/5 hover:border-slate-600 px-8 py-4 rounded-full font-medium transition-colors"
          >
            View Our Work
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        let result: any = {};
        try {
          result = await response.json();
        } catch (e) {
          console.warn("Response is not JSON");
        }

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          setStatus('idle');
          alert('Failed to send message: ' + (result.error || "Server returned status " + response.status));
        }
      } catch (err: any) {
        setStatus('idle');
        alert('An error occurred: ' + (err.message || err));
        console.error(err);
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/50">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="text-blue-500 font-mono text-sm mb-3">09</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-16 max-w-md">
          Have a project in mind or just want to say hello?<br />We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <a href="mailto:santanumaiti424@gmail.com" className="flex items-start gap-5 group cursor-pointer">
            <div className="w-14 h-14 bg-[#0b1120] border border-slate-800 rounded-xl flex items-center justify-center text-slate-300 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors group-hover:scale-110 duration-300">
              <Mail size={24} />
            </div>
            <div className="flex flex-col justify-center h-14">
              <div className="text-slate-400 text-sm mb-1">Email</div>
              <div className="text-white font-medium group-hover:text-blue-400 transition-colors">santanumaiti424@gmail.com</div>
            </div>
          </a>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-[#0b1120] border border-slate-800 rounded-xl flex items-center justify-center text-slate-300">
              <MapPin size={24} />
            </div>
            <div className="flex flex-col justify-center h-14">
              <div className="text-slate-400 text-sm mb-1">Creator</div>
              <div className="text-white font-medium">Santanu Maiti</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0b1120] border border-slate-800 p-8 md:p-10 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] pointer-events-none" />
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 relative z-10"
            >
              <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-slate-400">Thank you for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-6 py-2 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-[#030712] border ${errors.name ? 'border-red-500' : 'border-slate-800'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                />
                {errors.name && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1 ml-2">{errors.name}</motion.span>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-[#030712] border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                />
                {errors.email && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1 ml-2">{errors.email}</motion.span>}
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-[#030712] border ${errors.message ? 'border-red-500' : 'border-slate-800'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                />
                {errors.message && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-1 ml-2">{errors.message}</motion.span>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-medium transition-colors mt-2 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Styled Map Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-[21/9] md:aspect-[21/7] rounded-2xl overflow-hidden border border-slate-800 bg-[#0b1120] relative group"
      >
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
          alt="Location Map"
          className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
