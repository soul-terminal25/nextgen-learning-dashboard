"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Video } from "lucide-react";

const schedule = [
  { time: "09:00 AM - 10:30 AM", subject: "Machine Learning", room: "Block A - 302", faculty: "Dr. Alan Turing", type: "Offline", current: false },
  { time: "11:00 AM - 12:30 PM", subject: "Cloud Computing", room: "Online Lab", faculty: "Prof. Sarah Connor", type: "Online", current: true },
  { time: "01:30 PM - 03:00 PM", subject: "Cyber Security", room: "Block B - 104", faculty: "Dr. Kevin Mitnick", type: "Offline", current: false },
];

export default function Timetable() {
  return (
    <motion.article 
      className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 ring-1 ring-inset ring-white/10 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-200">Today's Timetable</h3>
          <p className="text-sm text-slate-500 mt-1">Wednesday, 19 June 2026</p>
        </div>
      </div>
      
      <div className="relative border-l-2 border-white/10 ml-4 space-y-8 pb-4">
        {schedule.map((session, i) => (
          <div key={i} className="relative pl-6">
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-[#0a0a0c] ${session.current ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] animate-pulse' : 'bg-slate-600'}`} />
            
            <div className={`p-5 rounded-2xl border ${session.current ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-white/5 border-white/10'} transition-colors`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className={`w-4 h-4 ${session.current ? 'text-indigo-400' : 'text-slate-400'}`} />
                    <span className={`text-sm font-bold ${session.current ? 'text-indigo-300' : 'text-slate-300'}`}>{session.time}</span>
                    {session.current && (
                      <span className="ml-2 px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-indigo-500 text-white">Live Now</span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{session.subject}</h4>
                  <p className="text-sm font-medium text-slate-400">by {session.faculty}</p>
                </div>
                
                <div className="flex flex-col gap-2 items-start md:items-end">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-slate-300 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5">
                    {session.type === "Online" ? <Video className="w-4 h-4 text-emerald-400" /> : <MapPin className="w-4 h-4 text-amber-400" />}
                    {session.room}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
