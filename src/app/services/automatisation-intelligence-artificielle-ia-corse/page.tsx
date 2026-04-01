import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle2, Bot, Zap, Share2, Mail,
  BarChart2, Cpu, Users, Clock, TrendingUp, Brain,
} from 'lucide-react'
import { ContactForm } from '@/components/home/ContactForm'
import { FaqAccordion } from '@/components/ui-blocks/FaqAccordion'

/* ── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Automatisation IA en Corse — Intelligence Artificielle pour Entreprises | E-Dev Multimedia',
  description:
    'Automatisation par IA en Corse : réseaux sociaux, emailing, veille SEO et chatbots sur-mesure. Gagnez du temps et boostez votre croissance avec l\'IA. Devis gratuit.',
  alternates: { canonical: 'https://www.edev-multimedia.com/services/automatisation-intelligence-artificielle-ia-corse/' },
  openGraph: {
    title: 'Automatisation IA en Corse — E-Dev Multimedia',
    description: 'Packages IA clé en main pour les entreprises corses : réseaux sociaux, emailing, veille concurrentielle et solutions sur-mesure.',
    url: 'https://www.edev-multimedia.com/services/automatisation-intelligence-artificielle-ia-corse/',
    type: 'website',
  },
}

/* ── Données ─────────────────────────────────────────────────────────────── */
const IA_AVANTAGES = [
  {
    Icon: Clock,
    title: 'Automatisez les tâches répétitives',
    desc: 'Publications, emails, rapports, veille… L\'IA prend en charge les actions chronophages pour que vous vous concentriez sur ce qui a vraiment de la valeur.',
  },
  {
    Icon: Brain,
    title: 'Comprenez mieux vos clients',
    desc: 'Analyse comportementale, segmentation intelligente, personnalisation des messages — l\'IA transforme vos données en insights actionnables.',
  },
  {
    Icon: TrendingUp,
    title: 'Accélérez votre croissance',
    desc: 'Plus de réactivité, plus de personnalisation, moins d\'effort humain. L\'IA est aujourd\'hui accessible à toutes les tailles de structures, même les TPE corses.',
  },
]

const PACKAGES = [
  {
    emoji: '📲',
    Icon: Share2,
    title: 'Réseaux Sociaux',
    gradient: 'from-violet-500/15 to-purple-500/5',
    border: 'hover:border-violet-400/40',
    accent: 'text-violet-400',
    accentBg: 'bg-violet-500/15 group-hover:bg-violet-500 group-hover:text-white',
    objectif: 'Automatiser votre présence en ligne et gagner du temps',
    desc: 'Un système intelligent qui publie pour vous, en continu. Idéal pour rester visible sur les réseaux sociaux sans y consacrer des heures chaque semaine.',
    features: [
      'Détection automatique de sujets tendance liés à votre secteur',
      'Reformulation et création de contenus textuels engageants par IA',
      'Génération d\'images originales via IA pour chaque publication',
      'Création automatisée de vidéos courtes adaptées aux plateformes',
      'Planification et publication automatique (Instagram, Facebook, LinkedIn…)',
      'Tableau de bord partagé : likes, commentaires, portée',
    ],
    idealFor: 'TPE, PME, collectivités locales, associations',
  },
  {
    emoji: '📧',
    Icon: Mail,
    title: 'Automatisation Emailing',
    gradient: 'from-blue-500/15 to-cyan-500/5',
    border: 'hover:border-blue-400/40',
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500/15 group-hover:bg-blue-500 group-hover:text-white',
    objectif: 'Maximiser l\'impact de vos campagnes emails avec moins d\'effort',
    desc: 'L\'emailing reste l\'un des canaux les plus rentables. Ce package IA automatise chaque étape tout en maintenant une communication personnalisée et qualitative.',
    features: [
      'Collecte automatisée d\'adresses (site, formulaire, base existante)',
      'Segmentation intelligente selon profils et comportements',
      'Rédaction automatisée d\'e-mails percutants et adaptés à chaque cible',
      'Intégration automatique d\'illustrations, images ou GIF dynamiques',
      'Programmation des envois selon jour, heure et événements stratégiques',
      'Rapport complet : taux d\'ouverture, clics, conversions',
    ],
    idealFor: 'Cabinets, entreprises de services, institutions',
  },
  {
    emoji: '📊',
    Icon: BarChart2,
    title: 'Veille Concurrentielle & SEO',
    gradient: 'from-edev/15 to-orange-500/5',
    border: 'hover:border-edev/40',
    accent: 'text-edev',
    accentBg: 'bg-edev/15 group-hover:bg-edev group-hover:text-white',
    objectif: 'Surveiller vos concurrents et améliorer votre position sur Google',
    desc: 'L\'IA surveille pour vous l\'activité de vos concurrents et les performances SEO de votre site. Vous recevez des recommandations claires, prêtes à être appliquées.',
    features: [
      'Analyse automatisée et continue des concurrents : offres, prix, mots-clés',
      'Audit SEO mensuel avec rapport de performance complet',
      'Proposition automatisée de mots-clés à fort potentiel local et national',
      'Suggestions de contenus optimisés à publier (articles, pages, fiches produit)',
      'Alertes en temps réel en cas de changement chez vos concurrents',
      'Suivi de positionnement Google avec focus Corse ou secteur local',
    ],
    idealFor: 'Commerces, tourisme, collectivités corses',
  },
  {
    emoji: '💡',
    Icon: Cpu,
    title: 'Projet Sur-mesure IA',
    gradient: 'from-green-500/15 to-emerald-500/5',
    border: 'hover:border-green-400/40',
    accent: 'text-green-400',
    accentBg: 'bg-green-500/15 group-hover:bg-green-500 group-hover:text-white',
    objectif: 'Développer une solution IA exactement adaptée à vos besoins',
    desc: 'Vous avez un projet IA spécifique ? Chatbot, assistant virtuel, module de recommandation — notre équipe analyse vos enjeux et conçoit un prototype fonctionnel.',
    features: [
      'Étude de faisabilité et cadrage de votre cas d\'usage IA',
      'Prototypage de chatbot, assistant virtuel ou module de recommandation',
      'Intégration IA dans vos processus métiers (CRM, ERP, support client…)',
      'Formation et transfert de compétences pour vos équipes',
      'Maintenance et optimisation continue via retour utilisateur',
    ],
    idealFor: 'Entreprises souhaitant innover avec l\'IA',
  },
]

const FAQ_ITEMS = [
  {
    question: 'En quoi consiste l\'automatisation IA pour les professionnels ?',
    answer: 'L\'automatisation IA désigne l\'utilisation de technologies intelligentes pour exécuter des tâches répétitives sans intervention humaine : publier sur les réseaux sociaux, envoyer des emails personnalisés, surveiller les concurrents, analyser les données… L\'objectif est de libérer du temps pour vos missions à forte valeur ajoutée tout en améliorant la qualité et la régularité de vos actions.',
  },
  {
    question: 'À qui s\'adressent ces solutions ?',
    answer: 'Nos packages IA s\'adressent à toutes les structures, quelle que soit leur taille : TPE, PME, commerçants, artisans, professions libérales, associations et collectivités en Corse et en France. Chaque solution est adaptée à votre secteur, votre budget et vos objectifs. Aucun prérequis technique n\'est nécessaire.',
  },
  {
    question: 'Faut-il avoir des compétences techniques pour utiliser ces solutions ?',
    answer: 'Absolument pas. Nos solutions IA sont clé en main : nous nous occupons de toute la configuration, de l\'intégration et du suivi. Vous recevez des rapports clairs et un tableau de bord simplifié. Si vous souhaitez gérer certains éléments en autonomie, nous proposons également des formations adaptées à votre équipe.',
  },
  {
    question: 'Quels résultats puis-je attendre ?',
    answer: 'Les résultats varient selon le package et votre situation de départ. En général, nos clients constatent une gain de temps significatif sur les tâches répétitives (2 à 10h par semaine), une augmentation de leur présence en ligne, une amélioration du taux d\'ouverture des emails et une meilleure visibilité SEO. Chaque projet fait l\'objet d\'un suivi mensuel avec des KPIs mesurables.',
  },
]

const PORTFOLIO_SELECTION = [
  { name: 'DJ The Meloman',    subtitle: 'Culture & musique — Corse',    imageSrc: '/real-meloman.jpg',         gradient: 'from-violet-900/80 to-purple-950/90' },
  { name: 'Corsica Connect',   subtitle: 'Services & communication',      imageSrc: '/real-corsica-connect.jpg', gradient: 'from-orange-900/80 to-red-950/90' },
  { name: 'Dolce Mare',        subtitle: 'Promenades en mer — Corse',     imageSrc: '/real-dolce-mare.jpg',      gradient: 'from-blue-900/80 to-cyan-950/90' },
]

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automatisation IA pour entreprises en Corse',
  url: 'https://www.edev-multimedia.com/services/automatisation-intelligence-artificielle-ia-corse/',
  provider: {
    '@type': 'Organization',
    name: 'E-Dev Multimedia',
    url: 'https://www.edev-multimedia.com',
    telephone: '+33615778527',
    address: { '@type': 'PostalAddress', addressLocality: 'Vescovato', addressRegion: 'Haute-Corse', addressCountry: 'FR' },
  },
  areaServed: ['Corse', 'France'],
  description: 'Packages IA clé en main pour automatiser la communication, le marketing et les processus des entreprises corses.',
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function AutomatisationIAPage() {
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
              <li className="text-white/60">Automatisation IA</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-violet-300 uppercase tracking-[0.2em] mb-6">Intelligence Artificielle · Corse</p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Automatisation IA<br />
                <span className="text-edev">pour votre entreprise</span><br />
                en Corse
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                L&apos;intelligence artificielle n&apos;est plus réservée aux grandes entreprises.
                E-Dev Multimedia propose des <strong className="text-white">packages IA clé en main</strong>{' '}
                aux professionnels, collectivités et associations en Corse — pour automatiser,
                gagner du temps et prendre une longueur d&apos;avance sur la concurrence.
              </p>

              <div className="flex flex-wrap gap-5 mb-10 text-white/50 text-sm">
                {['Solutions clé en main', 'Aucune compétence technique requise', 'Résultats mesurables'].map((s) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-edev shrink-0" />
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-edev text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-edev/90 transition-all duration-300 shadow-lg"
                >
                  Voir les packages <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/25 text-white/70 rounded-xl font-semibold text-sm uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            {/* Visuel droit — icônes IA en grille */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { Icon: Share2,    label: 'Réseaux Sociaux',    sub: 'Publication automatique',    color: 'text-violet-400', bg: 'bg-violet-500/10' },
                { Icon: Mail,      label: 'Emailing IA',        sub: 'Campagnes automatisées',     color: 'text-blue-400',   bg: 'bg-blue-500/10' },
                { Icon: BarChart2, label: 'Veille & SEO',       sub: 'Surveillance concurrentielle',color: 'text-edev',      bg: 'bg-edev/10' },
                { Icon: Cpu,       label: 'Sur-mesure',         sub: 'Solution personnalisée',     color: 'text-green-400',  bg: 'bg-green-500/10' },
              ].map(({ Icon, label, sub, color }) => (
                <div key={label} className="rounded-2xl p-6 border border-white/[0.08] bg-[#131827] flex flex-col gap-3">
                  <Icon className={`h-8 w-8 ${color}`} strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-bold text-white">{label}</p>
                    <p className="text-xs text-white/40 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. QU'EST-CE QUE L'IA — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">🤖 Comprendre l&apos;IA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                L&apos;intelligence artificielle :<br />un outil de productivité
                <span className="text-edev"> concret et accessible</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                L&apos;IA désigne un ensemble de technologies capables de simuler certaines facultés humaines :
                compréhension, raisonnement, apprentissage, prise de décision. Des systèmes peuvent aujourd&apos;hui
                analyser des données, identifier des schémas et effectuer des tâches <strong>parfois mieux et plus
                rapidement que les humains</strong>.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Pour les professionnels, collectivités et associations en Corse, l&apos;IA n&apos;est pas un gadget
                futuriste : c&apos;est un <strong>véritable outil de productivité</strong>, accessible à toutes les
                structures quelle que soit leur taille.
              </p>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-edev text-white rounded-xl font-semibold text-sm hover:bg-edev/90 transition-all duration-300"
              >
                Voir nos packages clé en main <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {IA_AVANTAGES.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-white/80 border border-border/40">
                  <div className="w-11 h-11 rounded-xl bg-edev/10 flex items-center justify-center text-edev shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1.5">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. L'IA COMME RÉVOLUTION — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0d1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">🚀 La révolution IA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Un levier de croissance aujourd&apos;hui —<br />
                <span className="text-edev">un standard incontournable demain</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                L&apos;IA transforme déjà notre façon de travailler : communication, marketing, gestion,
                service client, analyse de données. Pour les entreprises locales comme pour les acteurs
                publics en Corse, l&apos;IA devient un <strong className="text-white/80">avantage stratégique</strong> :
                meilleure réactivité, personnalisation des actions et prise de décision éclairée.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Rappelez-vous dans les années 1990-2000, lors de l&apos;arrivée d&apos;Internet — aujourd&apos;hui,
                nous ne pouvons plus nous en passer. L&apos;IA suit la même trajectoire.{' '}
                <strong className="text-white/80">S&apos;y préparer aujourd&apos;hui, c&apos;est prendre
                une longueur d&apos;avance sur les besoins de demain.</strong>
              </p>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-edev text-edev rounded-xl font-semibold text-sm hover:bg-edev hover:text-white transition-all duration-300"
              >
                Découvrir nos solutions IA <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Comparaison temporelle */}
            <div className="space-y-4">
              {[
                { era: 'Années 1990', event: 'Arrivée d\'Internet', impact: 'Révolution de la communication mondiale — indispensable aujourd\'hui', done: true },
                { era: 'Années 2010', event: 'Réseaux sociaux & mobile', impact: 'Nouveau canal client incontournable pour toute entreprise', done: true },
                { era: 'Aujourd\'hui', event: 'Intelligence Artificielle', impact: 'Automatisation, productivité et croissance à portée de toutes les structures', done: false, current: true },
              ].map(({ era, event, impact, done, current }) => (
                <div
                  key={era}
                  className={`flex gap-4 p-5 rounded-2xl border transition-all ${current ? 'border-edev/40 bg-edev/8' : 'border-white/10 bg-white/4'}`}
                >
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className={`w-3 h-3 rounded-full border-2 ${done ? 'bg-white/30 border-white/30' : 'bg-edev border-edev animate-pulse'}`} />
                    {!current && <div className="w-px flex-1 bg-white/10 min-h-[20px]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${current ? 'text-edev' : 'text-white/30'}`}>{era}</span>
                      {current && <span className="text-[9px] font-bold bg-edev text-white rounded-full px-2 py-0.5 uppercase tracking-wider">Maintenant</span>}
                    </div>
                    <p className={`text-sm font-bold ${current ? 'text-white' : 'text-white/50'} mb-1`}>{event}</p>
                    <p className={`text-xs leading-relaxed ${current ? 'text-white/65' : 'text-white/35'}`}>{impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. PACKAGES — light
      ══════════════════════════════════════════════════════════════ */}
      <section id="packages" className="section-light py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Nos offres</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Packages IA clé en main<br />pour les professionnels en Corse
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Chaque package est conçu pour être opérationnel rapidement, sans compétence technique de votre côté.
              Choisissez celui qui correspond à vos objectifs — ou combinez-les.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PACKAGES.map(({ emoji, Icon, title, gradient, border, accent, accentBg, objectif, desc, features, idealFor }) => (
              <div
                key={title}
                className={`group relative flex flex-col rounded-2xl border border-border/40 bg-gradient-to-br ${gradient} ${border} hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Accent top */}
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-edev origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />

                <div className="p-7 flex flex-col gap-5 flex-1">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${accentBg} flex items-center justify-center ${accent} transition-all duration-300 shrink-0`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Package</p>
                      <h3 className="text-lg font-extrabold text-foreground leading-snug">
                        {emoji} {title}
                      </h3>
                    </div>
                  </div>

                  {/* Objectif */}
                  <div className="bg-white/60 rounded-xl px-4 py-2.5 border border-border/30">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Objectif</p>
                    <p className="text-xs font-semibold text-foreground">{objectif}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>

                  {/* Features */}
                  <ul className="space-y-2 flex-1">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-foreground/70">
                        <CheckCircle2 className={`h-3.5 w-3.5 ${accent} shrink-0 mt-0.5`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Idéal pour + CTA */}
                  <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Idéal pour</p>
                      <p className="text-xs font-semibold text-foreground/80 mt-0.5">{idealFor}</p>
                    </div>
                    <Link
                      href="#contact"
                      className={`inline-flex items-center gap-1.5 px-4 py-2 bg-edev text-white rounded-lg text-xs font-bold hover:bg-edev/90 transition-all duration-200 whitespace-nowrap`}
                    >
                      Nous contacter <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. FAQ — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0d1020]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Vos questions sur l&apos;IA
            </h2>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-[#131827] px-6 md:px-8">
            <FaqAccordion items={FAQ_ITEMS} />
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
                Des projets réalisés<br />en Corse & ailleurs
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
                    alt={`Projet IA & digital — ${item.name}`}
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
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-4">Passez à l&apos;IA</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Prêt à automatiser<br />
                <span className="text-edev">votre entreprise avec l&apos;IA ?</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Vous souhaitez automatiser vos réseaux sociaux, vos emails, surveiller vos concurrents
                ou développer une solution IA sur-mesure ? Décrivez-nous votre situation —
                nous vous proposons le package adapté avec une{' '}
                <strong className="text-white">démo et un devis sous 24h</strong>.
              </p>

              <ul className="space-y-3">
                {[
                  'Aucune compétence technique requise',
                  'Démo offerte avant tout engagement',
                  'Solutions adaptées à tous les budgets',
                  'Suivi et optimisation continus inclus',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-edev/20 border border-edev/40 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-edev" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Liens vers autres packages */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-3">Autres services</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Création de site web', href: '/services/site-web-corse' },
                    { label: 'Référencement SEO', href: '/services/referencement-visibilite' },
                    { label: 'Marketing digital', href: '/services/marketing-agence-web-corse' },
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

            <div className="rounded-xl p-7 md:p-9 border border-white/[0.08] bg-[#131827]">
              <h3 className="text-lg font-bold text-white mb-6">Décrivez votre projet IA</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
