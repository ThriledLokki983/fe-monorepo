import { Calendar } from '@mono/components';
import { useState } from 'react';
import { CalendarDate, parseDate, getLocalTimeZone, type DateValue } from '@internationalized/date';
import styles from './DemoCalendar.module.scss';

type TabKey = 'basic' | 'controlled' | 'validation' | 'disabled' | 'readonly';

export const DemoCalendar = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
  const [controlledDate, setControlledDate] = useState<CalendarDate>(parseDate('2025-01-15'));

  const tabs = [
    { key: 'basic' as const, label: 'Basic' },
    { key: 'controlled' as const, label: 'Controlled' },
    { key: 'validation' as const, label: 'Validation' },
    { key: 'disabled' as const, label: 'Disabled Dates' },
    { key: 'readonly' as const, label: 'Read Only' },
  ];

  const isDateUnavailable = (date: DateValue) => {
    // Disable weekends (Saturday and Sunday)
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Calendar</h4>
            <div className={styles.componentRow}>
              <Calendar
                aria-label="Select a date"
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
            <h4>Controlled Calendar</h4>
            <div className={styles.componentRow}>
              <Calendar
                aria-label="Controlled calendar"
                value={controlledDate}
                onChange={setControlledDate}
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
            <h4>Calendar with Validation</h4>
            <div className={styles.componentRow}>
              <Calendar
                aria-label="Calendar with minimum date"
                minValue={parseDate('2025-01-01')}
                maxValue={parseDate('2025-12-31')}
                defaultValue={parseDate('2025-06-15')}
              />
            </div>
            <p className={styles.note}>
              Restricted to dates between Jan 1, 2025 and Dec 31, 2025
            </p>
          </div>
        );

      case 'disabled':
        return (
          <div className={styles.variantGroup}>
            <h4>Calendar with Disabled Dates</h4>
            <div className={styles.componentRow}>
              <Calendar
                aria-label="Calendar with disabled weekends"
                isDateUnavailable={isDateUnavailable}
                defaultValue={parseDate('2025-06-16')} // Monday
              />
            </div>
            <p className={styles.note}>
              Weekends are disabled and cannot be selected
            </p>
          </div>
        );

      case 'readonly':
        return (
          <div className={styles.variantGroup}>
            <h4>Read-only Calendar</h4>
            <div className={styles.componentRow}>
              <Calendar
                aria-label="Read-only calendar"
                isReadOnly
                defaultValue={parseDate('2025-06-15')}
              />
            </div>
            <p className={styles.note}>
              Calendar is read-only and cannot be changed
            </p>
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
