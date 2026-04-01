import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle2, Smartphone, Apple, Tablet,
  Bell, Trophy, Star, Users, ShoppingBag, MapPin,
  Share2, Zap, Shield, Upload, RefreshCw, Layers,
} from 'lucide-react'
import { ContactForm } from '@/components/home/ContactForm'

/* ── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Application Mobile en Corse — Développement iOS & Android Sur-mesure | E-Dev Multimedia',
  description:
    'Création d\'application mobile sur-mesure en Corse : iOS, Android, tablette. Développement natif, publication sur les Stores et accompagnement complet. Devis gratuit.',
  alternates: { canonical: 'https://www.edev-multimedia.com/services/application-mobile-corse/' },
  openGraph: {
    title: 'Application Mobile en Corse — iOS & Android Sur-mesure | E-Dev Multimedia',
    description: 'Développement d\'applications mobiles sur-mesure pour iOS et Android en Corse. UX/UI soignée, publication sur les Stores et maintenance incluse.',
    url: 'https://www.edev-multimedia.com/services/application-mobile-corse/',
    type: 'website',
  },
}

/* ── Données ─────────────────────────────────────────────────────────────── */
const POURQUOI = [
  {
    icon: '📱',
    title: 'Contact permanent avec votre cible',
    desc: 'Une application mobile crée un lien direct et privilégié avec vos clients. Grâce aux notifications push, vous les atteignez instantanément au bon moment, avec le bon message.',
  },
  {
    icon: '🚀',
    title: 'Engagement & dynamique virale',
    desc: 'Jeux concours, récompenses, partage social — une app bien conçue génère une véritable dynamique d\'engagement autour de votre marque et stimule les recommandations entre utilisateurs.',
  },
  {
    icon: '🏅',
    title: 'Image de marque & crédibilité',
    desc: 'Être présent sur l\'App Store et le Play Store est un véritable gage de qualité. Votre application valide votre professionnalisme et renforce la confiance de vos prospects.',
  },
]

const TYPES_APPS = [
  {
    Icon: Apple,
    title: 'Application iOS',
    badge: 'iPhone & iPad',
    desc: 'Développement natif en Swift/Objective-C pour une expérience utilisateur fluide, rapide et conforme aux guidelines Apple. Publication sur l\'App Store incluse.',
    points: ['Swift ou Objective-C natif', 'Design conforme aux guidelines Apple', 'Optimisée pour iPhone et iPad', 'Publication App Store accompagnée'],
  },
  {
    Icon: Smartphone,
    title: 'Application Android',
    badge: 'Google Play',
    desc: 'Développement natif en Java ou Kotlin pour offrir toutes les fonctionnalités du système Android. Compatible avec tous les smartphones et tablettes Android du marché.',
    points: ['Java ou Kotlin natif', 'Compatible tous appareils Android', 'Intégration services Google', 'Publication Play Store accompagnée'],
  },
  {
    Icon: Layers,
    title: 'Application Cross-Platform',
    badge: 'iOS & Android en un',
    desc: 'Une seule base de code pour iOS et Android grâce à React Native ou Flutter. Solution plus rapide et économique quand les fonctionnalités métier ne nécessitent pas le natif pur.',
    points: ['React Native ou Flutter', 'Code unique iOS + Android', 'Délai et budget optimisés', 'Maintenu facilement'],
  },
  {
    Icon: Tablet,
    title: 'Application Tablette',
    badge: 'Grand écran',
    desc: 'Interfaces adaptées aux tablettes pour les usages professionnels : bornes interactives, catalogues produits, présentations commerciales ou outils internes de gestion.',
    points: ['Interface optimisée grand écran', 'Mode kiosque disponible', 'Usage hors-ligne possible', 'Adapté au contexte terrain'],
  },
]

const FONCTIONNALITES = [
  { Icon: Bell,      label: 'Notifications push personnalisées' },
  { Icon: Trophy,    label: 'Jeux concours & systèmes de fidélité' },
  { Icon: ShoppingBag, label: 'E-commerce et paiement mobile' },
  { Icon: MapPin,    label: 'Géolocalisation & cartographie' },
  { Icon: Users,     label: 'Espace client & compte personnel' },
  { Icon: Share2,    label: 'Partage social & viralité' },
  { Icon: Star,      label: 'Notation, avis & gamification' },
  { Icon: RefreshCw, label: 'Synchronisation cloud en temps réel' },
]

const PROCESS_APP = [
  {
    step: '01',
    title: 'Cadrage & UX',
    desc: 'Analyse de vos objectifs, de votre cible et de vos besoins fonctionnels. Nous définissons ensemble l\'architecture de l\'app et les parcours utilisateurs avant tout développement.',
    tags: ['Étude des besoins', 'User Journey', 'Architecture fonctionnelle'],
  },
  {
    step: '02',
    title: 'Design UI/UX',
    desc: 'Maquettes interactives validées avec vous : design mobile-first, ergonomie intuitive et identité visuelle cohérente avec votre charte graphique.',
    tags: ['Maquettes interactives', 'Design system', 'Validation client'],
  },
  {
    step: '03',
    title: 'Développement natif',
    desc: 'Code propre et performant en Swift/Objective-C (iOS), Java/Kotlin (Android) ou React Native. Tests unitaires et tests sur appareils réels à chaque étape.',
    tags: ['Code natif', 'Tests multi-appareils', 'API & intégrations'],
  },
  {
    step: '04',
    title: 'Publication & suivi',
    desc: 'Soumission sur l\'App Store et le Play Store, accompagnement lors des validations Apple & Google, puis suivi des performances et des mises à jour post-lancement.',
    tags: ['App Store & Play Store', 'Mises à jour', 'Analytics mobile'],
  },
]

const PORTFOLIO_SELECTION = [
  { name: 'Art & Miss',     subtitle: 'Institut de beauté — Corse', imageSrc: '/real-art-miss.jpg',   gradient: 'from-pink-900/80 to-rose-950/90' },
  { name: 'Dolce Mare',     subtitle: 'Promenades en mer — Corse',  imageSrc: '/real-dolce-mare.jpg',  gradient: 'from-blue-900/80 to-cyan-950/90' },
  { name: 'DJ The Meloman', subtitle: 'Culture & musique — Corse',  imageSrc: '/real-meloman.jpg',     gradient: 'from-violet-900/80 to-purple-950/90' },
]

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Développement d\'application mobile en Corse',
  url: 'https://www.edev-multimedia.com/services/application-mobile-corse/',
  provider: {
    '@type': 'Organization',
    name: 'E-Dev Multimedia',
    url: 'https://www.edev-multimedia.com',
    telephone: '+33615778527',
    address: { '@type': 'PostalAddress', addressLocality: 'Vescovato', addressRegion: 'Haute-Corse', addressCountry: 'FR' },
  },
  areaServed: ['Corse', 'France'],
  description: 'Création d\'applications mobiles sur-mesure iOS et Android pour les entreprises corses.',
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function ApplicationMobileCorsePagee() {
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
              <li className="text-white/60">Application mobile</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-edev mb-4">
                iOS · Android · Tablette · Corse & France
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Application Mobile<br />
                <span className="text-edev">Sur-mesure en Corse</span><br />
                iOS & Android
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                Gardez un lien direct et permanent avec vos clients grâce à une{' '}
                <strong className="text-white">application mobile sur-mesure</strong>.
                E-Dev Multimedia développe des apps natives iOS et Android pour les entreprises corses
                qui veulent se démarquer, fidéliser et générer de l&apos;engagement.
              </p>

              <div className="flex flex-wrap gap-5 mb-10 text-white/50 text-sm">
                {['Développement natif iOS & Android', 'Publication sur les Stores', 'UX/UI soignée'].map((s) => (
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
                  href="/realisations-agence-communication-corse"
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/25 text-white/70 rounded-xl font-semibold text-sm uppercase tracking-wider hover:border-white hover:text-white transition-all duration-300"
                >
                  Nos réalisations <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: '6,3Mds', label: 'Utilisateurs mobiles dans le monde', sub: 'Source : Statista 2024' },
                { value: '90%',    label: 'Du temps mobile passé dans des apps', sub: 'vs le navigateur mobile' },
                { value: '2 stores', label: 'App Store & Play Store', sub: 'Publication accompagnée' },
                { value: '100%',   label: 'Sur-mesure', sub: 'Aucun template préfabriqué' },
              ].map(({ value, label, sub }) => (
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
          2. POURQUOI UNE APP — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Pourquoi une app ?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Un outil digital qui vous démarque<br />et fidélise votre clientèle
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              En Corse comme partout en France, les consommateurs passent plus de 90 % de leur temps mobile
              dans des applications. Une <strong>app mobile sur-mesure</strong> est le canal le plus direct,
              le plus engageant et le plus mémorable pour votre marque.
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
          3. TYPES D'APPS — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Nos développements</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Quelle application mobile<br />pour votre projet ?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Du développement natif iOS en Swift au cross-platform React Native,
              nous choisissons ensemble la technologie la plus adaptée à vos objectifs,
              votre budget et vos contraintes de délais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {TYPES_APPS.map(({ Icon, title, badge, desc, points }) => (
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
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-edev text-edev rounded-xl font-semibold text-sm hover:bg-edev hover:text-white transition-all duration-300"
            >
              Discutons de votre application <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. FONCTIONNALITÉS + PROCESS — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Fonctionnalités */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Fonctionnalités</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Des fonctionnalités pensées<br />pour l&apos;engagement et la conversion
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Chaque application mobile que nous développons en Corse intègre les fonctionnalités
              les plus adaptées à vos objectifs métier — et les meilleures pratiques mobiles actuelles.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {FONCTIONNALITES.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/80 border border-border/40 text-center">
                <div className="w-11 h-11 rounded-xl bg-edev/10 flex items-center justify-center text-edev">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-semibold text-foreground leading-snug">{label}</span>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mt-4">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Notre méthode</p>
              <h2 className="text-3xl font-bold text-foreground leading-tight">
                De l&apos;idée aux Stores :<br />notre processus en 4 étapes
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROCESS_APP.map(({ step, title, desc, tags }, idx) => (
                <div key={step} className="relative flex flex-col p-6 rounded-xl bg-white/80 border border-border/40 overflow-hidden">
                  {/* Numéro déco */}
                  <span className="absolute -top-3 -right-1 text-7xl font-black select-none pointer-events-none text-edev/5" aria-hidden="true">
                    {step}
                  </span>
                  {idx < PROCESS_APP.length - 1 && (
                    <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-border text-xl select-none" aria-hidden="true">›</span>
                  )}
                  <span className="text-xs font-black text-edev/40 uppercase tracking-[0.2em] mb-2">{step}</span>
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. STORES & IMAGE DE MARQUE — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0d1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">App Store & Play Store</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Être sur les Stores,<br />
                <span className="text-edev">un véritable gage de qualité</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Publier votre application sur l&apos;App Store (Apple) et le Play Store (Google), c&apos;est bien
                plus qu&apos;une simple mise en ligne. C&apos;est un <strong className="text-white/80">signal fort
                de crédibilité</strong> envoyé à vos clients et prospects : votre application a été
                vérifiée, validée et jugée conforme aux standards des deux plus grandes plateformes mondiales.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Nous vous accompagnons tout au long du processus de soumission — des guidelines Apple
                aux exigences Google — pour maximiser les chances de validation au premier essai.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-edev text-white rounded-xl font-semibold text-sm hover:bg-edev/90 transition-all duration-300"
              >
                Lancer mon projet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { Icon: Upload,   title: 'Publication App Store',    desc: 'Soumission, screenshots, description et validation Apple. Nous gérons l\'ensemble du processus.' },
                { Icon: Zap,      title: 'Publication Play Store',   desc: 'Configuration Google Play Console, fiches multilingues et suivi des retours de validation.' },
                { Icon: Shield,   title: 'Sécurité & conformité',    desc: 'Respect des guidelines Apple et Google, conformité RGPD et sécurisation des données utilisateurs.' },
                { Icon: RefreshCw,title: 'Mises à jour & évolution', desc: 'Maintenance évolutive, nouvelles fonctionnalités et mises à jour compatibles avec les nouvelles versions OS.' },
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
                Quelques projets réalisés<br />en Corse & ailleurs
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
                    alt={`Application mobile — ${item.name}`}
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
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-4">Votre projet mobile</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Vous avez une idée<br />
                <span className="text-edev">d&apos;application mobile ?</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Que votre projet soit simple ou complexe, en Corse ou ailleurs — nous l&apos;analysons
                avec vous et vous proposons la solution technique la plus adaptée.
                Partagez-nous votre idée, nous vous répondons avec une{' '}
                <strong className="text-white">estimation gratuite sous 24h</strong>.
              </p>

              <ul className="space-y-3">
                {[
                  'Devis gratuit et sans engagement',
                  'Étude de faisabilité technique offerte',
                  'Développement iOS, Android ou cross-platform',
                  'Accompagnement de l\'idée à la publication sur les Stores',
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
                    { label: 'Création de site web', href: '/services/site-web-corse' },
                    { label: 'Automatisation IA',    href: '/services/automatisation-intelligence-artificielle-ia-corse' },
                    { label: 'Référencement SEO',    href: '/services/referencement-visibilite' },
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
              <h3 className="text-lg font-bold text-white mb-6">Décrivez votre projet mobile</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
