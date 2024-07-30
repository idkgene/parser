import { type ClassData } from '../types';

export function createDefaultClassData(name: string): ClassData {
  return {
    name,
    cssProperties: {},
    values: {},
    colorReference: null,
    spacingReference: null,
    keyframes: null,
    complexProperties: {},
    subCategories: {},
    dependencies: [],
    convertToRem: false,
  };
}
