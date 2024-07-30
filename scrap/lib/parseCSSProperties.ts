export function parseCSSProperties(properties: string): Record<string, string> {
  return properties
    .split(';')
    .filter((prop) => prop.includes(':'))
    .reduce(
      (acc, prop) => {
        const [property, value] = prop.split(':').map((s) => s.trim());
        acc[property] = value;
        return acc;
      },
      {} as Record<string, string>,
    );
}
