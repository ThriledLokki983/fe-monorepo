/**
 * Route utility functions
 */

export interface RouteConfig {
  path: string;
  name: string;
  title?: string;
  description?: string;
}

/**
 * Generates a URL with query parameters
 */
export const buildUrl = (path: string, params?: Record<string, string | number>): string => {
  if (!params) return path;

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value.toString());
  });

  const queryString = searchParams.toString();
  return queryString ? `${path}?${queryString}` : path;
};

/**
 * Parses query parameters from a URL string
 */
export const parseQueryParams = (url: string): Record<string, string> => {
  const params: Record<string, string> = {};

  try {
    const urlObj = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    urlObj.searchParams.forEach((value, key) => {
      params[key] = value;
    });
  } catch {
    // Fallback for invalid URLs
  }

  return params;
};

/**
 * Validates if a path matches a route pattern
 */
export const matchesRoute = (path: string, pattern: string): boolean => {
  const pathSegments = path.split('/').filter(Boolean);
  const patternSegments = pattern.split('/').filter(Boolean);

  if (pathSegments.length !== patternSegments.length) {
    return false;
  }

  return patternSegments.every((segment, index) => {
    return segment.startsWith(':') || segment === pathSegments[index];
  });
};
