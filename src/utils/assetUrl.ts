/** Resolves public asset paths for Vite `base` (e.g. GitHub Pages at /repo-name/). */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
