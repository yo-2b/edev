'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  suffix?: string
  label: string
}

export function AnimatedCounter({ target, suffix = '+', label }: Props) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  /* Observer : démarre l'animation quand l'élément est visible */
  useEffect(() => {
    const el = ref.current
    if (!el || started) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  /* Compte-à-rebours animé */
  useEffect(() => {
    if (!started) return

    let current = 0
    const steps = 50
    const increment = target / steps

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)

    return () => clearInterval(timer)
  }, [started, target])

  return (
    <div ref={ref} className="text-center py-6">
      <div className="mb-2 leading-none">
        <span className="text-5xl sm:text-6xl font-extrabold text-foreground">
          {count.toLocaleString('fr-FR')}
        </span>
        <span className="text-4xl font-bold text-edev ml-0.5">{suffix}</span>
      </div>
      <p className="text-sm font-semibold text-muted-foreground mt-2 uppercase tracking-widest">
        {label}
      </p>
    </div>
  )
}
