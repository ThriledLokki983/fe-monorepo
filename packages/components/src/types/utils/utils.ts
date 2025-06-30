/**
 * Utility functions for component library
 */

/**
 * Combines multiple CSS class names, filtering out falsy values
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Generates a unique ID with optional prefix
 */
export const generateId = (prefix = 'component'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Deep merges two objects
 */
export const deepMerge = <T extends Record<string, unknown>>(
  target: T,
  source: Partial<T>
): T => {
  const result = { ...target };

  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(
        result[key] as Record<string, unknown>,
        source[key] as Record<string, unknown>
      ) as T[Extract<keyof T, string>];
    } else {
      result[key] = source[key] as T[Extract<keyof T, string>];
    }
  }

  return result;
};

/**
 * Formats a string by replacing placeholders with values
 */
export const formatString = (template: string, values: Record<string, string | number>): string => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key]?.toString() || match;
  });
};
