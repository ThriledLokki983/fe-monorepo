import { ReactNode } from 'react';

export interface BaseComponentProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
}

export interface ComponentWithChildren extends BaseComponentProps {
  children: ReactNode;
}

export type ComponentVariant = 'primary' | 'secondary' | 'tertiary' | 'default';
export type ComponentSize = 'small' | 'medium' | 'large';
export type ComponentState = 'default' | 'loading' | 'disabled' | 'error' | 'success';

export interface VariantProps {
  variant?: ComponentVariant;
}

export interface SizeProps {
  size?: ComponentSize;
}

export interface StateProps {
  state?: ComponentState;
}

export interface ClickableProps {
  onClick?: () => void;
  disabled?: boolean;
}

export interface FormElementProps {
  name?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (_value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
}
