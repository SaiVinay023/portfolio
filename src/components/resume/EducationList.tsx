import { allEducation } from 'contentlayer/generated'

export default function EducationList() {
  const items = [...allEducation].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Education</h2>
      <ul className="space-y-4">
        {items.map(ed => (
          <li key={`${ed.school}-${ed.graduation}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-medium">{ed.degree} • {ed.school}</div>
              <div className="text-sm opacity-70">{ed.graduation} • {ed.location}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
