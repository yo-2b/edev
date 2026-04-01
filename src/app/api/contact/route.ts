import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

/* ── Rate limiter in-memory (5 req / min par IP) ──────────────────────────── */
const rl = new Map<string, { count: number; resetAt: number }>()
const RL_WINDOW = 60_000   // 1 minute
const RL_MAX    = 5        // 5 requêtes max

function checkRateLimit(ip: string): boolean {
  const now = Date.now()

  // Nettoyage périodique pour éviter les fuites mémoire
  if (rl.size > 500) {
    for (const [k, v] of rl) { if (now > v.resetAt) rl.delete(k) }
  }

  const entry = rl.get(ip)
  if (!entry || now > entry.resetAt) {
    rl.set(ip, { count: 1, resetAt: now + RL_WINDOW })
    return true
  }
  if (entry.count >= RL_MAX) return false
  entry.count++
  return true
}

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'
  )
}

/* ── Schéma de validation ─────────────────────────────────────────────────── */
const contactSchema = z.object({
  name:    z.string().min(2, 'Nom trop court').max(100).trim(),
  email:   z.string().email('Email invalide').max(254).trim().toLowerCase(),
  phone:   z.string().max(20).optional(),
  subject: z.string().min(2).max(200).trim(),
  message: z.string().min(10, 'Message trop court').max(5000).trim(),
  // Honeypot anti-bot : doit rester vide
  website: z.string().max(0, 'Spam détecté'),
})

/* ── POST /api/contact ────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  // 1. Rate limiting
  const ip = getIp(req)
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Trop de tentatives. Réessayez dans une minute.' },
      {
        status: 429,
        headers: {
          'Retry-After': '60',
          'X-RateLimit-Limit': String(RL_MAX),
          'X-RateLimit-Remaining': '0',
        },
      }
    )
  }

  // 2. Validation Content-Type
  const ct = req.headers.get('content-type') ?? ''
  if (!ct.includes('application/json')) {
    return NextResponse.json({ success: false, message: 'Content-Type invalide.' }, { status: 415 })
  }

  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    // 3. Envoi email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #e8323c; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">📬 Nouveau message — E-Dev Multimedia</h1>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 130px;">👤 Nom</td><td style="padding: 8px 0; font-weight: bold;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">📧 Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding: 8px 0; color: #666;">📞 Téléphone</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #666;">📌 Sujet</td><td style="padding: 8px 0;">${data.subject}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;">
          <h3 style="color: #333; margin: 0 0 8px;">Message</h3>
          <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;">
          <p style="color: #999; font-size: 12px; margin: 0;">Répondre à : <a href="mailto:${data.email}">${data.email}</a></p>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from:    'E-Dev Multimedia <contact@edev-multimedia.com>',
      to:      ['direction.edev@gmail.com'],
      replyTo: data.email,
      subject: `[E-Dev] Nouveau message de ${data.name}`,
      html:    htmlBody,
      text:    `De : ${data.name} (${data.email})\nSujet : ${data.subject}\n\n${data.message}`,
    })

    if (error) {
      console.error('[CONTACT] Erreur Resend:', error)
      return NextResponse.json(
        { success: false, message: 'Erreur lors de l\'envoi. Réessayez.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès.' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 422 }
      )
    }
    return NextResponse.json(
      { success: false, message: 'Une erreur est survenue. Réessayez.' },
      { status: 500 }
    )
  }
}
