'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    // Notifier GTM que le consentement est donné
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'cookie_consent_accepted' })
    }
  }

  function refuse() {
    localStorage.setItem('cookie_consent', 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-5">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-gray-700 flex-1">
          🍪 Nous utilisons des cookies pour analyser notre trafic (Google Analytics) et améliorer votre expérience.{' '}
          <Link href="/mentions-legales" className="underline text-[#e8323c] hover:opacity-75">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={refuse}
            className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-[#e8323c] text-white rounded-full hover:bg-[#c8252e] transition-colors font-semibold"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
