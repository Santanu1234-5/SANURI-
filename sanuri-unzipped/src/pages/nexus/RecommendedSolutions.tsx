import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Laptop, Printer, Recycle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RecommendedSolutions() {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Digital submissions",
      description: "Move to paperless systems for documents and forms.",
      icon: Laptop,
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-500/10",
      text: "text-blue-400"
    },
    {
      title: "Smart printing system",
      description: "Use controlled and monitored printing solutions.",
      icon: Printer,
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      text: "text-purple-400"
    },
    {
      title: "Paper recycling",
      description: "Implement proper recycling and waste management.",
      icon: Recycle,
      color: "from-green-500 to-emerald-400",
      bg: "bg-green-500/10",
      text: "text-green-400"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
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
        className="mb-10 text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Recommended Actions</h1>
        <p className="text-slate-400">Here are some effective solutions for your problem.</p>
      </motion.div>

      <div className="space-y-4 mb-10">
        {solutions.map((solution, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#0b1120]/80 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl flex items-center gap-6 hover:border-slate-500/50 transition-colors group cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-xl ${solution.bg} ${solution.text} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
              <solution.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">{solution.title}</h3>
              <p className="text-slate-400">{solution.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center"
      >
        <button 
          onClick={() => navigate('/nexus-ai/roadmap')}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group"
        >
          Build My Plan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
