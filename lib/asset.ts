// Prefix local public-folder paths with the deploy basePath.
// Next.js does NOT auto-prepend basePath to <Image src="/..."> when
// output: "export" + unoptimized: true, so we do it ourselves.
// Only use for paths inside /public — pass http(s) URLs through unchanged.
export const basePath =
  process.env.NODE_ENV === "production" ? "/-viqtory-prototype" : "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  if (!path.startsWith("/")) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}
