export interface CSSPropertyValue {
  property: string;
  value: string;
}

export interface ClassData {
  name: string;
  cssProperties: Map<string, string>;
  values: Map<string, Map<string, string>>;
  allowArbitrary: boolean;
  allowStates: boolean;
  allowBreakpoints: boolean;
  convertToRem: boolean;
  complexProperties: Map<string, ComplexProperty>;
  dependencies: Set<string>;
  keyframes?: string;
  colorReference?: boolean;
  spacingReference?: boolean;
  arbitraryFormat?: string;
}

export interface ComplexProperty {
  cssProperties: Map<string, string>;
  values: Map<string, Map<string, string>>;
}

export type CategoryName =
  | 'Layout'
  | 'Flexbox & Grid'
  | 'Sizing'
  | 'Typography'
  | 'Backgrounds'
  | 'Borders'
  | 'Effects'
  | 'Filters'
  | 'Tables'
  | 'Transitions & Animation'
  | 'Transforms'
  | 'Interactivity'
  | 'SVG'
  | 'Accessibility';
