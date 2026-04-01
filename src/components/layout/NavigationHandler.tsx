'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function NavigationHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    // Scroll immédiat vers le haut sans animation
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)

    // Déclencher le fade-in sur le contenu principal
    const main = document.getElementById('main-content')
    if (main) {
      main.style.animation = 'none'
      main.offsetHeight // force reflow
      main.style.animation = ''
    }

    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = ''
    })
  }, [pathname])

  return null
}
