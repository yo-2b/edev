export default function ArticleLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 animate-pulse">

      {/* Fil d'Ariane */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-3 w-16 rounded-full bg-muted" />
        <div className="h-3 w-2 rounded-full bg-muted/50" />
        <div className="h-3 w-24 rounded-full bg-muted" />
        <div className="h-3 w-2 rounded-full bg-muted/50" />
        <div className="h-3 w-40 rounded-full bg-muted" />
      </div>

      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 items-start">

        {/* Colonne principale */}
        <div className="space-y-6">
          {/* Badge catégorie */}
          <div className="h-6 w-24 rounded-full bg-muted" />

          {/* Titre */}
          <div className="space-y-3">
            <div className="h-10 w-full rounded-xl bg-muted" />
            <div className="h-10 w-4/5 rounded-xl bg-muted" />
          </div>

          {/* Méta */}
          <div className="flex gap-6 pb-6 border-b border-border/40">
            <div className="h-4 w-28 rounded-full bg-muted" />
            <div className="h-4 w-24 rounded-full bg-muted" />
            <div className="h-4 w-32 rounded-full bg-muted" />
          </div>

          {/* Image */}
          <div className="aspect-video rounded-2xl bg-muted" />

          {/* Paragraphes */}
          <div className="space-y-3 pt-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-full rounded-full bg-muted" />
                <div className="h-4 w-full rounded-full bg-muted" />
                <div className="h-4 w-3/4 rounded-full bg-muted" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block space-y-4">
          <div className="rounded-2xl border border-border/40 p-5 space-y-3">
            <div className="h-4 w-32 rounded-full bg-muted" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-3 w-full rounded-full bg-muted/60" />
            ))}
          </div>
          <div className="rounded-2xl bg-muted h-40" />
        </div>
      </div>
    </div>
  )
}
