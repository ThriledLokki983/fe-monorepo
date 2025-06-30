import { RangeCalendar } from '@mono/components';
import { useState } from 'react';
import { CalendarDate, parseDate, getLocalTimeZone, type DateValue } from '@internationalized/date';
import styles from './DemoRangeCalendar.module.scss';

type DateRange = { start: CalendarDate; end: CalendarDate };

type TabKey = 'basic' | 'controlled' | 'validation' | 'disabled' | 'readonly';

export const DemoRangeCalendar = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(null);
  const [controlledRange, setControlledRange] = useState<DateRange>({
    start: parseDate('2025-01-15'),
    end: parseDate('2025-01-20')
  });

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
            <h4>Basic Range Calendar</h4>
            <div className={styles.componentRow}>
              <RangeCalendar
                aria-label="Select a date range"
                value={selectedRange}
                onChange={setSelectedRange}
              />
            </div>
            {selectedRange && (
              <p className={styles.selectedRange}>
                Selected: {selectedRange.start.toString()} to {selectedRange.end.toString()}
              </p>
            )}
          </div>
        );

      case 'controlled':
        return (
          <div className={styles.variantGroup}>
            <h4>Controlled Range Calendar</h4>
            <div className={styles.componentRow}>
              <RangeCalendar
                aria-label="Controlled date range selection"
                value={controlledRange}
                onChange={setControlledRange}
              />
            </div>
            <div className={styles.controls}>
              <button
                onClick={() => setControlledRange({
                  start: parseDate('2025-02-01'),
                  end: parseDate('2025-02-07')
                })}
                className={styles.controlButton}
              >
                Set to Feb 1-7
              </button>
              <button
                onClick={() => setControlledRange({
                  start: parseDate('2025-03-15'),
                  end: parseDate('2025-03-22')
                })}
                className={styles.controlButton}
              >
                Set to Mar 15-22
              </button>
            </div>
            <p className={styles.selectedRange}>
              Current: {controlledRange.start.toString()} to {controlledRange.end.toString()}
            </p>
          </div>
        );

      case 'validation':
        return (
          <div className={styles.variantGroup}>
            <h4>Range Calendar with Validation</h4>
            <div className={styles.componentRow}>
              <RangeCalendar
                aria-label="Select booking dates"
                minValue={parseDate('2025-01-01')}
                maxValue={parseDate('2025-12-31')}
              />
            </div>
            <p className={styles.description}>
              Date range is restricted to the year 2025
            </p>
          </div>
        );

      case 'disabled':
        return (
          <div className={styles.variantGroup}>
            <h4>Range Calendar with Disabled Dates</h4>
            <div className={styles.componentRow}>
              <RangeCalendar
                aria-label="Select weekdays only"
                isDateUnavailable={isDateUnavailable}
              />
            </div>
            <p className={styles.description}>
              Weekends are disabled - only weekdays can be selected
            </p>
          </div>
        );

      case 'readonly':
        return (
          <div className={styles.variantGroup}>
            <h4>Read-only Range Calendar</h4>
            <div className={styles.componentRow}>
              <RangeCalendar
                aria-label="View-only date range"
                value={{
                  start: parseDate('2025-06-01'),
                  end: parseDate('2025-06-15')
                }}
                isReadOnly
              />
            </div>
            <p className={styles.description}>
              This calendar is read-only and cannot be changed
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
        <div className={styles.tabList}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.tabPanel}>
          {renderTabContent()}
        </div>
      </div>

      <div className={styles.codeExample}>
        <h4>Usage Example</h4>
        <pre className={styles.code}>
          <code>
{`import { RangeCalendar } from '@mono/components';
import { useState } from 'react';
import { type DateRange } from '@internationalized/date';

const MyComponent = () => {
  const [range, setRange] = useState<DateRange | null>(null);

  return (
    <RangeCalendar
      aria-label="Select date range"
      value={range}
      onChange={setRange}
    />
  );
};`}
          </code>
        </pre>
      </div>
    </div>
  );
};
