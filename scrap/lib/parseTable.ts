import { type ClassData } from '../types';
import { createDefaultClassData } from './createDefaultClassData';
import { parseCSSProperties } from './parseCSSProperties';
import { updateClassData } from './updateClassData';

export function parseTable($: cheerio.Root): ClassData[] {
  const table = $('table.w-full');
  if (table.length === 0) {
    console.log('No table found');
    return [];
  }

  const classes: Record<string, ClassData> = {};

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

    classes[baseClass] =
      classes[baseClass] || createDefaultClassData(baseClass);

    const cssProperties = parseCSSProperties(properties);

    updateClassData(
      classes[baseClass],
      baseClass,
      value,
      cssProperties,
      properties,
    );
  });

  return Object.values(classes);
}
