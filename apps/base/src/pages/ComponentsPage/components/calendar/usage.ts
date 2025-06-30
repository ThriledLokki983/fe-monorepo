export const DemoCalendarUsage = `
  import { Calendar } from '@mono/components';
  import { CalendarDate, parseDate, getLocalTimeZone } from '@internationalized/date';

  // CALENDAR COMPONENT

  // Basic calendar
  <Calendar
    aria-label="Select a date"
    value={selectedDate}
    onChange={setSelectedDate}
  />

  // Controlled calendar with initial value
  <Calendar
    aria-label="Event date"
    value={controlledDate}
    onChange={setControlledDate}
    defaultValue={parseDate('2024-06-15')}
  />

  // Calendar with date restrictions
  <Calendar
    aria-label="Available dates"
    minValue={parseDate('2024-01-01')}
    maxValue={parseDate('2024-12-31')}
    defaultValue={parseDate('2024-06-15')}
  />

  // Calendar with disabled dates (e.g., weekends)
  const isDateUnavailable = (date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Disable Sunday and Saturday
  };

  <Calendar
    aria-label="Weekday selection"
    isDateUnavailable={isDateUnavailable}
    defaultValue={parseDate('2024-06-17')} // Monday
  />

  // Read-only calendar
  <Calendar
    aria-label="Display date"
    isReadOnly
    defaultValue={parseDate('2024-06-15')}
  />

  // Calendar with validation
  <Calendar
    aria-label="Appointment date"
    validate={(value) => value < parseDate('2024-01-01') ? 'Date must be in 2024 or later' : null}
    defaultValue={parseDate('2024-06-15')}
  />

  // WORKING WITH DATES

  // Creating dates
  const date = parseDate('2024-06-15'); // ISO 8601 format
  const today = new CalendarDate(2024, 6, 15); // Year, month (1-12), day

  // Date operations
  const nextWeek = date.add({ weeks: 1 });
  const nextMonth = date.add({ months: 1 });
  const yesterday = date.subtract({ days: 1 });

  // Comparing dates
  const isAfter = date1.compare(date2) > 0;
  const isSame = date1.compare(date2) === 0;
  const isBefore = date1.compare(date2) < 0;

  // Converting to JavaScript Date
  const jsDate = date.toDate(getLocalTimeZone());

  // Formatting dates
  const formatter = new Intl.DateTimeFormat('en-US');
  const formatted = formatter.format(jsDate);

  // STATE MANAGEMENT

  const [selectedDate, setSelectedDate] = useState(null);
  const [controlledDate, setControlledDate] = useState(parseDate('2024-01-15'));

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Perform additional logic
    console.log('Selected:', date.toString());
  };

  // ACCESSIBILITY FEATURES

  // All calendars include:
  // - Full keyboard navigation (arrow keys, Page Up/Down, Home/End)
  // - Screen reader announcements
  // - Focus management
  // - ARIA labels and roles
  // - High contrast mode support

  // PROPS REFERENCE

  // value?: DateValue | null - Selected date
  // defaultValue?: DateValue - Initial selected date
  // onChange?: (value: DateValue | null) => void - Date selection handler
  // minValue?: DateValue - Earliest selectable date
  // maxValue?: DateValue - Latest selectable date
  // isDateUnavailable?: (date: DateValue) => boolean - Disable specific dates
  // isReadOnly?: boolean - Prevent date selection
  // isDisabled?: boolean - Disable entire calendar
  // autoFocus?: boolean - Focus on mount
  // validate?: (value: DateValue) => ValidationError | true | null - Custom validation
  // errorMessage?: ReactNode | ((validation: ValidationResult) => ReactNode) - Error display
`;
