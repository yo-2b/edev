import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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

    // 3. Forward vers n8n (décommentez et renseignez votre URL de webhook)
    // await fetch(process.env.N8N_CONTACT_WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     name: data.name, email: data.email,
    //     subject: data.subject, message: data.message,
    //   }),
    // })

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
