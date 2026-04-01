export default function BlogLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="py-20 md:py-28" style={{ backgroundColor: '#0d1020' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 space-y-4">
          <div className="h-3 w-24 rounded-full bg-white/[0.06]" />
          <div className="h-12 w-80 rounded-xl bg-white/[0.08]" />
          <div className="h-4 w-64 rounded-full bg-white/[0.04]" />
        </div>
      </div>

      {/* Grille articles skeleton */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtres */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 w-24 rounded-full bg-muted" />
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-border/40 overflow-hidden">
              <div className="aspect-video bg-muted" />
              <div className="p-4 space-y-3">
                <div className="h-3 w-20 rounded-full bg-muted" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded-full bg-muted" />
                  <div className="h-4 w-3/4 rounded-full bg-muted" />
                </div>
                <div className="h-3 w-16 rounded-full bg-muted/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
