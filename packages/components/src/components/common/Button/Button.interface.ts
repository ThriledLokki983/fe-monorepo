import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'transparent';
export type ButtonSize = 'small' | 'medium' | 'large';

// Base props shared between button and link variants
interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  // Support both React and React Aria patterns
  onClick?: () => void;
  onPress?: () => void;
  // Support both disabled patterns for backward compatibility
  disabled?: boolean;
  isDisabled?: boolean;
  // ARIA props
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

// Button-specific props when no url is provided
interface ButtonOnlyProps extends BaseButtonProps {
  url?: never;
  type?: 'button' | 'submit' | 'reset';
  // Link-specific props should not be available
  target?: never;
  rel?: never;
}

// Link-specific props when url is provided
interface LinkButtonProps extends BaseButtonProps {
  url: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  // Button-specific props should not be available
  type?: never;
}

export type ButtonProps = ButtonOnlyProps | LinkButtonProps;
