import type { ReactNode } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

export interface ButtonProps extends Omit<AriaButtonProps, 'children'> {
  /**
   * Visual variant of the button
   */
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';

  /**
   * Size of the button
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;

  /**
   * Icon to display before the button text
   */
  leftIcon?: ReactNode;

  /**
   * Icon to display after the button text
   */
  rightIcon?: ReactNode;

  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;
}
