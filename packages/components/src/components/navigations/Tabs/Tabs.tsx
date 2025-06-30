import React from 'react';
import {
  Tabs as AriaTabs,
  TabList as AriaTabList,
  Tab as AriaTab,
  TabPanel as AriaTabPanel,
  Collection
} from 'react-aria-components';
import { clsx } from 'clsx';

import type {
  TabsProps,
  TabListProps,
  TabProps,
  TabPanelProps,
  TabItem
} from './Tabs.interface';
import styles from './Tabs.module.scss';

/**
 * Tabs component - organize content into multiple sections and allow users to navigate between them
 *
 * Features:
 * - Built on React Aria Components for accessibility
 * - Multiple size variants (small, medium, large)
 * - Multiple visual variants (default, pills, underline)
 * - Horizontal and vertical orientations
 * - Keyboard navigation with arrow keys
 * - Support for disabled tabs
 * - Controlled and uncontrolled selection
 * - Dynamic tab creation
 * - Focus management and ARIA compliance
 */

/**
 * Main Tabs container component
 */
export const Tabs: React.FC<TabsProps> = ({
  className,
  children,
  size = 'medium',
  variant = 'default',
  orientation = 'horizontal',
  ...props
}) => {
  return (
    <AriaTabs
      className={clsx(
        styles.tabs,
        styles[size],
        variant !== 'default' && styles[`variant--${variant}`],
        className
      )}
      orientation={orientation}
      {...props}
    >
      {children}
    </AriaTabs>
  );
};

/**
 * TabList component - container for tab buttons
 */
export const TabList: React.FC<TabListProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <AriaTabList
      className={clsx(styles.tabList, className)}
      {...props}
    >
      {children}
    </AriaTabList>
  );
};

/**
 * Tab component - individual tab button
 */
export const Tab: React.FC<TabProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <AriaTab
      className={clsx(styles.tab, className)}
      {...props}
    >
      {children}
    </AriaTab>
  );
};

/**
 * TabPanel component - content area for each tab
 */
export const TabPanel: React.FC<TabPanelProps> = ({
  className,
  children,
  id,
  ...props
}) => {
  return (
    <AriaTabPanel
      className={clsx(styles.tabPanel, className)}
      id={String(id)}
      {...props}
    >
      {children}
    </AriaTabPanel>
  );
};

/**
 * Dynamic Tabs component for programmatically generated tabs
 */
export interface DynamicTabsProps extends Omit<TabsProps, 'children' | 'disabledKeys'> {
  /** Array of tab items */
  items: TabItem[];
  /** Keys of disabled tabs */
  disabledKeys?: Iterable<string | number>;
}

export const DynamicTabs: React.FC<DynamicTabsProps> = ({
  items,
  disabledKeys,
  className,
  size = 'medium',
  variant = 'default',
  orientation = 'horizontal',
  ...props
}) => {
  return (
    <AriaTabs
      className={clsx(
        styles.tabs,
        styles[size],
        variant !== 'default' && styles[`variant--${variant}`],
        className
      )}
      orientation={orientation}
      disabledKeys={disabledKeys}
      {...props}
    >
      <AriaTabList
        className={styles.tabList}
        items={items}
      >
        {(item) => (
          <AriaTab
            key={item.id}
            className={styles.tab}
            id={item.id}
            isDisabled={item.isDisabled}
          >
            {item.title}
          </AriaTab>
        )}
      </AriaTabList>
      <Collection items={items}>
        {(item) => (
          <AriaTabPanel
            key={item.id}
            className={styles.tabPanel}
            id={String(item.id)}
          >
            {item.content}
          </AriaTabPanel>
        )}
      </Collection>
    </AriaTabs>
  );
};

// Default export
export default Tabs;
