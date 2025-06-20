import { forwardRef, type ElementRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';
import type { ButtonProps } from './Button.interface';
import styles from './Button.module.scss';

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(({
  variant = 'default',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  isDisabled,
  ...props
}, ref) => {
  const buttonDisabled = isDisabled || loading;

  return (
    <AriaButton
      ref={ref}
      className={`${styles.button} ${className}`.trim()}
      data-variant={variant}
      data-size={size}
      data-loading={loading}
      isDisabled={buttonDisabled}
      {...props}
    >
      {loading && <span className={styles.loader} />}
      {leftIcon && !loading && <span className={styles.leftIcon}>{leftIcon}</span>}
      <span className={styles.content}>{children}</span>
      {rightIcon && !loading && <span className={styles.rightIcon}>{rightIcon}</span>}
    </AriaButton>
  );
});

Button.displayName = 'Button';
