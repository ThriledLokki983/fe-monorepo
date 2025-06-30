/**
 * Tabs Component Usage Examples
 *
 * This file contains usage examples for the Tabs component.
 * These examples demonstrate various ways to use the Tabs component
 * and serve as both documentation and testing code snippets.
 */

export const tabsUsage = `
// Basic Tabs
import { Tabs, TabList, Tab, TabPanel } from '@mono/components';

// Simple tabs
<Tabs defaultSelectedKey="tab1">
  <TabList aria-label="Basic tabs">
    <Tab id="tab1">Overview</Tab>
    <Tab id="tab2">Details</Tab>
    <Tab id="tab3">Settings</Tab>
  </TabList>
  <TabPanel id="tab1">
    Overview content goes here
  </TabPanel>
  <TabPanel id="tab2">
    Detailed information
  </TabPanel>
  <TabPanel id="tab3">
    Settings and preferences
  </TabPanel>
</Tabs>

// Controlled Tabs
const [selectedTab, setSelectedTab] = useState('features');

<Tabs
  selectedKey={selectedTab}
  onSelectionChange={setSelectedTab}
>
  <TabList aria-label="Product tabs">
    <Tab id="features">Features</Tab>
    <Tab id="pricing">Pricing</Tab>
    <Tab id="support">Support</Tab>
  </TabList>
  <TabPanel id="features">Product features</TabPanel>
  <TabPanel id="pricing">Pricing information</TabPanel>
  <TabPanel id="support">Support options</TabPanel>
</Tabs>

// Pills variant
<Tabs variant="pills" defaultSelectedKey="dashboard">
  <TabList aria-label="Navigation">
    <Tab id="dashboard">Dashboard</Tab>
    <Tab id="analytics">Analytics</Tab>
    <Tab id="reports">Reports</Tab>
  </TabList>
  <TabPanel id="dashboard">Dashboard content</TabPanel>
  <TabPanel id="analytics">Analytics data</TabPanel>
  <TabPanel id="reports">Report summaries</TabPanel>
</Tabs>

// Underline variant
<Tabs variant="underline" defaultSelectedKey="home">
  <TabList aria-label="Main navigation">
    <Tab id="home">Home</Tab>
    <Tab id="about">About</Tab>
    <Tab id="contact">Contact</Tab>
  </TabList>
  <TabPanel id="home">Welcome page</TabPanel>
  <TabPanel id="about">About us</TabPanel>
  <TabPanel id="contact">Contact information</TabPanel>
</Tabs>

// Vertical orientation
<Tabs orientation="vertical" defaultSelectedKey="general">
  <TabList aria-label="Settings">
    <Tab id="general">General</Tab>
    <Tab id="security">Security</Tab>
    <Tab id="appearance">Appearance</Tab>
    <Tab id="advanced">Advanced</Tab>
  </TabList>
  <TabPanel id="general">General settings</TabPanel>
  <TabPanel id="security">Security preferences</TabPanel>
  <TabPanel id="appearance">Theme and layout</TabPanel>
  <TabPanel id="advanced">Advanced options</TabPanel>
</Tabs>

// Different sizes
<Tabs size="small" defaultSelectedKey="small1">
  <TabList aria-label="Small tabs">
    <Tab id="small1">Small Tab</Tab>
    <Tab id="small2">Another Tab</Tab>
  </TabList>
  <TabPanel id="small1">Small content</TabPanel>
  <TabPanel id="small2">More content</TabPanel>
</Tabs>

<Tabs size="large" defaultSelectedKey="large1">
  <TabList aria-label="Large tabs">
    <Tab id="large1">Large Tab</Tab>
    <Tab id="large2">Another Tab</Tab>
  </TabList>
  <TabPanel id="large1">Large content</TabPanel>
  <TabPanel id="large2">More content</TabPanel>
</Tabs>

// Disabled tabs
<Tabs defaultSelectedKey="enabled1" disabledKeys={['disabled1']}>
  <TabList aria-label="Tabs with disabled items">
    <Tab id="enabled1">Enabled Tab</Tab>
    <Tab id="disabled1">Disabled Tab</Tab>
    <Tab id="enabled2">Another Enabled Tab</Tab>
  </TabList>
  <TabPanel id="enabled1">This tab is enabled</TabPanel>
  <TabPanel id="disabled1">This tab is disabled</TabPanel>
  <TabPanel id="enabled2">This tab is also enabled</TabPanel>
</Tabs>

// Dynamic Tabs
import { DynamicTabs } from '@mono/components';

const [tabs, setTabs] = useState([
  { id: 'profile', title: 'Profile', content: 'User profile settings' },
  { id: 'account', title: 'Account', content: 'Account management' },
  { id: 'notifications', title: 'Notifications', content: 'Notification preferences' }
]);

<DynamicTabs
  items={tabs}
  selectedKey={selectedTab}
  onSelectionChange={setSelectedTab}
/>

// Manual keyboard activation
<Tabs keyboardActivation="manual" defaultSelectedKey="tab1">
  <TabList aria-label="Manual activation tabs">
    <Tab id="tab1">Tab 1</Tab>
    <Tab id="tab2">Tab 2</Tab>
    <Tab id="tab3">Tab 3</Tab>
  </TabList>
  <TabPanel id="tab1">Content 1</TabPanel>
  <TabPanel id="tab2">Content 2</TabPanel>
  <TabPanel id="tab3">Content 3</TabPanel>
</Tabs>
`;
