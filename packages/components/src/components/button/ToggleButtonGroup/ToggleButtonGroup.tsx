import React from 'react';
import { ToggleButtonGroup as ReactAriaToggleButtonGroup } from 'react-aria-components';
import styles from './ToggleButtonGroup.module.scss';
import { ToggleButtonGroupProps } from './ToggleButtonGroup.interface';

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = (props) => {
  const {
    children,
    variant = 'default',
    size = 'medium',
    orientation = 'horizontal',
    className = '',
    ...restProps
  } = props;

  // Custom props that should be filtered out from React Aria components
  const customProps = ['variant', 'size'];

  // Props that are already handled explicitly in our component
  const handledProps = ['children', 'className', 'orientation'];

  // Filter out custom props from React Aria ToggleButtonGroup
  const getFilteredProps = () => {
    const filteredProps: Record<string, any> = {};

    Object.keys(restProps).forEach(key => {
      // Skip our custom props
      if (customProps.includes(key)) return;

      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // Allow all other valid React Aria ToggleButtonGroup props
      filteredProps[key] = (restProps as any)[key];
    });

    return filteredProps;
  };

  const toggleButtonGroupClasses = [
    styles.toggleButtonGroup,
    styles[`toggleButtonGroup--${variant}`],
    styles[`toggleButtonGroup--${size}`],
    styles[`toggleButtonGroup--${orientation}`],
    className
  ].filter(Boolean).join(' ');

  const filteredProps = getFilteredProps();

  return (
    <ReactAriaToggleButtonGroup
      className={toggleButtonGroupClasses}
      orientation={orientation}
      data-variant={variant}
      data-size={size}
      data-orientation={orientation}
      {...filteredProps}
    >
      {children}
    </ReactAriaToggleButtonGroup>
  );
};

export default ToggleButtonGroup;
