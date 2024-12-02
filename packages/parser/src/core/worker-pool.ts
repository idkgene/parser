import { Worker } from 'worker_threads';
import { EventEmitter } from 'events';
import {
    type WorkerMessage,
    type WorkerResult,
    type WorkerMetrics,
    type ProcessFileOptions,
    PERFORMANCE_CONFIG
} from '@tailwind-optimizer/shared';
import path from 'path';

interface WorkerInfo {
    worker: Worker;
    busy: boolean;
    lastError?: Error;
    processedCount: number;
    failedCount: number;
}

export class WorkerPool extends EventEmitter {
    private workers: Map<number, WorkerInfo>;
    private queue: Array<{
        filePath: string;
        options: ProcessFileOptions;
        resolve: (result: WorkerResult) => void;
        reject: (error: Error) => void;
    }>;
    private metrics: WorkerMetrics;

    constructor() {
        super();
        this.workers = new Map();
        this.queue = [];
        this.metrics = this.initializeMetrics();
        this.initialize();
    }

    private initializeMetrics(): WorkerMetrics {
        return {
            totalProcessed: 0,
            totalErrors: 0,
            totalRetries: 0,
            averageProcessingTime: 0,
            peakMemoryUsage: 0,
            activeWorkers: 0,
            busyWorkers: 0,
            queueLength: 0,
            currentMemoryUsage: 0
        };
    }

    private initialize(): void {
        const numWorkers = PERFORMANCE_CONFIG.maxConcurrency;
        for (let i = 0; i < numWorkers; i++) {
            const worker = new Worker(path.join(__dirname, 'worker.js'));
            this.workers.set(i, {
                worker,
                busy: false,
                processedCount: 0,
                failedCount: 0
            });
            this.metrics.activeWorkers++;

            worker.on('message', (message: WorkerMessage) => {
                if (message.type === 'process_file') {
                    this.handleProcessFileResponse(message);
                } else if (message.type === 'status') {
                    this.handleStatusResponse(message);
                }
            });

            worker.on('error', (error: Error) => {
                this.handleWorkerError(i, error);
            });

            worker.on('exit', (code: number) => {
                this.handleWorkerExit(i, code);
            });
        }
    }

    private handleProcessFileResponse(message: WorkerMessage): void {
        if (message.payload?.error) {
            this.metrics.totalErrors++;
        } else {
            this.metrics.totalProcessed++;
        }
    }

    private handleStatusResponse(message: WorkerMessage): void {
        if (message.payload?.error) {
            this.metrics.totalErrors++;
        }
    }

    private handleWorkerError(workerId: number, error: Error): void {
        const workerInfo = this.workers.get(workerId);
        if (workerInfo) {
            workerInfo.lastError = error;
            workerInfo.failedCount++;
            this.metrics.totalErrors++;
        }
    }

    private handleWorkerExit(workerId: number, code: number): void {
        const workerInfo = this.workers.get(workerId);
        if (workerInfo) {
            this.metrics.activeWorkers--;
            if (workerInfo.busy) {
                this.metrics.busyWorkers--;
            }
        }
    }

    async process(filePath: string, options: ProcessFileOptions): Promise<WorkerResult> {
        return new Promise((resolve, reject) => {
            this.queue.push({ filePath, options, resolve, reject });
            this.processQueue();
        });
    }

    private processQueue(): void {
        if (this.queue.length === 0) return;

        const availableWorker = Array.from(this.workers.entries())
            .find(([_, info]) => !info.busy);

        if (!availableWorker) return;

        const [workerId, workerInfo] = availableWorker;
        const task = this.queue.shift();
        if (!task) return;

        workerInfo.busy = true;
        this.metrics.busyWorkers++;
        this.metrics.queueLength = this.queue.length;

        const { filePath, options, resolve, reject } = task;

        const message: WorkerMessage = {
            type: 'process_file',
            payload: {
                filePath,
                options
            }
        };

        workerInfo.worker.postMessage(message);

        const timeout = setTimeout(() => {
            reject(new Error(`Worker ${workerId} timed out processing ${filePath}`));
            workerInfo.busy = false;
            this.metrics.busyWorkers--;
            this.processQueue();
        }, PERFORMANCE_CONFIG.workerTimeout);

        workerInfo.worker.once('message', (result: WorkerResult) => {
            clearTimeout(timeout);
            workerInfo.busy = false;
            this.metrics.busyWorkers--;
            this.processQueue();
            resolve(result);
        });
    }

    async shutdown(): Promise<void> {
        const workers = Array.from(this.workers.values());
        await Promise.all(
            workers.map(({ worker }) => 
                new Promise<void>((resolve) => {
                    worker.postMessage({ type: 'cleanup' });
                    worker.once('exit', () => resolve());
                })
            )
        );
        this.workers.clear();
        this.queue = [];
    }

    getMetrics(): WorkerMetrics {
        const memoryUsage = process.memoryUsage().heapUsed;
        return {
            ...this.metrics,
            queueLength: this.queue.length,
            currentMemoryUsage: memoryUsage,
            peakMemoryUsage: Math.max(this.metrics.peakMemoryUsage, memoryUsage)
        };
    }
}
