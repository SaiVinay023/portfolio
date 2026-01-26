'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Available for mid senior Software Developer roles
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          I build fast, reliable software that scales
        </h1>

        <p className="max-w-2xl text-lg opacity-80">
          Full stack focus on TypeScript, React, and Node with PostgreSQL. I deliver clean APIs, real time features, cloud deployments, and strong testing.
        </p>

        <div className="flex gap-3">
          <Link href="/projects" className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">
            View projects
          </Link>
          <Link href="/about" className="px-4 py-2 rounded-lg border">
            About me
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 -z-10 mx-auto mt-10 h-64 max-w-4xl blur-3xl opacity-50 dark:opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8 }}
        aria-hidden
        style={{
          background:
            'radial-gradient(40% 60% at 50% 50%, rgba(16,185,129,.25), transparent 70%)'
        }}
      />
    </section>
  )
}
