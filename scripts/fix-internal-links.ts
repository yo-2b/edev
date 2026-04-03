/**
 * Script: fix-internal-links.ts
 *
 * Parcourt tous les articles de la base de données, vérifie chaque lien interne
 * (pointant vers edev-multimedia.com). Si le slug cible n'existe pas dans la DB,
 * le lien <a> est supprimé mais son texte est conservé.
 *
 * Usage: cross-env IS_SCRIPT=true npx tsx --env-file .env.local scripts/fix-internal-links.ts
 */

import { db } from '../src/lib/db'
import { posts } from '../src/lib/db/schema'
import { eq } from 'drizzle-orm'

const SITE_DOMAINS = [
  'www.edev-multimedia.com',
  'edev-multimedia.com',
]

async function main() {
  console.log('🔍 Récupération de tous les articles...')
  const allPosts = await db.select({ id: posts.id, slug: posts.slug, title: posts.title, content: posts.content }).from(posts)
  console.log(`   → ${allPosts.length} articles trouvés`)

  // Construire le set de tous les slugs existants
  const validSlugs = new Set(allPosts.map(p => p.slug))
  console.log(`   → ${validSlugs.size} slugs valides`)

  // Aussi ajouter les pages statiques connues du site
  const staticPages = [
    'services', 'services/site-web-corse', 'services/referencement-visibilite',
    'services/application-mobile-corse', 'services/marketing-agence-web-corse',
    'services/infographie-graphisme-corse', 'services/impression-pose',
    'services/automatisation-intelligence-artificielle-ia-corse',
    'realisations-agence-communication-corse', 'partenariat-communication-corse',
    'actualites-corse', 'agence-communication-corse',
    'mentions-legales', 'politique-de-confidentialite',
  ]
  for (const p of staticPages) validSlugs.add(p)

  // Regex pour trouver les <a href="..."> avec lien interne
  // Matches: <a ...href="https://www.edev-multimedia.com/slug"...>texte</a>
  // Also matches: <a ...href="https://edev-multimedia.com/slug"...>texte</a>
  // Also matches: <a ...href="/slug"...>texte</a>
  const linkRegex = /<a\s[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi

  let totalLinksChecked = 0
  let totalLinksRemoved = 0
  let articlesModified = 0
  const removedLinks: { article: string; slug: string; linkText: string }[] = []

  for (const post of allPosts) {
    let content = post.content
    let modified = false
    const linksToRemove: { fullMatch: string; linkText: string; targetSlug: string }[] = []

    // Find all links in this article
    let match: RegExpExecArray | null
    // Reset regex
    linkRegex.lastIndex = 0

    while ((match = linkRegex.exec(content)) !== null) {
      const fullMatch = match[0]
      const href = match[1]
      const linkText = match[2]

      // Determine if this is an internal link
      let targetSlug: string | null = null

      try {
        // Check absolute URLs
        if (href.startsWith('http://') || href.startsWith('https://')) {
          const url = new URL(href)
          const isInternal = SITE_DOMAINS.some(d => url.hostname === d)
          if (isInternal) {
            // Extract slug from path (remove leading /)
            targetSlug = url.pathname.replace(/^\//, '').replace(/\/$/, '')
          }
        }
        // Check relative URLs
        else if (href.startsWith('/') && !href.startsWith('//')) {
          targetSlug = href.replace(/^\//, '').replace(/\/$/, '')
        }
      } catch {
        // Invalid URL, skip
        continue
      }

      if (targetSlug === null) continue // Not an internal link, skip
      if (targetSlug === '') continue // Homepage link, skip

      totalLinksChecked++

      // Check if slug exists
      if (!validSlugs.has(targetSlug)) {
        linksToRemove.push({ fullMatch, linkText, targetSlug })
      }
    }

    // Remove broken links (replace <a> with just the text content)
    if (linksToRemove.length > 0) {
      for (const link of linksToRemove) {
        content = content.replace(link.fullMatch, link.linkText)
        totalLinksRemoved++
        removedLinks.push({
          article: post.title,
          slug: link.targetSlug,
          linkText: link.linkText.replace(/<[^>]+>/g, '').substring(0, 60),
        })
      }
      modified = true
    }

    // Update the article if modified
    if (modified) {
      await db.update(posts).set({ content }).where(eq(posts.id, post.id))
      articlesModified++
      console.log(`✏️  ${post.slug}: ${linksToRemove.length} lien(s) supprimé(s)`)
    }
  }

  // Summary
  console.log('\n' + '═'.repeat(60))
  console.log('📊 RÉSUMÉ')
  console.log('═'.repeat(60))
  console.log(`   Articles analysés:  ${allPosts.length}`)
  console.log(`   Liens internes vérifiés: ${totalLinksChecked}`)
  console.log(`   Liens 404 supprimés:     ${totalLinksRemoved}`)
  console.log(`   Articles modifiés:       ${articlesModified}`)

  if (removedLinks.length > 0) {
    console.log('\n📋 Détail des liens supprimés:')
    for (const r of removedLinks) {
      console.log(`   ❌ [${r.article.substring(0, 50)}] → /${r.slug}`)
      console.log(`      texte: "${r.linkText}"`)
    }
  } else {
    console.log('\n✅ Aucun lien 404 trouvé !')
  }

  process.exit(0)
}

main().catch(err => {
  console.error('❌ Erreur:', err)
  process.exit(1)
})
