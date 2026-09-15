import { Sidebar } from '../components/Sidebar';
import { ArrowRight, ArrowLeft, BrainCircuit, Leaf, Zap, BarChart3, CloudRain, Clock, Target, CheckCircle2, Download, BookmarkPlus, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';

export function NexusAIView({ view, onNavigate, onLogout }: { view: string, onNavigate: (v: any) => void, onLogout: () => void }) {
  
  const Header = () => (
    <header className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-800/50">
      <div className="bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
        <BrainCircuit className="w-6 h-6 text-indigo-400" />
      </div>
      <h1 className="text-xl font-bold tracking-wide">NEXUS AI</h1>
    </header>
  );

  return (
    <div className="flex min-h-[calc(100vh-3rem)] bg-[#05050A]">
      <Sidebar activeView={view} onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-6 md:p-10 overflow-y-auto relative">
         {/* Background Glow */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <Header />

        {view === 'nexus-input' && (
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">Describe Your Problem</h2>
            <p className="text-slate-400 text-lg mb-10">Turn your ideas and challenges into actionable solutions with the power of AI.</p>

            <div className="relative mb-8 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <textarea 
                className="relative w-full h-56 bg-[#0D111A] border border-slate-700/50 rounded-3xl p-8 text-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none shadow-2xl"
                placeholder="e.g. My college wastes too much paper..."
              ></textarea>
              <div className="absolute bottom-6 right-8 text-sm font-medium text-slate-500">0/500</div>
            </div>

            <Button className="w-full sm:w-auto px-8 py-3.5 text-base" onClick={() => onNavigate('nexus-analysis')}>
              Analyze Problem
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>

            <div className="flex flex-wrap gap-10 mt-20 pt-10 border-t border-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                  <BrainCircuit className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="font-semibold text-slate-200">AI Powered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <span className="font-semibold text-slate-200">Real World Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <Leaf className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="font-semibold text-slate-200">Sustainable Future</span>
              </div>
            </div>
          </div>
        )}

        {view === 'nexus-analysis' && (
          <div className="max-w-4xl relative z-10">
            <button onClick={() => onNavigate('nexus-input')} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors bg-slate-800/30 px-4 py-2 rounded-full border border-slate-700/50 w-fit">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Problem Analysis</h2>
            <p className="text-slate-400 mb-10">Here's what we found based on your input.</p>

            <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 mb-8 flex gap-8 flex-col md:flex-row items-center relative overflow-hidden shadow-2xl">
               <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-emerald-500/30 to-transparent"></div>
               
               <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-700/50 relative">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" alt="Plant sprouting from soil" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A]/80 to-transparent"></div>
               </div>
               
               <div className="flex-1 relative z-10 w-full">
                 <div className="flex items-center gap-4 mb-3">
                   <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                     <Leaf className="w-6 h-6 text-emerald-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white tracking-tight">Environmental Impact</h3>
                 </div>
                 <p className="text-slate-400 mb-8 max-w-md">Excessive paper waste harms the environment and contributes to deforestation.</p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   <div className="bg-[#151A23] p-4 rounded-2xl border border-slate-700/50">
                     <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Severity</div>
                     <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 font-bold border border-red-500/20">
                       <Zap className="w-4 h-4" /> High
                     </div>
                   </div>
                   <div className="bg-[#151A23] p-4 rounded-2xl border border-slate-700/50">
                     <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Est. Waste</div>
                     <div className="text-2xl font-bold text-white tracking-tight">72%</div>
                   </div>
                   <div className="bg-[#151A23] p-4 rounded-2xl border border-slate-700/50">
                     <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Potential Saving</div>
                     <div className="text-2xl font-bold text-emerald-400 tracking-tight">₹18,400</div>
                   </div>
                 </div>
               </div>
            </div>

            <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-5 h-5 text-indigo-400" />
                Root Causes
              </h3>
              <div className="space-y-4">
                {[
                  "Poor planning and organization leading to overprinting",
                  "Lack of digital alternatives for assignments and forms",
                  "No proper recycling system or awareness program"
                ].map((cause, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm border border-indigo-500/20 shadow-[0_0_10px_rgba(79,70,229,0.1)] flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-slate-300 font-medium">{cause}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex justify-end">
                <Button onClick={() => onNavigate('nexus-solutions')} className="px-8">
                  See Recommended Solutions
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {view === 'nexus-solutions' && (
          <div className="max-w-4xl relative z-10">
             <button onClick={() => onNavigate('nexus-analysis')} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors bg-slate-800/30 px-4 py-2 rounded-full border border-slate-700/50 w-fit">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Recommended Actions</h2>
            <p className="text-slate-400 mb-10">Here are some effective solutions for your problem.</p>

            <div className="space-y-4 mb-10">
              <div className="bg-gradient-to-r from-indigo-900/30 to-[#0D111A] border-2 border-indigo-500/40 rounded-3xl p-6 md:p-8 flex items-center gap-6 cursor-pointer relative overflow-hidden group shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500 rounded-l-3xl"></div>
                
                <div className="bg-indigo-500/20 p-4 rounded-2xl border border-indigo-500/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                  <CloudRain className="w-8 h-8 text-indigo-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1 text-white group-hover:text-indigo-300 transition-colors">Digital submissions</h3>
                  <p className="text-slate-400">Move to paperless systems for documents, forms, and daily assignments.</p>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-500/20 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                </div>
              </div>

              <div className="bg-[#0D111A] border border-slate-800 hover:border-slate-600 rounded-3xl p-6 md:p-8 flex items-center gap-6 cursor-pointer transition-all hover:bg-slate-800/20 group">
                <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1 text-white group-hover:text-blue-300 transition-colors">Smart printing system</h3>
                  <p className="text-slate-400">Use controlled and monitored printing solutions with quota management.</p>
                </div>
              </div>

              <div className="bg-[#0D111A] border border-slate-800 hover:border-slate-600 rounded-3xl p-6 md:p-8 flex items-center gap-6 cursor-pointer transition-all hover:bg-slate-800/20 group">
                <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1 text-white group-hover:text-emerald-300 transition-colors">Paper recycling program</h3>
                  <p className="text-slate-400">Implement proper recycling bins and a campus-wide waste management system.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={() => onNavigate('nexus-roadmap')} className="px-8 py-3.5 text-base">
                Build My Plan
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {view === 'nexus-roadmap' && (
          <div className="max-w-6xl relative z-10">
            <button onClick={() => onNavigate('nexus-solutions')} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors bg-slate-800/30 px-4 py-2 rounded-full border border-slate-700/50 w-fit">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Your Solution Roadmap</h2>
            <p className="text-slate-400 mb-10">A step-by-step plan to make an impact.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative bg-[#0D111A] border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                  {/* Progress Line */}
                  <div className="absolute top-[88px] left-12 right-12 h-1 bg-slate-800/50 rounded-full z-0 hidden md:block"></div>
                  <div className="absolute top-[88px] left-12 w-1/3 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full z-0 hidden md:block shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {[
                      { icon: Target, title: 'Plan', subtitle: '(Week 1-2)', desc: 'Set up digital systems and awareness program.', active: true, color: 'text-indigo-400' },
                      { icon: Zap, title: 'Implement', subtitle: '(Week 3-6)', desc: 'Roll out smart printing and digital submission.', active: false, color: 'text-blue-400' },
                      { icon: Clock, title: 'Monitor', subtitle: '(Week 7-8)', desc: 'Track progress and reduce waste.', active: false, color: 'text-purple-400' },
                      { icon: Leaf, title: 'Create Impact', subtitle: '(Week 9+)', desc: 'Achieve sustainability goals and scale.', active: false, color: 'text-emerald-400' }
                    ].map((step, i) => (
                      <div key={i} className="flex flex-col items-start md:items-center text-left md:text-center group">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-4 border-[#0D111A] ${step.active ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] scale-110' : 'bg-[#151A23] text-slate-400 group-hover:bg-slate-800'} transition-all duration-300`}>
                          <step.icon className="w-7 h-7" />
                        </div>
                        <h4 className={`font-bold text-lg mb-1 ${step.active ? 'text-white' : 'text-slate-300'}`}>{step.title}</h4>
                        <span className={`text-xs font-bold uppercase tracking-wider mb-3 ${step.color}`}>{step.subtitle}</span>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                   <Button className="gap-2 px-8 py-3.5">
                     Download Plan
                     <Download className="w-5 h-5" />
                   </Button>
                   <Button variant="secondary" className="gap-2 px-8 py-3.5 border-slate-700/50 hover:bg-[#151A23]" onClick={() => onNavigate('dashboard')}>
                     Save to My Solutions
                     <BookmarkPlus className="w-5 h-5" />
                   </Button>
                </div>
              </div>

              <div>
                <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-indigo-400" />
                    Expected Impact
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-[#151A23] border border-slate-700/50">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 font-bold text-xl shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        72%
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white tracking-tight">72%</div>
                        <div className="text-sm text-slate-400 font-medium">Less Paper Waste</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-[#151A23] border border-slate-700/50">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <Leaf className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white tracking-tight">₹18,400</div>
                        <div className="text-sm text-slate-400 font-medium">Annual Savings</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-[#151A23] border border-slate-700/50">
                      <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 font-bold text-xl shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                        CO₂
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white tracking-tight">2.5 tons</div>
                        <div className="text-sm text-slate-400 font-medium">Carbon Reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
