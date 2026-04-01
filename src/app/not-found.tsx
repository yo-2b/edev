import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Search, Home, Newspaper, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page introuvable (404) — E-Dev Multimedia',
  robots: { index: false, follow: false },
}

const SUGGESTIONS = [
  {
    Icon: Home,
    label: 'Accueil',
    desc: 'Retour à la page principale',
    href: '/',
  },
  {
    Icon: Trophy,
    label: 'Réalisations',
    desc: 'Découvrez nos projets',
    href: '/realisations-agence-communication-corse',
  },
  {
    Icon: Newspaper,
    label: 'Actualités',
    desc: 'Articles web, SEO & digital',
    href: '/actualites-corse',
  },
  {
    Icon: Search,
    label: 'Devis gratuit',
    desc: 'Parlez-nous de votre projet',
    href: '/agence-communication-corse',
  },
]

export default function NotFound() {
  return (
    <div
      className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: '#0d1020' }}
    >
      {/* Code 404 décoratif */}
      <p
        className="text-[120px] sm:text-[160px] font-extrabold leading-none select-none mb-2"
        style={{
          background: 'linear-gradient(135deg, rgba(232,74,47,0.15), rgba(232,74,47,0.04))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        aria-hidden="true"
      >
        404
      </p>

      {/* Message */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
        Page introuvable
      </h1>
      <p className="text-white/40 text-sm sm:text-base max-w-md leading-relaxed mb-10">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
        Voici quelques liens pour vous orienter&nbsp;:
      </p>

      {/* Suggestions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mb-10">
        {SUGGESTIONS.map(({ Icon, label, desc, href }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-left transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.06]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
              <Icon className="h-4 w-4 text-white/50 group-hover:text-edev transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                {label}
              </p>
              <p className="text-xs text-white/30">{desc}</p>
            </div>
            <ArrowRight className="ml-auto h-3.5 w-3.5 text-white/20 group-hover:text-edev transition-all group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>

      {/* Retour */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
