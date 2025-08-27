// src/components/TechIcons.tsx
'use client'

import * as React from 'react'
import {
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiNestjs, SiExpress,
  SiPostgresql, SiMongodb, SiPrisma, SiRedis, SiRabbitmq, SiDocker,
  SiGithubactions, SiJest, SiSupabase, SiLangchain, SiVuedotjs
} from 'react-icons/si'
import { Cloud } from 'lucide-react'

type IconProps = { size?: number | string }  // ← accept both

export const TECH: Record<string, React.ComponentType<IconProps>> = {
  Nextjs: SiNextdotjs,
  React: SiReact,
  Vue: SiVuedotjs,
  TypeScript: SiTypescript,
  Node: SiNodedotjs,
  NestJS: SiNestjs,
  Express: SiExpress,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  Redis: SiRedis,
  RabbitMQ: SiRabbitmq,
  Docker: SiDocker,
  'GitHub Actions': SiGithubactions,
  Jest: SiJest,
  LangChain: SiLangchain,
  // Wrap lucide icon so it matches the ComponentType<IconProps> shape
  AWS: ((props: IconProps) => <Cloud {...props} />) as React.ComponentType<IconProps>,
}

export function TechIcon({ name }: { name: keyof typeof TECH }) {
  const Icon = TECH[name]
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border p-3 hover:bg-neutral-50 dark:hover:bg-neutral-900">
      <Icon size={22} />
      <span className="text-xs opacity-80">{name}</span>
    </div>
  )
}
