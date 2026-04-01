import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getPageBySlug } from '@/lib/queries/pages'
import { stripHtml, truncate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

// Liste statique des sous-pages de services (pour generateStaticParams)
const SERVICE_SLUGS = [
  'site-web-corse',
  'application-mobile-corse',
  'referencement-visibilite',
  'marketing-agence-web-corse',
  'infographie-graphisme-corse',
  'impression-pose',
  'automatisation-intelligence-artificielle-ia-corse',
]

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug).catch(() => null)

  if (!page) return { title: 'Prestation introuvable' }

  const description = page.seoDescription
    ? stripHtml(page.seoDescription)
    : truncate(stripHtml(page.excerpt ?? page.content), 160)

  return {
    title: page.seoTitle ?? `${page.title} — E-Dev Multimedia`,
    description,
    alternates: {
      canonical: `https://www.edev-multimedia.com/services/${page.slug}/`,
    },
    openGraph: {
      title: page.seoTitle ?? page.title,
      description,
      url: `https://www.edev-multimedia.com/services/${page.slug}/`,
      type: 'website',
      images: page.ogImageUrl ? [{ url: page.ogImageUrl, alt: page.title }] : [],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const page = await getPageBySlug(slug).catch(() => null)

  if (!page) notFound()

  // JSON-LD Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    url: `https://www.edev-multimedia.com/services/${page.slug}/`,
    provider: {
      '@type': 'Organization',
      name: 'E-Dev Multimedia',
      url: 'https://www.edev-multimedia.com',
    },
    areaServed: 'FR',
    description: page.seoDescription ?? undefined,
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
            <li><Link href="/services" className="hover:text-foreground transition-colors">Prestations</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-foreground font-medium">{page.title}</li>
          </ol>
        </nav>

        {/* Contenu */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">
            {page.title}
          </h1>

          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />

          {/* Navigation retour */}
          <div className="mt-12 pt-6 border-t border-border/40 flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Toutes nos prestations
            </Link>
            <Link
              href="/agence-communication-corse"
              className="inline-flex items-center gap-2 text-sm font-medium text-edev hover:opacity-80 transition-opacity"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA bas de page */}
      <section className="border-t border-border/40 bg-muted/30 py-12 mt-8">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Intéressé par cette prestation ?
          </h2>
          <p className="text-muted-foreground mb-6">
            Parlez-nous de votre projet. Réponse garantie sous 24h.
          </p>
          <Link
            href="/agence-communication-corse"
            className="inline-flex items-center gap-2 bg-edev text-edev-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Démarrer un projet →
          </Link>
        </div>
      </section>
    </>
  )
}
