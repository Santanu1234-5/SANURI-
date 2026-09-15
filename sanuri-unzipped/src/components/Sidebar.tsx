import { LayoutDashboard, BrainCircuit, Lightbulb, User, Settings, LogOut, Aperture } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  onLogout?: () => void;
}

export function Sidebar({ activeView, onNavigate, onLogout }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'nexus-input', label: 'Nexus AI', icon: BrainCircuit },
    { id: 'solutions', label: 'My Solutions', icon: Lightbulb },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 flex-shrink-0 bg-[#090C15]/80 backdrop-blur-md border-r border-slate-800/50 h-[calc(100vh-3rem)] flex flex-col p-6 sticky top-0 overflow-y-auto hidden md:flex z-40">
      <div className="flex items-center gap-3 text-xl font-bold tracking-wider mb-12 cursor-pointer" onClick={() => onNavigate('home')}>
        <Aperture className="w-8 h-8 text-blue-500" />
        SANURI
      </div>

      <nav className="flex flex-col gap-2 flex-grow">
        {navItems.map((item) => {
          const isActive = activeView.includes(item.id) || (item.id === 'nexus-input' && activeView.startsWith('nexus-'));
          return (
            <button
              key={item.id}
              onClick={() => item.id === 'nexus-input' ? onNavigate('nexus-input') : onNavigate(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-indigo-600/20 to-blue-600/10 text-indigo-400 border border-indigo-500/30 shadow-[0_0_15px_rgba(79,70,229,0.15)]' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <button onClick={onLogout} className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all mt-auto">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
}
