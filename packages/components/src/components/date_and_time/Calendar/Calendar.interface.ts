import { CalendarProps as ReactAriaCalendarProps } from 'react-aria-components';
import { ReactNode } from 'react';

export interface CalendarProps<T extends import('react-aria-components').DateValue = import('react-aria-components').DateValue>
  extends Omit<ReactAriaCalendarProps<T>, 'className' | 'children'> {
  /**
   * Error message to display when validation fails
   */
  errorMessage?: string;

  /**
   * Additional CSS classes to apply to the calendar
   */
  className?: string;

  /**
   * Child elements
   */
  children?: ReactNode;
}
