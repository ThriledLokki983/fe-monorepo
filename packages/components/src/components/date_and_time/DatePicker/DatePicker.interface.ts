/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  DatePickerProps as ReactAriaDatePickerProps,
  DateValue
} from 'react-aria-components';

export interface DatePickerProps<T extends DateValue = DateValue>
  extends Omit<ReactAriaDatePickerProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
  children?: React.ReactNode;
}
