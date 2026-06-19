import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Next-Gen Learning Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen antialiased bg-[#050505] text-slate-100 relative selection:bg-indigo-500/30`}>
        <Sidebar />
        {/* 
          Responsive padding:
          Mobile: pb-24 to clear bottom nav.
          Tablet: pl-24 to clear icon sidebar.
          Desktop: lg:pl-72 to clear full sidebar.
        */}
        <main className="pb-24 md:pb-8 md:pl-24 lg:pl-72 pt-8 px-4 md:pr-8 min-h-screen w-full transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
