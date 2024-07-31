import { gzip } from 'zlib';
import { promisify } from 'util';
import fs from 'fs/promises';

const gzipPromise = promisify(gzip);

export async function compress(
  data: string,
  outputPath: string,
): Promise<void> {
  const compressed = await gzipPromise(Buffer.from(data));
  await fs.writeFile(outputPath, compressed);
}
