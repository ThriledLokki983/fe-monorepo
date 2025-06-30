import React from 'react';
import { Link as ReactAriaLink } from 'react-aria-components';
import styles from './Link.module.scss';
import { LinkProps } from './Link.interface';

export const Link: React.FC<LinkProps> = (props) => {
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

  // Filter out custom props from React Aria Link
  const getFilteredProps = () => {
    const filteredProps: Record<string, any> = {};

    Object.keys(restProps).forEach(key => {
      // Skip our custom props
      if (customProps.includes(key)) return;

      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // Allow all other valid React Aria Link props
      filteredProps[key] = (restProps as any)[key];
    });

    return filteredProps;
  };

  const linkClasses = [
    styles.link,
    styles[`link--${variant}`],
    styles[`link--${size}`],
    className
  ].filter(Boolean).join(' ');

  const filteredProps = getFilteredProps();

  return (
    <ReactAriaLink
      className={linkClasses}
      data-variant={variant}
      data-size={size}
      {...filteredProps}
    >
      {children}
    </ReactAriaLink>
  );
};

export default Link;
