'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from 'contentlayer/generated'

type Props = {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: Props) {
  const href = project.url || `/projects/${project.slug}`
  const isExternal = project.url?.startsWith('http')

  const CardContent = (
    <>
      <div className="relative aspect-[4/3]">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority={index < 3}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="text-sm opacity-70">{project.timeframe}</div>
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-sm opacity-80 line-clamp-2">{project.summary}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {(project.stack ?? []).slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-xs rounded-full border px-2 py-1 opacity-80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.04 * index }}
      className="group overflow-hidden rounded-2xl border bg-white dark:bg-neutral-950"
    >
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {CardContent}
        </a>
      ) : (
        <Link href={href} className="block">
          {CardContent}
        </Link>
      )}
    </motion.div>
  )
}
