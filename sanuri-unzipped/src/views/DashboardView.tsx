import { Sidebar } from '../components/Sidebar';
import { Search, Bell, ChevronRight, FileText, Activity, Layers, PlayCircle, Plus } from 'lucide-react';

export function DashboardView({ onNavigate, user, onLogout }: { onNavigate: (v: any) => void, user: {fullName: string, email: string}, onLogout: () => void }) {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] bg-[#05050A]">
      <Sidebar activeView="dashboard" onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-slate-800/50">
          <div className="relative w-full max-w-md hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full bg-[#0D111A] border border-slate-800 rounded-full pl-12 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <button className="w-10 h-10 rounded-full bg-[#0D111A] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border border-[#0D111A]"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-800 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{user.fullName}</div>
                <div className="text-xs text-slate-500">{user.email}</div>
              </div>
              <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=4F46E5&color=fff&bold=true`} alt="User" className="w-10 h-10 rounded-full border-2 border-indigo-500/20" />
            </div>
          </div>
        </header>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Welcome back, {user.fullName.split(' ')[0]}! 👋</h1>
          <p className="text-slate-400">Here's your journey with SANURI Nexus.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-6 hover:border-indigo-500/30 transition-colors cursor-pointer group">
            <div className="flex items-center gap-2 text-indigo-400 mb-6">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Total Solutions</span>
            </div>
            <div className="text-4xl font-bold group-hover:text-indigo-400 transition-colors">12</div>
          </div>
          
          <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-6 hover:border-purple-500/30 transition-colors cursor-pointer group">
            <div className="flex items-center gap-2 text-purple-400 mb-6">
               <div className="p-2 bg-purple-500/10 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Active Plans</span>
            </div>
            <div className="text-4xl font-bold group-hover:text-purple-400 transition-colors">3</div>
          </div>
          
          <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/30 transition-colors cursor-pointer group">
            <div className="flex items-center gap-2 text-emerald-400 mb-6">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Impact Score</span>
            </div>
            <div className="text-4xl font-bold group-hover:text-emerald-400 transition-colors">87%</div>
          </div>
          
          <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-6 hover:border-blue-500/30 transition-colors cursor-pointer group">
            <div className="flex items-center gap-2 text-blue-400 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <PlayCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Account Status</span>
            </div>
            <div className="text-4xl font-bold text-emerald-500">Active</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#0D111A] border border-slate-800 rounded-3xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">Your Recent Activity</h2>
            <div className="space-y-4">
              {[
                { icon: Layers, title: 'Urban Traffic Solution', time: '2 hours ago', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
                { icon: FileText, title: 'Study Planner', time: '5 hours ago', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
                { icon: Activity, title: 'Green Campus Initiative', time: '1 day ago', color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
                { icon: FileText, title: 'Health & Wellness Plan', time: '2 days ago', color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-800/40 border border-transparent hover:border-slate-700/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color} border ${item.border}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold group-hover:text-indigo-300 transition-colors text-slate-200">{item.title}</span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0D111A] border border-slate-800 rounded-3xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button onClick={() => onNavigate('nexus-input')} className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-800/20 hover:bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
                  <div className="p-2 bg-[#151A23] rounded-lg border border-slate-700 group-hover:border-indigo-500/30">
                    <Plus className="w-4 h-4 text-indigo-400" />
                  </div>
                  <span className="font-semibold">Create New Solution</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-800/20 hover:bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/30 transition-all group">
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
                  <div className="p-2 bg-[#151A23] rounded-lg border border-slate-700 group-hover:border-purple-500/30">
                    <FileText className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="font-semibold">View My Plans</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-800/20 hover:bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
                  <div className="p-2 bg-[#151A23] rounded-lg border border-slate-700 group-hover:border-emerald-500/30">
                    <Layers className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="font-semibold">Explore Templates</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-800/20 hover:bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all group">
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
                  <div className="p-2 bg-[#151A23] rounded-lg border border-slate-700 group-hover:border-blue-500/30">
                    <Bell className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-semibold">Get Support</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
