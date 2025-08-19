'use client'
import { useMDXComponent } from 'next-contentlayer/hooks'
export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <div className="prose dark:prose-invert max-w-none"><Component /></div>
}
