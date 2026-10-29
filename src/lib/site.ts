import fs from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

export function url(destino = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${destino.replace(/^\//, '')}`;
}

function arquivoPublico(nome: string): string {
  return path.join(process.cwd(), 'public', nome);
}

export function existeEmPublic(nome: string): boolean {
  return fs.existsSync(arquivoPublico(nome));
}

export function tamanhoKB(nome: string): number | undefined {
  if (!existeEmPublic(nome)) return undefined;
  return Math.round(fs.statSync(arquivoPublico(nome)).size / 1024);
}

export function pendente(texto?: string): boolean {
  return !texto || texto.trim().startsWith('TODO');
}

export function paragrafos(texto: string): string[] {
  return texto
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);
}

export type Projeto = CollectionEntry<'projects'>;

export async function projetosOrdenados(): Promise<Projeto[]> {
  const todos = await getCollection('projects');
  return todos.sort((a, b) => a.data.ordem - b.data.ordem);
}

export function publicado(p: Projeto): boolean {
  return p.data.status === 'publicado';
}

export function indice(n: number): string {
  return `/${String(n).padStart(2, '0')}`;
}
