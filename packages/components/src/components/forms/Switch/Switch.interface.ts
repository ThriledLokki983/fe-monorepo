import React from 'react';
import { SwitchProps as ReactAriaSwitchProps } from 'react-aria-components';

/**
 * Props for the Switch component
 */
export interface SwitchProps extends Omit<ReactAriaSwitchProps, 'children'> {
  /**
   * The content to display as the switch label
   */
  children?: React.ReactNode;

  /**
   * Size variant for the switch
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Color variant for the switch
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';

  /**
   * Additional CSS class name for the switch container
   */
  className?: string;

  /**
   * Additional CSS class name for the switch indicator
   */
  indicatorClassName?: string;

  /**
   * Additional CSS class name for the switch label
   */
  labelClassName?: string;

  /**
   * Whether the switch is selected (controlled)
   */
  isSelected?: boolean;

  /**
   * Default selected state (uncontrolled)
   */
  defaultSelected?: boolean;

  /**
   * Whether the switch is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the switch is read-only
   */
  isReadOnly?: boolean;

  /**
   * Whether the switch is required
   */
  isRequired?: boolean;

  /**
   * Whether the switch is invalid
   */
  isInvalid?: boolean;

  /**
   * Callback when the switch selection changes
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
   * ID of element that labels this switch
   */
  'aria-labelledby'?: string;

  /**
   * ID of element that describes this switch
   */
  'aria-describedby'?: string;
}
