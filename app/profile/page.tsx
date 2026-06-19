import ProfileTabs from "@/components/profile/ProfileTabs";
import { Toaster } from "react-hot-toast";

export const dynamic = 'force-dynamic';

export default function ProfilePage() {
  return (
    <main className="max-w-7xl mx-auto w-full pb-24 md:pb-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 tracking-tight">
          Student Profile
        </h1>
        <p className="text-slate-400 font-medium mt-1">Manage your academic and personal details</p>
      </div>
      
      {/* Client component to handle the massive 16-section tab interface */}
      <ProfileTabs />
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#1e1e24',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
        }
      }} />
    </main>
  );
}
