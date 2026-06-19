export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-8 animate-pulse">
        <div className="h-8 w-48 bg-white/5 rounded-md mb-3" />
        <div className="h-4 w-64 bg-white/5 rounded-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-[220px] rounded-2xl bg-white/5 animate-pulse border border-white/5" />
        ))}
      </div>
    </div>
  );
}
