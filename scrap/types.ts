export interface TailwindUtility {
  name: string;
  cssProperties: Record<string, string>;
  values: Record<string, Record<string, string>>;
  allowArbitrary: boolean;
  allowStates: boolean;
  allowBreakpoints: boolean;
  convertToRem: boolean;
  themeKey?: string;
  arbitraryFormat?: string;
  keyframes?: string;
  complexProperties?: Record<
    string,
    {
      cssProperties: Record<string, string>;
      values: Record<string, Record<string, string>>;
    }
  >;
  dependencies?: string[];
}

export interface ClassData {
  name: string;
  cssProperties: Record<string, string>;
  values: Record<string, Record<string, string>>;
  colorReference: string | null;
  spacingReference: string | null;
  keyframes: string | null;
  complexProperties: Record<
    string,
    {
      cssProperties: Record<string, string>;
      values: Record<string, Record<string, string>>;
    }
  >;
  subCategories?: Record<string, Omit<ClassData, 'name' | 'subCategories'>>;
  dependencies: string[];
  convertToRem: boolean;
}
