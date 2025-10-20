// src/components/resume/EducationList.tsx  (server)
import { allEducation } from 'contentlayer/generated'

export default function EducationList() {
  const items = [...allEducation].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Education</h2>
      <ul className="space-y-4">
        {items.map(e => (
          <li key={`${e.school}-${e.graduation}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-medium">{e.degree} • {e.school}</div>
              <div className="text-sm opacity-70">{e.graduation} • {e.location}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
