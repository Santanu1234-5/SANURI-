import { Aperture, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/Button';
import { useState } from 'react';

export function AuthView({ view, onNavigate, onLogin }: { view: string, onNavigate: (v: any) => void, onLogin?: (user: {fullName: string, email: string}) => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (view === 'login' || view === 'register') {
      if (onLogin && email) {
        let name = fullName;
        if (view === 'login' && !name) {
           name = email.split('@')[0] || 'User';
           name = name.charAt(0).toUpperCase() + name.slice(1);
        }
        onLogin({ fullName: name, email });
      }
    } else if (view === 'forgot-password') {
      onNavigate('reset-password');
    } else if (view === 'reset-password') {
      onNavigate('login');
    }
  };

  return (
    <div className="min-h-[calc(100vh-3rem)] flex items-center justify-center p-6 relative">
       {/* Background decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-[#0D111A]/90 backdrop-blur-xl border border-slate-800/80 p-8 md:p-10 rounded-[2rem] shadow-2xl relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 text-2xl font-bold tracking-wider mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
            <Aperture className="w-8 h-8 text-blue-500" />
            SANURI
          </div>
          
          {view === 'login' && (
            <>
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-slate-400 text-sm text-center">Sign in to continue to SANURI</p>
            </>
          )}
          {view === 'register' && (
            <>
              <h2 className="text-3xl font-bold mb-2">Create Account</h2>
              <p className="text-slate-400 text-sm text-center">Join SANURI and start your journey</p>
            </>
          )}
          {view === 'forgot-password' && (
            <>
              <h2 className="text-3xl font-bold mb-2">Forgot Your Password?</h2>
              <p className="text-slate-400 text-sm text-center px-4">Enter your email and we'll send you a reset link.</p>
            </>
          )}
          {view === 'reset-password' && (
            <>
              <h2 className="text-3xl font-bold mb-2">Reset Your Password</h2>
              <p className="text-slate-400 text-sm text-center">Enter your new password below.</p>
            </>
          )}
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {view === 'register' && (
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Full Name</label>
              <div className="relative">
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Your full name" className="w-full bg-[#151A23] border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
            </div>
          )}

          {(view === 'login' || view === 'register' || view === 'forgot-password') && (
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Email address</label>
              <div className="relative">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" className="w-full bg-[#151A23] border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
            </div>
          )}

          {(view === 'login' || view === 'register' || view === 'reset-password') && (
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">
                {view === 'reset-password' ? 'New Password' : 'Password'}
              </label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder={view === 'reset-password' ? "Enter new password" : (view === 'register' ? "Create a strong password" : "Enter your password")} className="w-full bg-[#151A23] border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors pr-12" />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}

          {(view === 'register' || view === 'reset-password') && (
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Confirm Password</label>
              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" className="w-full bg-[#151A23] border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors pr-12" />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}

          {view === 'login' && (
            <div className="flex items-center justify-between text-sm mt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white transition-colors">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="appearance-none w-4 h-4 border border-slate-600 rounded bg-[#151A23] checked:bg-indigo-500 checked:border-indigo-500 transition-colors cursor-pointer" />
                  <svg className="absolute w-3 h-3 pointer-events-none hidden peer-checked:block text-white" viewBox="0 0 14 14" fill="none"><path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                Remember me
              </label>
              <button type="button" onClick={() => onNavigate('forgot-password')} className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">Forgot password?</button>
            </div>
          )}

          {(view === 'register' || view === 'reset-password') && (
            <div className="space-y-2 mt-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-400">Password Strength</span>
                <span className={view === 'register' ? "text-amber-500" : "text-emerald-500"}>{view === 'register' ? 'Medium' : 'Strong'}</span>
              </div>
              <div className="flex gap-1.5 h-1.5">
                <div className="flex-1 bg-emerald-500 rounded-full"></div>
                <div className="flex-1 bg-emerald-500 rounded-full"></div>
                <div className={`flex-1 rounded-full ${view === 'register' ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                <div className={`flex-1 rounded-full ${view === 'register' ? 'bg-slate-700' : 'bg-emerald-500'}`}></div>
              </div>
            </div>
          )}

          <Button type="submit" className="w-full mt-4 py-3.5 text-base shadow-[0_4px_20px_rgba(79,70,229,0.3)]">
            {view === 'login' && 'Login'}
            {view === 'register' && 'Create Account'}
            {view === 'forgot-password' && 'Send Reset Link'}
            {view === 'reset-password' && 'Reset Password'}
          </Button>

          {view === 'login' && (
            <>
              <div className="flex items-center gap-4 my-2">
                <div className="h-px bg-slate-800 flex-1"></div>
                <span className="text-xs text-slate-500 font-medium">OR</span>
                <div className="h-px bg-slate-800 flex-1"></div>
              </div>
              <Button type="button" variant="secondary" className="w-full flex items-center justify-center gap-3 py-3.5 border-slate-700/50 bg-[#151A23] hover:bg-slate-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
              </Button>
            </>
          )}

          <div className="text-center text-sm text-slate-400 mt-4">
            {view === 'login' && <>Don't have an account? <button type="button" onClick={() => onNavigate('register')} className="text-indigo-400 hover:text-indigo-300 font-medium ml-1">Create Account</button></>}
            {view === 'register' && <>Already have an account? <button type="button" onClick={() => onNavigate('login')} className="text-indigo-400 hover:text-indigo-300 font-medium ml-1">Sign In</button></>}
            {(view === 'forgot-password' || view === 'reset-password') && (
              <button type="button" onClick={() => onNavigate('login')} className="text-indigo-400 hover:text-indigo-300 font-medium">Back to Login</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
