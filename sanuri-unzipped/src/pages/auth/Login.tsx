import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#030712] flex overflow-hidden selection:bg-blue-500/30 text-slate-300">
      {/* Left side abstract graphics */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-slate-800/50">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Abstract AI background" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/50 via-transparent to-[#030712]" />
        </div>
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2 mb-16 group inline-flex">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm tracking-tighter">S</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SANURI</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Ideas Today,<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Impact Tomorrow.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              SANURI is a next-generation platform where creativity meets technology. Build, innovate, and create a better future with the power of AI.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-[#0b1120]/50 backdrop-blur-xl border border-slate-800/60 p-8 sm:p-10 rounded-2xl shadow-2xl"
        >
          <div className="mb-8 text-center lg:text-left">
            <div className="flex items-center gap-2 mb-8 justify-center lg:hidden">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-white">SANURI</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400 text-sm">Sign in to continue to SANURI</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300 ml-1">Email address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#030712]/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none text-slate-200 placeholder-slate-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 bg-[#030712]/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none text-slate-200 placeholder-slate-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-4 h-4 border border-slate-600 rounded bg-[#030712] peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group mt-6"
            >
              Login <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 flex items-center justify-between">
            <div className="h-px bg-slate-800 flex-1"></div>
            <span className="px-4 text-xs text-slate-500 uppercase tracking-wider">Or</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <button className="mt-8 w-full bg-[#030712] hover:bg-slate-800/50 border border-slate-700/50 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <p className="mt-8 text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Create Account
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
