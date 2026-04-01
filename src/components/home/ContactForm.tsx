'use client'

import { useActionState, useEffect } from 'react'
import { sendContact, type ContactState } from '@/app/actions/contact'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const INITIAL: ContactState = { status: 'idle' }

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, INITIAL)

  useEffect(() => {
    if (state.status === 'error') {
      toast.error(state.message)
    }
  }, [state])

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-edev" strokeWidth={1.5} />
        <h3 className="text-xl font-bold text-white">Message envoyé !</h3>
        <p className="text-white/60 text-sm max-w-xs">
          Merci, nous avons bien reçu votre demande. Nous vous répondons sous 24&nbsp;h.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-4">
      {/* Nom + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-nom" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
            Nom & Prénom <span className="text-edev">*</span>
          </label>
          <input
            id="cf-nom"
            name="nom"
            type="text"
            autoComplete="name"
            required
            placeholder="Marie Dupont"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-edev focus:bg-white/15 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
            E-mail <span className="text-edev">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="marie@entreprise.com"
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-edev focus:bg-white/15 transition-all"
          />
        </div>
      </div>

      {/* Téléphone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-tel" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
          Téléphone <span className="text-white/30">(optionnel)</span>
        </label>
        <input
          id="cf-tel"
          name="tel"
          type="tel"
          autoComplete="tel"
          placeholder="06 XX XX XX XX"
          className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-edev focus:bg-white/15 transition-all"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
          Votre projet <span className="text-edev">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Décrivez votre projet en quelques lignes : type de site, secteur d'activité, délais souhaités…"
          className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-edev focus:bg-white/15 transition-all resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="mt-1 flex items-center justify-center gap-2 px-8 py-4 bg-edev text-white font-bold rounded-full hover:bg-edev/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg text-sm uppercase tracking-wide"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer ma demande
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-white/30">
        Devis gratuit · Réponse sous 24 h · Sans engagement
      </p>
    </form>
  )
}
