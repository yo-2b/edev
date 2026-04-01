import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Tag as TagIcon, ArrowRight } from 'lucide-react'
import { getPostBySlug, getAllPostSlugs, getSimilarPosts } from '@/lib/queries/posts'

// Revalide les pages d'articles toutes les 24h (fallback si revalidatePath non déclenché)
export const revalidate = 86400
import { formatDate, stripHtml, truncate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { TableOfContents } from '@/components/blog/TableOfContents'
import type { TocHeading } from '@/components/blog/TableOfContents'

interface Props {
  params: Promise<{ slug: string }>
}

/* ── Helpers TOC ─────────────────────────────────────────────────────── */
function slugifyText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function extractHeadings(html: string): TocHeading[] {
  const headings: TocHeading[] = []
  const regex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi
  let match
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1])
    const text = stripHtml(match[2])
    if (text.trim()) {
      headings.push({ id: slugifyText(text), text, level })
    }
  }
  return headings
}

function injectHeadingIds(html: string): string {
  return html.replace(
    /<(h[23])([^>]*)>(.*?)<\/h[23]>/gi,
    (_match, tag, attrs, inner) => {
      const text = stripHtml(inner)
      const id = slugifyText(text)
      // Éviter de doubler l'id si déjà présent
      if (/id=/.test(attrs)) return `<${tag}${attrs}>${inner}</${tag}>`
      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`
    }
  )
}

function readingTime(html: string): number {
  return Math.ceil(stripHtml(html).split(/\s+/).length / 200)
}

/* ── Static params ───────────────────────────────────────────────────── */
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs().catch(() => [])
  return slugs.map((s) => ({ slug: s.slug }))
}

/* ── Metadata dynamique ──────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)

  if (!post) return { title: 'Article introuvable' }

  const description = post.seoDescription
    ? stripHtml(post.seoDescription)
    : truncate(stripHtml(post.excerpt ?? ''), 160)

  return {
    title: post.seoTitle ?? post.title,
    description,
    alternates: { canonical: `https://www.edev-multimedia.com/${post.slug}/` },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description,
      url: `https://www.edev-multimedia.com/${post.slug}/`,
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
      modifiedTime: post.modifiedAt.toISOString(),
      images: post.ogImageUrl ? [{ url: post.ogImageUrl, alt: post.title }] : [],
    },
  }
}

/* ── Page ────────────────────────────────────────────────────────────── */
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)
  if (!post) notFound()

  const minutes = readingTime(post.content)
  const headings = extractHeadings(post.content)
  const processedContent = injectHeadingIds(post.content)
  const categoryIds = post.categories.map((c) => c.id)
  const similar = await getSimilarPosts(post.id, categoryIds, 3).catch(() => [])

  /* JSON-LD Article */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.modifiedAt.toISOString(),
    author: {
      '@type': 'Organization',
      name: 'E-Dev Multimedia',
      url: 'https://www.edev-multimedia.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'E-Dev Multimedia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.edev-multimedia.com/wp-content/uploads/2019/06/logo-e-fav.png',
      },
    },
    image: post.thumbnailUrl ?? post.ogImageUrl ?? undefined,
    url: `https://www.edev-multimedia.com/${post.slug}/`,
    description: post.seoDescription ?? undefined,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/" className="hover:text-foreground transition-colors">Accueil</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/actualites-corse" className="hover:text-foreground transition-colors">Actualités</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-foreground font-medium line-clamp-1 max-w-xs">{post.title}</li>
          </ol>
        </nav>

        {/* Layout 70/30 */}
        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 xl:gap-16 items-start">

          {/* ── Colonne principale ──────────────────────────────────────── */}
          <article>
            {/* Catégories */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {post.categories.map((cat) => (
                  <Link key={cat.id} href={`/actualites-corse?cat=${cat.slug}`}>
                    <Badge variant="outline" className="text-edev border-edev/30 bg-edev/5 hover:bg-edev/10 transition-colors cursor-pointer text-xs uppercase tracking-wider">
                      {cat.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>

            {/* Méta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border/40 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt.toISOString()}>{formatDate(post.publishedAt)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {minutes} min de lecture
              </span>
              <span className="text-edev font-medium">E-Dev Multimedia</span>
            </div>

            {/* Image principale */}
            {post.thumbnailUrl && (
              <div className="mb-10 rounded-2xl overflow-hidden aspect-video bg-muted shadow-m3-1">
                <Image
                  src={post.thumbnailUrl}
                  alt={post.title}
                  width={800}
                  height={450}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* TOC mobile (avant le contenu) */}
            {headings.length > 2 && (
              <div className="lg:hidden mb-8 p-5 rounded-2xl border border-border/60 bg-surface-1">
                <TableOfContents headings={headings} />
              </div>
            )}

            {/* Contenu WordPress */}
            <div
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* Catégories (bas de l'article) */}
            {post.categories.length > 0 && (
              <div className="mt-10 pt-6 border-t border-border/40">
                <div className="flex items-center gap-3 flex-wrap">
                  <TagIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                  {post.categories.map((cat) => (
                    <Link key={cat.id} href={`/actualites-corse?cat=${cat.slug}`}>
                      <Badge
                        variant="outline"
                        className="text-edev border-edev/30 bg-edev/5 hover:bg-edev/10 transition-colors cursor-pointer text-xs uppercase tracking-wider rounded-full"
                      >
                        {cat.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Retour */}
            <div className="mt-10 pt-6 border-t border-border/40">
              <Link
                href="/actualites-corse"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Retour aux actualités
              </Link>
            </div>

            {/* Articles similaires mobile */}
            {similar.length > 0 && (
              <section className="lg:hidden mt-14 pt-8 border-t border-border/40">
                <h2 className="text-xl font-bold mb-6">Articles similaires</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {similar.map((s) => (
                    <Link
                      key={s.id}
                      href={`/${s.slug}/`}
                      className="group flex gap-3 rounded-xl border border-border/60 p-3 hover:border-edev/40 hover:shadow-m3-1 transition-m3"
                    >
                      {s.thumbnailUrl && (
                        <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-muted">
                          <Image src={s.thumbnailUrl} alt={s.title} width={64} height={64} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground mb-1">{formatDate(s.publishedAt)}</p>
                        <p className="text-sm font-semibold line-clamp-2 group-hover:text-edev transition-colors">{s.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* ── Sidebar desktop ─────────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">

              {/* TOC */}
              {headings.length > 2 && (
                <div className="p-5 rounded-2xl border border-border/60 bg-surface-1">
                  <TableOfContents headings={headings} />
                </div>
              )}

              {/* CTA Devis */}
              <div className="p-6 rounded-2xl text-white bg-[#0d1020] border border-white/[0.08] overflow-hidden relative">

                <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2 relative z-10">
                  E-Dev Multimedia
                </p>
                <h3 className="text-lg font-bold mb-3 relative z-10">Besoin d&apos;un site web en Corse ?</h3>
                <p className="text-sm text-white/70 mb-5 relative z-10">
                  Devis gratuit · Réponse sous 24h
                </p>
                <Link
                  href="/agence-communication-corse"
                  className="relative z-10 flex items-center justify-center gap-2 bg-edev text-edev-foreground font-semibold px-4 py-2.5 rounded-xl hover:bg-edev/90 transition-colors text-sm w-full"
                >
                  Demander un devis <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Articles similaires */}
              {similar.length > 0 && (
                <div className="p-5 rounded-2xl border border-border/60">
                  <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-muted-foreground">
                    Articles similaires
                  </h3>
                  <div className="space-y-4">
                    {similar.map((s) => (
                      <Link
                        key={s.id}
                        href={`/${s.slug}/`}
                        className="group flex gap-3"
                      >
                        {s.thumbnailUrl && (
                          <div className="shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-muted">
                            <Image
                              src={s.thumbnailUrl}
                              alt={s.title}
                              width={56}
                              height={56}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-[11px] text-muted-foreground mb-0.5">{formatDate(s.publishedAt)}</p>
                          <p className="text-sm font-medium line-clamp-2 group-hover:text-edev transition-colors leading-snug">
                            {s.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* CTA bas de page */}
      <section className="border-t border-border/40 bg-surface-1 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold text-edev uppercase tracking-wider mb-3">On travaille ensemble ?</p>
          <h2 className="text-3xl font-extrabold mb-4">Besoin d&apos;un accompagnement web ?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            E-Dev Multimedia vous accompagne en création de site, SEO, app mobile et automatisation IA.
          </p>
          <Link
            href="/agence-communication-corse"
            className="inline-flex items-center gap-2 bg-edev text-edev-foreground font-semibold px-8 py-3 rounded-2xl hover:bg-edev/90 transition-colors shadow-m3-2"
          >
            Demander un devis gratuit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
