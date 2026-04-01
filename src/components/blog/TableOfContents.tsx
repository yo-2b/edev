'use client'

import { useState, useEffect } from 'react'

export interface TocHeading {
  id: string
  text: string
  level: number
}

interface Props {
  headings: TocHeading[]
}

export function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (!headings.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // L'heading le plus haut visible devient actif
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings.length) return null

  return (
    <nav aria-label="Table des matières">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        Table des matières
      </p>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? '0.875rem' : '0' }}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(h.id)
                if (el) {
                  const offset = 96 // hauteur header sticky
                  const top = el.getBoundingClientRect().top + window.scrollY - offset
                  window.scrollTo({ top, behavior: 'smooth' })
                  setActiveId(h.id)
                }
              }}
              className={`block text-sm py-1 pr-2 rounded-lg transition-colors leading-snug ${
                activeId === h.id
                  ? 'text-edev font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeId === h.id && (
                <span
                  className="inline-block w-1 h-1 rounded-full bg-edev mr-1.5 align-middle"
                  aria-hidden="true"
                />
              )}
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
