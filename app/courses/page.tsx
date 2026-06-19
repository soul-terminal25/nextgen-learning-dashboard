import CoursesGrid from "@/components/CoursesGrid";
import { createClient } from "@/utils/supabase/server";

export const dynamic = 'force-dynamic';

export default async function CoursesPage() {
  const supabase = await createClient();
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-6 rounded-2xl max-w-md text-center">
          <h2 className="text-xl font-bold mb-2">Failed to load data</h2>
          <p className="text-sm opacity-80">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Your Courses</h1>
        <p className="text-slate-400">Continue where you left off</p>
      </div>
      <CoursesGrid courses={courses || []} />
    </div>
  );
}
