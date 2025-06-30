import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, DynamicTabs, Button } from '@mono/components';
import type { Key } from 'react-aria-components';
import styles from './DemoTabs.module.scss';

type TabKey = 'basic' | 'variants' | 'orientation' | 'dynamic' | 'advanced';

export const DemoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedBasicTab, setSelectedBasicTab] = useState<Key>('basic-tab1');
  const [selectedDynamicTab, setSelectedDynamicTab] = useState<Key>('profile');
  const [nextTabId, setNextTabId] = useState(5); // Start after initial tabs

  // Dynamic tabs data
  const [dynamicTabs, setDynamicTabs] = useState([
    { id: 'profile', title: 'Profile', content: 'User profile settings and information.' },
    { id: 'account', title: 'Account', content: 'Account management and security settings.' },
    { id: 'notifications', title: 'Notifications', content: 'Customize your notification preferences.' },
    { id: 'privacy', title: 'Privacy', content: 'Privacy settings and data management.' },
  ]);

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'orientation' as const, label: 'Orientation' },
    { key: 'dynamic' as const, label: 'Dynamic Tabs' },
    { key: 'advanced' as const, label: 'Advanced' },
  ];

  const addDynamicTab = () => {
    const newId = `dynamic-tab-${nextTabId}`;
    setDynamicTabs(prev => [...prev, {
      id: newId,
      title: `Tab ${nextTabId}`,
      content: `Content for tab ${nextTabId}. This tab was added dynamically.`
    }]);
    setNextTabId(prev => prev + 1);
  };

  const removeDynamicTab = () => {
    if (dynamicTabs.length > 1) {
      setDynamicTabs(prev => {
        const newTabs = prev.slice(0, -1);
        // If the currently selected tab is being removed, switch to the first tab
        const removedTab = prev[prev.length - 1];
        if (selectedDynamicTab === removedTab.id && newTabs.length > 0) {
          setSelectedDynamicTab(newTabs[0].id);
        }
        return newTabs;
      });
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Tabs</h4>
            <div className={styles.componentRow}>
              <Tabs
                selectedKey={selectedBasicTab}
                onSelectionChange={setSelectedBasicTab}
              >
                <TabList aria-label="Basic tabs example">
                  <Tab id="basic-tab1">Overview</Tab>
                  <Tab id="basic-tab2">Details</Tab>
                  <Tab id="basic-tab3">Settings</Tab>
                </TabList>
                <TabPanel id="basic-tab1">
                  <h5>Overview</h5>
                  <p>This is the overview tab content. It provides a general introduction to the topic.</p>
                </TabPanel>
                <TabPanel id="basic-tab2">
                  <h5>Details</h5>
                  <p>This tab contains detailed information. Here you can find comprehensive explanations and specifications.</p>
                </TabPanel>
                <TabPanel id="basic-tab3">
                  <h5>Settings</h5>
                  <p>Configure your preferences and options in this settings tab.</p>
                </TabPanel>
              </Tabs>
            </div>

            <h4>With Default Selection</h4>
            <div className={styles.componentRow}>
              <Tabs defaultSelectedKey="basic-features">
                <TabList aria-label="Product information">
                  <Tab id="basic-features">Features</Tab>
                  <Tab id="basic-pricing">Pricing</Tab>
                  <Tab id="basic-support">Support</Tab>
                </TabList>
                <TabPanel id="basic-features">
                  <h5>Product Features</h5>
                  <ul>
                    <li>Feature 1: Advanced functionality</li>
                    <li>Feature 2: Easy integration</li>
                    <li>Feature 3: Scalable architecture</li>
                  </ul>
                </TabPanel>
                <TabPanel id="basic-pricing">
                  <h5>Pricing Plans</h5>
                  <p>Choose from our flexible pricing options to suit your needs.</p>
                </TabPanel>
                <TabPanel id="basic-support">
                  <h5>Customer Support</h5>
                  <p>Get help when you need it with our comprehensive support options.</p>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Default Variant</h4>
            <div className={styles.componentRow}>
              <Tabs defaultSelectedKey="variant-default1">
                <TabList aria-label="Default tabs">
                  <Tab id="variant-default1">Tab 1</Tab>
                  <Tab id="variant-default2">Tab 2</Tab>
                  <Tab id="variant-default3">Tab 3</Tab>
                </TabList>
                <TabPanel id="variant-default1">Content for default tab 1</TabPanel>
                <TabPanel id="variant-default2">Content for default tab 2</TabPanel>
                <TabPanel id="variant-default3">Content for default tab 3</TabPanel>
              </Tabs>
            </div>

            <h4>Pills Variant</h4>
            <div className={styles.componentRow}>
              <Tabs variant="pills" defaultSelectedKey="variant-pills1">
                <TabList aria-label="Pills tabs">
                  <Tab id="variant-pills1">Dashboard</Tab>
                  <Tab id="variant-pills2">Analytics</Tab>
                  <Tab id="variant-pills3">Reports</Tab>
                </TabList>
                <TabPanel id="variant-pills1">Dashboard content with charts and metrics</TabPanel>
                <TabPanel id="variant-pills2">Analytics data and insights</TabPanel>
                <TabPanel id="variant-pills3">Generated reports and summaries</TabPanel>
              </Tabs>
            </div>

            <h4>Underline Variant</h4>
            <div className={styles.componentRow}>
              <Tabs variant="underline" defaultSelectedKey="variant-underline1">
                <TabList aria-label="Underline tabs">
                  <Tab id="variant-underline1">Home</Tab>
                  <Tab id="variant-underline2">About</Tab>
                  <Tab id="variant-underline3">Contact</Tab>
                </TabList>
                <TabPanel id="variant-underline1">Welcome to the home page</TabPanel>
                <TabPanel id="variant-underline2">Learn more about us</TabPanel>
                <TabPanel id="variant-underline3">Get in touch with our team</TabPanel>
              </Tabs>
            </div>

            <h4>Different Sizes</h4>
            <div className={styles.sizeDemo}>
              <div className={styles.sizeExample}>
                <h5>Small</h5>
                <Tabs size="small" defaultSelectedKey="size-small1">
                  <TabList aria-label="Small tabs">
                    <Tab id="size-small1">Small 1</Tab>
                    <Tab id="size-small2">Small 2</Tab>
                  </TabList>
                  <TabPanel id="size-small1">Small tab content</TabPanel>
                  <TabPanel id="size-small2">Another small tab</TabPanel>
                </Tabs>
              </div>

              <div className={styles.sizeExample}>
                <h5>Medium (Default)</h5>
                <Tabs size="medium" defaultSelectedKey="size-medium1">
                  <TabList aria-label="Medium tabs">
                    <Tab id="size-medium1">Medium 1</Tab>
                    <Tab id="size-medium2">Medium 2</Tab>
                  </TabList>
                  <TabPanel id="size-medium1">Medium tab content</TabPanel>
                  <TabPanel id="size-medium2">Another medium tab</TabPanel>
                </Tabs>
              </div>

              <div className={styles.sizeExample}>
                <h5>Large</h5>
                <Tabs size="large" defaultSelectedKey="size-large1">
                  <TabList aria-label="Large tabs">
                    <Tab id="size-large1">Large 1</Tab>
                    <Tab id="size-large2">Large 2</Tab>
                  </TabList>
                  <TabPanel id="size-large1">Large tab content</TabPanel>
                  <TabPanel id="size-large2">Another large tab</TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        );

      case 'orientation':
        return (
          <div className={styles.variantGroup}>
            <h4>Horizontal Orientation (Default)</h4>
            <div className={styles.componentRow}>
              <Tabs orientation="horizontal" defaultSelectedKey="orient-horizontal1">
                <TabList aria-label="Horizontal tabs">
                  <Tab id="orient-horizontal1">Documents</Tab>
                  <Tab id="orient-horizontal2">Images</Tab>
                  <Tab id="orient-horizontal3">Videos</Tab>
                </TabList>
                <TabPanel id="orient-horizontal1">Document files and text content</TabPanel>
                <TabPanel id="orient-horizontal2">Image gallery and photo management</TabPanel>
                <TabPanel id="orient-horizontal3">Video content and media player</TabPanel>
              </Tabs>
            </div>

            <h4>Vertical Orientation</h4>
            <div className={styles.componentRow}>
              <Tabs orientation="vertical" defaultSelectedKey="orient-vertical1">
                <TabList aria-label="Vertical tabs">
                  <Tab id="orient-vertical1">General</Tab>
                  <Tab id="orient-vertical2">Security</Tab>
                  <Tab id="orient-vertical3">Appearance</Tab>
                  <Tab id="orient-vertical4">Advanced</Tab>
                </TabList>
                <TabPanel id="orient-vertical1">
                  <h5>General Settings</h5>
                  <p>Basic configuration options and preferences.</p>
                </TabPanel>
                <TabPanel id="orient-vertical2">
                  <h5>Security Settings</h5>
                  <p>Password, authentication, and security preferences.</p>
                </TabPanel>
                <TabPanel id="orient-vertical3">
                  <h5>Appearance Settings</h5>
                  <p>Theme, layout, and visual customization options.</p>
                </TabPanel>
                <TabPanel id="orient-vertical4">
                  <h5>Advanced Settings</h5>
                  <p>Expert configuration and developer options.</p>
                </TabPanel>
              </Tabs>
            </div>

            <h4>Vertical with Pills Variant</h4>
            <div className={styles.componentRow}>
              <Tabs orientation="vertical" variant="pills" defaultSelectedKey="orient-vpills1">
                <TabList aria-label="Vertical pills tabs">
                  <Tab id="orient-vpills1">Profile</Tab>
                  <Tab id="orient-vpills2">Messages</Tab>
                  <Tab id="orient-vpills3">Notifications</Tab>
                </TabList>
                <TabPanel id="orient-vpills1">Your profile information and settings</TabPanel>
                <TabPanel id="orient-vpills2">Inbox and message management</TabPanel>
                <TabPanel id="orient-vpills3">Notification preferences and history</TabPanel>
              </Tabs>
            </div>
          </div>
        );

      case 'dynamic':
        return (
          <div className={styles.variantGroup}>
            <h4>Dynamic Tabs</h4>
            <div className={styles.componentRow}>
              <div className={styles.dynamicControls}>
                <Button onPress={addDynamicTab}>Add Tab</Button>
                <Button onPress={removeDynamicTab} variant="secondary">Remove Tab</Button>
              </div>
              <DynamicTabs
                items={dynamicTabs}
                selectedKey={selectedDynamicTab}
                onSelectionChange={setSelectedDynamicTab}
              />
            </div>

            <h4>With Disabled Tabs</h4>
            <div className={styles.componentRow}>
              <Tabs defaultSelectedKey="dynamic-enabled1" disabledKeys={['dynamic-disabled1']}>
                <TabList aria-label="Tabs with disabled items">
                  <Tab id="dynamic-enabled1">Enabled 1</Tab>
                  <Tab id="dynamic-disabled1">Disabled</Tab>
                  <Tab id="dynamic-enabled2">Enabled 2</Tab>
                </TabList>
                <TabPanel id="dynamic-enabled1">This tab is enabled and interactive</TabPanel>
                <TabPanel id="dynamic-disabled1">This tab is disabled</TabPanel>
                <TabPanel id="dynamic-enabled2">This tab is also enabled</TabPanel>
              </Tabs>
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className={styles.variantGroup}>
            <h4>Manual Keyboard Activation</h4>
            <div className={styles.componentRow}>
              <Tabs keyboardActivation="manual" defaultSelectedKey="advanced-manual1">
                <TabList aria-label="Manual activation tabs">
                  <Tab id="advanced-manual1">Tab 1</Tab>
                  <Tab id="advanced-manual2">Tab 2</Tab>
                  <Tab id="advanced-manual3">Tab 3</Tab>
                </TabList>
                <TabPanel id="advanced-manual1">
                  <p>With manual keyboard activation, use arrow keys to focus and Enter/Space to select.</p>
                </TabPanel>
                <TabPanel id="advanced-manual2">
                  <p>This allows users to navigate without accidentally changing tabs.</p>
                </TabPanel>
                <TabPanel id="advanced-manual3">
                  <p>Useful for complex interfaces where tab changes should be intentional.</p>
                </TabPanel>
              </Tabs>
            </div>

            <h4>Complex Content with Focusable Elements</h4>
            <div className={styles.componentRow}>
              <Tabs defaultSelectedKey="advanced-form">
                <TabList aria-label="Complex content tabs">
                  <Tab id="advanced-form">Form</Tab>
                  <Tab id="advanced-table">Table</Tab>
                  <Tab id="advanced-text">Text Content</Tab>
                </TabList>
                <TabPanel id="advanced-form">
                  <h5>Form Content</h5>
                  <div className={styles.formContent}>
                    <label>
                      Name: <input type="text" placeholder="Enter your name" />
                    </label>
                    <label>
                      Email: <input type="email" placeholder="Enter your email" />
                    </label>
                    <button type="button">Submit</button>
                  </div>
                </TabPanel>
                <TabPanel id="advanced-table">
                  <h5>Table Content</h5>
                  <table className={styles.demoTable}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John Doe</td>
                        <td>Developer</td>
                        <td><button type="button">Edit</button></td>
                      </tr>
                      <tr>
                        <td>Jane Smith</td>
                        <td>Designer</td>
                        <td><button type="button">Edit</button></td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel id="advanced-text">
                  <h5>Text Content</h5>
                  <p>This panel contains only text content, so the entire panel becomes focusable for keyboard navigation.</p>
                  <p>This ensures that all content is accessible via keyboard, even when there are no interactive elements.</p>
                </TabPanel>
              </Tabs>
            </div>

            <h4>Nested Tabs</h4>
            <div className={styles.componentRow}>
              <Tabs defaultSelectedKey="advanced-outer1">
                <TabList aria-label="Outer tabs">
                  <Tab id="advanced-outer1">Configuration</Tab>
                  <Tab id="advanced-outer2">Documentation</Tab>
                </TabList>
                <TabPanel id="advanced-outer1">
                  <h5>Configuration</h5>
                  <Tabs defaultSelectedKey="advanced-inner1" variant="pills" size="small">
                    <TabList aria-label="Configuration tabs">
                      <Tab id="advanced-inner1">Basic</Tab>
                      <Tab id="advanced-inner2">Advanced</Tab>
                    </TabList>
                    <TabPanel id="advanced-inner1">Basic configuration options</TabPanel>
                    <TabPanel id="advanced-inner2">Advanced configuration settings</TabPanel>
                  </Tabs>
                </TabPanel>
                <TabPanel id="advanced-outer2">
                  <h5>Documentation</h5>
                  <p>Complete documentation and usage examples.</p>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.componentShowcase}>
      <div className={styles.tabContainer}>
        <div className={styles.tabList}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.tabPanel} key={activeTab}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
