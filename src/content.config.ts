import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    cliente: z.string(),
    descricao: z.string(),
    stack: z.array(z.string()).min(1),
    ano: z.string(),
    ordem: z.number().int(),
    status: z.enum(['publicado', 'em-construcao']).default('publicado'),
    problema: z.string().optional(),
    oQueFiz: z.string().optional(),
    resultado: z.string().optional(),
    repo: z.url().optional(),
    demo: z.url().optional(),
    galeriaLegenda: z.string().optional(),
  }),
});

export const collections = { projects };
