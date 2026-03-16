const CDN_BASE_URL =
  process.env.NEXT_PUBLIC_CDN_URL ||
  "https://pub-f0d016c1f8e442f9985c0032eac8cdb9.r2.dev";

export function cdnUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${CDN_BASE_URL}${path}`;
}
