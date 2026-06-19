"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save } from "lucide-react";
import toast from "react-hot-toast";

export default function AddressInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [sameAsPresent, setSameAsPresent] = useState(true);
  
  const [address, setAddress] = useState({
    present: { house: "123", street: "University Road", city: "New Delhi", state: "Delhi", country: "India", pin: "110001" },
    permanent: { house: "123", street: "University Road", city: "New Delhi", state: "Delhi", country: "India", pin: "110001" }
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Address information updated successfully!");
  };

  return (
    <motion.article 
      className="bg-[#0a0a0c]/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 ring-1 ring-inset ring-white/10 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-200">Address Information</h3>
          <p className="text-sm text-slate-500 mt-1">Manage your residential details.</p>
        </div>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-slate-200 transition-colors"
          >
            Edit Address
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Present Address */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" /> Present Address
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <AddressField label="House/Flat No" value={address.present.house} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, present: {...address.present, house: v}})} />
            <AddressField label="Street" value={address.present.street} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, present: {...address.present, street: v}})} />
            <AddressField label="City" value={address.present.city} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, present: {...address.present, city: v}})} />
            <AddressField label="State" value={address.present.state} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, present: {...address.present, state: v}})} />
            <AddressField label="Country" value={address.present.country} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, present: {...address.present, country: v}})} />
            <AddressField label="PIN Code" value={address.present.pin} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, present: {...address.present, pin: v}})} />
          </div>
        </div>

        {/* Permanent Address */}
        <div className="space-y-6 relative">
          <h4 className="text-lg font-semibold text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" /> Permanent Address
          </h4>
          
          {isEditing && (
            <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer w-fit">
              <input 
                type="checkbox" 
                checked={sameAsPresent} 
                onChange={(e) => {
                  setSameAsPresent(e.target.checked);
                  if (e.target.checked) setAddress({...address, permanent: {...address.present}});
                }}
                className="w-4 h-4 rounded border-white/20 bg-black/20 text-indigo-500 focus:ring-indigo-500/50"
              />
              Same as Present Address
            </label>
          )}

          <div className={`grid grid-cols-2 gap-4 transition-opacity ${sameAsPresent && isEditing ? 'opacity-50 pointer-events-none' : ''}`}>
            <AddressField label="House/Flat No" value={sameAsPresent && !isEditing ? address.present.house : address.permanent.house} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, permanent: {...address.permanent, house: v}})} />
            <AddressField label="Street" value={sameAsPresent && !isEditing ? address.present.street : address.permanent.street} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, permanent: {...address.permanent, street: v}})} />
            <AddressField label="City" value={sameAsPresent && !isEditing ? address.present.city : address.permanent.city} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, permanent: {...address.permanent, city: v}})} />
            <AddressField label="State" value={sameAsPresent && !isEditing ? address.present.state : address.permanent.state} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, permanent: {...address.permanent, state: v}})} />
            <AddressField label="Country" value={sameAsPresent && !isEditing ? address.present.country : address.permanent.country} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, permanent: {...address.permanent, country: v}})} />
            <AddressField label="PIN Code" value={sameAsPresent && !isEditing ? address.present.pin : address.permanent.pin} isEditing={isEditing} 
              onChange={(v) => setAddress({...address, permanent: {...address.permanent, pin: v}})} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AddressField({ label, value, isEditing, onChange }: { label: string, value: string, isEditing: boolean, onChange: (val: string) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs uppercase font-semibold tracking-wider text-slate-500">{label}</label>
      {isEditing ? (
        <input 
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-white/5 border border-indigo-500/50 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
      ) : (
        <p className="text-sm font-medium text-slate-300 py-2 border-b border-white/5">{value}</p>
      )}
    </div>
  );
}
