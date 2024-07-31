import * as cheerio from 'cheerio';
import { type ClassData, type CSSPropertyValue } from './types';
import { createDefaultClassData } from './lib/createDefaultClassData';
import { updateClassData } from './lib/updateClassData';

export function parseHtml(html: string): cheerio.Root {
  return cheerio.load(html);
}

export function parseTable($: cheerio.Root): ClassData[] {
  const table = $('table.w-full');
  if (table.length === 0) {
    throw new Error('No table found');
  }

  const classes = new Map<string, ClassData>();

  table.find('tbody tr').each((_, row) => {
    const [classNameCell, propertiesCell] = $(row).find('td');
    if (!classNameCell || !propertiesCell) return;

    const className = $(classNameCell).text().trim();
    const properties = $(propertiesCell)
      .text()
      .trim()
      .replace(/\/\*.*?\*\//g, '')
      .trim();

    const [baseClass, ...rest] = className.split('-');
    const value = rest.join('-');

    let classData = classes.get(baseClass) || createDefaultClassData(baseClass);
    updateClassData(classData, value, parseCSSProperties(properties));
    classes.set(baseClass, classData);
  });

  return Array.from(classes.values());
}

function parseCSSProperties(properties: string): CSSPropertyValue[] {
  return properties
    .split(';')
    .filter((prop) => prop.includes(':'))
    .map((prop) => {
      const [property, value] = prop.split(':').map((s) => s.trim());
      return { property, value };
    });
}
