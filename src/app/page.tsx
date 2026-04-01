import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Globe, Smartphone, TrendingUp, Bot, Palette,
  Briefcase, ArrowRight, Star,
  PhoneCall, PenTool, Code2, Rocket,
} from 'lucide-react'
import { getLatestPosts } from '@/lib/queries/posts'
import { stripHtml, truncate } from '@/lib/utils'
import { AnimatedCounter } from '@/components/home/AnimatedCounter'
import { ContactForm } from '@/components/home/ContactForm'

// Rendu dynamique temporaire — debug images manquantes
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Agence Web en Corse — Création Site Internet, SEO & Communication | E-Dev Multimedia',
  description:
    'Agence web & communication à Bastia, Corse. Création de site internet vitrine ou e-commerce, référencement SEO, marketing digital et automatisation IA. Devis gratuit 24h.',
  alternates: { canonical: 'https://www.edev-multimedia.com' },
}

/* ── Données statiques ─────────────────────────────────────────────────── */

const INTRO_FEATURES = [
  {
    title: 'Création de site web en Corse',
    desc: 'Vitrine, e-commerce, blog, sur-mesure, intranet et bien plus encore',
    href: '/services/site-web-corse',
  },
  {
    title: "Automatisation avec l'Intelligence Artificielle",
    desc: 'Veille automatisée, publication et création automatisées',
    href: '/services/automatisation-intelligence-artificielle-ia-corse',
  },
  {
    title: 'Infographie & graphisme',
    desc: 'Logo, visuels, branding et designs personnalisés',
    href: '/services/infographie-graphisme-corse',
  },
  {
    title: 'Impressions tout support',
    desc: 'Cartes, flyers, affiches, panneaux, enseignes',
    href: '/services/impression-pose',
  },
  {
    title: 'Application mobile & tablette',
    desc: 'Solutions sur-mesure adaptées à vos besoins',
    href: '/services/application-mobile-corse',
  },
  {
    title: 'SEO & référencement',
    desc: 'Référencement naturel et payant (SEO/SEA)',
    href: '/services/referencement-visibilite',
  },
]

const PORTFOLIO = [
  {
    name: 'Art & Miss',
    subtitle: 'Institut de beauté — Corse',
    imageSrc: '/real-art-miss.jpg',
    gradient: 'from-pink-900/80 to-rose-950/90',
  },
  {
    name: 'Dolce Mare',
    subtitle: 'Promenades en mer — Corse',
    imageSrc: '/real-dolce-mare.jpg',
    gradient: 'from-blue-900/80 to-cyan-950/90',
  },
  {
    name: 'Comme des Enfants',
    subtitle: 'E-commerce — Corse',
    imageSrc: '/real-comme-des-enfants.jpg',
    gradient: 'from-yellow-900/80 to-amber-950/90',
  },
  {
    name: 'CANC',
    subtitle: 'Coopérative agricole — Corse',
    imageSrc: '/real-canc.jpg',
    gradient: 'from-green-900/80 to-emerald-950/90',
  },
  {
    name: 'DJ The Meloman',
    subtitle: 'Culture & musique — Corse',
    imageSrc: '/real-meloman.jpg',
    gradient: 'from-violet-900/80 to-purple-950/90',
  },
  {
    name: 'Corsica Connect',
    subtitle: 'Services & communication',
    imageSrc: '/real-corsica-connect.jpg',
    gradient: 'from-orange-900/80 to-red-950/90',
  },
  {
    name: 'CerFrance',
    subtitle: 'Expertise comptable — Corse',
    imageSrc: '/real-cerfrance.jpg',
    gradient: 'from-sky-900/80 to-blue-950/90',
  },
  {
    name: 'Renucci',
    subtitle: 'Entreprise locale — Corse',
    imageSrc: '/real-renucci.jpg',
    gradient: 'from-stone-900/80 to-zinc-950/90',
  },
]

const STATS = [
  { target: 380,  suffix: '+', label: 'Collaborateurs satisfaits' },
  { target: 1400, suffix: '+', label: 'Projets aboutis' },
  { target: 13,   suffix: '+', label: "Années d'expérience" },
  { target: 8000, suffix: '+', label: 'Tasses de café' },
]

const TESTIMONIALS = [
  {
    quote:
      "Yoann est très sérieux, à l'écoute, et extrêmement réactif. Un vrai professionnel qui nous a fourni un travail de qualité pour un prix plus que raisonnable. Je le recommande à 100 %.",
    name: 'Denissia Manovelli',
    role: 'Gérante résidence de luxe',
    stars: 5,
  },
  {
    quote:
      "Déjà plusieurs sites à mon actif, toujours aussi professionnel, réactif et agréable ! Les résultats ont largement été développés par rapport à l'ancien prestataire. Je recommande !",
    name: 'Galeazzi Sébastien',
    role: 'Gérant hôtel 3★',
    stars: 5,
  },
  {
    quote:
      "Agence web pro, réactive, toujours dans l'accompagnement. Le travail est soigné, livré dans les délais, et la communication est fluide. Je recommande vivement.",
    name: "AZ'Equipement",
    role: 'Spécialiste pièces détachées',
    stars: 5,
  },
]

const SERVICES = [
  {
    Icon: Globe,
    title: 'Création de site internet en Corse',
    desc: 'Site vitrine professionnel, boutique e-commerce ou solution sur-mesure. Design responsive, performant et pensé pour convertir vos visiteurs en clients.',
    href: '/services/site-web-corse',
  },
  {
    Icon: TrendingUp,
    title: 'Référencement SEO à Bastia',
    desc: 'Montez en première page Google grâce à une stratégie SEO locale ciblée. Audit, optimisation technique, contenu et netlinking pour les entreprises corses.',
    href: '/services/referencement-visibilite',
  },
  {
    Icon: Bot,
    title: 'Automatisation IA pour entreprises',
    desc: "Gagnez du temps avec l'IA : publication automatisée, veille concurrentielle, génération de contenu et communication pilotée par l'intelligence artificielle.",
    href: '/services/automatisation-intelligence-artificielle-ia-corse',
  },
  {
    Icon: Briefcase,
    title: 'Marketing digital & stratégie',
    desc: 'Publicité en ligne, social media, emailing et stratégie digitale globale. Nous développons votre notoriété et votre acquisition client en Corse et en France.',
    href: '/services/marketing-agence-web-corse',
  },
  {
    Icon: Smartphone,
    title: 'Applications mobiles iOS & Android',
    desc: "Développement d'applications mobiles sur-mesure pour iOS et Android. Ergonomie soignée, intégration métier et accompagnement complet de la conception au lancement.",
    href: '/services/application-mobile-corse',
  },
  {
    Icon: Palette,
    title: 'Identité visuelle & graphisme',
    desc: 'Création de logo, charte graphique, supports print et identité de marque. Un design professionnel qui vous différencie et renforce votre crédibilité.',
    href: '/services/infographie-graphisme-corse',
  },
]

const PROCESS = [
  {
    step: '01',
    Icon: PhoneCall,
    color: 'from-violet-500/20 to-violet-500/5',
    accent: '#8B5CF6',
    title: 'Échange & Analyse',
    desc: 'Un premier rendez-vous (visio ou en présentiel en Corse) pour comprendre votre activité, vos cibles et vos objectifs. Nous analysons votre présence digitale actuelle et votre marché local.',
    tags: ['Audit gratuit', 'Étude concurrentielle', 'Définition des objectifs'],
  },
  {
    step: '02',
    Icon: PenTool,
    color: 'from-blue-500/20 to-blue-500/5',
    accent: '#3B82F6',
    title: 'Conception & Design',
    desc: 'Nos designers créent vos maquettes UI/UX sur-mesure, validées avec vous avant tout développement. Identité visuelle, charte graphique et expérience utilisateur pensées pour convertir.',
    tags: ['Maquettes interactives', 'Validation client', 'Responsive design'],
  },
  {
    step: '03',
    Icon: Code2,
    color: 'from-edev/20 to-edev/5',
    accent: 'var(--color-edev)',
    title: 'Développement & Tests',
    desc: 'Votre projet prend vie grâce à nos développeurs : code propre et performant, intégration des contenus, tests multi-appareils et optimisation des Core Web Vitals pour Google.',
    tags: ['Code sur-mesure', 'Tests multi-devices', 'Core Web Vitals'],
  },
  {
    step: '04',
    Icon: Rocket,
    color: 'from-green-500/20 to-green-500/5',
    accent: '#22C55E',
    title: 'Lancement & Référencement',
    desc: 'Mise en ligne soignée avec optimisation SEO on-page complète, configuration Google Search Console et Analytics. Suivi mensuel des positions et des performances pour votre visibilité en Corse.',
    tags: ['SEO on-page', 'Google Search Console', 'Suivi mensuel'],
  },
]

/* ── Helper badge date ─────────────────────────────────────────────────── */
const MONTHS = ['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUI', 'JUL', 'AOÛ', 'SEP', 'OCT', 'NOV', 'DÉC']

function dateBadge(date: Date) {
  return {
    month: MONTHS[date.getMonth()],
    day: date.getDate().toString().padStart(2, '0'),
  }
}

/* ── Page ──────────────────────────────────────────────────────────────── */
export default async function HomePage() {
  const latestPosts = await getLatestPosts(3).catch(() => [])

  return (
    <>

      {/* ════════════════════════════════════════════════════════════════
          1. HERO — section-dark + animation blobs spectrales
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white py-24 md:py-44" style={{ backgroundColor: '#151823' }}>

        {/* Vidéo de fond en boucle */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />

        {/* Overlay sombre pour lisibilité du texte */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: 'rgba(15, 17, 26, 0.55)' }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 relative z-10">
          <div className="lg:grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] lg:gap-14 xl:gap-20 items-center">

            {/* ── Colonne gauche — texte principal ────────────────────── */}
            <div>
              {/* Signal géo — fort pour SEO local & IA */}
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/45 mb-6">
                Bastia · Haute-Corse · Corse du Sud · France
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5 leading-[1.05] tracking-tight">
                Votre Agence Web<br />& Communication<br className="hidden md:block" /> en Corse
              </h1>

              {/* Accroche — SEO + promesse valeur */}
              <p className="text-lg md:text-xl font-normal mb-4 text-white/75 leading-relaxed max-w-2xl">
                Nous concevons des <strong className="text-white font-semibold">sites internet qui convertissent</strong>,
                référençons vos pages sur Google et automatisons votre communication —
                pour que vous fassiez grandir votre entreprise.
              </p>

              {/* Preuves sociales rapides */}
              <div className="flex flex-wrap gap-6 mb-10 text-white/55 text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-edev inline-block" />
                  +380 clients satisfaits
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-edev inline-block" />
                  13 ans d&apos;expérience
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-edev inline-block" />
                  Réponse sous 24 h
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/agence-communication-corse"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-edev text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-edev/90 transition-all duration-300 shadow-m3-2"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/realisations-agence-communication-corse"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white/75 rounded-full font-semibold text-sm uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300"
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>

            {/* ── Colonne droite — widget actualités récentes ──────────── */}
            <div className="hidden lg:flex flex-col gap-3">

              {/* Header widget */}
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">
                  Actualités récentes
                </p>
                <Link
                  href="/actualites-corse"
                  className="text-[11px] text-edev hover:text-edev/70 transition-colors font-semibold inline-flex items-center gap-1"
                >
                  Tout voir <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Article cards */}
              {latestPosts.length > 0 ? latestPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/${post.slug}/`}
                  className="group flex gap-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] p-3.5 hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-200"
                >
                  {post.thumbnailUrl && (
                    <div className="shrink-0 w-[60px] h-[60px] rounded-xl overflow-hidden bg-white/10">
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-edev/70 mb-1 block">
                      Actualité
                    </span>
                    <p className="text-[13px] font-semibold text-white/85 line-clamp-2 leading-snug group-hover:text-white transition-colors">
                      {post.title}
                    </p>
                    <p className="text-[11px] text-white/30 mt-1.5">
                      {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </Link>
              )) : null}

              {/* Séparateur + thématiques éditoriales */}
              <div className="mt-2 pt-4 border-t border-white/[0.07]">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/25 mb-2.5">
                  Nos thématiques
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Web & Digital', 'Intelligence Artificielle', 'Cybersécurité', 'Crypto & Finance', 'High-Tech'].map((theme) => (
                    <span
                      key={theme}
                      className="text-[10px] font-semibold border border-white/[0.1] rounded-full px-2.5 py-1 text-white/35"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mini CTA */}
              <Link
                href="/actualites-corse"
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl border border-edev/30 bg-edev/10 py-3 text-xs font-bold uppercase tracking-wider text-edev hover:bg-edev/20 hover:border-edev/50 transition-all duration-200"
              >
                Explorer toutes les actualités <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. INTRO — section-light — layout bento vidéo + CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* En-tête section */}
          <div className="mb-8 md:mb-10">
            <div className="flex flex-wrap gap-2 mb-5">
              {['Création web', 'Design graphique', 'SEO', 'IA & automatisation', 'Impression'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold text-edev tracking-widest uppercase border border-edev/30 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3">
              <h2 className="text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                Votre agence web en Corse,{' '}
                <span className="text-edev">de la stratégie à la réalisation</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed lg:max-w-sm lg:text-right">
                Basée à Vescovato, <strong>E-Dev Multimedia</strong> accompagne les entreprises corses
                et nationales dans leur <strong>transformation digitale</strong> depuis plus de 13 ans.
              </p>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid lg:grid-cols-3 gap-4 md:gap-5">

            {/* Vidéo — 2/3 de la largeur */}
            <div className="lg:col-span-2 relative overflow-hidden rounded-3xl shadow-2xl bg-black min-h-[260px] md:min-h-[440px]">
              <iframe
                src="https://www.youtube.com/embed/to8b5WMApGY?rel=0&modestbranding=1"
                title="Présentation E-Dev Multimedia — Agence Web en Corse"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* 3 premières cartes empilées à droite */}
            <div className="grid grid-rows-3 gap-4 md:gap-5">
              {INTRO_FEATURES.slice(0, 3).map((feat) => (
                <Link
                  key={feat.href}
                  href={feat.href}
                  className="group flex flex-col justify-between p-5 rounded-2xl border border-border/50 bg-white/70 hover:border-edev hover:bg-white hover:shadow-lg transition-all duration-200"
                >
                  <div>
                    <h4 className="font-bold text-foreground text-sm leading-snug group-hover:text-edev transition-colors mb-1.5">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{feat.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-edev mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir + <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>

            {/* 3 dernières cartes — ligne du bas, pleine largeur */}
            {INTRO_FEATURES.slice(3).map((feat) => (
              <Link
                key={feat.href}
                href={feat.href}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-border/50 bg-white/70 hover:border-edev hover:bg-white hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <h4 className="font-bold text-foreground text-sm leading-snug group-hover:text-edev transition-colors mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
                <span className="text-xs font-bold text-edev mt-4 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  En savoir + <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. PORTFOLIO — full-width, grandes cartes avec images de fond
      ════════════════════════════════════════════════════════════════ */}
      <section id="portfolio" className="section-dark pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl font-bold text-white text-center">
            Ils nous font confiance...
          </h2>
        </div>

        {/* 4 réalisations par ligne */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((item) => (
            <div
              key={item.name}
              className="relative overflow-hidden group cursor-default h-64 md:h-72"
            >
              {/* Image de fond */}
              {item.imageSrc ? (
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              )}

              {/* Gradient sombre ancré en bas — garantit lisibilité du titre */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Titre toujours visible — ancré en bas */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-extrabold text-base md:text-lg leading-tight drop-shadow-lg">
                  {item.name}
                </h3>
                <p className="text-white/65 text-[10px] uppercase tracking-widest mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="py-10 text-center">
          <Link
            href="/realisations-agence-communication-corse"
            className="inline-flex items-center gap-2 text-sm font-semibold text-edev hover:opacity-75 transition-opacity"
          >
            Voir toutes nos réalisations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. STATS — section-light — compteurs animés
      ════════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          5. TÉMOIGNAGES — section-dark
      ════════════════════════════════════════════════════════════════ */}
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-14">
            Notre plus grande fierté :<br className="hidden sm:block" /> vous satisfaire !
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl p-8 flex flex-col gap-5 border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="flex justify-center gap-1" aria-label={`${t.stars} étoiles sur 5`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-white/70 leading-relaxed text-center flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-center">
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          6. SERVICES — section-light — design sobre et professionnel
      ════════════════════════════════════════════════════════════════ */}
      <section id="services" className="section-light py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* En-tête section — SEO + lisibilité */}
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Nos expertises</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Une agence digitale complète<br className="hidden sm:block" /> pour votre entreprise en Corse
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              De la <strong>création de site internet vitrine</strong> à la boutique <strong>e-commerce</strong>,
              du <strong>référencement SEO à Bastia</strong> à l&apos;<strong>automatisation IA</strong> —
              E-Dev Multimedia est votre partenaire digital unique en Corse.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {SERVICES.map(({ Icon, title, desc, href }) => (
              <Link
                key={href}
                href={href}
                className="group relative flex flex-col p-7 rounded-2xl bg-white/80 border border-border/40 hover:border-edev/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Accent line top — apparaît au hover */}
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-edev origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />

                {/* Icône compacte */}
                <div className="w-11 h-11 rounded-xl bg-edev/8 flex items-center justify-center mb-5 text-edev group-hover:bg-edev group-hover:text-white transition-all duration-300 shrink-0">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3 className="text-base font-bold text-foreground mb-2.5 group-hover:text-edev transition-colors leading-snug">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{desc}</p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-edev group-hover:gap-3 transition-all duration-200">
                  Découvrir <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-edev text-edev rounded-full font-semibold text-sm hover:bg-edev hover:text-white transition-all duration-300"
            >
              Toutes nos prestations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          7. PROCESS — section différenciée — 4 étapes enrichies
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0d1020 0%, #1a1f35 50%, #0d1020 100%)' }}
      >
        {/* Motif de grille décoratif */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* En-tête */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Notre méthode</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Comment on s&apos;organise<br className="hidden sm:block" /> pour votre projet ?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              De la première prise de contact à votre référencement sur Google — un processus clair,
              transparent et éprouvé depuis 13 ans en Corse.
            </p>
          </div>

          {/* Cartes étapes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map(({ step, Icon, color, title, desc, tags }, idx) => (
              <div
                key={step}
                className={`relative flex flex-col rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${color} overflow-hidden`}
              >
                {/* Numéro décoratif en fond */}
                <span
                  className="absolute -top-4 -right-2 text-8xl font-black select-none pointer-events-none"
                  style={{ color: 'rgba(255,255,255,0.04)' }}
                  aria-hidden="true"
                >
                  {step}
                </span>

                {/* Connecteur flèche entre cartes (desktop) */}
                {idx < PROCESS.length - 1 && (
                  <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/20 text-xl select-none" aria-hidden="true">
                    →
                  </span>
                )}

                {/* Icône */}
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 shrink-0">
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Numéro petit */}
                <span className="text-xs font-black text-white/30 uppercase tracking-[0.2em] mb-1">{step}</span>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-white/55 leading-relaxed flex-1">{desc}</p>

                {/* Tags badge */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-white/50 bg-white/8 border border-white/10 rounded-full px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          8. BLOG — section-light — news Drizzle
      ════════════════════════════════════════════════════════════════ */}
      {latestPosts.length > 0 && (
        <section className="section-light py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Dernières Actualités
              </h2>
              <Link
                href="/actualites-corse"
                className="hidden sm:flex items-center gap-1 text-sm font-semibold text-edev hover:opacity-75 transition-opacity"
              >
                Toutes les actualités <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {latestPosts.map((post) => {
                const { month, day } = dateBadge(post.publishedAt)
                const excerpt = post.excerpt ? truncate(stripHtml(post.excerpt), 100) : ''

                return (
                  <article key={post.id} className="group">
                    <Link href={`/${post.slug}/`} aria-label={post.title}>
                      <div className="relative h-52 mb-5 overflow-hidden rounded-2xl bg-muted shadow-m3-1 group-hover:shadow-m3-2 transition-shadow duration-300">
                        {post.thumbnailUrl ? (
                          <Image
                            src={post.thumbnailUrl}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-edev/15 to-muted" />
                        )}

                        {/* Badge date */}
                        <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-sm px-4 py-2 text-center min-w-[60px] rounded-bl-xl">
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none">
                            {month}
                          </p>
                          <p className="text-2xl font-extrabold text-edev leading-tight">
                            {day}
                          </p>
                        </div>
                      </div>
                    </Link>

                    <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-edev transition-colors duration-200 leading-snug">
                      <Link href={`/${post.slug}/`}>{post.title}</Link>
                    </h3>

                    {excerpt && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {excerpt}
                      </p>
                    )}

                    <Link
                      href={`/${post.slug}/`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-edev hover:opacity-75 transition-opacity"
                    >
                      En savoir + <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </article>
                )
              })}
            </div>

            <div className="mt-10 text-center sm:hidden">
              <Link
                href="/actualites-corse"
                className="inline-flex items-center gap-1 text-sm font-semibold text-edev hover:opacity-75 transition-opacity"
              >
                Toutes les actualités <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════
          9. CTA FINAL — avec formulaire de contact intégré
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-20 md:py-32"
        style={{ background: 'linear-gradient(135deg, #1b2032 0%, #151823 100%)' }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Colonne gauche — accroche */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-4">Contact</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Un projet en tête ?<br />
                <span className="text-edev">Parlons-en.</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Que vous souhaitiez créer un site internet, améliorer votre référencement SEO en Corse,
                ou automatiser votre communication grâce à l&apos;IA — nous sommes là pour vous accompagner.
                Réponse garantie sous 24&nbsp;h.
              </p>

              {/* Engagements */}
              <ul className="space-y-3">
                {[
                  'Devis gratuit et sans engagement',
                  'Réponse sous 24 h (souvent bien moins !)',
                  'Agence locale en Corse — disponible partout en France',
                  '13 ans d\'expérience, +380 clients accompagnés',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-edev/20 border border-edev/40 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-edev" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Infos contact directes */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-2 text-sm text-white/50">
                <a href="tel:+33615778527" className="hover:text-edev transition-colors">📞 06.15.77.85.27</a>
                <a href="mailto:direction.edev@gmail.com" className="hover:text-edev transition-colors">✉️ direction.edev@gmail.com</a>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div
              className="rounded-3xl p-7 md:p-9 border border-white/10"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              <h3 className="text-lg font-bold text-white mb-6">Envoyez-nous votre projet</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
