"use client";

import { motion } from "framer-motion";
import { Camera, Edit2, Lock, GraduationCap, Mail, Phone, Calendar, Book, Building, Hash } from "lucide-react";
import toast from "react-hot-toast";

export default function ProfileHeader() {
  const handleUploadPhoto = () => toast.success("Photo upload simulator triggered!");
  const handleChangePassword = () => toast("Redirecting to security settings...");
  
  return (
    <motion.article 
      className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 shadow-xl relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
        
        {/* Profile Picture */}
        <div className="relative group">
          <div className="w-32 h-32 rounded-full bg-indigo-500/20 border-2 border-indigo-500/50 flex items-center justify-center text-4xl font-bold text-indigo-400 overflow-hidden shrink-0 shadow-lg">
            S
          </div>
          <button 
            onClick={handleUploadPhoto}
            className="absolute bottom-0 right-0 w-10 h-10 bg-[#1e1e24] border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-xl group-hover:scale-110"
          >
            <Camera className="w-4 h-4" />
          </button>
        </div>

        {/* Core Info */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">Student Name</h2>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>
              <p className="text-indigo-400 font-medium text-lg">B.Tech Computer Science Engineering</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-slate-200 transition-colors">
                <Edit2 className="w-4 h-4" /> Edit Profile
              </button>
              <button 
                onClick={handleChangePassword}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-sm font-medium text-indigo-300 transition-colors"
              >
                <Lock className="w-4 h-4" /> Change Password
              </button>
            </div>
          </div>

          {/* Grid Metadata */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Hash className="w-4 h-4 text-slate-400" /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Roll Number</p>
                <p className="text-sm font-medium text-slate-200">2026CSE1001</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Building className="w-4 h-4 text-slate-400" /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Department</p>
                <p className="text-sm font-medium text-slate-200">Computing</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Calendar className="w-4 h-4 text-slate-400" /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Semester & Batch</p>
                <p className="text-sm font-medium text-slate-200">Sem 6 • 2026 Batch</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Mail className="w-4 h-4 text-slate-400" /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">University Email</p>
                <p className="text-sm font-medium text-slate-200">student@nextgen.edu</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </motion.article>
  );
}
