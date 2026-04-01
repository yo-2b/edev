import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe,
  Smartphone,
  TrendingUp,
  Bot,
  Palette,
  Printer,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  HeartHandshake,
  Award,
  ChevronDown,
  Zap,
  Users,
  Star,
} from 'lucide-react'

/* ─── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Nos Prestations Web, SEO, IA & Design — Agence Web Corse | E-Dev Multimedia',
  description:
    'Création de site internet, SEO, application mobile, marketing digital, automatisation IA, graphisme et impression en Corse. Toutes les expertises d\'une agence complète depuis 2010 à Bastia.',
  keywords: [
    'agence web corse',
    'prestations digitales corse',
    'création site internet corse',
    'SEO bastia',
    'application mobile corse',
    'marketing digital corse',
    'graphisme corse',
    'impression corse',
    'intelligence artificielle corse',
  ],
  alternates: {
    canonical: 'https://www.edev-multimedia.com/services/',
  },
  openGraph: {
    title: 'Nos Prestations — Agence Web E-Dev Multimedia en Corse',
    description:
      'Toutes les expertises digitales pour les entreprises corses : site web, SEO, app mobile, marketing, IA, graphisme et impression.',
    url: 'https://www.edev-multimedia.com/services/',
    type: 'website',
    locale: 'fr_FR',
  },
}

/* ─── Données services ────────────────────────────────────────────────────── */
const SERVICES = [
  {
    slug: 'site-web-corse',
    Icon: Globe,
    color: 'from-blue-500/20 to-blue-500/5',
    accent: '#3B82F6',
    accentLight: '#EFF6FF',
    accentText: '#1D4ED8',
    badge: 'Incontournable',
    title: 'Création de Site Internet',
    headline: 'Votre vitrine digitale, taillée pour convertir',
    desc: 'Sites vitrines, e-commerce, sur-mesure ou refonte : nous concevons des sites performants, optimisés SEO et adaptés à chaque écran. De la stratégie au lancement, en passant par la maintenance.',
    tags: ['Site vitrine', 'E-commerce', 'Sur-mesure', 'Refonte', 'WordPress'],
    featured: true,
  },
  {
    slug: 'referencement-visibilite',
    Icon: TrendingUp,
    color: 'from-green-500/20 to-green-500/5',
    accent: '#22C55E',
    accentLight: '#F0FDF4',
    accentText: '#15803D',
    badge: 'ROI Prouvé',
    title: 'Référencement SEO',
    headline: 'Soyez trouvé avant vos concurrents',
    desc: 'Audit technique, optimisation on-page, netlinking, SEO local Bastia/Corse. Nous bâtissons votre visibilité Google sur le long terme avec des méthodes éprouvées et transparentes.',
    tags: ['SEO local', 'Audit gratuit', 'Google My Business', 'Netlinking'],
    featured: false,
  },
  {
    slug: 'application-mobile-corse',
    Icon: Smartphone,
    color: 'from-violet-500/20 to-violet-500/5',
    accent: '#8B5CF6',
    accentLight: '#F5F3FF',
    accentText: '#6D28D9',
    badge: 'iOS & Android',
    title: 'Application Mobile',
    headline: 'Votre business dans la poche de vos clients',
    desc: 'Applications natives iOS et Android ou cross-platform. UX pensée pour l\'engagement, fonctionnalités sur-mesure, publication sur les stores. Du concept à la mise en ligne.',
    tags: ['iOS', 'Android', 'React Native', 'UX Mobile', 'App Store'],
    featured: false,
  },
  {
    slug: 'marketing-agence-web-corse',
    Icon: Megaphone,
    color: 'from-rose-500/20 to-rose-500/5',
    accent: '#F43F5E',
    accentLight: '#FFF1F2',
    accentText: '#BE123C',
    badge: 'Stratégie',
    title: 'Marketing Digital',
    headline: 'Une stratégie qui transforme les clics en clients',
    desc: 'SEO, inbound marketing, réseaux sociaux, campagnes payantes, plan de communication annuel. Nous construisons votre présence digitale de A à Z avec des indicateurs clairs.',
    tags: ['Social Media', 'Google Ads', 'Content Marketing', 'Emailing'],
    featured: false,
  },
  {
    slug: 'infographie-graphisme-corse',
    Icon: Palette,
    color: 'from-pink-500/20 to-pink-500/5',
    accent: '#EC4899',
    accentLight: '#FDF2F8',
    accentText: '#9D174D',
    badge: 'Identité visuelle',
    title: 'Infographie & Graphisme',
    headline: 'Une image forte qui inspire confiance',
    desc: 'Création de logo, identité visuelle complète, supports print et digital, visuels réseaux sociaux. Nous donnons à votre marque une cohérence visuelle mémorable et professionnelle.',
    tags: ['Logo', 'Charte graphique', 'Réseaux sociaux', 'Print', 'Flyers'],
    featured: false,
  },
  {
    slug: 'impression-pose',
    Icon: Printer,
    color: 'from-amber-500/20 to-amber-500/5',
    accent: '#F59E0B',
    accentLight: '#FFFBEB',
    accentText: '#92400E',
    badge: 'Local & Terrain',
    title: 'Impression & Pose',
    headline: 'Du digital au physique, en Corse',
    desc: 'Enseignes lumineuses, adhésifs, bâches, signalétique, objets personnalisés. Conception, impression locale et pose par nos équipes sur toute l\'île. Durabilité garantie.',
    tags: ['Enseignes', 'Adhésifs', 'Grand format', 'Signalétique', 'Objets'],
    featured: false,
  },
  {
    slug: 'automatisation-intelligence-artificielle-ia-corse',
    Icon: Bot,
    color: 'from-cyan-500/20 to-cyan-500/5',
    accent: '#06B6D4',
    accentLight: '#ECFEFF',
    accentText: '#0E7490',
    badge: 'Innovation',
    title: 'Automatisation & IA',
    headline: 'Gagnez du temps, multipliez votre impact',
    desc: 'Automatisation de vos réseaux sociaux, emailing, veille SEO et processus métier grâce à l\'IA. Des solutions clé en main pour les entreprises corses prêtes à prendre de l\'avance.',
    tags: ['ChatGPT', 'Automatisation', 'Réseaux sociaux IA', 'Emailing IA'],
    featured: true,
  },
]

const ENGAGEMENTS = [
  {
    Icon: MapPin,
    title: 'Ancrage local',
    desc: 'Basés en Corse depuis 2010, nous connaissons le tissu économique local, ses enjeux et ses spécificités. Votre projet est entre des mains locales.',
  },
  {
    Icon: HeartHandshake,
    title: 'Interlocuteur unique',
    desc: 'Un seul contact qui suit votre projet de A à Z. Pas de perte d\'information, pas de chaîne d\'emails interminable : de la réactivité et de la clarté.',
  },
  {
    Icon: Clock,
    title: 'Délais respectés',
    desc: 'Chaque projet est cadré avec un planning précis. Nous livrons dans les temps parce que votre activité ne peut pas attendre indéfiniment.',
  },
  {
    Icon: Award,
    title: 'Qualité garantie',
    desc: 'Chaque livrable passe par une phase de recette interne avant de vous parvenir. Notre réputation, construite projet après projet depuis 13 ans, en est le gage.',
  },
]

const FAQS = [
  {
    q: 'Comment savoir quelle prestation me convient ?',
    a: 'Lors d\'un premier échange gratuit (téléphone ou café), nous analysons vos besoins, vos objectifs et votre budget. Nous vous orientons ensuite vers la ou les prestations les plus pertinentes — sans chercher à vendre ce dont vous n\'avez pas besoin.',
  },
  {
    q: 'Peut-on combiner plusieurs prestations ?',
    a: 'Absolument. La plupart de nos clients combinent plusieurs services : site web + SEO, graphisme + impression, marketing + automatisation IA… Nous construisons un plan sur-mesure et vous bénéficiez d\'une cohérence globale sur toutes vos communications.',
  },
  {
    q: 'Travaillez-vous uniquement en Corse ?',
    a: 'Notre cœur de métier est la Corse — nous connaissons parfaitement le marché local et proposons des prestations terrain (pose d\'enseignes, réunions en présentiel…). Mais nous travaillons aussi avec des clients à Paris, Lyon et sur toute la France pour les prestations digitales.',
  },
  {
    q: 'Quels sont vos délais de réalisation ?',
    a: 'Les délais varient selon la complexité : de 3 semaines pour un site vitrine simple à 4–6 mois pour une application mobile sur-mesure. Chaque devis inclut un planning détaillé avec les jalons clés. Nous nous engageons sur ces délais par contrat.',
  },
  {
    q: 'Proposez-vous de la maintenance après livraison ?',
    a: 'Oui, nous proposons des contrats de maintenance pour tous nos services : mises à jour, sécurité, sauvegardes, suivi SEO, évolutions fonctionnelles. Vous choisissez le niveau d\'accompagnement adapté à vos besoins.',
  },
]

/* ─── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Prestations E-Dev Multimedia — Agence Web Corse',
  description: 'Toutes les prestations digitales et communication de l\'agence E-Dev Multimedia en Corse',
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://www.edev-multimedia.com/services/${s.slug}/`,
  })),
}

/* ─── Composant FAQ ───────────────────────────────────────────────────────── */
import { FaqServicesAccordion } from '@/components/ui-blocks/FaqServicesAccordion'

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d1020] overflow-hidden py-28 md:py-36">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 border-b border-edev/40 pb-2 text-sm font-semibold uppercase tracking-widest text-edev">
            <Star className="h-3.5 w-3.5" />
            Agence web & communication — Corse
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Tout ce qu&apos;il faut pour{' '}
            <span className="text-edev">rayonner en Corse</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 leading-relaxed md:text-xl">
            De la stratégie à l&apos;exécution — site web, référencement, application mobile, marketing digital,
            graphisme, impression et intelligence artificielle. Une agence complète, ancrée en Corse depuis 2010.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-edev px-8 py-4 text-sm font-bold text-white uppercase tracking-wide shadow-lg hover:bg-edev/90 transition-all duration-300"
            >
              Explorer nos prestations
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/agence-communication-corse"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white uppercase tracking-wide hover:border-white/60 transition-all duration-300"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Strip stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-12 sm:grid-cols-4 md:gap-12">
            {[
              { value: '13+', label: 'ans d\'expérience' },
              { value: '7', label: 'expertises maîtrisées' },
              { value: '200+', label: 'projets livrés' },
              { value: '100%', label: 'basé en Corse' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold text-white md:text-4xl">{s.value}</span>
                <span className="text-xs text-white/50 md:text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE SERVICES ──────────────────────────────────────────────── */}
      <section id="services" className="section-light py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-600">
              Nos 7 expertises
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Une offre complète,<br className="hidden md:block" /> pour chaque besoin
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500 leading-relaxed">
              Que vous soyez une PME locale, un commerçant bastiais ou une grande structure insulaire,
              nous avons la prestation adaptée à votre situation et à vos objectifs.
            </p>
          </div>

          {/* Bento grid — 2 colonnes desktop, ajustement mobile */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card Site Web — featured (col-span-2) */}
            {(() => {
              const s = SERVICES[0]
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-2"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="flex-1">
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className="flex h-13 w-13 items-center justify-center rounded-2xl"
                          style={{ background: s.accentLight }}
                        >
                          <s.Icon className="h-7 w-7" style={{ color: s.accent }} strokeWidth={1.5} />
                        </div>
                        <span
                          className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
                          style={{ background: s.accent }}
                        >
                          {s.badge}
                        </span>
                      </div>
                      <h3 className="mb-2 text-2xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {s.title}
                      </h3>
                      <p className="mb-2 text-base font-semibold" style={{ color: s.accent }}>
                        {s.headline}
                      </p>
                      <p className="mb-5 text-gray-500 leading-relaxed">{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full px-3 py-1 text-xs font-semibold"
                            style={{ background: s.accentLight, color: s.accentText }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className="flex h-20 w-20 shrink-0 items-center justify-center self-center rounded-full md:h-24 md:w-24"
                      style={{ background: `${s.accent}15` }}
                    >
                      <ArrowRight
                        className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: s.accent }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </Link>
              )
            })()}

            {/* Cards normales — SEO, App Mobile, Marketing, Infographie */}
            {SERVICES.slice(1, 5).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
              >

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ background: s.accentLight }}
                    >
                      <s.Icon className="h-6 w-6" style={{ color: s.accent }} strokeWidth={1.5} />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white"
                      style={{ background: s.accent }}
                    >
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="mb-1.5 text-lg font-extrabold text-gray-900 transition-colors group-hover:text-gray-700">
                    {s.title}
                  </h3>
                  <p className="mb-3 text-sm font-semibold" style={{ color: s.accent }}>
                    {s.headline}
                  </p>
                  <p className="mb-5 text-sm text-gray-500 leading-relaxed line-clamp-3">{s.desc}</p>

                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {s.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{ background: s.accentLight, color: s.accentText }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-gap group-hover:gap-2.5"
                    style={{ color: s.accent }}
                  >
                    Découvrir
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}

            {/* Card Impression — normale */}
            {(() => {
              const s = SERVICES[5]
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300"
                >
                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between gap-2">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ background: s.accentLight }}
                      >
                        <s.Icon className="h-6 w-6" style={{ color: s.accent }} strokeWidth={1.5} />
                      </div>
                      <span
                        className="rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white"
                        style={{ background: s.accent }}
                      >
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="mb-1.5 text-lg font-extrabold text-gray-900">{s.title}</h3>
                    <p className="mb-3 text-sm font-semibold" style={{ color: s.accent }}>{s.headline}</p>
                    <p className="mb-5 text-sm text-gray-500 leading-relaxed line-clamp-3">{s.desc}</p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {s.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: s.accentLight, color: s.accentText }}>{t}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: s.accent }}>
                      Découvrir
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              )
            })()}

            {/* Card IA — featured (col-span-2) */}
            {(() => {
              const s = SERVICES[6]
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 lg:col-span-2"
                >
                  <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="flex-1">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl" style={{ background: s.accentLight }}>
                          <s.Icon className="h-7 w-7" style={{ color: s.accent }} strokeWidth={1.5} />
                        </div>
                        <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white" style={{ background: s.accent }}>
                          {s.badge}
                        </span>
                      </div>
                      <h3 className="mb-2 text-2xl font-extrabold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {s.title}
                      </h3>
                      <p className="mb-2 text-base font-semibold" style={{ color: s.accent }}>{s.headline}</p>
                      <p className="mb-5 text-gray-500 leading-relaxed">{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: s.accentLight, color: s.accentText }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center self-center rounded-full md:h-24 md:w-24" style={{ background: `${s.accent}15` }}>
                      <ArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-1" style={{ color: s.accent }} strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              )
            })()}
          </div>
        </div>
      </section>

      {/* ── TEXTE SEO — Pourquoi E-Dev ───────────────────────────────────── */}
      <section className="bg-[#0d1020] py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Texte */}
            <div>
              <span className="mb-4 inline-block rounded-full border border-edev/30 bg-edev/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-edev">
                Pourquoi E-Dev Multimedia ?
              </span>
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Une agence complète,<br />pas un prestataire généraliste
              </h2>
              <div className="flex flex-col gap-4 text-white/60 leading-relaxed">
                <p>
                  Depuis 2010, E-Dev Multimedia accompagne les entreprises corses dans leur transformation digitale.
                  Notre particularité : maîtriser l&apos;ensemble de la chaîne de valeur — du conseil stratégique
                  à la pose terrain, en passant par le développement, le référencement et la création graphique.
                </p>
                <p>
                  Cette polyvalence n&apos;est pas un hasard. Elle répond à un besoin réel des entreprises insulaires
                  qui ne veulent pas gérer cinq prestataires différents pour obtenir un résultat cohérent.
                  Avec E-Dev, un interlocuteur unique pilote votre projet de bout en bout.
                </p>
                <p>
                  Que vous soyez une start-up qui se lance, un artisan qui veut digitaliser son activité
                  ou une entreprise établie qui cherche à moderniser son image : nous avons la prestation,
                  l&apos;expérience et l&apos;ancrage local pour vous accompagner efficacement.
                </p>
              </div>
            </div>

            {/* Engagements */}
            <div className="grid gap-4 sm:grid-cols-2">
              {ENGAGEMENTS.map((e) => (
                <div key={e.title} className="rounded-2xl border border-white/[0.08] bg-[#131827] p-5 transition-all hover:border-edev/25">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-edev/15">
                    <e.Icon className="h-5 w-5 text-edev" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-white">{e.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION APPROCHE GLOBALE (SEO) ───────────────────────────────── */}
      <section className="section-light py-20 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-600">
              Notre approche
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Digital, print, terrain :<br className="hidden md:block" /> une vision à 360°
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500 leading-relaxed">
              Nous sommes l&apos;une des rares agences corses à couvrir l&apos;intégralité du spectre
              communication — du pixel à la pose d&apos;enseigne.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: Zap,
                color: 'text-violet-500',
                bg: 'bg-violet-50',
                title: 'Digital & Web',
                items: ['Création de sites internet', 'Applications mobiles iOS / Android', 'Référencement SEO local', 'Marketing & réseaux sociaux', 'Automatisation & intelligence artificielle'],
              },
              {
                Icon: Palette,
                color: 'text-pink-500',
                bg: 'bg-pink-50',
                title: 'Création & Design',
                items: ['Identité visuelle & logo', 'Charte graphique complète', 'Supports print (flyers, cartes…)', 'Visuels réseaux sociaux', 'Maquettes web & app'],
              },
              {
                Icon: Printer,
                color: 'text-amber-500',
                bg: 'bg-amber-50',
                title: 'Impression & Terrain',
                items: ['Enseignes lumineuses', 'Adhésifs & covering', 'Bâches & grand format', 'Signalétique intérieure/extérieure', 'Pose sur toute la Corse'],
              },
            ].map((col) => (
              <div key={col.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${col.bg}`}>
                  <col.Icon className={`h-5 w-5 ${col.color}`} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-base font-bold text-gray-900">{col.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gray-400" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d1020] py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block border-b border-white/20 pb-1.5 text-xs font-bold uppercase tracking-widest text-white/40">
              FAQ
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Questions fréquentes
            </h2>
            <p className="text-white/50">
              Tout ce que vous voulez savoir avant de nous contacter.
            </p>
          </div>

          <FaqServicesAccordion items={FAQS} />
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section className="bg-[#0b0f1e] border-t border-white/[0.06] py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="mb-5 flex items-center justify-center gap-2 text-white/40">
            <Users className="h-4 w-4" />
            <span className="text-sm">Plus de 200 projets livrés en Corse et en France</span>
          </div>
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Vous ne savez pas<br className="hidden md:block" /> par où commencer ?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-white/55 leading-relaxed text-lg">
            Dites-nous votre projet en quelques mots. Nous revenons vers vous sous 24 h avec un
            premier retour concret — sans engagement, sans jargon.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/agence-communication-corse"
              className="inline-flex items-center gap-2 rounded-full bg-edev px-8 py-4 text-sm font-bold text-white uppercase tracking-wide shadow-lg hover:bg-edev/90 transition-all duration-300"
            >
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/partenariat-communication-corse"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white uppercase tracking-wide hover:border-white/60 transition-all duration-300"
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
