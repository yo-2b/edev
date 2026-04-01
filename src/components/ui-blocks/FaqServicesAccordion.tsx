'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItem {
  q: string
  a: string
}

export function FaqServicesAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-white/20"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-white md:text-base">{item.q}</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-white/55">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
