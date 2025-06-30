export const radioGroupUsageCode = `import { RadioGroup, Radio } from '@mono/components';

// Basic radio group
<RadioGroup label="Favorite sport">
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</RadioGroup>

// Controlled radio group
const [selectedPayment, setSelectedPayment] = useState('credit');

<RadioGroup
  label="Payment method"
  value={selectedPayment}
  onChange={setSelectedPayment}
>
  <Radio value="credit">Credit Card</Radio>
  <Radio value="debit">Debit Card</Radio>
  <Radio value="paypal">PayPal</Radio>
</RadioGroup>

// Required radio group
<RadioGroup
  label="Choose an option"
  isRequired
  errorMessage="Please select an option"
>
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
</RadioGroup>

// Radio group with different sizes
<RadioGroup size="small" label="Small">
  <Radio value="option1">Option 1</Radio>
  <Radio value="option2">Option 2</Radio>
</RadioGroup>

<RadioGroup size="medium" label="Medium">
  <Radio value="option1">Option 1</Radio>
  <Radio value="option2">Option 2</Radio>
</RadioGroup>

<RadioGroup size="large" label="Large">
  <Radio value="option1">Option 1</Radio>
  <Radio value="option2">Option 2</Radio>
</RadioGroup>

// Horizontal layout
<RadioGroup
  label="Quick answer"
  orientation="horizontal"
>
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
  <Radio value="maybe">Maybe</Radio>
</RadioGroup>

// Disabled states
<RadioGroup
  label="Disabled group"
  isDisabled
  defaultValue="option1"
>
  <Radio value="option1">Option 1</Radio>
  <Radio value="option2">Option 2</Radio>
</RadioGroup>

// Individual disabled items
<RadioGroup label="Mixed disabled">
  <Radio value="available">Available</Radio>
  <Radio value="disabled" isDisabled>Disabled</Radio>
  <Radio value="another">Another</Radio>
</RadioGroup>

// With description
<RadioGroup
  label="Experience level"
  description="Select your programming experience"
>
  <Radio value="beginner">Beginner</Radio>
  <Radio value="intermediate">Intermediate</Radio>
  <Radio value="advanced">Advanced</Radio>
</RadioGroup>
`;
