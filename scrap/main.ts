import { scrapeCategory } from './lib/scrapeCategory';
import { type CategoryName, type ClassData } from './types';
import { urlsToScrape } from './lib/utils';
import pMap from 'p-map';
import fs from 'fs/promises';
import path from 'path';
import { performanceMonitor } from './lib/perfomance-monitor';
import { analyzeData, generateReport } from './lib/data-analyzer';
import { formatOutput, type FormattedOutput } from './lib/output-formatter';
import { compress } from './lib/compression';
import { validateAndNormalizeClassData } from './lib/validateAndNormalizeClassData';

export async function main() {
  performanceMonitor.startTimer('total-execution');

  const categories = Object.entries(urlsToScrape) as [CategoryName, string[]][];

  const results = await pMap(
    categories,
    async ([category, urls]) => {
      performanceMonitor.startTimer(`category-${category}`);
      const classes = await scrapeCategory(category, urls);
      performanceMonitor.logPerformance(`category-${category}`);
      return { category, classes };
    },
    { concurrency: 3 },
  );

  const processedResults = results.map(({ category, classes }) => ({
    category,
    classes: classes.map(validateAndNormalizeClassData),
  }));

  analyzeData(processedResults);
  const report = generateReport(processedResults);
  const formattedOutput = formatOutput(processedResults);

  await saveResults(formattedOutput, report);

  performanceMonitor.logPerformance('total-execution');
  console.log('Scraping completed successfully!');
}

async function saveResults(formattedOutput: FormattedOutput[], report: string) {
  const outputDir = path.join(__dirname, 'output');
  await fs.mkdir(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, 'tailwind-classes.json');
  await fs.writeFile(outputPath, JSON.stringify(formattedOutput, null, 2));
  console.log(`Results saved to ${outputPath}`);

  const compressedOutputPath = path.join(outputDir, 'tailwind-classes.json.gz');
  await compress(JSON.stringify(formattedOutput), compressedOutputPath);
  console.log(`Compressed results saved to ${compressedOutputPath}`);

  const reportPath = path.join(outputDir, 'report.txt');
  await fs.writeFile(reportPath, report);
  console.log(`Report saved to ${reportPath}`);
}

main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
