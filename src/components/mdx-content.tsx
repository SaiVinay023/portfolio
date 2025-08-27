// src/components/mdx-content.tsx
'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

type MDXContentProps = {
  code: string
  // Map MDX element names (e.g., 'a', 'Image', custom components) to React components
  components?: Record<string, React.ComponentType<any>>
}

export function MDXContent({ code, components = {} }: MDXContentProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
