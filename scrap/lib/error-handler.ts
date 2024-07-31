import { logger } from './logger';

export function handleError(error: Error, context: string): void {
  logger.error(`Error in ${context}:`, error);
  // more sophisticated error handling here
}
