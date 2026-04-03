/**
 * Script temporaire pour recatégoriser les articles "actualites-corse"
 * Usage: npx tsx scripts/fix-categories.ts
 */
import 'dotenv/config'
import { db } from '../src/lib/db'
import { posts, categories, postCategories } from '../src/lib/db/schema'
import { eq, inArray, desc } from 'drizzle-orm'

async function main() {
  // 1. Trouver la catégorie "actualites-corse"
  const [badCat] = await db.select().from(categories).where(eq(categories.slug, 'actualites-corse'))
  if (!badCat) { console.log('Catégorie actualites-corse non trouvée'); return }
  console.log('Catégorie à supprimer:', badCat.id, badCat.name)

  // 2. Trouver les articles dans cette catégorie
  const relations = await db.select({ postId: postCategories.postId }).from(postCategories).where(eq(postCategories.categoryId, badCat.id))
  if (!relations.length) { console.log('Aucun article dans cette catégorie'); return }

  const postIds = relations.map(r => r.postId)
  const articlesList = await db.select({ id: posts.id, slug: posts.slug, title: posts.title }).from(posts).where(inArray(posts.id, postIds)).orderBy(desc(posts.publishedAt))

  console.log(`\n${articlesList.length} articles dans "actualites-corse":`)
  articlesList.forEach(a => console.log(`  - [${a.id}] ${a.slug}: ${a.title.substring(0, 60)}`))

  // 3. Charger toutes les catégories valides
  const allCats = await db.select().from(categories)
  console.log('\nCatégories disponibles:', allCats.map(c => `${c.slug}(${c.id})`).join(', '))

  // 4. Mapping thématique
  const catMap: Record<string, string[]> = {}
  for (const a of articlesList) {
    const title = (a.title + ' ' + a.slug).toLowerCase()
    const assigned: string[] = ['web']

    if (title.match(/crypto|bitcoin|blockchain|ethereum|nft|token|web3/)) assigned.push('crypto')
    else if (title.match(/ia|intelligence.artificielle|ai|machine.learning|chatgpt|automatisation|gemini|openai|gpt|robot/)) assigned.push('intelligence-artificielle')
    else if (title.match(/cyber|sécurité|securite|hack|phishing|ransomware|malware|attaque|pirat|faille|virus|arnaque/)) assigned.push('cybersecurite')
    else if (title.match(/finance|banque|bourse|investissement|épargne|impôt|fiscal/)) assigned.push('finance-traditionnelle')

    catMap[a.slug] = assigned.slice(0, 2)
    console.log(`  ${a.slug} → [${catMap[a.slug].join(', ')}]`)
  }

  // 5. Mettre à jour les relations
  for (const a of articlesList) {
    const newSlugs = catMap[a.slug]
    const newCats = allCats.filter(c => newSlugs.includes(c.slug))

    // Supprimer l'ancienne relation "actualites-corse"
    await db.delete(postCategories).where(eq(postCategories.postId, a.id))

    // Ajouter les nouvelles
    if (newCats.length > 0) {
      await db.insert(postCategories).values(newCats.map(c => ({ postId: a.id, categoryId: c.id }))).onConflictDoNothing()
    }
    console.log(`  ✅ ${a.slug} → ${newCats.map(c => c.slug).join(' + ')}`)
  }

  // 6. Supprimer la catégorie "actualites-corse"
  await db.delete(postCategories).where(eq(postCategories.categoryId, badCat.id))
  await db.delete(categories).where(eq(categories.id, badCat.id))
  console.log('\n✅ Catégorie "actualites-corse" supprimée')
}

main().catch(console.error).finally(() => process.exit())
