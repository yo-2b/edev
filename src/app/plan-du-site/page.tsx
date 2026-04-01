import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllPosts, getAllCategories } from '@/lib/queries/posts'

/* ─── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Plan du site — E-Dev Multimedia | Agence Web Corse',
  description:
    'Plan du site E-Dev Multimedia : retrouvez toutes nos pages (prestations, réalisations, blog) et plus de 140 articles sur le digital, le SEO, l\'IA et la cybersécurité.',
  alternates: {
    canonical: 'https://www.edev-multimedia.com/plan-du-site/',
  },
  robots: { index: true, follow: true },
}

/* ─── Structure statique du plan ──────────────────────────────────────────── */
type SiteLink = { href: string; label: string; desc: string }
type SiteCategory = { id: string; heading: string; links: SiteLink[] }

const STATIC_CATEGORIES: SiteCategory[] = [
  {
    id: 'decouvrir',
    heading: 'Découvrir',
    links: [
      {
        href: '/',
        label: 'Accueil',
        desc: 'Agence web & communication en Corse — présentation générale et expertise',
      },
      {
        href: '/agence-communication-corse',
        label: 'Contact / Devis',
        desc: "Demande de devis gratuit, formulaire de contact et coordonnées de l'agence",
      },
      {
        href: '/realisations-agence-communication-corse',
        label: 'Réalisations',
        desc: 'Portfolio de projets réalisés : sites web, applications, graphisme et communication',
      },
      {
        href: '/partenariat-communication-corse',
        label: 'Partenariat',
        desc: "Programme de partenariat pour agences, freelances et apporteurs d'affaires en Corse",
      },
    ],
  },
  {
    id: 'prestations',
    heading: 'Nos Prestations',
    links: [
      {
        href: '/services',
        label: "Vue d'ensemble",
        desc: "Les 7 expertises de l'agence E-Dev Multimedia en un coup d'œil",
      },
      {
        href: '/services/site-web-corse',
        label: 'Création de site internet',
        desc: 'Conception et développement de sites web sur mesure en Corse',
      },
      {
        href: '/services/referencement-visibilite',
        label: 'Référencement SEO',
        desc: 'Optimisation pour les moteurs de recherche et stratégie de visibilité en ligne',
      },
      {
        href: '/services/application-mobile-corse',
        label: 'Application mobile',
        desc: "Développement d'applications iOS et Android pour entreprises corses",
      },
      {
        href: '/services/marketing-agence-web-corse',
        label: 'Marketing digital',
        desc: 'Stratégie de communication digitale, réseaux sociaux et campagnes publicitaires',
      },
      {
        href: '/services/infographie-graphisme-corse',
        label: 'Infographie & graphisme',
        desc: 'Identité visuelle, charte graphique, supports print et visuels digitaux',
      },
      {
        href: '/services/impression-pose',
        label: 'Impression & pose',
        desc: 'Impression grand format, enseignes, bâches, véhiculage et pose sur site',
      },
      {
        href: '/services/automatisation-intelligence-artificielle-ia-corse',
        label: 'Automatisation & IA',
        desc: "Intégration de l'intelligence artificielle et automatisation des processus métier",
      },
    ],
  },
  {
    id: 'legal',
    heading: 'Informations légales',
    links: [
      {
        href: '/mentions-legales',
        label: 'Mentions légales',
        desc: 'Éditeur, hébergeur, propriété intellectuelle et gestion des données personnelles',
      },
      {
        href: '/plan-du-site',
        label: 'Plan du site',
        desc: 'Vue structurée de toutes les pages disponibles sur edev-multimedia.com',
      },
    ],
  },
]

/* ─── Page (Server Component async) ──────────────────────────────────────── */
export default async function PlanDuSitePage() {
  // Chargement dynamique des articles et catégories éditoriales
  // Graceful fallback si la DB est indisponible
  let posts: Awaited<ReturnType<typeof getAllPosts>> = []
  let categories: Awaited<ReturnType<typeof getAllCategories>> = []

  try {
    ;[posts, categories] = await Promise.all([
      getAllPosts(500),
      getAllCategories(),
    ])
  } catch {
    // DB indisponible — on affiche quand même la partie statique
  }

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d1020] py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
            Navigation
          </p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Plan du site
          </h1>
          <p className="mx-auto max-w-xl text-base text-white/50 leading-relaxed">
            Toutes les pages d&apos;E-Dev Multimedia organisées par catégorie —{' '}
            {posts.length > 0 && (
              <span className="text-white/70 font-semibold">{posts.length} article{posts.length > 1 ? 's' : ''} publiés</span>
            )}
            {posts.length === 0 && 'prestations, réalisations, actualités et informations légales'}.
          </p>
        </div>
      </section>

      {/* ── CONTENU ─────────────────────────────────────────────────────── */}
      <div className="bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-16">
          <div className="flex flex-col gap-14">

            {/* ── Sections statiques ──────────────────────────────────── */}
            {STATIC_CATEGORIES.map((cat) => (
              <SitemapSection key={cat.id} heading={cat.heading}>
                <ul className="flex flex-col gap-2">
                  {cat.links.map((link) => (
                    <SitemapLink key={link.href} href={link.href} label={link.label} desc={link.desc} />
                  ))}
                </ul>
              </SitemapSection>
            ))}

            {/* ── Blog & Actualités — page principale ─────────────────── */}
            <SitemapSection heading="Blog & Actualités">
              <ul className="flex flex-col gap-2">
                <SitemapLink
                  href="/actualites-corse"
                  label="Actualités — Tous les articles"
                  desc="Articles, conseils et actualités du digital pour les entreprises corses"
                />

                {/* Catégories de blog */}
                {categories.length > 0 && (
                  <>
                    <li className="mt-4 mb-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Catégories
                      </span>
                    </li>
                    {categories.map((cat) => (
                      <SitemapLink
                        key={cat.id}
                        href={`/actualites-corse?cat=${cat.slug}`}
                        label={cat.name}
                        desc={`${cat.count ?? 0} article${(cat.count ?? 0) > 1 ? 's' : ''} dans cette catégorie`}
                      />
                    ))}
                  </>
                )}
              </ul>
            </SitemapSection>

            {/* ── Articles publiés ─────────────────────────────────────── */}
            {posts.length > 0 && (
              <SitemapSection heading={`Articles publiés (${posts.length})`}>
                <p className="text-sm text-gray-400 mb-4">
                  {posts.length} article{posts.length > 1 ? 's' : ''} sur le digital, le SEO, l&apos;IA, la cybersécurité et les technologies.
                </p>
                <ul className="flex flex-col gap-2">
                  {posts.map((post) => (
                    <SitemapLink
                      key={post.id}
                      href={`/${post.slug}/`}
                      label={post.title}
                      desc={
                        post.publishedAt
                          ? `Publié le ${new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}`
                          : 'Article de blog'
                      }
                    />
                  ))}
                </ul>
              </SitemapSection>
            )}
          </div>

          {/* Pied de page */}
          <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 text-center text-xs text-gray-400">
            Vous ne trouvez pas ce que vous cherchez ?{' '}
            <Link
              href="/agence-communication-corse"
              className="font-semibold text-edev hover:opacity-75 transition-opacity"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

/* ─── Composants utilitaires ──────────────────────────────────────────────── */

function SitemapSection({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <section aria-label={heading}>
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">{heading}</h2>
        <div className="h-px flex-1 bg-gray-100" aria-hidden="true" />
      </div>
      {children}
    </section>
  )
}

function SitemapLink({ href, label, desc }: { href: string; label: string; desc: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-4 rounded-xl border border-transparent px-4 py-3 transition-all duration-200 hover:border-gray-200 hover:bg-gray-50"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition-colors duration-200 group-hover:bg-edev/10">
          <ArrowRight
            className="h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-edev"
            strokeWidth={2}
          />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
          <span className="shrink-0 text-sm font-semibold text-gray-900 transition-colors duration-200 group-hover:text-edev">
            {label}
          </span>
          <span className="truncate text-sm text-gray-400">{desc}</span>
        </span>
        <span className="hidden shrink-0 font-mono text-xs text-gray-300 sm:block">{href}</span>
      </Link>
    </li>
  )
}
