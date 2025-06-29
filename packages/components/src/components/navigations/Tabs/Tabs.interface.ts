import type { ReactNode } from 'react';
import type {
  TabsProps as AriaTabsProps,
  TabListProps as AriaTabListProps,
  TabProps as AriaTabProps,
  TabPanelProps as AriaTabPanelProps,
  Key
} from 'react-aria-components';

/**
 * Tabs container component props
 */
export interface TabsProps extends Omit<AriaTabsProps, 'className'> {
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children: ReactNode;
  /** Orientation of the tabs */
  orientation?: 'horizontal' | 'vertical';
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Visual variant */
  variant?: 'default' | 'pills' | 'underline';
}

/**
 * Tab list component props
 */
export interface TabListProps extends Omit<AriaTabListProps<object>, 'className'> {
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children: ReactNode;
}

/**
 * Individual tab component props
 */
export interface TabProps extends Omit<AriaTabProps, 'className'> {
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children: ReactNode;
  /** Tab identifier */
  id: Key;
  /** Whether the tab is disabled */
  isDisabled?: boolean;
}

/**
 * Tab panel component props
 */
export interface TabPanelProps extends Omit<AriaTabPanelProps, 'className' | 'id'> {
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children: ReactNode;
  /** Panel identifier (should match corresponding tab id) */
  id: Key;
}

/**
 * Tab item interface for dynamic tabs
 */
export interface TabItem {
  /** Unique identifier */
  id: Key;
  /** Tab title */
  title: string;
  /** Tab content */
  content: ReactNode;
  /** Whether the tab is disabled */
  isDisabled?: boolean;
}
