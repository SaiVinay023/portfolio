import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { allProjects } from '.contentlayer/generated'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    timeframe: { type: 'string', required: true },
    role: { type: 'string', required: true },
    team: { type: 'string' },
    stack: { type: 'list', of: { type: 'string' } },
    summary: { type: 'string', required: true },
    impact: { type: 'list', of: { type: 'string' } },
    cover: { type: 'string', required: true },
    order: { type: 'number' },
  },
  computedFields: {
    //url: { type: 'string', resolve: (p) => `/projects/${p.slug}` },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}))

export const Experience = defineDocumentType(() => ({
  name: 'Experience',
  filePathPattern: `experience/*.mdx`,
  contentType: 'mdx',
  fields: {
    company: { type: 'string', required: true },
    role: { type: 'string', required: true },
    location: { type: 'string', required: true },
    start: { type: 'string', required: true }, // ex: May 2023
    end: { type: 'string', required: true },   // ex: Nov 2023 or Present
    stack: { type: 'list', of: { type: 'string' } },
    order: { type: 'number' },
  },
}))

export const Research = defineDocumentType(() => ({
  name: 'Research',
  filePathPattern: `research/*.mdx`,
  contentType: 'mdx',
  fields: {
    org: { type: 'string', required: true },
    role: { type: 'string', required: true },
    location: { type: 'string', required: true },
    start: { type: 'string', required: true },
    end: { type: 'string', required: true },
    project: { type: 'string', required: true },
    stack: { type: 'list', of: { type: 'string' } },
    order: { type: 'number' },
  },
}))

export const Education = defineDocumentType(() => ({
  name: 'Education',
  filePathPattern: `education/*.mdx`,
  contentType: 'mdx',
  fields: {
    school: { type: 'string', required: true },
    degree: { type: 'string', required: true },
    location: { type: 'string', required: true },
    graduation: { type: 'string', required: true }, // ex: Oct 2024
    order: { type: 'number' },
  },
}))

// contentlayer.config.ts (inside makeSource({...}))
export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Experience, Research, Education],
  mdx: { /* your plugins */ },
  disableImportAliasWarning: true
})

