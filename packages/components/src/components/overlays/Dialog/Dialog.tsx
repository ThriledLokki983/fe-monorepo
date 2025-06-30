import React from 'react';
import {
  Dialog as ReactAriaDialog,
  DialogTrigger as ReactAriaDialogTrigger,
  Modal,
  Popover,
  OverlayArrow,
  Heading,
  Button as ReactAriaButton,
} from 'react-aria-components';
import { X } from 'lucide-react';
import styles from './Dialog.module.scss';
import {
  DialogProps,
  DialogTriggerProps,
  CompoundDialogProps,
} from './Dialog.interface';

/**
 * Dialog component based on React Aria Components
 *
 * A dialog is an overlay shown above other content in an application.
 * It provides accessible focus management and keyboard navigation.
 */
export const Dialog: React.FC<DialogProps> = ({
  children,
  className = '',
  role = 'dialog',
  size = 'medium',
  showCloseButton = true,
  closeButtonContent,
  onClose,
  title,
  ...props
}) => {
  const dialogClasses = [
    styles.dialog,
    styles[size],
    role === 'alertdialog' ? styles.alertDialog : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ReactAriaDialog
      {...props}
      role={role}
      className={dialogClasses}
    >
      {({ close }) => (
        <>
          {(title || showCloseButton) && (
            <div className={styles.header}>
              {title && (
                <Heading slot="title" className={styles.title}>
                  {title}
                </Heading>
              )}
              {showCloseButton && (
                <ReactAriaButton
                  slot="close"
                  className={styles.closeButton}
                  onPress={() => {
                    close();
                    onClose?.();
                  }}
                  aria-label="Close dialog"
                >
                  {closeButtonContent || <X />}
                </ReactAriaButton>
              )}
            </div>
          )}
          <div className={styles.content}>
            {typeof children === 'function' ? children({ close }) : children}
          </div>
        </>
      )}
    </ReactAriaDialog>
  );
};

/**
 * DialogTrigger component for creating a dialog with a trigger element
 *
 * This component handles the complete dialog flow including trigger,
 * overlay, and focus management.
 */
export const DialogTrigger: React.FC<DialogTriggerProps> = ({
  trigger,
  children,
  defaultOpen = false,
  isOpen,
  onOpenChange,
  isDismissable = true,
  isModal = true,
  isKeyboardDismissDisabled = false,
}) => {
  return (
    <ReactAriaDialogTrigger
      defaultOpen={defaultOpen}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      {trigger}
      {isModal ? (
        <Modal
          isDismissable={isDismissable}
          isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          className={styles.modalBackdrop}
        >
          {children}
        </Modal>
      ) : (
        <Popover
          className={styles.popover}
        >
          <OverlayArrow className={styles.arrow}>
            <svg width={12} height={12} viewBox="0 0 12 12">
              <path d="M0 0 L6 6 L12 0" />
            </svg>
          </OverlayArrow>
          {children}
        </Popover>
      )}
    </ReactAriaDialogTrigger>
  );
};

/**
 * CompoundDialog component that combines trigger and dialog
 *
 * This is a convenience component that creates a complete dialog
 * experience with minimal configuration.
 */
export const CompoundDialog: React.FC<CompoundDialogProps> = ({
  trigger,
  children,
  dialogProps = {},
  defaultOpen,
  isOpen,
  onOpenChange,
  isDismissable,
  isModal,
  isKeyboardDismissDisabled,
}) => {
  return (
    <DialogTrigger
      trigger={trigger}
      defaultOpen={defaultOpen}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={isDismissable}
      isModal={isModal}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
    >
      <Dialog {...dialogProps}>
        {children}
      </Dialog>
    </DialogTrigger>
  );
};

/**
 * AlertDialog - A specialized dialog for confirmations and alerts
 */
export const AlertDialog: React.FC<DialogProps> = (props) => {
  return <Dialog {...props} role="alertdialog" />;
};

/**
 * PopoverDialog - A dialog displayed in a popover instead of a modal
 */
export const PopoverDialog: React.FC<
  Omit<DialogTriggerProps, 'isModal'> & {
    dialogProps?: Omit<DialogProps, 'children'>;
  }
> = ({ trigger, children, dialogProps, ...props }) => {
  return (
    <DialogTrigger {...props} trigger={trigger} isModal={false}>
      <Dialog {...dialogProps}>{children}</Dialog>
    </DialogTrigger>
  );
};

// Export a default Dialog for backwards compatibility
export { Dialog as default };
