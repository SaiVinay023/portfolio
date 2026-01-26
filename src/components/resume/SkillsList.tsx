'use client'

import { profile } from '@/data/profile'

export function SkillsList() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="space-y-6">
        {Object.entries(profile.skills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-2 capitalize">{category}</h3>
            <div className="flex gap-3 flex-wrap">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full border bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
