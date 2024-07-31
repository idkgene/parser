import type { CSSPropertyValue } from '../types';

export function parseCSSProperties(properties: string): CSSPropertyValue[] {
  return properties
    .split(';')
    .filter((prop) => prop.includes(':'))
    .map((prop) => {
      const [property, value] = prop.split(':').map((s) => s.trim());
      return { property, value };
    });
}
