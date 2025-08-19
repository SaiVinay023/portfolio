export type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  topics?: string[]
  stargazers_count: number
  forks_count: number
  pushed_at: string
  archived?: boolean
  fork?: boolean
}

const USER = 'SaiVinay023'

export async function fetchPublicRepos(): Promise<Repo[]> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const res = await fetch(
    `https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`,
    { headers, next: { revalidate: 3600 } } // cache for 1h on the server
  )
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`)
  }
  const repos = (await res.json()) as Repo[]
  return repos
    .filter((r) => !r.fork && !r.archived)
    .map((r) => ({ ...r, topics: r.topics ?? [] }))
}
