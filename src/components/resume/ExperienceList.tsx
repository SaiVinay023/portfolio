import { MDXContent } from '@/components/mdx-content'
import { allExperiences } from 'contentlayer/generated'

export default function ExperienceList() {
  const items = [...allExperiences].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <ul className="space-y-6">
        {items.map((e) => (
          <li key={`${e.company}-${e.start}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-medium">{e.role} • {e.company}</div>
              <div className="text-sm opacity-70">{e.start} - {e.end} • {e.location}</div>
            </div>
            {e.stack?.length ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {e.stack.slice(0, 8).map(s => (
                  <span key={s} className="text-xs rounded-full border px-2 py-1 opacity-80">{s}</span>
                ))}
              </div>
            ) : null}
            {e.body?.code ? (
              <div className="mt-3">
                <MDXContent code={e.body.code} />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
