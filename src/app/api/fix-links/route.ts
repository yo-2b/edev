/**
 * Temporary: strip ALL <span style="color: #00c2ff;">...</span> everywhere
 * (both inside and outside <a> tags). Keeps inner text, removes the span wrapper.
 * DELETE after use.
 */

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { posts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

function isAuthorized(token: string | null): boolean {
  const secret = process.env.N8N_WEBHOOK_SECRET
  if (!secret || !token) return false
  return token === secret
}

function stripAllColorSpans(content: string): { fixed: string; count: number } {
  // Remove ALL <span style="...color: #00c2ff...">...</span> everywhere
  // (inside links, outside links — doesn't matter). Keep inner content.
  let count = 0
  const fixed = content.replace(
    /<span\s+style\s*=\s*"[^"]*color\s*:\s*#00c2ff[^"]*"\s*>([\s\S]*?)<\/span>/gi,
    (_match, inner) => {
      count++
      return inner
    }
  )
  return { fixed, count }
}

async function run(dryRun: boolean) {
  const allPosts = await db
    .select({ id: posts.id, slug: posts.slug, title: posts.title, content: posts.content })
    .from(posts)

  let totalFixed = 0
  let articlesModified = 0
  const details: { slug: string; title: string; count: number }[] = []

  for (const post of allPosts) {
    if (!post.content) continue
    const { fixed, count } = stripAllColorSpans(post.content)
    if (count > 0) {
      totalFixed += count
      details.push({ slug: post.slug, title: post.title, count })
      if (!dryRun) {
        await db.update(posts).set({ content: fixed, modifiedAt: new Date() }).where(eq(posts.id, post.id))
        articlesModified++
      }
    }
  }

  return { totalArticles: allPosts.length, totalSpansFixed: totalFixed, articlesModified: dryRun ? 0 : articlesModified, dryRun, details }
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!isAuthorized(token)) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  return NextResponse.json(await run(true))
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!isAuthorized(body.token)) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    return NextResponse.json(await run(false))
  } catch {
    return NextResponse.json({ error: 'Body JSON invalide' }, { status: 400 })
  }
}
