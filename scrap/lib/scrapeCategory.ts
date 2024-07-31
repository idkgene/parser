import { fetchHtml } from '../fetcher';
import { parseHtml, parseTable } from '../parser';
import { getCachedData, setCachedData } from '../cache';
import { type ClassData, type CategoryName } from '../types';
import { CONFIG } from '../config';
import pMap from 'p-map';
import { handleError } from './error-handler';
import { logger } from './logger';

export async function scrapeCategory(
  category: CategoryName,
  urls: string[],
): Promise<ClassData[]> {
  try {
    const scrapeUrl = async (url: string): Promise<ClassData[]> => {
      try {
        const cachedData = getCachedData(url);
        if (cachedData) {
          logger.info(`Using cached data for ${url}`);
          return cachedData;
        }

        logger.info(`Scraping ${url}`);
        const html = await fetchHtml(url);
        const $ = parseHtml(html);
        const classes = parseTable($);
        setCachedData(url, classes);
        return classes;
      } catch (error) {
        handleError(error as Error, `scraping URL: ${url}`);
        return [];
      }
    };

    const allClasses = await pMap(urls, scrapeUrl, {
      concurrency: CONFIG.CONCURRENCY,
    });
    const flattenedClasses = allClasses.flat();

    logger.info(
      `Scraped ${flattenedClasses.length} classes for category: ${category}`,
    );
    return flattenedClasses;
  } catch (error) {
    handleError(error as Error, `scraping category: ${category}`);
    return [];
  }
}
