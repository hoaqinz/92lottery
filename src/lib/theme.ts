import { COLORS } from "./constants";

// Định nghĩa các theme cho ứng dụng
export const themes = {
  light: {
    background: COLORS.background,
    text: COLORS.darkGray,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    card: COLORS.white,
    border: "#eee",
  },
  dark: {
    background: "#121212",
    text: COLORS.white,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    card: "#1e1e1e",
    border: "#333",
  },
};

// Các gradient cho game cards
export const gameGradients = {
  blue: {
    from: COLORS.secondary,
    to: "#89d9e7",
  },
  orange: {
    from: COLORS.tertiary,
    to: "#f6bf85",
  },
  purple: {
    from: COLORS.quaternary,
    to: "#e7b6d1",
  },
  lightBlue: {
    from: COLORS.secondary,
    to: "#cccefa",
  },
};

// Các kích thước font
export const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
};

// Các kích thước spacing
export const spacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
};

// Các border radius
export const borderRadius = {
  none: "0",
  sm: "0.125rem",
  default: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};
