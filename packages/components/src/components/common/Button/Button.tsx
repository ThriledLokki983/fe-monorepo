import React from 'react';
import { Button as ReactAriaButton, Link as ReactAriaLink } from 'react-aria-components';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.interface';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    isDisabled = false,
    onPress,
    onClick,
    className = '',
    // Extract all props that should not be passed to React Aria components
    ...restProps
  } = props;

  // Custom props that should be filtered out from React Aria components
  const customProps = ['variant', 'size'];

  // Props that are already handled explicitly in our component
  const handledProps = ['children', 'className', 'disabled', 'isDisabled', 'onPress', 'onClick', 'aria-label', 'aria-labelledby', 'aria-describedby'];

  // Button-specific props that should not be passed to Link components
  const buttonOnlyProps = ['type', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'autoFocus', 'formTarget'];

  // Link-specific props that should not be passed to Button components
  const linkOnlyProps = ['url', 'target', 'rel', 'href', 'download', 'ping', 'referrerPolicy'];

  // Filter out custom props and invalid combinations
  const getFilteredProps = (isLink: boolean) => {
    const filteredProps: Record<string, any> = {};

    // Only include props that are valid for the specific component type
    Object.keys(restProps).forEach(key => {
      // Skip our custom props
      if (customProps.includes(key)) return;

      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // For button mode, exclude link-specific props
      if (!isLink && linkOnlyProps.includes(key)) return;

      // For link mode, exclude button-specific props
      if (isLink && buttonOnlyProps.includes(key)) return;

      // Allow data-* and aria-* attributes (but not ones we handle explicitly)
      if (key.startsWith('data-') || (key.startsWith('aria-') && !handledProps.includes(key))) {
        filteredProps[key] = (restProps as any)[key];
        return;
      }

      // Allow common React Aria props
      const allowedReactAriaProps = [
        'id', 'slot', 'excludeFromTabOrder', 'autoFocus', 'onHover', 'onHoverStart', 'onHoverEnd', 'onFocus', 'onBlur', 'onFocusChange', 'onKeyDown', 'onKeyUp', 'onPressStart', 'onPressEnd', 'onPressChange', 'onPressUp'
      ];

      if (allowedReactAriaProps.includes(key)) {
        filteredProps[key] = (restProps as any)[key];
      }
    });

    return filteredProps;
  };

  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  ].filter(Boolean).join(' ');

  // Handle both onClick (standard React) and onPress (React Aria) patterns
  const handlePress = () => {
    if (onPress) onPress();
    if (onClick) onClick();
  };

  // Support both disabled and isDisabled for backward compatibility
  const buttonDisabled = disabled || isDisabled;

  // If url is provided, render as a link using React Aria's Link
  if ('url' in props && props.url) {
    const { url, target, rel } = props;
    const linkFilteredProps = getFilteredProps(true);

    // Use type assertion to fix React Aria compatibility issues
    const LinkComponent = ReactAriaLink as React.ComponentType<any>;

    return (
      <LinkComponent
        href={url}
        target={target}
        data-link="button-link"
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={buttonClasses}
        onPress={buttonDisabled ? undefined : handlePress}
        data-variant={variant}
        data-size={size}
        isDisabled={buttonDisabled}
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
        aria-describedby={props['aria-describedby']}
        {...linkFilteredProps}
      >
        {children}
      </LinkComponent>
    );
  }

  // Otherwise, render as a button using React Aria
  const { type = 'button' } = props;
  const buttonFilteredProps = getFilteredProps(false);

  // Use type assertion to fix React Aria compatibility issues
  const ButtonComponent = ReactAriaButton as React.ComponentType<any>;

  return (
    <ButtonComponent
      className={buttonClasses}
      isDisabled={buttonDisabled}
      onPress={handlePress}
      data-variant={variant}
      data-size={size}
      type={type}
      aria-label={props['aria-label']}
      aria-labelledby={props['aria-labelledby']}
      aria-describedby={props['aria-describedby']}
      {...buttonFilteredProps}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
