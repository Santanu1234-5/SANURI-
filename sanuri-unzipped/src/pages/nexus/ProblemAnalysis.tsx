import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Leaf, AlertTriangle, TrendingDown, IndianRupee, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProblemAnalysis() {
  const navigate = useNavigate();
  const location = useLocation();
  const problem = location.state?.problem || "My college wastes too much paper...";

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex items-center gap-2 text-blue-400 mb-8">
        <Sparkles className="w-5 h-5" />
        <span className="font-semibold tracking-wider text-sm">NEXUS AI</span>
      </div>

      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Problem Analysis</h1>
        <p className="text-slate-400">Here's what we found based on your input.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0b1120]/80 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Environmental Impact</h3>
                <p className="text-sm text-slate-400 line-clamp-2">Detected direct links to carbon footprint and resource depletion.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#030712]/50 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-500 font-medium mb-2">Problem Severity</div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/10 text-red-400 text-sm font-semibold border border-red-500/20">
                  <AlertTriangle className="w-3.5 h-3.5" /> High
                </div>
              </div>
              <div className="bg-[#030712]/50 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-500 font-medium mb-2">Estimated Waste</div>
                <div className="text-2xl font-bold text-white flex items-center gap-2">
                  72% <TrendingDown className="w-4 h-4 text-red-400" />
                </div>
              </div>
              <div className="bg-[#030712]/50 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-500 font-medium mb-2">Potential Saving</div>
                <div className="text-2xl font-bold text-green-400 flex items-center gap-1">
                  <IndianRupee className="w-5 h-5" /> 18,400
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0b1120]/80 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-white mb-4">Root Causes</h3>
            <div className="space-y-3">
              {[
                "Poor planning and organization",
                "Lack of digital alternatives",
                "No proper recycling system"
              ].map((cause, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#030712]/50 border border-slate-800 p-3 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 font-bold font-mono">
                    {idx + 1}
                  </div>
                  <span className="text-slate-300 font-medium">{cause}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col relative"
        >
          <div className="flex-1 rounded-2xl overflow-hidden border border-slate-700/50 relative">
             <img 
               src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
               alt="Environment" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-end">
            <button 
              onClick={() => navigate('/nexus-ai/solutions')}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group"
            >
              View Recommended Actions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
