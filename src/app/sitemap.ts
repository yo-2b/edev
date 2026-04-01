import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/queries/posts'

const BASE = 'https://www.edev-multimedia.com'

/* ── Pages statiques ─────────────────────────────────────────────────────── */
const STATIC_PAGES: MetadataRoute.Sitemap = [
  {
    url: `${BASE}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: `${BASE}/agence-communication-corse/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE}/realisations-agence-communication-corse/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    url: `${BASE}/actualites-corse/`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.85,
  },
  {
    url: `${BASE}/services/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE}/services/site-web-corse/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE}/services/referencement-visibilite/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE}/services/application-mobile-corse/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: `${BASE}/services/marketing-agence-web-corse/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: `${BASE}/services/infographie-graphisme-corse/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: `${BASE}/services/impression-pose/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: `${BASE}/services/automatisation-intelligence-artificielle-ia-corse/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: `${BASE}/partenariat-communication-corse/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: `${BASE}/plan-du-site/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.3,
  },
]

/* ── Sitemap dynamique ───────────────────────────────────────────────────── */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Récupère tous les articles publiés (sans limite)
  const posts = await getAllPosts(10_000).catch(() => [])

  const articleEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/${post.slug}/`,
    lastModified: post.modifiedAt ?? post.publishedAt ?? new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [...STATIC_PAGES, ...articleEntries]
}
