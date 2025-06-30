import { useState } from 'react';
import { Switch } from '@mono/components';
import styles from './DemoSwitch.module.scss';

type TabKey = 'basic' | 'variants' | 'sizes' | 'states' | 'forms';

export const DemoSwitch = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [isWifiEnabled, setIsWifiEnabled] = useState<boolean>(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState<boolean>(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(false);

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'states' as const, label: 'States' },
    { key: 'forms' as const, label: 'Forms & Controls' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Switch</h4>
            <div className={styles.componentRow}>
              <Switch>Wi-Fi</Switch>
            </div>

            <h4>Controlled Switch</h4>
            <div className={styles.componentRow}>
              <Switch
                isSelected={isNotificationsEnabled}
                onChange={setIsNotificationsEnabled}
              >
                Push Notifications
              </Switch>
              <span className={styles.status}>
                Status: {isNotificationsEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>

            <h4>Default Selected</h4>
            <div className={styles.componentRow}>
              <Switch defaultSelected>
                Auto-save documents
              </Switch>
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Color Variants</h4>
            <div className={styles.componentRow}>
              <Switch variant="default" isSelected>Default</Switch>
              <Switch variant="success" isSelected>Success</Switch>
              <Switch variant="warning" isSelected>Warning</Switch>
              <Switch variant="error" isSelected>Error</Switch>
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Different Sizes</h4>
            <div className={styles.componentRow}>
              <Switch size="small">Small switch</Switch>
              <Switch size="medium">Medium switch</Switch>
              <Switch size="large">Large switch</Switch>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>Disabled States</h4>
            <div className={styles.componentRow}>
              <Switch isDisabled>Disabled switch</Switch>
              <Switch isDisabled isSelected>Disabled selected</Switch>
            </div>

            <h4>Read-only State</h4>
            <div className={styles.componentRow}>
              <Switch isReadOnly isSelected>
                Read-only setting
              </Switch>
            </div>

            <h4>Invalid State</h4>
            <div className={styles.componentRow}>
              <Switch isInvalid>
                Invalid configuration
              </Switch>
            </div>

            <h4>Required Switch</h4>
            <div className={styles.componentRow}>
              <Switch isRequired>
                Accept terms and conditions
              </Switch>
            </div>
          </div>
        );

      case 'forms':
        return (
          <div className={styles.variantGroup}>
            <h4>Form Integration</h4>
            <form className={styles.formExample}>
              <div className={styles.formGroup}>
                <Switch
                  name="wifi"
                  value="enabled"
                  isSelected={isWifiEnabled}
                  onChange={setIsWifiEnabled}
                >
                  Enable Wi-Fi
                </Switch>

                <Switch
                  name="darkMode"
                  value="enabled"
                  isSelected={isDarkModeEnabled}
                  onChange={setIsDarkModeEnabled}
                >
                  Dark Mode
                </Switch>

                <Switch name="autoUpdates" value="enabled">
                  Automatic Updates
                </Switch>
              </div>

              <button type="submit" className={styles.submitButton}>
                Save Settings
              </button>
            </form>

            <h4>Without Label</h4>
            <div className={styles.componentRow}>
              <span>Dark Mode:</span>
              <Switch aria-label="Toggle dark mode" />
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
};
