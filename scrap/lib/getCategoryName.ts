export function getCategoryName(url: string): string {
  return (
    url
      .split('/')
      .pop()
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()) || ''
  );
}
