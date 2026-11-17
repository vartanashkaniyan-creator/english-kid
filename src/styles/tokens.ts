// Centralized design tokens for English Kids.
// Values are intentionally neutral and provisional — the final brand
// identity will be provided later and should update these tokens only.

export const tokens = {
  colors: {
    // Neutral / surface tones (provisional)
    surface: {
      DEFAULT: "#ffffff",
      muted: "#f7f7f8",
      subtle: "#eef0f3",
    },
    ink: {
      DEFAULT: "#1a1d23",
      soft: "#4b5563",
      faint: "#9aa3af",
    },
    // Provisional palette ramps (to be replaced with brand colors)
    primary: {
      DEFAULT: "#2563eb",
      soft: "#dbeafe",
      deep: "#1e40af",
    },
    accent: {
      DEFAULT: "#f59e0b",
      soft: "#fef3c7",
      deep: "#b45309",
    },
    success: {
      DEFAULT: "#16a34a",
      soft: "#dcfce7",
      deep: "#15803d",
    },
    warning: {
      DEFAULT: "#eab308",
      soft: "#fef9c3",
      deep: "#a16207",
    },
    error: {
      DEFAULT: "#dc2626",
      soft: "#fee2e2",
      deep: "#991b1b",
    },
    line: "#e5e7eb",
  },
  fontFamily: {
    sans: ["var(--font-sans)", "system-ui", "sans-serif"],
    farsi: ["var(--font-fa)", "system-ui", "sans-serif"],
  },
  spacing: {
    "0.5": "0.125rem",
    "1.5": "0.375rem",
    "2.5": "0.625rem",
    "3.5": "0.875rem",
    18: "4.5rem",
    22: "5.5rem",
  },
  fontSize: {
    "2xs": ["0.6875rem", "1rem"] as [string, string],
    "4.5xl": ["2.5rem", "1.15"] as [string, string],
  },
  borderRadius: {
    "4xl": "2rem",
  },
  boxShadow: {
    soft: "0 2px 8px -2px rgba(16, 24, 40, 0.08), 0 4px 16px -4px rgba(16, 24, 40, 0.06)",
    lift: "0 8px 24px -8px rgba(16, 24, 40, 0.18), 0 12px 40px -12px rgba(16, 24, 40, 0.12)",
  },
};

export type Tokens = typeof tokens;
