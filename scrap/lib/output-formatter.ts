import { type ClassData, type CategoryName } from '../types';

export interface FormattedOutput {
  category: CategoryName;
  classes: {
    name: string;
    properties: { [key: string]: string };
    values: { [key: string]: { [key: string]: string } };
    metadata: {
      allowArbitrary: boolean;
      allowStates: boolean;
      allowBreakpoints: boolean;
      convertToRem: boolean;
      colorReference: boolean;
      spacingReference: boolean;
    };
  }[];
}

export function formatOutput(
  results: { category: CategoryName; classes: ClassData[] }[],
): FormattedOutput[] {
  return results.map(({ category, classes }) => ({
    category,
    classes: classes.map(formatClass),
  }));
}

function formatClass(classData: ClassData): FormattedOutput['classes'][0] {
  return {
    name: classData.name,
    properties: Object.fromEntries(classData.cssProperties),
    values: Object.fromEntries(
      Array.from(classData.values.entries()).map(([key, value]) => [
        key,
        Object.fromEntries(value),
      ]),
    ),
    metadata: {
      allowArbitrary: classData.allowArbitrary,
      allowStates: classData.allowStates,
      allowBreakpoints: classData.allowBreakpoints,
      convertToRem: classData.convertToRem,
      colorReference: classData.colorReference || false,
      spacingReference: classData.spacingReference || false,
    },
  };
}
