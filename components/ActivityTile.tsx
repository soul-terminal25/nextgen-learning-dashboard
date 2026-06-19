"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ActivityTile() {
  const days = [
    { active: true, height: 60 }, { active: false, height: 20 }, { active: true, height: 45 },
    { active: true, height: 80 }, { active: false, height: 20 }, { active: false, height: 20 },
    { active: true, height: 35 }, { active: true, height: 50 }, { active: true, height: 90 },
    { active: false, height: 20 }, { active: true, height: 70 }, { active: true, height: 85 },
    { active: false, height: 20 }, { active: true, height: 40 }, { active: true, height: 65 },
    { active: true, height: 55 }, { active: false, height: 20 }, { active: true, height: 75 },
    { active: true, height: 100 }, { active: false, height: 20 }, { active: true, height: 30 },
    { active: true, height: 50 }, { active: false, height: 20 }, { active: true, height: 80 },
    { active: true, height: 60 }, { active: true, height: 95 }, { active: false, height: 20 },
    { active: true, height: 85 }
  ];

  return (
    <motion.article 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="md:col-span-1 row-span-1 h-full"
    >
      <Link href="/activity" className="h-full min-h-[220px] w-full rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/5 p-6 flex flex-col relative overflow-hidden group block shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-0" />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none z-10" />
        
        <div className="flex justify-between items-center mb-6 z-10">
          <h3 className="text-lg font-semibold text-slate-200 tracking-tight">Recent Activity</h3>
          <span className="text-xs font-medium text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">View Details &rarr;</span>
        </div>
        
        <div className="flex-1 flex items-end gap-1.5 z-10 mt-auto h-24">
          {days.map((day, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${day.height}%`, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.03 }}
              className={`w-full rounded-sm transition-colors duration-500 ${day.active ? 'bg-indigo-500/80 group-hover:bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-white/10 group-hover:bg-white/20'}`}
            />
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
