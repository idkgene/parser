import { type ClassData, type CSSPropertyValue } from '../types';

export function updateClassData(
  classData: ClassData,
  value: string,
  cssProperties: CSSPropertyValue[], // Change this to an array of CSSPropertyValue
): void {
  cssProperties.forEach(({ property, value: propValue }) => {
    classData.cssProperties.set(property, propValue);

    if (!classData.values.has(value)) {
      classData.values.set(value, new Map());
    }
    classData.values.get(value)!.set(property, propValue);
  });

  updateComplexProperties(classData, value, cssProperties);
  updateMetadata(classData, cssProperties);
}

function updateComplexProperties(
  classData: ClassData,
  value: string,
  cssProperties: CSSPropertyValue[],
): void {
  if (['scroll', 'bg', 'text'].includes(classData.name)) {
    const [subProperty, ...subValueParts] = value.split('-');
    const subValue = subValueParts.join('-');

    if (!classData.complexProperties.has(subProperty)) {
      classData.complexProperties.set(subProperty, {
        cssProperties: new Map(),
        values: new Map(),
      });
    }

    const complexProp = classData.complexProperties.get(subProperty)!;
    cssProperties.forEach(({ property, value }) => {
      complexProp.cssProperties.set(property, value);
      if (!complexProp.values.has(subValue)) {
        complexProp.values.set(subValue, new Map());
      }
      complexProp.values.get(subValue)!.set(property, value);
    });
  }
}

function updateMetadata(
  classData: ClassData,
  cssProperties: CSSPropertyValue[],
): void {
  const rawProperties = cssProperties
    .map(({ property, value }) => `${property}: ${value}`)
    .join('; ');

  if (rawProperties.includes('@keyframes')) {
    classData.keyframes = rawProperties;
  }

  cssProperties.forEach(({ value }) => {
    const deps = value.match(/var\(--tw-[^)]+\)/g) || [];
    deps.forEach((dep) => classData.dependencies.add(dep));
  });

  if (['bg', 'text', 'border'].includes(classData.name)) {
    classData.colorReference = true;
  }

  if (['p', 'm', 'gap', 'space'].includes(classData.name)) {
    classData.spacingReference = true;
  }

  classData.convertToRem = cssProperties.some(({ value }) =>
    value.includes('rem'),
  );
}
