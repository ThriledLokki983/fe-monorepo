import React from 'react';
import { ToggleButton as ReactAriaToggleButton } from 'react-aria-components';
import styles from './ToggleButton.module.scss';
import { ToggleButtonProps } from './ToggleButton.interface';

export const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    ...restProps
  } = props;

  // Custom props that should be filtered out from React Aria components
  const customProps = ['variant', 'size'];

  // Props that are already handled explicitly in our component
  const handledProps = ['children', 'className'];

  // Filter out custom props from React Aria ToggleButton
  const getFilteredProps = () => {
    const filteredProps: Record<string, any> = {};

    Object.keys(restProps).forEach(key => {
      // Skip our custom props
      if (customProps.includes(key)) return;

      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // Allow all other valid React Aria ToggleButton props
      filteredProps[key] = (restProps as any)[key];
    });

    return filteredProps;
  };

  const toggleButtonClasses = [
    styles.toggleButton,
    styles[`toggleButton--${variant}`],
    styles[`toggleButton--${size}`],
    className
  ].filter(Boolean).join(' ');

  const filteredProps = getFilteredProps();

  return (
    <ReactAriaToggleButton
      className={toggleButtonClasses}
      data-variant={variant}
      data-size={size}
      {...filteredProps}
    >
      {children}
    </ReactAriaToggleButton>
  );
};

export default ToggleButton;
