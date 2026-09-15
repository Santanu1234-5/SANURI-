import { Aperture, Play } from 'lucide-react';
import { Button } from '../components/Button';

export function HomeView({ onNavigate }: { onNavigate: (v: any) => void }) {
  return (
    <div className="min-h-[calc(100vh-3rem)] flex flex-col relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <header className="flex items-center justify-between px-6 md:px-10 py-6 relative z-10 border-b border-white/5 bg-[#05050A]/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 text-2xl font-bold tracking-wider">
          <Aperture className="w-8 h-8 text-blue-500" />
          SANURI
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); onNavigate('nexus-input'); }}>Nexus AI</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <Button variant="outline" className="rounded-full px-8 py-2 border-slate-600 text-sm hidden md:flex" onClick={() => onNavigate('login')}>
          Login
        </Button>
      </header>

      <main className="flex-grow flex flex-col justify-center px-6 md:px-20 relative z-10 max-w-4xl py-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Ideas Today,<br />
          Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Tomorrow.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
          SANURI is a next-generation platform where creativity meets technology. Build, innovate, and create a better future with the power of AI.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button onClick={() => onNavigate('nexus-input')} className="w-full sm:w-auto px-8">
            Explore Nexus AI
          </Button>
          <Button variant="ghost" className="w-full sm:w-auto text-white hover:bg-white/5 px-8">
            <Play className="w-5 h-5 fill-white" />
            Watch Video
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-12 md:gap-24 mt-20 md:mt-32">
          <div>
            <div className="text-4xl font-bold mb-1 tracking-tight">100+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider font-medium">Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1 tracking-tight">50K+</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider font-medium">Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1 tracking-tight">99%</div>
            <div className="text-slate-400 text-sm uppercase tracking-wider font-medium">Uptime</div>
          </div>
        </div>
      </main>
    </div>
  );
}
