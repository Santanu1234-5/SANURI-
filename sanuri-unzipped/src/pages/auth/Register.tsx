import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, Lock, Mail, ArrowRight, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  // Simple password strength calculation
  const getPasswordStrength = () => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.length < 10) return 2;
    return 3;
  };
  
  const strength = getPasswordStrength();
  const strengthColors = ['bg-slate-700', 'bg-red-500', 'bg-yellow-500', 'bg-green-500'];
  const strengthLabels = ['', 'Weak', 'Medium', 'Strong'];

  return (
    <div className="min-h-screen bg-[#030712] flex overflow-hidden selection:bg-blue-500/30 text-slate-300">
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-slate-800/50">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2564&auto=format&fit=crop" 
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
              Join the <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Future Hub.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              Create an account to discover actionable solutions to real-world problems with the power of Nexus AI.
            </p>
          </motion.div>
        </div>
      </div>

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
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-slate-400 text-sm">Join SANURI and start your journey</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 bg-[#030712]/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none text-slate-200 placeholder-slate-500 transition-all"
                />
              </div>
            </div>

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
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

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300 ml-1">Confirm Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-12 py-3 bg-[#030712]/50 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none text-slate-200 placeholder-slate-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {password.length > 0 && (
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1 flex-1">
                  {[1, 2, 3].map((level) => (
                    <div 
                      key={level} 
                      className={`h-1.5 flex-1 rounded-full ${strength >= level ? strengthColors[strength] : 'bg-slate-700'}`}
                    />
                  ))}
                </div>
                <span className={`text-xs ml-3 ${strengthColors[strength].replace('bg-', 'text-')}`}>
                  {strengthLabels[strength]}
                </span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group mt-6"
            >
              Create Account <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
