// src/components/resume/CertificatesList.tsx (server)
import { profile } from '@/data/profile'

export default function CertificatesList() {
  if (!profile.certificates?.length) return null
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Certificates</h2>
      <ul className="space-y-2">
        {profile.certificates!.map((c, i) => (
          <li key={i} className="p-3 border rounded-md bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex justify-between">
            <span>{c.name}</span>
            <span className="text-sm opacity-70">{c.year}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
