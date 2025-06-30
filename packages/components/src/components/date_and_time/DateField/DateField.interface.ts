import { DateFieldProps as ReactAriaDateFieldProps } from 'react-aria-components';
import { ReactNode } from 'react';

export interface DateFieldProps<T extends import('react-aria-components').DateValue = import('react-aria-components').DateValue>
  extends Omit<ReactAriaDateFieldProps<T>, 'className' | 'children'> {
  /**
   * The label for the date field
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
   * Additional CSS classes to apply to the date field
   */
  className?: string;

  /**
   * Child elements
   */
  children?: ReactNode;
}
