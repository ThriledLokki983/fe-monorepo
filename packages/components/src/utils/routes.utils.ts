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

  const queryPairs: string[] = [];
  Object.entries(params).forEach(([key, value]) => {
    queryPairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`);
  });

  const queryString = queryPairs.join('&');
  return queryString ? `${path}?${queryString}` : path;
};

/**
 * Parses query parameters from a URL string
 */
export const parseQueryParams = (url: string): Record<string, string> => {
  const params: Record<string, string> = {};

  try {
    const queryStart = url.indexOf('?');
    if (queryStart === -1) return params;

    const queryString = url.substring(queryStart + 1);
    const pairs = queryString.split('&');

    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      if (key && value) {
        params[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
  } catch {
    // Fallback for invalid URLs
  }

  return params;
};
