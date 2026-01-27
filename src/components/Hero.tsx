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
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          I build fast, reliable software that scales
        </h1>
        <p className="max-w-2xl text-lg opacity-80 leading-relaxed">
          Full stack focus on TypeScript, React, and Node with PostgreSQL. I deliver clean APIs, real time features, cloud deployments, and strong testing.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link 
            href="/projects/github" 
            className="px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-medium text-center transition-all hover:opacity-90 active:scale-95"
          >
            View projects
          </Link>
          <Link 
            href="/about" 
            className="px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 font-medium text-center transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 active:scale-95"
          >
            About me
          </Link>
          <Link 
            href="/journey" 
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-center hover:shadow-lg transition-all active:scale-95 shadow-md"
          >
            My Journey →
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
            'radial-gradient(40% 60% at 50% 50%, rgba(16,185,129,.15), transparent 70%)'
        }}
      />
    </section>
  )
}
