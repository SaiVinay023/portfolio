'use client'

import { profile } from '@/data/profile'

export function Row({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium opacity-80">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
            <span key={x} className="px-3 py-1 text-xs rounded-full border bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700 shadow-sm">{x}</span>        ))}
      </div>
    </div>
  )
}

export default function SkillsMatrix() {
  const s = profile.skills
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Row title="Frontend" items={s.frontend} />
        <Row title="Backend" items={s.backend} />
        <Row title="Databases" items={s.databases} />
        <Row title="Cloud and DevOps" items={s.cloudDevops} />
        <Row title="Testing" items={s.testing} />
        <Row title="Tools" items={s.tools} />
      </div>
    </section>
  )
}
