import React from 'react';
import {
  MenuTrigger,
  Button,
  Popover,
  Menu as ReactAriaMenu,
  MenuItem as ReactAriaMenuItem,
  MenuSection as ReactAriaMenuSection,
  Header,
  Separator,
  Text,
  Keyboard,
} from 'react-aria-components';
import styles from './Menu.module.scss';
import {
  MenuButtonProps,
  MenuProps,
  MenuItemProps,
  MenuSectionProps,
  MenuSeparatorProps,
  MenuPopoverProps,
} from './Menu.interface';

// MenuButton Component - Main entry point
export const MenuButton = <T extends object = object>({
  label,
  children,
  className = '',
  variant = 'secondary',
  size = 'medium',
  disabled = false,
  icon,
  iconPosition = 'start',
  ...props
}: MenuButtonProps<T>) => {
  const buttonClasses = [
    styles.menuButton,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <MenuTrigger {...props}>
      <Button
        className={buttonClasses}
        isDisabled={disabled}
      >
        {icon && iconPosition === 'start' && (
          <span className={styles.iconStart}>{icon}</span>
        )}
        {label}
        {icon && iconPosition === 'end' && (
          <span className={styles.iconEnd}>{icon}</span>
        )}
      </Button>
      <MenuPopover>
        <Menu>
          {children}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

// MenuPopover Component
export const MenuPopover: React.FC<MenuPopoverProps> = ({
  children,
  className = '',
  ...props
}) => {
  const popoverClasses = [styles.popover, className].filter(Boolean).join(' ');

  return (
    <Popover className={popoverClasses} {...props}>
      {children}
    </Popover>
  );
};

// Menu Component
export const Menu = <T extends object = object>({
  children,
  className = '',
  ...props
}: MenuProps<T>) => {
  const menuClasses = [styles.menu, className].filter(Boolean).join(' ');

  return (
    <ReactAriaMenu className={menuClasses} {...props}>
      {children}
    </ReactAriaMenu>
  );
};

// MenuItem Component
export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className = '',
  icon,
  shortcut,
  description,
  destructive = false,
  textValue,
  ...props
}) => {
  const itemClasses = [
    styles.menuItem,
    destructive && styles.destructive,
    className,
  ].filter(Boolean).join(' ');

  // Determine textValue automatically if not provided
  const computedTextValue = textValue ||
    (typeof children === 'string' ? children : undefined);

  return (
    <ReactAriaMenuItem
      className={itemClasses}
      textValue={computedTextValue}
      {...props}
    >
      {({ hasSubmenu }) => (
        <>
          {icon && (
            <span className={styles.menuItemIcon}>{icon}</span>
          )}
          <div className={styles.menuItemContent}>
            {(description || typeof children !== 'string') ? (
              <>
                <Text slot="label" className={styles.menuItemLabel}>
                  {children}
                </Text>
                {description && (
                  <Text slot="description" className={styles.menuItemDescription}>
                    {description}
                  </Text>
                )}
              </>
            ) : (
              children
            )}
          </div>
          {shortcut && (
            <Keyboard className={styles.menuItemShortcut}>{shortcut}</Keyboard>
          )}
          {hasSubmenu && (
            <span className={styles.submenuTrigger} aria-hidden="true">
              ▶
            </span>
          )}
        </>
      )}
    </ReactAriaMenuItem>
  );
};

// MenuSection Component
export const MenuSection = <T extends object = object>({
  title,
  children,
  className = '',
  ...props
}: MenuSectionProps<T>) => {
  const sectionClasses = [styles.menuSection, className].filter(Boolean).join(' ');

  return (
    <ReactAriaMenuSection className={sectionClasses} {...props}>
      {title && (
        <Header className={styles.menuSectionHeader}>
          {title}
        </Header>
      )}
      {children}
    </ReactAriaMenuSection>
  );
};

// MenuSeparator Component
export const MenuSeparator: React.FC<MenuSeparatorProps> = ({
  className = '',
}) => {
  const separatorClasses = [styles.menuSeparator, className].filter(Boolean).join(' ');

  return <Separator className={separatorClasses} />;
};

// Default export for convenience
export default MenuButton;
