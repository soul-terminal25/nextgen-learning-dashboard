import DetailedActivity from "@/components/DetailedActivity";
import { createClient } from "@/utils/supabase/server";

export const dynamic = 'force-dynamic';

export default async function ActivityPage() {
  const supabase = await createClient();
  
  const { data: stats } = await supabase
    .from("user_stats")
    .select("*")
    .limit(1)
    .single();

  const { data: usage } = await supabase
    .from("hourly_usage")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Activity Overview</h1>
        <p className="text-slate-400">Your real-time learning patterns and usage</p>
      </div>
      <DetailedActivity initialStats={stats} initialUsage={usage || []} />
    </div>
  );
}
