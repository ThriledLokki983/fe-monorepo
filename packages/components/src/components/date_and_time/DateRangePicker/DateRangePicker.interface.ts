/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DateRangePickerProps as ReactAriaDateRangePickerProps,
  DateValue
} from 'react-aria-components';
import { ReactNode } from 'react';

export interface DateRangePickerProps<T extends DateValue = DateValue>
  extends Omit<ReactAriaDateRangePickerProps<T>, 'className' | 'children'> {
  /**
   * The label for the date range picker
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
   * Additional CSS classes to apply to the date range picker
   */
  className?: string;

  /**
   * Child elements
   */
  children?: ReactNode;
}
