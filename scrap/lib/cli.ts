import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { main } from '../main';

yargs(hideBin(process.argv))
  .command('scrape', 'Scrape Tailwind CSS classes', {}, main)
  .option('concurrency', {
    alias: 'c',
    type: 'number',
    description: 'Number of concurrent scraping operations',
    default: 3,
  })
  .option('output', {
    alias: 'o',
    type: 'string',
    description: 'Output directory',
    default: './output',
  })
  .parse();
