import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computed = {
  readingTime: { type: "json", resolve: (doc: any) => readingTime(doc.body.raw) },
  url: { type: "string", resolve: (doc: any) => `/${doc._raw.sourceFileDir}/${doc._raw.flattenedPath}` },
};

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    canonical: { type: "string" },
  },
  computedFields: computed,
}));

export const Book = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: `books/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    author: { type: "string", required: true },
    noteSummary: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields: computed,
}));

export const Video = defineDocumentType(() => ({
  name: "Video",
  filePathPattern: `videos/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    platform: { type: "string", required: true },
    url: { type: "string", required: true },
    duration: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
    publishedAt: { type: "date" },
  },
  computedFields: computed,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Article, Book, Video],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
});
