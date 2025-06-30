import { TimeFieldProps as ReactAriaTimeFieldProps } from 'react-aria-components';
import { ReactNode } from 'react';

export interface TimeFieldProps<T extends import('react-aria-components').TimeValue = import('react-aria-components').TimeValue>
  extends Omit<ReactAriaTimeFieldProps<T>, 'className' | 'children'> {
  /**
   * The label for the time field
   */
  label?: string;

  /**
   * Description text to display below the input
   */
  description?: string;

  /**
   * Error message to display when validation fails
   */
  errorMessage?: string;

  /**
   * Additional CSS classes to apply to the time field
   */
  className?: string;

  /**
   * Child elements
   */
  children?: ReactNode;
}
