import React from 'react';
import { NumberFieldProps as ReactAriaNumberFieldProps, ValidationResult } from 'react-aria-components';

/**
 * Props for the NumberField component
 */
export interface NumberFieldProps extends Omit<ReactAriaNumberFieldProps, 'children'> {
  /**
   * The label for the number field
   */
  label?: string;

  /**
   * Placeholder text for the input
   */
  placeholder?: string;

  /**
   * Description text to help users understand the field
   */
  description?: string;

  /**
   * Error message to display when the field is invalid
   */
  errorMessage?: string | ((validation: ValidationResult) => string);

  /**
   * Size variant for the number field
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Visual variant for the number field
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';

  /**
   * Additional CSS class name for the number field container
   */
  className?: string;

  /**
   * Additional CSS class name for the label
   */
  labelClassName?: string;

  /**
   * Additional CSS class name for the input group
   */
  groupClassName?: string;

  /**
   * Additional CSS class name for the input
   */
  inputClassName?: string;

  /**
   * Additional CSS class name for the increment button
   */
  incrementButtonClassName?: string;

  /**
   * Additional CSS class name for the decrement button
   */
  decrementButtonClassName?: string;

  /**
   * Additional CSS class name for the description text
   */
  descriptionClassName?: string;

  /**
   * Additional CSS class name for the error text
   */
  errorClassName?: string;

  /**
   * Whether the number field is disabled
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Whether the number field is read-only
   * @default false
   */
  isReadOnly?: boolean;

  /**
   * Whether the number field is required
   * @default false
   */
  isRequired?: boolean;

  /**
   * Whether the number field is invalid
   * @default false
   */
  isInvalid?: boolean;

  /**
   * The current value of the number field (controlled)
   */
  value?: number;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: number;

  /**
   * Callback when the value changes
   */
  onChange?: (value: number) => void;

  /**
   * Name attribute for HTML forms
   */
  name?: string;

  /**
   * Minimum allowed value
   */
  minValue?: number;

  /**
   * Maximum allowed value
   */
  maxValue?: number;

  /**
   * Step increment for the number field
   * @default 1
   */
  step?: number;

  /**
   * Format options for number formatting (Intl.NumberFormat options)
   */
  formatOptions?: Intl.NumberFormatOptions;

  /**
   * Auto-focus the input on mount
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Custom content for the increment button
   * @default "+"
   */
  incrementButtonContent?: React.ReactNode;

  /**
   * Custom content for the decrement button
   * @default "-"
   */
  decrementButtonContent?: React.ReactNode;

  /**
   * Whether to show the stepper buttons
   * @default true
   */
  showStepperButtons?: boolean;

  /**
   * Input mode for mobile keyboards
   */
  inputMode?: 'numeric' | 'decimal' | 'text';

  /**
   * Accessibility label when no visible label is provided
   */
  'aria-label'?: string;

  /**
   * Accessibility labelled by reference
   */
  'aria-labelledby'?: string;

  /**
   * Accessibility described by reference
   */
  'aria-describedby'?: string;
}
