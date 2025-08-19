'use client'

import { profile } from '@/data/profile'
import Link from 'next/link'

export default function AboutIntro() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="max-w-2xl opacity-90">{profile.summary}</p>
      <div className="flex gap-3">
        <Link href="/projects" className="px-4 py-2 rounded-lg bg-black text-white">See my projects</Link>
        <a href={`mailto:${profile.email}`} className="px-4 py-2 rounded-lg border">Email me</a>
      </div>
    </section>
  )
}
