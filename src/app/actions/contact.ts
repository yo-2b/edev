'use server'

import { Resend } from 'resend'

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

  // ── Envoi email via Resend ─────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY)

  const lignesOptionnelles = [
    tel        && `📞 Téléphone : ${tel}`,
    entreprise && `🏢 Entreprise : ${entreprise}`,
    secteur    && `🏷️ Secteur : ${secteur}`,
    services.length && `🛠️ Services : ${services.join(', ')}`,
    budget     && `💰 Budget : ${budget}`,
    delai      && `⏱️ Délai : ${delai}`,
  ].filter(Boolean).join('\n')

  const htmlBody = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #e8323c; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">📬 Nouveau message — E-Dev Multimedia</h1>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 130px;">👤 Nom</td><td style="padding: 8px 0; font-weight: bold;">${nom}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">📧 Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${tel        ? `<tr><td style="padding: 8px 0; color: #666;">📞 Téléphone</td><td style="padding: 8px 0;">${tel}</td></tr>` : ''}
          ${entreprise ? `<tr><td style="padding: 8px 0; color: #666;">🏢 Entreprise</td><td style="padding: 8px 0;">${entreprise}</td></tr>` : ''}
          ${secteur    ? `<tr><td style="padding: 8px 0; color: #666;">🏷️ Secteur</td><td style="padding: 8px 0;">${secteur}</td></tr>` : ''}
          ${services.length ? `<tr><td style="padding: 8px 0; color: #666;">🛠️ Services</td><td style="padding: 8px 0;">${services.join(', ')}</td></tr>` : ''}
          ${budget     ? `<tr><td style="padding: 8px 0; color: #666;">💰 Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ''}
          ${delai      ? `<tr><td style="padding: 8px 0; color: #666;">⏱️ Délai</td><td style="padding: 8px 0;">${delai}</td></tr>` : ''}
        </table>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;">
        <h3 style="color: #333; margin: 0 0 8px;">Message</h3>
        <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;">
        <p style="color: #999; font-size: 12px; margin: 0;">Répondre directement à : <a href="mailto:${email}">${email}</a></p>
      </div>
    </div>
  `

  const { error } = await resend.emails.send({
    from:     'E-Dev Multimedia <contact@edev-multimedia.com>',
    to:       ['direction.edev@gmail.com'],
    replyTo:  email,
    subject:  `[E-Dev] Nouveau message de ${nom}`,
    html:     htmlBody,
    text:     `Nouveau message de ${nom} (${email})\n\n${lignesOptionnelles ? lignesOptionnelles + '\n\n' : ''}Message :\n${message}`,
  })

  if (error) {
    console.error('[CONTACT] Erreur Resend:', error)
    return { status: 'error', message: 'Une erreur est survenue lors de l\'envoi. Réessayez ou contactez-nous directement.' }
  }

  console.log('[CONTACT] Email envoyé :', { nom, email, at: new Date().toISOString() })
  return { status: 'success' }
}
