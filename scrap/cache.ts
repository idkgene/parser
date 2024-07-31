import NodeCache from 'node-cache';
import { type ClassData } from './types';
import { CONFIG } from './config';

export const cache = new NodeCache({ stdTTL: CONFIG.CACHE_TTL });

export function getCachedData(key: string): ClassData[] | undefined {
  return cache.get<ClassData[]>(key);
}

export function setCachedData(key: string, data: ClassData[]): void {
  cache.set(key, data);
}
