import React, { useState } from 'react';
import { ToggleButton } from '@mono/components';
import styles from './DemoToggleButton.module.scss';

interface DemoSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const DemoSection: React.FC<DemoSectionProps> = ({ title, description, children }) => (
  <div className={styles.demoSection}>
    <div className={styles.demoHeader}>
      <h3 className={styles.demoTitle}>{title}</h3>
      {description && <p className={styles.demoDescription}>{description}</p>}
    </div>
    <div className={styles.demoContent}>
      {children}
    </div>
  </div>
);

interface TabProps {
  activeTab: string;
  tabKey: string;
  onClick: (tab: string) => void;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ activeTab, tabKey, onClick, children }) => (
  <button
    className={`${styles.tab} ${activeTab === tabKey ? styles.tabActive : ''}`}
    onClick={() => onClick(tabKey)}
  >
    {children}
  </button>
);

const DemoToggleButton: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('variants');
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [eventLog, setEventLog] = useState<string[]>([]);

  const handleEvent = (eventType: string, value?: boolean) => {
    const timestamp = new Date().toLocaleTimeString();
    const message = value !== undefined
      ? `${timestamp}: ${eventType} - ${value ? 'pressed' : 'not pressed'}`
      : `${timestamp}: ${eventType}`;
    setEventLog(prev => [message, ...prev.slice(0, 9)]);
  };

  const renderVariantsTab = () => (
    <DemoSection
      title="Variants"
      description="ToggleButton supports multiple visual variants to fit different use cases and contexts."
    >
      <div className={styles.variantGrid}>
        <div className={styles.variantGroup}>
          <h4>Primary (Default)</h4>
          <ToggleButton variant="primary">
            Primary Toggle
          </ToggleButton>
        </div>

        <div className={styles.variantGroup}>
          <h4>Secondary</h4>
          <ToggleButton variant="secondary">
            Secondary Toggle
          </ToggleButton>
        </div>

        <div className={styles.variantGroup}>
          <h4>Tertiary</h4>
          <ToggleButton variant="tertiary">
            Tertiary Toggle
          </ToggleButton>
        </div>

        <div className={styles.variantGroup}>
          <h4>Danger</h4>
          <ToggleButton variant="danger">
            Danger Toggle
          </ToggleButton>
        </div>

        <div className={styles.variantGroup}>
          <h4>Transparent</h4>
          <ToggleButton variant="transparent">
            Transparent Toggle
          </ToggleButton>
        </div>
      </div>
    </DemoSection>
  );

  const renderSizesTab = () => (
    <DemoSection
      title="Sizes"
      description="ToggleButton comes in three sizes to accommodate different layout requirements."
    >
      <div className={styles.sizeGrid}>
        <div className={styles.sizeGroup}>
          <h4>Small</h4>
          <ToggleButton size="small" variant="primary">
            Small Toggle
          </ToggleButton>
        </div>

        <div className={styles.sizeGroup}>
          <h4>Medium (Default)</h4>
          <ToggleButton size="medium" variant="primary">
            Medium Toggle
          </ToggleButton>
        </div>

        <div className={styles.sizeGroup}>
          <h4>Large</h4>
          <ToggleButton size="large" variant="primary">
            Large Toggle
          </ToggleButton>
        </div>
      </div>

      <div className={styles.sizesComparison}>
        <h4>Size Comparison</h4>
        <div className={styles.sizesRow}>
          <ToggleButton size="small" variant="secondary">Small</ToggleButton>
          <ToggleButton size="medium" variant="secondary">Medium</ToggleButton>
          <ToggleButton size="large" variant="secondary">Large</ToggleButton>
        </div>
      </div>
    </DemoSection>
  );

  const renderStatesTab = () => (
    <DemoSection
      title="States"
      description="ToggleButton supports various states including pressed, disabled, and combined states."
    >
      <div className={styles.statesGrid}>
        <div className={styles.stateGroup}>
          <h4>Default State</h4>
          <ToggleButton variant="primary">
            Default Toggle
          </ToggleButton>
        </div>

        <div className={styles.stateGroup}>
          <h4>Pressed State</h4>
          <ToggleButton variant="primary" isSelected={true}>
            Pressed Toggle
          </ToggleButton>
        </div>

        <div className={styles.stateGroup}>
          <h4>Disabled State</h4>
          <ToggleButton variant="primary" isDisabled={true}>
            Disabled Toggle
          </ToggleButton>
        </div>

        <div className={styles.stateGroup}>
          <h4>Disabled + Pressed</h4>
          <ToggleButton variant="primary" isDisabled={true} isSelected={true}>
            Disabled Pressed
          </ToggleButton>
        </div>
      </div>

      <div className={styles.controlledDemo}>
        <h4>Interactive State Control</h4>
        <div className={styles.controls}>
          <label className={styles.controlLabel}>
            <input
              type="checkbox"
              checked={isPressed}
              onChange={(e) => setIsPressed(e.target.checked)}
            />
            Pressed
          </label>
          <label className={styles.controlLabel}>
            <input
              type="checkbox"
              checked={isDisabled}
              onChange={(e) => setIsDisabled(e.target.checked)}
            />
            Disabled
          </label>
        </div>
        <ToggleButton
          variant="primary"
          isSelected={isPressed}
          isDisabled={isDisabled}
          onChange={setIsPressed}
        >
          Controlled Toggle
        </ToggleButton>
      </div>
    </DemoSection>
  );

  const renderEventsTab = () => (
    <DemoSection
      title="Events"
      description="ToggleButton provides event handlers for user interactions including press, change, and focus events."
    >
      <div className={styles.eventsDemo}>
        <div className={styles.eventControls}>
          <h4>Interactive ToggleButton</h4>
          <ToggleButton
            variant="primary"
            onChange={(isSelected) => handleEvent('onChange', isSelected)}
            onPress={() => handleEvent('onPress')}
            onPressStart={() => handleEvent('onPressStart')}
            onPressEnd={() => handleEvent('onPressEnd')}
            onFocus={() => handleEvent('onFocus')}
            onBlur={() => handleEvent('onBlur')}
          >
            Event Toggle Button
          </ToggleButton>

          <button
            className={styles.clearButton}
            onClick={() => setEventLog([])}
          >
            Clear Event Log
          </button>
        </div>

        <div className={styles.eventLog}>
          <h4>Event Log</h4>
          <div className={styles.logContainer}>
            {eventLog.length === 0 ? (
              <p className={styles.emptyLog}>No events yet. Interact with the toggle button above.</p>
            ) : (
              <ul className={styles.logList}>
                {eventLog.map((event, index) => (
                  <li key={index} className={styles.logItem}>
                    {event}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </DemoSection>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'variants':
        return renderVariantsTab();
      case 'sizes':
        return renderSizesTab();
      case 'states':
        return renderStatesTab();
      case 'events':
        return renderEventsTab();
      default:
        return renderVariantsTab();
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.demoHeader}>
        <h2 className={styles.componentTitle}>ToggleButton</h2>
        <p className={styles.componentDescription}>
          A toggle button component built on React Aria Components that allows users to switch between pressed and unpressed states.
          Supports multiple variants, sizes, states, and provides comprehensive event handling for accessibility and user interaction.
        </p>
      </div>

      <div className={styles.tabContainer}>
        <div className={styles.tabList}>
          <Tab activeTab={activeTab} tabKey="variants" onClick={setActiveTab}>
            Variants
          </Tab>
          <Tab activeTab={activeTab} tabKey="sizes" onClick={setActiveTab}>
            Sizes
          </Tab>
          <Tab activeTab={activeTab} tabKey="states" onClick={setActiveTab}>
            States
          </Tab>
          <Tab activeTab={activeTab} tabKey="events" onClick={setActiveTab}>
            Events
          </Tab>
        </div>
      </div>

      <div className={styles.tabContent}>
        {renderContent()}
      </div>
    </div>
  );
};

export default DemoToggleButton;
