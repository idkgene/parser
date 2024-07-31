import type { CategoryName, ClassData } from '../types';
import { logger } from './logger';

export function analyzeData(
  results: { category: CategoryName; classes: ClassData[] }[],
): void {
  const totalClasses = results.reduce(
    (sum, { classes }) => sum + classes.length,
    0,
  );
  const classesPerCategory = results.map(({ category, classes }) => ({
    category,
    count: classes.length,
  }));
  const mostCommonProperties = getMostCommonProperties(results);

  logger.info(`Total classes scraped: ${totalClasses}`);
  logger.info('Classes per category:', classesPerCategory);
  logger.info('Most common CSS properties:', mostCommonProperties);
}

function getMostCommonProperties(
  results: { category: CategoryName; classes: ClassData[] }[],
): { property: string; count: number }[] {
  const propertyCount = new Map<string, number>();

  results.forEach(({ classes }) => {
    classes.forEach((classData) => {
      classData.cssProperties.forEach((_, property) => {
        propertyCount.set(property, (propertyCount.get(property) || 0) + 1);
      });
    });
  });

  return Array.from(propertyCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([property, count]) => ({ property, count }));
}

export function generateReport(
  results: { category: CategoryName; classes: ClassData[] }[],
): string {
  const totalClasses = results.reduce(
    (sum, { classes }) => sum + classes.length,
    0,
  );
  const classesPerCategory = results.map(({ category, classes }) => ({
    category,
    count: classes.length,
  }));
  const mostCommonProperties = getMostCommonProperties(results);

  let report = `Tailwind CSS Scraping Report\n`;
  report += `===========================\n\n`;
  report += `Total classes scraped: ${totalClasses}\n\n`;
  report += `Classes per category:\n`;
  classesPerCategory.forEach(({ category, count }) => {
    report += `  ${category}: ${count}\n`;
  });
  report += `\nMost common CSS properties:\n`;
  mostCommonProperties.forEach(({ property, count }, index) => {
    report += `  ${index + 1}. ${property}: ${count}\n`;
  });

  return report;
}
