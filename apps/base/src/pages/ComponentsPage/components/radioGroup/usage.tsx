import { useState } from 'react';
import { RadioGroup, Radio } from '@mono/components';

// Basic usage
export const BasicRadioGroupUsage = () => (
  <RadioGroup label="Favorite sport">
    <Radio value="soccer">Soccer</Radio>
    <Radio value="baseball">Baseball</Radio>
    <Radio value="basketball">Basketball</Radio>
  </RadioGroup>
);

// With description
export const RadioGroupWithDescription = () => (
  <RadioGroup
    label="Payment method"
    description="Choose your preferred payment method"
  >
    <Radio value="credit">Credit Card</Radio>
    <Radio value="debit">Debit Card</Radio>
    <Radio value="paypal">PayPal</Radio>
  </RadioGroup>
);

// Controlled usage
export const ControlledRadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  return (
    <RadioGroup
      label="Select option"
      value={selectedOption}
      onChange={setSelectedOption}
    >
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
};

// Horizontal layout
export const HorizontalRadioGroup = () => (
  <RadioGroup
    label="Quick answer"
    orientation="horizontal"
  >
    <Radio value="yes">Yes</Radio>
    <Radio value="no">No</Radio>
    <Radio value="maybe">Maybe</Radio>
  </RadioGroup>
);

// Required with validation
export const RequiredRadioGroup = () => (
  <RadioGroup
    label="Terms and conditions"
    isRequired
    errorMessage="You must select an option to continue"
  >
    <Radio value="accept">I accept the terms</Radio>
    <Radio value="decline">I decline the terms</Radio>
  </RadioGroup>
);

// Different sizes
export const RadioGroupSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <RadioGroup size="small" label="Small radio group">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
    </RadioGroup>

    <RadioGroup size="medium" label="Medium radio group">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
    </RadioGroup>

    <RadioGroup size="large" label="Large radio group">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
    </RadioGroup>
  </div>
);

// Disabled states
export const DisabledRadioGroup = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <RadioGroup
      label="Disabled group"
      isDisabled
      defaultValue="option1"
    >
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
    </RadioGroup>

    <RadioGroup label="Individual disabled items">
      <Radio value="available">Available option</Radio>
      <Radio value="disabled" isDisabled>Disabled option</Radio>
      <Radio value="another">Another available</Radio>
    </RadioGroup>
  </div>
);

// Form integration
export const FormRadioGroup = () => (
  <form>
    <RadioGroup
      label="Experience level"
      name="experience"
      description="Select your programming experience level"
    >
      <Radio value="beginner">Beginner</Radio>
      <Radio value="intermediate">Intermediate</Radio>
      <Radio value="advanced">Advanced</Radio>
      <Radio value="expert">Expert</Radio>
    </RadioGroup>

    <button type="submit">Submit</button>
  </form>
);
