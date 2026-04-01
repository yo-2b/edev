import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Expertises Web, SEO, IA & Graphisme — Corse | E-Dev Multimedia',
  description:
    'E-Dev Multimedia maîtrise la création de sites web, le SEO, l\'automatisation IA, le marketing digital et le design graphique pour les entreprises corses.',
  alternates: { canonical: 'https://www.edev-multimedia.com/expertises/' },
}

/**
 * /expertises → redirect 301 vers /services/
 * Alias propre pour la navigation interne
 */
export default function ExpertisesRedirect() {
  redirect('/services')
}
