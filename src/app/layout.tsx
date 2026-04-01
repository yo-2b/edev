import type { Metadata } from 'next'
import { Open_Sans, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'

/* ── Open Sans — titres display (H1…H6) ─────────────────────────────────── */
const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

/* ── Inter — corps de texte ─────────────────────────────────────────────── */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

/* ── Geist Mono — blocs de code ─────────────────────────────────────────── */
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.edev-multimedia.com'),
  title: {
    default: 'E-Dev Multimedia — Agence Web en Corse',
    template: '%s | E-Dev Multimedia',
  },
  description:
    'Agence web en Corse spécialisée en création de sites web, applications mobiles, référencement SEO et automatisation IA. Devis gratuit.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: 'any' },
    ],
    apple: [
      { url: '/icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.edev-multimedia.com',
    siteName: 'E-Dev Multimedia',
    images: [
      {
        url: 'https://www.edev-multimedia.com/wp-content/uploads/2019/06/image-mockup-edev-multimedia-website.jpg',
        width: 1834,
        height: 1338,
        alt: 'E-Dev Multimedia — Agence Web en Corse',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://www.edev-multimedia.com',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${openSans.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
