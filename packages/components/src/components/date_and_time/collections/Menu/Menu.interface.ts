import React from 'react';
import {
  MenuTriggerProps as ReactAriaMenuTriggerProps,
  MenuProps as ReactAriaMenuProps,
  MenuItemProps as ReactAriaMenuItemProps,
  MenuSectionProps as ReactAriaMenuSectionProps,
  PopoverProps as ReactAriaPopoverProps,
  Selection,
} from 'react-aria-components';

export interface MenuButtonProps<T extends object = object>
  extends Omit<ReactAriaMenuTriggerProps, 'children'>,
    Pick<ReactAriaMenuProps<T>, 'items' | 'onAction' | 'onSelectionChange' | 'selectedKeys' | 'defaultSelectedKeys' | 'selectionMode' | 'disabledKeys'> {
  /** The label for the menu trigger button */
  label?: string;
  /** The content of the menu */
  children: React.ReactNode;
  /** Custom class name for the menu button */
  className?: string;
  /** Variant of the menu button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Size of the menu button */
  size?: 'small' | 'medium' | 'large';
  /** Whether the menu button is disabled */
  disabled?: boolean;
  /** Icon to display in the menu button */
  icon?: React.ReactNode;
  /** Position of the icon relative to the label */
  iconPosition?: 'start' | 'end';
}

export interface MenuProps<T extends object = object> extends ReactAriaMenuProps<T> {
  /** Custom class name for the menu */
  className?: string;
  /** The content of the menu */
  children: React.ReactNode;
}

export interface MenuItemProps extends Omit<ReactAriaMenuItemProps, 'children'> {
  /** The content of the menu item */
  children?: React.ReactNode;
  /** Custom class name for the menu item */
  className?: string;
  /** Icon to display in the menu item */
  icon?: React.ReactNode;
  /** Keyboard shortcut to display */
  shortcut?: string;
  /** Description text for the menu item */
  description?: string;
  /** Whether this menu item is destructive (e.g., delete action) */
  destructive?: boolean;
}

export interface MenuSectionProps<T extends object = object> extends ReactAriaMenuSectionProps<T> {
  /** The title of the section */
  title?: string;
  /** Custom class name for the menu section */
  className?: string;
  /** The content of the menu section */
  children: React.ReactNode;
}

export interface MenuSeparatorProps {
  /** Custom class name for the separator */
  className?: string;
}

export interface MenuPopoverProps extends ReactAriaPopoverProps {
  /** Custom class name for the popover */
  className?: string;
  /** The content of the popover */
  children: React.ReactNode;
}

// Re-export types for convenience
export type { Selection } from 'react-aria-components';
