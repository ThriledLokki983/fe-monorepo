import React from 'react';
import { TooltipProps as ReactAriaTooltipProps } from 'react-aria-components';

/**
 * Props for the Tooltip component
 */
export interface TooltipProps extends Omit<ReactAriaTooltipProps, 'children'> {
  /**
   * The content to display inside the tooltip
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
   * Size variant for the tooltip
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Props for the TooltipTrigger wrapper component
 */
export interface TooltipTriggerWrapperProps {
  /**
   * The trigger element and tooltip content
   */
  children: [React.ReactElement, React.ReactElement] | React.ReactNode;

  /**
   * Delay in milliseconds before showing the tooltip on hover
   * @default 700
   */
  delay?: number;

  /**
   * Whether the tooltip trigger is disabled
   * @default false
   */
  isDisabled?: boolean;

  /**
   * When the tooltip should be triggered
   * @default undefined (both focus and hover)
   */
  trigger?: 'focus';

  /**
   * Whether the tooltip is open (controlled)
   */
  isOpen?: boolean;

  /**
   * Default open state (uncontrolled)
   */
  defaultOpen?: boolean;

  /**
   * Callback when the open state changes
   */
  onOpenChange?: (_open: boolean) => void;
}

/**
 * Props for the TooltipArrow component
 */
export interface TooltipArrowProps {
  /**
   * Custom arrow element
   */
  children?: React.ReactElement;

  /**
   * Additional CSS class name
   */
  className?: string;
}
