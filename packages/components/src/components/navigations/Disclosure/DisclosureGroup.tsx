import React from 'react';
import { DisclosureGroup as ReactAriaDisclosureGroup } from 'react-aria-components';
import styles from './DisclosureGroup.module.scss';
import { DisclosureGroupProps } from './DisclosureGroup.interface';

export const DisclosureGroup: React.FC<DisclosureGroupProps> = (props) => {
  const {
    children,
    variant = 'default',
    size = 'medium',
    className = '',
    ...restProps
  } = props;

  // Custom props that should be filtered out from React Aria components
  const customProps = ['variant', 'size'];

  // Props that are already handled explicitly in our component
  const handledProps = ['children', 'className'];

  // Filter out custom props from React Aria DisclosureGroup
  const getFilteredProps = () => {
    const filteredProps: Record<string, any> = {};

    Object.keys(restProps).forEach(key => {
      // Skip our custom props
      if (customProps.includes(key)) return;

      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // Allow all other valid React Aria DisclosureGroup props
      filteredProps[key] = (restProps as any)[key];
    });

    return filteredProps;
  };

  const disclosureGroupClasses = [
    styles.disclosureGroup,
    styles[`disclosureGroup--${variant}`],
    styles[`disclosureGroup--${size}`],
    className
  ].filter(Boolean).join(' ');

  const filteredProps = getFilteredProps();

  return (
    <ReactAriaDisclosureGroup
      className={disclosureGroupClasses}
      data-variant={variant}
      data-size={size}
      {...filteredProps}
    >
      {children}
    </ReactAriaDisclosureGroup>
  );
};

export default DisclosureGroup;
