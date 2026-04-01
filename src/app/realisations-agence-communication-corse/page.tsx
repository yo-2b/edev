import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PortfolioGrid } from '@/components/realisations/PortfolioGrid'

/* ── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Nos Réalisations — Sites Web, E-commerce & Communication en Corse | E-Dev Multimedia',
  description:
    'Découvrez les réalisations E-Dev Multimedia : sites vitrines, e-commerce, identités visuelles et communication pour des entreprises, communes et associations en Corse.',
  alternates: {
    canonical: 'https://www.edev-multimedia.com/realisations-agence-communication-corse/',
  },
  openGraph: {
    title: 'Nos Réalisations — Agence Web en Corse | E-Dev Multimedia',
    description:
      'Projets réalisés en Corse : sites internet, e-commerce, identités visuelles, communication institutionnelle. Découvrez notre portfolio.',
    url: 'https://www.edev-multimedia.com/realisations-agence-communication-corse/',
    type: 'website',
  },
}

// Page statique — pas de DB, on peut la mettre en cache indéfiniment
export const revalidate = false

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Réalisations E-Dev Multimedia',
  description:
    'Projets réalisés pour des entreprises, communes et associations en Corse.',
  url: 'https://www.edev-multimedia.com/realisations-agence-communication-corse/',
  publisher: {
    '@type': 'Organization',
    name: 'E-Dev Multimedia',
    url: 'https://www.edev-multimedia.com',
  },
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function RealisationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-white py-24 md:py-32"
        style={{ backgroundColor: '#0d1020' }}
      >
        {/* Grille de points décorative */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        {/* Halo coloré */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'var(--color-edev, #0ea5e9)' }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 relative z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/35 mb-5">
            Portfolio · E-Dev Multimedia
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.04] tracking-tight mb-6 max-w-3xl">
            Nos<br />
            <span style={{ color: 'var(--color-edev, #0ea5e9)' }}>Réalisations</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            Chaque projet reflète notre engagement envers la qualité, l&apos;innovation et les
            besoins spécifiques de nos clients. De la conception à la mise en ligne,
            nous transformons vos idées en expériences digitales mémorables.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          GRILLE PORTFOLIO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: '#0d1020' }}
      >
        <PortfolioGrid />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA BAS DE PAGE
      ══════════════════════════════════════════════════════════════ */}
      <section className="border-t border-white/[0.06]" style={{ backgroundColor: '#0d1020' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-8 py-20 text-center">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: 'var(--color-edev, #0ea5e9)' }}
          >
            Votre projet est notre prochaine réalisation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
            Parlons de votre projet
          </h2>
          <p className="text-white/45 mb-10 max-w-lg mx-auto leading-relaxed">
            Site internet, application mobile, identité visuelle ou stratégie digitale —
            E-Dev Multimedia vous accompagne de A à Z en Corse et partout en France.
          </p>
          <Link
            href="/agence-communication-corse"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            style={{ backgroundColor: 'var(--color-edev, #0ea5e9)' }}
          >
            Demander un devis gratuit
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-5 text-xs text-white/25">Réponse garantie sous 24h · Devis 100% gratuit</p>
        </div>
      </section>
    </>
  )
}
