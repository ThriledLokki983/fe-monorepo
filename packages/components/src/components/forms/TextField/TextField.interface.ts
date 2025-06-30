import { TextFieldProps as ReactAriaTextFieldProps, ValidationResult } from 'react-aria-components';

/**
 * Props for the TextField component
 */
export interface TextFieldProps extends Omit<ReactAriaTextFieldProps, 'children'> {
  /**
   * The label for the text field
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

  errorMessage?: string | ((_validation: ValidationResult) => string);

  /**
   * Size variant for the text field
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Visual variant for the text field
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';

  /**
   * Additional CSS class name for the text field container
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
   * Additional CSS class name for the description text
   */
  descriptionClassName?: string;

  /**
   * Additional CSS class name for the error message
   */
  errorClassName?: string;

  /**
   * Whether the text field supports multiple lines
   * @default false
   */
  isMultiline?: boolean;

  /**
   * Number of rows for multiline text area
   * @default 3
   */
  rows?: number;

  /**
   * Whether the text field is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the text field is read-only
   */
  isReadOnly?: boolean;

  /**
   * Whether the text field is required
   */
  isRequired?: boolean;

  /**
   * Whether the text field is invalid
   */
  isInvalid?: boolean;

  /**
   * The current value of the text field (controlled)
   */
  value?: string;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;

  /**
   * Callback when the value changes
   */

  onChange?: (_value: string) => void;

  /**
   * Name attribute for HTML forms
   */
  name?: string;

  /**
   * Input type (text, email, password, etc.)
   */
  type?: string;

  /**
   * Input mode for mobile keyboards
   */
  inputMode?: 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /**
   * Pattern for input validation
   */
  pattern?: string;

  /**
   * Minimum length for the input
   */
  minLength?: number;

  /**
   * Maximum length for the input
   */
  maxLength?: number;

  /**
   * Auto-complete behavior
   */
  autoComplete?: string;

  /**
   * Auto-focus the input on mount
   */
  autoFocus?: boolean;

  /**
   * Accessibility label when no visible label is provided
   */
  'aria-label'?: string;

  /**
   * ID of element that labels this text field
   */
  'aria-labelledby'?: string;

  /**
   * ID of element that describes this text field
   */
  'aria-describedby'?: string;
}
