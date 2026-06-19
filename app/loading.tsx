export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-8 animate-pulse">
        <div className="h-8 w-64 bg-white/5 rounded-md mb-3" />
        <div className="h-4 w-48 bg-white/5 rounded-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-2 lg:col-span-2 h-[280px] rounded-2xl bg-white/5 animate-pulse border border-white/5"></div>
        <div className="md:col-span-1 lg:col-span-1 h-[280px] rounded-2xl bg-white/5 animate-pulse border border-white/5"></div>
        
        <div className="h-[220px] rounded-2xl bg-white/5 animate-pulse border border-white/5"></div>
        <div className="h-[220px] rounded-2xl bg-white/5 animate-pulse border border-white/5"></div>
      </div>
    </div>
  );
}
