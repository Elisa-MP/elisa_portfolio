import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    stack: z.array(z.string()),
    desc: z.string(),
    img: z.string(),
    alt: z.string(),
    status: z.enum(["complete", "wip"]),
  })
});

export const collections = { projects };