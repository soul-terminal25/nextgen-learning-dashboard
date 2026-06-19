"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart2, Settings, User } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/courses", icon: BookOpen, label: "Courses" },
  { href: "/activity", icon: BarChart2, label: "Activity" },
  { href: "/settings", icon: Settings, label: "Settings" },
  { href: "/profile", icon: User, label: "Profile", mobileOnly: true },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-0 w-full h-20 md:h-screen md:top-0 md:w-24 lg:w-64 bg-[#0a0a0c]/80 backdrop-blur-2xl border-t md:border-t-0 md:border-r border-white/10 flex md:flex-col justify-between z-50">
      <div className="flex md:flex-col w-full h-full md:p-6 lg:p-6">
        {/* Brand */}
        <div className="hidden md:flex items-center justify-center lg:justify-start gap-3 mb-10 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] relative">
            <div className="absolute inset-0 rounded-xl border border-white/20" />
            N
          </div>
          <span className="font-bold text-xl tracking-tight hidden lg:block text-slate-100">
            NextGen
          </span>
        </div>
        
        <nav className="flex md:flex-col w-full h-full md:h-auto items-center md:items-stretch justify-around md:justify-start gap-1 md:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative flex items-center justify-center lg:justify-start gap-3 w-14 h-14 md:w-12 md:h-12 lg:w-full lg:h-auto lg:px-4 lg:py-3 rounded-xl transition-colors group",
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200",
                  item.mobileOnly ? "md:hidden" : ""
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/10 rounded-xl border border-white/5"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <Icon className="w-6 h-6 md:w-5 md:h-5 relative z-10 transition-transform group-hover:scale-110" />
                <span className="font-medium hidden lg:block relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User profile at bottom (only desktop/tablet) */}
      <Link href="/profile" className="hidden md:flex flex-col p-6 items-center lg:items-stretch group cursor-pointer hover:bg-white/5 transition-colors">
        <div className="w-10 h-10 lg:w-auto lg:h-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex-shrink-0 flex items-center justify-center text-indigo-400 font-bold overflow-hidden group-hover:border-indigo-400 transition-colors">
            S
          </div>
          <div className="hidden lg:block overflow-hidden">
            <p className="text-sm font-semibold text-slate-200 truncate group-hover:text-white transition-colors">Student</p>
            <p className="text-xs text-indigo-400 font-medium">View Profile</p>
          </div>
        </div>
      </Link>
    </aside>
  );
}
