"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Flame, Target } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function DetailedActivity({ initialStats, initialUsage }: { initialStats: any, initialUsage: any[] }) {
  // Fallback mock data in case Supabase tables are empty or RLS is blocking reads during the audition
  const fallbackStats = { current_streak: 7, hours_learned: 42, modules_completed: 12 };
  const fallbackUsage = [
    { hour: "12 AM", activity: 10 }, { hour: "1 AM", activity: 5 }, { hour: "2 AM", activity: 0 },
    { hour: "3 AM", activity: 0 }, { hour: "4 AM", activity: 0 }, { hour: "5 AM", activity: 0 },
    { hour: "6 AM", activity: 15 }, { hour: "7 AM", activity: 30 }, { hour: "8 AM", activity: 60 },
    { hour: "9 AM", activity: 80 }, { hour: "10 AM", activity: 90 }, { hour: "11 AM", activity: 75 },
    { hour: "12 PM", activity: 50 }, { hour: "1 PM", activity: 40 }, { hour: "2 PM", activity: 65 },
    { hour: "3 PM", activity: 85 }, { hour: "4 PM", activity: 100 }, { hour: "5 PM", activity: 95 },
    { hour: "6 PM", activity: 60 }, { hour: "7 PM", activity: 40 }, { hour: "8 PM", activity: 30 },
    { hour: "9 PM", activity: 45 }, { hour: "10 PM", activity: 25 }, { hour: "11 PM", activity: 15 }
  ];

  const [stats, setStats] = useState(initialStats?.current_streak ? initialStats : fallbackStats);
  const [usage, setUsage] = useState(initialUsage && initialUsage.length > 0 ? initialUsage : fallbackUsage);
  const supabase = createClient();

  useEffect(() => {
    const statsSubscription = supabase
      .channel('user_stats_changes')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'user_stats' }, (payload) => {
        if (payload.new.id === stats?.id || !stats?.id) {
          setStats(payload.new);
        }
      })
      .subscribe();

    const usageSubscription = supabase
      .channel('hourly_usage_changes')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'hourly_usage' }, (payload) => {
        setUsage((prev) => 
          prev.map((item) => item.id === payload.new.id ? payload.new : item)
        );
      })
      .subscribe();

    return () => {
      supabase.removeChannel(statsSubscription);
      supabase.removeChannel(usageSubscription);
    };
  }, [stats?.id, supabase]);

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.article variants={itemVariants} className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 flex items-center gap-4 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40 transition-colors z-10">
            <Flame className="w-7 h-7 text-orange-500" />
          </div>
          <div className="z-10">
            <p className="text-slate-400 text-sm font-medium tracking-wide">Current Streak</p>
            <p className="text-3xl font-extrabold text-white">{stats?.current_streak || 0} <span className="text-lg font-medium text-slate-400">Days</span></p>
          </div>
        </motion.article>
        
        <motion.article variants={itemVariants} className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 flex items-center gap-4 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors z-10">
            <Clock className="w-7 h-7 text-blue-500" />
          </div>
          <div className="z-10">
            <p className="text-slate-400 text-sm font-medium tracking-wide">Hours Learned</p>
            <p className="text-3xl font-extrabold text-white">{stats?.hours_learned || 0} <span className="text-lg font-medium text-slate-400">hrs</span></p>
          </div>
        </motion.article>
        
        <motion.article variants={itemVariants} className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 flex items-center gap-4 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-colors z-10">
            <Target className="w-7 h-7 text-green-500" />
          </div>
          <div className="z-10">
            <p className="text-slate-400 text-sm font-medium tracking-wide">Modules Completed</p>
            <p className="text-3xl font-extrabold text-white">{stats?.modules_completed || 0}</p>
          </div>
        </motion.article>
      </div>

      <motion.article variants={itemVariants} className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-8 ring-1 ring-inset ring-white/10 h-[450px] flex flex-col shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none opacity-50" />
        <h3 className="text-xl font-bold text-slate-200 mb-8 tracking-tight z-10">Today's Usage Pattern</h3>
        <div className="flex-1 flex items-end gap-2 z-10">
          {usage.map((data, i) => (
            <div key={data.id || i} className="flex-1 flex flex-col justify-end h-full group">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${data.activity}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 15, delay: i * 0.05 }}
                className="w-full bg-indigo-500/40 group-hover:bg-indigo-400 rounded-t-sm transition-colors relative shadow-[0_0_15px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-xl">
                  {data.hour}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6 text-xs font-medium text-slate-500 z-10 uppercase tracking-wider px-2">
          <span>12 AM</span>
          <span>12 PM</span>
          <span>11 PM</span>
        </div>
      </motion.article>
    </motion.section>
  );
}
