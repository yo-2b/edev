'use server'

import { sendContactEmail } from '@/lib/mailer'

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string }

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const nom        = String(formData.get('nom')        ?? '').trim()
  const email      = String(formData.get('email')      ?? '').trim()
  const tel        = String(formData.get('tel')        ?? '').trim()
  const message    = String(formData.get('message')    ?? '').trim()
  const entreprise = String(formData.get('entreprise') ?? '').trim()
  const secteur    = String(formData.get('secteur')    ?? '').trim()
  const budget     = String(formData.get('budget')     ?? '').trim()
  const delai      = String(formData.get('delai')      ?? '').trim()
  const services   = formData.getAll('services').map(String)

  if (!nom || nom.length < 2)
    return { status: 'error', message: 'Veuillez indiquer votre nom complet.' }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { status: 'error', message: 'Adresse e-mail invalide.' }

  if (!message || message.length < 10)
    return { status: 'error', message: 'Veuillez décrire votre projet (10 caractères minimum).' }

  try {
    await sendContactEmail({
      name: nom, email, phone: tel || undefined,
      subject: `Message de ${nom}`,
      message,
      entreprise: entreprise || undefined,
      secteur:    secteur    || undefined,
      services:   services.length ? services : undefined,
      budget:     budget     || undefined,
      delai:      delai      || undefined,
    })

    console.log('[CONTACT] Email envoyé :', { nom, email, at: new Date().toISOString() })
    return { status: 'success' }

  } catch (err) {
    console.error('[CONTACT] Erreur envoi :', err)
    return { status: 'error', message: 'Une erreur est survenue lors de l\'envoi. Réessayez ou appelez le 06.15.77.85.27.' }
  }
}
