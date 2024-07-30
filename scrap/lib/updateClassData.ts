import { type ClassData } from '../types';

export function updateClassData(
  classData: ClassData,
  baseClass: string,
  value: string,
  cssProperties: Record<string, string>,
  rawProperties: string,
): void {
  const [subCategory, ...rest] = value.split('-');
  const subValue = rest.join('-');

  if (classData.subCategories && classData.subCategories[subCategory]) {
    updateSubCategoryData(
      classData.subCategories[subCategory],
      subValue,
      cssProperties,
      rawProperties,
    );
  } else if (['scroll', 'bg', 'text'].includes(baseClass)) {
    updateComplexProperties(classData, value, cssProperties);
  } else {
    // Если подкатегории нет, обновляем основной объект
    Object.assign(classData.cssProperties, cssProperties);
    classData.values[value || 'DEFAULT'] = cssProperties;
  }

  if (rawProperties.includes('@keyframes')) {
    classData.keyframes = rawProperties;
  }

  classData.dependencies = rawProperties.match(/var\(--tw-[^)]+\)/g) || [];

  if (['bg', 'text', 'border'].includes(baseClass)) {
    classData.colorReference = value;
  }

  if (['p', 'm', 'gap', 'space'].includes(baseClass)) {
    classData.spacingReference = value;
  }

  classData.convertToRem = Object.values(cssProperties).some((val) =>
    val.includes('rem'),
  );
}

function updateSubCategoryData(
  subCategory: Omit<ClassData, 'name' | 'subCategories'>,
  value: string,
  cssProperties: Record<string, string>,
  rawProperties: string,
): void {
  Object.assign(subCategory.cssProperties, cssProperties);
  subCategory.values[value || 'DEFAULT'] = cssProperties;

  if (rawProperties.includes('@keyframes')) {
    subCategory.keyframes = rawProperties;
  }

  subCategory.dependencies = rawProperties.match(/var\(--tw-[^)]+\)/g) || [];

  subCategory.convertToRem = Object.values(cssProperties).some((val) =>
    val.includes('rem'),
  );
}

export function updateComplexProperties(
  classData: ClassData,
  value: string,
  cssProperties: Record<string, string>,
): void {
  const [subProperty, ...subValueParts] = value.split('-');
  const subValue = subValueParts.join('-');

  classData.complexProperties[subProperty] = classData.complexProperties[
    subProperty
  ] || {
    cssProperties: {},
    values: {},
  };

  Object.assign(
    classData.complexProperties[subProperty].cssProperties,
    cssProperties,
  );
  classData.complexProperties[subProperty].values[subValue || 'DEFAULT'] =
    cssProperties;
}
