import { Services, Projects } from '../../components/ServicesProjects';
import { Interactive, Stats } from '../../components/InteractiveStats';
import { Testimonials, Blog } from '../../components/TestimonialsBlog';
import { CTA } from '../../components/ContactCTA';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Discover() {
  return (
    <div className="mx-auto space-y-12 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="flex items-center gap-2 text-blue-400 mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold tracking-wider text-sm uppercase">Discover SANURI</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Explore Our Work & Insights</h1>
        <p className="text-slate-400">Discover everything SANURI has to offer, from our latest projects to our interactive stats and thoughts.</p>
      </motion.div>

      <div className="bg-[#0b1120]/30 backdrop-blur-sm rounded-3xl border border-slate-800/50 overflow-hidden relative">
        {/* We reuse the existing components, they already have their own styling and padding */}
        <Services />
        <Projects />
        <Interactive />
        <Stats />
        <Testimonials />
        <Blog />
        <div className="bg-[#030712]/50 pb-20">
          <CTA />
        </div>
      </div>
    </div>
  );
}
