"use client";

import { motion } from "framer-motion";
import { CreditCard, Download, Clock, CheckCircle } from "lucide-react";

export default function FeeInfo() {
  return (
    <motion.article 
      className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 ring-1 ring-inset ring-white/10 shadow-xl mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
    >
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-200">Fee Information</h3>
          <p className="text-sm text-slate-500 mt-1">Semester 6 Academic Fees</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-medium text-white transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]">
          <CreditCard className="w-4 h-4" /> Pay Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center"><CreditCard className="w-4 h-4 text-slate-400" /></div>
            <p className="text-sm font-medium text-slate-400">Total Fees</p>
          </div>
          <p className="text-3xl font-extrabold text-white">₹1,50,000</p>
        </div>
        
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle className="w-4 h-4 text-emerald-400" /></div>
            <p className="text-sm font-medium text-emerald-400">Paid Amount</p>
          </div>
          <p className="text-3xl font-extrabold text-white">₹1,00,000</p>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-2xl rounded-full pointer-events-none" />
          <div className="flex items-center gap-2 mb-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center"><Clock className="w-4 h-4 text-amber-400" /></div>
            <p className="text-sm font-medium text-amber-400">Pending Dues</p>
          </div>
          <p className="text-3xl font-extrabold text-white relative z-10">₹50,000</p>
          <p className="text-xs font-bold text-amber-500 mt-2 relative z-10 uppercase tracking-wider">Due by 15 July 2026</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm uppercase font-bold tracking-wider text-slate-500 mb-4">Recent Transactions</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-black/20 border border-white/5 rounded-xl hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <p className="font-bold text-slate-200">First Installment (Sem 6)</p>
                <p className="text-xs font-medium text-slate-500">10 Jan 2026 • Transaction ID: TXN987654321</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-lg font-bold text-emerald-400">₹1,00,000</p>
              <button className="text-slate-400 hover:text-white transition-colors tooltip" title="Download Receipt">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
