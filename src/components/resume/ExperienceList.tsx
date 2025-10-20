// src/components/resume/ExperienceList.tsx  (server)
import { allExperience } from 'contentlayer/generated'

export default function ExperienceList() {
  const items = [...allExperience].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <ul className="space-y-6">
        {items.map(x => (
          <li key={`${x.company}-${x.start}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-medium">{x.role} • {x.company}</div>
              <div className="text-sm opacity-70">{x.start} - {x.end} • {x.location}</div>
            </div>
            {x.stack?.length ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {x.stack.map(s => (
                  <span key={s} className="text-xs rounded-full border px-2 py-1 opacity-80">{s}</span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
