import React from 'react';
import { FormProps as ReactAriaFormProps } from 'react-aria-components';

/**
 * Props for the Form component
 */
export interface FormProps extends Omit<ReactAriaFormProps, 'children' | 'target'> {
  /**
   * The form content
   */
  children: React.ReactNode;

  /**
   * Size variant for the form
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Visual variant for the form
   * @default 'default'
   */
  variant?: 'default' | 'card' | 'inline';

  /**
   * Additional CSS class name for the form container
   */
  className?: string;

  /**
   * Form label for accessibility (creates a form landmark)
   */
  label?: string;

  /**
   * Form description text
   */
  description?: string;

  /**
   * Whether to show validation errors inline
   * @default true
   */
  showInlineErrors?: boolean;

  /**
   * Custom validation behavior
   * @default 'native'
   */
  validationBehavior?: 'native' | 'aria';

  /**
   * Server-side validation errors
   * Maps field names to error messages
   */
  validationErrors?: Record<string, string | string[]>;

  /**
   * Called when the form is submitted
   */
  onSubmit?: (_event: React.FormEvent) => void;

  /**
   * Called when the form is reset
   */
  onReset?: (_event: React.FormEvent) => void;

  /**
   * Called when the form has validation errors
   */
  onInvalid?: (_event: React.FormEvent) => void;

  /**
   * Form ID for identification
   */
  id?: string;

  /**
   * Whether the form is disabled
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Whether the form is in a loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * ARIA label for the form
   */
  'aria-label'?: string;

  /**
   * ARIA labelledby for the form
   */
  'aria-labelledby'?: string;

  /**
   * ARIA describedby for the form
   */
  'aria-describedby'?: string;
}

/**
 * Form validation error type
 */
export interface FormValidationError {
  field: string;
  message: string;
}
