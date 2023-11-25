// contentlayer.config.ts
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import { readFileSync } from 'fs';
// import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType:"mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    tag:{
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: 'string',
      require: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: 'poimandres',
  keepBackground: true,
};

/** @type {import('rehype-autolink-headings').Options} */
const autolinkHeadingOptions = {
  properties:{
    className: ["anchor"],
  },
}
export default makeSource({ 
   contentDirPath: "posts",
   documentTypes: [Post],
   mdx: {
    remarkPlugins: [
      [remarkGfm],
      [remarkToc],
    ],
    rehypePlugins: [
      [rehypePrettyCode, prettyCodeOptions],
      [rehypeAutolinkHeadings, autolinkHeadingOptions],
      [rehypeSlug],
    ],
   }
});