import { DatePicker } from '@mono/components';
import { useState } from 'react';
import { CalendarDate, parseDate, getLocalTimeZone, type DateValue } from '@internationalized/date';
import styles from './DemoDatePicker.module.scss';

type TabKey = 'basic' | 'controlled' | 'validation' | 'disabled' | 'variants';

export const DemoDatePicker = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
  const [controlledDate, setControlledDate] = useState<CalendarDate>(parseDate('2025-06-15'));

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
            <h4>Basic DatePicker</h4>
            <div className={styles.componentRow}>
              <DatePicker
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
            <h4>Controlled DatePicker</h4>
            <div className={styles.componentRow}>
              <DatePicker
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
            <h4>DatePicker with Validation</h4>
            <div className={styles.componentRow}>
              <DatePicker
                label="Birth Date"
                description="Enter your birth date"
                minValue={parseDate('1900-01-01')}
                maxValue={parseDate('2025-12-31')}
                defaultValue={parseDate('1990-01-01')}
                isRequired
              />
            </div>
            <div className={styles.componentRow}>
              <DatePicker
                label="Future Date"
                description="Select a date in the future"
                minValue={new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())}
                maxValue={parseDate('2030-12-31')}
              />
            </div>
            <div className={styles.componentRow}>
              <DatePicker
                label="Invalid Date Picker"
                errorMessage="This field is required"
                isInvalid
              />
            </div>
          </div>
        );

      case 'disabled':
        return (
          <div className={styles.variantGroup}>
            <h4>DatePicker with Disabled Dates</h4>
            <div className={styles.componentRow}>
              <DatePicker
                label="Weekday Only"
                description="Weekends are disabled"
                isDateUnavailable={isDateUnavailable}
                defaultValue={parseDate('2025-06-16')} // Monday
              />
            </div>
            <div className={styles.componentRow}>
              <DatePicker
                label="Read-only DatePicker"
                description="This date cannot be changed"
                value={parseDate('2025-06-15')}
                isReadOnly
              />
            </div>
            <div className={styles.componentRow}>
              <DatePicker
                label="Disabled DatePicker"
                description="This picker is disabled"
                defaultValue={parseDate('2025-03-20')}
                isDisabled
              />
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>DatePicker Variants</h4>
            <div className={styles.componentRow}>
              <DatePicker
                label="With Description"
                description="Select your preferred date from the calendar"
              />
            </div>
            <div className={styles.componentRow}>
              <DatePicker
                label="Required Field"
                description="This field is required"
                isRequired
              />
            </div>
            <div className={styles.componentRow}>
              <DatePicker
                label="Appointment Date"
                description="Choose an available appointment date"
                defaultValue={parseDate('2025-07-01')}
              />
            </div>
            <div className={styles.componentRow}>
              <DatePicker
                label="Event Planning"
                description="Plan your event date with calendar view"
                minValue={parseDate('2025-07-01')}
                maxValue={parseDate('2025-12-31')}
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
