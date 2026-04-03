/**
 * Temporary API route: fix orphaned colored spans
 *
 * After removing broken <a> tags, some articles still have
 * <span style="color: ...">text</span> that looks like a link
 * but isn't one. This route finds those orphaned colored spans
 * and strips the color styling.
 *
 * GET  /api/fix-links?token=...          → dry-run
 * POST /api/fix-links  { "token": "..." } → apply
 *
 * DELETE this file after use.
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

/**
 * Find colored spans that are NOT inside an <a> tag and strip the color.
 * Targets patterns like: <span style="color: #00c2ff;">text</span>
 * that are orphaned (not wrapped in an anchor).
 */
function fixOrphanedColorSpans(content: string): { fixed: string; count: number } {
  let count = 0

  // Strategy: find all <span ...style="...color:...">...</span> that are NOT inside an <a>
  // We do this by first identifying all <a>...</a> ranges, then processing spans outside those ranges.

  // Step 1: Mark all anchor tag positions
  const anchorRanges: { start: number; end: number }[] = []
  const anchorRegex = /<a\s[^>]*>[\s\S]*?<\/a>/gi
  let aMatch: RegExpExecArray | null
  while ((aMatch = anchorRegex.exec(content)) !== null) {
    anchorRanges.push({ start: aMatch.index, end: aMatch.index + aMatch[0].length })
  }

  function isInsideAnchor(pos: number): boolean {
    return anchorRanges.some(r => pos >= r.start && pos < r.end)
  }

  // Step 2: Find colored spans and replace orphaned ones
  // Match span with inline color style
  const spanColorRegex = /<span\s+style="[^"]*color\s*:\s*[^"]*"[^>]*>([\s\S]*?)<\/span>/gi
  let result = content
  const replacements: { original: string; replacement: string; index: number }[] = []

  let sMatch: RegExpExecArray | null
  while ((sMatch = spanColorRegex.exec(content)) !== null) {
    if (!isInsideAnchor(sMatch.index)) {
      // This colored span is NOT inside an anchor — it's orphaned
      const original = sMatch[0]
      const innerContent = sMatch[1]

      // Check if the style ONLY has color (then remove the whole span)
      // or has other styles too (then just remove the color part)
      const styleMatch = original.match(/style="([^"]*)"/)
      if (styleMatch) {
        const style = styleMatch[1]
        // Remove color property from style
        const cleanedStyle = style
          .replace(/color\s*:\s*[^;]+;?/gi, '')
          .trim()
          .replace(/;\s*$/, '')
          .replace(/^\s*;\s*/, '')

        if (!cleanedStyle) {
          // Style only had color — check if span has other attributes
          const hasOtherAttrs = original.match(/<span\s+((?!style)[a-z])/i)
          if (!hasOtherAttrs) {
            // Plain span with only color style → unwrap completely
            replacements.push({ original, replacement: innerContent, index: sMatch.index })
          } else {
            // Has other attributes, just remove the style
            replacements.push({
              original,
              replacement: original.replace(/\s*style="[^"]*"/, ''),
              index: sMatch.index,
            })
          }
        } else {
          // Other styles exist, just remove color
          replacements.push({
            original,
            replacement: original.replace(styleMatch[0], `style="${cleanedStyle}"`),
            index: sMatch.index,
          })
        }
      }
    }
  }

  // Apply replacements in reverse order to preserve indices
  for (const rep of replacements.reverse()) {
    result = result.substring(0, rep.index) + rep.replacement + result.substring(rep.index + rep.original.length)
    count++
  }

  return { fixed: result, count }
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

    const { fixed, count } = fixOrphanedColorSpans(post.content)

    if (count > 0) {
      totalFixed += count
      details.push({ slug: post.slug, title: post.title, count })

      if (!dryRun) {
        await db.update(posts).set({ content: fixed, modifiedAt: new Date() }).where(eq(posts.id, post.id))
        articlesModified++
      }
    }
  }

  return {
    totalArticles: allPosts.length,
    totalOrphanedSpansFixed: totalFixed,
    articlesModified: dryRun ? 0 : articlesModified,
    dryRun,
    details,
  }
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!isAuthorized(token)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  const result = await run(true)
  return NextResponse.json(result)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!isAuthorized(body.token)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }
    const result = await run(false)
    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Body JSON invalide' }, { status: 400 })
  }
}
