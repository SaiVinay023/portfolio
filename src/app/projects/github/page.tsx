import RepoGroups from '@/components/github/RepoGroups'

export const metadata = {
  title: 'GitHub Repos',
  description: 'Public repositories grouped by career path',
}

export default function GitHubProjectsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">GitHub Projects</h1>
        <p className="opacity-80">
          Live list of my public repositories grouped by career path. Click any card to open it on GitHub.
        </p>
      </header>
      {/* Server component that fetches and groups */}
      <RepoGroups />
    </section>
  )
}
