import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'

export default function ProjectsPage() {
  const list = [...allProjects].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => {
          // fallback: if no URL, use internal /projects/[slug]
          const href = p.url || `/projects/${p.slug}`
          const isExternal = p.url?.startsWith('http')

          return (
            <li key={p.slug} className="rounded-2xl border p-4">
              <h3 className="font-medium">
                {isExternal ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {p.title}
                  </a>
                ) : (
                  <Link href={href} className="hover:underline">
                    {p.title}
                  </Link>
                )}
              </h3>
              <p className="text-sm opacity-70">{p.summary}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
