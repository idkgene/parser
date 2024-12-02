export const WORKER_CONFIG = {
    MAX_WORKERS: Math.max(1, Math.min(4, navigator.hardwareConcurrency - 1)),
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000,
    BATCH_SIZE: 100
} as const;

export const FLAGS = {
    WORKER: {
        IDLE: 0,
        BUSY: 1,
        ERROR: 2
    }
} as const;
