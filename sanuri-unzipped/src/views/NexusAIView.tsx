import { Sidebar } from '../components/Sidebar';
import { ArrowRight, BrainCircuit, Leaf, Zap, BarChart3, CloudRain, Clock, Target, CheckCircle2, AlertTriangle, Lightbulb, Send, Loader2 } from 'lucide-react';
import { Button } from '../components/Button';
import { useState, useEffect, useRef } from 'react';

const LOADING_STATES = [
  "UNDERSTANDING YOUR PROBLEM...",
  "IDENTIFYING ROOT CAUSES...",
  "GENERATING POSSIBLE SOLUTIONS...",
  "BUILDING YOUR ACTION PLAN..."
];

export function NexusAIView({ view, onNavigate, onLogout }: { view: string, onNavigate: (v: any) => void, onLogout: () => void }) {
  const [problemText, setProblemText] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [aiData, setAiData] = useState<any>(null);
  
  // Chat state
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user'|'ai', text: string}[]>([]);
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setLoadingIndex((prev) => (prev + 1) % LOADING_STATES.length);
      }, 1500);
    } else {
      setLoadingIndex(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const Header = () => (
    <header className="flex items-center justify-between mb-10 pb-6 border-b border-slate-800/50">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
          <BrainCircuit className="w-6 h-6 text-indigo-400" />
        </div>
        <h1 className="text-xl font-bold tracking-wide">NEXUS AI</h1>
      </div>
      {view === 'nexus-result' && (
        <Button variant="secondary" onClick={() => {
          setAiData(null);
          setProblemText('');
          setChatHistory([]);
          onNavigate('nexus-input');
        }} className="border-slate-700 hover:bg-slate-800">
          ANALYZE ANOTHER PROBLEM
        </Button>
      )}
    </header>
  );

  const handleAnalyze = async () => {
    if (!problemText.trim()) return;
    
    setLoading(true);
    setAiData(null);
    setChatHistory([]);
    try {
      const res = await fetch('/api/nexus/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem: problemText })
      });
      
      if (!res.ok) throw new Error("Failed to analyze");
      
      const data = await res.json();
      setAiData(data);
      onNavigate('nexus-result');
    } catch (error) {
      console.error(error);
      alert("There was an error generating the analysis. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefine = async () => {
    if (!chatInput.trim() || !aiData) return;
    
    const userMsg = chatInput;
    setChatInput('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatLoading(true);
    
    try {
      const res = await fetch('/api/nexus/refine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem: problemText, analysisData: aiData, question: userMsg })
      });
      
      if (!res.ok) throw new Error("Failed to refine");
      
      const data = await res.json();
      setChatHistory(prev => [...prev, { role: 'ai', text: data.text }]);
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'ai', text: "Sorry, I couldn't process that request right now." }]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-3rem)] bg-[#05050A]">
      <Sidebar activeView={view} onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-6 md:p-10 overflow-y-auto relative">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <Header />

        {view === 'nexus-input' && (
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">What problem can we solve?</h2>
            <p className="text-slate-400 text-lg mb-10">Describe any problem you're facing. Our AI will analyze it and generate a complete roadmap.</p>

            <div className="relative mb-8 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <textarea 
                className="relative w-full h-56 bg-[#0D111A] border border-slate-700/50 rounded-3xl p-8 text-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none shadow-2xl"
                placeholder="Describe any problem you're facing..."
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                disabled={loading}
              ></textarea>
            </div>

            <Button className="w-full sm:w-auto px-8 py-3.5 text-base flex items-center gap-2 justify-center" onClick={handleAnalyze} disabled={loading || !problemText.trim()}>
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {LOADING_STATES[loadingIndex]}
                </>
              ) : (
                <>
                  ANALYZE WITH AI
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        )}

        {view === 'nexus-result' && aiData && (
          <div className="max-w-5xl relative z-10 pb-20">
            {/* 1. PROBLEM IDENTIFICATION & SUMMARY */}
            <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 mb-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-4 tracking-tight text-white flex items-center gap-3">
                <BrainCircuit className="w-8 h-8 text-indigo-400" />
                Problem Identification
              </h2>
              <div className="p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl mb-6">
                <p className="text-lg text-indigo-200 font-medium">{aiData.problem}</p>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">{aiData.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* 3. ROOT CAUSES */}
              <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                  <Target className="w-6 h-6 text-rose-400" />
                  Root Causes
                </h3>
                <ul className="space-y-4">
                  {(aiData.root_causes || []).map((cause: string, i: number) => (
                    <li key={i} className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">{i+1}</span>
                      <span className="text-slate-300">{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. AFFECTED AREAS & 5. IMPACT */}
              <div className="space-y-8">
                <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                    <AlertTriangle className="w-6 h-6 text-amber-400" />
                    Affected Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(aiData.affected_areas || []).map((area: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-full text-sm">{area}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                    Potential Impact
                  </h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    {(aiData.potential_impact || []).map((impact: string, i: number) => (
                      <li key={i}>{impact}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. POSSIBLE SOLUTIONS & 7. RECOMMENDED SOLUTION */}
            <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 mb-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <Lightbulb className="w-7 h-7 text-emerald-400" />
                Solutions
              </h3>
              
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                <p className="text-lg text-emerald-200 font-medium">{aiData.recommended_solution}</p>
              </div>

              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Other Possible Solutions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(aiData.possible_solutions || []).map((sol: any, i: number) => (
                  <div key={i} className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-xl">
                    <h5 className="font-bold text-white mb-2">{sol.title}</h5>
                    <p className="text-sm text-slate-400">{sol.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. ACTION PLAN */}
            <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-8 mb-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <CheckCircle2 className="w-7 h-7 text-blue-400" />
                Action Plan
              </h3>
              <div className="space-y-4">
                {(aiData.action_plan || []).map((plan: any, i: number) => (
                  <div key={i} className="flex gap-6 items-start p-4 bg-slate-800/20 border border-slate-700/30 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 flex-shrink-0">
                      {plan.step}
                    </div>
                    <div className="pt-3">
                      <p className="text-slate-200 text-lg">{plan.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 9. RESOURCES, 10. EXPECTED OUTCOME, 11. RISKS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4">Resources Required</h4>
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
                  {(aiData.resources_required || []).map((res: string, i: number) => <li key={i}>{res}</li>)}
                </ul>
              </div>
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6">
                <h4 className="font-bold text-emerald-400 mb-4">Expected Outcome</h4>
                <ul className="list-disc list-inside text-sm text-emerald-200 space-y-2">
                  {(aiData.expected_outcome || []).map((out: string, i: number) => <li key={i}>{out}</li>)}
                </ul>
              </div>
              <div className="bg-rose-900/20 border border-rose-500/30 rounded-2xl p-6">
                <h4 className="font-bold text-rose-400 mb-4">Risks & Challenges</h4>
                <ul className="list-disc list-inside text-sm text-rose-200 space-y-2">
                  {(aiData.risks || []).map((risk: string, i: number) => <li key={i}>{risk}</li>)}
                </ul>
              </div>
            </div>

            {/* 12. NEXT STEP */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-sm font-bold text-indigo-200 uppercase tracking-wider mb-2">Immediate Next Step</h3>
                <p className="text-2xl font-bold text-white">{aiData.next_step}</p>
              </div>
            </div>

            {/* FOLLOW UP CHAT */}
            <div className="bg-[#0D111A] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5 text-indigo-400" />
                  Refine this plan
                </h4>
                <p className="text-sm text-slate-400">Ask questions like "Make this cheaper" or "What should I do first?"</p>
              </div>
              
              {chatHistory.length > 0 && (
                <div className="p-6 space-y-4 max-h-80 overflow-y-auto">
                  {chatHistory.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-800 border border-slate-700 text-slate-200'}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {chatLoading && (
                    <div className="flex justify-start">
                      <div className="bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3 flex items-center gap-2 text-slate-400">
                        <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              )}

              <div className="p-4 border-t border-slate-700 bg-slate-900/50 flex gap-2">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleRefine()}
                  placeholder="Ask a follow-up question..."
                  className="flex-1 bg-[#151A23] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  disabled={chatLoading}
                />
                <Button onClick={handleRefine} disabled={!chatInput.trim() || chatLoading} className="px-5">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
