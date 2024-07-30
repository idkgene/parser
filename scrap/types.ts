export interface TailwindUtility {
  name: string;
  cssProperties: Record<string, string>;
  allowArbitrary: boolean;
  allowStates: boolean;
  allowBreakpoints: boolean;
  values: Record<string, Record<string, string>>;
  convertToRem: boolean;
  themeKey?: string;
  arbitraryFormat?: string;
  keyframes?: string;
  complexProperties?: Record<string, any>;
  dependencies?: string[];
}
