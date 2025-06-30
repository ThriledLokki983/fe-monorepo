import React from 'react';
import { ToggleButtonProps as ReactAriaToggleButtonProps } from 'react-aria-components';

export type ToggleButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'transparent';
export type ToggleButtonSize = 'small' | 'medium' | 'large';

export interface ToggleButtonProps extends ReactAriaToggleButtonProps {
  variant?: ToggleButtonVariant;
  size?: ToggleButtonSize;
  children?: React.ReactNode;
  className?: string;
}
