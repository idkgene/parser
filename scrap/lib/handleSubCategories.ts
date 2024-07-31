import type { ClassData } from '../types';

export function handleSubCategories(classData: ClassData): void {
  if (classData.subCategories) {
    for (const [subCategoryName, subCategoryData] of Object.entries(
      classData.subCategories,
    )) {
      classData.complexProperties[subCategoryName] = {
        cssProperties: subCategoryData.cssProperties,
        values: subCategoryData.values,
      };
    }
    delete classData.subCategories;
  }
}
