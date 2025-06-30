import { DateRangePicker } from '@mono/components';
import { useState } from 'react';
import { CalendarDate, parseDate, getLocalTimeZone, type DateValue } from '@internationalized/date';
import styles from './DemoDateRangePicker.module.scss';

type DateRange = { start: CalendarDate; end: CalendarDate };

type TabKey = 'basic' | 'controlled' | 'validation' | 'disabled' | 'variants';

export const DemoDateRangePicker = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(null);
  const [controlledRange, setControlledRange] = useState<DateRange>({
    start: parseDate('2025-06-15'),
    end: parseDate('2025-06-20'),
  });

  const tabs = [
    { key: 'basic' as const, label: 'Basic' },
    { key: 'controlled' as const, label: 'Controlled' },
    { key: 'validation' as const, label: 'Validation' },
    { key: 'disabled' as const, label: 'Disabled Dates' },
    { key: 'variants' as const, label: 'Variants' },
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
            <h4>Basic DateRangePicker</h4>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Select Date Range"
                value={selectedRange}
                onChange={setSelectedRange}
              />
            </div>
            {selectedRange && (
              <p className={styles.selectedDate}>
                Selected: {selectedRange.start.toString()} to {selectedRange.end.toString()}
              </p>
            )}
          </div>
        );

      case 'controlled':
        return (
          <div className={styles.variantGroup}>
            <h4>Controlled DateRangePicker</h4>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Event Duration"
                value={controlledRange}
                onChange={(range) => range && setControlledRange(range)}
              />
            </div>
            <div className={styles.controls}>
              <button
                className={styles.controlButton}
                onClick={() => setControlledRange({
                  start: parseDate('2025-07-01'),
                  end: parseDate('2025-07-07'),
                })}
              >
                Set Week 1 (Jul 1-7)
              </button>
              <button
                className={styles.controlButton}
                onClick={() => setControlledRange({
                  start: parseDate('2025-08-15'),
                  end: parseDate('2025-08-30'),
                })}
              >
                Set Aug 15-30
              </button>
              <button
                className={styles.controlButton}
                onClick={() => {
                  const today = new Date();
                  const start = new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
                  const end = start.add({ days: 7 });
                  setControlledRange({ start, end });
                }}
              >
                Set This Week
              </button>
            </div>
            <p className={styles.selectedDate}>
              Current: {controlledRange.start.toString()} to {controlledRange.end.toString()}
            </p>
          </div>
        );

      case 'validation':
        return (
          <div className={styles.variantGroup}>
            <h4>DateRangePicker with Validation</h4>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Vacation Period"
                description="Select your vacation dates (2025 only)"
                minValue={parseDate('2025-01-01')}
                maxValue={parseDate('2025-12-31')}
                defaultValue={{
                  start: parseDate('2025-07-01'),
                  end: parseDate('2025-07-14'),
                }}
                isRequired
              />
            </div>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Project Timeline"
                description="Select project start and end dates (future dates only)"
                minValue={new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())}
                maxValue={parseDate('2030-12-31')}
              />
            </div>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Invalid Range Picker"
                errorMessage="Please select a valid date range"
                isInvalid
              />
            </div>
          </div>
        );

      case 'disabled':
        return (
          <div className={styles.variantGroup}>
            <h4>DateRangePicker with Disabled Dates</h4>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Business Days Only"
                description="Weekends are disabled"
                isDateUnavailable={isDateUnavailable}
                defaultValue={{
                  start: parseDate('2025-06-16'), // Monday
                  end: parseDate('2025-06-20'),   // Friday
                }}
              />
            </div>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Read-only Range Picker"
                description="This range cannot be changed"
                value={{
                  start: parseDate('2025-06-15'),
                  end: parseDate('2025-06-20'),
                }}
                isReadOnly
              />
            </div>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Disabled Range Picker"
                description="This picker is disabled"
                defaultValue={{
                  start: parseDate('2025-03-20'),
                  end: parseDate('2025-03-25'),
                }}
                isDisabled
              />
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>DateRangePicker Variants</h4>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Event Planning"
                description="Select start and end dates for your event"
              />
            </div>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Required Field"
                description="Both start and end dates are required"
                isRequired
              />
            </div>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Booking Period"
                description="Choose your booking dates"
                defaultValue={{
                  start: parseDate('2025-07-01'),
                  end: parseDate('2025-07-03'),
                }}
              />
            </div>
            <div className={styles.componentRow}>
              <DateRangePicker
                label="Conference Dates"
                description="Select conference duration (max 5 days)"
                minValue={parseDate('2025-09-01')}
                maxValue={parseDate('2025-09-30')}
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
