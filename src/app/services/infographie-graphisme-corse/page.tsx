import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle2, Palette, PenTool, Image as ImageIcon,
  Printer, Share2, Globe, Layers, Sparkles,
  Eye, Zap, Heart, TrendingUp,
} from 'lucide-react'
import { ContactForm } from '@/components/home/ContactForm'

/* ── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Infographie & Graphisme en Corse — Création Logo, Identité Visuelle & Design | E-Dev Multimedia',
  description:
    'Agence de graphisme en Corse : création de logo, identité visuelle, visuels réseaux sociaux, design web et supports print. Charte graphique sur-mesure. Devis gratuit.',
  alternates: { canonical: 'https://www.edev-multimedia.com/services/infographie-graphisme-corse/' },
  openGraph: {
    title: 'Infographie & Graphisme en Corse — Logo, Design & Identité Visuelle | E-Dev Multimedia',
    description: 'Création de logo, charte graphique, visuels pour réseaux sociaux et supports print pour les entreprises corses. Design professionnel sur-mesure.',
    url: 'https://www.edev-multimedia.com/services/infographie-graphisme-corse/',
    type: 'website',
  },
}

/* ── Données ─────────────────────────────────────────────────────────────── */
const AVANTAGES_VISUELS = [
  {
    icon: '⚡',
    title: 'Un message compris en un instant',
    desc: 'Le cerveau humain traite une image 60 000 fois plus vite que du texte. Un visuel bien conçu transmet votre message, votre valeur et votre identité en une fraction de seconde — là où un paragraphe échouerait.',
  },
  {
    icon: '🔄',
    title: 'Un contenu naturellement partagé',
    desc: 'Les publications avec une image de qualité génèrent 3 fois plus d\'engagement que les posts textuels. Un visuel percutant se partage spontanément, étendant votre portée sans effort supplémentaire.',
  },
  {
    icon: '🏆',
    title: 'Une image de marque mémorable',
    desc: 'Une identité visuelle cohérente — logo, couleurs, typographie — est retenue 65 % plus longtemps qu\'une information textuelle. Elle crédibilise votre entreprise et vous différencie durablement de la concurrence.',
  },
]

const PRESTATIONS = [
  {
    Icon: PenTool,
    title: 'Création de logo & identité visuelle',
    badge: 'La base de tout',
    desc: 'Votre logo est la première impression que vous donnez. Nous créons des identités visuelles uniques — logo, palette de couleurs, typographie, symbole — qui reflètent vos valeurs et marquent les esprits.',
    points: [
      'Recherche créative et moodboard',
      'Logo déclinable : horizontal, vertical, favicon',
      'Charte graphique complète (guide d\'utilisation)',
      'Fichiers livrés en tous formats (AI, SVG, PNG, PDF)',
    ],
  },
  {
    Icon: Share2,
    title: 'Visuels pour réseaux sociaux',
    badge: 'Instagram · Facebook · LinkedIn',
    desc: 'Posts, stories, couvertures, bannières publicitaires — nous créons des visuels optimisés pour chaque plateforme, cohérents avec votre charte, pensés pour capter l\'attention dans un feed saturé.',
    points: [
      'Templates personnalisés et réutilisables',
      'Formats adaptés à chaque plateforme',
      'Cohérence avec votre identité de marque',
      'Déclinaisons pour campagnes publicitaires',
    ],
  },
  {
    Icon: Globe,
    title: 'Design web & illustrations',
    badge: 'Site internet',
    desc: 'Bannières hero, icônes sur-mesure, infographies, illustrations et mises en page — nous habillons visuellement votre site internet pour une expérience utilisateur mémorable et une image professionnelle.',
    points: [
      'Bannières, headers et hero images',
      'Icônes et pictogrammes personnalisés',
      'Infographies interactives ou statiques',
      'Illustrations et visuels éditoriaux',
    ],
  },
  {
    Icon: Printer,
    title: 'Supports print & signalétique',
    badge: 'Impression & pose',
    desc: 'Cartes de visite, flyers, affiches, roll-up, enseignes, panneaux — nous créons vos supports imprimés en respectant les contraintes techniques d\'impression pour un rendu professionnel garanti.',
    points: [
      'Cartes de visite, flyers et brochures',
      'Affiches, roll-up et kakémonos',
      'Enseignes, panneaux et signalétique',
      'Fichiers prêts à l\'impression (PDF/X)',
    ],
  },
]

const PROCESS_CREATIF = [
  {
    step: '01',
    emoji: '🧠',
    title: 'Brief créatif',
    desc: 'Nous analysons votre secteur, vos concurrents, votre cible et vos valeurs pour cerner l\'univers graphique qui vous correspond. Un moodboard est soumis pour validation avant tout travail.',
    tags: ['Brief client', 'Moodboard', 'Étude concurrentielle'],
  },
  {
    step: '02',
    emoji: '✏️',
    title: 'Conception & propositions',
    desc: 'Nos graphistes créent plusieurs pistes créatives distinctes. Vous choisissez la direction qui vous parle le plus, puis nous l\'affinons ensemble jusqu\'à l\'approbation finale.',
    tags: ['3 propositions créatives', 'Retours illimités', 'Validation client'],
  },
  {
    step: '03',
    emoji: '🎨',
    title: 'Finalisation & déclinaisons',
    desc: 'Une fois la direction validée, nous créons toutes les déclinaisons nécessaires : formats, tailles, couleurs (fond clair/sombre), versions print et digitales.',
    tags: ['Déclinaisons tous formats', 'Versions print & digital', 'Guide d\'utilisation'],
  },
  {
    step: '04',
    emoji: '📦',
    title: 'Livraison des fichiers',
    desc: 'Tous vos fichiers sont livrés dans les formats adaptés à chaque usage (AI, SVG, PNG HD, PDF/X, JPEG). Un dossier organisé et nommé clairement pour une utilisation immédiate.',
    tags: ['Tous formats livrés', 'Fichiers sources inclus', 'Archivage projet'],
  },
]

const STATS_VISUELS = [
  { value: '60 000×', label: 'Plus vite traité', sub: 'Le cerveau traite les images vs le texte' },
  { value: '3×',      label: 'Plus d\'engagement', sub: 'Posts avec image vs posts texte' },
  { value: '65%',     label: 'Meilleure rétention', sub: 'Info retenue avec visuel vs texte seul' },
  { value: '94%',     label: 'Plus de vues', sub: 'Contenus avec visuels vs sans' },
]

const PORTFOLIO_SELECTION = [
  { name: 'Art & Miss',        subtitle: 'Institut de beauté — Corse', imageSrc: '/real-art-miss.jpg',         gradient: 'from-pink-900/80 to-rose-950/90' },
  { name: 'Comme des Enfants', subtitle: 'E-commerce — Corse',         imageSrc: '/real-comme-des-enfants.jpg',gradient: 'from-yellow-900/80 to-amber-950/90' },
  { name: 'Renucci',           subtitle: 'Entreprise locale — Corse',  imageSrc: '/real-renucci.jpg',          gradient: 'from-stone-900/80 to-zinc-950/90' },
]

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Infographie et graphisme en Corse',
  url: 'https://www.edev-multimedia.com/services/infographie-graphisme-corse/',
  provider: {
    '@type': 'Organization',
    name: 'E-Dev Multimedia',
    url: 'https://www.edev-multimedia.com',
    telephone: '+33615778527',
    address: { '@type': 'PostalAddress', addressLocality: 'Vescovato', addressRegion: 'Haute-Corse', addressCountry: 'FR' },
  },
  areaServed: ['Corse', 'France'],
  description: 'Création de logo, identité visuelle, infographie et supports graphiques pour les entreprises corses.',
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function InfographieGraphismeCorsePagee() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══════════════════════════════════════════════════════════════
          1. HERO — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark pt-14 pb-20 md:pt-20 md:pb-28 relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-white/40 flex-wrap">
              <li><Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/20">›</li>
              <li><Link href="/services" className="hover:text-white/70 transition-colors">Prestations</Link></li>
              <li aria-hidden="true" className="text-white/20">›</li>
              <li className="text-white/60">Infographie & Graphisme</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-edev mb-4">
                Logo · Identité visuelle · Print · Web · Corse
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Infographie<br />&amp; Graphisme<br />
                <span className="text-edev">en Corse</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                Un visuel bien conçu communique en une fraction de seconde ce que des paragraphes entiers
                peinent à transmettre. E-Dev Multimedia crée votre{' '}
                <strong className="text-white">identité visuelle, vos logos et tous vos supports graphiques</strong>{' '}
                pour une image professionnelle, cohérente et mémorable.
              </p>

              <div className="flex flex-wrap gap-5 mb-10 text-white/50 text-sm">
                {['Logo & charte graphique', 'Réseaux sociaux & print', 'Design 100% sur-mesure'].map((s) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-edev shrink-0" />
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-edev text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-edev/90 transition-all duration-300 shadow-lg"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/realisations-agence-communication-corse"
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/25 text-white/70 rounded-full font-semibold text-sm uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300"
                >
                  Nos réalisations <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Stats visuelles */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {STATS_VISUELS.map(({ value, label, sub }) => (
                <div key={label} className="rounded-2xl p-6 border border-white/[0.08] bg-[#131827] flex flex-col gap-1">
                  <span className="text-3xl font-extrabold text-edev leading-tight">{value}</span>
                  <span className="text-sm font-bold text-white leading-snug">{label}</span>
                  <span className="text-xs text-white/40 leading-snug">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. POUVOIR DU VISUEL — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">La force du visuel</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Une image bien construite vaut<br />mieux qu&apos;un long discours
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              L&apos;<strong>infographie en Corse</strong> — information + graphique — permet de véhiculer
              un message complexe de façon simple, claire et mémorable. Un outil de communication
              puissant qui touche vos cibles là où le texte seul échoue.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {AVANTAGES_VISUELS.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/80 rounded-2xl p-7 border border-border/40 flex flex-col gap-4">
                <span className="text-4xl">{icon}</span>
                <h3 className="text-base font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. NOS PRESTATIONS — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Nos prestations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Du logo au panneau enseigne —<br />tous vos supports graphiques
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              L&apos;infographie et le <strong className="text-white/80">graphisme en Corse</strong> s&apos;adaptent
              à toute situation : identité de marque, réseaux sociaux, site internet ou supports print.
              Une panoplie complète pour une communication visuelle cohérente et percutante.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PRESTATIONS.map(({ Icon, title, badge, desc, points }) => (
              <div
                key={title}
                className="group relative flex flex-col p-8 rounded-2xl border border-white/[0.08] bg-[#131827] hover:border-edev/40 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-edev origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />

                <div className="flex items-start justify-between mb-5 gap-3">
                  <div className="w-12 h-12 rounded-xl bg-edev/15 flex items-center justify-center text-edev group-hover:bg-edev group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-edev bg-edev/10 border border-edev/20 rounded-full px-3 py-1 uppercase tracking-wider whitespace-nowrap">
                    {badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-edev transition-colors">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{desc}</p>

                <ul className="space-y-2">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-xs text-white/50">
                      <CheckCircle2 className="h-3.5 w-3.5 text-edev shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-edev text-edev rounded-full font-semibold text-sm hover:bg-edev hover:text-white transition-all duration-300"
            >
              Démarrer mon projet graphique <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. PROCESSUS CRÉATIF — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Notre processus</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              De votre brief<br />à la livraison des fichiers
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un processus créatif transparent et collaboratif — vous êtes impliqué à chaque étape
              pour un résultat qui vous ressemble et répond exactement à vos besoins.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_CREATIF.map(({ step, emoji, title, desc, tags }, idx) => (
              <div key={step} className="relative flex flex-col p-6 rounded-2xl bg-white/80 border border-border/40 overflow-hidden">
                <span className="absolute -top-3 -right-1 text-7xl font-black select-none pointer-events-none text-edev/5" aria-hidden="true">
                  {step}
                </span>
                {idx < PROCESS_CREATIF.length - 1 && (
                  <span className="hidden lg:block absolute -right-3 top-12 z-10 text-border text-xl select-none" aria-hidden="true">›</span>
                )}
                <span className="text-3xl mb-4">{emoji}</span>
                <span className="text-xs font-black text-edev/40 uppercase tracking-[0.2em] mb-1.5">{step}</span>
                <h3 className="text-sm font-bold text-foreground mb-2.5">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold text-edev bg-edev/8 border border-edev/15 rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. IMPACT MARKETING — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0d1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Impact marketing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Le graphisme :<br />
                <span className="text-edev">un accélérateur de croissance</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                L&apos;infographie et le graphisme sont parmi les outils les plus sollicités en communication
                d&apos;entreprise. Ils permettent non seulement de transmettre un message clairement et
                rapidement, mais aussi de <strong className="text-white/80">générer du partage naturel</strong> —
                vos visuels deviennent des ambassadeurs de votre marque.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Après tout, une image bien construite et adaptée à votre cible est bien plus susceptible
                d&apos;être partagée, mémorisée et reconnue qu&apos;une simple page de texte.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-edev text-white rounded-full font-semibold text-sm hover:bg-edev/90 transition-all duration-300"
              >
                Créer mon identité visuelle <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { Icon: Eye,        title: 'Visibilité immédiate',      desc: 'Vos visuels captent l\'attention dans les fils d\'actualité, les affiches et les vitrines — là où le texte seul passerait inaperçu.' },
                { Icon: Zap,        title: 'Message instantané',        desc: 'L\'infographie simplifie l\'information la plus complexe pour qu\'elle soit comprise en moins de 3 secondes, sans ambiguïté.' },
                { Icon: Heart,      title: 'Connexion émotionnelle',    desc: 'Un design soigné crée une émotion positive associée à votre marque — une connexion qui fidélise bien au-delà du produit.' },
                { Icon: TrendingUp, title: 'ROI mesurable',             desc: 'Les campagnes visuelles bien conçues génèrent des taux d\'engagement et de mémorisation supérieurs, impactant directement vos résultats.' },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-3 p-5 rounded-2xl border border-white/[0.08] bg-[#131827]">
                  <div className="w-10 h-10 rounded-xl bg-edev/15 flex items-center justify-center text-edev shrink-0">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-white">{title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. RÉALISATIONS — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-2">Inspirez-vous</p>
              <h2 className="text-3xl font-bold text-foreground leading-tight">
                Quelques créations graphiques<br />réalisées en Corse & ailleurs
              </h2>
            </div>
            <Link
              href="/realisations-agence-communication-corse"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-edev hover:opacity-75 transition-opacity"
            >
              Voir tous les projets <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {PORTFOLIO_SELECTION.map((item) => (
              <Link
                key={item.name}
                href="/realisations-agence-communication-corse"
                className="relative overflow-hidden group rounded-2xl h-56 block"
              >
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={`Design graphique — ${item.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-extrabold text-base leading-tight drop-shadow">{item.name}</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest mt-0.5">{item.subtitle}</p>
                  <span className="block mt-2 text-edev text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Voir le projet →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. CONTACT — dark
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-[#0d1020]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-4">Votre projet graphique</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Vous avez un projet<br />
                <span className="text-edev">de logo ou de design ?</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Logo, charte graphique, visuels réseaux sociaux ou supports print — partagez-nous
                votre projet et vos idées. Nous vous répondons avec une{' '}
                <strong className="text-white">estimation gratuite sous 24h</strong> et des pistes
                créatives adaptées à votre univers.
              </p>

              <ul className="space-y-3">
                {[
                  'Devis gratuit et sans engagement',
                  'Moodboard créatif offert avant démarrage',
                  'Retouches illimitées jusqu\'à validation',
                  'Tous les fichiers sources livrés (AI, SVG, PDF…)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-edev/20 border border-edev/40 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-edev" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-3">Autres services</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Impression & Pose',  href: '/services/impression-pose' },
                    { label: 'Création de site web', href: '/services/site-web-corse' },
                    { label: 'Marketing digital',   href: '/services/marketing-agence-web-corse' },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href} className="text-xs text-white/50 border border-white/15 rounded-full px-3 py-1.5 hover:border-edev hover:text-edev transition-all">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 text-sm text-white/50">
                <a href="tel:+33615778527" className="hover:text-edev transition-colors">📞 06.15.77.85.27</a>
                <a href="mailto:direction.edev@gmail.com" className="hover:text-edev transition-colors">✉️ direction.edev@gmail.com</a>
              </div>
            </div>

            <div className="rounded-3xl p-7 md:p-9 border border-white/[0.08] bg-[#131827]">
              <h3 className="text-lg font-bold text-white mb-6">Décrivez votre projet graphique</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
