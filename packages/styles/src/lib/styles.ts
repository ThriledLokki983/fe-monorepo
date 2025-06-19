/**
 * Styles Utilities
 *
 * TypeScript utilities for working with the design system.
 */

// Theme utilities
export type Theme = 'light' | 'dark' | 'high-contrast';

export const setTheme = (theme: Theme): void => {
  document.documentElement.setAttribute('data-theme', theme);
};

export const getTheme = (): Theme => {
  const theme = document.documentElement.getAttribute('data-theme') as Theme;
  return theme || 'light';
};

export const toggleTheme = (): void => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};

// CSS Custom Property utilities
export const setCSSVariable = (property: string, value: string, element = document.documentElement): void => {
  element.style.setProperty(property, value);
};

export const getCSSVariable = (property: string, element = document.documentElement): string => {
  return getComputedStyle(element).getPropertyValue(property).trim();
};

// Breakpoint utilities
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const getBreakpointValue = (breakpoint: Breakpoint): string => {
  return breakpoints[breakpoint];
};

// Media query helper
export const matchMedia = (query: string): boolean => {
  return window.matchMedia(query).matches;
};

export const isBreakpointActive = (breakpoint: Breakpoint): boolean => {
  return matchMedia(`(min-width: ${getBreakpointValue(breakpoint)})`);
};

// Design token access
export const tokens = {
  colors: {
    primary: {
      50: 'var(--color-primary-50)',
      100: 'var(--color-primary-100)',
      200: 'var(--color-primary-200)',
      300: 'var(--color-primary-300)',
      400: 'var(--color-primary-400)',
      500: 'var(--color-primary-500)',
      600: 'var(--color-primary-600)',
      700: 'var(--color-primary-700)',
      800: 'var(--color-primary-800)',
      900: 'var(--color-primary-900)',
    },
    neutral: {
      50: 'var(--color-neutral-50)',
      100: 'var(--color-neutral-100)',
      200: 'var(--color-neutral-200)',
      300: 'var(--color-neutral-300)',
      400: 'var(--color-neutral-400)',
      500: 'var(--color-neutral-500)',
      600: 'var(--color-neutral-600)',
      700: 'var(--color-neutral-700)',
      800: 'var(--color-neutral-800)',
      900: 'var(--color-neutral-900)',
    },
  },
  spacing: {
    0: 'var(--space-0)',
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    8: 'var(--space-8)',
    10: 'var(--space-10)',
    12: 'var(--space-12)',
    16: 'var(--space-16)',
    20: 'var(--space-20)',
    24: 'var(--space-24)',
    32: 'var(--space-32)',
  },
  fontSize: {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    base: 'var(--font-size-base)',
    lg: 'var(--font-size-lg)',
    xl: 'var(--font-size-xl)',
    '2xl': 'var(--font-size-2xl)',
    '3xl': 'var(--font-size-3xl)',
    '4xl': 'var(--font-size-4xl)',
    '5xl': 'var(--font-size-5xl)',
  },
} as const;
