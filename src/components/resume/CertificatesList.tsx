// src/components/resume/CertificatesList.tsx
'use client'

import { profile } from '@/data/profile'

export default function CertificatesList() {
  if (!profile.certificates) return null

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Certificates</h2>
      <ul className="space-y-2">
        {profile.certificates.map((cert, i) => (
          <li
            key={i}
            className="p-3 border rounded-md bg-gray-50 flex justify-between"
          >
            <span>{cert.name}</span>
            <span className="text-sm text-gray-600">{cert.year}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
