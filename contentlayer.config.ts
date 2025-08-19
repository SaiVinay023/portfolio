import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

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
    url: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc.slug || doc._raw.sourceFileName.replace(/\.mdx$/, ''),
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
    start: { type: 'string', required: true },
    end: { type: 'string', required: true },
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
    graduation: { type: 'string', required: true },
    order: { type: 'number' },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Experience, Research, Education],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
  disableImportAliasWarning: true,
})
