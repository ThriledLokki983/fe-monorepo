export const DemoTimeFieldUsage = {
  basic: `import { TimeField } from '@mono/components';
import { useState } from 'react';
import type { TimeValue } from 'react-aria-components';

const MyComponent = () => {
  const [time, setTime] = useState<TimeValue | null>(null);

  return (
    <TimeField
      label="Select Time"
      value={time}
      onChange={setTime}
    />
  );
};`,

  controlled: `import { TimeField } from '@mono/components';
import { useState } from 'react';
import { Time, parseTime } from '@internationalized/date';

const ControlledTimeField = () => {
  const [time, setTime] = useState<Time>(parseTime('14:30'));

  return (
    <div>
      <TimeField
        label="Meeting Time"
        value={time}
        onChange={(newTime) => newTime && setTime(newTime)}
      />

      <button
        onClick={() => setTime(parseTime('09:00'))}
      >
        Set to 9:00 AM
      </button>
    </div>
  );
};`,

  validation: `import { TimeField } from '@mono/components';
import { useState } from 'react';
import type { TimeValue } from 'react-aria-components';

const ValidatedTimeField = () => {
  const [time, setTime] = useState<TimeValue | null>(null);
  const [hasError, setHasError] = useState(false);

  const validateTime = (time: TimeValue | null) => {
    if (!time) {
      setHasError(true);
      return;
    }

    // Working hours validation (9 AM to 6 PM)
    const hour = time.hour;
    const isValidWorkingHour = hour >= 9 && hour <= 18;
    setHasError(!isValidWorkingHour);
  };

  return (
    <TimeField
      label="Working Hours"
      description="Please select a time between 9 AM and 6 PM"
      value={time}
      onChange={(newTime) => {
        setTime(newTime);
        validateTime(newTime);
      }}
      isInvalid={hasError}
      errorMessage={hasError ? "Please select a time during working hours" : undefined}
      isRequired
    />
  );
};`,

  readonly: `import { TimeField } from '@mono/components';
import { parseTime } from '@internationalized/date';

const ReadOnlyTimeField = () => {
  return (
    <TimeField
      label="Appointment Time"
      description="This time cannot be changed"
      value={parseTime('10:30')}
      isReadOnly
    />
  );
};`,

  variants: `import { TimeField } from '@mono/components';
import { parseTime } from '@internationalized/date';

const TimeFieldVariants = () => {
  return (
    <div>
      {/* 24-hour format */}
      <TimeField
        label="24-Hour Format"
        description="24-hour time format"
        hourCycle={24}
      />

      {/* With seconds */}
      <TimeField
        label="With Seconds"
        description="Time with seconds precision"
        granularity="second"
      />

      {/* Disabled */}
      <TimeField
        label="Disabled TimeField"
        description="This time field is disabled"
        defaultValue={parseTime('12:00')}
        isDisabled
      />

      {/* Required */}
      <TimeField
        label="Required TimeField"
        description="This field is required"
        isRequired
        errorMessage="Time is required"
      />
    </div>
  );
};`,

  advanced: `import { TimeField } from '@mono/components';
import { useState } from 'react';
import { Time, parseTime } from '@internationalized/date';
import type { TimeValue } from 'react-aria-components';

const AdvancedTimeField = () => {
  const [startTime, setStartTime] = useState<Time | null>(null);
  const [endTime, setEndTime] = useState<Time | null>(null);
  const [hasTimeConflict, setHasTimeConflict] = useState(false);

  const validateTimeRange = (start: Time | null, end: Time | null) => {
    if (start && end) {
      const startMinutes = start.hour * 60 + start.minute;
      const endMinutes = end.hour * 60 + end.minute;
      setHasTimeConflict(endMinutes <= startMinutes);
    } else {
      setHasTimeConflict(false);
    }
  };

  return (
    <div>
      <TimeField
        label="Start Time"
        value={startTime}
        onChange={(time) => {
          setStartTime(time);
          validateTimeRange(time, endTime);
        }}
        isInvalid={hasTimeConflict}
        isRequired
      />

      <TimeField
        label="End Time"
        value={endTime}
        onChange={(time) => {
          setEndTime(time);
          validateTimeRange(startTime, time);
        }}
        isInvalid={hasTimeConflict}
        errorMessage={hasTimeConflict ? "End time must be after start time" : undefined}
        isRequired
      />

      {startTime && endTime && !hasTimeConflict && (
        <p>Duration: {calculateDuration(startTime, endTime)}</p>
      )}
    </div>
  );
};`,
};
