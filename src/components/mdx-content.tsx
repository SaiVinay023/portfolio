// src/components/mdx-content.tsx
'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
//import type { MDXComponents } from 'mdx/types'

type Props = { code: string; components?: Record<string, React.ComponentType<any>> }

export function MDXContent({ code, components = {} }: Props) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
