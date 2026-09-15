import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Sparkles, 
  FolderOpen, 
  User, 
  Settings, 
  LogOut,
  Search,
  Bell,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';

export default function DashboardLayout() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Discover', href: '/dashboard/discover', icon: Compass },
    { name: 'Nexus AI', href: '/nexus-ai', icon: Sparkles },
    { name: 'My Solutions', href: '/dashboard/solutions', icon: FolderOpen },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-blue-500/30 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800/60 bg-[#0b1120]/50 backdrop-blur-xl flex flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-slate-800/60">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-sm tracking-tighter">S</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SANURI</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-blue-600/10 text-blue-400 font-medium' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800/60">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all">
            <LogOut className="w-5 h-5 text-slate-500" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-20 border-b border-slate-800/60 bg-[#0b1120]/30 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex-1 max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full md:w-96 pl-10 pr-4 py-2 bg-[#030712]/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none text-sm text-slate-200 placeholder-slate-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-200 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border border-[#0b1120]"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white">Santanu Maiti</p>
                <p className="text-xs text-slate-500">santanu@example.com</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
