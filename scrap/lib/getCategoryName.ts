export function getCategoryName(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 1]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
