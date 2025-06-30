export const DemoDatePickerUsage = `
import { DatePicker } from '@mono/components';
import { CalendarDate, parseDate, getLocalTimeZone } from '@internationalized/date';

// DATEPICKER COMPONENT

// Basic date picker
<DatePicker
  label="Select Date"
  value={selectedDate}
  onChange={setSelectedDate}
/>

// Date picker with description
<DatePicker
  label="Event Date"
  description="Choose your event date from the calendar"
  value={date}
  onChange={setDate}
/>

// Date picker with validation
<DatePicker
  label="Birth Date"
  description="Enter your birth date"
  minValue={parseDate('1900-01-01')}
  maxValue={parseDate('2025-12-31')}
  isRequired
  errorMessage="Please select a valid birth date"
/>

// Date picker with disabled dates
<DatePicker
  label="Weekday Only"
  description="Weekends are disabled"
  isDateUnavailable={(date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Disable weekends
  }}
/>

// Read-only date picker
<DatePicker
  label="Document Date"
  description="This date cannot be changed"
  value={parseDate('2025-06-15')}
  isReadOnly
/>

// Disabled date picker
<DatePicker
  label="Disabled Date"
  description="This picker is disabled"
  defaultValue={parseDate('2025-03-20')}
  isDisabled
/>

// Controlled date picker with default value
<DatePicker
  label="Appointment Date"
  value={controlledDate}
  onChange={(date) => date && setControlledDate(date)}
  defaultValue={parseDate('2025-06-15')}
/>

// Date picker with min/max constraints
<DatePicker
  label="Future Date"
  description="Select a date in the future"
  minValue={new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())}
  maxValue={parseDate('2030-12-31')}
/>

// Required date picker
<DatePicker
  label="Required Date"
  description="This field must be filled"
  isRequired
/>

// Date picker with error state
<DatePicker
  label="Invalid Date"
  errorMessage="Please select a valid date"
  isInvalid
/>

// COMMON PATTERNS

// State management
const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
const [controlledDate, setControlledDate] = useState<CalendarDate>(parseDate('2025-06-15'));

// Form integration
<form>
  <DatePicker
    label="Start Date"
    name="startDate"
    isRequired
    value={formData.startDate}
    onChange={(date) => setFormData(prev => ({...prev, startDate: date}))}
  />

  <DatePicker
    label="End Date"
    name="endDate"
    isRequired
    value={formData.endDate}
    onChange={(date) => setFormData(prev => ({...prev, endDate: date}))}
    minValue={formData.startDate} // End date must be after start date
  />
</form>

// Custom date availability
const isBusinessDay = (date: DateValue) => {
  const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
  return dayOfWeek !== 0 && dayOfWeek !== 6; // Exclude weekends
};

<DatePicker
  label="Business Day"
  description="Select a business day (weekdays only)"
  isDateUnavailable={(date) => !isBusinessDay(date)}
/>

// Validation example
const validateDate = (date: CalendarDate | null) => {
  if (!date) return "Date is required";
  if (date.compare(parseDate('2025-01-01')) < 0) return "Date must be in 2025 or later";
  return null;
};

<DatePicker
  label="Validated Date"
  value={date}
  onChange={setDate}
  errorMessage={validateDate(date)}
  isInvalid={!!validateDate(date)}
/>

// Event handling
<DatePicker
  label="Event Date"
  onChange={(date) => {
    console.log('Date selected:', date?.toString());
    setSelectedDate(date);
  }}
  onOpenChange={(isOpen) => {
    console.log('Calendar opened:', isOpen);
  }}
/>
`;
