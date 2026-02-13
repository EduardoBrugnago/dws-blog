export const theme = {
  colors: {
    neutrals: {
      lightest: "#F0F0F2",
      extraLight: "#E0E2E6",
      light: "#C0C2C8",
      medium: "#9EA0A5",
      dark: "#7F8185",
      extraDark: "#5E5F63",
      darkest: "#202122",
    },
    primary: {
      light: "#0B0E3A",
      medium: "#060725",
      dark: "#020318",
    },
    secondary: {
      light: "#EF4C84",
      medium: "#D31450",
      dark: "#8C1038",
    },
    accent1: {
      light: "#00BFC1",
      medium: "#009598",
      dark: "#006C6E",
    },
  },
  fontFamily: "'Open Sans', sans-serif",
  typography: {
    h1: {
      size: "3.5rem",
      lineHeight: "130%",
      weight: 700,
    },
    h2: {
      size: "2.25rem",
      lineHeight: "130%",
      weight: 700,
    },
    h3: {
      size: "1.25rem",
      lineHeight: "130%",
      weight: 700,
    },
    bodyLarge: {
      size: "1rem",
      lineHeight: "150%",
      weight: {
        regular: 400,
        semibold: 600,
      },
    },
    bodySmall: {
      size: "0.875rem",
      lineHeight: "150%",
      weight: 400,
    },
    caption: {
      size: "0.75rem",
      lineHeight: "130%",
      weight: 400,
    },
  },
} as const;

export type Theme = typeof theme;
