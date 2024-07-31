import { performance } from 'perf_hooks';
import { logger } from './logger';

class PerformanceMonitor {
  private timers: Map<string, number> = new Map();

  startTimer(label: string): void {
    this.timers.set(label, performance.now());
  }

  endTimer(label: string): number {
    const start = this.timers.get(label);
    if (start === undefined) {
      throw new Error(`Timer "${label}" not started`);
    }
    const duration = performance.now() - start;
    this.timers.delete(label);
    return duration;
  }

  logPerformance(label: string): void {
    const duration = this.endTimer(label);
    logger.info(`Performance: ${label} took ${duration.toFixed(2)}ms`);
  }
}

export const performanceMonitor = new PerformanceMonitor();