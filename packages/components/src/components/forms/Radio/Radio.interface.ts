import React from 'react';
import { RadioProps as ReactAriaRadioProps } from 'react-aria-components';

/**
 * Props for the Radio component
 */
export interface RadioProps extends Omit<ReactAriaRadioProps, 'children'> {
  /**
   * The label content for the radio button
   */
  children?: React.ReactNode;

  /**
   * Size variant for the radio button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Visual variant for the radio button
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';

  /**
   * Additional CSS class name for the radio container
   */
  className?: string;

  /**
   * Additional CSS class name for the radio indicator
   */
  indicatorClassName?: string;

  /**
   * Additional CSS class name for the label
   */
  labelClassName?: string;

  /**
   * Whether the radio is disabled
   */
  isDisabled?: boolean;

  /**
   * Whether the radio is invalid
   */
  isInvalid?: boolean;

  /**
   * Whether the radio is required
   */
  isRequired?: boolean;

  /**
   * Accessibility label when no visible label is provided
   */
  'aria-label'?: string;

  /**
   * ID of element that labels this radio
   */
  'aria-labelledby'?: string;

  /**
   * ID of element that describes this radio
   */
  'aria-describedby'?: string;
}

/**
 * Props for the RadioIndicator component
 */
export interface RadioIndicatorProps {
  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Size variant
   */
  size?: RadioProps['size'];

  /**
   * Visual variant
   */
  variant?: RadioProps['variant'];
}
