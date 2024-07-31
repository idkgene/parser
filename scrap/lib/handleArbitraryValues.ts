import type { ClassData } from '../types';

function handleArbitraryValues(classData: ClassData): void {
  if (classData.allowArbitrary) {
    classData.arbitraryFormat = `${classData.name}-[<value>]`;
  }
}

export { handleArbitraryValues };
