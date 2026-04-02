import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    year: z.string(),
    status: z.string(),
    demoUrl: z.string().optional(),
    codeUrl: z.string().optional(),
    gradient: z.string(),
    icon: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    type: z.enum(['app', 'web']).default('web'),
  }),
});

export const collections = { projects };
