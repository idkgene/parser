import * as cheerio from 'cheerio';
import { type TailwindUtility } from './types';
import { checkFeatureSupport } from './lib/checkFeatureSupport';
import { getArbitraryValueExample } from './lib/getArbitraryValueExample';
import { parseTable } from './lib/parseTable';

export async function scrapeTailwindClasses(
  url: string,
): Promise<TailwindUtility[]> {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const $ = cheerio.load(data);

    const featureSupport = checkFeatureSupport($);
    const arbitraryExample = getArbitraryValueExample($);

    const classes = parseTable($);

    return classes.map((cls) => {
      const utilityObject: TailwindUtility = {
        name: cls.name,
        cssProperties: cls.cssProperties,
        allowArbitrary: featureSupport.allowArbitrary,
        allowStates: featureSupport.allowStates,
        allowBreakpoints: featureSupport.allowBreakpoints,
        values: cls.values,
        convertToRem: cls.convertToRem,
      };

      if (cls.colorReference) utilityObject.themeKey = 'colors';
      if (cls.spacingReference) utilityObject.themeKey = 'spacing';
      if (arbitraryExample) utilityObject.arbitraryFormat = arbitraryExample;
      if (cls.keyframes) utilityObject.keyframes = cls.keyframes;
      if (Object.keys(cls.complexProperties).length > 0)
        utilityObject.complexProperties = cls.complexProperties;
      if (cls.dependencies.length > 0)
        utilityObject.dependencies = cls.dependencies;

      return utilityObject;
    });
  } catch (error) {
    console.error('Error scraping Tailwind classes:', error);
    return [];
  }
}
