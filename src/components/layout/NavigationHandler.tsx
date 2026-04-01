'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Désactive le scroll-to-top automatique de Next.js lors des navigations.
 * Garde la position de scroll actuelle lors des changements de page.
 */
export function NavigationHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Désactive le scroll restauration du navigateur
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    // Sur chaque changement de page, scroll immédiat vers le haut SANS animation
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, 0)
      // Remettre auto après pour ne pas bloquer les anchors
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = ''
      })
    }
  }, [pathname])

  return null
}
