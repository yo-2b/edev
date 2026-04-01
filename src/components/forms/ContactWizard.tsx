'use client'

import { useState, useTransition } from 'react'
import { sendContact, type ContactState } from '@/app/actions/contact'
import {
  Globe, Smartphone, TrendingUp, Megaphone, Palette, Printer, Bot,
  ArrowRight, ArrowLeft, CheckCircle2, Loader2, Send, ChevronRight, Check,
} from 'lucide-react'

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface WizardData {
  services: string[]
  budget: string
  delai: string
  message: string
  nom: string
  entreprise: string
  secteur: string
  email: string
  tel: string
}

const INITIAL_DATA: WizardData = {
  services: [], budget: '', delai: '', message: '',
  nom: '', entreprise: '', secteur: '', email: '', tel: '',
}

/* ─── Constantes ──────────────────────────────────────────────────────────── */
const SERVICES_OPTIONS = [
  { id: 'site-web',   Icon: Globe,      label: 'Site internet',        sub: 'Vitrine, e-commerce, refonte' },
  { id: 'seo',        Icon: TrendingUp, label: 'Référencement SEO',    sub: 'Visibilité Google, SEO local' },
  { id: 'app-mobile', Icon: Smartphone, label: 'Application mobile',   sub: 'iOS, Android, cross-platform' },
  { id: 'marketing',  Icon: Megaphone,  label: 'Marketing digital',    sub: 'Social media, campagnes' },
  { id: 'graphisme',  Icon: Palette,    label: 'Graphisme & identité', sub: 'Logo, charte, supports' },
  { id: 'impression', Icon: Printer,    label: 'Impression & pose',    sub: 'Enseignes, adhésifs, signalétique' },
  { id: 'ia',         Icon: Bot,        label: 'Automatisation IA',    sub: 'Process, réseaux, emailing' },
]

const BUDGET_OPTIONS = [
  { id: '< 1 000 €',       label: '< 1 000 €',       sub: 'Petit projet' },
  { id: '1 000 – 3 000 €', label: '1 000 – 3 000 €', sub: 'Standard' },
  { id: '3 000 – 8 000 €', label: '3 000 – 8 000 €', sub: 'Ambitieux' },
  { id: '8 000 € +',       label: '8 000 € +',        sub: 'Sur-mesure' },
  { id: 'À définir',       label: 'À définir',        sub: 'On en discute' },
]

const DELAI_OPTIONS = [
  { id: 'Urgent (< 1 mois)', label: 'Urgent',             sub: '< 1 mois' },
  { id: '1 à 3 mois',        label: '1 à 3 mois',         sub: 'Délai standard' },
  { id: '3 à 6 mois',        label: '3 à 6 mois',         sub: 'Long terme' },
  { id: 'Pas de contrainte', label: 'Sans contrainte',     sub: 'On s\'adapte' },
]

const STEPS = [
  { label: 'Besoin',  sub: 'Service(s)' },
  { label: 'Projet',  sub: 'Budget & délai' },
  { label: 'Vous',    sub: 'Coordonnées' },
]

/* ─── Classes réutilisables ───────────────────────────────────────────────── */
const INPUT_BASE = 'w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all'
const INPUT_OK   = 'border-gray-300 focus:border-edev focus:ring-edev/20'
const INPUT_ERR  = 'border-red-400 focus:ring-red-200'

/* ─── Composant ───────────────────────────────────────────────────────────── */
export function ContactWizard() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<WizardData>(INITIAL_DATA)
  const [state, setState] = useState<ContactState>({ status: 'idle' })
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Partial<Record<keyof WizardData, string>>>({})

  const toggleService = (id: string) =>
    setData(prev => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id],
    }))

  const set = (key: keyof WizardData, value: string) => {
    setData(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  const validateStep = (): boolean => {
    const e: Partial<Record<keyof WizardData, string>> = {}
    if (step === 0 && data.services.length === 0)
      e.services = 'Sélectionnez au moins un service.'
    if (step === 1) {
      if (!data.budget) e.budget = 'Indiquez votre budget.'
      if (!data.message || data.message.length < 10)
        e.message = 'Décrivez votre projet (10 caractères min.).'
    }
    if (step === 2) {
      if (!data.nom || data.nom.length < 2) e.nom = 'Indiquez votre nom.'
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = 'E-mail invalide.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next   = () => { if (validateStep()) setStep(s => s + 1) }
  const back   = () => setStep(s => s - 1)

  const submit = () => {
    if (!validateStep()) return
    const fd = new FormData()
    Object.entries(data).forEach(([k, v]) => {
      if (Array.isArray(v)) v.forEach(val => fd.append(k, val))
      else fd.append(k, v)
    })
    fd.set('message', [
      `Services : ${data.services.join(', ')}`,
      `Budget : ${data.budget}`,
      `Délai : ${data.delai || 'Non précisé'}`,
      `Secteur : ${data.secteur || 'Non précisé'}`,
      '', data.message,
    ].join('\n'))
    startTransition(async () => {
      const result = await sendContact({ status: 'idle' }, fd)
      setState(result)
    })
  }

  /* ── Succès ─────────────────────────────────────────────────────────── */
  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 border border-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-500" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">Message envoyé !</h3>
          <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
            Merci {data.nom.split(' ')[0]}, nous avons bien reçu votre demande.
            Nous vous répondons sous 24 h avec un premier retour concret.
          </p>
        </div>
        <div className="rounded-lg border border-gray-100 bg-gray-50 px-6 py-4 text-sm text-left w-full max-w-sm divide-y divide-gray-100">
          <div className="pb-2"><span className="text-gray-400 text-xs">Services</span><p className="font-medium text-gray-800">{data.services.join(', ')}</p></div>
          <div className="py-2"><span className="text-gray-400 text-xs">Budget</span><p className="font-medium text-gray-800">{data.budget}</p></div>
          <div className="pt-2"><span className="text-gray-400 text-xs">Contact</span><p className="font-medium text-gray-800">{data.email}</p></div>
        </div>
      </div>
    )
  }

  const serverError = state.status === 'error' ? state.message : null

  return (
    <div>
      {/* ── Step indicator compact avec flèches ───────────────────────── */}
      <div className="mb-8 flex items-center">
        {STEPS.map(({ label, sub }, i) => (
          <div key={label} className="flex items-center">
            {/* Step */}
            <div className="flex items-center gap-2.5">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  i < step  ? 'bg-edev text-white'
                  : i === step ? 'bg-gray-900 text-white ring-4 ring-gray-900/10'
                  : 'bg-gray-100 text-gray-400'
                }`}
              >
                {i < step ? <Check className="h-3.5 w-3.5" strokeWidth={2.5} /> : i + 1}
              </div>
              <div className="hidden sm:block">
                <p className={`text-sm font-semibold leading-none ${i === step ? 'text-gray-900' : i < step ? 'text-gray-500' : 'text-gray-300'}`}>
                  {label}
                </p>
                <p className={`text-xs leading-none mt-0.5 ${i === step ? 'text-gray-400' : 'text-gray-300'}`}>
                  {sub}
                </p>
              </div>
            </div>
            {/* Connecteur fléché */}
            {i < STEPS.length - 1 && (
              <div className="flex items-center mx-3 sm:mx-4 gap-0">
                <span
                  className={`block h-px w-5 sm:w-8 transition-colors duration-300 ${i < step ? 'bg-edev/40' : 'bg-gray-200'}`}
                />
                <ChevronRight
                  className={`h-3.5 w-3.5 -ml-0.5 transition-colors duration-300 ${i < step ? 'text-edev/60' : 'text-gray-300'}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Étape 0 : Besoin ──────────────────────────────────────────── */}
      {step === 0 && (
        <div>
          <h3 className="mb-1 text-lg font-bold text-gray-900">De quoi avez-vous besoin ?</h3>
          <p className="mb-5 text-sm text-gray-400">Sélectionnez un ou plusieurs services — vous pouvez en choisir plusieurs.</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SERVICES_OPTIONS.map(({ id, Icon, label, sub }) => {
              const active = data.services.includes(id)
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleService(id)}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-150 ${
                    active
                      ? 'border-edev bg-edev/5 shadow-sm'
                      : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${active ? 'bg-edev/10' : 'bg-gray-100'}`}>
                    <Icon className={`h-4 w-4 ${active ? 'text-edev' : 'text-gray-500'}`} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${active ? 'text-edev' : 'text-gray-800'}`}>{label}</p>
                    <p className="text-xs text-gray-400 truncate">{sub}</p>
                  </div>
                  {active && <Check className="h-4 w-4 shrink-0 text-edev" strokeWidth={2.5} />}
                </button>
              )
            })}
          </div>
          {errors.services && <p className="mt-3 text-xs text-red-500">{errors.services}</p>}
        </div>
      )}

      {/* ── Étape 1 : Projet ──────────────────────────────────────────── */}
      {step === 1 && (
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="mb-1 text-lg font-bold text-gray-900">Parlez-nous de votre projet</h3>
            <p className="text-sm text-gray-400">Quelques infos pour que notre réponse soit vraiment utile.</p>
          </div>

          {/* Budget */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
              Budget envisagé <span className="text-edev">*</span>
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {BUDGET_OPTIONS.map(opt => (
                <button
                  key={opt.id} type="button"
                  onClick={() => set('budget', opt.id)}
                  className={`rounded-xl border px-3 py-2.5 text-left transition-all duration-150 ${
                    data.budget === opt.id ? 'border-edev bg-edev/5' : 'border-gray-300 bg-white hover:border-gray-400'
                  }`}
                >
                  <p className={`text-sm font-bold ${data.budget === opt.id ? 'text-edev' : 'text-gray-800'}`}>{opt.label}</p>
                  <p className="text-xs text-gray-400">{opt.sub}</p>
                </button>
              ))}
            </div>
            {errors.budget && <p className="mt-2 text-xs text-red-500">{errors.budget}</p>}
          </div>

          {/* Délai */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">Délai souhaité</p>
            <div className="grid grid-cols-2 gap-2">
              {DELAI_OPTIONS.map(opt => (
                <button
                  key={opt.id} type="button"
                  onClick={() => set('delai', opt.id)}
                  className={`rounded-xl border px-3 py-2.5 text-left transition-all duration-150 ${
                    data.delai === opt.id ? 'border-edev bg-edev/5' : 'border-gray-300 bg-white hover:border-gray-400'
                  }`}
                >
                  <p className={`text-sm font-bold ${data.delai === opt.id ? 'text-edev' : 'text-gray-800'}`}>{opt.label}</p>
                  <p className="text-xs text-gray-400">{opt.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="wiz-message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
              Décrivez votre projet <span className="text-edev">*</span>
            </label>
            <textarea
              id="wiz-message" rows={4}
              value={data.message}
              onChange={e => set('message', e.target.value)}
              placeholder="Ex : Je cherche à refaire mon site vitrine pour un cabinet d'architecte basé à Bastia, avec un portfolio et un formulaire de contact…"
              className={`${INPUT_BASE} resize-none ${errors.message ? INPUT_ERR : INPUT_OK}`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>
        </div>
      )}

      {/* ── Étape 2 : Vous ────────────────────────────────────────────── */}
      {step === 2 && (
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="mb-1 text-lg font-bold text-gray-900">Qui êtes-vous ?</h3>
            <p className="text-sm text-gray-400">Dernière étape — et c'est la plus rapide.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="wiz-nom" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Nom & Prénom <span className="text-edev">*</span>
              </label>
              <input id="wiz-nom" type="text" autoComplete="name"
                value={data.nom} onChange={e => set('nom', e.target.value)}
                placeholder="Marie Dupont"
                className={`${INPUT_BASE} ${errors.nom ? INPUT_ERR : INPUT_OK}`}
              />
              {errors.nom && <p className="text-xs text-red-500">{errors.nom}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="wiz-entreprise" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Entreprise <span className="font-normal normal-case text-gray-400">(optionnel)</span>
              </label>
              <input id="wiz-entreprise" type="text" autoComplete="organization"
                value={data.entreprise} onChange={e => set('entreprise', e.target.value)}
                placeholder="Mon Entreprise SAS"
                className={`${INPUT_BASE} ${INPUT_OK}`}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="wiz-email" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                E-mail <span className="text-edev">*</span>
              </label>
              <input id="wiz-email" type="email" autoComplete="email"
                value={data.email} onChange={e => set('email', e.target.value)}
                placeholder="marie@entreprise.com"
                className={`${INPUT_BASE} ${errors.email ? INPUT_ERR : INPUT_OK}`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="wiz-tel" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Téléphone <span className="font-normal normal-case text-gray-400">(optionnel)</span>
              </label>
              <input id="wiz-tel" type="tel" autoComplete="tel"
                value={data.tel} onChange={e => set('tel', e.target.value)}
                placeholder="06 XX XX XX XX"
                className={`${INPUT_BASE} ${INPUT_OK}`}
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="wiz-secteur" className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Secteur d&apos;activité <span className="font-normal normal-case text-gray-400">(optionnel)</span>
              </label>
              <input id="wiz-secteur" type="text"
                value={data.secteur} onChange={e => set('secteur', e.target.value)}
                placeholder="Ex : Restauration, BTP, Tourisme, Santé…"
                className={`${INPUT_BASE} ${INPUT_OK}`}
              />
            </div>
          </div>

          {serverError && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {serverError}
            </p>
          )}
        </div>
      )}

      {/* ── Navigation ────────────────────────────────────────────────── */}
      <div className={`mt-8 flex items-center ${step > 0 ? 'justify-between' : 'justify-end'}`}>
        {step > 0 && (
          <button type="button" onClick={back}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </button>
        )}

        {step < STEPS.length - 1 ? (
          <button type="button" onClick={next}
            className="flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-gray-800 transition-colors"
          >
            Continuer
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={isPending}
            className="flex items-center gap-2 rounded-lg bg-edev px-6 py-2.5 text-sm font-bold text-white hover:bg-edev/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending
              ? <><Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…</>
              : <><Send className="h-4 w-4" /> Envoyer ma demande</>
            }
          </button>
        )}
      </div>
    </div>
  )
}
