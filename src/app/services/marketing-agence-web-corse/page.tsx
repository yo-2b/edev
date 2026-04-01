import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle2, Target, Magnet, Megaphone,
  Search, FileText, BarChart2, Users, Share2,
  MousePointer, Heart, TrendingUp, Globe, Lightbulb,
} from 'lucide-react'
import { ContactForm } from '@/components/home/ContactForm'

/* ── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Marketing Digital & Stratégie de Communication en Corse | E-Dev Multimedia',
  description:
    'Agence de marketing digital en Corse : stratégie SEO, inbound marketing, réseaux sociaux, Google Ads et plan de communication sur-mesure. Devis gratuit sous 24h.',
  alternates: { canonical: 'https://www.edev-multimedia.com/services/marketing-agence-web-corse/' },
  openGraph: {
    title: 'Marketing Digital & Communication en Corse — E-Dev Multimedia',
    description: 'Plan de communication digitale complet pour les entreprises corses : SEO, inbound, outbound, réseaux sociaux et suivi des résultats.',
    url: 'https://www.edev-multimedia.com/services/marketing-agence-web-corse/',
    type: 'website',
  },
}

/* ── Données ─────────────────────────────────────────────────────────────── */
const POURQUOI = [
  {
    icon: '📡',
    title: 'Touchez vos cibles là où elles sont',
    desc: 'Vos prospects corses et nationaux sont sur Google, Instagram, LinkedIn et dans leur boîte mail. Une stratégie digitale bien construite vous permet de les atteindre au bon endroit, au bon moment.',
  },
  {
    icon: '🎯',
    title: 'Des actions mesurables et optimisables',
    desc: 'Contrairement à la communication traditionnelle, le marketing digital offre des indicateurs précis : taux de clics, conversions, coût par lead, ROI. Chaque action est analysée et améliorée en continu.',
  },
  {
    icon: '💡',
    title: 'Un plan adapté à votre réalité',
    desc: 'Chaque entreprise en Corse a ses propres objectifs, sa propre cible et ses propres ressources. Nous concevons des stratégies sur-mesure qui tiennent compte de votre secteur, votre budget et vos délais.',
  },
]

const PILIERS = [
  {
    Icon: Search,
    color: 'from-blue-500/20 to-blue-500/5',
    accentColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15 group-hover:bg-blue-500',
    label: 'SEO · Référencement naturel',
    title: 'SEO — Être trouvé sur Google',
    desc: 'Le référencement naturel est le socle de toute stratégie digitale durable. Nous optimisons votre site pour apparaître en première page Google sur les requêtes de vos prospects — en Corse comme en France.',
    points: [
      'Audit SEO technique complet',
      'Optimisation on-page (balises, contenus, structure)',
      'Stratégie de mots-clés locaux et nationaux',
      'Netlinking et autorité de domaine',
    ],
  },
  {
    Icon: Magnet,
    color: 'from-edev/20 to-edev/5',
    accentColor: 'text-edev',
    iconBg: 'bg-edev/15 group-hover:bg-edev',
    label: 'Inbound · Contenu & animation',
    title: 'Inbound — Attirer vos prospects',
    desc: 'L\'inbound marketing consiste à créer du contenu de valeur (articles, vidéos, guides) qui attire naturellement vos cibles. Une approche qui génère de la confiance, de la fidélité et des conversions durables.',
    points: [
      'Stratégie éditoriale et ligne de contenu',
      'Rédaction d\'articles SEO et pages de service',
      'Animation du blog et du site internet',
      'Email marketing et newsletters automatisées',
    ],
  },
  {
    Icon: Megaphone,
    color: 'from-violet-500/20 to-violet-500/5',
    accentColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15 group-hover:bg-violet-500',
    label: 'Outbound · Plateformes tierces',
    title: 'Outbound — Aller chercher vos clients',
    desc: 'L\'outbound marketing exploite les plateformes tierces pour toucher votre cible : publicité Google Ads, social media payant, growth hacking et backlinking. Des résultats rapides et mesurables.',
    points: [
      'Campagnes Google Ads (SEA) ciblées',
      'Publicité Meta (Facebook & Instagram Ads)',
      'Gestion des réseaux sociaux et community management',
      'Growth hacking et stratégies de croissance rapide',
    ],
  },
]

const PLAN_ITEMS = [
  { Icon: Target,       label: 'Rappel des objectifs et de la cible',                      desc: 'Définition claire de qui vous voulez atteindre et ce que vous souhaitez obtenir.' },
  { Icon: Lightbulb,    label: 'Planification des solutions numériques',                   desc: 'Choix des outils, plateformes et canaux les plus adaptés à vos objectifs.' },
  { Icon: FileText,     label: 'Charte graphique & ergonomique',                           desc: 'Cohérence visuelle sur tous les supports pour une identité forte et mémorable.' },
  { Icon: FileText,     label: 'Ligne éditoriale',                                         desc: 'Ton, style, fréquence et thématiques de contenu définis en accord avec votre marque.' },
  { Icon: Globe,        label: 'Canaux de diffusion',                                      desc: 'Site, blog, réseaux sociaux, vidéo, application — les bons canaux pour votre cible.' },
  { Icon: TrendingUp,   label: 'Moyens de promotion',                                      desc: 'Backlinking, Google Ads, growth hacking — pour amplifier votre visibilité rapidement.' },
  { Icon: MousePointer, label: 'Appels à l\'action',                                       desc: 'Achat, inscription newsletter, partage — des micro-conversions mesurées et optimisées.' },
  { Icon: Heart,        label: 'Fidélisation de la clientèle',                             desc: 'Programmes de fidélité, retargeting et communication post-achat pour garder vos clients.' },
  { Icon: BarChart2,    label: 'Suivi des objectifs & analyse des résultats',              desc: 'Tableaux de bord, rapports mensuels et recommandations d\'optimisation continue.' },
]

const CANAUX = [
  { Icon: Search,    label: 'Google SEO & SEA' },
  { Icon: Share2,    label: 'Réseaux sociaux' },
  { Icon: FileText,  label: 'Blog & content marketing' },
  { Icon: Users,     label: 'Community management' },
  { Icon: Globe,     label: 'Email marketing' },
  { Icon: TrendingUp,label: 'Google Analytics & reporting' },
]

const PORTFOLIO_SELECTION = [
  { name: 'CANC',            subtitle: 'Coopérative agricole — Corse', imageSrc: '/real-canc.jpg',            gradient: 'from-green-900/80 to-emerald-950/90' },
  { name: 'CerFrance',       subtitle: 'Expertise comptable — Corse', imageSrc: '/real-cerfrance.jpg',        gradient: 'from-sky-900/80 to-blue-950/90' },
  { name: 'Corsica Connect', subtitle: 'Services & communication',     imageSrc: '/real-corsica-connect.jpg', gradient: 'from-orange-900/80 to-red-950/90' },
]

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Marketing digital et stratégie de communication en Corse',
  url: 'https://www.edev-multimedia.com/services/marketing-agence-web-corse/',
  provider: {
    '@type': 'Organization',
    name: 'E-Dev Multimedia',
    url: 'https://www.edev-multimedia.com',
    telephone: '+33615778527',
    address: { '@type': 'PostalAddress', addressLocality: 'Vescovato', addressRegion: 'Haute-Corse', addressCountry: 'FR' },
  },
  areaServed: ['Corse', 'France'],
  description: 'Stratégie de marketing digital sur-mesure pour les entreprises corses : SEO, inbound, outbound, réseaux sociaux et plan de communication.',
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function MarketingAgenceWebCorsePage() {
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
              <li className="text-white/60">Marketing digital</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-edev mb-4">
                SEO · Inbound · Outbound · Corse & France
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Marketing Digital<br />&amp; Stratégie de<br />
                <span className="text-edev">Communication en Corse</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                La communication numérique est incontournable pour toute entreprise qui veut exister
                et se développer aujourd&apos;hui. E-Dev Multimedia conçoit des{' '}
                <strong className="text-white">plans de communication digitale sur-mesure</strong> pour
                les professionnels en Corse — en s&apos;appuyant sur tous les leviers qui font vraiment la différence.
              </p>

              <div className="flex flex-wrap gap-5 mb-10 text-white/50 text-sm">
                {['Stratégie sur-mesure', 'Résultats mesurables', 'Accompagnement complet'].map((s) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-edev shrink-0" />
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-edev text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-edev/90 transition-all duration-300 shadow-lg"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="#plan"
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/25 text-white/70 rounded-xl font-semibold text-sm uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300"
                >
                  Notre approche <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: '3',     label: 'Leviers marketing activés',         sub: 'SEO · Inbound · Outbound' },
                { value: '13+',   label: 'Années d\'expérience digitale',     sub: 'en Corse & en France' },
                { value: '360°',  label: 'Vision communication globale',      sub: 'On-site & hors-site' },
                { value: '100%',  label: 'Plans de communication sur-mesure', sub: 'Adaptés à chaque projet' },
              ].map(({ value, label, sub }) => (
                <div key={label} className="rounded-2xl p-6 border border-white/[0.08] bg-[#131827] flex flex-col gap-1">
                  <span className="text-3xl font-extrabold text-edev">{value}</span>
                  <span className="text-sm font-bold text-white leading-snug">{label}</span>
                  <span className="text-xs text-white/40 leading-snug">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. POURQUOI — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Pourquoi le digital ?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              La communication numérique,<br />indispensable en Corse comme ailleurs
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dans notre ère actuelle, la <strong>communication digitale</strong> est le prolongement naturel
              de toute stratégie commerciale. Chaque projet, chaque besoin est différent — c&apos;est pourquoi
              nos plans prennent en compte la nature, les exigences et les ressources de chaque client.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {POURQUOI.map(({ icon, title, desc }) => (
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
          3. LES 3 PILIERS — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Notre philosophie</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Les 3 leviers d&apos;une stratégie<br />digitale réussie
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Notre approche s&apos;appuie sur l&apos;ensemble des leviers favorisant la réussite d&apos;un projet
              de <strong className="text-white/80">communication numérique en Corse</strong> : le SEO,
              l&apos;Inbound et l&apos;Outbound marketing — activés ensemble pour des résultats durables.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {PILIERS.map(({ Icon, accentColor, iconBg, label, title, desc, points }) => (
              <div
                key={title}
                className="group relative flex flex-col p-8 rounded-2xl border border-white/[0.08] bg-[#131827] hover:border-white/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-edev origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />

                <div className={`w-12 h-12 rounded-xl ${iconBg} text-white flex items-center justify-center mb-2 shrink-0 transition-all duration-300`}>
                  <Icon size={24} />
                </div>

                <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${accentColor}`}>{label}</span>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{title}</h3>
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. PLAN DE COMMUNICATION — light
      ══════════════════════════════════════════════════════════════ */}
      <section id="plan" className="section-light py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Notre méthode</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                Un plan de communication<br />
                <span className="text-edev">structuré de A à Z</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Analyser et s&apos;adapter, c&apos;est essentiel. Notre processus commence par une analyse approfondie
                de vos leviers pour définir des objectifs précis. Nous concevons ensuite un{' '}
                <strong>plan de communication digitale</strong> complet, personnalisé et actionnable.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Tous ces termes peuvent sembler complexes — mais rassurez-vous :{' '}
                <strong>on s&apos;occupe de tout.</strong> Vous vous concentrez sur votre activité,
                nous gérons votre présence digitale.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-edev text-white rounded-full font-semibold text-sm hover:bg-edev/90 transition-all duration-300"
              >
                Demander mon plan de com <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {PLAN_ITEMS.map(({ Icon, label, desc }, idx) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 border border-border/40 hover:border-edev/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-black text-edev/40 w-6 text-right">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-edev/10 flex items-center justify-center text-edev shrink-0">
                      <Icon size={17} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1 leading-snug">{label}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. CANAUX & RÉSULTATS — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0d1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Canaux activés</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Tous les canaux digitaux<br />
                <span className="text-edev">maîtrisés pour vous</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Site internet, réseaux sociaux, moteurs de recherche, email, blog, vidéo —
                nous activons les bons canaux en fonction de votre cible et de vos objectifs,
                avec un suivi analytique rigoureux pour mesurer chaque résultat.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {CANAUX.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.08] bg-[#131827]">
                    <div className="w-8 h-8 rounded-lg bg-edev/15 flex items-center justify-center text-edev shrink-0">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-semibold text-white/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultats attendus */}
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-5">Ce que vous gagnez</p>
              {[
                { title: 'Visibilité accrue sur Google & réseaux', desc: 'Plus de trafic qualifié, plus de prospects inbound, moins de dépendance aux recommandations de bouche à oreille.' },
                { title: 'Acquisition client automatisée', desc: 'Vos tunnels de conversion travaillent pour vous 24h/24 : SEO, email automation, retargeting — sans effort quotidien supplémentaire.' },
                { title: 'Image de marque renforcée', desc: 'Une présence cohérente sur tous les canaux renforce la notoriété et la crédibilité de votre entreprise en Corse et au-delà.' },
                { title: 'Décisions basées sur des données', desc: 'Tableaux de bord clairs, rapports mensuels et recommandations d\'optimisation : vous savez exactement ce qui fonctionne.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3.5 p-4 rounded-xl border border-white/[0.08] bg-[#131827]">
                  <CheckCircle2 className="h-4 w-4 text-edev shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{title}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
                  </div>
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
                Quelques projets accompagnés<br />en Corse & ailleurs
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
                    alt={`Marketing digital — ${item.name}`}
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
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-4">Votre stratégie digitale</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Vous avez un projet<br />
                <span className="text-edev">de communication digitale ?</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Que vous partiez de zéro ou que vous souhaitiez améliorer une stratégie existante,
                nous analysons votre situation et vous proposons un plan d&apos;action concret.
                Parlez-nous de votre projet — <strong className="text-white">réponse sous 24h</strong>.
              </p>

              <ul className="space-y-3">
                {[
                  'Audit de votre communication actuelle offert',
                  'Plan de communication personnalisé',
                  'Tous les leviers digitaux activés selon vos besoins',
                  'Reporting mensuel clair et transparent',
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
                    { label: 'Référencement SEO',    href: '/services/referencement-visibilite' },
                    { label: 'Création de site web', href: '/services/site-web-corse' },
                    { label: 'Automatisation IA',    href: '/services/automatisation-intelligence-artificielle-ia-corse' },
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
              <h3 className="text-lg font-bold text-white mb-6">Décrivez votre projet marketing</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
