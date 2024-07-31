import fetch from 'node-fetch';
import { CONFIG } from './config';

export async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: { 'User-Agent': CONFIG.USER_AGENT },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return response.text();
}
