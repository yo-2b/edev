'use server'

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string }

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // ── Champs de base (formulaire inline des pages services) ──────────────
  const nom     = String(formData.get('nom')     ?? '').trim()
  const email   = String(formData.get('email')   ?? '').trim()
  const tel     = String(formData.get('tel')     ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // ── Champs enrichis (formulaire multi-étapes page Contact) ─────────────
  const entreprise = String(formData.get('entreprise') ?? '').trim()
  const secteur    = String(formData.get('secteur')    ?? '').trim()
  const budget     = String(formData.get('budget')     ?? '').trim()
  const delai      = String(formData.get('delai')      ?? '').trim()
  const services   = formData.getAll('services').map(String)

  if (!nom || nom.length < 2) {
    return { status: 'error', message: 'Veuillez indiquer votre nom complet.' }
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Adresse e-mail invalide.' }
  }

  if (!message || message.length < 10) {
    return { status: 'error', message: 'Veuillez décrire votre projet (10 caractères minimum).' }
  }

  // Log côté serveur — à connecter à Resend / nodemailer / SMTP lorsque prêt
  console.log('[CONTACT]', {
    nom, email, tel, entreprise, secteur, budget, delai, services, message,
    at: new Date().toISOString(),
  })

  // TODO: envoyer l'e-mail via Resend / nodemailer / votre SMTP ici

  return { status: 'success' }
}
