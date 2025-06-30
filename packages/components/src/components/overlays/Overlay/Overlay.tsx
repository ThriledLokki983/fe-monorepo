import React from 'react';
import {
  Popover as ReactAriaPopover,
  OverlayArrow,
  Dialog,
} from 'react-aria-components';
import styles from './Overlay.module.scss';
import { OverlayProps, OverlayArrowProps } from './Overlay.interface';

/**
 * Default arrow component for overlays
 */
export const DefaultOverlayArrow: React.FC<OverlayArrowProps> = ({
  children,
  className = ''
}) => {
  const arrowClasses = [styles.overlayArrow, className]
    .filter(Boolean)
    .join(' ');

  return (
    <OverlayArrow className={arrowClasses}>
      {children || (
        <svg width={12} height={12} viewBox="0 0 12 12" className={styles.arrowSvg}>
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      )}
    </OverlayArrow>
  );
};

/**
 * Overlay component based on React Aria Popover
 *
 * An overlay is positioned relative to a trigger element and can contain
 * various types of content like menus, tooltips, or custom content.
 *
 * @example
 * ```tsx
 * // Basic overlay
 * <DialogTrigger>
 *   <Button>Open</Button>
 *   <Overlay>
 *     <p>Overlay content</p>
 *   </Overlay>
 * </DialogTrigger>
 *
 * // Overlay with dialog for accessibility
 * <DialogTrigger>
 *   <Button>Settings</Button>
 *   <Overlay includeDialog dialogTitle="Settings">
 *     <Switch>Wi-Fi</Switch>
 *     <Switch>Bluetooth</Switch>
 *   </Overlay>
 * </DialogTrigger>
 *
 * // Controlled overlay
 * <Overlay
 *   isOpen={isOpen}
 *   onOpenChange={setOpen}
 *   triggerRef={triggerRef}
 * >
 *   <p>Controlled content</p>
 * </Overlay>
 * ```
 */
export const Overlay: React.FC<OverlayProps> = ({
  children,
  showArrow = true,
  arrowElement,
  size = 'medium',
  className = '',
  includeDialog = false,
  dialogTitle,
  ...props
}) => {
  const overlayClasses = [
    styles.overlay,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = includeDialog ? (
    <Dialog className={styles.overlayDialog} role="dialog">
      {dialogTitle && <h2 className={styles.dialogTitle}>{dialogTitle}</h2>}
      <div className={styles.dialogContent}>
        {children}
      </div>
    </Dialog>
  ) : (
    <div className={styles.overlayContent}>
      {children}
    </div>
  );

  return (
    <ReactAriaPopover {...props} className={overlayClasses}>
      {(showArrow || arrowElement) && (
        arrowElement || <DefaultOverlayArrow />
      )}
      {content}
    </ReactAriaPopover>
  );
};
