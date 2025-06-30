import { DateField } from '@mono/components';
import { useState } from 'react';
import { CalendarDate, parseDate } from '@internationalized/date';
import styles from './DemoDateField.module.scss';

type TabKey = 'basic' | 'controlled' | 'validation' | 'readonly' | 'variants';

export const DemoDateField = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
  const [controlledDate, setControlledDate] = useState<CalendarDate>(parseDate('2025-06-15'));

  const tabs = [
    { key: 'basic' as const, label: 'Basic' },
    { key: 'controlled' as const, label: 'Controlled' },
    { key: 'validation' as const, label: 'Validation' },
    { key: 'readonly' as const, label: 'Read Only' },
    { key: 'variants' as const, label: 'Variants' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic DateField</h4>
            <div className={styles.componentRow}>
              <DateField
                label="Select Date"
                value={selectedDate}
                onChange={setSelectedDate}
              />
            </div>
            {selectedDate && (
              <p className={styles.selectedDate}>
                Selected: {selectedDate.toString()}
              </p>
            )}
          </div>
        );

      case 'controlled':
        return (
          <div className={styles.variantGroup}>
            <h4>Controlled DateField</h4>
            <div className={styles.componentRow}>
              <DateField
                label="Event Date"
                value={controlledDate}
                onChange={(date) => date && setControlledDate(date)}
              />
            </div>
            <div className={styles.controls}>
              <button
                className={styles.controlButton}
                onClick={() => setControlledDate(parseDate('2025-01-01'))}
              >
                Set to Jan 1, 2025
              </button>
              <button
                className={styles.controlButton}
                onClick={() => setControlledDate(parseDate('2025-12-25'))}
              >
                Set to Dec 25, 2025
              </button>
              <button
                className={styles.controlButton}
                onClick={() => setControlledDate(new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()))}
              >
                Set to Today
              </button>
            </div>
            <p className={styles.selectedDate}>
              Current: {controlledDate.toString()}
            </p>
          </div>
        );

      case 'validation':
        return (
          <div className={styles.variantGroup}>
            <h4>DateField with Validation</h4>
            <div className={styles.componentRow}>
              <DateField
                label="Birth Date"
                description="Enter your birth date"
                minValue={parseDate('1900-01-01')}
                maxValue={parseDate('2025-12-31')}
                defaultValue={parseDate('1990-01-01')}
                isRequired
              />
            </div>
            <div className={styles.componentRow}>
              <DateField
                label="Invalid Date Field"
                errorMessage="This field is required"
                isInvalid
              />
            </div>
          </div>
        );

      case 'readonly':
        return (
          <div className={styles.variantGroup}>
            <h4>Read-only DateField</h4>
            <div className={styles.componentRow}>
              <DateField
                label="Document Date"
                description="This date cannot be changed"
                value={parseDate('2025-06-15')}
                isReadOnly
              />
            </div>
            <div className={styles.componentRow}>
              <DateField
                label="Disabled Date Field"
                description="This field is disabled"
                defaultValue={parseDate('2025-03-20')}
                isDisabled
              />
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>DateField Variants</h4>
            <div className={styles.componentRow}>
              <DateField
                label="With Description"
                description="Select your preferred date"
              />
            </div>
            <div className={styles.componentRow}>
              <DateField
                label="Required Field"
                description="This field is required"
                isRequired
              />
            </div>
            <div className={styles.componentRow}>
              <DateField
                label="Custom Format"
                description="Date in custom format"
                defaultValue={parseDate('2025-06-15')}
              />
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
