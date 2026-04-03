/**
 * Script: fix-internal-links.mjs
 *
 * 1. Fetch sitemap → build set of valid slugs
 * 2. For each article, fetch page HTML, extract wp-content links
 * 3. Check each internal link against valid slugs
 * 4. If broken, fetch raw content via a lightweight parse and use API to update
 *
 * Usage: node scripts/fix-internal-links.mjs
 */

const SITE = 'https://www.edev-multimedia.com'
const API_URL = `${SITE}/api/n8n/articles`
const API_TOKEN = 'change_me_in_production_super_secret_token_2026'

const SITE_DOMAINS = ['www.edev-multimedia.com', 'edev-multimedia.com']

// ─── Step 1: Get all valid slugs from sitemap ───────────────────────────────
async function getValidSlugs() {
  console.log('📡 Fetching sitemap...')
  const res = await fetch(`${SITE}/sitemap.xml`)
  const xml = await res.text()

  const slugs = new Set()
  // Extract URLs from sitemap XML
  const urlRegex = /<loc>([^<]+)<\/loc>/g
  let match
  while ((match = urlRegex.exec(xml)) !== null) {
    const url = match[1]
    try {
      const u = new URL(url)
      if (SITE_DOMAINS.some(d => u.hostname === d)) {
        const slug = u.pathname.replace(/^\//, '').replace(/\/$/, '')
        if (slug) slugs.add(slug)
      }
    } catch {}
  }

  console.log(`   → ${slugs.size} slugs valides trouvés dans le sitemap`)
  return slugs
}

// ─── Step 2: Get all article slugs ──────────────────────────────────────────
async function getArticleSlugs(validSlugs) {
  // Filter to likely article slugs (not service pages, not static pages)
  const staticPrefixes = [
    'services', 'realisations', 'partenariat', 'actualites',
    'agence-communication', 'mentions-legales', 'politique-de-confidentialite',
    'plan-du-site', 'blog',
  ]

  const articleSlugs = []
  for (const slug of validSlugs) {
    const isStatic = staticPrefixes.some(p => slug === p || slug.startsWith(p + '/'))
    if (!isStatic && slug.length > 0) {
      articleSlugs.push(slug)
    }
  }

  console.log(`   → ${articleSlugs.length} articles à analyser`)
  return articleSlugs
}

// ─── Step 3: Fetch article page and extract content + links ─────────────────
async function fetchArticleContent(slug) {
  const res = await fetch(`${SITE}/${slug}/`, {
    headers: { 'User-Agent': 'edev-link-checker/1.0' },
  })

  if (!res.ok) return null

  const html = await res.text()

  // Extract wp-content div content
  const wpMatch = html.match(/<div\s+class="wp-content"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/i)
  if (!wpMatch) {
    // Try alternative pattern
    const wpMatch2 = html.match(/<div\s+class="wp-content"[^>]*>([\s\S]*?)<\/div>\s*<(?:aside|div|section)/i)
    if (!wpMatch2) return null
    return wpMatch2[1]
  }
  return wpMatch[1]
}

// ─── Step 4: Find internal links in HTML content ────────────────────────────
function findInternalLinks(html) {
  const links = []
  const linkRegex = /<a\s[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi
  let match

  while ((match = linkRegex.exec(html)) !== null) {
    const fullMatch = match[0]
    const href = match[1]
    const linkText = match[2]
    let targetSlug = null

    try {
      if (href.startsWith('http://') || href.startsWith('https://')) {
        const url = new URL(href)
        if (SITE_DOMAINS.some(d => url.hostname === d)) {
          targetSlug = url.pathname.replace(/^\//, '').replace(/\/$/, '')
        }
      } else if (href.startsWith('/') && !href.startsWith('//')) {
        targetSlug = href.replace(/^\//, '').replace(/\/$/, '')
      }
    } catch {}

    if (targetSlug && targetSlug.length > 0) {
      // Skip anchors (#...) and query strings
      targetSlug = targetSlug.split('#')[0].split('?')[0]
      if (targetSlug) {
        links.push({ fullMatch, href, targetSlug, linkText })
      }
    }
  }

  return links
}

// ─── Step 5: Fix article by removing broken links via API ───────────────────
async function fixArticle(slug, originalContent, brokenLinks) {
  let fixedContent = originalContent
  for (const link of brokenLinks) {
    // Replace <a href="...">text</a> with just the text
    fixedContent = fixedContent.replace(link.fullMatch, link.linkText)
  }

  // We need the full article data for the POST upsert.
  // Fetch the page to get the title
  const res = await fetch(`${SITE}/${slug}/`)
  const html = await res.text()
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : slug

  // Use POST endpoint to upsert (update content)
  const updateRes = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      slug,
      title,
      content: fixedContent,
      status: 'publish',
      categorySlugs: [],
      tagNames: [],
    }),
  })

  if (!updateRes.ok) {
    const body = await updateRes.text()
    console.error(`   ⚠️  Erreur API pour ${slug}: ${updateRes.status} ${body}`)
    return false
  }

  return true
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const validSlugs = await getValidSlugs()
  const articleSlugs = await getArticleSlugs(validSlugs)

  let totalLinksChecked = 0
  let totalBrokenLinks = 0
  let articlesFixed = 0
  const allBrokenLinks = []

  // Process articles in batches of 5 for speed
  const BATCH_SIZE = 5
  for (let i = 0; i < articleSlugs.length; i += BATCH_SIZE) {
    const batch = articleSlugs.slice(i, i + BATCH_SIZE)
    const progress = `[${i + 1}-${Math.min(i + BATCH_SIZE, articleSlugs.length)}/${articleSlugs.length}]`

    const results = await Promise.all(batch.map(async (slug) => {
      const content = await fetchArticleContent(slug)
      if (!content) return { slug, broken: [] }

      const internalLinks = findInternalLinks(content)
      totalLinksChecked += internalLinks.length

      const broken = internalLinks.filter(link => !validSlugs.has(link.targetSlug))
      return { slug, broken, content }
    }))

    for (const result of results) {
      if (result.broken.length > 0) {
        totalBrokenLinks += result.broken.length
        for (const link of result.broken) {
          const plainText = link.linkText.replace(/<[^>]+>/g, '').substring(0, 50)
          allBrokenLinks.push({ article: result.slug, target: link.targetSlug, text: plainText })
          console.log(`   ❌ ${result.slug} → /${link.targetSlug} ("${plainText}")`)
        }

        // Fix the article
        const success = await fixArticle(result.slug, result.content, result.broken)
        if (success) {
          articlesFixed++
          console.log(`   ✅ ${result.slug} corrigé (${result.broken.length} lien(s) supprimé(s))`)
        }
      }
    }

    if (i % 20 === 0 && i > 0) {
      console.log(`${progress} ${totalLinksChecked} liens vérifiés, ${totalBrokenLinks} cassés...`)
    }
  }

  // Summary
  console.log('\n' + '═'.repeat(60))
  console.log('📊 RÉSUMÉ')
  console.log('═'.repeat(60))
  console.log(`   Articles analysés:       ${articleSlugs.length}`)
  console.log(`   Liens internes vérifiés: ${totalLinksChecked}`)
  console.log(`   Liens 404 supprimés:     ${totalBrokenLinks}`)
  console.log(`   Articles corrigés:       ${articlesFixed}`)

  if (allBrokenLinks.length > 0) {
    console.log('\n📋 Tous les liens supprimés:')
    for (const r of allBrokenLinks) {
      console.log(`   /${r.article} → /${r.target} ("${r.text}")`)
    }
  } else {
    console.log('\n✅ Aucun lien 404 trouvé !')
  }
}

main().catch(err => {
  console.error('❌ Erreur fatale:', err)
  process.exit(1)
})
