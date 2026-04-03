import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { z } from 'zod'
import { db } from '@/lib/db'
import { posts, categories, tags, postCategories, postTags } from '@/lib/db/schema'
import { eq, inArray } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

/* ── Helpers ──────────────────────────────────────────────────────────────── */

/**
 * Comparaison en temps constant pour éviter les timing attacks
 */
function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get('Authorization')
  if (!authHeader?.startsWith('Bearer ')) return false

  const token  = authHeader.slice(7)
  const secret = process.env.N8N_WEBHOOK_SECRET

  if (!secret) {
    console.error('N8N_WEBHOOK_SECRET manquant')
    return false
  }

  try {
    const a = Buffer.from(token.padEnd(secret.length))
    const b = Buffer.from(secret)
    // timingSafeEqual exige des buffers de même longueur
    return (
      token.length === secret.length &&
      timingSafeEqual(a.subarray(0, b.length), b)
    )
  } catch {
    return false
  }
}

/**
 * wpId déterministe (FNV-1a 32-bit) — jamais aléatoire → pas de collision
 */
function slugToWpId(slug: string): number {
  let h = 2166136261
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  const signed = h > 2147483647 ? h - 4294967296 : h
  return signed === 0 ? -1 : -Math.abs(signed)
}

/**
 * Sanitize un slug : caractères alphanumériques + tirets uniquement
 */
function sanitizeSlug(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/* ── Schéma de validation ─────────────────────────────────────────────────── */
const articleSchema = z.object({
  slug:            z.string().min(1).max(255).transform(sanitizeSlug),
  title:           z.string().min(1).max(500),
  content:         z.string().min(1),
  excerpt:         z.string().optional(),
  thumbnailUrl:    z.string().url().optional().nullable(),
  ogImageUrl:      z.string().url().optional().nullable(),
  seoTitle:        z.string().max(200).optional().nullable(),
  seoDescription:  z.string().max(500).optional().nullable(),
  categorySlugs:   z.array(z.string().max(100)).optional().default([]),
  tagNames:        z.array(z.string().max(100)).optional().default([]),
  publishedAt:     z.string().datetime().optional(),
  status:          z.enum(['publish', 'draft']).optional().default('publish'),
})

/* ── POST : créer ou mettre à jour un article ─────────────────────────────── */
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json(
      { success: false, message: 'Non autorisé.' },
      { status: 401 }
    )
  }

  try {
    const body = await req.json()
    const data = articleSchema.parse(body)
    const now  = new Date()

    /* ── Upsert du post ─────────────────────────────────────────────────── */
    const [upsertedPost] = await db
      .insert(posts)
      .values({
        wpId:           slugToWpId(data.slug),   // déterministe, pas de collision
        slug:           data.slug,
        title:          data.title,
        content:        data.content,
        excerpt:        data.excerpt ?? null,
        thumbnailUrl:   data.thumbnailUrl ?? null,
        ogImageUrl:     data.ogImageUrl ?? null,
        seoTitle:       data.seoTitle ?? null,
        seoDescription: data.seoDescription ?? null,
        canonical:      `https://www.edev-multimedia.com/${encodeURIComponent(data.slug)}/`,
        status:         data.status,
        sticky:         false,
        publishedAt:    data.publishedAt ? new Date(data.publishedAt) : now,
        modifiedAt:     now,
      })
      .onConflictDoUpdate({
        target: posts.slug,
        set: {
          title:          data.title,
          content:        data.content,
          excerpt:        data.excerpt ?? null,
          thumbnailUrl:   data.thumbnailUrl ?? null,
          ogImageUrl:     data.ogImageUrl ?? null,
          seoTitle:       data.seoTitle ?? null,
          seoDescription: data.seoDescription ?? null,
          status:         data.status,
          modifiedAt:     now,
        },
      })
      .returning({ id: posts.id, slug: posts.slug })

    const postId = upsertedPost.id

    /* ── Catégories — batch (pas de N+1) ────────────────────────────────── */
    if (data.categorySlugs.length > 0) {
      await db.delete(postCategories).where(eq(postCategories.postId, postId))

      // 1 seule requête pour récupérer les catégories existantes
      const existing = await db
        .select()
        .from(categories)
        .where(inArray(categories.slug, data.categorySlugs))

      const existingMap = new Map(existing.map((c) => [c.slug, c]))
      const missingSlugs = data.categorySlugs.filter((s) => !existingMap.has(s))

      // Créer les manquantes en batch si nécessaire
      if (missingSlugs.length > 0) {
        const newCats = await db
          .insert(categories)
          .values(
            missingSlugs.map((slug) => ({
              wpId: slugToWpId(`cat-${slug}`),
              name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
              slug,
            }))
          )
          .onConflictDoNothing()
          .returning()
        newCats.forEach((c) => existingMap.set(c.slug, c))
      }

      // Insérer toutes les relations en 1 requête batch
      const relations = data.categorySlugs
        .map((s) => existingMap.get(s))
        .filter(Boolean)
        .map((c) => ({ postId, categoryId: c!.id }))

      if (relations.length > 0) {
        await db.insert(postCategories).values(relations).onConflictDoNothing()
      }
    }

    /* ── Tags — batch (pas de N+1) ──────────────────────────────────────── */
    if (data.tagNames.length > 0) {
      await db.delete(postTags).where(eq(postTags.postId, postId))

      const tagSlugs = data.tagNames.map((n) =>
        n.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      )

      const existingTags = await db
        .select()
        .from(tags)
        .where(inArray(tags.slug, tagSlugs))

      const tagMap = new Map(existingTags.map((t) => [t.slug, t]))
      const missingTags = tagSlugs.filter((s) => !tagMap.has(s))

      if (missingTags.length > 0) {
        const newTags = await db
          .insert(tags)
          .values(
            missingTags.map((slug, i) => ({
              wpId: slugToWpId(`tag-${slug}`),
              name: data.tagNames[tagSlugs.indexOf(slug)] ?? slug,
              slug,
            }))
          )
          .onConflictDoNothing()
          .returning()
        newTags.forEach((t) => tagMap.set(t.slug, t))
      }

      const tagRelations = tagSlugs
        .map((s) => tagMap.get(s))
        .filter(Boolean)
        .map((t) => ({ postId, tagId: t!.id }))

      if (tagRelations.length > 0) {
        await db.insert(postTags).values(tagRelations).onConflictDoNothing()
      }
    }

    /* ── Revalidation ISR — les pages sont mises à jour immédiatement ───── */
    revalidatePath('/actualites-corse')
    revalidatePath(`/${upsertedPost.slug}`)
    revalidatePath('/')
    revalidatePath('/plan-du-site')

    return NextResponse.json(
      {
        success: true,
        message: 'Article créé/mis à jour avec succès.',
        article: {
          id:   postId,
          slug: upsertedPost.slug,
          url:  `https://www.edev-multimedia.com/${upsertedPost.slug}/`,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Données invalides.', errors: error.flatten().fieldErrors },
        { status: 422 }
      )
    }
    console.error('Erreur webhook n8n :', error)
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur.' },
      { status: 500 }
    )
  }
}

/* ── PATCH : mise à jour partielle (catégories, tags) sans écraser le contenu */
export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, message: 'Non autorisé.' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const slug = z.string().min(1).parse(body.slug)

    const [post] = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1)
    if (!post) {
      return NextResponse.json({ success: false, message: 'Article non trouvé.' }, { status: 404 })
    }

    // Mise à jour des catégories si fournies
    if (body.categorySlugs && Array.isArray(body.categorySlugs)) {
      await db.delete(postCategories).where(eq(postCategories.postId, post.id))

      const existing = await db.select().from(categories).where(inArray(categories.slug, body.categorySlugs))
      const existingMap = new Map(existing.map((c) => [c.slug, c]))
      const missingSlugs = body.categorySlugs.filter((s: string) => !existingMap.has(s))

      if (missingSlugs.length > 0) {
        const newCats = await db.insert(categories).values(
          missingSlugs.map((s: string) => ({ wpId: slugToWpId(`cat-${s}`), name: s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' '), slug: s }))
        ).onConflictDoNothing().returning()
        newCats.forEach((c) => existingMap.set(c.slug, c))
      }

      const rels = body.categorySlugs.map((s: string) => existingMap.get(s)).filter(Boolean).map((c: any) => ({ postId: post.id, categoryId: c.id }))
      if (rels.length > 0) await db.insert(postCategories).values(rels).onConflictDoNothing()
    }

    // Mise à jour des tags si fournis
    if (body.tagNames && Array.isArray(body.tagNames)) {
      await db.delete(postTags).where(eq(postTags.postId, post.id))
      const tagSlugs = body.tagNames.map((n: string) => n.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))
      const existingTags = await db.select().from(tags).where(inArray(tags.slug, tagSlugs))
      const tagMap = new Map(existingTags.map((t) => [t.slug, t]))
      const missingTags = tagSlugs.filter((s: string) => !tagMap.has(s))
      if (missingTags.length > 0) {
        const newTags = await db.insert(tags).values(missingTags.map((s: string, i: number) => ({ wpId: slugToWpId(`tag-${s}`), name: body.tagNames[tagSlugs.indexOf(s)] ?? s, slug: s }))).onConflictDoNothing().returning()
        newTags.forEach((t) => tagMap.set(t.slug, t))
      }
      const tagRels = tagSlugs.map((s: string) => tagMap.get(s)).filter(Boolean).map((t: any) => ({ postId: post.id, tagId: t.id }))
      if (tagRels.length > 0) await db.insert(postTags).values(tagRels).onConflictDoNothing()
    }

    // Mise à jour du contenu si fourni (restauration)
    if (body.content) {
      await db.update(posts).set({
        ...(body.content ? { content: body.content } : {}),
        ...(body.title ? { title: body.title } : {}),
        ...(body.excerpt ? { excerpt: body.excerpt } : {}),
        modifiedAt: new Date(),
      }).where(eq(posts.id, post.id))
    }

    revalidatePath(`/${slug}`)
    revalidatePath('/')
    revalidatePath('/actualites-corse')

    return NextResponse.json({ success: true, message: 'Article mis à jour.', article: { id: post.id, slug } })
  } catch (error) {
    console.error('PATCH error:', error)
    return NextResponse.json({ success: false, message: 'Erreur.' }, { status: 500 })
  }
}

/* ── GET : health check ───────────────────────────────────────────────────── */
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, message: 'Non autorisé.' }, { status: 401 })
  }
  return NextResponse.json({
    success: true,
    message: 'Webhook n8n opérationnel.',
    endpoint: 'POST /api/n8n/articles',
  })
}
