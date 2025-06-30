export const DemoComboBoxUsage = `
  import { ComboBox, ComboBoxOption } from '@mono/components';

  const options: ComboBoxOption[] = [
    { id: 1, label: 'Option 1', value: 'option1' },
    { id: 2, label: 'Option 2', value: 'option2' },
    { id: 3, label: 'Option 3', value: 'option3' },
  ];

  // Basic ComboBox
  <ComboBox
    label="Choose an option"
    placeholder="Type to search..."
    options={options}
    onSelectionChange={(key) => console.log('Selected:', key)}
    onInputChange={(value) => console.log('Input:', value)}
  />

  // ComboBox with custom values
  <ComboBox
    label="Flexible Input"
    placeholder="Type anything..."
    options={options}
    allowsCustomValue
    onSelectionChange={handleSelection}
  />

  // Available sizes: 'sm' | 'md' | 'lg'
  // Available variants: 'default' | 'filled' | 'outlined'
  // Built with React Aria for accessibility and keyboard navigation
`;
