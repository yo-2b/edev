import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle2, Printer, Tag, Layers,
  Package, MapPin, FileText, Clock, Shield,
  Sparkles, Palette, Zap, Award,
} from 'lucide-react'
import { ContactForm } from '@/components/home/ContactForm'

/* ── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Impression & Pose en Corse — Enseignes, Signalétique & Publicité Adhésive | E-Dev Multimedia',
  description:
    'Agence impression en Corse : enseignes lumineuses, publicité adhésive, signalétique, panneaux grand format et objets personnalisés. Conception, impression locale et pose. Devis gratuit.',
  alternates: { canonical: 'https://www.edev-multimedia.com/services/impression-pose/' },
  openGraph: {
    title: 'Impression & Pose en Corse — Enseignes, Adhésifs & Signalétique | E-Dev Multimedia',
    description: 'Conception visuelle, impression en Corse et pose professionnelle : enseignes, panneaux, adhésifs, flyers et objets personnalisés. Devis gratuit.',
    url: 'https://www.edev-multimedia.com/services/impression-pose/',
    type: 'website',
  },
}

/* ── Données ─────────────────────────────────────────────────────────────── */
const AVANTAGES = [
  {
    icon: '🎨',
    title: 'Conception graphique sur-mesure',
    desc: 'Grâce à des idées créatives et un œil expert, nous concevons des visuels percutants qui vous démarquent réellement. Chaque projet part de zéro pour être unique et adapté à votre image de marque.',
  },
  {
    icon: '🖨️',
    title: 'Impression locale en Corse',
    desc: 'Nous collaborons avec des imprimeurs partenaires basés en Corse pour vous garantir des délais rapides, une qualité irréprochable et un suivi de A à Z sans intermédiaire lointain.',
  },
  {
    icon: '🔧',
    title: 'Pose professionnelle sur site',
    desc: 'De la conception à la pose, nous prenons en charge l\'intégralité du projet. Nos équipes interviennent directement chez vous pour une installation soignée, durable et conforme au cahier des charges.',
  },
]

const SUPPORTS = [
  {
    Icon: Tag,
    title: 'Enseignes & caissons lumineux',
    badge: 'Impact visuel fort',
    desc: 'Enseignes lumineuses LED, caissons rétroéclairés, lettres découpées — nous concevons et posons vos enseignes pour une visibilité maximale, de jour comme de nuit.',
    points: [
      'Enseignes lumineuses LED basse consommation',
      'Caissons rétroéclairés et caissons à joues',
      'Lettres découpées en relief (PVC, inox, alu)',
      'Enseignes murales et totems de pied',
    ],
  },
  {
    Icon: Layers,
    title: 'Publicité adhésive & covering',
    badge: 'Véhicules & vitrines',
    desc: 'Covering de véhicules, vitrophanie, films décoratifs, stickers grand format — la publicité adhésive est l\'un des supports les plus rentables en termes de visibilité par euro investi.',
    points: [
      'Covering véhicule partiel ou total',
      'Vitrophanie et films pour vitrines',
      'Stickers et adhésifs grand format',
      'Films de protection et de branding',
    ],
  },
  {
    Icon: FileText,
    title: 'Panneaux, bâches & grand format',
    badge: 'Extérieur & chantier',
    desc: 'Panneaux de chantier, bâches publicitaires, toiles tendues, roll-up et kakémonos — des supports grand format pensés pour résister aux conditions extérieures corses.',
    points: [
      'Bâches imprimées UV résistantes',
      'Panneaux dibond, PVC et forex',
      'Roll-up et kakémonos pour salons',
      'Toiles tendues et banderoles',
    ],
  },
  {
    Icon: Printer,
    title: 'Supports print traditionnels',
    badge: 'Flyers · Affiches · Brochures',
    desc: 'Cartes de visite, flyers, plaquettes commerciales, affiches et menus — tous vos supports print conçus par nos graphistes et imprimés en haute qualité pour une image professionnelle.',
    points: [
      'Cartes de visite et papier à en-tête',
      'Flyers, dépliants et brochures',
      'Affiches A0 à A4 et menus',
      'Calendriers et supports promotionnels',
    ],
  },
  {
    Icon: MapPin,
    title: 'Signalétique & fléchage',
    badge: 'Intérieur & extérieur',
    desc: 'Plaques de porte, signalétique directionnelle, panneaux d\'information et fléchage de sécurité — pour guider, informer et organiser l\'espace de votre établissement.',
    points: [
      'Plaques de porte et numérotation',
      'Panneaux directionnels et fléchage',
      'Signalétique de sécurité et réglementaire',
      'Totems et présentoirs d\'accueil',
    ],
  },
  {
    Icon: Package,
    title: 'Objets & goodies personnalisés',
    badge: 'Cadeau & événementiel',
    desc: 'Stylos, mugs, t-shirts, sacs, clés USB — des objets à votre effigie pour fidéliser vos clients, marquer les événements d\'entreprise et renforcer votre notoriété.',
    points: [
      'Textile personnalisé (t-shirts, polos, casquettes)',
      'Objets publicitaires et goodies',
      'Packaging et sacs personnalisés',
      'Cadeaux d\'entreprise et kits événementiels',
    ],
  },
]

const PROCESS = [
  {
    step: '01',
    emoji: '💬',
    title: 'Définition du besoin',
    desc: 'Nous analysons votre projet, votre environnement et vos contraintes pour vous conseiller sur les supports, matériaux et finitions les mieux adaptés à vos objectifs et votre budget.',
    tags: ['Conseil matériaux', 'Étude du site', 'Budget défini'],
  },
  {
    step: '02',
    emoji: '🎨',
    title: 'Conception graphique',
    desc: 'Nos graphistes créent les visuels adaptés à votre support. Un BAT (Bon à Tirer) vous est soumis pour validation avant toute mise en production — zéro surprise à la livraison.',
    tags: ['Création visuelle', 'BAT validé', 'Retouches incluses'],
  },
  {
    step: '03',
    emoji: '🖨️',
    title: 'Impression en Corse',
    desc: 'Votre projet est confié à notre imprimeur partenaire basé en Corse. Pelliculage, découpe, routage — chaque étape est contrôlée pour garantir une haute qualité de finition.',
    tags: ['Imprimeur local', 'Contrôle qualité', 'Délais rapides'],
  },
  {
    step: '04',
    emoji: '🔧',
    title: 'Pose & installation',
    desc: 'Nos équipes interviennent directement sur votre site pour poser et installer vos supports dans les règles de l\'art. Vous n\'avez rien à gérer — sauf admirer le résultat.',
    tags: ['Pose professionnelle', 'Intervention sur site', 'Garantie durabilité'],
  },
]

const PORTFOLIO_SELECTION = [
  { name: 'CANC',            subtitle: 'Coopérative agricole — Corse', imageSrc: '/real-canc.jpg',            gradient: 'from-green-900/80 to-emerald-950/90' },
  { name: 'Renucci',         subtitle: 'Entreprise locale — Corse',   imageSrc: '/real-renucci.jpg',          gradient: 'from-stone-900/80 to-zinc-950/90' },
  { name: 'Corsica Connect', subtitle: 'Services & communication',     imageSrc: '/real-corsica-connect.jpg', gradient: 'from-orange-900/80 to-red-950/90' },
]

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Impression et pose en Corse',
  url: 'https://www.edev-multimedia.com/services/impression-pose/',
  provider: {
    '@type': 'Organization',
    name: 'E-Dev Multimedia',
    url: 'https://www.edev-multimedia.com',
    telephone: '+33615778527',
    address: { '@type': 'PostalAddress', addressLocality: 'Vescovato', addressRegion: 'Haute-Corse', addressCountry: 'FR' },
  },
  areaServed: ['Corse', 'Haute-Corse', 'Corse-du-Sud'],
  description: 'Conception, impression et pose d\'enseignes, publicité adhésive, signalétique et supports print en Corse.',
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function ImpressionPosePage() {
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
              <li className="text-white/60">Impression & Pose</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-edev mb-4">
                Enseignes · Adhésifs · Print · Pose · Corse
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Impression &amp; Pose<br />
                <span className="text-edev">en Corse</span> —<br />
                De la Conception<br className="sm:hidden" /> à la Pose
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                E-Dev Multimedia est devenu en quelques années une{' '}
                <strong className="text-white">référence en communication visuelle en Corse</strong>.
                Conception graphique, impression locale avec nos partenaires et pose professionnelle —
                un service complet pour marquer, informer et promouvoir votre image sur tous supports.
              </p>

              <div className="flex flex-wrap gap-5 mb-10 text-white/50 text-sm">
                {['Conception + impression + pose', 'Imprimeur partenaire en Corse', 'Délais rapides garantis'].map((s) => (
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

            {/* Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: '6',         label: 'Types de supports',          sub: 'Enseignes, adhésifs, print, signalétique…' },
                { value: '100%',      label: 'Fabriqué & posé en Corse',   sub: 'Partenaires locaux de confiance' },
                { value: 'A à Z',     label: 'Prise en charge totale',      sub: 'Conception · Impression · Pose' },
                { value: '+13 ans',   label: 'Sur l\'île',                  sub: 'Référence communication visuelle en Corse' },
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
          2. NOS ATOUTS — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Pourquoi nous choisir ?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Publicité, signalétique, impression —<br />
              tout un monde à la portée de tous
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Notre agence en Corse collabore avec de nombreux acteurs de tous les secteurs d&apos;activité.
              Le but : accompagner les entreprises corses à <strong>marquer, informer, indiquer et promouvoir</strong>{' '}
              leur communication sur tous supports.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {AVANTAGES.map(({ icon, title, desc }) => (
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
          3. NOS SUPPORTS — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Nos supports</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Tous vos supports de communication<br />visuelle en un seul endroit
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Des enseignes lumineuses aux objets personnalisés, nous proposons une gamme complète de
              supports pour faire rayonner votre marque en Corse — même pour les projets les plus
              créatifs et extravagants !
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUPPORTS.map(({ Icon, title, badge, desc, points }) => (
              <div
                key={title}
                className="group relative flex flex-col p-7 rounded-2xl border border-white/[0.08] bg-[#131827] hover:border-edev/40 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-edev origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />

                <div className="flex items-start justify-between mb-5 gap-3">
                  <div className="w-11 h-11 rounded-xl bg-edev/15 flex items-center justify-center text-edev group-hover:bg-edev group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-edev bg-edev/10 border border-edev/20 rounded-full px-2.5 py-1 uppercase tracking-wider text-right leading-tight">
                    {badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-edev transition-colors">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">{desc}</p>

                <ul className="space-y-1.5">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-white/45">
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
              Demander un devis impression <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. PROCESSUS — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Notre processus</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Du brief à la pose —<br />on gère tout pour vous
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Notre processus méthodique garantit un gain de temps considérable et des délais d&apos;exécution
              rapides — sans sacrifier la qualité. Vous validez à chaque étape, nous nous occupons du reste.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map(({ step, emoji, title, desc, tags }, idx) => (
              <div key={step} className="relative flex flex-col p-6 rounded-2xl bg-white/80 border border-border/40 overflow-hidden">
                <span className="absolute -top-3 -right-1 text-7xl font-black select-none pointer-events-none text-edev/5" aria-hidden="true">
                  {step}
                </span>
                {idx < PROCESS.length - 1 && (
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
          5. QUALITÉ & ENGAGEMENT — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#0d1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Notre engagement</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Qualité, durabilité<br />
                <span className="text-edev">et innovations graphiques</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Grâce à des idées fraîches et un savoir-faire reconnu en Corse, nous vous proposons une
                conception graphique qui vous démarque réellement. Une fois votre besoin défini,
                le projet passe entre les mains de notre imprimeur local pour une exécution précise
                et rapide — pelliculage, découpe, pose inclus.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                <strong className="text-white/80">Notre offre s&apos;engage à maintenir votre communication
                en état le plus durablement possible</strong> — matériaux résistants aux conditions
                climatiques corses, finitions soignées et garantie sur la tenue dans le temps.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-edev text-white rounded-full font-semibold text-sm hover:bg-edev/90 transition-all duration-300"
              >
                Lancer mon projet <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { Icon: Sparkles, title: 'Créativité sans limite',     desc: 'Nous relevons les défis graphiques les plus fous. Projets hors-norme, demandes extravagantes — on ne dit jamais non avant d\'avoir exploré les possibilités.' },
                { Icon: Clock,    title: 'Délais d\'exécution rapides', desc: 'Notre processus méthodique et nos partenaires locaux nous permettent des délais de production compétitifs sans compromettre la qualité finale.' },
                { Icon: Shield,   title: 'Durabilité garantie',        desc: 'Matériaux premium résistants aux UV, à l\'humidité et aux conditions extérieures corses. Vos supports tiennent dans le temps — c\'est notre engagement.' },
                { Icon: Award,    title: 'Référence en Corse',         desc: 'Depuis plus de 13 ans, E-Dev Multimedia est un partenaire de confiance pour les entreprises corses souhaitant une communication visuelle impactante.' },
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
                Quelques réalisations<br />en Corse & ailleurs
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
                    alt={`Impression & pose — ${item.name}`}
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
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-4">Votre projet impression</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Un projet d&apos;enseigne,<br />
                <span className="text-edev">d&apos;adhésif ou d&apos;impression ?</span>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Décrivez-nous votre projet — type de support, dimensions, lieu de pose, délais souhaités.
                Nous vous répondons avec une{' '}
                <strong className="text-white">estimation gratuite et un conseil personnalisé sous 24h</strong>.
                Et on ne mord pas, promis ! 😉
              </p>

              <ul className="space-y-3">
                {[
                  'Devis gratuit et sans engagement',
                  'Conseil sur les matériaux et finitions',
                  'Imprimeur partenaire basé en Corse',
                  'Conception + impression + pose : tout en un',
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
                    { label: 'Infographie & Graphisme', href: '/services/infographie-graphisme-corse' },
                    { label: 'Création de site web',    href: '/services/site-web-corse' },
                    { label: 'Marketing digital',       href: '/services/marketing-agence-web-corse' },
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
              <h3 className="text-lg font-bold text-white mb-6">Décrivez votre projet impression</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
