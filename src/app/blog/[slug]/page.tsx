import { redirect } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * /blog/{slug} → redirect 301 vers /{slug}/
 * Préserve les éventuels liens internes utilisant /blog/
 */
export default async function BlogSlugRedirect({ params }: Props) {
  const { slug } = await params
  redirect(`/${slug}/`)
}
