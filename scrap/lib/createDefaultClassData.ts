import { type ClassData } from '../types';

export function createDefaultClassData(name: string): ClassData {
  return {
    name,
    cssProperties: new Map(),
    values: new Map(),
    allowArbitrary: false,
    allowStates: false,
    allowBreakpoints: false,
    convertToRem: false,
    complexProperties: new Map(),
    dependencies: new Set(),
    keyframes: undefined,
    colorReference: false,
    spacingReference: false,
    arbitraryFormat: undefined,
  };
}
