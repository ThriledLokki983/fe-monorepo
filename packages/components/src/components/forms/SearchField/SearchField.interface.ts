import React from 'react';
import { SearchFieldProps as ReactAriaSearchFieldProps, ValidationResult } from 'react-aria-components';

/**
 * Props for the SearchField component
 */
export interface SearchFieldProps extends Omit<ReactAriaSearchFieldProps, 'children'> {
  /**
   * The label for the search field
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
   * Size variant for the search field
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Visual variant for the search field
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';

  /**
   * Additional CSS class name for the search field container
   */
  className?: string;

  /**
   * Additional CSS class name for the label
   */
  labelClassName?: string;

  /**
   * Additional CSS class name for the input element
   */
  inputClassName?: string;

  /**
   * Additional CSS class name for the clear button
   */
  clearButtonClassName?: string;

  /**
   * Additional CSS class name for the description text
   */
  descriptionClassName?: string;

  /**
   * Additional CSS class name for the error message
   */
  errorClassName?: string;

  /**
   * Whether the search field is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the search field is read-only
   */
  isReadOnly?: boolean;

  /**
   * Whether the search field is required
   */
  isRequired?: boolean;

  /**
   * Whether the search field is invalid
   */
  isInvalid?: boolean;

  /**
   * The current value of the search field (controlled)
   */
  value?: string;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;

  /**
   * Callback when the value changes
   */
   
  onChange?: (value: string) => void;

  /**
   * Callback when the search is submitted (e.g., Enter key pressed)
   */
   
  onSubmit?: (value: string) => void;

  /**
   * Callback when the search field is cleared
   */
  onClear?: () => void;

  /**
   * Name attribute for HTML forms
   */
  name?: string;

  /**
   * Auto-complete behavior
   */
  autoComplete?: string;

  /**
   * Auto-focus the input on mount
   */
  autoFocus?: boolean;

  /**
   * Whether to show the clear button
   * @default true
   */
  showClearButton?: boolean;

  /**
   * Custom clear button icon or text
   * @default "✕"
   */
  clearButtonContent?: React.ReactNode;

  /**
   * Accessibility label when no visible label is provided
   */
  'aria-label'?: string;

  /**
   * ID of element that labels this search field
   */
  'aria-labelledby'?: string;

  /**
   * ID of element that describes this search field
   */
  'aria-describedby'?: string;
}
