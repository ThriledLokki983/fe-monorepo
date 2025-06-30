import { RangeCalendarProps as ReactAriaRangeCalendarProps } from 'react-aria-components';
import { ReactNode } from 'react';

export interface RangeCalendarProps<T extends import('react-aria-components').DateValue = import('react-aria-components').DateValue>
  extends Omit<ReactAriaRangeCalendarProps<T>, 'className' | 'children'> {
  /**
   * Additional CSS classes to apply to the range calendar
   */
  className?: string;

  /**
   * Child elements
   */
  children?: ReactNode;
}
