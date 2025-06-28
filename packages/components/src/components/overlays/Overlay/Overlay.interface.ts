import React from 'react';
import { PopoverProps as ReactAriaPopoverProps } from 'react-aria-components';

/**
 * Props for the Overlay component
 */
export interface OverlayProps extends Omit<ReactAriaPopoverProps, 'children'> {
  /**
   * The content to display inside the overlay
   */
  children: React.ReactNode;

  /**
   * Whether to show an arrow pointing to the trigger
   * @default true
   */
  showArrow?: boolean;

  /**
   * Custom arrow element. If provided, showArrow is ignored
   */
  arrowElement?: React.ReactElement;

  /**
   * Size variant for the overlay
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Whether the overlay should include a dialog wrapper for accessibility
   * @default false
   */
  includeDialog?: boolean;

  /**
   * Dialog title when includeDialog is true
   */
  dialogTitle?: string;
}

/**
 * Props for the OverlayArrow component
 */
export interface OverlayArrowProps {
  /**
   * Custom arrow element
   */
  children?: React.ReactElement;

  /**
   * Additional CSS class name
   */
  className?: string;
}
