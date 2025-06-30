export const DemoRangeCalendarUsage = {
  basic: `import { RangeCalendar } from '@mono/components';
import { useState } from 'react';
import { type CalendarDate } from '@internationalized/date';

type DateRange = { start: CalendarDate; end: CalendarDate };

const MyComponent = () => {
  const [range, setRange] = useState<DateRange | null>(null);

  return (
    <RangeCalendar
      aria-label="Select date range"
      value={range}
      onChange={setRange}
    />
  );
};`,

  controlled: `import { RangeCalendar } from '@mono/components';
import { useState } from 'react';
import { CalendarDate, parseDate } from '@internationalized/date';

type DateRange = { start: CalendarDate; end: CalendarDate };

const ControlledRangeCalendar = () => {
  const [range, setRange] = useState<DateRange>({
    start: parseDate('2025-01-15'),
    end: parseDate('2025-01-20')
  });

  return (
    <div>
      <RangeCalendar
        aria-label="Controlled date range"
        value={range}
        onChange={setRange}
      />

      <button
        onClick={() => setRange({
          start: parseDate('2025-02-01'),
          end: parseDate('2025-02-07')
        })}
      >
        Set to Feb 1-7
      </button>
    </div>
  );
};`,

  validation: `import { RangeCalendar } from '@mono/components';
import { parseDate } from '@internationalized/date';

const ValidatedRangeCalendar = () => {
  return (
    <RangeCalendar
      aria-label="Select booking dates"
      minValue={parseDate('2025-01-01')}
      maxValue={parseDate('2025-12-31')}
    />
  );
};`,

  disabledDates: `import { RangeCalendar } from '@mono/components';
import { getLocalTimeZone, type DateValue } from '@internationalized/date';

const WeekdayOnlyRangeCalendar = () => {
  const isDateUnavailable = (date: DateValue) => {
    // Disable weekends (Saturday and Sunday)
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  return (
    <RangeCalendar
      aria-label="Select weekdays only"
      isDateUnavailable={isDateUnavailable}
    />
  );
};`,

  readonly: `import { RangeCalendar } from '@mono/components';
import { parseDate } from '@internationalized/date';

const ReadOnlyRangeCalendar = () => {
  return (
    <RangeCalendar
      aria-label="View-only date range"
      value={{
        start: parseDate('2025-06-01'),
        end: parseDate('2025-06-15')
      }}
      isReadOnly
    />
  );
};`,

  advanced: `import { RangeCalendar } from '@mono/components';
import { useState } from 'react';
import {
  CalendarDate,
  parseDate,
  getLocalTimeZone,
  type DateValue
} from '@internationalized/date';

type DateRange = { start: CalendarDate; end: CalendarDate };

const AdvancedRangeCalendar = () => {
  const [range, setRange] = useState<DateRange | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const isDateUnavailable = (date: DateValue) => {
    // Disable weekends and holidays
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // Example: disable specific dates
    const holidays = [
      parseDate('2025-01-01'), // New Year
      parseDate('2025-07-04'), // Independence Day
      parseDate('2025-12-25'), // Christmas
    ];

    const isHoliday = holidays.some(holiday =>
      date.compare(holiday) === 0
    );

    return isWeekend || isHoliday;
  };

  return (
    <div>
      <RangeCalendar
        aria-label="Advanced date range selection"
        value={range}
        onChange={setRange}
        minValue={parseDate('2025-01-01')}
        maxValue={parseDate('2025-12-31')}
        isDateUnavailable={isDateUnavailable}
        allowsNonContiguousRanges
      />

      {range && (
        <div>
          <p>Selected range: {range.start.toString()} to {range.end.toString()}</p>
          <button onClick={() => setRange(null)}>
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
};`,
};
