import Link from 'next/link'

const SERVICES = [
  { label: 'Création de site web',    href: '/services/site-web-corse' },
  { label: 'Référencement SEO',        href: '/services/referencement-visibilite' },
  { label: 'Application mobile',       href: '/services/application-mobile-corse' },
  { label: 'Marketing digital',        href: '/services/marketing-agence-web-corse' },
  { label: 'Infographie & Graphisme',  href: '/services/infographie-graphisme-corse' },
  { label: 'Impression & Pose',        href: '/services/impression-pose' },
  { label: 'Automatisation IA',        href: '/services/automatisation-intelligence-artificielle-ia-corse' },
]

const NAVIGATION = [
  { label: 'Accueil',       href: '/' },
  { label: 'Services',      href: '/services' },
  { label: 'Réalisations',  href: '/realisations-agence-communication-corse' },
  { label: 'Partenariat',   href: '/partenariat-communication-corse' },
  { label: 'Actualités',    href: '/actualites-corse' },
  { label: 'Contact',       href: '/agence-communication-corse' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Plan du site',  href: '/plan-du-site' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ── Colonne marque ───────────────────────────────────────────── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" aria-label="E-Dev Multimedia">
              <img
                src="/logo-horizontal-blanc-site.png"
                alt="E-Dev Multimedia — Agence Web en Corse"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Agence web basée en Corse depuis 2010. Création de sites, applications mobiles,
              SEO, graphisme et automatisation IA pour entreprises corses et nationales.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-2.5">
              <a
                href="https://www.facebook.com/edev.multimedia/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook E-Dev Multimedia"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-white/40 hover:bg-edev/20 hover:text-edev transition-all"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/yoann-t-852676103/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn E-Dev Multimedia"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-white/40 hover:bg-edev/20 hover:text-edev transition-all"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/edev_multimedia/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram E-Dev Multimedia"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-white/40 hover:bg-edev/20 hover:text-edev transition-all"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Nos services ─────────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-bold text-white/35 uppercase tracking-[0.18em] mb-5">
              Nos services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Navigation ───────────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-bold text-white/35 uppercase tracking-[0.18em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ──────────────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-bold text-white/35 uppercase tracking-[0.18em] mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <div>
                <p className="text-[10px] font-semibold text-white/25 uppercase tracking-wider mb-0.5">Téléphone</p>
                <a
                  href="tel:+33615778527"
                  className="text-sm font-semibold text-white/65 hover:text-edev transition-colors"
                >
                  06.15.77.85.27
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-white/25 uppercase tracking-wider mb-0.5">E-mail</p>
                <a
                  href="mailto:direction.edev@gmail.com"
                  className="text-sm font-semibold text-white/65 hover:text-edev transition-colors break-all"
                >
                  direction.edev@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-white/25 uppercase tracking-wider mb-0.5">Localisation</p>
                <p className="text-sm text-white/50">Vescovato, Haute-Corse</p>
              </div>
              <Link
                href="/agence-communication-corse"
                className="inline-flex items-center gap-2 rounded-xl bg-edev px-5 py-2.5 text-sm font-bold text-white hover:bg-edev/90 transition-colors"
              >
                Demander un devis →
              </Link>
            </address>
          </div>
        </div>

        {/* ── Bas de page ──────────────────────────────────────────────────── */}
        <div className="mt-14 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {year} E-Dev Multimedia · EI · SIRET 824 861 742 00026 · Vescovato, Corse
          </p>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <Link href="/mentions-legales" className="hover:text-white/50 transition-colors">
              Mentions légales
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/plan-du-site" className="hover:text-white/50 transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
