import { Sidebar } from '../components/Sidebar';
import { Button } from '../components/Button';
import { User, Mail, Calendar, ShieldCheck, Edit3 } from 'lucide-react';

export function ProfileView({ onNavigate, user, onLogout }: { onNavigate: (v: any) => void, user: {fullName: string, email: string}, onLogout: () => void }) {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] bg-[#05050A]">
      <Sidebar activeView="profile" onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Profile Settings</h1>
          <p className="text-slate-400 mb-10">Manage your account information and preferences.</p>

          <div className="bg-[#0D111A] border border-slate-800 rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
            <div className="h-40 bg-gradient-to-r from-indigo-900/60 to-blue-900/40 relative">
              <div className="absolute -bottom-12 left-8 md:left-10">
                <div className="w-28 h-28 rounded-full border-4 border-[#0D111A] overflow-hidden bg-slate-800 relative group cursor-pointer shadow-xl">
                  <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName)}&background=4F46E5&color=fff&size=200&bold=true`} alt="Avatar" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all text-white backdrop-blur-sm">
                    <Edit3 className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                 <Button variant="secondary" className="gap-2 text-sm px-5 py-2 h-auto bg-[#05050A]/50 backdrop-blur-md border-slate-700/50 hover:bg-[#0D111A]">
                    <Edit3 className="w-4 h-4" /> Edit Profile
                 </Button>
              </div>
            </div>
            
            <div className="pt-20 px-8 md:px-10 pb-10">
              <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">{user.fullName}</h2>
              <p className="text-slate-400 flex items-center gap-2 mb-10 font-medium">
                <Mail className="w-4 h-4" /> {user.email}
              </p>

              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-slate-800/80 pb-4">Account Information</h3>
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-slate-800/50 gap-2">
                  <div className="flex items-center gap-3 text-slate-400 font-medium">
                    <User className="w-5 h-5" />
                    Full Name
                  </div>
                  <div className="font-semibold text-white">{user.fullName}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-slate-800/50 gap-2">
                  <div className="flex items-center gap-3 text-slate-400 font-medium">
                    <Mail className="w-5 h-5" />
                    Email
                  </div>
                  <div className="font-semibold text-white">{user.email}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-slate-800/50 gap-2">
                  <div className="flex items-center gap-3 text-slate-400 font-medium">
                    <Calendar className="w-5 h-5" />
                    Member Since
                  </div>
                  <div className="font-semibold text-white">April 2025</div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-2">
                  <div className="flex items-center gap-3 text-slate-400 font-medium">
                    <ShieldCheck className="w-5 h-5" />
                    Account Status
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 text-sm font-bold border border-emerald-500/20 w-fit">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
