import React from 'react';
import { DisclosureGroupProps as ReactAriaDisclosureGroupProps } from 'react-aria-components';

export type DisclosureGroupVariant = 'default' | 'bordered' | 'separated';
export type DisclosureGroupSize = 'small' | 'medium' | 'large';

export interface DisclosureGroupProps extends Omit<ReactAriaDisclosureGroupProps, 'children'> {
  variant?: DisclosureGroupVariant;
  size?: DisclosureGroupSize;
  children?: React.ReactNode;
  className?: string;
  // Data attributes
  [key: `data-${string}`]: string | number | boolean | undefined;
}
