import React from 'react';
import { CheckboxProps as ReactAriaCheckboxProps } from 'react-aria-components';

/**
 * Props for the Checkbox component
 */
export interface CheckboxProps extends Omit<ReactAriaCheckboxProps, 'children'> {
  /**
   * The label content for the checkbox
   */
  children?: React.ReactNode;

  /**
   * Size variant for the checkbox
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Visual variant for the checkbox
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';

  /**
   * Additional CSS class name for the checkbox container
   */
  className?: string;

  /**
   * Additional CSS class name for the checkbox indicator
   */
  indicatorClassName?: string;

  /**
   * Additional CSS class name for the label
   */
  labelClassName?: string;

  /**
   * Whether the checkbox is selected (controlled)
   */
  isSelected?: boolean;

  /**
   * Default selected state (uncontrolled)
   */
  defaultSelected?: boolean;

  /**
   * Whether the checkbox is in an indeterminate state
   */
  isIndeterminate?: boolean;

  /**
   * Whether the checkbox is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the checkbox is read-only
   */
  isReadOnly?: boolean;

  /**
   * Whether the checkbox is invalid
   */
  isInvalid?: boolean;

  /**
   * Whether the checkbox is required
   */
  isRequired?: boolean;

  /**
   * Callback when the selection state changes
   */
  onChange?: (isSelected: boolean) => void;

  /**
   * Name attribute for HTML forms
   */
  name?: string;

  /**
   * Value attribute for HTML forms
   */
  value?: string;

  /**
   * Accessibility label when no visible label is provided
   */
  'aria-label'?: string;

  /**
   * ID of element that labels this checkbox
   */
  'aria-labelledby'?: string;

  /**
   * ID of element that describes this checkbox
   */
  'aria-describedby'?: string;
}

/**
 * Props for the CheckboxIndicator component
 */
export interface CheckboxIndicatorProps {
  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Size variant
   */
  size?: CheckboxProps['size'];

  /**
   * Visual variant
   */
  variant?: CheckboxProps['variant'];
}
