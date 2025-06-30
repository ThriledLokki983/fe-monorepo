import React from 'react';
import { RadioGroupProps as ReactAriaRadioGroupProps, ValidationResult } from 'react-aria-components';

/**
 * Props for the RadioGroup component
 */
export interface RadioGroupProps extends Omit<ReactAriaRadioGroupProps, 'children'> {
  /**
   * The radio buttons within the group
   */
  children?: React.ReactNode;

  /**
   * The label for the radio group
   */
  label?: string;

  /**
   * Description text for the radio group
   */
  description?: string;

  /**
   * Error message for validation
   */

  errorMessage?: string | ((_validation: ValidationResult) => string);

  /**
   * Size variant for the radio group
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Layout orientation for the radio buttons
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Additional CSS class name for the group container
   */
  className?: string;

  /**
   * Additional CSS class name for the label
   */
  labelClassName?: string;

  /**
   * Additional CSS class name for the description
   */
  descriptionClassName?: string;

  /**
   * Additional CSS class name for the error message
   */
  errorClassName?: string;

  /**
   * Additional CSS class name for the radio buttons container
   */
  radiosClassName?: string;

  /**
   * Selected value (controlled)
   */
  value?: string;

  /**
   * Default selected value (uncontrolled)
   */
  defaultValue?: string;

  /**
   * Whether the radio group is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the radio group is read-only
   */
  isReadOnly?: boolean;

  /**
   * Whether the radio group is required
   */
  isRequired?: boolean;

  /**
   * Whether the radio group is invalid
   */
  isInvalid?: boolean;

  /**
   * Callback when the selection changes
   */

  onChange?: (_value: string) => void;

  /**
   * Name attribute for HTML forms
   */
  name?: string;

  /**
   * Accessibility label when no visible label is provided
   */
  'aria-label'?: string;

  /**
   * ID of element that labels this radio group
   */
  'aria-labelledby'?: string;

  /**
   * ID of element that describes this radio group
   */
  'aria-describedby'?: string;
}

/**
 * Props for the RadioGroupLabel component
 */
export interface RadioGroupLabelProps {
  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Size variant
   */
  size?: RadioGroupProps['size'];

  /**
   * Label content
   */
  children?: React.ReactNode;
}

/**
 * Props for the RadioGroupDescription component
 */
export interface RadioGroupDescriptionProps {
  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Size variant
   */
  size?: RadioGroupProps['size'];

  /**
   * Description content
   */
  children?: React.ReactNode;
}

/**
 * Props for the RadioGroupError component
 */
export interface RadioGroupErrorProps {
  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Size variant
   */
  size?: RadioGroupProps['size'];

  /**
   * Error content
   */
  children?: React.ReactNode;
}
