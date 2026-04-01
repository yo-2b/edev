import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ArrowRight } from 'lucide-react'
import { getPostsPaginated, getLatestPosts, getAllCategories } from '@/lib/queries/posts'
import { formatDate, stripHtml, truncate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Revalidation ISR — page remise à jour au plus toutes les heures
// Invalidée immédiatement si un article est publié via le webhook n8n
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Actualités Web, SEO & Digital en Corse | E-Dev Multimedia',
  description:
    'Suivez nos actualités sur la création web, le référencement SEO, le marketing digital et l\'automatisation IA pour les entreprises de Corse.',
  alternates: { canonical: 'https://www.edev-multimedia.com/actualites-corse/' },
  openGraph: {
    title: 'Actualités Web & Digital — Blog E-Dev Multimedia',
    description: 'Veille tech, conseils SEO et tendances digitales par l\'agence web de Corse.',
    url: 'https://www.edev-multimedia.com/actualites-corse/',
    type: 'website',
  },
}

interface Props {
  searchParams: Promise<{ page?: string; cat?: string; q?: string }>
}

export default async function ActualitesPage({ searchParams }: Props) {
  const params = await searchParams
  const currentPage = Math.max(1, parseInt(params.page ?? '1', 10))
  const activeCat = params.cat ?? ''

  // Graceful fallback when DB is unavailable (dev without DATABASE_URL, etc.)
  let postsResult: { posts: import('@/lib/db/schema').Post[]; total: number; totalPages: number } = { posts: [], total: 0, totalPages: 0 }
  let featuredPosts: import('@/lib/db/schema').Post[] = []
  let allCategories: import('@/lib/db/schema').Category[] = []
  let dbError = false

  try {
    ;[postsResult, featuredPosts, allCategories] = await Promise.all([
      getPostsPaginated(currentPage, activeCat ? 12 : 11, activeCat || undefined),
      currentPage === 1 && !activeCat ? getLatestPosts(1) : Promise.resolve([]),
      getAllCategories(),
    ])
  } catch {
    dbError = true
  }

  const { posts, total, totalPages } = postsResult
  const featured = featuredPosts[0] ?? null
  // Sur page 1 sans filtre, on retire le featured de la grille
  const gridPosts = featured && currentPage === 1 && !activeCat
    ? posts.filter((p) => p.id !== featured.id)
    : posts

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

      {/* ── Header page ─────────────────────────────────────────────── */}
      <header className="mb-12">
        <Badge variant="outline" className="mb-4 text-edev border-edev/30 bg-edev/5 text-xs uppercase tracking-wider">
          Blog
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Actualités & Veille
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Cybersécurité, IA, SEO, développement web — tout ce qui façonne le digital
          expliqué par l&apos;équipe d&apos;E-Dev Multimedia.
        </p>
      </header>

      {/* ── Avertissement DB indisponible ───────────────────────────── */}
      {dbError && (
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          <strong>Base de données non disponible.</strong> PostgreSQL n&apos;est pas démarré sur le port 5432.
          Lancez votre service PostgreSQL, puis rechargez la page.
        </div>
      )}

      {/* ── Filtres & Recherche ─────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10 sticky top-[104px] z-30 bg-background py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-border/40">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          <Link
            href="/actualites-corse"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !activeCat
                ? 'bg-edev text-edev-foreground shadow-m3-1'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            Tous ({total})
          </Link>
          {allCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/actualites-corse?cat=${cat.slug}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCat === cat.slug
                  ? 'bg-edev text-edev-foreground shadow-m3-1'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              {cat.name} ({cat.count})
            </Link>
          ))}
        </div>

        {/* Compteur */}
        <p className="text-sm text-muted-foreground shrink-0">
          {total} article{total > 1 ? 's' : ''}
        </p>
      </div>

      {/* ── Article featured (page 1, sans filtre) ───────────────────── */}
      {featured && currentPage === 1 && !activeCat && (
        <article className="group mb-10 rounded-3xl border border-border/60 overflow-hidden hover:border-edev/40 hover:shadow-m3-2 transition-m3 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <Link href={`/${featured.slug}/`} tabIndex={-1} aria-hidden="true">
              <div className="aspect-video md:aspect-auto md:h-full overflow-hidden bg-muted min-h-[220px]">
                {featured.thumbnailUrl ? (
                  <Image
                    src={featured.thumbnailUrl}
                    alt={featured.title}
                    width={800}
                    height={500}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-6xl font-black text-edev/20">E</span>
                  </div>
                )}
              </div>
            </Link>

            {/* Contenu */}
            <div className="p-8 flex flex-col justify-center">
              <Badge
                variant="outline"
                className="w-fit mb-4 text-edev border-edev/30 bg-edev/5 text-xs uppercase tracking-wider"
              >
                À la une
              </Badge>
              <time dateTime={featured.publishedAt.toISOString()} className="text-xs text-muted-foreground mb-3">
                {formatDate(featured.publishedAt)}
              </time>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-4 group-hover:text-edev transition-colors">
                <Link href={`/${featured.slug}/`}>{featured.title}</Link>
              </h2>
              {featured.excerpt && (
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {truncate(stripHtml(featured.excerpt), 180)}
                </p>
              )}
              <Link
                href={`/${featured.slug}/`}
                className="inline-flex items-center gap-2 bg-edev text-edev-foreground font-semibold px-6 py-2.5 rounded-xl hover:bg-edev/90 transition-colors w-fit"
              >
                Lire l&apos;article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* ── Grille d'articles ───────────────────────────────────────── */}
      {gridPosts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-muted-foreground text-lg mb-4">Aucun article trouvé.</p>
          <Link href="/actualites-corse">
            <Button variant="outline" className="rounded-xl">Voir tous les articles</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post, index) => {
            const excerpt = post.excerpt ? truncate(stripHtml(post.excerpt), 110) : ''
            return (
              <article
                key={post.id}
                className="group flex flex-col rounded-2xl border border-border/60 overflow-hidden hover:border-edev/40 hover:shadow-m3-2 transition-m3 bg-card"
              >
                <Link href={`/${post.slug}/`} tabIndex={-1} aria-hidden="true">
                  <div className="aspect-video overflow-hidden bg-muted">
                    {post.thumbnailUrl ? (
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        width={600}
                        height={338}
                        loading={index < 6 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-3xl font-black text-edev/20">E</span>
                      </div>
                    )}
                  </div>
                </Link>

                <div className="flex flex-col flex-1 p-5">
                  <time dateTime={post.publishedAt.toISOString()} className="text-xs text-muted-foreground mb-2">
                    {formatDate(post.publishedAt)}
                  </time>
                  <h2 className="font-bold text-base leading-snug mb-2 line-clamp-2">
                    <Link href={`/${post.slug}/`} className="hover:text-edev transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  {excerpt && (
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                      {excerpt}
                    </p>
                  )}
                  <Link
                    href={`/${post.slug}/`}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-edev hover:opacity-80 transition-opacity"
                  >
                    Lire <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {/* ── Pagination M3 ───────────────────────────────────────────── */}
      {totalPages > 1 && (
        <nav className="mt-14 flex items-center justify-center gap-2 flex-wrap" aria-label="Pagination">
          {currentPage > 1 && (
            <Link href={`/actualites-corse?page=${currentPage - 1}${activeCat ? `&cat=${activeCat}` : ''}`}>
              <Button variant="outline" size="sm" className="rounded-xl">← Précédent</Button>
            </Link>
          )}

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => Math.abs(p - currentPage) <= 2 || p === 1 || p === totalPages)
              .reduce<(number | '...')[]>((acc, p, i, arr) => {
                if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push('...')
                acc.push(p)
                return acc
              }, [])
              .map((item, i) =>
                item === '...' ? (
                  <span key={`e-${i}`} className="px-2 text-muted-foreground text-sm">…</span>
                ) : (
                  <Link key={item} href={`/actualites-corse?page=${item}${activeCat ? `&cat=${activeCat}` : ''}`}>
                    <Button
                      variant={item === currentPage ? 'default' : 'outline'}
                      size="sm"
                      className={`rounded-xl ${item === currentPage ? 'bg-edev text-edev-foreground pointer-events-none shadow-m3-1' : ''}`}
                      aria-current={item === currentPage ? 'page' : undefined}
                    >
                      {item}
                    </Button>
                  </Link>
                )
              )}
          </div>

          {currentPage < totalPages && (
            <Link href={`/actualites-corse?page=${currentPage + 1}${activeCat ? `&cat=${activeCat}` : ''}`}>
              <Button variant="outline" size="sm" className="rounded-xl">Suivant →</Button>
            </Link>
          )}
        </nav>
      )}
    </div>
  )
}
