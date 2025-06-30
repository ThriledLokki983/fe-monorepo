import { useState } from 'react';
import { CheckboxGroup, Checkbox } from '@mono/components';

// Basic usage
export const BasicCheckboxGroupUsage = () => (
  <CheckboxGroup label="Favorite sports">
    <Checkbox value="soccer">Soccer</Checkbox>
    <Checkbox value="baseball">Baseball</Checkbox>
    <Checkbox value="basketball">Basketball</Checkbox>
  </CheckboxGroup>
);

// With description
export const CheckboxGroupWithDescription = () => (
  <CheckboxGroup
    label="Email preferences"
    description="Choose which emails you'd like to receive"
  >
    <Checkbox value="newsletter">Weekly newsletter</Checkbox>
    <Checkbox value="updates">Product updates</Checkbox>
    <Checkbox value="promotions">Special promotions</Checkbox>
  </CheckboxGroup>
);

// Controlled usage
export const ControlledCheckboxGroup = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['item1']);

  return (
    <CheckboxGroup
      label="Select items"
      value={selectedItems}
      onChange={setSelectedItems}
    >
      <Checkbox value="item1">Item 1</Checkbox>
      <Checkbox value="item2">Item 2</Checkbox>
      <Checkbox value="item3">Item 3</Checkbox>
    </CheckboxGroup>
  );
};

// Horizontal layout
export const HorizontalCheckboxGroup = () => (
  <CheckboxGroup
    label="Quick options"
    orientation="horizontal"
  >
    <Checkbox value="yes">Yes</Checkbox>
    <Checkbox value="no">No</Checkbox>
    <Checkbox value="maybe">Maybe</Checkbox>
  </CheckboxGroup>
);

// Required with validation
export const RequiredCheckboxGroup = () => (
  <CheckboxGroup
    label="Terms and conditions"
    isRequired
    errorMessage="You must accept at least one to continue"
  >
    <Checkbox value="terms">I accept the terms of service</Checkbox>
    <Checkbox value="privacy">I accept the privacy policy</Checkbox>
    <Checkbox value="cookies">I accept cookie usage</Checkbox>
  </CheckboxGroup>
);

// Different sizes
export const CheckboxGroupSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <CheckboxGroup size="small" label="Small checkbox group">
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup size="medium" label="Medium checkbox group">
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup size="large" label="Large checkbox group">
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
    </CheckboxGroup>
  </div>
);

// Disabled states
export const DisabledCheckboxGroup = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <CheckboxGroup
      label="Disabled group"
      isDisabled
      defaultValue={['option1']}
    >
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup label="Individual disabled items">
      <Checkbox value="available">Available option</Checkbox>
      <Checkbox value="disabled" isDisabled>Disabled option</Checkbox>
      <Checkbox value="another">Another available</Checkbox>
    </CheckboxGroup>
  </div>
);

// Form integration
export const FormCheckboxGroup = () => (
  <form>
    <CheckboxGroup
      label="Programming languages"
      name="languages"
      description="Select the languages you know"
    >
      <Checkbox value="javascript">JavaScript</Checkbox>
      <Checkbox value="typescript">TypeScript</Checkbox>
      <Checkbox value="python">Python</Checkbox>
      <Checkbox value="rust">Rust</Checkbox>
    </CheckboxGroup>

    <button type="submit">Submit</button>
  </form>
);
