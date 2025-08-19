import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Saivinay Manda - Software Developer',
  description: 'Portfolio. Seamless, scalable, enjoyable.',
  openGraph: {
    type: 'website',
    title: 'Saivinay Manda - Software Developer (Full Stack)',
    description: 'Portfolio. Seamless, scalable, enjoyable.',
    images: [{ url: '/og.png' }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <div className="container py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Saivinay Manda
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/resume" className="hover:underline">
                Resume
              </Link>
              <Link href="/projects">Projects</Link>
              <Link href="/projects/github">GitHub</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
          <main className={`pt-8 ${GeistMono.variable ?? ''}`}>{children}</main>
          <footer className="py-12 text-sm opacity-70">
            © {new Date().getFullYear()} Saivinay Manda
          </footer>
        </div>
      </body>
    </html>
  )
}
