"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Computer Networks", attendance: 95 },
  { name: "Operating Systems", attendance: 89 },
  { name: "Cyber Security", attendance: 97 },
  { name: "Machine Learning", attendance: 90 },
  { name: "Cloud Computing", attendance: 72 },
  { name: "Compiler Design", attendance: 82 },
];

const overallData = [
  { name: "Present", value: 92 },
  { name: "Absent", value: 8 },
];

export default function AttendanceChart() {
  return (
    <motion.article 
      className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 ring-1 ring-inset ring-white/10 shadow-xl mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
    >
      <div className="lg:col-span-1 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
        <h3 className="text-xl font-bold text-slate-200 w-full mb-6">Overall Attendance</h3>
        <div className="h-48 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={overallData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#10b981" /> {/* Emerald for Present */}
                <Cell fill="#ef4444" /> {/* Red for Absent */}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-extrabold text-white">92%</span>
            <span className="text-xs text-emerald-400 font-medium">Safe Zone</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-200">Subject-wise Breakdown</h3>
          <div className="flex gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> &gt;85%</span>
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-500" /> 75-85%</span>
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500" /> &lt;75%</span>
          </div>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} width={120} />
              <Tooltip 
                cursor={{ fill: '#ffffff05' }}
                contentStyle={{ backgroundColor: '#1e1e24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
              />
              <Bar dataKey="attendance" radius={[0, 4, 4, 0]} barSize={20}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.attendance >= 85 ? '#10b981' : entry.attendance >= 75 ? '#f59e0b' : '#ef4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Warning notification for low attendance */}
        {data.some(d => d.attendance < 75) && (
          <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-sm text-red-400 font-medium">Warning: You have attendance below 75% in Cloud Computing. Please attend the upcoming classes.</p>
          </div>
        )}
      </div>
    </motion.article>
  );
}
