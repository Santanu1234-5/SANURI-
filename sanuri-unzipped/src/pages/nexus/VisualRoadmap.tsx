import { motion } from 'motion/react';
import { ArrowLeft, Download, Bookmark, Sparkles, TrendingDown, IndianRupee, CloudRain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VisualRoadmap() {
  const navigate = useNavigate();

  const timeline = [
    { title: "Plan", duration: "Week 1-2", description: "Set up digital systems and awareness program." },
    { title: "Implement", duration: "Week 3-6", description: "Roll out smart printing and digital submission." },
    { title: "Monitor", duration: "Week 7-8", description: "Track progress and reduce waste." },
    { title: "Create Impact", duration: "Week 9+", description: "Achieve sustainability goals and scale." }
  ];

  const impacts = [
    { label: "Less Paper Waste", value: "72%", icon: TrendingDown, color: "text-green-400", bg: "bg-green-500/10" },
    { label: "Annual Savings", value: "₹18,400", icon: IndianRupee, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Carbon Reduction", value: "2.5 Tons", icon: CloudRain, color: "text-cyan-400", bg: "bg-cyan-500/10" }
  ];

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
        className="mb-12"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Your Solution Roadmap</h1>
        <p className="text-slate-400">A step-by-step plan to make an impact.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Horizontal Timeline Layout (simulated via flex on desktop) */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[2.5rem] left-0 w-full h-1 bg-slate-800 hidden md:block rounded-full">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {timeline.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative flex flex-col md:items-center text-left md:text-center"
                >
                  {/* Vertical line for mobile */}
                  <div className="absolute left-6 top-16 bottom-[-2rem] w-px bg-slate-800 md:hidden"></div>
                  
                  <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0 z-10 w-full">
                    <div className="w-12 h-12 rounded-full bg-[#0b1120] border-4 border-slate-800 flex items-center justify-center shrink-0 md:mb-6 shadow-xl relative z-10">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-xs font-medium text-blue-400 mb-3">{step.duration}</p>
                      <p className="text-sm text-slate-400 leading-relaxed md:px-2">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group">
              Download Plan <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="bg-[#0b1120]/80 border border-slate-700 hover:border-slate-500 text-white font-medium py-3 px-6 rounded-xl transition-all flex items-center gap-2">
              Save to My Solutions <Bookmark className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#0b1120]/80 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl h-fit"
        >
          <h3 className="text-xl font-bold text-white mb-6">Expected Impact</h3>
          <div className="space-y-6">
            {impacts.map((impact, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${impact.bg} ${impact.color} flex items-center justify-center shrink-0`}>
                  <impact.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xl font-bold ${impact.color}`}>{impact.value}</div>
                  <div className="text-sm text-slate-400">{impact.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
