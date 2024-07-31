import type { ClassData } from '../types';

export function validateAndNormalizeClassData(classData: ClassData): ClassData {
  classData.cssProperties = new Map(
    Array.from(classData.cssProperties.entries()).filter(([_, v]) => v !== ''),
  );

  classData.values = new Map(
    Array.from(classData.values.entries()).map(([k, v]) => [
      k,
      new Map(Array.from(v.entries()).filter(([_, vv]) => vv !== '')),
    ]),
  );

  classData.complexProperties = new Map(
    Array.from(classData.complexProperties.entries()).filter(
      ([_, v]) => v.cssProperties.size > 0 || v.values.size > 0,
    ),
  );

  return classData;
}