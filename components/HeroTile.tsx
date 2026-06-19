"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroTile() {
  return (
    <motion.article 
      className="md:col-span-2 row-span-1 rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Subtle animated gradient background */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-400/30 transition-colors duration-700" />
      
      {/* 1px inset border for 3D depth */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />

      <div className="z-10 flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
        <Sparkles className="w-4 h-4 text-indigo-400" />
        <span className="text-xs font-medium text-slate-300">7 Day Streak</span>
      </div>

      <div className="z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-2">
          Welcome back, Student
        </h2>
        <p className="text-slate-400 font-medium">You're making great progress. Keep it up!</p>
      </div>
    </motion.article>
  );
}
