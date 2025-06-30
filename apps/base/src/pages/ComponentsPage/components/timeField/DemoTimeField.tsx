import { TimeField } from '@mono/components';
import { useState } from 'react';
import { Time, parseTime } from '@internationalized/date';
import type { TimeValue } from 'react-aria-components';
import styles from './DemoTimeField.module.scss';

type TabKey = 'basic' | 'controlled' | 'validation' | 'readonly' | 'variants';

export const DemoTimeField = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedTime, setSelectedTime] = useState<TimeValue | null>(null);
  const [controlledTime, setControlledTime] = useState<Time>(parseTime('14:30'));
  const [validationTime, setValidationTime] = useState<TimeValue | null>(null);
  const [hasError, setHasError] = useState(false);

  const tabs = [
    { key: 'basic' as const, label: 'Basic' },
    { key: 'controlled' as const, label: 'Controlled' },
    { key: 'validation' as const, label: 'Validation' },
    { key: 'readonly' as const, label: 'Read Only' },
    { key: 'variants' as const, label: 'Variants' },
  ];

  const validateTime = (time: TimeValue | null) => {
    if (!time) {
      setHasError(true);
      return;
    }

    // Example validation: working hours (9 AM to 6 PM)
    const hour = time.hour;
    const isValidWorkingHour = hour >= 9 && hour <= 18;
    setHasError(!isValidWorkingHour);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic TimeField</h4>
            <div className={styles.componentRow}>
              <TimeField
                label="Select Time"
                value={selectedTime}
                onChange={setSelectedTime}
              />
            </div>
            {selectedTime && (
              <p className={styles.selectedTime}>
                Selected: {selectedTime.toString()}
              </p>
            )}
          </div>
        );

      case 'controlled':
        return (
          <div className={styles.variantGroup}>
            <h4>Controlled TimeField</h4>
            <div className={styles.componentRow}>
              <TimeField
                label="Meeting Time"
                value={controlledTime}
                onChange={(time) => time && setControlledTime(time)}
              />
            </div>
            <div className={styles.controls}>
              <button
                onClick={() => setControlledTime(parseTime('09:00'))}
                className={styles.controlButton}
              >
                Set to 9:00 AM
              </button>
              <button
                onClick={() => setControlledTime(parseTime('13:30'))}
                className={styles.controlButton}
              >
                Set to 1:30 PM
              </button>
              <button
                onClick={() => setControlledTime(parseTime('17:45'))}
                className={styles.controlButton}
              >
                Set to 5:45 PM
              </button>
            </div>
            <p className={styles.selectedTime}>
              Current: {controlledTime.toString()}
            </p>
          </div>
        );

      case 'validation':
        return (
          <div className={styles.variantGroup}>
            <h4>TimeField with Validation</h4>
            <div className={styles.componentRow}>
              <TimeField
                label="Working Hours"
                description="Please select a time between 9 AM and 6 PM"
                value={validationTime}
                onChange={(time) => {
                  setValidationTime(time);
                  validateTime(time);
                }}
                isInvalid={hasError}
                errorMessage={hasError ? "Please select a time during working hours (9 AM - 6 PM)" : undefined}
                isRequired
              />
            </div>
            <p className={styles.note}>
              Try selecting a time outside of 9 AM to 6 PM to see validation
            </p>
          </div>
        );

      case 'readonly':
        return (
          <div className={styles.variantGroup}>
            <h4>Read-only TimeField</h4>
            <div className={styles.componentRow}>
              <TimeField
                label="Appointment Time"
                description="This time cannot be changed"
                value={parseTime('10:30')}
                isReadOnly
              />
            </div>
            <div className={styles.componentRow}>
              <TimeField
                label="System Time"
                description="Current system time"
                value={new Time(new Date().getHours(), new Date().getMinutes())}
                isReadOnly
              />
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>TimeField Variants</h4>

            <div className={styles.componentRow}>
              <TimeField
                label="Standard Time"
                description="12-hour format with AM/PM"
              />
            </div>

            <div className={styles.componentRow}>
              <TimeField
                label="24-Hour Format"
                description="24-hour time format"
                hourCycle={24}
              />
            </div>

            <div className={styles.componentRow}>
              <TimeField
                label="With Seconds"
                description="Time with seconds precision"
                granularity="second"
              />
            </div>

            <div className={styles.componentRow}>
              <TimeField
                label="Disabled TimeField"
                description="This time field is disabled"
                defaultValue={parseTime('12:00')}
                isDisabled
              />
            </div>

            <div className={styles.componentRow}>
              <TimeField
                label="Required TimeField"
                description="This field is required"
                isRequired
                errorMessage="Time is required"
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
{`import { TimeField } from '@mono/components';
import { useState } from 'react';
import { type TimeValue } from '@internationalized/date';

const MyComponent = () => {
  const [time, setTime] = useState<TimeValue | null>(null);

  return (
    <TimeField
      label="Select Time"
      value={time}
      onChange={setTime}
    />
  );
};`}
          </code>
        </pre>
      </div>
    </div>
  );
};
