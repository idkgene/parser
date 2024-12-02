import { parentPort } from 'worker_threads';
import type { WorkerMessage, ProcessFileOptions } from '@taily/shared';
import { FrameworkFactory } from '@taily/frameworks';

if (!parentPort) {
    throw new Error('This file must be run as a worker thread');
}

const frameworkFactory = FrameworkFactory.getInstance();

parentPort.on('message', async (message: WorkerMessage) => {
    if (message.type !== 'process_file' || !message.payload.filePath) {
        parentPort?.postMessage({
            type: 'error',
            payload: { error: 'Invalid message format' }
        });
        return;
    }

    try {
        const result = await processFile(
            message.payload.filePath,
            message.payload.options || {}
        );

        parentPort?.postMessage({
            type: 'process_file',
            payload: result
        });
    } catch (error) {
        parentPort?.postMessage({
            type: 'error',
            payload: { error: error.message }
        });
    }
});

async function processFile(filePath: string, options: ProcessFileOptions) {
    const { framework: frameworkName } = options;
    
    if (!frameworkName) {
        throw new Error(`Framework not specified for file: ${filePath}`);
    }

    const framework = frameworkFactory.getFramework(frameworkName);
    const content = await readFile(filePath);

    return framework.parseFile(content, filePath);
}

async function readFile(filePath: string): Promise<string> {
    // TODO: Implement file reading
    return '';
}

parentPort.postMessage({
    type: 'status',
    payload: { status: 'ready' }
});
