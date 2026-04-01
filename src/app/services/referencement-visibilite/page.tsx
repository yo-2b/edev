import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle2, Search, TrendingUp, BarChart2,
  FileSearch, Gauge, FileText, Link2, Shield, Globe,
  RefreshCw, Server, Lock, Wrench,
} from 'lucide-react'
import { ContactForm } from '@/components/home/ContactForm'

/* ── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Référencement SEO en Corse — Audit, Visibilité Google & SEO Local | E-Dev Multimedia',
  description:
    'Agence SEO en Corse : audit SEO complet, référencement naturel et local à Bastia. Améliorez votre visibilité sur Google et captez des clients qualifiés. Devis gratuit.',
  alternates: { canonical: 'https://www.edev-multimedia.com/services/referencement-visibilite/' },
  openGraph: {
    title: 'Référencement SEO en Corse — Audit & Visibilité Google | E-Dev Multimedia',
    description:
      'Audit SEO, référencement naturel et stratégie de visibilité pour les entreprises corses. Agence SEO à Bastia depuis 13 ans. Devis gratuit.',
    url: 'https://www.edev-multimedia.com/services/referencement-visibilite/',
    type: 'website',
  },
}

/* ── Données ─────────────────────────────────────────────────────────────── */
const POURQUOI = [
  {
    icon: '🎯',
    title: 'Des prospects qui viennent à vous',
    desc: '90 % des internautes utilisent Google pour trouver un produit ou un service. Un SEO bien maîtrisé positionne votre site face à ces prospects déjà dans une démarche d\'achat — vous ne les cherchez plus, ils vous trouvent.',
  },
  {
    icon: '📈',
    title: 'Un trafic qualifié et constant',
    desc: 'Contrairement à la publicité payante, le référencement naturel génère un flux de visiteurs qualifiés de façon durable et automatique, 24h/24. Un investissement dont le ROI s\'améliore avec le temps.',
  },
  {
    icon: '🏆',
    title: 'Dépassez vos concurrents en Corse',
    desc: 'Vos concurrents corses sont déjà présents sur Google. Chaque jour sans stratégie SEO, c\'est des clients potentiels captés par d\'autres. Un audit SEO permet d\'identifier exactement où vous en perdez.',
  },
]

const PILIERS = [
  {
    Icon: Gauge,
    step: '01',
    title: 'Audit technique',
    desc: 'Analyse complète de la santé technique de votre site : vitesse de chargement, qualité de l\'hébergement, code propre, balises HTML, structure des URLs, Core Web Vitals Google, compatibilité mobile.',
    tags: ['Core Web Vitals', 'Vitesse de chargement', 'Balises SEO', 'Architecture URL'],
  },
  {
    Icon: FileSearch,
    step: '02',
    title: 'Analyse du marché',
    desc: 'Benchmark concurrentiel approfondi : qui sont vos concurrents SEO en Corse ? Sur quels mots-clés se positionnent-ils ? Quelles opportunités pouvez-vous exploiter pour les dépasser sur Google ?',
    tags: ['Benchmark concurrentiel', 'Analyse des mots-clés', 'Opportunités SEO', 'Cartographie SERP'],
  },
  {
    Icon: FileText,
    step: '03',
    title: 'Contrôle des contenus',
    desc: 'Audit éditorial de tous vos contenus : textes, images, vidéos, balises alt, mots-clés, maillage interne et profil de backlinks. Nous identifions les pages à optimiser et celles à créer pour progresser.',
    tags: ['Mots-clés stratégiques', 'Maillage interne', 'Backlinking', 'Contenu SEO'],
  },
  {
    Icon: Link2,
    step: '04',
    title: 'Stratégie & suivi',
    desc: 'À la suite de l\'audit, nous mettons en œuvre un plan d\'action SEO priorisé. Chaque correction, optimisation et création de contenu est suivie de rapports de positions et de trafic mensuels.',
    tags: ['Plan d\'action SEO', 'Suivi des positions', 'Rapport mensuel', 'Google Search Console'],
  },
]

const MAINTENANCE_INCLUS = [
  { Icon: Server,   label: 'Hébergement web sur serveur sécurisé' },
  { Icon: Globe,    label: 'Renouvellement du nom de domaine (.fr, .com, .corsica…)' },
  { Icon: Lock,     label: 'Certificat SSL (HTTPS, données chiffrées)' },
  { Icon: Search,   label: 'Référencement naturel (SEO) continu' },
  { Icon: Wrench,   label: 'Modifications et interventions mineures incluses' },
  { Icon: RefreshCw,label: 'Mises à jour CMS et sauvegardes hebdomadaires' },
]

const RESULTATS = [
  { value: '+90%',   label: 'des recherches passent par Google', sub: 'Source : StatCounter 2024' },
  { value: '×3',     label: 'plus de clics sur la 1ère position', sub: 'vs la 2e page Google' },
  { value: '13+',    label: 'années d\'expertise SEO en Corse', sub: 'Résultats mesurables' },
  { value: '100%',   label: 'des audits livrés avec plan d\'action', sub: 'Rapport détaillé fourni' },
]

const PORTFOLIO_SELECTION = [
  { name: 'CerFrance',          subtitle: 'Expertise comptable — Corse', imageSrc: '/real-cerfrance.jpg',          gradient: 'from-sky-900/80 to-blue-950/90' },
  { name: 'Corsica Connect',    subtitle: 'Services & communication',     imageSrc: '/real-corsica-connect.jpg',    gradient: 'from-orange-900/80 to-red-950/90' },
  { name: 'CANC',               subtitle: 'Coopérative agricole — Corse', imageSrc: '/real-canc.jpg',               gradient: 'from-green-900/80 to-emerald-950/90' },
]

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Référencement SEO en Corse',
  url: 'https://www.edev-multimedia.com/services/referencement-visibilite/',
  provider: {
    '@type': 'Organization',
    name: 'E-Dev Multimedia',
    url: 'https://www.edev-multimedia.com',
    telephone: '+33615778527',
    address: { '@type': 'PostalAddress', addressLocality: 'Vescovato', addressRegion: 'Haute-Corse', addressCountry: 'FR' },
  },
  areaServed: ['Corse', 'Haute-Corse', 'Corse-du-Sud', 'France'],
  description: 'Audit SEO, référencement naturel et stratégie de visibilité Google pour les entreprises corses.',
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function ReferencementVisibilitePage() {
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
              <li className="text-white/60">Référencement SEO</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-edev mb-4">
                SEO · Visibilité Google · Corse & France
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Référencement<br />SEO en Corse —<br />
                <span className="text-edev">Soyez trouvé sur Google</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                <strong className="text-white">90 % des internautes</strong> cherchent un produit ou un service
                sur Google avant d&apos;acheter. Sans stratégie SEO, votre site est invisible — et c&apos;est votre
                concurrent qui capte ces clients. E-Dev Multimedia optimise votre{' '}
                <strong className="text-white">référencement naturel en Corse</strong> pour que vous soyez
                en première page, durablement.
              </p>

              <div className="flex flex-wrap gap-5 mb-10 text-white/50 text-sm">
                {['Audit SEO offert', 'Résultats mesurables', 'Suivi mensuel des positions'].map((s) => (
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
                  Demander un audit gratuit
                </Link>
                <Link
                  href="/realisations-agence-communication-corse"
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/25 text-white/70 rounded-xl font-semibold text-sm uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300"
                >
                  Nos réalisations <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {RESULTATS.map(({ value, label, sub }) => (
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
          2. POURQUOI LE SEO — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Pourquoi le SEO ?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Ne perdez plus de clients<br />au profit de vos concurrents
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ne pas avoir de stratégie de <strong>référencement SEO en Corse</strong>, c&apos;est ignorer
              l&apos;essentiel de votre trafic potentiel. La concurrence locale est déjà positionnée sur Google —
              chaque jour sans SEO est une opportunité manquée.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {POURQUOI.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/80 rounded-xl p-7 border border-border/40 flex flex-col gap-4">
                <span className="text-4xl">{icon}</span>
                <h3 className="text-base font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. NOTRE MÉTHODE AUDIT SEO — dark avec grille
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-[#0d1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Notre approche</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              L&apos;audit SEO : la solution<br />pour dépasser la concurrence
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Face au nombre croissant de sites concurrents en Corse, être irréprochable aux yeux des moteurs
              de recherche est fondamental. Notre <strong className="text-white/80">audit SEO complet</strong>{' '}
              analyse votre site sur 4 axes stratégiques pour un plan d&apos;action concret.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILIERS.map(({ Icon, step, title, desc, tags }, idx) => (
              <div
                key={step}
                className="group relative flex flex-col p-6 rounded-2xl border border-white/[0.08] bg-[#131827] hover:border-edev/40 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-edev origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />
                {/* Numéro déco */}
                <span className="absolute -top-3 -right-1 text-7xl font-black select-none pointer-events-none" style={{ color: 'rgba(255,255,255,0.03)' }} aria-hidden="true">
                  {step}
                </span>

                {idx < PILIERS.length - 1 && (
                  <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/20 text-xl select-none" aria-hidden="true">→</span>
                )}

                <div className="w-11 h-11 rounded-xl bg-edev/15 flex items-center justify-center text-edev group-hover:bg-edev group-hover:text-white transition-all duration-300 mb-4 shrink-0">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-black text-white/25 uppercase tracking-[0.2em] mb-1">{step}</span>
                <h3 className="text-sm font-bold text-white mb-2.5 group-hover:text-edev transition-colors">{title}</h3>
                <p className="text-xs text-white/50 leading-relaxed flex-1">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold text-white/45 border border-white/[0.08] rounded-full px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-edev text-edev rounded-xl font-semibold text-sm hover:bg-edev hover:text-white transition-all duration-300"
            >
              Demander mon audit SEO gratuit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. CONTRAT DE MAINTENANCE TOUT-EN-UN — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Contrat de maintenance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                Le tout-en-un idéal<br />pour votre visibilité en ligne
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Conscients de la complexité du monde du web, nous proposons un{' '}
                <strong>contrat de maintenance complet</strong> aux entreprises, associations et collectivités
                de Corse. Un seul interlocuteur, un seul contrat, tous vos besoins couverts.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Ce contrat est <strong>100 % personnalisable</strong> et adapté à votre activité, votre taille
                et vos objectifs de référencement. Il constitue la garantie d&apos;un site internet en bonne
                santé, visible et performant sur le long terme.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-edev text-white rounded-xl font-semibold text-sm hover:bg-edev/90 transition-all duration-300"
                >
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/site-web-corse"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-border text-foreground rounded-xl font-semibold text-sm hover:border-edev hover:text-edev transition-all duration-300"
                >
                  Voir nos sites web
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {MAINTENANCE_INCLUS.map(({ Icon, label }) => (
                <div key={label} className="flex items-start gap-3.5 p-5 rounded-xl bg-white/70 border border-border/40">
                  <div className="w-9 h-9 rounded-lg bg-edev/10 flex items-center justify-center text-edev shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-foreground leading-snug pt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. CE QUE VOUS GAGNEZ — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Bénéfices concrets</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ce que le SEO<br />apporte concrètement à votre entreprise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { Icon: TrendingUp,  title: 'Trafic organique croissant',    desc: 'Contrairement aux campagnes publicitaires, le référencement naturel s\'améliore dans le temps. Plus vous investissez tôt, plus votre avance sur la concurrence se creuse.' },
              { Icon: BarChart2,   title: 'ROI mesurable et transparent',  desc: 'Chaque mois, vous recevez un rapport complet : positions sur Google, évolution du trafic, mots-clés gagnés, conversions. La preuve par les chiffres.' },
              { Icon: Search,      title: 'Visibilité SEO locale en Corse',desc: 'Nous optimisons votre présence sur les recherches locales (Bastia, Ajaccio, Haute-Corse…) via Google Business Profile, les citations NAP et les mots-clés géolocalisés.' },
              { Icon: Shield,      title: 'Indépendance publicitaire',     desc: 'Le référencement naturel ne dépend d\'aucun budget publicitaire. Une fois vos positions établies, votre trafic est acquis — même si vous coupez la pub.' },
              { Icon: FileText,    title: 'Contenu optimisé pour Google',  desc: 'Textes de pages, fiches produits, articles de blog — nous rédigeons ou optimisons vos contenus pour qu\'ils répondent aux intentions de recherche de vos prospects.' },
              { Icon: CheckCircle2,title: 'Accompagnement & transparence', desc: 'Un interlocuteur SEO dédié, des rapports mensuels clairs, et des recommandations continues. Pas de jargon technique — des résultats compréhensibles.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="group relative flex flex-col p-7 rounded-2xl border border-white/[0.08] bg-[#131827] hover:border-edev/30 transition-all duration-300 overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-edev origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />
                <div className="w-11 h-11 rounded-xl bg-edev/15 flex items-center justify-center text-edev group-hover:bg-edev group-hover:text-white transition-all duration-300 mb-5 shrink-0">
                  <Icon size={22} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2.5 group-hover:text-edev transition-colors">{title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
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
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-2">Ils nous font confiance</p>
              <h2 className="text-3xl font-bold text-foreground leading-tight">
                Des entreprises corses<br />qui progressent sur Google
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
                    alt={`Référencement SEO — ${item.name}`}
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
          7. CTA CONTACT — dark
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-[#0d1020]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-4">Audit SEO gratuit</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Parlons de votre<br />
                <span className="text-edev">visibilité sur Google</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Votre site est-il visible en Corse sur Google ? Vos concurrents vous dépassent-ils ?
                Partagez-nous votre situation — nous réalisons un <strong className="text-white">audit SEO gratuit</strong>{' '}
                et vous proposons un plan d&apos;action concret sous <strong className="text-white">24 heures</strong>.
              </p>

              <ul className="space-y-3">
                {[
                  'Audit SEO initial offert et sans engagement',
                  'Analyse de vos concurrents corses sur Google',
                  'Plan d\'action priorisé et chiffré',
                  'Résultats suivis et mesurables chaque mois',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-edev/20 border border-edev/40 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-edev" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-2 text-sm text-white/50">
                <a href="tel:+33615778527" className="hover:text-edev transition-colors">📞 06.15.77.85.27</a>
                <a href="mailto:direction.edev@gmail.com" className="hover:text-edev transition-colors">✉️ direction.edev@gmail.com</a>
              </div>
            </div>

            <div className="rounded-xl p-7 md:p-9 border border-white/[0.08] bg-[#131827]">
              <h3 className="text-lg font-bold text-white mb-6">Demandez votre audit SEO gratuit</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
