import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import wikiLinkPlugin from '@portaljs/remark-wiki-link';
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [
      [wikiLinkPlugin, {
        hrefTemplate: (permalink) => `/notes/${permalink}`
      }]
    ],
  },
});
