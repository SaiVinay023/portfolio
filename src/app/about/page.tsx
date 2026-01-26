'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data/profile'

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/profile/avatar.jpg"
          alt={profile.name}
          width={180}
          height={180}
          className="rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-lg">{profile.title}</p>
          <div className="mt-4 flex gap-4">
            <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
              <Mail className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-300" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-300" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="grid md:grid-cols-4 gap-6 text-center">
        {profile.stats?.map((stat) => (
          <div key={stat.label} className="p-4 rounded-xl border shadow-sm bg-neutral-100 dark:bg-neutral-800">
            <h3 className="text-xl font-semibold">{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Philosophy / Mission</h2>
        <p className="leading-relaxed">{profile.mission}</p>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Languages</h2>
        <div className="flex gap-3 flex-wrap">
          {(profile.languages ?? ['English', 'Telugu', 'Hindi']).map((lang) => (
            <span
              key={lang}
              className="px-3 py-1 text-sm rounded-full border bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* Skills */}
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

      {/* Footer */}
      <footer className="text-center text-neutral-600 dark:text-neutral-400 text-sm">
        © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
      </footer>
    </section>
  )
}
