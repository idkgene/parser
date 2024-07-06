interface ColorShade {
  [shade: string]: string;
}

interface ColorPalette {
  [colorName: string]: ColorShade;
}

const tailwindColors: ColorPalette = {
  slate: {
    "50": "#f8fafc",
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a",
    "950": "#020617",
  },
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712",
  },
  zinc: {
    "50": "#fafafa",
    "100": "#f4f4f5",
    "200": "#e4e4e7",
    "300": "#d4d4d8",
    "400": "#a1a1aa",
    "500": "#71717a",
    "600": "#52525b",
    "700": "#3f3f46",
    "800": "#27272a",
    "900": "#18181b",
    "950": "#09090b",
  },
  neutral: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#e5e5e5",
    "300": "#d4d4d4",
    "400": "#a3a3a3",
    "500": "#737373",
    "600": "#525252",
    "700": "#404040",
    "800": "#262626",
    "900": "#171717",
    "950": "#0a0a0a",
  },
  stone: {
    "50": "#fafaf9",
    "100": "#f5f5f4",
    "200": "#e7e5e4",
    "300": "#d6d3d1",
    "400": "#a8a29e",
    "500": "#78716c",
    "600": "#57534e",
    "700": "#44403c",
    "800": "#292524",
    "900": "#1c1917",
    "950": "#0c0a09",
  },
  red: {
    "50": "#fef2f2",
    "100": "#fee2e2",
    "200": "#fecaca",
    "300": "#fca5a5",
    "400": "#f87171",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "900": "#7f1d1d",
    "950": "#450a0a",
  },
  orange: {
    "50": "#fff7ed",
    "100": "#ffedd5",
    "200": "#fed7aa",
    "300": "#fdba74",
    "400": "#fb923c",
    "500": "#f97316",
    "600": "#ea580c",
    "700": "#c2410c",
    "800": "#9a3412",
    "900": "#7c2d12",
    "950": "#431407",
  },
  amber: {
    "50": "#fffbeb",
    "100": "#fef3c7",
    "200": "#fde68a",
    "300": "#fcd34d",
    "400": "#fbbf24",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309",
    "800": "#92400e",
    "900": "#78350f",
    "950": "#451a03",
  },
  yellow: {
    "50": "#fefce8",
    "100": "#fef9c3",
    "200": "#fef08a",
    "300": "#fde047",
    "400": "#facc15",
    "500": "#eab308",
    "600": "#ca8a04",
    "700": "#a16207",
    "800": "#854d0e",
    "900": "#713f12",
    "950": "#422006",
  },
  lime: {
    "50": "#f7fee7",
    "100": "#ecfccb",
    "200": "#d9f99d",
    "300": "#bef264",
    "400": "#a3e635",
    "500": "#84cc16",
    "600": "#65a30d",
    "700": "#4d7c0f",
    "800": "#3f6212",
    "900": "#365314",
    "950": "#1a2e05",
  },
  green: {
    "50": "#f0fdf4",
    "100": "#dcfce7",
    "200": "#bbf7d0",
    "300": "#86efac",
    "400": "#4ade80",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d",
    "800": "#166534",
    "900": "#14532d",
    "950": "#052e16",
  },
  emerald: {
    "50": "#ecfdf5",
    "100": "#d1fae5",
    "200": "#a7f3d0",
    "300": "#6ee7b7",
    "400": "#34d399",
    "500": "#10b981",
    "600": "#059669",
    "700": "#047857",
    "800": "#065f46",
    "900": "#064e3b",
    "950": "#022c22",
  },
  teal: {
    "50": "#f0fdfa",
    "100": "#ccfbf1",
    "200": "#99f6e4",
    "300": "#5eead4",
    "400": "#2dd4bf",
    "500": "#14b8a6",
    "600": "#0d9488",
    "700": "#0f766e",
    "800": "#115e59",
    "900": "#134e4a",
    "950": "#042f2e",
  },
  cyan: {
    "50": "#ecfeff",
    "100": "#cffafe",
    "200": "#a5f3fc",
    "300": "#67e8f9",
    "400": "#22d3ee",
    "500": "#06b6d4",
    "600": "#0891b2",
    "700": "#0e7490",
    "800": "#155e75",
    "900": "#164e63",
    "950": "#083344",
  },
  sky: {
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "200": "#bae6fd",
    "300": "#7dd3fc",
    "400": "#38bdf8",
    "500": "#0ea5e9",
    "600": "#0284c7",
    "700": "#0369a1",
    "800": "#075985",
    "900": "#0c4a6e",
    "950": "#082f4b",
  },
  blue: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a",
    "950": "#172554",
  },
  indigo: {
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81",
    "950": "#1e1b4d",
  },
  violet: {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "200": "#ddd6fe",
    "300": "#c4b5fd",
    "400": "#a78bfa",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "700": "#6d28d9",
    "800": "#5b21b6",
    "900": "#4c1d95",
    "950": "#2e1065",
  },
  purple: {
    "50": "#faf5ff",
    "100": "#f3e8ff",
    "200": "#e9d5ff",
    "300": "#d8b4fe",
    "400": "#c084fc",
    "500": "#a855f7",
    "600": "#9333ea",
    "700": "#7e22ce",
    "800": "#6b21a8",
    "900": "#581c87",
    "950": "#3b0764",
  },
  fuchsia: {
    "50": "#fdf4ff",
    "100": "#fae8ff",
    "200": "#f5d0fe",
    "300": "#f0abfc",
    "400": "#e879f9",
    "500": "#d946ef",
    "600": "#c026d3",
    "700": "#a21caf",
    "800": "#86198f",
    "900": "#701a75",
    "950": "#4a064e",
  },
  pink: {
    "50": "#fdf2f8",
    "100": "#fce7f3",
    "200": "#fbcfe8",
    "300": "#f9a8d4",
    "400": "#f472b6",
    "500": "#ec4899",
    "600": "#db2777",
    "700": "#be185d",
    "800": "#9d174d",
    "900": "#831843",
    "950": "#500724",
  },
  rose: {
    "50": "#fff1f2",
    "100": "#ffe4e6",
    "200": "#fecdd3",
    "300": "#fda4af",
    "400": "#fb7185",
    "500": "#f43f5e",
    "600": "#e11d48",
    "700": "#be123c",
    "800": "#9f1239",
    "900": "#881337",
    "950": "#4c0519",
  },
};

interface TailwindClass {
  name: string;
  cssProperties: { [key: string]: string };
  allowArbitrary: boolean;
  allowStates: boolean;
  allowBreakpoints: boolean;
  values?: { [key: string]: string };
  colorReference?: string;
  specialValues?: { [key: string]: string };
  compositeValues?: boolean;
  convertToRem?: boolean;
  keyframes?: { [key: string]: { [key: string]: { [key: string]: string } } };
}

const tailwindClasses = new Map<string, TailwindClass[]>();

/**
 * ██████╗  ██████╗ ██████╗ ██████╗ ███████╗██████╗ ███████╗
 * ██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝
 * ██████╔╝██║   ██║██████╔╝██║  ██║█████╗  ██████╔╝███████╗
 * ██╔══██╗██║   ██║██╔══██╗██║  ██║██╔══╝  ██╔══██╗╚════██║
 * ██████╔╝╚██████╔╝██║  ██║██████╔╝███████╗██║  ██║███████║
 * ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝
 */
tailwindClasses.set("Borders", [
  /**
   * Border Radius
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded",
    cssProperties: {
      "border-radius": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded",
    cssProperties: {
      "border-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Start
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-s",
    cssProperties: {
      "border-start-start-radius": "",
      "border-end-start-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Start
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-s",
    cssProperties: {
      "border-start-start-radius": "0.25rem",
      "border-end-start-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius End
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-e",
    cssProperties: {
      "border-start-end-radius": "",
      "border-end-end-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius End End
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-e",
    cssProperties: {
      "border-start-end-radius": "0.25rem",
      "border-end-end-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Top
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-t",
    cssProperties: {
      "border-top-left-radius": "",
      "border-top-right-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Top
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-t",
    cssProperties: {
      "border-top-left-radius": "0.25rem",
      "border-top-right-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Right
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-r",
    cssProperties: {
      "border-top-right-radius": "",
      "border-bottom-right-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Right
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-r",
    cssProperties: {
      "border-top-right-radius": "0.25rem",
      "border-bottom-right-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Bottom
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-b",
    cssProperties: {
      "border-bottom-right-radius": "",
      "border-bottom-left-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Bottom
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-b",
    cssProperties: {
      "border-bottom-right-radius": "0.25rem",
      "border-bottom-left-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Left
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-l",
    cssProperties: {
      "border-top-left-radius": "",
      "border-bottom-left-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Left
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-l",
    cssProperties: {
      "border-top-left-radius": "0.25rem",
      "border-bottom-left-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Start Start
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-ss",
    cssProperties: {
      "border-start-start-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Start Start
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-ss",
    cssProperties: {
      "border-start-start-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Start End
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-se",
    cssProperties: {
      "border-start-end-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Start End
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-se",
    cssProperties: {
      "border-start-end-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius End End
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-ee",
    cssProperties: {
      "border-end-end-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius End End
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-ee",
    cssProperties: {
      "border-end-end-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius End Start
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-es",
    cssProperties: {
      "border-end-end-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius End Start
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-es",
    cssProperties: {
      "border-end-start-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Top Left
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-tl",
    cssProperties: {
      "border-top-left-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Top Left
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-tl",
    cssProperties: {
      "border-top-left-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Top Right
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-tr",
    cssProperties: {
      "border-top-right-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Top Right
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-tr",
    cssProperties: {
      "border-top-right-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Bottom Right
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-br",
    cssProperties: {
      "border-bottom-right-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Bottom Right
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-br",
    cssProperties: {
      "border-bottom-right-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius Bottom Left
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-bl",
    cssProperties: {
      "border-bottom-left-radius": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },

  /**
   * Border Radius Bottom Left
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded-bl",
    cssProperties: {
      "border-bottom-left-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Radius
   * @see https://tailwindcss.com/docs/border-radius
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
   */
  {
    name: "rounded",
    cssProperties: {
      "border-radius": "0.25rem",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border",
    cssProperties: {
      "border-width": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    convertToRem: false,
  },

  /**
   * Border Width
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border",
    cssProperties: {
      "border-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width X
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-x",
    cssProperties: {
      "border-left-width": "",
      "border-right-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  /**
   * Border Width X
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border",
    cssProperties: {
      "border-left-width": "1px",
      "border-right-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width Y
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-y",
    cssProperties: {
      "border-top-width": "",
      "border-bottom-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  /**
   * Border Width Y
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border",
    cssProperties: {
      "border-top-width": "1px",
      "border-bottom-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width S
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-s",
    cssProperties: {
      "border-inline-start-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  /**
   * Border Width S
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border",
    cssProperties: {
      "border-inline-start-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width E
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-e",
    cssProperties: {
      "border-inline-end-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  /**
   * Border Width E
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border",
    cssProperties: {
      "border-inline-end-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width T
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-t",
    cssProperties: {
      "border-top-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  /**
   * Border Width T
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-t",
    cssProperties: {
      "border-top-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width R
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-r",
    cssProperties: {
      "border-right-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  /**
   * Border Width R
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-r",
    cssProperties: {
      "border-right-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width B
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-b",
    cssProperties: {
      "border-bottom-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width B
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-b",
    cssProperties: {
      "border-bottom-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  /**
   * Border Width L
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-l",
    cssProperties: {
      "border-left-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Width L
   * @see https://tailwindcss.com/docs/border-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "border-l",
    cssProperties: {
      "border-left-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
  },

  /**
   * Border Color
   * @see https://tailwindcss.com/docs/border-color
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
   */
  {
    name: "border",
    cssProperties: {
      "border-color": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    colorReference: "tailwindColors",
  },

  /**
   * Border Style
   * @see https://tailwindcss.com/docs/border-style
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
   */
  {
    name: "border",
    cssProperties: {
      "border-style": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      solid: "solid",
      dashed: "dashed",
      dotted: "dotted",
      double: "double",
      hidden: "hidden",
      none: "none",
    },
  },

  /**
   * Divide Width
   * @see https://tailwindcss.com/docs/divide-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
   */
  {
    name: "divide-x",
    cssProperties: {
      "border-right-width": "0px",
      "border-left-width": "1px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-x-0",
    cssProperties: {
      "border-right-width": "0px",
      "border-left-width": "0px",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-x-2",
    cssProperties: {
      "border-right-width": "0px",
      "border-left-width": "2px",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-x-4",
    cssProperties: {
      "border-right-width": "0px",
      "border-left-width": "4px",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-x-8",
    cssProperties: {
      "border-right-width": "0px",
      "border-left-width": "8px",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-x-reverse",
    cssProperties: {
      "--tw-divide-x-reverse": "1",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-y",
    cssProperties: {
      "border-top-width": "1px",
      "border-bottom-width": "0px",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-y-0",
    cssProperties: {
      "border-top-width": "0px",
      "border-bottom-width": "0px",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-y-2",
    cssProperties: {
      "border-top-width": "2px",
      "border-bottom-width": "0px",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-y-4",
    cssProperties: {
      "border-top-width": "4px",
      "border-bottom-width": "0px",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-y-8",
    cssProperties: {
      "border-top-width": "8px",
      "border-bottom-width": "0px",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  {
    name: "divide-y-reverse",
    cssProperties: {
      "--tw-divide-y-reverse": "1",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Border Color
   * @see https://tailwindcss.com/docs/divide-color
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
   */
  {
    name: "divide",
    cssProperties: {
      "border-color": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    colorReference: "tailwindColors",
  },

  /**
   * Divide Style
   * @see https://tailwindcss.com/docs/divide-style
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
   */
  {
    name: "divide",
    cssProperties: {
      "border-style": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      solid: "solid",
      dashed: "dashed",
      dotted: "dotted",
      double: "double",
      hidden: "hidden",
      none: "none",
    },
  },

  /**
   * Outline Width
   * @see https://tailwindcss.com/docs/outline-width
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width
   */
  {
    name: "outline",
    cssProperties: {
      "outline-widt": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    convertToRem: false,
  },

    /**
   * Outline Color
   * @see https://tailwindcss.com/docs/outline-color
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color
   */
    {
      name: "outline",
      cssProperties: {
        "outline-color": "",
      },
      allowArbitrary: true,
      allowStates: true,
      allowBreakpoints: true,
      values: {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
      },
      colorReference: "tailwindColors",
    },

    // To be continued
]);

/**
 * ███████╗███████╗███████╗███████╗ ██████╗████████╗███████╗
 * ██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝╚══██╔══╝██╔════╝
 * █████╗  █████╗  █████╗  █████╗  ██║        ██║   ███████╗
 * ██╔══╝  ██╔══╝  ██╔══╝  ██╔══╝  ██║        ██║   ╚════██║
 * ███████╗██║     ██║     ███████╗╚██████╗   ██║   ███████║
 * ╚══════╝╚═╝     ╚═╝     ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
 */
tailwindClasses.set("Effects", [
  /**
   * Box Shadow
   * @see https://tailwindcss.com/docs/box-shadow
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
   */
  {
    name: "shadow",
    cssProperties: {
      "box-shadow": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "0 0 #0000",
    },
    convertToRem: false,
  },

  /**
   * Box Shadow
   * @see https://tailwindcss.com/docs/box-shadow
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   */
  {
    name: "shadow",
    cssProperties: {
      "box-shadow":
        "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Box Shadow
   * @see https://tailwindcss.com/docs/box-shadow-color
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
   */
  {
    name: "shadow",
    cssProperties: {
      "	--tw-shadow-color": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    colorReference: "tailwindColors",
  },

  /**
   * Opacity
   * @see https://tailwindcss.com/docs/opacity
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity
   */
  {
    name: "opacity",
    cssProperties: {
      opacity: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0",
      5: "0.05",
      10: "0.1",
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
  },

  /**
   * Mix Blend Mode
   * @see https://tailwindcss.com/docs/mix-blend-mode
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
   */
  {
    name: "mix-blend",
    cssProperties: {
      "mix-blend-mode": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      normal: "normal",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "color-dode": "color-dodge",
      "color-burn": "color-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion",
      hue: "hue",
      saturation: "saturation",
      color: "color",
      luminosity: "luminosity",
    },
  },

  /**
   * Background Blend Mode
   * @see https://tailwindcss.com/docs/background-blend-mode
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
   */
  {
    name: "bg-blend",
    cssProperties: {
      "background-blend-mode": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      normal: "normal",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "color-dode": "color-dodge",
      "color-burn": "color-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion",
      hue: "hue",
      saturation: "saturation",
      color: "color",
      luminosity: "luminosity",
      "plus-darker": "plus-darker",
      "plus-lighter": "plus-lighter",
    },
  },
]);

/**
 * ███████╗██╗██╗  ████████╗███████╗██████╗ ███████╗
 * ██╔════╝██║██║  ╚══██╔══╝██╔════╝██╔══██╗██╔════╝
 * █████╗  ██║██║     ██║   █████╗  ██████╔╝███████╗
 * ██╔══╝  ██║██║     ██║   ██╔══╝  ██╔══██╗╚════██║
 * ██║     ██║███████╗██║   ███████╗██║  ██║███████║
 * ╚═╝     ╚═╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝
 */
tailwindClasses.set("Filters", [
  /**
   * Blur
   * @see https://tailwindcss.com/docs/blur
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur
   */
  {
    name: "blur",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "blur(0)",
      sm: "blur(4px)",
      md: "blur(12px)",
      lg: "blur(16px)",
      xl: "blur(24px)",
      "2xl": "blur(40px)",
      "3xl": "blur(64px)",
    },
    convertToRem: false,
  },

  /**
   * Blur
   * @see https://tailwindcss.com/docs/blur
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur
   */
  {
    name: "blur",
    cssProperties: {
      filter: "blur(8px)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },
  /**
   * Brightness
   * @see https://tailwindcss.com/docs/brightness
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness
   */
  {
    name: "brightness",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "brightness(0)",
      50: "brightness(.5)",
      75: "brightness(.75)",
      90: "brightness(.9)",
      95: "brightness(.95)",
      100: "brightness(1)",
      105: "brightness(1.05)",
      110: "brightness(1.1)",
      125: "brightness(1.25)",
      150: "brightness(1.5)",
      200: "brightness(2)",
    },
  },
  /**
   * Contrast
   * @see https://tailwindcss.com/docs/contrast
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast
   */
  {
    name: "contrast",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "contrast(0)",
      50: "contrast(.5)",
      75: "contrast(.75)",
      100: "contrast(1)",
      125: "contrast(1.25)",
      150: "contrast(1.5)",
      200: "contrast(2)",
    },
  },
  /**
   * Drop Shadow
   * @see https://tailwindcss.com/docs/drop-shadow
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow
   */
  {
    name: "drop-shadow",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      sm: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))",
      md: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
      lg: "filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      xl: "filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
      "2xl": " drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
      none: "drop-shadow(0 0 #0000)",
    },
    convertToRem: false,
  },
  /**
   * Drop Shadow
   * @see https://tailwindcss.com/docs/drop-shadow
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow
   */
  {
    name: "drop-shadow",
    cssProperties: {
      filter:
        "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },
  /**
   * Grayscale
   * @see https://tailwindcss.com/docs/grayscale
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale
   */
  {
    name: "grayscale",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "grayscale(0)",
    },
  },
  /**
   * Grayscale
   * @see https://tailwindcss.com/docs/grayscale
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale
   */
  {
    name: "grayscale",
    cssProperties: {
      filter: "grayscale(100%)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },
  /**
   * Hue Rotate
   * @see https://tailwindcss.com/docs/hue-rotate
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate
   */
  {
    name: "hue-rotate",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "hue-rotate(0deg)",
      15: " hue-rotate(15deg)",
      30: "hue-rotate(30deg)",
      60: "hue-rotate(60deg)",
      90: "hue-rotate(90deg)",
      180: "hue-rotate(180deg)",
    },
  },
  /**
   * Invert
   * @see https://tailwindcss.com/docs/invert
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert
   */
  {
    name: "invert",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "invert(0)",
    },
  },
  /**
   * Invert
   * @see https://tailwindcss.com/docs/invert
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert
   */
  {
    name: "invert",
    cssProperties: {
      filter: "invert(100%)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },
  /**
   * Saturate
   * @see https://tailwindcss.com/docs/saturate
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate
   */
  {
    name: "saturate",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "saturate(0)",
      50: "saturate(.5)",
      100: "saturate(1)",
      150: "saturate(1.5)",
      200: "saturate(2)",
    },
  },
  /**
   * Sepia
   * @see https://tailwindcss.com/docs/sepia
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia
   */
  {
    name: "sepia",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "sepia(0)",
    },
  },
  /**
   * Sepia
   * @see https://tailwindcss.com/docs/sepia
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia
   */
  {
    name: "sepia",
    cssProperties: {
      filter: "sepia(100%)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Backdrop Blur
   * @see https://tailwindcss.com/docs/backdrop-blur
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-blur",
    cssProperties: {
      "backdrop-filter": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "blur(0)",
      sm: "blur(4px)",
      md: "blur(12px)",
      lg: "blur(16px)",
      xl: "blur(24px)",
      "2xl": "blur(40px)",
      "3xl": "blur(64px)",
    },
    convertToRem: false,
  },

  /**
   * Backdrop Blur
   * @see https://tailwindcss.com/docs/backdrop-blur
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-blur",
    cssProperties: {
      "backdrop-filter": "blur(8px)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },
  /**
   * Backdrop Brightness
   * @see https://tailwindcss.com/docs/backdrop-brightness
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-brightness",
    cssProperties: {
      "backdrop-filter": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "brightness(0)",
      50: "brightness(.5)",
      75: "brightness(.75)",
      90: "brightness(.9)",
      95: "brightness(.95)",
      100: "brightness(1)",
      105: "brightness(1.05)",
      110: "brightness(1.1)",
      125: "brightness(1.25)",
      150: "brightness(1.5)",
      200: "brightness(2)",
    },
  },
  /**
   * Backdrop Contrast
   * @see https://tailwindcss.com/docs/backdrop-contrast
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-contrast",
    cssProperties: {
      "backdrop-filter": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "contrast(0)",
      50: "contrast(.5)",
      75: "contrast(.75)",
      100: "contrast(1)",
      125: "contrast(1.25)",
      150: "contrast(1.5)",
      200: "contrast(2)",
    },
  },

  /**
   * Backdrop Grayscale
   * @see https://tailwindcss.com/docs/backdrop-grayscale
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-grayscale",
    cssProperties: {
      "backdrop-filter": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "grayscale(0)",
    },
  },

  /**
   * Backdrop Grayscale
   * @see https://tailwindcss.com/docs/backdrop-grayscale
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-grayscale",
    cssProperties: {
      "backdrop-filter": "grayscale(100%)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Backdrop Hue Rotate
   * @see https://tailwindcss.com/docs/backdrop-hue-rotate
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "hue-rotate",
    cssProperties: {
      "backdrop-filter": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "hue-rotate(0deg)",
      15: " hue-rotate(15deg)",
      30: "hue-rotate(30deg)",
      60: "hue-rotate(60deg)",
      90: "hue-rotate(90deg)",
      180: "hue-rotate(180deg)",
    },
  },
  /**
   * Backdrop Invert
   * @see https://tailwindcss.com/docs/backdrop-invert
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-invert",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "invert(0)",
    },
  },
  /**
   * Backdrop Invert
   * @see https://tailwindcss.com/docs/backdrop-invert
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-invert",
    cssProperties: {
      filter: "invert(100%)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },

  /**
   * Backdrop Opacity
   * @see https://tailwindcss.com/docs/backdrop-opacity
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-opacity",
    cssProperties: {
      "backdrop-filter": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "opacity(0)",
      5: "opacity(0.05)",
      10: "opacity(0.1)",
      15: "opacity(0.15)",
      20: "opacity(0.2)",
      25: "opacity(0.25)",
      30: "opacity(0.3)",
      35: "opacity(0.35)",
      40: "opacity(0.4)",
      45: "opacity(0.45)",
      50: "opacity(0.5)",
      55: "opacity(0.55)",
      60: "opacity(0.6)",
      65: "opacity(0.65)",
      70: "opacity(0.7)",
      75: "opacity(0.75)",
      80: "opacity(0.8)",
      85: "opacity(0.85)",
      90: "opacity(0.9)",
      95: "opacity(0.95)",
      100: "opacity(1)",
    },
  },

  /**
   * Backdrop Saturate
   * @see https://tailwindcss.com/docs/backdrop-saturate
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "backdrop-saturate",
    cssProperties: {
      filter: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "saturate(0)",
      50: "saturate(.5)",
      100: "saturate(1)",
      150: "saturate(1.5)",
      200: "saturate(2)",
    },
  },
  /**
   * Backdrop Sepia
   * @see https://tailwindcss.com/docs/backdrop-sepia
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "sepia",
    cssProperties: {
      "Backdrop-filter": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "sepia(0)",
    },
  },
  /**
   * Backdrop Sepia
   * @see https://tailwindcss.com/docs/backdrop-sepia
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/backdrop-filter
   */
  {
    name: "sepia",
    cssProperties: {
      "backdrop-filter": "sepia(100%)",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    convertToRem: false,
  },
]);

/**
 * ████████╗ █████╗ ██████╗ ██╗     ███████╗███████╗
 * ╚══██╔══╝██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝
 *    ██║   ███████║██████╔╝██║     █████╗  ███████╗
 *    ██║   ██╔══██║██╔══██╗██║     ██╔══╝  ╚════██║
 *    ██║   ██║  ██║██████╔╝███████╗███████╗███████║
 *    ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝╚══════╝
 */
tailwindClasses.set("Tables", [
  /**
   * Border Collapse
   * @see https://tailwindcss.com/docs/border-collapse
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
   */
  {
    name: "border",
    cssProperties: {
      "border-collapse": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      collapse: "collapse",
      separate: "separate",
    },
  },
  /**
   * Border Spacing
   * @see https://tailwindcss.com/docs/border-spacing
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
   */
  {
    name: "border-spacing",
    cssProperties: {
      "border-spacing": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px 0px",
      px: "1px 1px",
      0.5: "0.125rem 0.125rem",
      1: "0.25rem 0.25rem",
      1.5: "0.375rem 0.375rem",
      2: "0.5rem 0.5rem",
      2.5: "0.625rem 0.625rem",
      3: "0.75rem 0.75rem",
      3.5: "0.875rem 0.875rem",
      4: "1rem 1rem",
      5: "1.25rem 1.25rem",
      6: "1.5rem 1.5rem",
      7: "1.75rem 1.75rem",
      8: "2rem 2rem",
      9: "2.25rem 2.25rem",
      10: "2.5rem 2.5rem",
      11: "2.75rem 2.75rem",
      12: "3rem 3rem",
      14: "3.5rem 3.5rem",
      16: "4rem 4rem",
      20: "5rem 5rem",
      24: "6rem 6rem",
      28: "7rem 7rem",
      32: "8rem 8rem",
      36: "9rem 9rem",
      40: "10rem 10rem",
      44: "11rem 11rem",
      48: "12rem 12rem",
      52: "13rem 13rem",
      56: "14rem 14rem",
      60: "15rem 15rem",
      64: "16rem 16rem",
      72: "18rem 18rem",
      80: "20rem 20rem",
      96: "24rem 24rem",
    },
  },
  /**
   * Border Spacing X
   * @see https://tailwindcss.com/docs/border-spacing
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
   */
  {
    name: "border-spacing-x",
    cssProperties: {
      "border-spacing": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0px var(--tw-border-spacing-y)",
      px: "1px var(--tw-border-spacing-y)",
      0.5: "0.125rem var(--tw-border-spacing-y)",
      1: "0.25rem var(--tw-border-spacing-y)",
      1.5: "0.375rem var(--tw-border-spacing-y)",
      2: "0.5rem var(--tw-border-spacing-y)",
      2.5: "0.625rem var(--tw-border-spacing-y)",
      3: "0.75rem var(--tw-border-spacing-y)",
      3.5: "0.875rem var(--tw-border-spacing-y)",
      4: "1rem var(--tw-border-spacing-y)",
      5: "1.25rem var(--tw-border-spacing-y)",
      6: "1.5rem var(--tw-border-spacing-y)",
      7: "1.75rem var(--tw-border-spacing-y)",
      8: "2rem var(--tw-border-spacing-y)",
      9: "2.25rem var(--tw-border-spacing-y)",
      10: "2.5rem var(--tw-border-spacing-y)",
      11: "2.75rem var(--tw-border-spacing-y)",
      12: "3rem var(--tw-border-spacing-y)",
      14: "3.5rem var(--tw-border-spacing-y)",
      16: "4rem var(--tw-border-spacing-y)",
      20: "5rem var(--tw-border-spacing-y)",
      24: "6rem var(--tw-border-spacing-y)",
      28: "7rem var(--tw-border-spacing-y)",
      32: "8rem var(--tw-border-spacing-y)",
      36: "9rem var(--tw-border-spacing-y)",
      40: "10rem var(--tw-border-spacing-y)",
      44: "11rem var(--tw-border-spacing-y)",
      48: "12rem var(--tw-border-spacing-y)",
      52: "13rem var(--tw-border-spacing-y)",
      56: "14rem var(--tw-border-spacing-y)",
      60: "15rem var(--tw-border-spacing-y)",
      64: "16rem var(--tw-border-spacing-y)",
      72: "18rem var(--tw-border-spacing-y)",
      80: "20rem var(--tw-border-spacing-y)",
      96: "24rem var(--tw-border-spacing-y)",
    },
  },
  /**
   * Border Spacing Y
   * @see https://tailwindcss.com/docs/border-spacing
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
   */
  {
    name: "border-spacing-y",
    cssProperties: {
      "border-spacing": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "var(--tw-border-spacing-x) 0px",
      px: "var(--tw-border-spacing-x) 1px",
      0.5: "var(--tw-border-spacing-x) 0.125rem",
      1: "var(--tw-border-spacing-x) 0.25rem",
      1.5: "var(--tw-border-spacing-x) 0.375rem",
      2: "var(--tw-border-spacing-x) 0.5rem",
      2.5: "var(--tw-border-spacing-x) 0.625rem",
      3: "var(--tw-border-spacing-x) 0.75rem",
      3.5: "var(--tw-border-spacing-x) 0.875rem",
      4: "var(--tw-border-spacing-x) 1rem",
      5: "var(--tw-border-spacing-x) 1.25rem",
      6: "var(--tw-border-spacing-x) 1.5rem",
      7: "var(--tw-border-spacing-x) 1.75rem",
      8: "var(--tw-border-spacing-x) 2rem",
      9: "var(--tw-border-spacing-x) 2.25rem",
      10: "var(--tw-border-spacing-x) 2.5rem",
      11: "var(--tw-border-spacing-x) 2.75rem",
      12: "var(--tw-border-spacing-x) 3rem",
      14: "var(--tw-border-spacing-x) 3.5rem",
      16: "var(--tw-border-spacing-x) 4rem",
      20: "var(--tw-border-spacing-x) 5rem",
      24: "var(--tw-border-spacing-x) 6rem",
      28: "var(--tw-border-spacing-x) 7rem",
      32: "var(--tw-border-spacing-x) 8rem",
      36: "var(--tw-border-spacing-x) 9rem",
      40: "var(--tw-border-spacing-x) 10rem",
      44: "var(--tw-border-spacing-x) 11rem",
      48: "var(--tw-border-spacing-x) 12rem",
      52: "var(--tw-border-spacing-x) 13rem",
      56: "var(--tw-border-spacing-x) 14rem",
      60: "var(--tw-border-spacing-x) 15rem",
      64: "var(--tw-border-spacing-x) 16rem",
      72: "var(--tw-border-spacing-x) 18rem",
      80: "var(--tw-border-spacing-x) 20rem",
      96: "var(--tw-border-spacing-x) 24rem",
    },
  },
  /**
   * Table Layout
   * @see https://tailwindcss.com/docs/table-layout
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout
   */
  {
    name: "table",
    cssProperties: {
      "table-layout": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      auto: "auto",
      fixed: "fixed",
    },
  },
  /**
   * Caption Side
   * @see https://tailwindcss.com/docs/caption-side
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side
   */
  {
    name: "caption",
    cssProperties: {
      "caption-side": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      top: "top",
      bottom: "bottom",
    },
  },
]);

/**
 * ████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
 * ╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
 *   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║   ██║   ██║██║   ██║██╔██╗ ██║███████╗
 *   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║
 *   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║   ██║   ██║╚██████╔╝██║ ╚████║███████║
 *   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
 */
tailwindClasses.set("Transitions & Animation", [
  /**
   * Transition All
   * @see https://tailwindcss.com/docs/transition-property
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
   */
  {
    name: "transition-all",
    cssProperties: {
      "transition-property": "all",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transition-duration": "150ms",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Transition
   * @see https://tailwindcss.com/docs/transition-property
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
   */
  {
    name: "transition",
    cssProperties: {
      "transition-property":
        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transition-duration": "150ms",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Transition Colors
   * @see https://tailwindcss.com/docs/transition-property
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
   */
  {
    name: "transition-colors",
    cssProperties: {
      "transition-property":
        "color, background-color, border-color, text-decoration-color, fill, stroke",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transition-duration": "150ms",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Transition Opacity
   * @see https://tailwindcss.com/docs/transition-property
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
   */
  {
    name: "transition-opacity",
    cssProperties: {
      "transition-property": "opacity",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transition-duration": "150ms",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Transition Shadow
   * @see https://tailwindcss.com/docs/transition-property
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
   */
  {
    name: "transition-shadow",
    cssProperties: {
      "transition-property": "box-shadow",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transition-duration": "150ms",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Transition Transform
   * @see https://tailwindcss.com/docs/transition-property
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
   */
  {
    name: "transition-transform",
    cssProperties: {
      "transition-property": "transform",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transition-duration": "150ms",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Transition Duration
   * @see https://tailwindcss.com/docs/transition-duration
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
   */
  {
    name: "duration",
    cssProperties: {
      "	transition-duration": "",
    },
    allowStates: true,
    allowBreakpoints: true,
    allowArbitrary: true,
    values: {
      "0": "0s",
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200m",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms",
    },
  },
  /**
   * Transition Timing Function
   * @see https://tailwindcss.com/docs/transition-timing-function
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
   */
  {
    name: "ease",
    cssProperties: {
      "transition-timing-function": "",
    },
    allowStates: true,
    allowBreakpoints: true,
    allowArbitrary: true,
    values: {
      linear: "linear",
      "cubic-bezier(0.4, 0, 1, 1)": "in",
      "cubic-bezier(0, 0, 0.2, 1)": "out",
      "cubic-bezier(0.4, 0, 0.2, 1)": "in-out",
    },
  },
  /**
   * Transition Delay
   * @see https://tailwindcss.com/docs/transition-delay
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay
   */
  {
    name: "delay",
    cssProperties: {
      "transition-delay": "",
    },
    allowStates: true,
    allowBreakpoints: true,
    allowArbitrary: true,
    values: {
      "0": "0s",
      "75": "75ms",
      "100": "100ms",
      "150": "150ms",
      "200": "200m",
      "300": "300ms",
      "500": "500ms",
      "700": "700ms",
      "1000": "1000ms",
    },
  },
  /**
   * Animation
   * @see https://tailwindcss.com/docs/animation
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
   */
  {
    name: "animate",
    cssProperties: {
      none: "none",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Anime Spin
   * @see https://tailwindcss.com/docs/animation
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
   */
  {
    name: "animate-spin",
    cssProperties: {
      animation: "spin 1s linear infinite",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
  /**
   * Animate Ping
   * @see https://tailwindcss.com/docs/animation
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
   */
  {
    name: "animate-ping",
    cssProperties: {
      animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    keyframes: {
      ping: {
        "75, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
    },
  },
  /**
   * Animate Pulse
   * @see https://tailwindcss.com/docs/animation
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
   */
  {
    name: "animate-pulse",
    cssProperties: {
      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    keyframes: {
      pulse: {
        "0%, 100%": {
          opacity: "1",
        },
        "50%": {
          opacity: ".5",
        },
      },
    },
  },
  /**
   * Animate Bounce
   * @see https://tailwindcss.com/docs/animation
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
   */
  {
    name: "animate-bounce",
    cssProperties: {
      animation: "animation: bounce 1s infinite",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    keyframes: {
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
    },
  },
]);

/**
 *  ████████╗██████╗  █████╗ ███╗   ██╗███████╗███████╗ ██████╗ ██████╗ ███╗   ███╗███████╗
 * ╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝██╔═══██╗██╔══██╗████╗ ████║██╔════╝
 *    ██║   ██████╔╝███████║██╔██╗ ██║███████╗█████╗  ██║   ██║██████╔╝██╔████╔██║███████╗
 *    ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║╚════██║
 *    ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████║
 *    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
 */
tailwindClasses.set("Transforms", [
  /**
   * Transform scale
   * @see https://tailwindcss.com/docs/scale
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale
   */
  {
    name: "scale",
    cssProperties: {
      transform: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "scale(0)",
      50: "scale(.5)",
      75: "scale(.75)",
      90: "scale(.9)",
      95: "scale(.95)",
      100: "scale(1)",
      105: "scale(1.05)",
      110: "scale(1.1)",
      125: "scale(1.25)",
      150: "scale(1.5)",
    },
  },
  /**
   * Transform scaleX
   * @see https://tailwindcss.com/docs/scale
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale
   */
  {
    name: "scale-x",
    cssProperties: {
      transform: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "scaleX(0)",
      50: "scaleX(.5)",
      75: "scaleX(.75)",
      90: "scaleX(.9)",
      95: "scaleX(.95)",
      100: "scaleX(1)",
      105: "scaleX(1.05)",
      110: "scaleX(1.1)",
      125: "scaleX(1.25)",
      150: "scaleX(1.5)",
    },
  },
  /**
   * Transform scaleY
   * @see https://tailwindcss.com/docs/scale
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale
   */
  {
    name: "scale-y",
    cssProperties: {
      transform: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "scaleY(0)",
      50: "scaleY(.5)",
      75: "scaleY(.75)",
      90: "scaleY(.9)",
      95: "scaleY(.95)",
      100: "scaleY(1)",
      105: "scaleY(1.05)",
      110: "scaleY(1.1)",
      125: "scaleY(1.25)",
      150: "scaleY(1.5)",
    },
  },
  /**
   * Transform GPU
   * @see https://tailwindcss.com/docs/scale
   */
  {
    name: "transform-gpu",
    cssProperties: {
      transform:
        "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Transform CPU
   * @see https://tailwindcss.com/docs/scale
   */
  {
    name: "transform-cpu",
    cssProperties: {
      transform:
        "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Transform None
   * @see https://tailwindcss.com/docs/scale
   */
  {
    name: "transform-none",
    cssProperties: {
      transform: "none",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Rotate
   * @see https://tailwindcss.com/docs/rotate
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
   */
  {
    name: "rotate",
    cssProperties: {
      transform: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "rotate(0deg)",
      1: "rotate(1deg)",
      2: "rotate(2deg)",
      3: "rotate(3deg)",
      6: "rotate(6deg)",
      12: "rotate(12deg)",
      45: "rotate(45deg)",
      90: "rotate(90deg)",
      180: "rotate(180deg)",
    },
  },
  /**
   * translateX
   * @see https://tailwindcss.com/docs/translate
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
   */
  {
    name: "translate-x",
    cssProperties: {
      trasnform: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "translateX(0px)",
      px: "translateX(1px)",
      0.5: "translateX(0.125rem)",
      1: "translateX(0.25rem)",
      1.5: "translateX(0.375rem)",
      2: "translateX(0.5rem)",
      2.5: "translateX(0.625rem)",
      3: "translateX(0.75rem)",
      3.5: "translateX(0.875rem)",
      4: "translateX(1rem)",
      5: "translateX(1.25rem)",
      6: "translateX(1.5rem)",
      7: "translateX(1.75rem)",
      8: "translateX(2rem)",
      9: "translateX(2.25rem)",
      10: "translateX(2.5rem)",
      11: "translateX(2.75rem)",
      12: "translateX(3rem)",
      14: "translateX(3.5rem)",
      16: "translateX(4rem)",
      20: "translateX(5rem)",
      24: "translateX(6rem)",
      28: "translateX(7rem)",
      32: "translateX(8rem)",
      36: "translateX(9rem)",
      40: "translateX(10rem)",
      44: "translateX(11rem)",
      48: "translateX(12rem)",
      52: "translateX(13rem)",
      56: "translateX(14rem)",
      60: "translateX(15rem)",
      64: "translateX(16rem)",
      72: "translateX(18rem)",
      80: "translateX(20rem)",
      96: "translateX(24rem)",
      "1/2": "translateX(50%)",
      "1/3": "translateX(33.333333%)",
      "2/3": "translateX(66.666667%)",
      "1/4": "translateX(25%)",
      "2/4": "translateX(50%)",
      "3/4": "translateX(75%)",
      full: "translateX(100%)",
    },
    convertToRem: false,
  },
  /**
   * translateX
   * @see https://tailwindcss.com/docs/translate
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
   */
  {
    name: "translate-y",
    cssProperties: {
      trasnform: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "translateY(0px)",
      px: "translateY(1px)",
      0.5: "translateY(0.125rem)",
      1: "translateY(0.25rem)",
      1.5: "translateY(0.375rem)",
      2: "translateY(0.5rem)",
      2.5: "translateY(0.625rem)",
      3: "translateY(0.75rem)",
      3.5: "translateY(0.875rem)",
      4: "translateY(1rem)",
      5: "translateY(1.25rem)",
      6: "translateY(1.5rem)",
      7: "translateY(1.75rem)",
      8: "translateY(2rem)",
      9: "translateY(2.25rem)",
      10: "translateY(2.5rem)",
      11: "translateY(2.75rem)",
      12: "translateY(3rem)",
      14: "translateY(3.5rem)",
      16: "translateY(4rem)",
      20: "translateY(5rem)",
      24: "translateY(6rem)",
      28: "translateY(7rem)",
      32: "translateY(8rem)",
      36: "translateY(9rem)",
      40: "translateY(10rem)",
      44: "translateY(11rem)",
      48: "translateY(12rem)",
      52: "translateY(13rem)",
      56: "translateY(14rem)",
      60: "translateY(15rem)",
      64: "translateY(16rem)",
      72: "translateY(18rem)",
      80: "translateY(20rem)",
      96: "translateY(24rem)",
      "1/2": "translateY(50%)",
      "1/3": "translateY(33.333333%)",
      "2/3": "translateY(66.666667%)",
      "1/4": "translateY(25%)",
      "2/4": "translateY(50%)",
      "3/4": "translateY(75%)",
      full: "translateY(100%)",
    },
    convertToRem: false,
  },
  /**
   * skewX
   * @see https://tailwindcss.com/docs/skew
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
   */
  {
    name: "skew-x",
    cssProperties: {
      transform: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "skewX(0deg)",
      1: "skewX(1deg)",
      2: "skewX(2deg)",
      3: "skewX(3deg)",
      6: "skewX(6deg)",
      12: "skewX(12deg)",
    },
  },
  /**
   * skewY
   * @see https://tailwindcss.com/docs/skew
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
   */
  {
    name: "skew-y",
    cssProperties: {
      transform: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "skewY(0deg)",
      1: "skewY(1deg)",
      2: "skewY(2deg)",
      3: "skewY(3deg)",
      6: "skewY(6deg)",
      12: "skewY(12deg)",
    },
  },
  /**
   * Transform Origin
   * @see https://tailwindcss.com/docs/transform-origin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
   */
  {
    name: "origin",
    cssProperties: {
      "transform-origin": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left",
    },
  },
]);

/**
 * ██╗███╗   ██╗████████╗███████╗██████╗  █████╗  ██████╗████████╗██╗██╗   ██╗██╗████████╗██╗   ██╗
 * ██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
 * ██║██╔██╗ ██║   ██║   █████╗  ██████╔╝███████║██║        ██║   ██║██║   ██║██║   ██║    ╚████╔╝
 * ██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗██╔══██║██║        ██║   ██║╚██╗ ██╔╝██║   ██║     ╚██╔╝
 * ██║██║ ╚████║   ██║   ███████╗██║  ██║██║  ██║╚██████╗   ██║   ██║ ╚████╔╝ ██║   ██║      ██║
 * ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝  ╚═══╝  ╚═╝   ╚═╝      ╚═╝
 */
tailwindClasses.set("Interactivity", [
  /**
   * Accent Color
   * @see https://tailwindcss.com/docs/accent-color
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color
   */
  {
    name: "accent",
    cssProperties: {
      "accent-color": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    colorReference: "tailwindColors",
  },
  /**
   * Appearance
   * @see https://tailwindcss.com/docs/appearance
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
   */
  {
    name: "appearance",
    cssProperties: {
      appearance: "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      auto: "auto",
    },
  },
  /**
   * Cursor
   * @see https://tailwindcss.com/docs/cursor
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
   */
  {
    name: "cursor",
    cssProperties: {
      cursor: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out",
    },
  },
  /**
   * Caret Color
   * @see https://tailwindcss.com/docs/caret-color
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color
   */
  {
    name: "caret",
    cssProperties: {
      "caret-color": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    colorReference: "tailwindColors",
  },
  /**
   * Pointer Events
   * @see https://tailwindcss.com/docs/pointer-events
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
   */
  {
    name: "pointer-events",
    cssProperties: {
      "pointer-events": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      auto: "auto",
    },
  },
  /**
   * Resize
   * @see https://tailwindcss.com/docs/resize
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/resize
   */
  {
    name: "resize",
    cssProperties: {
      resize: "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      vertical: "vertical",
      horizontal: "horizontal",
      both: "both",
    },
  },
  /**
   * Scroll Behavior
   * @see https://tailwindcss.com/docs/scroll-behavior
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
   */
  {
    name: "scroll",
    cssProperties: {
      "scroll-behavior": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      auto: "auto",
      smooth: "smooth",
    },
  },
  /**
   * Scroll Margin
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-margin",
    cssProperties: {
      "scroll-margin": "",
    },
    allowStates: true,
    allowBreakpoints: true,
    allowArbitrary: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Margin Inline
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-mx",
    cssProperties: {
      "scroll-margin-left": "",
      "scroll-margin-right": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Margin Block
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-my",
    cssProperties: {
      "scroll-margin-top": "",
      "scroll-margin-bottom": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Margin Inline Start
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-ms",
    cssProperties: {
      "scroll-margin-inline-start": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Margin End
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-me",
    cssProperties: {
      "scroll-margin-inline-end": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Margin Top
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-mt",
    cssProperties: {
      "scroll-margin-top": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Margin Right
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-mr",
    cssProperties: {
      "scroll-margin-right": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Margin Left
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-ml",
    cssProperties: {
      "scroll-margin-left": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Margin Bottom
   * @see https://tailwindcss.com/docs/scroll-margin
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin
   */
  {
    name: "scroll-mb",
    cssProperties: {
      "scroll-margin-bottom": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-p",
    cssProperties: {
      "scroll-padding": "",
    },
    allowStates: true,
    allowBreakpoints: true,
    allowArbitrary: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding Inline
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-px",
    cssProperties: {
      "scroll-padding-left": "",
      "scroll-padding-right": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding Block
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-py",
    cssProperties: {
      "scroll-padding-top": "",
      "scroll-padding-bottom": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding Inline Start
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-ps",
    cssProperties: {
      "scroll-padding-inline-start": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding End
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-pe",
    cssProperties: {
      "scroll-padding-inline-end": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding Top
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-pt",
    cssProperties: {
      "scroll-padding-top": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding Right
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-pr",
    cssProperties: {
      "scroll-padding-right": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding Left
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-pl",
    cssProperties: {
      "scroll-padding-left": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Padding Bottom
   * @see https://tailwindcss.com/docs/scroll-padding
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
   */
  {
    name: "scroll-pb",
    cssProperties: {
      "scroll-padding-bottom": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      "0": "0px",
      px: "1px",
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "3.5": "14px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
      "32": "128px",
      "36": "144px",
      "40": "160px",
      "44": "176px",
      "48": "192px",
      "52": "208px",
      "56": "224px",
      "60": "240px",
      "64": "256px",
      "72": "288px",
      "80": "320px",
      "96": "384px",
    },
  },
  /**
   * Scroll Snap Align
   * @see https://tailwindcss.com/docs/scroll-snap-align
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align
   */
  {
    name: "snap",
    cssProperties: {
      "scroll-snap-align": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      start: "start",
      end: "end",
      center: "center",
      none: "none",
    },
  },
  /**
   * Scroll Snap Align
   * @see https://tailwindcss.com/docs/scroll-snap-align
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align
   */
  {
    name: "snap-align",
    cssProperties: {
      "scroll-snap-align": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
    },
  },
  /**
   * Scroll Snap Stop
   * @see https://tailwindcss.com/docs/scroll-snap-stop
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop
   */
  {
    name: "snap",
    cssProperties: {
      "scroll-snap-stop": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      normal: "normal",
      always: "always",
    },
  },
  /**
   * Scroll Snap Type
   * @see https://tailwindcss.com/docs/scroll-snap-type
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
   */
  {
    name: "snap",
    cssProperties: {
      "scroll-snap-type": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      x: "x var(--tw-scroll-snap-strictness)",
      y: "y var(--tw-scroll-snap-strictness)",
      both: "both var(--tw-scroll-snap-strictness)",
      mandatory: "mandatory",
      proximity: "proximity",
    },
  },
  /**
   * Touch Action
   * @see https://tailwindcss.com/docs/touch-action
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
   */
  {
    name: "touch",
    cssProperties: {
      "touch-action": "",
    },
    allowStates: true,
    allowBreakpoints: true,
    allowArbitrary: false,
    values: {
      auto: "auto",
      none: "none",
      panX: "pan-x",
      panLeft: "pan-left",
      panRight: "pan-right",
      panY: "pan-y",
      pinchUp: "pinch-up",
      "pan-down": "pan-down",
      pinchZoom: "pinch-zoom",
      manipulation: "manipulation",
    },
  },
  /**
   * User Select
   * @see https://tailwindcss.com/docs/user-select
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
   */
  {
    name: "user-select",
    cssProperties: {
      "user-select": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      text: "text",
      all: "all",
      auto: "auto",
    },
  },
  /**
   * Will Change
   * @see https://tailwindcss.com/docs/will-change
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
   */
  {
    name: "will-change",
    cssProperties: {
      "will-change": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      auto: "auto",
      scrollPosition: "scroll-position",
      contents: "contents",
      transform: "transform",
    },
  },
]);

/**
 * ███████╗██╗   ██╗ ██████╗
 * ██╔════╝██║   ██║██╔════╝
 * ███████╗██║   ██║██║  ███╗
 * ╚════██║╚██╗ ██╔╝██║   ██║
 * ███████║ ╚████╔╝ ╚██████╔╝
 * ╚══════╝  ╚═══╝   ╚═════╝
 */
tailwindClasses.set("SVG", [
  /**
   * Fill
   * @see https://tailwindcss.com/docs/fill
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill
   */
  {
    name: "fill",
    cssProperties: {
      fill: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    colorReference: "tailwindColors",
  },
  /**
   * Stroke
   * @see https://tailwindcss.com/docs/stroke
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke
   */
  {
    name: "stroke",
    cssProperties: {
      stroke: "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      none: "none",
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    colorReference: "tailwindColors",
  },
  /**
   * Stroke Width
   * @see https://tailwindcss.com/docs/stroke-width
   * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width
   */
  {
    name: "stroke",
    cssProperties: {
      "stroke-width": "",
    },
    allowArbitrary: true,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      0: "0",
      1: "1",
      2: "2",
    },
  },
]);

/**
 *  █████╗  ██████╗ ██████╗███████╗███████╗███████╗ ██╗██████╗ ██╗██╗     ██╗████████╗██╗   ██╗
 * ██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝ ██║██╔══██╗██║██║     ██║╚══██╔══╝╚██╗ ██╔╝
 * ███████║██║     ██║     █████╗  ███████╗███████╗██║██████╔╝██║██║     ██║   ██║    ╚████╔╝
 * ██╔══██║██║     ██║     ██╔══╝  ╚════██║╚════██║██║██╔══██╗██║██║     ██║   ██║     ╚██╔╝
 * ██║  ██║╚██████╗╚██████╗███████╗███████║███████║██║██████╔╝ ██║███████╗██║   ██║      ██║
 * ╚═╝  ╚═╝ ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝╚═╝╚═════╝ ╚═╝╚══════╝╚═╝   ╚═╝      ╚═╝
 */
tailwindClasses.set("Accessibility", [
  /**
   * Screen Reader Only
   * @see https://tailwindcss.com/docs/screen-readers
   */
  {
    name: "sr-only",
    cssProperties: {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      "white-space": "nowrap",
      "border-width": "0",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Not Screen Reader Only
   * @see https://tailwindcss.com/docs/screen-readers
   */
  {
    name: "not-sr-only",
    cssProperties: {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      clip: "auto",
      "white-space": "normal",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
  },
  /**
   * Forced Color Adjust
   * @see https://tailwindcss.com/docs/forced-color-adjust
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust
   */
  {
    name: "forced-color-adjust",
    cssProperties: {
      "forced-color-adjust": "",
    },
    allowArbitrary: false,
    allowStates: true,
    allowBreakpoints: true,
    values: {
      auto: "auto",
      none: "none",
    },
  },
]);

function getColorValue(className: string, value: string): string {
  const classObj = getTailwindClass("Interactivity", className);
  if (!classObj || !classObj.colorReference) return value;

  if (classObj.specialValues && classObj.specialValues[value]) {
    return classObj.specialValues[value];
  }

  const [colorName, shade] = value.split("-");
  return tailwindColors[colorName]?.[shade] || value;
}

function getTailwindClass(
  category: string,
  className: string
): TailwindClass | undefined {
  const categoryClasses = tailwindClasses.get(category);
  return categoryClasses?.find((c) => className.startsWith(c.name));
}

function generateTailwindClassFromCSS(css: string): string | undefined {
  const properties = css
    .split(";")
    .filter((prop) => prop.trim() !== "")
    .reduce((acc, prop) => {
      const [key, value] = prop.split(":").map((part) => part.trim());
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

  for (const [category, classes] of tailwindClasses.entries()) {
    for (const classObj of classes) {
      const cssPropertiesEntries = Object.entries(classObj.cssProperties);

      // Специальная обработка для sr-only и not-sr-only
      if (classObj.name === "sr-only" || classObj.name === "not-sr-only") {
        const allPropertiesMatch = cssPropertiesEntries.every(
          ([key, expectedValue]) => properties[key] === expectedValue
        );
        if (allPropertiesMatch) {
          return classObj.name;
        }
        continue;
      }

      if (classObj.keyframes) {
        for (const [animationName, keyframes] of Object.entries(
          classObj.keyframes
        )) {
          css += `@keyframes ${animationName} {\n`;
          for (const [selector, styles] of Object.entries(keyframes)) {
            css += `  ${selector} {\n`;
            for (const [property, value] of Object.entries(styles)) {
              css += `    ${property}: ${value};\n`;
            }
            css += "  }\n";
          }
          css += "}\n";
        }
      }

      if (classObj.compositeValues) {
        const propertyValues = cssPropertiesEntries
          .map(([key, _]) => properties[key])
          .filter(Boolean);
        if (propertyValues.length === cssPropertiesEntries.length) {
          if (
            classObj.values &&
            propertyValues.every(
              (value) => classObj.values && value in classObj.values
            )
          ) {
            return `${classObj.name}-${propertyValues.join("-")}`;
          } else if (classObj.allowArbitrary) {
            return `${classObj.name}-[${propertyValues.join("_")}]`;
          }
        }
      } else if (cssPropertiesEntries.length > 1) {
        const allPropertiesMatch = cssPropertiesEntries.every(
          ([key, expectedValue]) => {
            const actualValue = properties[key];
            if (Array.isArray(expectedValue)) {
              return expectedValue.some(
                (value) =>
                  actualValue === value || (value === "" && key in properties)
              );
            }
            return (
              actualValue === expectedValue ||
              (expectedValue === "" && key in properties)
            );
          }
        );

        if (allPropertiesMatch) {
          const values = cssPropertiesEntries.map(
            ([key, _]) => properties[key]
          );
          const uniqueValues = new Set(values);
          if (uniqueValues.size > 1) {
            return undefined; // Разные значения для не композитных свойств
          }
          const value = values[0];
          if (classObj.values && value) {
            const normalizedValue = normalizeValue(value);
            const matchingValue = Object.entries(classObj.values).find(
              ([_, v]) => v === normalizedValue
            );
            if (matchingValue) {
              return `${classObj.name}-${matchingValue[0]}`;
            }
          }
          if (classObj.allowArbitrary) {
            return `${classObj.name}-[${value}]`;
          }
          return classObj.name;
        }
      } else {
        const [cssPropertyKey, expectedValue] = cssPropertiesEntries[0];
        const actualValue = properties[cssPropertyKey];

        if (actualValue !== undefined) {
          if (classObj.values) {
            const convertToRem = classObj.convertToRem !== false;
            const normalizedValue = normalizeValue(actualValue, convertToRem);
            const matchingValue = Object.entries(classObj.values).find(
              ([_, v]) => v === normalizedValue
            );
            if (matchingValue) {
              return `${classObj.name}-${matchingValue[0]}`;
            }
          }
          if (classObj.colorReference) {
            for (const [colorName, shades] of Object.entries(tailwindColors)) {
              for (const [shade, hexValue] of Object.entries(
                shades as Record<string, string>
              )) {
                if (hexValue.toLowerCase() === actualValue.toLowerCase()) {
                  return `${classObj.name}-${colorName}-${shade}`;
                }
              }
            }
            // Обработка для "white" и "black"
            if (
              actualValue.toLowerCase() === "#fff" ||
              actualValue.toLowerCase() === "#ffffff"
            ) {
              return `${classObj.name}-white`;
            }
            if (
              actualValue.toLowerCase() === "#000" ||
              actualValue.toLowerCase() === "#000000"
            ) {
              return `${classObj.name}-black`;
            }
          } else if (classObj.allowArbitrary) {
            return `${classObj.name}-[${actualValue}]`;
          }
        }
      }
    }
  }

  return undefined;
}

function normalizeValue(value: string, convertToRem: boolean = true): string {
  if (convertToRem) {
    if (value.endsWith("rem")) {
      const remValue = parseFloat(value);
      return `${remValue * 16}px`;
    } else if (value.endsWith("px")) {
      const pxValue = parseFloat(value);
      return `${pxValue / 16}rem`;
    }
  }
  return value;
}

function generateKeyframesString(keyframes: {
  [key: string]: { [key: string]: string };
}): string {
  let result = "@keyframes {\n";
  for (const [selector, styles] of Object.entries(keyframes)) {
    result += `  ${selector} {\n`;
    for (const [property, value] of Object.entries(styles)) {
      result += `    ${property}: ${value};\n`;
    }
    result += "  }\n";
  }
  result += "}";
  return result;
}

// Примеры использования:
const notSrOnlyCSS = `
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
`;

console.log(generateTailwindClassFromCSS(notSrOnlyCSS)); // Должно вывести "not-sr-only"

const srOnlyCSS = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

console.log(generateTailwindClassFromCSS(srOnlyCSS)); // Должно вывести "sr-only"

console.log(
  generateTailwindClassFromCSS(
    "scroll-margin-left: 0.25rem; scroll-margin-right: 0.25rem;"
  )
); // Должно вывести "scroll-mx-1"
console.log(generateTailwindClassFromCSS("scroll-margin: 1rem;")); // Должно вывести "scroll-m-4"
console.log(generateTailwindClassFromCSS("scroll-margin: 16px;")); // Должно вывести "scroll-m-4"
console.log(generateTailwindClassFromCSS("fill: #f59e0b;")); // Должно вывести "fill-amber-500"
console.log(generateTailwindClassFromCSS("stroke: #fff;")); // Должно вывести "stroke-white"
