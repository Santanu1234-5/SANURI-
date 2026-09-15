import { motion } from 'motion/react';
import { Sparkles, FolderOpen, Activity, CheckCircle, ArrowRight, Clock, Plus, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Overview() {
  const stats = [
    { title: 'Total Solutions', value: '12', icon: FolderOpen, color: 'from-blue-500 to-cyan-400' },
    { title: 'Active Plans', value: '3', icon: Activity, color: 'from-purple-500 to-pink-500' },
    { title: 'Impact Score', value: '87%', icon: Sparkles, color: 'from-green-500 to-emerald-400' },
    { title: 'Account Status', value: 'Active', icon: CheckCircle, color: 'from-blue-400 to-indigo-500' },
  ];

  const recentActivity = [
    { title: 'Urban Traffic Solution', time: '2 hours ago', icon: FolderOpen, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { title: 'Study Planner', time: '5 hours ago', icon: FolderOpen, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { title: 'Green Campus Initiative', time: '1 day ago', icon: Activity, color: 'text-green-400', bg: 'bg-green-400/10' },
    { title: 'Health & Wellness Plan', time: '2 days ago', icon: CheckCircle, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  ];

  const quickActions = [
    { title: 'Create New Solution', icon: Plus, to: '/nexus-ai' },
    { title: 'View My Plans', icon: FolderOpen, to: '/dashboard/solutions' },
    { title: 'Explore Templates', icon: Sparkles, to: '/dashboard/templates' },
    { title: 'Get Support', icon: ExternalLink, to: '/support' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Santanu! 👋</h1>
        <p className="text-slate-400">Here's your journey with SANURI Nexus.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#0b1120]/50 backdrop-blur-xl border border-slate-800/60 p-6 rounded-2xl flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-4 text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center">
                <stat.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">{stat.title}</span>
            </div>
            <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 bg-[#0b1120]/50 backdrop-blur-xl border border-slate-800/60 p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">Your Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-800/30 transition-colors border border-transparent hover:border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${activity.bg} ${activity.color} flex items-center justify-center`}>
                    <activity.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{activity.title}</h4>
                    <span className="text-xs text-slate-500">nexus-ai</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#0b1120]/50 backdrop-blur-xl border border-slate-800/60 p-6 rounded-2xl"
        >
          <h2 className="text-lg font-bold text-white mb-6">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action, i) => (
              <Link
                key={i}
                to={action.to}
                className="flex items-center justify-between p-4 rounded-xl bg-[#030712]/50 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                    <action.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{action.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
