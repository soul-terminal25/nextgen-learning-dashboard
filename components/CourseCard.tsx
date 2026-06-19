"use client";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";

type CourseCardProps = {
  course: {
    id: string;
    title: string;
    progress: number;
    icon_name: string;
  };
};

export default function CourseCard({ course }: CourseCardProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(course.progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [course.progress]);

  const IconComponent = (LucideIcons as any)[course.icon_name] || LucideIcons.BookOpen;

  return (
    <motion.article
      className="h-48 rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden group shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* 1px inset border for 3D depth */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none z-10" />

      {/* Refined subtle grain background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors duration-500 pointer-events-none" />

      <div className="z-10 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-white/20 transition-colors">
        <IconComponent className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
      </div>

      <div className="z-10">
        <h3 className="font-semibold text-slate-200 tracking-tight text-lg mb-4 truncate">{course.title}</h3>
        
        <div className="flex justify-between text-xs text-slate-400 font-medium mb-2">
          <span>Progress</span>
          <span className="text-slate-200">{course.progress}%</span>
        </div>
        
        <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${animatedProgress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.article>
  );
}
