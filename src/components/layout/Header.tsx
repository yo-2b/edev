'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import {
  Menu, X, ChevronDown, Phone, Mail, ArrowRight,
  Globe, Smartphone, TrendingUp, Megaphone, Palette, Printer, Bot, Sparkles,
  LayoutGrid, Trophy, Handshake, Newspaper,
} from 'lucide-react'

/* ─── Données ─────────────────────────────────────────────────────────────── */
const PRESTATIONS = [
  {
    label: 'Création de site web',
    sub: 'Vitrine, e-commerce, sur-mesure',
    href: '/services/site-web-corse',
    Icon: Globe,
    color: '#3B82F6',
    bg: '#EFF6FF',
  },
  {
    label: 'Référencement SEO',
    sub: 'Visibilité Google, SEO local',
    href: '/services/referencement-visibilite',
    Icon: TrendingUp,
    color: '#22C55E',
    bg: '#F0FDF4',
  },
  {
    label: 'Application mobile',
    sub: 'iOS, Android, cross-platform',
    href: '/services/application-mobile-corse',
    Icon: Smartphone,
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
  {
    label: 'Marketing digital',
    sub: 'Social media, campagnes, stratégie',
    href: '/services/marketing-agence-web-corse',
    Icon: Megaphone,
    color: '#F43F5E',
    bg: '#FFF1F2',
  },
  {
    label: 'Infographie & Graphisme',
    sub: 'Logo, identité visuelle, supports',
    href: '/services/infographie-graphisme-corse',
    Icon: Palette,
    color: '#EC4899',
    bg: '#FDF2F8',
  },
  {
    label: 'Impression & Pose',
    sub: 'Enseignes, adhésifs, signalétique',
    href: '/services/impression-pose',
    Icon: Printer,
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    label: 'Automatisation & IA',
    sub: 'Process, réseaux, emailing auto',
    href: '/services/automatisation-intelligence-artificielle-ia-corse',
    Icon: Bot,
    color: '#06B6D4',
    bg: '#ECFEFF',
  },
]

const NAV_LINKS = [
  { label: 'Réalisations', href: '/realisations-agence-communication-corse', Icon: Trophy },
  { label: 'Partenariat',  href: '/partenariat-communication-corse',         Icon: Handshake },
  { label: 'Actualités',   href: '/actualites-corse',                        Icon: Newspaper },
]

/* ─── Composant ───────────────────────────────────────────────────────────── */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  /* Ferme le menu si on scroll (UX) */
  useEffect(() => {
    const onScroll = () => { setDropOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ── Topbar ──────────────────────────────────────────────────────── */}
      <div
        className="hidden md:block text-white/50 text-xs border-b border-white/[0.07]"
        style={{ backgroundColor: '#090c17' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-9 items-center justify-between">
            <div className="flex items-center gap-5">
              <a
                href="tel:+33615778527"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="h-3 w-3 text-edev" />
                06.15.77.85.27
              </a>
              <span className="text-white/10">|</span>
              <a
                href="mailto:direction.edev@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="h-3 w-3 text-edev" />
                direction.edev@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/20">Suivez-nous</span>
              {[
                {
                  label: 'Facebook', href: 'https://www.facebook.com/edev.multimedia/',
                  svg: <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                },
                {
                  label: 'LinkedIn', href: 'https://www.linkedin.com/in/yoann-t-852676103/',
                  svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                },
                {
                  label: 'Instagram', href: 'https://www.instagram.com/edev_multimedia/',
                  svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="hover:text-edev transition-colors"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">{s.svg}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Barre principale ─────────────────────────────────────────────── */}
      <div
        className="border-b border-white/[0.08] backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(13, 16, 32, 0.97)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="shrink-0 group" aria-label="E-Dev Multimedia — Accueil">
              <Image
                src="/logo-horizontal-blanc-site.png"
                alt="E-Dev Multimedia — Agence Web en Corse"
                width={220}
                height={64}
                priority
                className="h-14 md:h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center gap-0" aria-label="Navigation principale">

              {/* Mega-menu Prestations */}
              <div ref={dropRef} className="relative">
                <button
                  onClick={() => setDropOpen(!dropOpen)}
                  className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors relative ${
                    dropOpen ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                  aria-expanded={dropOpen}
                  aria-haspopup="true"
                >
                  <LayoutGrid className={`h-3.5 w-3.5 transition-colors ${dropOpen ? 'text-edev' : 'text-white/40 group-hover:text-white/70'}`} />
                  Prestations
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${dropOpen ? 'rotate-180 text-edev' : ''}`}
                  />
                  {/* Underline animée */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-edev transition-transform duration-200 origin-left ${
                      dropOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>

                {/* Mega-menu panel */}
                {dropOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[640px] overflow-hidden shadow-2xl"
                    style={{
                      backgroundColor: '#0f1425',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                    }}
                  >
                    {/* Header panel */}
                    <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                        Nos 7 expertises
                      </p>
                      <Link
                        href="/services"
                        onClick={() => setDropOpen(false)}
                        className="text-xs font-semibold text-edev hover:text-edev/80 transition-colors flex items-center gap-1"
                      >
                        Tout voir <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    {/* Grille des services — 2 colonnes */}
                    <div className="grid grid-cols-2 gap-px p-4">
                      {PRESTATIONS.map(({ label, sub, href, Icon, color, bg }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setDropOpen(false)}
                          className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-white/[0.05] transition-colors"
                        >
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover/item:scale-110"
                            style={{ backgroundColor: `${color}20` }}
                          >
                            <Icon className="h-4 w-4" style={{ color }} strokeWidth={1.5} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white/80 group-hover/item:text-white transition-colors truncate">
                              {label}
                            </p>
                            <p className="text-xs text-white/30 truncate">{sub}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bas du panel — audit gratuit */}
                    <div
                      className="mx-4 mb-4 flex items-center justify-between gap-4 rounded-xl px-4 py-3"
                      style={{ background: 'linear-gradient(135deg, rgba(232,74,47,0.15), rgba(232,74,47,0.05))', border: '1px solid rgba(232,74,47,0.2)' }}
                    >
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="h-4 w-4 text-edev shrink-0" strokeWidth={1.5} />
                        <p className="text-sm text-white/70">
                          <span className="font-semibold text-white">Pas sûr de votre besoin ?</span>
                          {' '}On fait le point gratuitement.
                        </p>
                      </div>
                      <Link
                        href="/agence-communication-corse"
                        onClick={() => setDropOpen(false)}
                        className="shrink-0 text-xs font-bold text-edev hover:text-edev/80 transition-colors whitespace-nowrap"
                      >
                        Audit gratuit →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Liens simples */}
              {NAV_LINKS.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="h-3.5 w-3.5 text-white/35 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                  {label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-edev scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              ))}
            </nav>

            {/* CTA + burger */}
            <div className="flex items-center gap-3">

              {/* CTA Devis gratuit — desktop */}
              <Link
                href="/agence-communication-corse"
                className="hidden md:flex group relative items-center gap-2 overflow-hidden px-5 py-2.5 text-sm font-bold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #e84a2f, #ff6b4a)',
                  borderRadius: '10px',
                  boxShadow: '0 0 0 0 rgba(232,74,47,0.5)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px 4px rgba(232,74,47,0.35), 0 4px 12px rgba(232,74,47,0.3)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(232,74,47,0.5)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                {/* Shimmer overlay */}
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  }}
                />
                <span>Devis gratuit</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              {/* Burger mobile */}
              <button
                className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Menu mobile ──────────────────────────────────────────────────── */}
      <div
        className={`md:hidden border-b border-white/[0.08] overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#0d1020' }}
      >
        <div className="px-4 pb-6 pt-2">

          {/* Contact rapide mobile */}
          <div className="flex items-center gap-4 py-3 mb-2 border-b border-white/[0.07]">
            <a href="tel:+33615778527" className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors">
              <Phone className="h-3 w-3 text-edev" /> 06.15.77.85.27
            </a>
            <a href="mailto:direction.edev@gmail.com" className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors">
              <Mail className="h-3 w-3 text-edev" /> Email
            </a>
          </div>

          {/* Prestations mobile */}
          <p className="mt-3 mb-2 px-1 text-xs font-bold uppercase tracking-[0.18em] text-white/25">
            Prestations
          </p>
          <nav className="flex flex-col gap-0.5" aria-label="Navigation mobile">
            {PRESTATIONS.map(({ label, sub, href, Icon, color }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/75">{label}</p>
                  <p className="text-xs text-white/30">{sub}</p>
                </div>
              </Link>
            ))}

            <div className="my-3 border-t border-white/[0.07]" />

            {/* Liens secondaires */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA mobile */}
            <div className="mt-4">
              <Link
                href="/agence-communication-corse"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-white rounded-xl transition-all duration-200 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #e84a2f, #ff6b4a)',
                  boxShadow: '0 4px 16px rgba(232,74,47,0.3)',
                }}
              >
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
