// @ts-check
import { defineConfig } from 'astro/config';
import remarkExternalLinks from 'remark-external-links';

export default defineConfig({
  site: 'https://pircher.tech',
  markdown: {
    remarkPlugins: [
      [
        remarkExternalLinks as any,
        { target: '_blank', rel: ['noopener', 'noreferrer'] }
      ]
    ]
  }
});
