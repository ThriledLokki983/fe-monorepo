import React from 'react';
import { CheckboxGroupProps as ReactAriaCheckboxGroupProps, ValidationResult } from 'react-aria-components';

/**
 * Props for the CheckboxGroup component
 */
export interface CheckboxGroupProps extends Omit<ReactAriaCheckboxGroupProps, 'children'> {
  /**
   * The checkboxes within the group
   */
  children?: React.ReactNode;

  /**
   * The label for the checkbox group
   */
  label?: string;

  /**
   * Description text for the checkbox group
   */
  description?: string;

  /**
   * Error message for validation
   */
  errorMessage?: string | ((_validation: ValidationResult) => string);

  /**
   * Size variant for the checkbox group
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Layout orientation for the checkboxes
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
   * Additional CSS class name for the checkboxes container
   */
  checkboxesClassName?: string;

  /**
   * Selected values (controlled)
   */
  value?: string[];

  /**
   * Default selected values (uncontrolled)
   */
  defaultValue?: string[];

  /**
   * Whether the checkbox group is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the checkbox group is read-only
   */
  isReadOnly?: boolean;

  /**
   * Whether the checkbox group is required (at least one selection)
   */
  isRequired?: boolean;

  /**
   * Whether the checkbox group is invalid
   */
  isInvalid?: boolean;

  /**
   * Callback when the selection changes
   */
  onChange?: (_value: string[]) => void;

  /**
   * Name attribute for HTML forms
   */
  name?: string;

  /**
   * Accessibility label when no visible label is provided
   */
  'aria-label'?: string;

  /**
   * ID of element that labels this checkbox group
   */
  'aria-labelledby'?: string;

  /**
   * ID of element that describes this checkbox group
   */
  'aria-describedby'?: string;
}

/**
 * Props for the CheckboxGroupLabel component
 */
export interface CheckboxGroupLabelProps {
  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Size variant
   */
  size?: CheckboxGroupProps['size'];

  /**
   * Label content
   */
  children?: React.ReactNode;
}

/**
 * Props for the CheckboxGroupDescription component
 */
export interface CheckboxGroupDescriptionProps {
  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Size variant
   */
  size?: CheckboxGroupProps['size'];

  /**
   * Description content
   */
  children?: React.ReactNode;
}

/**
 * Props for the CheckboxGroupError component
 */
export interface CheckboxGroupErrorProps {
  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Size variant
   */
  size?: CheckboxGroupProps['size'];

  /**
   * Error content
   */
  children?: React.ReactNode;
}
