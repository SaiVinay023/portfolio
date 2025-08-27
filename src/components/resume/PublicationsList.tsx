// src/components/resume/PublicationsList.tsx
'use client'

import { profile } from '@/data/profile'

export default function PublicationsList() {
  const pubs = profile.publications ?? []
  if (pubs.length === 0) return null

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Publications</h2>
      <ul className="space-y-3">
        {pubs.map((p, i) => (
          <li key={i} className="p-4 border rounded-md bg-gray-50">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm opacity-70">
              {[p.authors?.join(', '), p.venue, p.year].filter(Boolean).join(' • ')}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline mt-1 inline-block"
              >
                View
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
