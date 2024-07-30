import { urlsToScrape } from './lib/utils';
import { scrapeTailwindClasses } from './scraper';
import type { TailwindUtility } from './types';
import * as fs from 'fs';

async function scrapeAllUrls() {
  const allClasses: TailwindUtility[] = [];

  for (const url of urlsToScrape) {
    console.log(`Scraping: ${url}`);
    const classes = await scrapeTailwindClasses(url);
    allClasses.push(...classes);
  }

  console.log(`Total classes scraped: ${allClasses.length}`);
  fs.writeFileSync(
    'tailwind-classes.json',
    JSON.stringify(allClasses, null, 2),
  );
}

scrapeAllUrls().catch(console.error);
