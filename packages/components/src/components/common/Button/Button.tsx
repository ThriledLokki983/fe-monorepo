import React from 'react';
import { Button as ReactAriaButton } from 'react-aria-components';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.interface';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isDisabled = false,
  onPress,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
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

  return (
    <ReactAriaButton
      className={buttonClasses}
      isDisabled={buttonDisabled}
      onPress={handlePress}
      type={type}
      {...props}
    >
      {children}
    </ReactAriaButton>
  );
};

export default Button;
