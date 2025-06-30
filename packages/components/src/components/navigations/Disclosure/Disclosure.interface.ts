import React from 'react';
import { DisclosureProps as ReactAriaDisclosureProps } from 'react-aria-components';

export type DisclosureVariant = 'default' | 'minimal' | 'bordered';
export type DisclosureSize = 'small' | 'medium' | 'large';

export interface DisclosureProps extends Omit<ReactAriaDisclosureProps, 'children'> {
  variant?: DisclosureVariant;
  size?: DisclosureSize;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  // Icon props
  icon?: React.ReactNode;
  hideIcon?: boolean;
  // Data attributes
  [key: `data-${string}`]: string | number | boolean | undefined;
}

export interface DisclosurePanelProps {
  children?: React.ReactNode;
  className?: string;
}

export interface DisclosureTriggerProps {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  hideIcon?: boolean;
}
