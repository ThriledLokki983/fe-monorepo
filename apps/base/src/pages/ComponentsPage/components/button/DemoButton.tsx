import { Button, ButtonVariant } from '@mono/components';
import { useState } from 'react';
import styles from './DemoButton.module.scss';

type TabKey = 'variants' | 'sizes' | 'states' | 'events' | 'links';

export const DemoButton = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('variants');

  const tabs = [
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'states' as const, label: 'States' },
    { key: 'events' as const, label: 'Event Handling' },
    { key: 'links' as const, label: 'Link Buttons' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Variants</h4>
            <div className={styles.componentRow}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant={"transparent" as ButtonVariant}>Transparent</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Sizes</h4>
            <div className={styles.componentRow}>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>States</h4>
            <div className={styles.componentRow}>
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button isDisabled>isDisabled (React Aria)</Button>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className={styles.variantGroup}>
            <h4>Event Handling</h4>
            <div className={styles.componentRow}>
              <Button onClick={() => alert('onClick fired!')}>onClick (React)</Button>
              <Button onPress={() => alert('onPress fired!')}>onPress (React Aria)</Button>
            </div>
          </div>
        );

      case 'links':
        return (
          <div className={styles.variantGroup}>
            <h4>Link Buttons</h4>
            <div className={styles.componentRow}>
              {/* Temporarily commenting out link buttons due to TypeScript compatibility issues */}
              {/* <Button variant="primary" url="https://react-spectrum.adobe.com/react-aria/">
                External Link
              </Button>
              <Button variant="secondary" url="https://example.com" target="_blank">
                Open in New Tab
              </Button>
              <Button variant="tertiary" url="/home">
                Internal Link
              </Button>
              <Button variant="danger" url="https://example.com" disabled>
                Disabled Link
              </Button> */}
              <p>Link functionality temporarily disabled while fixing React Aria type compatibility.</p>
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
        <div className={styles.tabList} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls={`tab-panel-${tab.key}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className={styles.tabPanel}
          role="tabpanel"
          id={`tab-panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
