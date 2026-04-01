import { db } from '@/lib/db'
import { posts, categories, tags, postCategories, postTags } from '@/lib/db/schema'
import { eq, desc, asc, inArray, sql, and, ne } from 'drizzle-orm'
import type { Post, Category, Tag } from '@/lib/db/schema'

// Type enrichi avec relations
export type PostWithRelations = Post & {
  categories: Category[]
  tags: Tag[]
}

/**
 * Récupère tous les articles publiés, triés par date décroissante
 */
export async function getAllPosts(limit = 100): Promise<Post[]> {
  return db
    .select()
    .from(posts)
    .where(eq(posts.status, 'publish'))
    .orderBy(desc(posts.publishedAt))
    .limit(limit)
}

/**
 * Récupère un article par son slug avec ses catégories et tags
 */
export async function getPostBySlug(slug: string): Promise<PostWithRelations | null> {
  const result = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .limit(1)

  if (!result[0]) return null

  const post = result[0]

  const [catRelations, tagRelations] = await Promise.all([
    db
      .select({ category: categories })
      .from(postCategories)
      .innerJoin(categories, eq(postCategories.categoryId, categories.id))
      .where(eq(postCategories.postId, post.id)),
    db
      .select({ tag: tags })
      .from(postTags)
      .innerJoin(tags, eq(postTags.tagId, tags.id))
      .where(eq(postTags.postId, post.id)),
  ])

  return {
    ...post,
    categories: catRelations.map((r) => r.category),
    tags: tagRelations.map((r) => r.tag),
  }
}

/**
 * Récupère les articles d'une catégorie (par slug de catégorie)
 */
export async function getPostsByCategory(categorySlug: string, limit = 20): Promise<Post[]> {
  const cat = await db
    .select()
    .from(categories)
    .where(eq(categories.slug, categorySlug))
    .limit(1)

  if (!cat[0]) return []

  const relations = await db
    .select({ postId: postCategories.postId })
    .from(postCategories)
    .where(eq(postCategories.categoryId, cat[0].id))

  if (!relations.length) return []

  return db
    .select()
    .from(posts)
    .where(
      and(
        inArray(posts.id, relations.map((r) => r.postId)),
        eq(posts.status, 'publish')
      )
    )
    .orderBy(desc(posts.publishedAt))
    .limit(limit)
}

/**
 * Récupère les articles paginés pour le listing blog
 * Filtre optionnel par catégorie slug
 */
export async function getPostsPaginated(
  page: number = 1,
  perPage: number = 12,
  categorySlug?: string
): Promise<{ posts: Post[]; total: number; totalPages: number }> {
  const offset = (page - 1) * perPage

  // Si filtre catégorie : on récupère d'abord les post IDs
  if (categorySlug) {
    const cat = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, categorySlug))
      .limit(1)

    if (!cat[0]) return { posts: [], total: 0, totalPages: 0 }

    const relations = await db
      .select({ postId: postCategories.postId })
      .from(postCategories)
      .where(eq(postCategories.categoryId, cat[0].id))

    if (!relations.length) return { posts: [], total: 0, totalPages: 0 }

    const postIds = relations.map((r) => r.postId)
    const condition = and(inArray(posts.id, postIds), eq(posts.status, 'publish'))

    const [allPosts, countResult] = await Promise.all([
      db.select().from(posts).where(condition).orderBy(desc(posts.publishedAt)).limit(perPage).offset(offset),
      db.select({ count: sql<number>`count(*)` }).from(posts).where(condition),
    ])

    const total = Number(countResult[0]?.count ?? 0)
    return { posts: allPosts, total, totalPages: Math.ceil(total / perPage) }
  }

  // Sans filtre
  const [allPosts, countResult] = await Promise.all([
    db
      .select()
      .from(posts)
      .where(eq(posts.status, 'publish'))
      .orderBy(desc(posts.publishedAt))
      .limit(perPage)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)` })
      .from(posts)
      .where(eq(posts.status, 'publish')),
  ])

  const total = Number(countResult[0]?.count ?? 0)
  return { posts: allPosts, total, totalPages: Math.ceil(total / perPage) }
}

/**
 * Récupère les 3 articles les plus récents (pour la homepage)
 */
export async function getLatestPosts(limit = 3): Promise<Post[]> {
  return db
    .select()
    .from(posts)
    .where(eq(posts.status, 'publish'))
    .orderBy(desc(posts.publishedAt))
    .limit(limit)
}

/**
 * Récupère des articles similaires (même catégorie, exclut l'article courant)
 */
export async function getSimilarPosts(
  currentPostId: number,
  categoryIds: number[],
  limit = 3
): Promise<Post[]> {
  if (!categoryIds.length) {
    // Fallback : derniers articles
    return db
      .select()
      .from(posts)
      .where(and(eq(posts.status, 'publish'), ne(posts.id, currentPostId)))
      .orderBy(desc(posts.publishedAt))
      .limit(limit)
  }

  const relations = await db
    .select({ postId: postCategories.postId })
    .from(postCategories)
    .where(inArray(postCategories.categoryId, categoryIds))

  const candidateIds = relations
    .map((r) => r.postId)
    .filter((id) => id !== currentPostId)

  if (!candidateIds.length) {
    return db
      .select()
      .from(posts)
      .where(and(eq(posts.status, 'publish'), ne(posts.id, currentPostId)))
      .orderBy(desc(posts.publishedAt))
      .limit(limit)
  }

  return db
    .select()
    .from(posts)
    .where(
      and(
        inArray(posts.id, candidateIds),
        eq(posts.status, 'publish'),
        ne(posts.id, currentPostId)
      )
    )
    .orderBy(desc(posts.publishedAt))
    .limit(limit)
}

/**
 * Récupère toutes les catégories (pour les pills de filtre)
 */
export async function getAllCategories(): Promise<Category[]> {
  return db
    .select()
    .from(categories)
    .orderBy(desc(categories.count))
}

/**
 * Récupère tous les slugs pour generateStaticParams
 */
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return db
    .select({ slug: posts.slug })
    .from(posts)
    .where(eq(posts.status, 'publish'))
}

/**
 * Récupère tous les tags (pour le plan du site, les filtres, etc.)
 */
export async function getAllTags(): Promise<Tag[]> {
  return db
    .select()
    .from(tags)
    .orderBy(asc(tags.name))
}
