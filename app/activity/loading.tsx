export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-8 animate-pulse">
        <div className="h-8 w-64 bg-white/5 rounded-md mb-3" />
        <div className="h-4 w-48 bg-white/5 rounded-md" />
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-[90px] bg-white/5 rounded-2xl animate-pulse border border-white/5" />
          <div className="h-[90px] bg-white/5 rounded-2xl animate-pulse border border-white/5" />
          <div className="h-[90px] bg-white/5 rounded-2xl animate-pulse border border-white/5" />
        </div>
        <div className="h-[400px] bg-white/5 rounded-2xl animate-pulse border border-white/5" />
      </div>
    </div>
  );
}
