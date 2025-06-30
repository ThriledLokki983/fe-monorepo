export const DemoDateRangePickerUsage = `
import { DateRangePicker } from '@mono/components';
import { CalendarDate, parseDate, getLocalTimeZone } from '@internationalized/date';

// DATERANGEPICKER COMPONENT

// Basic date range picker
<DateRangePicker
  label="Select Date Range"
  value={selectedRange}
  onChange={setSelectedRange}
/>

// Date range picker with description
<DateRangePicker
  label="Event Duration"
  description="Choose start and end dates for your event"
  value={range}
  onChange={setRange}
/>

// Date range picker with validation
<DateRangePicker
  label="Vacation Period"
  description="Select your vacation dates"
  minValue={parseDate('2025-01-01')}
  maxValue={parseDate('2025-12-31')}
  isRequired
  errorMessage="Please select a valid date range"
/>

// Date range picker with disabled dates
<DateRangePicker
  label="Business Days Only"
  description="Weekends are disabled"
  isDateUnavailable={(date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Disable weekends
  }}
/>

// Read-only date range picker
<DateRangePicker
  label="Project Timeline"
  description="This timeline cannot be changed"
  value={{
    start: parseDate('2025-06-15'),
    end: parseDate('2025-06-20')
  }}
  isReadOnly
/>

// Disabled date range picker
<DateRangePicker
  label="Disabled Range"
  description="This picker is disabled"
  defaultValue={{
    start: parseDate('2025-03-20'),
    end: parseDate('2025-03-25')
  }}
  isDisabled
/>

// Controlled date range picker with default value
<DateRangePicker
  label="Booking Period"
  value={controlledRange}
  onChange={(range) => range && setControlledRange(range)}
  defaultValue={{
    start: parseDate('2025-06-15'),
    end: parseDate('2025-06-20')
  }}
/>

// Date range picker with min/max constraints
<DateRangePicker
  label="Future Dates"
  description="Select dates in the future only"
  minValue={new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())}
  maxValue={parseDate('2030-12-31')}
/>

// Required date range picker
<DateRangePicker
  label="Required Range"
  description="Both start and end dates are required"
  isRequired
/>

// Date range picker with error state
<DateRangePicker
  label="Invalid Range"
  errorMessage="Please select a valid date range"
  isInvalid
/>

// COMMON PATTERNS

// State management
const [selectedRange, setSelectedRange] = useState<{start: CalendarDate; end: CalendarDate} | null>(null);
const [controlledRange, setControlledRange] = useState({
  start: parseDate('2025-06-15'),
  end: parseDate('2025-06-20')
});

// Form integration
<form>
  <DateRangePicker
    label="Project Duration"
    name="projectRange"
    isRequired
    value={formData.projectRange}
    onChange={(range) => setFormData(prev => ({...prev, projectRange: range}))}
  />

  <DateRangePicker
    label="Available Dates"
    name="availableRange"
    isRequired
    value={formData.availableRange}
    onChange={(range) => setFormData(prev => ({...prev, availableRange: range}))}
    minValue={formData.projectRange?.start} // Available range must start after project start
  />
</form>

// Custom date availability
const isBusinessDay = (date: DateValue) => {
  const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
  return dayOfWeek !== 0 && dayOfWeek !== 6; // Exclude weekends
};

<DateRangePicker
  label="Business Days Range"
  description="Select a range that includes only business days"
  isDateUnavailable={(date) => !isBusinessDay(date)}
/>

// Validation example
const validateRange = (range: {start: CalendarDate; end: CalendarDate} | null) => {
  if (!range) return "Date range is required";
  if (range.start.compare(range.end) >= 0) return "End date must be after start date";
  const daysDiff = range.end.toDate(getLocalTimeZone()).getTime() - range.start.toDate(getLocalTimeZone()).getTime();
  const days = Math.ceil(daysDiff / (1000 * 60 * 60 * 24));
  if (days > 30) return "Date range cannot exceed 30 days";
  return null;
};

<DateRangePicker
  label="Validated Range"
  value={range}
  onChange={setRange}
  errorMessage={validateRange(range)}
  isInvalid={!!validateRange(range)}
/>

// Event handling
<DateRangePicker
  label="Event Dates"
  onChange={(range) => {
    console.log('Range selected:', range?.start.toString(), 'to', range?.end.toString());
    setSelectedRange(range);
  }}
  onOpenChange={(isOpen) => {
    console.log('Calendar opened:', isOpen);
  }}
/>

// Preset ranges helper
const setPresetRange = (days: number) => {
  const today = new Date();
  const start = new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
  const end = start.add({ days });
  setControlledRange({ start, end });
};

// Usage with preset buttons
<div>
  <DateRangePicker
    label="Duration"
    value={controlledRange}
    onChange={setControlledRange}
  />
  <div style={{marginTop: '8px', display: 'flex', gap: '8px'}}>
    <button onClick={() => setPresetRange(7)}>1 Week</button>
    <button onClick={() => setPresetRange(14)}>2 Weeks</button>
    <button onClick={() => setPresetRange(30)}>1 Month</button>
  </div>
</div>
`;
