'use client'

import { allProjects } from 'contentlayer/generated'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  const projects = [...allProjects].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  )

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <ProjectCard key={p.slug} project={p} index={i} />
      ))}
    </div>
  )
}
