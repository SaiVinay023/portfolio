// src/components/resume/PublicationsList.tsx (server)
import { profile } from '@/data/profile'

export default function PublicationsList() {
  if (!profile.publications?.length) return null
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Publications</h2>
      <ul className="space-y-2">
        {profile.publications!.map((p, i) => (
          <li key={i} className="p-3 border rounded-md bg-gray-50 dark:bg-neutral-900">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm opacity-70">{p.venue} • {p.year}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
