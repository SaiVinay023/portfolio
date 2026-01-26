'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Navigation() {
  return (
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
          <Link href="/journey" className="hover:underline">
            Journey
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
