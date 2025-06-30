import React from 'react';
import { ToggleButtonGroupProps as ReactAriaToggleButtonGroupProps } from 'react-aria-components';

export type ToggleButtonGroupVariant = 'default' | 'bordered' | 'seamless';
export type ToggleButtonGroupSize = 'small' | 'medium' | 'large';
export type ToggleButtonGroupOrientation = 'horizontal' | 'vertical';

export interface ToggleButtonGroupProps extends ReactAriaToggleButtonGroupProps {
  variant?: ToggleButtonGroupVariant;
  size?: ToggleButtonGroupSize;
  orientation?: ToggleButtonGroupOrientation;
  children?: React.ReactNode;
  className?: string;
}
