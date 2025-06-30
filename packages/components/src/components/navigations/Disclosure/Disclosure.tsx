import React from 'react';
import {
  Disclosure as ReactAriaDisclosure,
  DisclosurePanel as ReactAriaDisclosurePanel,
  Button,
  Heading
} from 'react-aria-components';
import styles from './Disclosure.module.scss';
import {
  DisclosureProps,
  DisclosurePanelProps,
  DisclosureTriggerProps
} from './Disclosure.interface';

// Default chevron icon
const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Disclosure: React.FC<DisclosureProps> = (props) => {
  const {
    children,
    variant = 'default',
    size = 'medium',
    title,
    icon,
    hideIcon = false,
    className = '',
    ...restProps
  } = props;

  // Custom props that should be filtered out from React Aria components
  const customProps = ['variant', 'size', 'title', 'icon', 'hideIcon'];

  // Props that are already handled explicitly in our component
  const handledProps = ['children', 'className'];

  // Filter out custom props from React Aria Disclosure
  const getFilteredProps = () => {
    const filteredProps: Record<string, any> = {};

    Object.keys(restProps).forEach(key => {
      // Skip our custom props
      if (customProps.includes(key)) return;

      // Skip props that are already handled explicitly
      if (handledProps.includes(key)) return;

      // Allow all other valid React Aria Disclosure props
      filteredProps[key] = (restProps as any)[key];
    });

    return filteredProps;
  };

  const disclosureClasses = [
    styles.disclosure,
    styles[`disclosure--${variant}`],
    styles[`disclosure--${size}`],
    className
  ].filter(Boolean).join(' ');

  const triggerClasses = [
    styles.trigger,
    styles[`trigger--${variant}`],
    styles[`trigger--${size}`]
  ].filter(Boolean).join(' ');

  const iconClasses = [
    styles.icon,
    styles[`icon--${size}`]
  ].filter(Boolean).join(' ');

  return (
    <ReactAriaDisclosure
      className={disclosureClasses}
      {...getFilteredProps()}
    >
      <Heading className={styles.heading}>
        <Button slot="trigger" className={triggerClasses}>
          {!hideIcon && (
            <span className={iconClasses}>
              {icon || <ChevronIcon />}
            </span>
          )}
          {title && <span className={styles.title}>{title}</span>}
        </Button>
      </Heading>
      {children}
    </ReactAriaDisclosure>
  );
};

export const DisclosurePanel: React.FC<DisclosurePanelProps> = ({
  children,
  className = ''
}) => {
  const panelClasses = [
    styles.panel,
    className
  ].filter(Boolean).join(' ');

  return (
    <ReactAriaDisclosurePanel className={panelClasses}>
      {children}
    </ReactAriaDisclosurePanel>
  );
};

export const DisclosureTrigger: React.FC<DisclosureTriggerProps> = ({
  children,
  className = '',
  icon,
  hideIcon = false
}) => {
  const triggerClasses = [
    styles.customTrigger,
    className
  ].filter(Boolean).join(' ');

  const iconClasses = [
    styles.icon
  ].filter(Boolean).join(' ');

  return (
    <Button slot="trigger" className={triggerClasses}>
      {!hideIcon && (
        <span className={iconClasses}>
          {icon || <ChevronIcon />}
        </span>
      )}
      {children}
    </Button>
  );
};
