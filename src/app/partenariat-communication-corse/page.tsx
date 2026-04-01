import type { Metadata } from 'next'
import {
  Handshake,
  TrendingUp,
  Eye,
  ShieldCheck,
  Users,
  Coffee,
  CheckCircle2,
  ArrowRight,
  Zap,
  Star,
  Building2,
  UserCheck,
  MessageSquare,
  Repeat2,
  EyeOff,
  BadgeEuro,
} from 'lucide-react'
import { ContactForm } from '@/components/home/ContactForm'

/* ─── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Partenariat Communication en Corse — Collaboration & Apporteurs d\'Affaires | E-Dev Multimedia',
  description:
    'Agences de communication, freelances et apporteurs d\'affaires en Corse : unissons nos expertises. Marque blanche, commissions, projets locaux — découvrez le partenariat E-Dev Multimedia.',
  keywords: [
    'partenariat communication corse',
    'apporteur affaires corse',
    'collaboration agence web corse',
    'marque blanche corse',
    'partenaire freelance corse',
    'sous-traitance web corse',
    'réseau communication corse',
  ],
  openGraph: {
    title: 'Partenariat Communication en Corse — E-Dev Multimedia',
    description:
      'Agences, freelances et apporteurs d\'affaires : collaborons sur des projets digitaux locaux. Marque blanche, interlocuteur unique, vision gagnant-gagnant.',
    type: 'website',
    locale: 'fr_FR',
  },
}

/* ─── Données ─────────────────────────────────────────────────────────────── */
const PROFILS = [
  {
    Icon: UserCheck,
    color: 'from-violet-500/25 to-violet-500/5',
    accent: '#8B5CF6',
    badge: 'Profil 1',
    title: 'Apporteur d\'affaires',
    desc: 'Vous évoluez dans un réseau d\'entrepreneurs, de commerçants ou de professionnels. Vous identifiez des besoins digitaux chez vos contacts et souhaitez les mettre en relation avec un partenaire de confiance — tout en générant un revenu complémentaire.',
    points: [
      'Commission attractive sur chaque affaire apportée',
      'Aucune compétence technique requise',
      'Suivi transparent de chaque projet',
      'Votre réputation protégée par notre qualité de service',
    ],
  },
  {
    Icon: Building2,
    color: 'from-blue-500/25 to-blue-500/5',
    accent: '#3B82F6',
    badge: 'Profil 2',
    title: 'Agence de communication',
    desc: 'Vous êtes graphiste, agence print, community manager ou studio créatif. Vous manquez d\'une expertise web ou digitale pour répondre aux demandes complètes de vos clients. Nous devenons votre bras droit technique, en toute discrétion.',
    points: [
      'Collaboration en marque blanche totale',
      'Vous restez l\'interlocuteur unique de votre client',
      'Fixez vos propres tarifs librement',
      'Interlocuteur dédié sur tous vos projets',
    ],
  },
]

const AVANTAGES = [
  {
    Icon: Eye,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'Visibilité renforcée',
    desc: 'Votre logo et votre entreprise mis en avant sur E-Dev Multimedia. Backlink vers votre site, communication sur nos réseaux sociaux : votre notoriété grandit avec chaque collaboration.',
  },
  {
    Icon: BadgeEuro,
    color: 'text-edev',
    bg: 'bg-edev/10',
    title: 'Chiffre d\'affaires additionnel',
    desc: 'Transformez votre réseau en source de revenus régulière. Chaque mise en relation aboutie génère une commission claire, convenue en amont, versée sans friction.',
  },
  {
    Icon: EyeOff,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    title: 'Marque blanche complète',
    desc: 'Vous décidez de tout : communiquer ou non sur notre partenariat, la marge que vous prenez, le nom sous lequel les livrables sont présentés. Vous restez maître de votre relation client.',
  },
  {
    Icon: Repeat2,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    title: 'Relation sur le long terme',
    desc: 'On ne cherche pas à faire un coup. On construit ensemble, projet après projet, une collaboration durable fondée sur la confiance, la réactivité et des résultats concrets.',
  },
  {
    Icon: ShieldCheck,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    title: 'Engagement qualité',
    desc: 'Nos clients et partenaires sont au cœur de nos préoccupations. Nos process qualité — définis par notre politique d\'entreprise — garantissent des livrables à la hauteur de vos exigences.',
  },
  {
    Icon: MessageSquare,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    title: 'Interlocuteur unique',
    desc: 'Un seul contact chez E-Dev suit l\'ensemble de vos projets. Fini les interminables chaînes d\'emails. Vous avez un numéro, un prénom, et une réponse sous 24 h.',
  },
]

const STEPS = [
  {
    num: '01',
    Icon: Coffee,
    color: 'from-violet-500/20 to-violet-500/5',
    accent: '#8B5CF6',
    title: 'On prend un café',
    desc: 'Un appel ou une rencontre pour se présenter, comprendre vos activités et voir si nos expertises sont complémentaires. Sans engagement, sans jargon.',
  },
  {
    num: '02',
    Icon: Handshake,
    color: 'from-blue-500/20 to-blue-500/5',
    accent: '#3B82F6',
    title: 'On pose les bases',
    desc: 'Définition des modalités : types de projets, commission ou tarifs préférentiels, mode marque blanche, canal de communication dédié. Un accord simple, clair, à l\'écrit.',
  },
  {
    num: '03',
    Icon: Zap,
    color: 'from-edev/20 to-edev/5',
    accent: 'var(--color-edev)',
    title: 'On travaille ensemble',
    desc: 'Vous apportez un besoin ou un client. On prend en charge la production, on vous tient informé à chaque étape, et vous livrez un résultat irréprochable à votre client.',
  },
  {
    num: '04',
    Icon: TrendingUp,
    color: 'from-green-500/20 to-green-500/5',
    accent: '#22C55E',
    title: 'On fait grandir le réseau',
    desc: 'Au fil des projets, la confiance s\'installe. On identifie ensemble de nouvelles opportunités, on croise nos réseaux et on construit quelque chose de solide et de local.',
  },
]

/* ─── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'E-Dev Multimedia',
  url: 'https://edev-multimedia.com',
  description:
    'Agence web et communication en Corse proposant un programme de partenariat pour agences, freelances et apporteurs d\'affaires.',
  areaServed: {
    '@type': 'Place',
    name: 'Corse',
  },
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function PartenariatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d1020] py-28 md:py-36">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 border-b border-violet-400/40 pb-2 text-sm font-semibold uppercase tracking-widest text-violet-300">
            <Handshake className="h-4 w-4" />
            Programme Partenariat — Corse
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Il y a à manger{' '}
            <span className="text-edev">pour tout le monde.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/65 md:text-xl leading-relaxed">
            Agences de communication, freelances créatifs, apporteurs d&apos;affaires : unissons nos expertises
            pour servir les entreprises corses avec ce que chacun fait de mieux.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-8 py-4 text-sm font-bold text-white uppercase tracking-wide shadow-lg hover:bg-violet-500 transition-all duration-300"
            >
              <Coffee className="h-4 w-4" />
              On prend un café ?
            </a>
            <a
              href="#profils"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white uppercase tracking-wide hover:border-white/60 transition-all duration-300"
            >
              Voir les profils
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats rapides */}
          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-12 md:gap-12">
            {[
              { value: '13+', label: 'ans d\'expérience en Corse' },
              { value: '100%', label: 'compatible marque blanche' },
              { value: '24 h', label: 'de réponse garantie' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold text-white md:text-4xl">{s.value}</span>
                <span className="text-xs text-white/50 md:text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEUX PROFILS ─────────────────────────────────────────────────── */}
      <section id="profils" className="section-light py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-700">
              Qui peut collaborer ?
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Deux profils, une vision commune
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Peu importe votre positionnement, si vous évoluez dans la communication ou le business
              développement en Corse, il y a très probablement une synergie possible avec E-Dev Multimedia.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {PROFILS.map((p) => (
              <div
                key={p.title}
                className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-sm"
              >
                {/* Badge profil */}
                <span
                  className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
                  style={{ background: p.accent }}
                >
                  {p.badge}
                </span>

                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `${p.accent}22` }}
                  >
                    <p.Icon className="h-6 w-6" style={{ color: p.accent }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">{p.title}</h3>
                </div>

                <p className="mb-6 text-gray-600 leading-relaxed text-sm">{p.desc}</p>

                <ul className="flex flex-col gap-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: p.accent }}
                        strokeWidth={2}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVANTAGES ────────────────────────────────────────────────────── */}
      <section className="bg-[#0d1020] py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-300">
              Ce que vous gagnez
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Une collaboration qui profite à tout le monde
            </h2>
            <p className="mx-auto max-w-xl text-white/55">
              Concrets, mesurables, durables — voici ce que notre partenariat met concrètement sur la table.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AVANTAGES.map((av) => (
              <div
                key={av.title}
                className="group rounded-2xl border border-white/[0.08] bg-[#131827] p-6 transition-all duration-300 hover:border-edev/25"
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${av.bg}`}>
                  <av.Icon className={`h-5 w-5 ${av.color}`} strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{av.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{av.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUE BLANCHE focus ─────────────────────────────────────────── */}
      <section className="section-light py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Texte */}
            <div>
              <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
                Marque blanche
              </span>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                Vous restez le&nbsp;seul<br />interlocuteur de votre client
              </h2>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Notre partenariat peut se réaliser en totale marque blanche. Votre client ne sait pas — et n&apos;a
                pas besoin de savoir — que nous travaillons dans l&apos;ombre. Vous portez le projet, vous signez
                les livrables, vous définissez vos propres tarifs.
              </p>
              <p className="mb-8 text-gray-600 leading-relaxed">
                De notre côté, un interlocuteur dédié suit l&apos;ensemble de vos projets. Pas de réunions
                à rallonge, pas de ping-pong d&apos;emails : une relation directe, efficace et discrète.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Livrables sous votre identité ou celle de votre client',
                  'Liberté totale sur vos marges et honoraires',
                  'Confidentialité de la relation garantie',
                  'Un seul point de contact chez E-Dev sur tous vos projets',
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" strokeWidth={2} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                    <EyeOff className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Mode</p>
                    <p className="text-lg font-extrabold text-gray-900">Marque blanche</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Votre client voit', value: 'Votre agence', icon: '🙂' },
                    { label: 'Qui travaille', value: 'Vous + E-Dev', icon: '🤝' },
                    { label: 'Qui fixe les prix', value: 'Vous, librement', icon: '💶' },
                    { label: 'La relation client', value: 'Exclusivement vous', icon: '🔒' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm border border-gray-100">
                      <span className="text-sm text-gray-500">{row.label}</span>
                      <span className="text-sm font-bold text-gray-900">
                        {row.icon} {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-blue-600 px-5 py-4 text-center">
                  <p className="text-sm font-bold text-white">
                    &ldquo;On ne mord pas, et on sait tenir une relation discrète.&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-blue-200">— L&apos;équipe E-Dev Multimedia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ────────────────────────────────────────────── */}
      <section className="bg-[#0d1020] py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-green-400/30 bg-green-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-300">
              Le processus
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Comment ça marche ?
            </h2>
            <p className="mx-auto max-w-xl text-white/55">
              Simple, humain, sans bureaucratie. On va à l&apos;essentiel.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="relative overflow-hidden rounded-2xl bg-[#131827] border border-white/[0.08] p-6"
              >
                {/* Numéro décoratif */}
                <span className="pointer-events-none absolute -right-3 -top-4 select-none text-7xl font-black opacity-[0.06] text-white">
                  {s.num}
                </span>

                {/* Connecteur → entre les cartes (pas sur la dernière) */}
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="h-5 w-5 text-white/20" />
                  </div>
                )}

                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `${s.accent}22` }}
                >
                  <s.Icon className="h-5 w-5" style={{ color: s.accent }} strokeWidth={1.5} />
                </div>

                <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: s.accent }}>
                  Étape {s.num}
                </p>
                <h3 className="mb-2 text-base font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT QUALITÉ ───────────────────────────────────────────── */}
      <section className="section-light py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-8 md:p-12 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
              <ShieldCheck className="h-7 w-7 text-amber-600" strokeWidth={1.5} />
            </div>
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl">
              Engagement de qualité
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600 leading-relaxed">
              Nos clients et partenaires sont au cœur de nos préoccupations. Nous nous engageons sur des niveaux
              de prestations précis et respectons des procédures de qualité rigoureusement établies par
              notre politique d&apos;entreprise — parce qu&apos;en travaillant avec nous, c&apos;est aussi
              votre réputation qui est en jeu.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Star, label: 'Qualité des livrables', desc: 'Chaque projet finalisé passe par une phase de recette interne avant livraison.' },
                { icon: Users, label: 'Suivi partenaire dédié', desc: 'Un interlocuteur unique, joignable, qui connaît vos projets et vos exigences.' },
                { icon: ShieldCheck, label: 'Confidentialité absolue', desc: 'Vos clients restent vos clients. Aucun démarchage direct, aucune prise de contact sans accord.' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-5 shadow-sm border border-amber-100/80 text-left">
                  <item.icon className="mb-3 h-5 w-5 text-amber-500" strokeWidth={1.5} />
                  <p className="mb-1 text-sm font-bold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT "UN CAFÉ" ────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#0b0f1e] border-t border-white/[0.06] py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">

            {/* Accroche */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-300">
                <Coffee className="h-3.5 w-3.5" />
                Démarrer la conversation
              </span>
              <h2 className="mb-5 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Un café et on en discute ?&nbsp;☕
              </h2>
              <p className="mb-6 text-white/60 leading-relaxed">
                Pas de PowerPoint, pas de formulaire de 40 champs. Dites-nous qui vous êtes et ce que
                vous avez en tête — on vous répond sous 24 h pour caler un échange rapide.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { Icon: Handshake, text: 'Discussion sans engagement, 100% confidentielle' },
                  { Icon: Zap, text: 'Réponse garantie sous 24 heures' },
                  { Icon: Users, text: 'Déjà 13 ans de projets locaux en Corse' },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-white/60">
                    <Icon className="h-4 w-4 shrink-0 text-violet-400" strokeWidth={1.5} />
                    {text}
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
                <p className="text-base font-semibold text-white italic leading-relaxed">
                  &ldquo;Il y a à manger pour tout le monde, unissons nos forces !&rdquo;
                </p>
                <footer className="mt-2 text-xs text-violet-300">— L&apos;équipe E-Dev Multimedia</footer>
              </blockquote>
            </div>

            {/* Formulaire */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#131827] p-6 md:p-8">
              <h3 className="mb-6 text-lg font-bold text-white">
                Parlez-nous de vous
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
