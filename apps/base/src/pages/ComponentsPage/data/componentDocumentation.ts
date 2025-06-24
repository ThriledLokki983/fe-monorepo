export interface PropDefinition {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
  required?: boolean;
}

export interface UsageExample {
  title: string;
  description?: string;
  code: string;
  demo?: React.ReactNode;
}

export interface ComponentDocumentation {
  name: string;
  description: string;
  usageExamples: UsageExample[];
  props: PropDefinition[];
  notes?: string[];
}

export const componentDocumentation: Record<string, ComponentDocumentation> = {
  Button: {
    name: 'Button',
    description: 'A versatile button component that can be used as a button or link, built with React Aria for accessibility.',
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `<Button variant="primary">Click me</Button>`,
      },
      {
        title: 'Button as Link',
        description: 'When url prop is provided, the button renders as a link',
        code: `<Button variant="secondary" url="https://example.com">
  Visit Website
</Button>`,
      },
      {
        title: 'Form Actions',
        code: `<Button variant="secondary" type="button">
  Cancel
</Button>
<Button variant="primary" type="submit">
  Save Changes
</Button>`,
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'tertiary' | 'danger' | 'transparent'",
        defaultValue: "'primary'",
        description: 'Visual style variant',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size of the button',
      },
      {
        name: 'type',
        type: "'button' | 'submit' | 'reset'",
        defaultValue: "'button'",
        description: 'HTML button type (only when used as button, not link)',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Disables the button (standard React)',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Disables the button (React Aria)',
      },
      {
        name: 'onClick',
        type: '() => void',
        defaultValue: '-',
        description: 'Click handler (standard React)',
      },
      {
        name: 'onPress',
        type: '() => void',
        defaultValue: '-',
        description: 'Press handler (React Aria)',
      },
      {
        name: 'url',
        type: 'string',
        defaultValue: '-',
        description: 'When provided, renders as a link. The destination URL',
      },
      {
        name: 'target',
        type: "'_blank' | '_self' | '_parent' | '_top'",
        defaultValue: "'_self'",
        description: 'Where to open the link (only when url is provided)',
      },
      {
        name: 'rel',
        type: 'string',
        defaultValue: 'auto',
        description: 'Link relationship (auto-sets security for external links)',
      },
    ],
    notes: [
      'When url is provided, the component renders as a link and type prop is not available.',
      'The component automatically sets appropriate security attributes for external links.',
    ],
  },

  ComboBox: {
    name: 'ComboBox',
    description: 'An accessible combobox component that allows users to select from a list of options or enter custom values, built with React Aria.',
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `<ComboBox
  label="Choose a fruit"
  placeholder="Select or type..."
  options={[
    { id: 1, label: 'Apple' },
    { id: 2, label: 'Banana' },
    { id: 3, label: 'Orange' }
  ]}
/>`,
      },
      {
        title: 'With Custom Values',
        code: `<ComboBox
  label="Tags"
  allowsCustomValue={true}
  options={tagOptions}
  onInputChange={(value) => console.log('Input:', value)}
  onSelectionChange={(key) => console.log('Selected:', key)}
/>`,
      },
      {
        title: 'Loading State',
        code: `<ComboBox
  label="Search users"
  isLoading={true}
  options={userOptions}
  placeholder="Type to search..."
/>`,
      },
      {
        title: 'With Descriptions',
        code: `<ComboBox
  label="Countries"
  options={[
    { id: 'us', label: 'United States', description: 'North America' },
    { id: 'uk', label: 'United Kingdom', description: 'Europe' },
    { id: 'jp', label: 'Japan', description: 'Asia' }
  ]}
/>`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'Label for the combobox',
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: '-',
        description: 'Placeholder text for the input',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Help text displayed below the input',
      },
      {
        name: 'errorMessage',
        type: 'string',
        defaultValue: '-',
        description: 'Error message to display',
      },
      {
        name: 'options',
        type: 'ComboBoxOption[]',
        defaultValue: '[]',
        description: 'Array of options to display',
      },
      {
        name: 'selectedKey',
        type: 'string | number | null',
        defaultValue: '-',
        description: 'Controlled selected option ID',
      },
      {
        name: 'defaultSelectedKey',
        type: 'string | number | null',
        defaultValue: '-',
        description: 'Default selected option ID (uncontrolled)',
      },
      {
        name: 'inputValue',
        type: 'string',
        defaultValue: '-',
        description: 'Controlled input value',
      },
      {
        name: 'defaultInputValue',
        type: 'string',
        defaultValue: '-',
        description: 'Default input value (uncontrolled)',
      },
      {
        name: 'allowsCustomValue',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Allow entering values not in the options list',
      },
      {
        name: 'isLoading',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Show loading spinner instead of chevron',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant of the combobox',
      },
      {
        name: 'variant',
        type: "'default' | 'filled' | 'outlined'",
        defaultValue: "'default'",
        description: 'Visual style variant',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Disable the combobox',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Mark the field as required',
      },
      {
        name: 'onSelectionChange',
        type: '(key: string | number | null) => void',
        defaultValue: '-',
        description: 'Called when the selection changes',
      },
      {
        name: 'onInputChange',
        type: '(value: string) => void',
        defaultValue: '-',
        description: 'Called when the input value changes',
      },
      {
        name: 'filter',
        type: '(items: ComboBoxOption[], inputValue: string) => ComboBoxOption[]',
        defaultValue: '-',
        description: 'Custom filter function for options',
      },
    ],
    notes: [
      'The component includes built-in filtering based on the input value.',
      'Custom filter functions can be provided to override the default behavior.',
      'Options can include descriptions for additional context.',
    ],
  },

  Select: {
    name: 'Select',
    description: 'An accessible select component for choosing from a list of predefined options, built with React Aria.',
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `<Select
  label="Choose a color"
  placeholder="Select a color"
  options={[
    { id: 'red', label: 'Red' },
    { id: 'blue', label: 'Blue' },
    { id: 'green', label: 'Green' }
  ]}
/>`,
      },
      {
        title: 'Controlled Component',
        code: `<Select
  label="Priority"
  selectedKey={selectedPriority}
  onSelectionChange={setSelectedPriority}
  options={priorityOptions}
/>`,
      },
      {
        title: 'With Descriptions',
        code: `<Select
  label="Plan"
  options={[
    { id: 'free', label: 'Free', description: 'Basic features' },
    { id: 'pro', label: 'Pro', description: 'Advanced features' },
    { id: 'enterprise', label: 'Enterprise', description: 'All features' }
  ]}
/>`,
      },
      {
        title: 'Different Sizes',
        code: `<Select size="small" label="Small" options={options} />
<Select size="medium" label="Medium" options={options} />
<Select size="large" label="Large" options={options} />`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'Label for the select',
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: '-',
        description: 'Placeholder text when no option is selected',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Help text displayed below the select',
      },
      {
        name: 'errorMessage',
        type: 'string',
        defaultValue: '-',
        description: 'Error message to display',
      },
      {
        name: 'options',
        type: 'SelectOption[]',
        defaultValue: '[]',
        description: 'Array of options to display',
        required: true,
      },
      {
        name: 'selectedKey',
        type: 'string | number | null',
        defaultValue: '-',
        description: 'Controlled selected option ID',
      },
      {
        name: 'defaultSelectedKey',
        type: 'string | number | null',
        defaultValue: '-',
        description: 'Default selected option ID (uncontrolled)',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant of the select',
      },
      {
        name: 'variant',
        type: "'default' | 'filled' | 'outlined'",
        defaultValue: "'default'",
        description: 'Visual style variant',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Disable the select',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Mark the field as required',
      },
      {
        name: 'onSelectionChange',
        type: '(key: string | number | null) => void',
        defaultValue: '-',
        description: 'Called when the selection changes',
      },
    ],
    notes: [
      'Unlike ComboBox, Select only allows choosing from predefined options.',
      'The component provides keyboard navigation and screen reader support.',
      'Options with descriptions will display the description below the label.',
    ],
  },
};
