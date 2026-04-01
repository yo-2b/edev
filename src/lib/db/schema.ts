import {
  pgTable,
  integer,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
  primaryKey,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// ─── Categories ──────────────────────────────────────────────────────────────

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  wpId: integer('wp_id').unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  description: text('description'),
  parentId: integer('parent_id'),
  count: integer('count').default(0),
})

// ─── Tags ─────────────────────────────────────────────────────────────────────

export const tags = pgTable('tags', {
  id: serial('id').primaryKey(),
  wpId: integer('wp_id').unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
})

// ─── Posts (articles de blog) ─────────────────────────────────────────────────

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  wpId: integer('wp_id').unique().notNull(),
  slug: varchar('slug', { length: 500 }).unique().notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  thumbnailUrl: text('thumbnail_url'),
  ogImageUrl: text('og_image_url'),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  canonical: text('canonical'),
  status: varchar('status', { length: 50 }).notNull().default('publish'),
  sticky: boolean('sticky').default(false),
  publishedAt: timestamp('published_at', { withTimezone: true }).notNull(),
  modifiedAt: timestamp('modified_at', { withTimezone: true }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

// ─── Pages WordPress ─────────────────────────────────────────────────────────

export const pages = pgTable('pages', {
  id: serial('id').primaryKey(),
  wpId: integer('wp_id').unique().notNull(),
  slug: varchar('slug', { length: 500 }).unique().notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  parentWpId: integer('parent_wp_id').default(0),
  menuOrder: integer('menu_order').default(0),
  thumbnailUrl: text('thumbnail_url'),
  ogImageUrl: text('og_image_url'),
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  canonical: text('canonical'),
  status: varchar('status', { length: 50 }).notNull().default('publish'),
  publishedAt: timestamp('published_at', { withTimezone: true }).notNull(),
  modifiedAt: timestamp('modified_at', { withTimezone: true }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
})

// ─── Relations N-N : posts ↔ categories ───────────────────────────────────────

export const postCategories = pgTable(
  'post_categories',
  {
    postId: integer('post_id')
      .notNull()
      .references(() => posts.id, { onDelete: 'cascade' }),
    categoryId: integer('category_id')
      .notNull()
      .references(() => categories.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.postId, t.categoryId] })]
)

// ─── Relations N-N : posts ↔ tags ─────────────────────────────────────────────

export const postTags = pgTable(
  'post_tags',
  {
    postId: integer('post_id')
      .notNull()
      .references(() => posts.id, { onDelete: 'cascade' }),
    tagId: integer('tag_id')
      .notNull()
      .references(() => tags.id, { onDelete: 'cascade' }),
  },
  (t) => [primaryKey({ columns: [t.postId, t.tagId] })]
)

// ─── Drizzle Relations (pour les requêtes avec .with()) ───────────────────────

export const postsRelations = relations(posts, ({ many }) => ({
  postCategories: many(postCategories),
  postTags: many(postTags),
}))

export const categoriesRelations = relations(categories, ({ many }) => ({
  postCategories: many(postCategories),
}))

export const tagsRelations = relations(tags, ({ many }) => ({
  postTags: many(postTags),
}))

export const postCategoriesRelations = relations(postCategories, ({ one }) => ({
  post: one(posts, { fields: [postCategories.postId], references: [posts.id] }),
  category: one(categories, {
    fields: [postCategories.categoryId],
    references: [categories.id],
  }),
}))

export const postTagsRelations = relations(postTags, ({ one }) => ({
  post: one(posts, { fields: [postTags.postId], references: [posts.id] }),
  tag: one(tags, { fields: [postTags.tagId], references: [tags.id] }),
}))

// ─── Types exportés ───────────────────────────────────────────────────────────

export type Post = typeof posts.$inferSelect
export type NewPost = typeof posts.$inferInsert
export type Page = typeof pages.$inferSelect
export type NewPage = typeof pages.$inferInsert
export type Category = typeof categories.$inferSelect
export type Tag = typeof tags.$inferSelect
