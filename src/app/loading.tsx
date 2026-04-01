export default function Loading() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d1020' }}>
      {/* Barre de progression en haut */}
      <div className="h-0.5 w-full overflow-hidden">
        <div
          className="h-full animate-[progress_1.4s_ease-in-out_infinite]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #e84a2f 40%, #ff6b4a 60%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
        />
      </div>

      {/* Skeleton hero */}
      <div className="py-24 md:py-36 px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6 max-w-2xl">
          <div className="h-3 w-32 rounded-full bg-white/[0.06]" />
          <div className="space-y-3">
            <div className="h-14 w-3/4 rounded-xl bg-white/[0.06]" />
            <div className="h-14 w-1/2 rounded-xl bg-white/[0.06]" />
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-4 w-full rounded-full bg-white/[0.04]" />
            <div className="h-4 w-5/6 rounded-full bg-white/[0.04]" />
            <div className="h-4 w-4/6 rounded-full bg-white/[0.04]" />
          </div>
          <div className="flex gap-4 pt-2">
            <div className="h-12 w-44 rounded-full bg-white/[0.08]" />
            <div className="h-12 w-36 rounded-full bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </div>
  )
}
