"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy, Target, TrendingUp } from "lucide-react";

export default function AcademicOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="Credits Earned" 
        value="145 / 180" 
        subtitle="80.5% Complete" 
        icon={Target} 
        color="text-emerald-400" 
        bg="bg-emerald-500/10" 
        border="border-emerald-500/20"
      />
      <StatCard 
        title="Current CGPA" 
        value="8.75" 
        subtitle="Top 15% of Batch" 
        icon={Trophy} 
        color="text-amber-400" 
        bg="bg-amber-500/10" 
        border="border-amber-500/20"
      />
      <StatCard 
        title="Last Sem GPA" 
        value="9.10" 
        subtitle="Up by 0.35" 
        icon={TrendingUp} 
        color="text-blue-400" 
        bg="bg-blue-500/10" 
        border="border-blue-500/20"
      />
      <StatCard 
        title="Active Courses" 
        value="6" 
        subtitle="22 Credits this Sem" 
        icon={BookOpen} 
        color="text-indigo-400" 
        bg="bg-indigo-500/10" 
        border="border-indigo-500/20"
      />
      
      {/* Program Progress Bar spans full width */}
      <motion.div 
        className="md:col-span-2 lg:col-span-4 bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-200">Program Completion</h3>
            <p className="text-sm text-slate-400 mt-1">B.Tech Computer Science Engineering (4 Years)</p>
          </div>
          <span className="text-2xl font-extrabold text-white">80.5%</span>
        </div>
        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: "80.5%" }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon: Icon, color, bg, border }: any) {
  return (
    <motion.article 
      className={`bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 shadow-xl relative overflow-hidden group`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`absolute -top-10 -right-10 w-32 h-32 ${bg} rounded-full blur-[40px] pointer-events-none transition-opacity group-hover:opacity-70 opacity-30`} />
      
      <div className="flex justify-between items-start mb-4 z-10 relative">
        <div className={`w-12 h-12 rounded-xl ${bg} ${border} border flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
      <div className="z-10 relative">
        <p className="text-sm font-medium text-slate-400 mb-1">{title}</p>
        <h4 className="text-3xl font-bold text-white mb-1">{value}</h4>
        <p className={`text-xs font-semibold ${color}`}>{subtitle}</p>
      </div>
    </motion.article>
  );
}
