/**
 * Mailer — Nodemailer via Postfix sur le VPS (172.16.16.1:25)
 *
 * Postfix est installé sur le VPS et configuré comme relais SMTP.
 * Le container Next.js s'y connecte via l'IP du bridge Coolify.
 *
 * Variables d'environnement requises dans Coolify :
 *   SMTP_HOST     = 172.16.16.1   (ou smtp.gmail.com si relay Gmail)
 *   SMTP_PORT     = 25            (ou 587 pour Gmail)
 *   SMTP_USER     = (optionnel — vide si postfix local)
 *   SMTP_PASS     = (optionnel — vide si postfix local)
 *   SMTP_FROM     = contact@edev-multimedia.com
 *   CONTACT_EMAIL = direction.edev@gmail.com
 */

import nodemailer from 'nodemailer'

export function createTransporter() {
  const host = process.env.SMTP_HOST || '172.16.16.1'
  const port = parseInt(process.env.SMTP_PORT || '25')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    // Auth seulement si identifiants fournis (Gmail relay)
    ...(user && pass ? {
      auth: { user, pass },
      tls: { rejectUnauthorized: false },
    } : {
      // Postfix local — pas d'authentification
      ignoreTLS: port === 25,
    }),
  })
}

export interface MailOptions {
  name:        string
  email:       string
  subject:     string
  message:     string
  phone?:      string
  entreprise?: string
  secteur?:    string
  services?:   string[]
  budget?:     string
  delai?:      string
}

export async function sendContactEmail(data: MailOptions): Promise<void> {
  const transporter = createTransporter()
  const from        = process.env.SMTP_FROM    || 'contact@edev-multimedia.com'
  const to          = process.env.CONTACT_EMAIL || 'direction.edev@gmail.com'

  const rows = [
    ['👤 Nom',        data.name],
    ['📧 Email',      data.email],
    data.phone      && ['📞 Téléphone', data.phone],
    data.entreprise && ['🏢 Entreprise', data.entreprise],
    data.secteur    && ['🏷️ Secteur',   data.secteur],
    data.services?.length && ['🛠️ Services', data.services.join(', ')],
    data.budget     && ['💰 Budget',    data.budget],
    data.delai      && ['⏱️ Délai',     data.delai],
  ].filter(Boolean) as [string, string][]

  const tableRows = rows.map(([label, val]) =>
    `<tr><td style="padding:8px 0;color:#666;width:130px;">${label}</td><td style="padding:8px 0;font-weight:bold;">${val}</td></tr>`
  ).join('')

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#e8323c;padding:20px;border-radius:8px 8px 0 0;">
        <h1 style="color:white;margin:0;font-size:20px;">📬 Nouveau message — E-Dev Multimedia</h1>
      </div>
      <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e0e0e0;">
        <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:16px 0;">
        <h3 style="color:#333;margin:0 0 8px;">Message</h3>
        <p style="color:#444;line-height:1.6;white-space:pre-wrap;">${data.message}</p>
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:16px 0;">
        <p style="color:#999;font-size:12px;margin:0;">Répondre à : <a href="mailto:${data.email}">${data.email}</a></p>
      </div>
    </div>`

  const text = rows.map(([l, v]) => `${l} : ${v}`).join('\n') + `\n\nMessage :\n${data.message}`

  await transporter.sendMail({
    from,
    to,
    replyTo:  data.email,
    subject:  `[E-Dev] Nouveau message de ${data.name}`,
    html,
    text,
  })
}
