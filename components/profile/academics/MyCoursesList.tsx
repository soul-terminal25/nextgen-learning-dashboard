"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Download } from "lucide-react";

const courses = [
  { code: "CSE301", name: "Machine Learning", faculty: "Dr. Alan Turing", credits: 4, grade: "A", assignments: "4/5" },
  { code: "CSE302", name: "Cloud Computing", faculty: "Prof. Sarah Connor", credits: 3, grade: "B+", assignments: "3/3" },
  { code: "CSE303", name: "Cyber Security", faculty: "Dr. Kevin Mitnick", credits: 4, grade: "A+", assignments: "5/5" },
];

export default function MyCoursesList() {
  return (
    <motion.article 
      className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 ring-1 ring-inset ring-white/10 shadow-xl mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-200">Current Semester Courses</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-md border border-indigo-500/30">
                {course.code}
              </span>
              <span className="text-xs font-medium text-slate-400">{course.credits} Credits</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-1 truncate">{course.name}</h4>
            <p className="text-sm text-slate-400 mb-4">{course.faculty}</p>
            
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="bg-black/20 rounded-lg p-2 text-center border border-white/5">
                <p className="text-xs text-slate-500 mb-1">Current Grade</p>
                <p className="text-lg font-extrabold text-emerald-400">{course.grade}</p>
              </div>
              <div className="bg-black/20 rounded-lg p-2 text-center border border-white/5">
                <p className="text-xs text-slate-500 mb-1">Assignments</p>
                <p className="text-lg font-extrabold text-blue-400">{course.assignments}</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-semibold text-white transition-colors">
                <ExternalLink className="w-3 h-3" /> Open LMS
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-slate-300 transition-colors tooltip" title="Materials">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
