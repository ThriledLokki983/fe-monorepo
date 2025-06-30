import React from 'react';
import { Breadcrumbs as ReactAriaBreadcrumbs, Breadcrumb as ReactAriaBreadcrumb } from 'react-aria-components';
import { Link } from '../Link';
import styles from './Breadcrumbs.module.scss';
import { BreadcrumbsProps, BreadcrumbProps, BreadcrumbItem } from './Breadcrumbs.interface';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const {
    children,
    variant = 'default',
    size = 'medium',
    className = '',
    isNavigationLandmark = false,
    navigationLabel = 'Breadcrumbs',
    items,
    ...restProps
  } = props;

  // Custom props that should be filtered out from React Aria components
  const customProps = ['variant', 'size', 'isNavigationLandmark', 'navigationLabel'];

  // Props that are already handled explicitly in our component
  const handledProps = ['children', 'className', 'items'];

  // Filter out custom props from React Aria Breadcrumbs
  const getFilteredProps = () => {
    const filteredProps: Record<string, any> = {};

    Object.keys(restProps).forEach(key => {
      // Skip our custom props
      if (customProps.includes(key)) return;

      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // Allow all other valid React Aria props
      filteredProps[key] = (restProps as any)[key];
    });

    return filteredProps;
  };

  const breadcrumbsClasses = [
    styles.breadcrumbs,
    styles[`breadcrumbs--${variant}`],
    styles[`breadcrumbs--${size}`],
    className
  ].filter(Boolean).join(' ');

  const filteredProps = getFilteredProps();

  // Render dynamic breadcrumbs if items are provided
  const renderDynamicBreadcrumbs = () => (
    <ReactAriaBreadcrumbs
      className={breadcrumbsClasses}
      data-variant={variant}
      data-size={size}
      items={items}
      {...filteredProps}
    >
      {(item: BreadcrumbItem) => (
        <Breadcrumb>
          {item.href ? (
            <Link href={item.href} isDisabled={item.isDisabled}>
              {item.label}
            </Link>
          ) : (
            <Link onPress={() => {}} isDisabled={item.isDisabled}>
              {item.label}
            </Link>
          )}
        </Breadcrumb>
      )}
    </ReactAriaBreadcrumbs>
  );

  // Render static breadcrumbs with children
  const renderStaticBreadcrumbs = () => (
    <ReactAriaBreadcrumbs
      className={breadcrumbsClasses}
      data-variant={variant}
      data-size={size}
      {...filteredProps}
    >
      {children}
    </ReactAriaBreadcrumbs>
  );

  const breadcrumbsElement = items ? renderDynamicBreadcrumbs() : renderStaticBreadcrumbs();

  // Wrap in navigation landmark if requested
  if (isNavigationLandmark) {
    return (
      <nav aria-label={navigationLabel}>
        {breadcrumbsElement}
      </nav>
    );
  }

  return breadcrumbsElement;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const {
    children,
    className = '',
    ...restProps
  } = props;

  // Props that are already handled explicitly in our component
  const handledProps = ['children', 'className'];

  // Filter out props that are already handled
  const getFilteredProps = () => {
    const filteredProps: Record<string, any> = {};

    Object.keys(restProps).forEach(key => {
      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // Allow all other valid React Aria props
      filteredProps[key] = (restProps as any)[key];
    });

    return filteredProps;
  };

  const breadcrumbClasses = [
    styles.breadcrumb,
    className
  ].filter(Boolean).join(' ');

  const filteredProps = getFilteredProps();

  return (
    <ReactAriaBreadcrumb
      className={breadcrumbClasses}
      {...filteredProps}
    >
      {children}
    </ReactAriaBreadcrumb>
  );
};

export default Breadcrumbs;
