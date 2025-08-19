'use client'

import { profile } from '@/data/profile'

export default function Highlights() {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Highlights</h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {(profile.highlights || []).map((h, i) => (
          <li key={i} className="rounded-xl border p-3 leading-relaxed">{h}</li>
        ))}
      </ul>
    </section>
  )
}
