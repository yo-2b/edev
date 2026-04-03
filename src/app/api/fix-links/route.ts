/**
 * Temporary API route: fix-links
 *
 * Scans all published articles in the database, finds internal links
 * pointing to slugs that don't exist, and removes the <a> tag while
 * preserving the link text.
 *
 * GET /api/fix-links?token=<N8N_WEBHOOK_SECRET>
 *   → dry-run (report only)
 *
 * POST /api/fix-links   { "token": "<N8N_WEBHOOK_SECRET>" }
 *   → apply fixes
 *
 * DELETE this file after use.
 */

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { posts } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

const SITE_DOMAINS = ['www.edev-multimedia.com', 'edev-multimedia.com']

function isAuthorized(token: string | null): boolean {
  const secret = process.env.N8N_WEBHOOK_SECRET
  if (!secret || !token) return false
  return token === secret
}

interface BrokenLink {
  articleSlug: string
  articleTitle: string
  targetSlug: string
  linkText: string
}

function findAndFixBrokenLinks(
  content: string,
  validSlugs: Set<string>,
): { fixedContent: string; brokenLinks: { targetSlug: string; linkText: string }[] } {
  const linkRegex = /<a\s[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi
  const brokenLinks: { fullMatch: string; targetSlug: string; linkText: string }[] = []

  let match: RegExpExecArray | null
  while ((match = linkRegex.exec(content)) !== null) {
    const fullMatch = match[0]
    const href = match[1]
    const linkText = match[2]

    let targetSlug: string | null = null

    try {
      if (href.startsWith('http://') || href.startsWith('https://')) {
        const url = new URL(href)
        if (SITE_DOMAINS.some(d => url.hostname === d)) {
          targetSlug = url.pathname.replace(/^\//, '').replace(/\/$/, '')
        }
      } else if (href.startsWith('/') && !href.startsWith('//')) {
        targetSlug = href.replace(/^\//, '').replace(/\/$/, '')
      }
    } catch {
      continue
    }

    if (!targetSlug || targetSlug === '') continue

    // Strip anchors and query strings
    targetSlug = targetSlug.split('#')[0].split('?')[0]
    if (!targetSlug) continue

    if (!validSlugs.has(targetSlug)) {
      brokenLinks.push({ fullMatch, targetSlug, linkText })
    }
  }

  let fixedContent = content
  for (const link of brokenLinks) {
    fixedContent = fixedContent.replace(link.fullMatch, link.linkText)
  }

  return {
    fixedContent,
    brokenLinks: brokenLinks.map(l => ({
      targetSlug: l.targetSlug,
      linkText: l.linkText.replace(/<[^>]+>/g, '').substring(0, 80),
    })),
  }
}

async function runFixLinks(dryRun: boolean) {
  // 1. Get all posts
  const allPosts = await db
    .select({ id: posts.id, slug: posts.slug, title: posts.title, content: posts.content })
    .from(posts)

  // 2. Build set of valid slugs (all post slugs + known static pages)
  const validSlugs = new Set(allPosts.map(p => p.slug))

  const staticPages = [
    'services', 'services/site-web-corse', 'services/referencement-visibilite',
    'services/application-mobile-corse', 'services/marketing-agence-web-corse',
    'services/infographie-graphisme-corse', 'services/impression-pose',
    'services/automatisation-intelligence-artificielle-ia-corse',
    'realisations-agence-communication-corse', 'partenariat-communication-corse',
    'actualites-corse', 'agence-communication-corse',
    'mentions-legales', 'politique-de-confidentialite', 'plan-du-site',
  ]
  for (const p of staticPages) validSlugs.add(p)

  // 3. Scan each post
  const allBroken: BrokenLink[] = []
  let articlesModified = 0
  let totalLinksChecked = 0

  for (const post of allPosts) {
    if (!post.content) continue

    // Count total internal links for stats
    const countRegex = /<a\s[^>]*href=["']([^"']*)["'][^>]*>/gi
    let m: RegExpExecArray | null
    while ((m = countRegex.exec(post.content)) !== null) {
      const href = m[1]
      try {
        if (href.startsWith('http://') || href.startsWith('https://')) {
          const url = new URL(href)
          if (SITE_DOMAINS.some(d => url.hostname === d)) totalLinksChecked++
        } else if (href.startsWith('/') && !href.startsWith('//')) {
          totalLinksChecked++
        }
      } catch {}
    }

    const { fixedContent, brokenLinks } = findAndFixBrokenLinks(post.content, validSlugs)

    if (brokenLinks.length > 0) {
      for (const bl of brokenLinks) {
        allBroken.push({
          articleSlug: post.slug,
          articleTitle: post.title,
          targetSlug: bl.targetSlug,
          linkText: bl.linkText,
        })
      }

      if (!dryRun) {
        await db.update(posts).set({ content: fixedContent, modifiedAt: new Date() }).where(eq(posts.id, post.id))
        articlesModified++
      }
    }
  }

  return {
    totalArticles: allPosts.length,
    totalInternalLinks: totalLinksChecked,
    totalBrokenLinks: allBroken.length,
    articlesModified: dryRun ? 0 : articlesModified,
    dryRun,
    brokenLinks: allBroken,
  }
}

// GET = dry run
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!isAuthorized(token)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const result = await runFixLinks(true)
  return NextResponse.json(result)
}

// POST = apply fixes
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!isAuthorized(body.token)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const result = await runFixLinks(false)
    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Body JSON invalide' }, { status: 400 })
  }
}
