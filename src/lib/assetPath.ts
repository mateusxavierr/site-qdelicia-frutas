/** Prefixo para GitHub Pages (`BASE_PATH=/nome-do-repo`). Em dev fica vazio. */
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
