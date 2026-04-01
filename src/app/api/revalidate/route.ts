import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.N8N_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  revalidatePath('/')
  revalidatePath('/actualites-corse')
  return NextResponse.json({ revalidated: true, at: new Date().toISOString() })
}
