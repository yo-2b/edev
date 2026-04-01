import { db } from '@/lib/db'
import { pages } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import type { Page } from '@/lib/db/schema'

/**
 * Récupère une page par son slug
 */
export async function getPageBySlug(slug: string): Promise<Page | null> {
  const result = await db
    .select()
    .from(pages)
    .where(eq(pages.slug, slug))
    .limit(1)

  return result[0] ?? null
}

/**
 * Récupère les sous-pages d'une page parente (par wpId parent)
 */
export async function getChildPages(parentWpId: number): Promise<Page[]> {
  return db
    .select()
    .from(pages)
    .where(eq(pages.parentWpId, parentWpId))
    .orderBy(pages.menuOrder)
}
