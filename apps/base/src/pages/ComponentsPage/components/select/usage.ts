export const DemoSelectUsage = `
  import { Select, SelectOption } from '@mono/components';

  const options: SelectOption[] = [
    { id: 1, label: 'Option 1', value: 'option1' },
    { id: 2, label: 'Option 2', value: 'option2' },
    { id: 3, label: 'Option 3', value: 'option3' },
  ];

  // Basic Select
  <Select
    label="Choose an option"
    placeholder="Select an option..."
    options={options}
    onSelectionChange={(key) => console.log('Selected:', key)}
  />

  // Select with descriptions
  <Select
    label="Priority Level"
    placeholder="Select priority..."
    options={[
      { id: 'low', label: 'Low', description: 'Handle when convenient' },
      { id: 'high', label: 'High', description: 'Handle today' },
      { id: 'urgent', label: 'Urgent', description: 'Handle immediately' }
    ]}
    defaultSelectedKey="high"
  />

  // Available sizes: 'sm' | 'md' | 'lg'
  // Available variants: 'default' | 'filled' | 'outlined'
  // Built with React Aria for accessibility and keyboard navigation
`;
