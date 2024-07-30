export function checkFeatureSupport($: cheerio.CheerioAPI) {
  return {
    allowArbitrary: $('#arbitrary-values').length > 0,
    allowStates: $('#hover-focus-and-other-states').length > 0,
    allowBreakpoints: $('#breakpoints-and-media-queries').length > 0,
  };
}

export function getArbitraryValueExample($: cheerio.CheerioAPI) {
  const arbitrarySection = $('#arbitrary-values');
  if (arbitrarySection.length) {
    const codeBlock = arbitrarySection.next('pre');
    if (codeBlock.length) {
      const highlightedCode = codeBlock.find('.code-highlight');
      if (highlightedCode.length) {
        return highlightedCode.text().trim();
      }
    }
  }
  return null;
}

export function parseTable($: cheerio.CheerioAPI) {
  const table = $('table.w-full');
  if (table.length === 0) {
    console.log('No table found');
    return [];
  }

  const classes: Record<string, any> = {};

  table.find('tbody tr').each((_, row) => {
    const cells = $(row).find('td');
    if (cells.length >= 2) {
      const className = cells.eq(0).text().trim();
      let properties = cells.eq(1).text().trim();

      properties = properties.replace(/\/\*.*?\*\//g, '').trim();

      const [baseClass, ...rest] = className.split('-');
      const value = rest.join('-');

      if (!classes[baseClass]) {
        classes[baseClass] = {
          name: baseClass,
          cssProperties: {},
          values: {},
          colorReference: null,
          spacingReference: null,
          keyframes: null,
          complexProperties: {},
          dependencies: [],
          convertToRem: false,
        };
      }

      const cssProperties: Record<string, string> = {};
      properties
        .split(';')
        .filter((prop) => prop.includes(':'))
        .forEach((prop) => {
          const [property, propValue] = prop.split(':').map((s) => s.trim());
          cssProperties[property] = propValue;
        });

      if (['scroll', 'bg', 'text'].includes(baseClass)) {
        const subProperty = rest[0];
        const subValue = rest.slice(1).join('-');
        if (!classes[baseClass].complexProperties[subProperty]) {
          classes[baseClass].complexProperties[subProperty] = {
            cssProperties: {},
            values: {},
          };
        }
        classes[baseClass].complexProperties[subProperty].cssProperties =
          cssProperties;
        classes[baseClass].complexProperties[subProperty].values[
          subValue || 'DEFAULT'
        ] = cssProperties;
      } else {
        Object.assign(classes[baseClass].cssProperties, cssProperties);
        classes[baseClass].values[value || 'DEFAULT'] = cssProperties;
      }

      if (properties.includes('@keyframes')) {
        classes[baseClass].keyframes = properties;
      }

      if (properties.includes('var(--tw-')) {
        classes[baseClass].dependencies =
          properties.match(/var\(--tw-[^)]+\)/g) || [];
      }

      if (['bg', 'text', 'border'].includes(baseClass)) {
        classes[baseClass].colorReference = value;
      }

      if (['p', 'm', 'gap', 'space'].includes(baseClass)) {
        classes[baseClass].spacingReference = value;
      }

      if (Object.values(cssProperties).some((val) => val.includes('rem'))) {
        classes[baseClass].convertToRem = true;
      }
    }
  });

  return Object.values(classes);
}

export function getCategoryName(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 1]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
