import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Link from 'next/link'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ThemeToggle } from '@/components/common/ThemeToggle'

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} ${GeistMono.variable} min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <ThemeProvider>
          <div className="container max-w-6xl mx-auto px-4 py-6">
            <nav className="flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">
                Saivinay Manda
              </Link>
              <div className="flex items-center gap-4">
                <div className="flex gap-4 text-sm">
                  <Link href="/resume" className="hover:underline">
                    Resume
                  </Link>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                  <Link href="/projects/github" className="hover:underline">
                    GitHub
                  </Link>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </div>
                <ThemeToggle />
              </div>
            </nav>

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
