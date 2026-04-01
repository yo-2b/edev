import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // Fix: plusieurs package-lock.json détectés dans le workspace parent
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Autorise les images depuis le domaine WP actuel et Gravatar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.edev-multimedia.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],
  },

  // Headers de sécurité sur toutes les routes
  async headers() {
    // Content-Security-Policy
    const csp = [
      "default-src 'self'",
      // Scripts : self + inline (JSON-LD) + YouTube player API
      "script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com",
      // Styles : self + inline Tailwind
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Polices Google Fonts
      "font-src 'self' https://fonts.gstatic.com data:",
      // Images : self, WP, Gravatar, data URIs
      "img-src 'self' data: blob: https://www.edev-multimedia.com https://secure.gravatar.com",
      // Vidéos locales
      "media-src 'self'",
      // Iframes YouTube uniquement
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
      // Connexions API
      "connect-src 'self'",
      // Objets embarqués
      "object-src 'none'",
      // Upgrade HTTP → HTTPS
      "upgrade-insecure-requests",
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',     value: 'nosniff' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control',     value: 'on' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          { key: 'Strict-Transport-Security',  value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy',    value: csp },
        ],
      },
    ]
  },

  // Proxy /wp-content/ → ancien serveur OVH (images articles WordPress)
  async rewrites() {
    return [
      {
        source: '/wp-content/:path*',
        destination: 'http://46.105.204.11/wp-content/:path*',
      },
    ]
  },

  // Redirects SEO — 301 permanents pour éviter les 404 après migration WP → Next.js
  async redirects() {
    return [
      // ── Partenariat ──────────────────────────────────────────────────────
      {
        source: '/partenariat',
        destination: '/partenariat-communication-corse',
        permanent: true,
      },

      // ── Portfolio WP → page Réalisations ─────────────────────────────────
      // Couvre TOUTES les anciennes URLs /portfolio/xxx/ ou /portfolio/xxx
      // Exemples : /portfolio/hotel-maria-stella/, /portfolio/art-miss/, etc.
      {
        source: '/portfolio',
        destination: '/realisations-agence-communication-corse/',
        permanent: true,
      },
      {
        source: '/portfolio/:slug*',
        destination: '/realisations-agence-communication-corse/',
        permanent: true,
      },

      // ── Anciennes URLs de catégorie portfolio WP ─────────────────────────
      {
        source: '/category/portfolio/:slug*',
        destination: '/realisations-agence-communication-corse/',
        permanent: true,
      },

      // ── Anciennes URLs WP génériques à protéger ───────────────────────────
      // Flux RSS, pages d'auteur, archives de tags WP — retournent vers accueil
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/:slug*',
        destination: '/actualites-corse/',
        permanent: true,
      },
      {
        source: '/category/:slug*',
        destination: '/actualites-corse/',
        permanent: true,
      },
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
