import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle2, Globe, ShoppingCart, Wrench,
  RefreshCw, Search, Smartphone, BarChart2, GraduationCap,
  Shield, Clock, HardDrive, Edit3, HeartHandshake,
} from 'lucide-react'
import { ContactForm } from '@/components/home/ContactForm'

/* ── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Création de Site Internet en Corse — Agence Web & Vitrine E-Dev Multimedia',
  description:
    'Agence web en Corse : création de site internet vitrine, e-commerce et sur-mesure à Bastia. Refonte, maintenance, SEO et suivi inclus. Devis gratuit sous 24h.',
  alternates: { canonical: 'https://www.edev-multimedia.com/services/site-web-corse/' },
  openGraph: {
    title: 'Création de Site Internet en Corse — E-Dev Multimedia',
    description:
      'Création de site internet professionnel en Corse : site vitrine, boutique e-commerce ou sur-mesure. Agence web à Bastia depuis 13 ans. Devis gratuit.',
    url: 'https://www.edev-multimedia.com/services/site-web-corse/',
    type: 'website',
  },
}

/* ── Données ─────────────────────────────────────────────────────────────── */
const TYPES_SITES = [
  {
    Icon: Globe,
    title: 'Site Vitrine',
    badge: 'Le plus demandé',
    desc: 'Présentez votre activité, vos services et vos coordonnées dans un site élégant, rapide et optimisé pour Google. Idéal pour les artisans, professions libérales et TPE/PME corses.',
    points: ['Design responsive mobile/tablette/desktop', 'Formulaire de contact et carte Google Maps', 'Optimisation SEO on-page incluse', 'Livraison en 3 à 5 semaines'],
  },
  {
    Icon: ShoppingCart,
    title: 'Boutique E-commerce',
    badge: 'Vendez en ligne',
    desc: 'Ouvrez votre boutique en ligne et vendez 24h/24 partout en France. Gestion des stocks, paiements sécurisés (CB, PayPal), fiches produits optimisées et tunnel d\'achat converti.',
    points: ['Catalogue produits illimité', 'Paiement sécurisé SSL (Stripe, PayPal)', 'Gestion des stocks et des commandes', 'Compatible marketplaces (Amazon, Cdiscount…)'],
  },
  {
    Icon: Wrench,
    title: 'Application sur-mesure',
    badge: 'Fonctionnalités complexes',
    desc: 'Votre activité nécessite des fonctionnalités métier spécifiques ? Intranet, espace client, réservation en ligne, SaaS… Nous développons des solutions 100 % adaptées à vos besoins.',
    points: ['Architecture pensée pour évoluer', 'Espace client / back-office dédié', 'Intégration API et outils tiers', 'Formation et documentation incluses'],
  },
  {
    Icon: RefreshCw,
    title: 'Refonte de site web',
    badge: 'Modernisez-vous',
    desc: 'Votre site est vieillissant, lent ou plus visible sur Google ? Une refonte bien conduite améliore l\'image de marque, les performances techniques et le référencement SEO durablement.',
    points: ['Audit complet du site existant', 'Migration des contenus et du SEO', 'Nouveau design moderne et responsive', 'Performances Core Web Vitals optimisées'],
  },
]

const INCLUS = [
  { Icon: Search,         label: 'Conseil SEO & stratégie webmarketing' },
  { Icon: Smartphone,     label: 'Design responsive (mobile, tablette, desktop)' },
  { Icon: BarChart2,      label: 'Analytics & suivi des performances (Google)' },
  { Icon: GraduationCap,  label: 'Formation à la gestion de votre site' },
  { Icon: Shield,         label: 'Hébergement sécurisé & certificat SSL' },
  { Icon: Edit3,          label: 'Contenus rédigés et optimisés SEO' },
]

const MAINTENANCE = [
  {
    Icon: Clock,
    title: 'Intervention sous 4h',
    desc: 'En cas de bug ou problème technique, nous intervenons dans un délai maximum de 4 heures après votre prise de contact. Rapport détaillé fourni à chaque intervention.',
  },
  {
    Icon: Edit3,
    title: 'Mises à jour de contenu',
    desc: 'Nouvelles photos, modifications tarifaires, ajout de pages ou de produits — nous effectuons toutes vos mises à jour de contenu incluses dans votre contrat de maintenance annuel.',
  },
  {
    Icon: HardDrive,
    title: 'Sauvegardes hebdomadaires',
    desc: 'Chaque semaine, notre système automatisé sauvegarde l\'intégralité de votre site. En cas d\'incident serveur, votre site est restauré en quelques heures sans perte de données.',
  },
  {
    Icon: HeartHandshake,
    title: 'Suivi & accompagnement',
    desc: 'Un interlocuteur dédié, un suivi des statistiques mensuelles et des recommandations continues pour que votre site reste performant, visible et aligné avec votre stratégie digitale.',
  },
]

const PORTFOLIO_SELECTION = [
  { name: 'Art & Miss',        subtitle: 'Institut de beauté — Corse', imageSrc: '/real-art-miss.jpg',        gradient: 'from-pink-900/80 to-rose-950/90' },
  { name: 'Dolce Mare',        subtitle: 'Promenades en mer — Corse',  imageSrc: '/real-dolce-mare.jpg',       gradient: 'from-blue-900/80 to-cyan-950/90' },
  { name: 'Comme des Enfants', subtitle: 'E-commerce — Corse',         imageSrc: '/real-comme-des-enfants.jpg',gradient: 'from-yellow-900/80 to-amber-950/90' },
]

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Création de site internet en Corse',
  url: 'https://www.edev-multimedia.com/services/site-web-corse/',
  provider: {
    '@type': 'Organization',
    name: 'E-Dev Multimedia',
    url: 'https://www.edev-multimedia.com',
    telephone: '+33615778527',
    address: { '@type': 'PostalAddress', addressLocality: 'Vescovato', addressRegion: 'Haute-Corse', addressCountry: 'FR' },
  },
  areaServed: ['Corse', 'Haute-Corse', 'Corse-du-Sud', 'France'],
  description: 'Création de site internet vitrine, e-commerce et sur-mesure en Corse. Agence web à Bastia depuis 13 ans.',
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function SiteWebCorsePage() {
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
              <li className="text-white/60">Création de site internet</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-edev mb-4">
                Agence Web · Corse & France entière
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                Création de<br />Site Internet<br />
                <span className="text-edev">en Corse</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-xl">
                Depuis plus de <strong className="text-white">13 ans</strong>, E-Dev Multimedia conçoit des{' '}
                <strong className="text-white">sites internet professionnels en Corse</strong> pour les entreprises
                qui veulent gagner en visibilité, capter des clients en ligne et développer leur chiffre d&apos;affaires.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-5 mb-10 text-white/50 text-sm">
                {['+380 clients en Corse & en France', '13 ans d\'expérience', 'Devis gratuit sous 24h'].map((s) => (
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
                  Voir nos réalisations <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Colonne droite — stats visuelles */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: '380+', label: 'Clients accompagnés', sub: 'en Corse & en France' },
                { value: '13', label: 'Années d\'expertise', sub: 'dans le web & digital' },
                { value: '4h',  label: 'Délai d\'intervention', sub: 'en cas de problème technique' },
                { value: '100%', label: 'Projets sur-mesure', sub: 'aucun template préfabriqué' },
              ].map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6 border border-white/[0.08] bg-[#131827] flex flex-col gap-1"
                >
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
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Pourquoi un site web ?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Votre site internet,<br />votre meilleur commercial
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              En Corse comme partout en France, un <strong>site internet professionnel</strong> est aujourd&apos;hui
              indispensable pour toute entreprise souhaitant exister en ligne, être trouvée sur Google
              et convertir des visiteurs en clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🌐',
                title: 'Vitrine en ligne 24h/24',
                desc: 'Votre site présente vos produits et services à tout moment, même quand vous dormez. Un point de contact permanent pour vos prospects, accessible depuis n\'importe quel appareil.',
              },
              {
                icon: '📈',
                title: 'Captez des clients qualifiés',
                desc: 'Plus de 90 % des acheteurs recherchent un produit ou un service sur Google avant d\'acheter. Un site bien référencé capte ce trafic qualifié et génère des leads réguliers.',
              },
              {
                icon: '🏆',
                title: 'Crédibilité & confiance',
                desc: 'Un site professionnel renforce instantanément la crédibilité de votre entreprise. Il distingue les professionnels sérieux des concurrents moins bien préparés.',
              },
            ].map(({ icon, title, desc }) => (
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
          3. TYPES DE SITES — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Nos formules</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Quel type de site internet<br />vous correspond ?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Chaque projet est unique. Que vous soyez artisan, commerçant, hôtelier ou startup,
              nous concevons le site adapté à vos objectifs, votre activité et votre budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {TYPES_SITES.map(({ Icon, title, badge, desc, points }) => (
              <div
                key={title}
                className="group relative flex flex-col p-8 rounded-2xl border border-white/[0.08] bg-[#131827] hover:border-edev/40 transition-all duration-300 overflow-hidden"
              >
                {/* Accent top */}
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

          {/* CTA inline */}
          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-edev text-edev rounded-xl font-semibold text-sm hover:bg-edev hover:text-white transition-all duration-300"
            >
              Discutons de votre projet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. CE QUI EST INCLUS — light
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Inclus dans chaque projet</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                Une prestation complète,<br />du conseil à la mise en ligne
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Chez E-Dev Multimedia, la <strong>création de site internet en Corse</strong> ne se limite pas
                au design. Chaque projet intègre un conseil stratégique webmarketing, une optimisation SEO
                on-page et une formation pour vous rendre autonome.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-edev text-white rounded-xl font-semibold text-sm hover:bg-edev/90 transition-all duration-300"
              >
                Obtenir un devis gratuit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {INCLUS.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-border/40"
                >
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
          5. MAINTENANCE & SUIVI — dark
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 bg-[#0d1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-3">Après la mise en ligne</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Maintenance, suivi<br />& accompagnement technique
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Le web évolue en permanence. Nous assurons la maintenance de votre site internet en Corse
              pour que vous ne soyez jamais livré à vous-même face à un problème technique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MAINTENANCE.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col p-6 rounded-2xl border border-white/[0.08] bg-[#131827]"
              >
                <div className="w-11 h-11 rounded-xl bg-edev/15 flex items-center justify-center text-edev mb-5 shrink-0">
                  <Icon size={22} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2.5">{title}</h3>
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
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-2">Inspirez-vous</p>
              <h2 className="text-3xl font-bold text-foreground leading-tight">
                Quelques sites réalisés<br />en Corse & ailleurs
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
                    alt={`Création site internet — ${item.name}`}
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
              <p className="text-xs font-bold tracking-[0.2em] text-edev uppercase mb-4">Parlons de votre projet</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Vous avez un projet<br />de site internet en Corse ?
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Que ce soit un site vitrine, une boutique e-commerce ou une application sur-mesure,
                notre équipe à Vescovato vous accompagne de A à Z. Partagez-nous votre projet —
                nous vous répondons <strong className="text-white">sous 24 heures</strong> avec une
                estimation gratuite et sans engagement.
              </p>

              <ul className="space-y-3">
                {[
                  'Devis gratuit et sans engagement',
                  'Réponse sous 24h (souvent bien moins !)',
                  'Agence locale en Corse — disponible partout en France',
                  'Accompagnement de A à Z : conseil, design, développement, SEO',
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
              <h3 className="text-lg font-bold text-white mb-6">Décrivez-nous votre projet</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
