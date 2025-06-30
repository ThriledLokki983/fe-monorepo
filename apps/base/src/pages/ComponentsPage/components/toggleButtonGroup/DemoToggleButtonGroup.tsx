import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mono/components';
import styles from './DemoToggleButtonGroup.module.scss';

type TabKey = 'variants' | 'sizes' | 'orientation' | 'selection' | 'events';

export const DemoToggleButtonGroup = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('variants');
  const [singleSelection, setSingleSelection] = useState<string[]>(['center']);
  const [multipleSelection, setMultipleSelection] = useState<string[]>(['bold', 'italic']);
  const [eventLog, setEventLog] = useState<string[]>([]);

  const tabs = [
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'orientation' as const, label: 'Orientation' },
    { key: 'selection' as const, label: 'Selection Modes' },
    { key: 'events' as const, label: 'Event Handling' },
  ];

  const handleEvent = (eventType: string, value?: unknown) => {
    const timestamp = new Date().toLocaleTimeString();
    const message = value !== undefined
      ? `${timestamp}: ${eventType} - ${JSON.stringify(value)}`
      : `${timestamp}: ${eventType}`;
    setEventLog(prev => [message, ...prev.slice(0, 9)]);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Variants</h4>
            <div className={styles.variantGrid}>
              <div className={styles.variantGroup}>
                <h4>Default</h4>
                <ToggleButtonGroup variant="default" defaultSelectedKeys={['left']}>
                  <ToggleButton id="left">Left</ToggleButton>
                  <ToggleButton id="center">Center</ToggleButton>
                  <ToggleButton id="right">Right</ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div className={styles.variantGroup}>
                <h4>Bordered</h4>
                <ToggleButtonGroup variant="bordered" defaultSelectedKeys={['center']}>
                  <ToggleButton id="left">Left</ToggleButton>
                  <ToggleButton id="center">Center</ToggleButton>
                  <ToggleButton id="right">Right</ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div className={styles.variantGroup}>
                <h4>Seamless</h4>
                <ToggleButtonGroup variant="seamless" defaultSelectedKeys={['right']}>
                  <ToggleButton id="left">Left</ToggleButton>
                  <ToggleButton id="center">Center</ToggleButton>
                  <ToggleButton id="right">Right</ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Sizes</h4>
            <div className={styles.sizeGrid}>
              <div className={styles.sizeGroup}>
                <h4>Small</h4>
                <ToggleButtonGroup size="small" defaultSelectedKeys={['center']}>
                  <ToggleButton id="left">Small</ToggleButton>
                  <ToggleButton id="center">Small</ToggleButton>
                  <ToggleButton id="right">Small</ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div className={styles.sizeGroup}>
                <h4>Medium (Default)</h4>
                <ToggleButtonGroup size="medium" defaultSelectedKeys={['center']}>
                  <ToggleButton id="left">Medium</ToggleButton>
                  <ToggleButton id="center">Medium</ToggleButton>
                  <ToggleButton id="right">Medium</ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div className={styles.sizeGroup}>
                <h4>Large</h4>
                <ToggleButtonGroup size="large" defaultSelectedKeys={['center']}>
                  <ToggleButton id="left">Large</ToggleButton>
                  <ToggleButton id="center">Large</ToggleButton>
                  <ToggleButton id="right">Large</ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
        );

      case 'orientation':
        return (
          <div className={styles.variantGroup}>
            <h4>Orientation</h4>
            <div className={styles.orientationGrid}>
              <div className={styles.orientationGroup}>
                <h4>Horizontal (Default)</h4>
                <ToggleButtonGroup orientation="horizontal" defaultSelectedKeys={['center']}>
                  <ToggleButton id="left">📍 Left</ToggleButton>
                  <ToggleButton id="center">📍 Center</ToggleButton>
                  <ToggleButton id="right">📍 Right</ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div className={styles.orientationGroup}>
                <h4>Vertical</h4>
                <ToggleButtonGroup orientation="vertical" defaultSelectedKeys={['center']}>
                  <ToggleButton id="top">⬆️ Top</ToggleButton>
                  <ToggleButton id="center">⬛ Center</ToggleButton>
                  <ToggleButton id="bottom">⬇️ Bottom</ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
        );

      case 'selection':
        return (
          <div className={styles.variantGroup}>
            <h4>Selection Modes</h4>
            <div className={styles.selectionGrid}>
              <div className={styles.selectionGroup}>
                <h4>Single Selection (Default)</h4>
                <p className={styles.description}>Only one button can be selected at a time</p>
                <ToggleButtonGroup
                  selectionMode="single"
                  selectedKeys={singleSelection}
                  onSelectionChange={(keys) => {
                    const keyArray = Array.from(keys) as string[];
                    setSingleSelection(keyArray);
                  }}
                >
                  <ToggleButton id="left">📝 Draft</ToggleButton>
                  <ToggleButton id="center">✅ Published</ToggleButton>
                  <ToggleButton id="right">🚫 Archived</ToggleButton>
                </ToggleButtonGroup>
                <p className={styles.selectedInfo}>Selected: {singleSelection.join(', ') || 'None'}</p>
              </div>

              <div className={styles.selectionGroup}>
                <h4>Multiple Selection</h4>
                <p className={styles.description}>Multiple buttons can be selected simultaneously</p>
                <ToggleButtonGroup
                  selectionMode="multiple"
                  selectedKeys={multipleSelection}
                  onSelectionChange={(keys) => {
                    const keyArray = Array.from(keys) as string[];
                    setMultipleSelection(keyArray);
                  }}
                >
                  <ToggleButton id="bold">🔸 Bold</ToggleButton>
                  <ToggleButton id="italic">🔹 Italic</ToggleButton>
                  <ToggleButton id="underline">🔻 Underline</ToggleButton>
                </ToggleButtonGroup>
                <p className={styles.selectedInfo}>Selected: {multipleSelection.join(', ') || 'None'}</p>
              </div>

              <div className={styles.selectionGroup}>
                <h4>Disabled State</h4>
                <ToggleButtonGroup isDisabled defaultSelectedKeys={['center']}>
                  <ToggleButton id="left">Option 1</ToggleButton>
                  <ToggleButton id="center">Option 2</ToggleButton>
                  <ToggleButton id="right">Option 3</ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className={styles.variantGroup}>
            <h4>Event Handling</h4>
            <div className={styles.eventsDemo}>
              <div className={styles.eventControls}>
                <h4>Interactive ToggleButtonGroup</h4>
                <ToggleButtonGroup
                  selectionMode="multiple"
                  onSelectionChange={(keys) => handleEvent('onSelectionChange', Array.from(keys))}
                >
                  <ToggleButton id="option1">Option 1</ToggleButton>
                  <ToggleButton id="option2">Option 2</ToggleButton>
                  <ToggleButton id="option3">Option 3</ToggleButton>
                  <ToggleButton id="option4">Option 4</ToggleButton>
                </ToggleButtonGroup>

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
                    <p className={styles.emptyLog}>No events yet. Interact with the toggle button group above.</p>
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
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.demoHeader}>
        <h2 className={styles.componentTitle}>ToggleButtonGroup</h2>
        <p className={styles.componentDescription}>
          A group of toggle buttons that work together as a cohesive unit. Built on React Aria Components with support for
          single and multiple selection modes, various orientations, and comprehensive accessibility features.
        </p>
      </div>

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
          className={styles.tabContent}
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

export default DemoToggleButtonGroup;
