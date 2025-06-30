export const DemoDateFieldUsage = `
import { DateField } from '@mono/components';
import { CalendarDate, parseDate } from '@internationalized/date';

// DATEFIELD COMPONENT

// Basic date field
<DateField
  label="Select Date"
  value={selectedDate}
  onChange={setSelectedDate}
/>

// Date field with description
<DateField
  label="Event Date"
  description="Choose your event date"
  value={date}
  onChange={setDate}
/>

// Date field with validation
<DateField
  label="Birth Date"
  description="Enter your birth date"
  minValue={parseDate('1900-01-01')}
  maxValue={parseDate('2025-12-31')}
  isRequired
  errorMessage="Please enter a valid birth date"
/>

// Read-only date field
<DateField
  label="Document Date"
  description="This date cannot be changed"
  value={parseDate('2025-06-15')}
  isReadOnly
/>

// Disabled date field
<DateField
  label="Disabled Date"
  description="This field is disabled"
  defaultValue={parseDate('2025-03-20')}
  isDisabled
/>

// Controlled date field with default value
<DateField
  label="Appointment Date"
  value={controlledDate}
  onChange={(date) => date && setControlledDate(date)}
  defaultValue={parseDate('2025-06-15')}
/>

// Date field with min/max constraints
<DateField
  label="Available Date"
  description="Select from available dates only"
  minValue={parseDate('2025-01-01')}
  maxValue={parseDate('2025-12-31')}
/>

// Required date field
<DateField
  label="Required Date"
  description="This field must be filled"
  isRequired
/>

// Date field with error state
<DateField
  label="Invalid Date"
  errorMessage="Please enter a valid date"
  isInvalid
/>

// COMMON PATTERNS

// State management
const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
const [controlledDate, setControlledDate] = useState<CalendarDate>(parseDate('2025-06-15'));

// Form integration
<form>
  <DateField
    label="Start Date"
    name="startDate"
    isRequired
    value={formData.startDate}
    onChange={(date) => setFormData(prev => ({...prev, startDate: date}))}
  />

  <DateField
    label="End Date"
    name="endDate"
    isRequired
    value={formData.endDate}
    onChange={(date) => setFormData(prev => ({...prev, endDate: date}))}
    minValue={formData.startDate} // End date must be after start date
  />
</form>

// Validation example
const validateDate = (date: CalendarDate | null) => {
  if (!date) return "Date is required";
  if (date.compare(parseDate('2025-01-01')) < 0) return "Date must be in 2025 or later";
  return null;
};

<DateField
  label="Validated Date"
  value={date}
  onChange={setDate}
  errorMessage={validateDate(date)}
  isInvalid={!!validateDate(date)}
/>
`;
