import * as cheerio from 'cheerio';

export function getArbitraryValueExample($: cheerio.Root): string | null {
  const arbitrarySection = $('#arbitrary-values');
  if (arbitrarySection.length) {
    const codeBlock = arbitrarySection.nextAll('pre').first();
    if (codeBlock.length) {
      const highlightedCode = codeBlock.find('.code-highlight');
      if (highlightedCode.length) {
        const text = highlightedCode.text().trim();
        const match = text.match(/\w+-\[.*?\]/);
        if (match) {
          const [_, prefix, suffix] = match[0].match(/(\w+-)\[(.*?)\]/) || [];
          return `${prefix}[]`;
        }
      }
    }
  }
  return null;
}
