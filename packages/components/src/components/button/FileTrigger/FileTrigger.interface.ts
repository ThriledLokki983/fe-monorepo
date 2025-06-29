import React from 'react';
import { FileTriggerProps as ReactAriaFileTriggerProps } from 'react-aria-components';

export interface FileTriggerProps extends ReactAriaFileTriggerProps {
  children?: React.ReactNode;
  className?: string;
}
