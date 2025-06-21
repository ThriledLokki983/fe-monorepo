import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  // Support both React and React Aria patterns
  onClick?: () => void;
  onPress?: () => void;
  // Support both disabled patterns for backward compatibility
  disabled?: boolean;
  isDisabled?: boolean;
  // Common props
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  // ARIA props
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}
