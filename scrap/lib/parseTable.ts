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

    if (!classes[baseClass]) {
      classes[baseClass] = createDefaultClassData(baseClass);
    }

    const cssProperties = parseCSSProperties(properties);

    updateClassData(
      classes[baseClass],
      baseClass,
      value,
      cssProperties,
      properties,
    );
  });

  // Объединяем классы с одинаковым именем
  const mergedClasses: Record<string, ClassData> = {};
  Object.values(classes).forEach((cls) => {
    if (!mergedClasses[cls.name]) {
      mergedClasses[cls.name] = cls;
    } else {
      // Если класс с таким именем уже существует, объединяем свойства
      Object.assign(mergedClasses[cls.name].cssProperties, cls.cssProperties);
      Object.assign(mergedClasses[cls.name].values, cls.values);
      if (cls.colorReference)
        mergedClasses[cls.name].colorReference = cls.colorReference;
      if (cls.spacingReference)
        mergedClasses[cls.name].spacingReference = cls.spacingReference;
      if (cls.keyframes) mergedClasses[cls.name].keyframes = cls.keyframes;
      Object.assign(
        mergedClasses[cls.name].complexProperties,
        cls.complexProperties,
      );
      mergedClasses[cls.name].dependencies = [
        ...new Set([
          ...mergedClasses[cls.name].dependencies,
          ...cls.dependencies,
        ]),
      ];
      mergedClasses[cls.name].convertToRem =
        mergedClasses[cls.name].convertToRem || cls.convertToRem;
    }
  });

  return Object.values(mergedClasses);
}
