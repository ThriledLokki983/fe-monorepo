import React from 'react';
import { DialogProps as ReactAriaDialogProps } from 'react-aria-components';

export type DialogRole = 'dialog' | 'alertdialog';
export type DialogSize = 'small' | 'medium' | 'large' | 'fullscreen';

// Base dialog props
export interface BaseDialogProps extends Omit<ReactAriaDialogProps, 'className'> {
  /**
   * The content to display in the dialog
   */
  children: React.ReactNode | (({ close }: { close: () => void }) => React.ReactNode);
  /**
   * Custom CSS class name
   */
  className?: string;
  /**
   * The role of the dialog
   * @default 'dialog'
   */
  role?: DialogRole;
  /**
   * The size of the dialog
   * @default 'medium'
   */
  size?: DialogSize;
  /**
   * Whether the dialog has a close button
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Custom close button content
   */
  closeButtonContent?: React.ReactNode;
  /**
   * Handler called when the dialog is closed
   */
  onClose?: () => void;
  /**
   * The title of the dialog (if not using a Heading component)
   */
  title?: string;
  /**
   * Whether the dialog should be dismissible by clicking outside or pressing Escape
   * @default true
   */
  isDismissable?: boolean;
}

// Dialog trigger props
export interface DialogTriggerProps {
  /**
   * The trigger element (usually a Button)
   */
  trigger: React.ReactElement;
  /**
   * The dialog content
   */
  children: React.ReactNode;
  /**
   * Whether the dialog is initially open
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Whether the dialog is controlled
   */
  isOpen?: boolean;
  /**
   * Handler called when the dialog open state changes
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * Whether the dialog should be dismissible
   * @default true
   */
  isDismissable?: boolean;
  /**
   * Whether the dialog should be rendered as a modal
   * @default true
   */
  isModal?: boolean;
  /**
   * Whether the dialog should be keyboard dismissible
   * @default true
   */
  isKeyboardDismissDisabled?: boolean;
}

// Complete dialog props
export interface DialogProps extends BaseDialogProps {}

// Props for the compound dialog (with trigger)
export interface CompoundDialogProps extends DialogTriggerProps {
  /**
   * Props to pass to the dialog content
   */
  dialogProps?: Omit<DialogProps, 'children'>;
}
