import React from 'react';

export type BreadcrumbsVariant = 'default' | 'minimal' | 'compact';
export type BreadcrumbsSize = 'small' | 'medium' | 'large';

// Breadcrumb item interface for dynamic collections
export interface BreadcrumbItem {
  id: string | number;
  label: string;
  href?: string;
  isDisabled?: boolean;
}

// Base props for Breadcrumbs component
export interface BreadcrumbsProps {
  variant?: BreadcrumbsVariant;
  size?: BreadcrumbsSize;
  children?: React.ReactNode;
  className?: string;
  // React Aria Breadcrumbs props
  isDisabled?: boolean;
  onAction?: (key: React.Key) => void;
  // Dynamic collection support
  items?: Iterable<BreadcrumbItem>;
  // ARIA props
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  // Common React Aria props
  id?: string;
  slot?: string;
  // Navigation landmark support
  isNavigationLandmark?: boolean;
  navigationLabel?: string;
  // Data attributes
  [key: `data-${string}`]: string | number | boolean | undefined;
}

// Individual Breadcrumb component props
export interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
  // ARIA props
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  // Common React Aria props
  id?: string;
  slot?: string;
  // Data attributes
  [key: `data-${string}`]: string | number | boolean | undefined;
}

// Re-export LinkProps for convenience when using with Breadcrumbs
export type { LinkProps } from '../Link/Link.interface';
