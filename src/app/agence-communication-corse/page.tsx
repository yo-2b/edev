import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare, Zap, BadgePercent, UserCheck } from 'lucide-react'
import { ContactWizard } from '@/components/forms/ContactWizard'

/* ─── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Contact & Devis Gratuit — Agence Web Corse | E-Dev Multimedia',
  description:
    'Demandez un devis gratuit à E-Dev Multimedia, agence web et communication en Corse. Site internet, SEO, app mobile, graphisme, IA — réponse garantie sous 24 h.',
  keywords: ['devis agence web corse','contact agence communication corse','devis site internet corse','devis seo corse','agence bastia'],
  alternates: { canonical: 'https://www.edev-multimedia.com/agence-communication-corse/' },
  openGraph: {
    title: 'Contact — E-Dev Multimedia, Agence Web & Communication Corse',
    description: 'Devis gratuit et sans engagement. Décrivez votre projet, nous revenons sous 24 h.',
    url: 'https://www.edev-multimedia.com/agence-communication-corse/',
    type: 'website',
    locale: 'fr_FR',
  },
}

/* ─── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'E-Dev Multimedia',
  url: 'https://edev-multimedia.com',
  telephone: '+33615778527',
  email: 'direction.edev@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vescovato',
    addressRegion: 'Haute-Corse',
    addressCountry: 'FR',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    opens: '09:00',
    closes: '18:00',
  },
}

/* ─── SVG réseaux sociaux ─────────────────────────────────────────────────── */
const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/edev.multimedia/',
    color: '#1877F2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yoann-t-852676103/',
    color: '#0A66C2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/edev_multimedia/',
    color: '#E1306C',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
]

/* ─── Engagements ─────────────────────────────────────────────────────────── */
const ENGAGEMENTS = [
  { Icon: Zap,         label: 'Réponse sous 24 h',      sub: 'en jours ouvrés' },
  { Icon: BadgePercent, label: 'Devis gratuit',           sub: 'sans engagement' },
  { Icon: UserCheck,   label: 'Interlocuteur unique',    sub: 'du brief à la livraison' },
  { Icon: MapPin,      label: 'Basé en Corse',           sub: 'depuis 2010' },
]

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d1020] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Gauche : titre */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/25">
                Agence web & communication — Vescovato, Corse
              </p>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Parlons de<br />
                <span style={{ color: 'var(--color-edev)' }}>votre projet.</span>
              </h1>
              <p className="mt-5 max-w-md text-base text-white/50 leading-relaxed">
                Que vous ayez une idée précise ou juste une intuition, c&apos;est le bon endroit
                pour commencer. Devis gratuit, sans engagement, réponse sous 24 h.
              </p>

              {/* Contact rapide inline */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="tel:+33615778527"
                  className="group flex items-center gap-2.5 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e2540] group-hover:bg-edev/20 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-edev" strokeWidth={1.5} />
                  </span>
                  06.15.77.85.27
                </a>
                <span className="text-white/10 hidden sm:block">|</span>
                <a
                  href="mailto:direction.edev@gmail.com"
                  className="group flex items-center gap-2.5 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e2540] group-hover:bg-edev/20 transition-colors">
                    <Mail className="h-3.5 w-3.5 text-edev" strokeWidth={1.5} />
                  </span>
                  direction.edev@gmail.com
                </a>
              </div>
            </div>

            {/* Droite : métriques verticales */}
            <div className="hidden lg:flex flex-col gap-0 divide-y divide-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden min-w-[180px]">
              {[
                { val: '200+', label: 'projets livrés' },
                { val: '13+',  label: 'ans d\'expérience' },
                { val: '24 h', label: 'délai de réponse' },
                { val: '100%', label: 'basé en Corse' },
              ].map(m => (
                <div key={m.label} className="flex flex-col gap-0.5 px-6 py-4">
                  <span className="text-2xl font-extrabold text-white">{m.val}</span>
                  <span className="text-xs text-white/30">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORPS PRINCIPAL ──────────────────────────────────────────────── */}
      <section className="section-light py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start">

            {/* Formulaire wizard */}
            <div>
              <div className="mb-7 pb-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Demander un devis</h2>
                <p className="mt-1 text-sm text-gray-400">
                  3 étapes · moins de 2 minutes · données traitées en toute confidentialité
                </p>
              </div>
              <ContactWizard />
            </div>

            {/* ── Sidebar sombre ────────────────────────────────────────── */}
            <aside className="lg:sticky lg:top-28">
              <div
                className="overflow-hidden rounded-2xl"
                style={{ background: '#0d1020', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Contact principal */}
                <div className="p-6">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/25">
                    Nous contacter
                  </p>

                  {/* Téléphone — mis en avant */}
                  <a
                    href="tel:+33615778527"
                    className="group mb-5 block"
                  >
                    <p className="text-xs text-white/35 mb-0.5">Téléphone</p>
                    <p className="text-xl font-extrabold text-white group-hover:text-edev transition-colors tracking-tight">
                      06.15.77.85.27
                    </p>
                  </a>

                  {/* E-mail */}
                  <a
                    href="mailto:direction.edev@gmail.com"
                    className="group mb-5 block"
                  >
                    <p className="text-xs text-white/35 mb-0.5">E-mail</p>
                    <p className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors">
                      direction.edev@gmail.com
                    </p>
                  </a>

                  {/* Localisation + dispo */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.07]">
                    <div>
                      <p className="text-xs text-white/30 mb-0.5 flex items-center gap-1">
                        <MapPin className="h-3 w-3" strokeWidth={1.5} /> Localisation
                      </p>
                      <p className="text-sm font-medium text-white/60">Vescovato, Corse</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/30 mb-0.5 flex items-center gap-1">
                        <Clock className="h-3 w-3" strokeWidth={1.5} /> Horaires
                      </p>
                      <p className="text-sm font-medium text-white/60">Lun–Ven 9h–18h</p>
                    </div>
                  </div>
                </div>

                {/* Urgence */}
                <div
                  className="px-5 py-4 border-t border-white/[0.07]"
                  style={{ background: 'rgba(232,74,47,0.08)' }}
                >
                  <div className="flex items-start gap-3">
                    <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-edev" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-semibold text-white">Besoin urgent ?</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/45">
                        Appelez directement au{' '}
                        <a href="tel:+33615778527" className="font-semibold text-edev hover:underline">
                          06.15.77.85.27
                        </a>{' '}
                        ou contactez-nous sur Messenger.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="px-5 py-4 border-t border-white/[0.07]">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/25">
                    Suivez-nous
                  </p>
                  <div className="flex gap-2.5">
                    {SOCIALS.map(s => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all duration-200 hover:border-edev/40 hover:bg-edev/10 hover:text-edev"
                      >
                        {s.svg}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Partenariat */}
                <div className="px-5 pb-5 pt-1 border-t border-white/[0.07]">
                  <p className="text-xs leading-relaxed text-white/30">
                    Agence ou freelance ?{' '}
                    <a
                      href="/partenariat-communication-corse"
                      className="text-white/55 underline underline-offset-2 hover:text-edev transition-colors"
                    >
                      Voir notre programme partenariat →
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── BANDEAU ENGAGEMENTS ──────────────────────────────────────────── */}
      <section className="border-t border-b" style={{ background: '#f5f5f3', borderColor: '#e8e8e4' }}>
        <div className="container mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {ENGAGEMENTS.map(({ Icon, label, sub }) => (
              <div key={label} className="flex flex-col gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-edev/10">
                  <Icon className="h-4 w-4 text-edev" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{label}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
