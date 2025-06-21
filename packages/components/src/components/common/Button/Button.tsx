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
    ...restProps
  } = props;

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

    const LinkComponent = ReactAriaLink as any;

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
        {...(restProps as any)}
      >
        {children}
      </LinkComponent>
    );
  }

  // Otherwise, render as a button using React Aria
  const { type = 'button' } = props;
  const ButtonComponent = ReactAriaButton as any;

  return (
    <ButtonComponent
      className={buttonClasses}
      isDisabled={buttonDisabled}
      onPress={handlePress}
      data-variant={variant}
      data-size={size}
      type={type}
      {...(restProps as any)}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
