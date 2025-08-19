import { fetchPublicRepos } from '@/lib/github'
import { categorizeRepo, type Category } from '@/lib/repo-categories'
import RepoCard from './RepoCard'

export default async function RepoGroups() {
  const repos = await fetchPublicRepos()

  const groups = new Map<Category, ReturnType<typeof repos.filter>>()
  for (const r of repos) {
    const cat = categorizeRepo(r)
    if (!groups.has(cat)) groups.set(cat, [])
    groups.get(cat)!.push(r)
  }

  const order: Category[] = [
    'Full Stack',
    'Frontend',
    'Backend',
    'Data and AI',
    'Robotics',
    'DevOps',
    'Other',
  ]

  return (
    <section className="space-y-10">
      {order
        .filter((c) => groups.get(c)?.length)
        .map((cat) => (
          <div key={cat} className="space-y-4">
            <h2 className="text-xl font-semibold">{cat}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groups.get(cat)!.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        ))}
    </section>
  )
}
