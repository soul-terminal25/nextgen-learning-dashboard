export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-8 animate-pulse">
        <div className="h-8 w-64 bg-white/5 rounded-md mb-3" />
        <div className="h-4 w-48 bg-white/5 rounded-md" />
      </div>
      <div className="h-[120px] bg-white/5 rounded-2xl animate-pulse border border-white/5" />
    </div>
  );
}
