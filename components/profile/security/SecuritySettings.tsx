"use client";

import { motion } from "framer-motion";
import { Key, Smartphone, Monitor, ShieldAlert, LogOut } from "lucide-react";

export default function SecuritySettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.article 
        className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center"><Key className="w-5 h-5 text-indigo-400" /></div>
          <div>
            <h3 className="text-lg font-bold text-slate-200">Password & Auth</h3>
            <p className="text-xs font-medium text-slate-400 mt-0.5">Manage your credentials</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <button className="w-full flex justify-between items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors text-left group">
            <div>
              <p className="font-semibold text-slate-200 group-hover:text-white transition-colors">Change Password</p>
              <p className="text-xs text-slate-500 mt-1">Last changed 3 months ago</p>
            </div>
            <span className="text-slate-400 group-hover:text-white transition-colors">&rarr;</span>
          </button>
          
          <div className="w-full flex justify-between items-center p-4 bg-white/5 border border-white/10 rounded-xl">
            <div>
              <p className="font-semibold text-slate-200">Two-Factor Authentication</p>
              <p className="text-xs text-emerald-500 font-medium mt-1">Currently Enabled</p>
            </div>
            <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
            </div>
          </div>
        </div>
      </motion.article>

      <motion.article 
        className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center"><ShieldAlert className="w-5 h-5 text-amber-400" /></div>
          <div>
            <h3 className="text-lg font-bold text-slate-200">Active Sessions</h3>
            <p className="text-xs font-medium text-slate-400 mt-0.5">Devices currently logged in</p>
          </div>
        </div>
        
        <div className="space-y-3 relative z-10">
          <div className="flex justify-between items-center p-3 bg-black/20 border border-white/5 rounded-xl">
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-sm font-bold text-white">Windows PC • Chrome</p>
                <p className="text-xs font-medium text-emerald-500">Current Session • New Delhi</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-black/20 border border-white/5 rounded-xl">
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-sm font-bold text-slate-300">iPhone 14 Pro • Safari</p>
                <p className="text-xs font-medium text-slate-500">Last active 2 hrs ago • New Delhi</p>
              </div>
            </div>
            <button className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider">Log out</button>
          </div>
        </div>

        <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-bold text-red-400 transition-colors relative z-10">
          <LogOut className="w-4 h-4" /> Log Out All Other Devices
        </button>
      </motion.article>
    </div>
  );
}
