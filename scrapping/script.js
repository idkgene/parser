(function() {
  'use strict';

  function parseTable() {
      const table = document.querySelector('table.w-full');
      if (!table) {
          console.log('No table found');
          return null;
      }

      const classes = {};
      const spacingClasses = [
      'inset', 'start', 'end', 'top', 'right', 'bottom', 'left',
      'gap', 'gap-x', 'gap-y',
      'p', 'px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl',
      'scroll-p', 'scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl',
      'm', 'mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml',
      'scroll-m', 'scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml',
      'w', 'size'
  ];

      const colorClasses = [
      'caret', 'accent', 'bg', 'border', 'divide', 'outline', 'ring', 'ring-offset', 'shadow', 'text', 'decoration', 'fill', 'stroke'
      ];

      const rows = table.querySelectorAll('tbody tr');

      rows.forEach(row => {
          const cells = row.querySelectorAll('td');
          if (cells.length >= 2) {
              let className = cells[0].textContent.trim();
              let properties = cells[1].textContent.trim();

              properties = properties.replace(/\/\*.*?\*\//g, '').trim();

              const [baseClass, ...rest] = className.split('-');
              const value = rest.join('-');

              if (spacingClasses.includes(baseClass) || spacingClasses.some(cls => baseClass.startsWith(cls + '-'))) {
                  classes[baseClass].spacingReference = value;
              }

              if (colorClasses.includes(baseClass)) {
                  const tailwindColors = ['inherit', 'current', 'transparent', 'black', 'white',
                                  'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange',
                                  'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan',
                                  'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];

                  if (tailwindColors.includes(value) || tailwindColors.some(color => value.startsWith(color + '-'))) {
                      classes[baseClass].colorReference = value;
                  }
              }

              if (!classes[baseClass]) {
                  classes[baseClass] = {
                      name: baseClass,
                      cssProperties: {},
                      allowArbitrary: false,
                      allowStates: false,
                      allowBreakpoints: false,
                      values: {},
                      colorReference: null,
                      spacingReference: null,
                      specialValues: {},
                      compositeValues: false,
                      convertToRem: false,
                      keyframes: null,
                      complexProperties: {},
                      dependencies: [],
                      valueVariations: null
                  };
              }

              const cssProperties = {};
              properties.split(';')
                  .filter(prop => prop.includes(':'))
                  .forEach(prop => {
                      const [property, propValue] = prop.split(':').map(s => s.trim());
                      cssProperties[property] = propValue;
                  });

              if (baseClass === 'scroll' || baseClass === 'bg' || baseClass === 'text') {
                  const subProperty = rest[0];
                  const subValue = rest.slice(1).join('-');
                  if (!classes[baseClass].complexProperties[subProperty]) {
                      classes[baseClass].complexProperties[subProperty] = {
                          cssProperties: {},
                          values: {}
                      };
                  }
                  classes[baseClass].complexProperties[subProperty].cssProperties = cssProperties;
                  classes[baseClass].complexProperties[subProperty].values[subValue || 'DEFAULT'] = cssProperties;
              } else {
                  Object.assign(classes[baseClass].cssProperties, cssProperties);
                  classes[baseClass].values[value || 'DEFAULT'] = cssProperties;
              }

              if (properties.includes('@keyframes')) {
                  classes[baseClass].keyframes = properties;
              }

              if (properties.includes('var(--tw-')) {
                  classes[baseClass].dependencies = properties.match(/var\(--tw-[^)]+\)/g) || [];
              }

              // Check for color references
              if (baseClass === 'bg' || baseClass === 'text' || baseClass === 'border') {
                  classes[baseClass].colorReference = value;
              }

              if (['p', 'm', 'gap', 'space'].includes(baseClass)) {
                  classes[baseClass].spacingReference = value;
              }

              if (Object.keys(cssProperties).length > 1) {
                  classes[baseClass].compositeValues = true;
              }

              if (Object.values(cssProperties).some(val => val.includes('rem'))) {
                  classes[baseClass].convertToRem = true;
              }

              if (['auto', 'full', 'screen'].includes(value)) {
                  classes[baseClass].specialValues[value] = cssProperties;
              }
          }
      });

      console.log(`Parsed ${Object.keys(classes).length} base classes`);
      return Object.values(classes);
  }

  function getCategoryName() {
      const h1 = document.querySelector('h1');
      return h1 ? h1.textContent.trim() : 'Unknown Category';
  }

  function checkFeatureSupport() {
      const arbitraryValues = document.getElementById('arbitrary-values');
      const statesHeader = document.getElementById('hover-focus-and-other-states');
      const breakpointsHeader = document.getElementById('breakpoints-and-media-queries');

      return {
          allowArbitrary: !!arbitraryValues,
          allowStates: !!statesHeader,
          allowBreakpoints: !!breakpointsHeader
      };
  }

  function getArbitraryValueExample() {
      const arbitrarySection = document.getElementById('arbitrary-values');
      if (arbitrarySection) {
          const codeBlock = arbitrarySection.nextElementSibling;
          if (codeBlock && codeBlock.tagName === 'PRE') {
              const highlightedCode = codeBlock.querySelector('.code-highlight');
              if (highlightedCode) {
                  return highlightedCode.textContent.trim();
              }
          }
      }
      return null;
  }

function processCurrentPage() {
  const classes = parseTable();
  if (classes && classes.length > 0) {
      const categoryName = getCategoryName();
      const featureSupport = checkFeatureSupport();
      const arbitraryExample = getArbitraryValueExample();

      const processedClasses = classes.map(cls => {
          const baseClass = cls.name;
          const utilityObject = {
              name: baseClass,
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
          if (Object.keys(cls.complexProperties).length > 0) utilityObject.complexProperties = cls.complexProperties;
          if (cls.dependencies.length > 0) utilityObject.dependencies = cls.dependencies;

          return utilityObject;
      });

      const content = `
/**
* ${categoryName}
* @see ${window.location.href}
*/
const tailwindMapping: TailwindUtility[] = [
${processedClasses.map(cls => `  {
  name: '${cls.name}',
  cssProperties: ${JSON.stringify(cls.cssProperties, null, 2)},
  allowArbitrary: ${cls.allowArbitrary},
  allowStates: ${cls.allowStates},
  allowBreakpoints: ${cls.allowBreakpoints},
  values: ${JSON.stringify(cls.values, null, 2)},
  convertToRem: ${cls.convertToRem}${cls.themeKey ? `,
  themeKey: '${cls.themeKey}'` : ''}${cls.arbitraryFormat ? `,
  arbitraryFormat: '${cls.arbitraryFormat}'` : ''}${cls.keyframes ? `,
  keyframes: ${JSON.stringify(cls.keyframes, null, 2)}` : ''}${cls.complexProperties ? `,
  complexProperties: ${JSON.stringify(cls.complexProperties, null, 2)}` : ''}${cls.dependencies ? `,
  dependencies: ${JSON.stringify(cls.dependencies, null, 2)}` : ''}
}`).join(',\n')}
];`;

      const blob = new Blob([content], {type: 'text/plain'});

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${categoryName.toLowerCase().replace(/\s+/g, '-')}.ts`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      console.log(`Processed: ${categoryName}`);
      alert(`Data for "${categoryName}" has been downloaded as a .ts file.`);
  } else {
      console.log('No classes found on this page');
      alert('No classes found on this page');
  }
}

  function addParseButton() {
      const button = document.createElement('button');
      button.textContent = 'Parse Tailwind Classes';
      button.style.position = 'fixed';
      button.style.top = '10px';
      button.style.right = '10px';
      button.style.zIndex = '9999';
      button.style.padding = '10px';
      button.style.backgroundColor = '#4CAF50';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.cursor = 'pointer';
      button.style.borderRadius = '5px';
      button.style.fontWeight = 'bold';
      button.addEventListener('click', processCurrentPage);
      document.body.appendChild(button);
      console.log('Parse button added');
  }

  setTimeout(addParseButton, 1000);
})();