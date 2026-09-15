import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Leaf, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProblemInput() {
  const [problem, setProblem] = useState('');
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (problem.trim().length > 10) {
      navigate('/nexus-ai/analysis', { state: { problem } });
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-full flex flex-col pt-8">
      <div className="flex items-center gap-2 text-blue-400 mb-8">
        <Sparkles className="w-5 h-5" />
        <span className="font-semibold tracking-wider text-sm">NEXUS AI</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 flex-1">
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">Describe Your Problem</h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              Turn your ideas and challenges into actionable solutions with the power of AI.
            </p>

            <div className="bg-[#0b1120]/80 backdrop-blur-xl border border-slate-700 p-1 rounded-2xl shadow-2xl relative group focus-within:border-blue-500/50 transition-colors">
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="e.g. My college wastes too much paper..."
                className="w-full bg-transparent p-6 outline-none text-slate-200 placeholder-slate-600 resize-none h-40 text-lg"
                maxLength={500}
              />
              <div className="absolute bottom-4 right-4 text-xs text-slate-500 font-medium">
                {problem.length}/500
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={problem.trim().length < 10}
              className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Analyze Problem <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-auto pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-3 text-slate-400">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">AI Powered</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Real World Solutions</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Sustainable Future</span>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 hidden lg:flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-md aspect-square relative"
          >
            {/* Mockup of a 3D glowing cube */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl mix-blend-screen" />
            <img 
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop" 
              alt="AI Cube Visualization" 
              className="w-full h-full object-cover mix-blend-lighten opacity-80 rounded-full"
              style={{ filter: 'hue-rotate(200deg) saturate(2)' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
