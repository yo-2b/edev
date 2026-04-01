'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItem {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            aria-expanded={open === i}
          >
            <span className="text-sm md:text-base font-semibold text-white group-hover:text-edev transition-colors leading-snug">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-edev shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}
          >
            <p className="text-sm text-white/55 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
