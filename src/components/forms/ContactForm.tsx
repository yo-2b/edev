'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Send, Loader2, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

/* ── Services disponibles (chips) ─────────────────────────────────────── */
const SERVICES = [
  'Site internet',
  'Référencement SEO',
  'Application mobile',
  'Automatisation IA',
  'Infographie & graphisme',
  'Impression & pose',
  'Marketing & conseils',
  'Autre',
]

/* ── Schéma Zod complet ───────────────────────────────────────────────── */
const schema = z.object({
  services: z.array(z.string()).min(1, 'Sélectionnez au moins un service'),
  message: z.string().min(10, 'Décrivez votre projet (10 caractères minimum)'),
  company: z.string().min(2, 'Nom d\'entreprise requis'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  website: z.string().max(0), // honeypot
})

type FormValues = z.infer<typeof schema>

/* ── Composant ────────────────────────────────────────────────────────── */
export function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { services: [], website: '' },
  })

  const selectedServices = watch('services') ?? []

  function toggleService(s: string) {
    const current = selectedServices
    const next = current.includes(s) ? current.filter((x) => x !== s) : [...current, s]
    setValue('services', next, { shouldValidate: true })
  }

  async function goToStep2() {
    const ok = await trigger(['services', 'message'])
    if (ok) setStep(2)
  }

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    try {
      const payload = {
        name: data.company,
        email: data.email,
        phone: data.phone ?? '',
        subject: data.services.join(', '),
        message: data.message,
        website: data.website,
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setSubmitted(true)
        reset()
        setStep(1)
      } else {
        toast.error('Envoi impossible', { description: json.message ?? 'Une erreur est survenue.' })
      }
    } catch {
      toast.error('Erreur réseau', { description: 'Vérifiez votre connexion et réessayez.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ── Succès ─────────────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold">Message envoyé !</h3>
        <p className="text-muted-foreground max-w-sm">
          Merci ! Nous vous répondrons dans les 24h ouvrées. À très bientôt !
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2 rounded-xl"
          onClick={() => setSubmitted(false)}
        >
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulaire de contact">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      {/* ── Indicateur de progression ─────────────────────────────── */}
      <div className="flex items-center gap-3 mb-8">
        {[1, 2].map((n) => (
          <div key={n} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step === n
                  ? 'bg-edev text-edev-foreground shadow-m3-1'
                  : step > n
                  ? 'bg-green-500 text-white'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {step > n ? <CheckCircle2 className="h-4 w-4" /> : n}
            </div>
            <span className={`text-sm font-medium hidden sm:block ${step === n ? 'text-foreground' : 'text-muted-foreground'}`}>
              {n === 1 ? 'Votre projet' : 'Vos coordonnées'}
            </span>
            {n < 2 && <div className={`h-px w-8 ${step > 1 ? 'bg-green-500' : 'bg-border'}`} />}
          </div>
        ))}
      </div>

      {/* ── Étape 1 — Votre projet ─────────────────────────────────── */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <Label className="text-sm font-semibold mb-3 block">
              Vous avez besoin de{' '}
              <span className="text-destructive">*</span>
            </Label>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleService(s)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-m3 ${
                    selectedServices.includes(s)
                      ? 'bg-edev text-edev-foreground border-edev shadow-m3-1'
                      : 'border-border/60 text-muted-foreground hover:text-foreground hover:border-edev/40 bg-transparent'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {errors.services && (
              <p className="text-xs text-destructive mt-2" role="alert">
                {errors.services.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">
              Décrivez votre projet <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="En quelques mots simples : votre activité, ce que vous cherchez, votre budget estimé…"
              rows={5}
              className="resize-none rounded-xl"
              aria-invalid={!!errors.message}
              {...register('message')}
            />
            {errors.message && (
              <p className="text-xs text-destructive" role="alert">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="button"
            onClick={goToStep2}
            size="lg"
            className="w-full bg-edev text-edev-foreground hover:bg-edev/90 rounded-2xl font-semibold group"
          >
            Continuer
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}

      {/* ── Étape 2 — Vos coordonnées ──────────────────────────────── */}
      {step === 2 && (
        <div className="space-y-5">
          <div className="p-4 rounded-xl bg-edev/5 border border-edev/20">
            <p className="text-xs text-edev font-semibold uppercase tracking-wider mb-1">Services sélectionnés</p>
            <p className="text-sm text-foreground">{selectedServices.join(' · ')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="company">
                Nom d&apos;entreprise / Association <span className="text-destructive">*</span>
              </Label>
              <Input
                id="company"
                placeholder="E-Dev Multimedia"
                autoComplete="organization"
                className="rounded-xl"
                aria-invalid={!!errors.company}
                {...register('company')}
              />
              {errors.company && (
                <p className="text-xs text-destructive" role="alert">{errors.company.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone">
                Téléphone <span className="text-muted-foreground text-xs">(optionnel)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+33 6 00 00 00 00"
                autoComplete="tel"
                className="rounded-xl"
                {...register('phone')}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="contact@monentreprise.fr"
              autoComplete="email"
              className="rounded-xl"
              aria-invalid={!!errors.email}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-xs text-destructive" role="alert">{errors.email.message}</p>
            )}
          </div>

          <p className="text-xs text-muted-foreground">
            En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour traiter votre demande. Aucun démarchage commercial, aucune revente.
          </p>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="rounded-2xl"
              onClick={() => setStep(1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="flex-1 bg-edev text-edev-foreground hover:bg-edev/90 rounded-2xl font-semibold shadow-m3-2"
            >
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi…</>
              ) : (
                <><Send className="mr-2 h-4 w-4" /> Envoyer le message</>
              )}
            </Button>
          </div>
        </div>
      )}
    </form>
  )
}
