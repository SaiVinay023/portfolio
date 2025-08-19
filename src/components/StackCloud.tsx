'use client'

import { TechIcon, TECH } from './TechIcons'

const STACK: (keyof typeof TECH)[] = [
  'Nextjs','React','TypeScript','Node','NestJS','Express',
  'PostgreSQL','MongoDB','Prisma','Redis','RabbitMQ',
  'Docker','AWS','GitHub Actions','Jest','Supabase','LangChain'
]

export default function StackCloud() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Tech stack</h2>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {STACK.map((k) => <TechIcon key={k} name={k} />)}
      </div>
    </section>
  )
}
