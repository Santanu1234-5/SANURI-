import { motion } from 'motion/react';
import { User, Mail, Calendar, Activity, Edit3 } from 'lucide-react';

export default function ProfileSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-slate-400">Manage your account information and preferences.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="bg-[#0b1120]/50 backdrop-blur-xl border border-slate-800/60 p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold overflow-hidden mb-4 border-4 border-[#030712] shadow-xl">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Santanu Maiti</h2>
            <p className="text-slate-400 text-sm mb-6">santanu@example.com</p>
            
            <button className="w-full bg-[#030712]/50 hover:bg-slate-800/50 border border-slate-700 text-white font-medium py-2.5 rounded-xl transition-all flex items-center justify-center gap-2">
              <Edit3 className="w-4 h-4" /> Edit Profile
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-[#0b1120]/50 backdrop-blur-xl border border-slate-800/60 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-400" />
              Account Information
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-slate-800/50 pb-4">
                <div className="text-sm font-medium text-slate-500">Full Name</div>
                <div className="sm:col-span-2 text-sm text-slate-200">Santanu Maiti</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-slate-800/50 pb-4">
                <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  Email
                </div>
                <div className="sm:col-span-2 text-sm text-slate-200">santanumaiti424@gmail.com</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-b border-slate-800/50 pb-4">
                <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  Member Since
                </div>
                <div className="sm:col-span-2 text-sm text-slate-200">April 2025</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  Account Status
                </div>
                <div className="sm:col-span-2 text-sm text-slate-200">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 font-semibold border border-green-500/20">
                    <Activity className="w-3.5 h-3.5" /> Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
