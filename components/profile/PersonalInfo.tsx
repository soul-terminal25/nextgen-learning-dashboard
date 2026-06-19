"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import toast from "react-hot-toast";

export default function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock data state for optimistic UI updates
  const [formData, setFormData] = useState({
    phone: "+91 98765 43210",
    personalEmail: "student.personal@gmail.com",
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Personal information updated successfully!");
  };

  return (
    <motion.article 
      className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 ring-1 ring-inset ring-white/10 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
    >
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-200">Personal Information</h3>
          <p className="text-sm text-slate-500 mt-1">Manage your basic details and contact info.</p>
        </div>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-slate-200 transition-colors"
          >
            Edit Info
          </button>
        ) : (
          <div className="flex gap-2">
            <button 
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-slate-300 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 rounded-xl text-sm font-medium text-white transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              <Save className="w-4 h-4" /> Save
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6">
        {/* Read-only fields */}
        <Field label="Full Name" value="Student Name" readOnly />
        <Field label="Date of Birth" value="15 Aug 2004" readOnly />
        <Field label="Gender" value="Male" readOnly />
        <Field label="Blood Group" value="O+" readOnly />
        <Field label="Nationality" value="Indian" readOnly />
        <Field label="Aadhaar / ID" value="XXXX-XXXX-1234" readOnly />
        <Field label="Father's Name" value="John Doe Sr." readOnly />
        <Field label="Mother's Name" value="Jane Doe" readOnly />
        <Field label="Guardian Contact" value="+91 91234 56789" readOnly />

        {/* Editable Fields */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase font-semibold tracking-wider text-slate-500">Phone Number</label>
          {isEditing ? (
            <input 
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="bg-white/5 border border-indigo-500/50 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          ) : (
            <p className="text-sm font-medium text-slate-200 py-2">{formData.phone}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase font-semibold tracking-wider text-slate-500">Personal Email</label>
          {isEditing ? (
            <input 
              type="email"
              value={formData.personalEmail}
              onChange={(e) => setFormData({...formData, personalEmail: e.target.value})}
              className="bg-white/5 border border-indigo-500/50 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          ) : (
            <p className="text-sm font-medium text-slate-200 py-2">{formData.personalEmail}</p>
          )}
        </div>

      </div>
    </motion.article>
  );
}

function Field({ label, value, readOnly = false }: { label: string, value: string, readOnly?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5 group">
      <label className="text-xs uppercase font-semibold tracking-wider text-slate-500 flex justify-between">
        {label}
        {readOnly && <span className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 text-[10px]">Read-only</span>}
      </label>
      <p className="text-sm font-medium text-slate-300 py-2 border-b border-transparent group-hover:border-white/5 transition-colors">{value}</p>
    </div>
  );
}
