import { allProjects } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Image from "next/image"
import { MDXContent } from "@/components/mdx-content"

// Generate static paths for [slug]
export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

// ✅ Correct props typing (no PageProps import)
export default function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="not-prose space-y-2">
        <div className="text-sm opacity-70">
          {project.timeframe} • {project.role}
        </div>
        <h1 className="text-4xl font-semibold">{project.title}</h1>
        <p className="max-w-2xl opacity-80">{project.summary}</p>

        {project.stack?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs rounded-full border px-2 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        ) : null}

        {project.cover && (
          <div className="relative overflow-hidden rounded-2xl border mt-4">
            <Image
              src={project.cover}
              alt={project.title}
              width={1440}
              height={900}
              priority
            />
          </div>
        )}
      </div>

      <MDXContent code={project.body} />

      {project.impact?.length ? (
        <section className="not-prose mt-8 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-3">Results</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.impact.map((i, idx) => (
              <li key={idx} className="leading-relaxed">
                • {i}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}
