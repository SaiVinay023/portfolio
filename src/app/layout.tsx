import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navigation } from '@/components/common/Navigation'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Saivinay Manda - Software Developer',
    template: '%s | Saivinay Manda',
  },
  description: 'Portfolio. Seamless, scalable, enjoyable.',
  openGraph: {
    type: 'website',
    siteName: 'Saivinay Manda',
    title: 'Saivinay Manda - Software Developer (Full Stack)',
    description: 'Portfolio. Seamless, scalable, enjoyable.',
    url: '/',
    images: ['/og.png'], // resolved against metadataBase
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saivinay Manda - Software Developer',
    description: 'Portfolio. Seamless, scalable, enjoyable.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = theme === 'dark' || (!theme && prefersDark);
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })()
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${GeistSans.className} ${GeistMono.variable} min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <ThemeProvider>
          <div className="container max-w-6xl mx-auto px-4 py-6">
            <Navigation />

            <main className="pt-8">{children}</main>

            <footer className="py-12 text-sm opacity-70">
              © {new Date().getFullYear()} Saivinay Manda
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
