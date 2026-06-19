import { ReactNode } from "react";

export const metadata = {
  title: "Student Profile | NextGen Learning",
  description: "Comprehensive University ERP Student Profile",
};

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
