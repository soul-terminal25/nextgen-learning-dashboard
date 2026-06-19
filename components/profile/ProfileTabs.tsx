"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, GraduationCap, Briefcase, Shield } from "lucide-react";

// We will build these modular section components next
import PersonalTab from "./tabs/PersonalTab";
import AcademicsTab from "./tabs/AcademicsTab";
import AdminTab from "./tabs/AdminTab";
import SecurityTab from "./tabs/SecurityTab";

const tabs = [
  { id: "personal", label: "Personal Info", icon: User },
  { id: "academics", label: "Academics", icon: GraduationCap },
  { id: "admin", label: "Administration", icon: Briefcase },
  { id: "security", label: "Security & Settings", icon: Shield },
];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Horizontal Scrollable Tabs */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl transition-colors font-medium text-sm ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="profile-tab"
                    className="absolute inset-0 bg-indigo-500/20 rounded-xl border border-indigo-500/50"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="w-full min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {activeTab === "personal" && <PersonalTab />}
            {activeTab === "academics" && <AcademicsTab />}
            {activeTab === "admin" && <AdminTab />}
            {activeTab === "security" && <SecurityTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
