'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    // Loguer l'erreur (à remplacer par Sentry ou autre en production)
    console.error('[GlobalError]', error)
  }, [error])

  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: '#0d1020' }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
        <AlertTriangle className="h-7 w-7 text-red-400" />
      </div>

      <h1 className="text-2xl font-extrabold text-white mb-3">
        Une erreur est survenue
      </h1>
      <p className="text-white/40 text-sm mb-8 max-w-sm leading-relaxed">
        Quelque chose s&apos;est mal passé. Nos équipes ont été notifiées.
        Vous pouvez réessayer ou retourner à l&apos;accueil.
      </p>

      <div className="flex gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/[0.10] transition-all duration-200"
        >
          <RefreshCw className="h-4 w-4" />
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
          style={{ backgroundColor: '#e84a2f' }}
        >
          <Home className="h-4 w-4" />
          Accueil
        </Link>
      </div>

      {process.env.NODE_ENV === 'development' && error?.message && (
        <pre className="mt-8 max-w-xl overflow-auto rounded-xl bg-white/[0.04] border border-white/[0.06] p-4 text-left text-xs text-red-300/70">
          {error.message}
        </pre>
      )}
    </div>
  )
}
