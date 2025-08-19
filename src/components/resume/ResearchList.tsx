import { allResearch } from 'contentlayer/generated'
import { MDXContent } from '@/components/mdx-content'

export default function ResearchList() {
  const items = [...allResearch].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Research</h2>
      <ul className="space-y-6">
        {items.map(r => (
          <li key={`${r.org}-${r.start}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-medium">{r.role} • {r.org}</div>
              <div className="text-sm opacity-70">{r.start} - {r.end} • {r.location}</div>
            </div>
            <div className="text-sm opacity-80 mt-1">{r.project}</div>
            {r.body?.code ? (
              <div className="mt-3">
                <MDXContent code={r.body.code} />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
