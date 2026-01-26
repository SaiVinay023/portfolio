import Link from 'next/link'
import type { Repo } from '@/lib/github'

export default function RepoCard({ repo }: { repo: Repo }) {
  const updated = new Date(repo.pushed_at)
  return (
    <div className="rounded-2xl border p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <Link href={repo.html_url} className="font-medium hover:underline" target="_blank">
          {repo.name}
        </Link>
        <div className="text-xs rounded-full border px-2 py-1 opacity-80">
          {repo.language || 'n/a'}
        </div>
      </div>

      {repo.description ? (
        <p className="mt-2 text-sm opacity-80 line-clamp-2">{repo.description}</p>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs opacity-70">
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
        <span>Updated {updated.toLocaleDateString()}</span>
      </div>

      {repo.topics && repo.topics.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {repo.topics.slice(0, 6).map((t) => (
            <span key={t} className="text-[11px] rounded-full border px-2 py-1 opacity-80">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}
