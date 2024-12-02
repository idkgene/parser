import type { FrameworkFeature } from '@taily/shared';

export interface FrameworkHandler {
    name: string;
    detect: (content: string) => boolean;
    parse: (content: string) => string[];
    transform: (content: string, features: FrameworkFeature[]) => string;
    supports: (feature: FrameworkFeature) => boolean;
}

export type FrameworkDetector = (content: string) => string | null;
