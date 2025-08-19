// src/components/resume/PublicationsList.tsx
'use client'

import { profile } from '@/data/profile'

export default function PublicationsList() {
  if (!profile.publications) return null

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Publications</h2>
      <ul className="space-y-4">
        {profile.publications.map((pub, i) => (
          <li key={i} className="p-4 border rounded-lg bg-gray-50">
            <div className="font-medium">{pub.title}</div>
            <p className="text-sm text-gray-600">
              {pub.venue} • {pub.year}
            </p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                View Paper
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
