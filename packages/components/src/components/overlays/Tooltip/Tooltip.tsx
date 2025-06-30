import React from 'react';
import {
  Tooltip as ReactAriaTooltip,
  TooltipTrigger as ReactAriaTooltipTrigger,
  OverlayArrow,
} from 'react-aria-components';
import styles from './Tooltip.module.scss';
import { TooltipProps, TooltipTriggerWrapperProps, TooltipArrowProps } from './Tooltip.interface';

/**
 * Default arrow component for tooltips
 */
export const DefaultTooltipArrow: React.FC<TooltipArrowProps> = ({
  children,
  className = ''
}) => {
  const arrowClasses = [styles.tooltipArrow, className]
    .filter(Boolean)
    .join(' ');

  return (
    <OverlayArrow className={arrowClasses}>
      {children || (
        <svg width={8} height={8} viewBox="0 0 8 8" className={styles.arrowSvg}>
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      )}
    </OverlayArrow>
  );
};

/**
 * Tooltip component based on React Aria Tooltip
 *
 * A tooltip displays a description of an element on hover or focus.
 * It automatically positions itself relative to the trigger element
 * and includes accessibility features.
 *
 * @example
 * ```tsx
 * // Basic tooltip
 * <TooltipWrapper>
 *   <Button>Save</Button>
 *   <Tooltip>Save your changes</Tooltip>
 * </TooltipWrapper>
 *
 * // Tooltip with custom arrow
 * <TooltipWrapper>
 *   <IconButton icon="help" />
 *   <Tooltip arrowElement={<CustomArrow />}>
 *     Get help with this feature
 *   </Tooltip>
 * </TooltipWrapper>
 *
 * // Large tooltip without arrow
 * <TooltipWrapper>
 *   <Button>Settings</Button>
 *   <Tooltip size="large" showArrow={false}>
 *     Open the settings panel to configure your preferences
 *   </Tooltip>
 * </TooltipWrapper>
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
  children,
  showArrow = true,
  arrowElement,
  size = 'medium',
  className = '',
  ...props
}) => {
  const tooltipClasses = [
    styles.tooltip,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaTooltip {...props} className={tooltipClasses}>
      {(showArrow || arrowElement) && (
        arrowElement || <DefaultTooltipArrow />
      )}
      <div className={styles.tooltipContent}>
        {children}
      </div>
    </ReactAriaTooltip>
  );
};

/**
 * TooltipWrapper component that provides the trigger functionality
 *
 * This component wraps a trigger element and tooltip, providing the
 * hover and focus behavior for showing/hiding the tooltip.
 *
 * @example
 * ```tsx
 * <TooltipWrapper delay={500}>
 *   <Button>Hover me</Button>
 *   <Tooltip>This appears after a delay</Tooltip>
 * </TooltipWrapper>
 * ```
 */
export const TooltipWrapper: React.FC<TooltipTriggerWrapperProps> = ({
  children,
  delay = 700,
  isDisabled = false,
  trigger,
  isOpen,
  defaultOpen,
  onOpenChange,
  ...props
}) => {
  return (
    <ReactAriaTooltipTrigger
      {...props}
      delay={delay}
      isDisabled={isDisabled}
      trigger={trigger}
      isOpen={isOpen}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {children}
    </ReactAriaTooltipTrigger>
  );
};

/**
 * Compound component that combines trigger and tooltip for convenience
 *
 * @example
 * ```tsx
 * <CompoundTooltip
 *   trigger={<Button>Save</Button>}
 *   content="Save document"
 *   placement="top"
 * />
 * ```
 */
export const CompoundTooltip: React.FC<{
  trigger: React.ReactElement;
  content: React.ReactNode;
  placement?: TooltipProps['placement'];
  delay?: number;
  size?: TooltipProps['size'];
  showArrow?: boolean;
  className?: string;
}> = ({
  trigger,
  content,
  placement = 'top',
  delay = 700,
  size = 'medium',
  showArrow = true,
  className = '',
}) => {
  return (
    <TooltipWrapper delay={delay}>
      {trigger}
      <Tooltip
        placement={placement}
        size={size}
        showArrow={showArrow}
        className={className}
      >
        {content}
      </Tooltip>
    </TooltipWrapper>
  );
};

// Export the main components
export { type TooltipProps, type TooltipTriggerWrapperProps, type TooltipArrowProps } from './Tooltip.interface';
