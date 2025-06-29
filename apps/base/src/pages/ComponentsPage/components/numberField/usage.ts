/**
 * NumberField Component Usage Examples
 *
 * This file contains usage examples for the NumberField component.
 * These examples demonstrate various ways to use the NumberField component
 * and serve as both documentation and testing code snippets.
 */

export const DemoNumberFieldUsage = `
// Basic NumberField
import { NumberField } from '@mono/components';

// Simple number input
<NumberField
  label="Age"
  placeholder="Enter your age"
  minValue={0}
  maxValue={120}
/>

// Controlled NumberField
function ControlledExample() {
  const [value, setValue] = useState(25);

  return (
    <NumberField
      label="Controlled Value"
      value={value}
      onChange={setValue}
      minValue={0}
      maxValue={100}
    />
  );
}

// Currency formatting
<NumberField
  label="Price"
  defaultValue={29.99}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
  step={0.01}
  minValue={0}
/>

// Percentage formatting
<NumberField
  label="Discount Rate"
  defaultValue={0.15}
  formatOptions={{
    style: 'percent'
  }}
  step={0.01}
  minValue={0}
  maxValue={1}
/>

// Unit formatting
<NumberField
  label="Distance"
  defaultValue={5}
  formatOptions={{
    style: 'unit',
    unit: 'kilometer',
    unitDisplay: 'long'
  }}
  step={0.1}
  minValue={0}
/>

// With validation
<NumberField
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  minValue={1}
  maxValue={100}
  step={1}
  isRequired
  isInvalid={quantity > 50}
  errorMessage="Quantity cannot exceed 50"
/>

// Different sizes
<NumberField size="small" label="Small" />
<NumberField size="medium" label="Medium" />
<NumberField size="large" label="Large" />

// Different variants
<NumberField variant="default" label="Default" />
<NumberField variant="success" label="Success" />
<NumberField variant="warning" label="Warning" />
<NumberField variant="error" label="Error" />

// Disabled and read-only states
<NumberField label="Disabled" value={123} isDisabled />
<NumberField label="Read-only" value={456} isReadOnly />

// Without stepper buttons
<NumberField
  label="Plain Input"
  showStepperButtons={false}
  placeholder="Type numbers only"
/>

// Custom stepper button content
<NumberField
  label="Custom Buttons"
  incrementButtonContent="▲"
  decrementButtonContent="▼"
  defaultValue={10}
/>

// Mobile input modes
<NumberField
  label="Numeric Input"
  inputMode="numeric"
  placeholder="Numeric keyboard"
/>
<NumberField
  label="Decimal Input"
  inputMode="decimal"
  step={0.01}
  placeholder="Decimal keyboard"
/>

// Form integration
<form>
  <NumberField
    name="age"
    label="Age"
    isRequired
    minValue={18}
    maxValue={100}
  />
  <NumberField
    name="salary"
    label="Expected Salary"
    formatOptions={{
      style: 'currency',
      currency: 'USD'
    }}
    step={1000}
    minValue={0}
  />
</form>
`;
