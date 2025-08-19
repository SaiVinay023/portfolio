import type { Repo } from './github'

export type Category =
  | 'Full Stack'
  | 'Frontend'
  | 'Backend'
  | 'Data and AI'
  | 'Robotics'
  | 'DevOps'
  | 'Other'

// Hand overrides here if a repo should always go to a specific bucket
export const REPO_OVERRIDES: Record<string, Category> = {
  'BioSignal-Analyzer-EMG-Data-Analysis': 'Robotics',
  'unity-syntheticdata-generation': 'Robotics',
}

const MATCH: Record<Category, RegExp[]> = {
  'Full Stack': [/full[-\s]?stack/, /\bnext(js)?\b/, /\bmern\b/],
  Frontend: [/\bfrontend\b/, /\breact\b/, /\bvue\b/, /\bvite\b/, /\btailwind\b/],
  Backend: [/\bbackend\b/, /\bapi\b/, /\bexpress\b/, /\bnest(js)?\b/, /\bspring\b/],
  'Data and AI': [/\bml\b/, /\bai\b/, /\bpytorch\b/, /\btensorflow\b/, /\bmatlab\b/],
  Robotics: [/\brobotics\b/, /\bros2?\b/, /\byarp\b/, /\bunreal\b/, /\bunity\b/, /\bemg\b/],
  DevOps: [/\bdevops\b/, /\baws\b/, /\bdocker\b/, /\bk8s\b/, /\bgithub actions\b/],
  Other: [],
}

const LANG_HINT: Partial<Record<Category, string[]>> = {
  Frontend: ['TypeScript', 'JavaScript'],
  Backend: ['Java', 'Go', 'C#', 'Python'],
  'Data and AI': ['Python', 'MATLAB', 'R'],
  Robotics: ['C++', 'MATLAB'],
}

export function categorizeRepo(repo: Repo): Category {
  if (REPO_OVERRIDES[repo.name]) return REPO_OVERRIDES[repo.name]

  const topics = (repo.topics || []).map((t) => t.toLowerCase()).join(' ')
  const text = `${repo.name} ${repo.description ?? ''} ${topics}`.toLowerCase()
  const lang = repo.language || ''

  // Topic or text keyword match
  for (const [cat, patterns] of Object.entries(MATCH) as [Category, RegExp[]][]) {
    if (patterns.some((re) => re.test(text))) return cat
  }

  // Language hint
  for (const [cat, langs] of Object.entries(LANG_HINT) as [Category, string[]][]) {
    if (langs.includes(lang)) return cat
  }

  return 'Other'
}
