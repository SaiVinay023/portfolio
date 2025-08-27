// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var Project = defineDocumentType(() => ({
  name: "Project",
  // must be a non-empty string
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    timeframe: { type: "string", required: true },
    role: { type: "string", required: true },
    team: { type: "string" },
    stack: { type: "list", of: { type: "string" } },
    summary: { type: "string", required: true },
    impact: { type: "list", of: { type: "string" } },
    cover: { type: "string", required: true },
    order: { type: "number" },
    url: { type: "string" }
  }
}));
var Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: "experience/*.mdx",
  contentType: "mdx",
  fields: {
    company: { type: "string", required: true },
    role: { type: "string", required: true },
    location: { type: "string", required: true },
    start: { type: "string", required: true },
    end: { type: "string", required: true },
    stack: { type: "list", of: { type: "string" } },
    order: { type: "number" }
  }
}));
var Research = defineDocumentType(() => ({
  name: "Research",
  filePathPattern: "research/*.mdx",
  contentType: "mdx",
  fields: {
    org: { type: "string", required: true },
    role: { type: "string", required: true },
    location: { type: "string", required: true },
    start: { type: "string", required: true },
    end: { type: "string", required: true },
    project: { type: "string", required: true },
    stack: { type: "list", of: { type: "string" } },
    order: { type: "number" }
  }
}));
var Education = defineDocumentType(() => ({
  name: "Education",
  filePathPattern: "education/*.mdx",
  contentType: "mdx",
  fields: {
    school: { type: "string", required: true },
    degree: { type: "string", required: true },
    location: { type: "string", required: true },
    graduation: { type: "string", required: true },
    order: { type: "number" }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Experience, Research, Education],
  // ensure none are undefined
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  },
  // you can keep this true to silence the alias warning, but the tsconfig alias is already set
  disableImportAliasWarning: true
});
export {
  Education,
  Experience,
  Project,
  Research,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-FOX5HLEG.mjs.map
