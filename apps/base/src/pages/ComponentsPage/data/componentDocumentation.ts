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
  Checkbox: {
    name: 'Checkbox',
    description: 'An accessible checkbox component built on React Aria. Supports checked, unchecked, and indeterminate states with full form integration and keyboard navigation.',
    usageExamples: [
      {
        title: 'Basic Checkbox',
        description: 'A simple checkbox with a label.',
        code: `<Checkbox>
  Subscribe to newsletter
</Checkbox>`,
      },
      {
        title: 'Controlled Checkbox',
        description: 'A checkbox with controlled state.',
        code: `const [isSelected, setSelected] = useState(false);

<Checkbox
  isSelected={isSelected}
  onChange={setSelected}
>
  Accept terms and conditions
</Checkbox>`,
      },
      {
        title: 'Indeterminate Checkbox',
        description: 'A checkbox in an indeterminate state, commonly used for "select all" functionality.',
        code: `<Checkbox isIndeterminate>
  Select all items
</Checkbox>`,
      },
      {
        title: 'Required Checkbox',
        description: 'A checkbox marked as required with validation.',
        code: `<Checkbox isRequired isInvalid>
  I agree to the privacy policy
</Checkbox>`,
      },
    ],
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'The label content for the checkbox',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant for the checkbox',
      },
      {
        name: 'variant',
        type: "'default' | 'success' | 'warning' | 'error'",
        defaultValue: "'default'",
        description: 'Visual variant for the checkbox',
      },
      {
        name: 'isSelected',
        type: 'boolean',
        defaultValue: '-',
        description: 'Whether the checkbox is selected (controlled)',
      },
      {
        name: 'defaultSelected',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Default selected state (uncontrolled)',
      },
      {
        name: 'isIndeterminate',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox is in an indeterminate state',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox is disabled',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox is read-only',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox is invalid',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox is required',
      },
      {
        name: 'onChange',
        type: '(isSelected: boolean) => void',
        defaultValue: '-',
        description: 'Callback when the selection state changes',
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: '-',
        description: 'Name attribute for HTML forms',
      },
      {
        name: 'value',
        type: 'string',
        defaultValue: '-',
        description: 'Value attribute for HTML forms',
      },
    ],
    notes: [
      'The component supports three states: checked, unchecked, and indeterminate.',
      'Indeterminate state is useful for "select all" checkboxes when some items are selected.',
      'All accessibility features are built-in, including keyboard navigation and screen reader support.',
      'Form integration works with standard HTML form submission.',
    ],
  },
  CheckboxGroup: {
    name: 'CheckboxGroup',
    description: 'An accessible checkbox group component built on React Aria. Allows users to select multiple items from a list with validation, orientation options, and form integration.',
    usageExamples: [
      {
        title: 'Basic Checkbox Group',
        description: 'A simple checkbox group with multiple options.',
        code: `<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>`,
      },
      {
        title: 'Controlled Checkbox Group',
        description: 'A checkbox group with controlled state.',
        code: `const [selectedItems, setSelectedItems] = useState(['item1']);

<CheckboxGroup
  label="Select items"
  value={selectedItems}
  onChange={setSelectedItems}
>
  <Checkbox value="item1">Item 1</Checkbox>
  <Checkbox value="item2">Item 2</Checkbox>
  <Checkbox value="item3">Item 3</Checkbox>
</CheckboxGroup>`,
      },
      {
        title: 'Required Group with Validation',
        description: 'A required checkbox group with error message.',
        code: `<CheckboxGroup
  label="Terms and conditions"
  isRequired
  errorMessage="You must accept at least one to continue"
>
  <Checkbox value="terms">I accept the terms of service</Checkbox>
  <Checkbox value="privacy">I accept the privacy policy</Checkbox>
</CheckboxGroup>`,
      },
      {
        title: 'Horizontal Layout',
        description: 'A checkbox group with horizontal orientation.',
        code: `<CheckboxGroup
  label="Quick options"
  orientation="horizontal"
>
  <Checkbox value="yes">Yes</Checkbox>
  <Checkbox value="no">No</Checkbox>
  <Checkbox value="maybe">Maybe</Checkbox>
</CheckboxGroup>`,
      },
    ],
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'The checkboxes within the group',
      },
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label for the checkbox group',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Description text for the checkbox group',
      },
      {
        name: 'errorMessage',
        type: 'string | ((validation: ValidationResult) => string)',
        defaultValue: '-',
        description: 'Error message for validation',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant for the checkbox group',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        defaultValue: "'vertical'",
        description: 'Layout orientation for the checkboxes',
      },
      {
        name: 'value',
        type: 'string[]',
        defaultValue: '-',
        description: 'Selected values (controlled)',
      },
      {
        name: 'defaultValue',
        type: 'string[]',
        defaultValue: '-',
        description: 'Default selected values (uncontrolled)',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox group is disabled',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox group is read-only',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox group is required (at least one selection)',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the checkbox group is invalid',
      },
      {
        name: 'onChange',
        type: '(value: string[]) => void',
        defaultValue: '-',
        description: 'Callback when the selection changes',
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: '-',
        description: 'Name attribute for HTML forms',
      },
    ],
    notes: [
      'The group can validate that at least one checkbox is selected when isRequired is true.',
      'Individual checkboxes within the group can also be disabled or required.',
      'Supports both vertical and horizontal layouts with responsive behavior.',
      'Form integration allows multiple values to be submitted with the same name.',
      'All accessibility features are built-in, including keyboard navigation and screen reader support.',
    ],
  },
  RadioGroup: {
    name: 'RadioGroup',
    description: 'An accessible radio group component built on React Aria. Allows users to select a single item from a list of mutually exclusive options with validation, orientation options, and form integration.',
    usageExamples: [
      {
        title: 'Basic Radio Group',
        description: 'A simple radio group with multiple options.',
        code: `<RadioGroup label="Favorite sport">
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</RadioGroup>`,
      },
      {
        title: 'Controlled Radio Group',
        description: 'A radio group with controlled state.',
        code: `const [selectedPayment, setSelectedPayment] = useState('credit');

<RadioGroup
  label="Payment method"
  value={selectedPayment}
  onChange={setSelectedPayment}
>
  <Radio value="credit">Credit Card</Radio>
  <Radio value="debit">Debit Card</Radio>
  <Radio value="paypal">PayPal</Radio>
</RadioGroup>`,
      },
      {
        title: 'Required Group with Validation',
        description: 'A required radio group with error message.',
        code: `<RadioGroup
  label="Choose an option"
  isRequired
  errorMessage="Please select an option"
>
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
</RadioGroup>`,
      },
      {
        title: 'Horizontal Layout',
        description: 'A radio group with horizontal orientation.',
        code: `<RadioGroup
  label="Quick answer"
  orientation="horizontal"
>
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
  <Radio value="maybe">Maybe</Radio>
</RadioGroup>`,
      },
    ],
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'The radio buttons within the group',
      },
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label for the radio group',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Description text for the radio group',
      },
      {
        name: 'errorMessage',
        type: 'string | ((validation: ValidationResult) => string)',
        defaultValue: '-',
        description: 'Error message for validation',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant for the radio group',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        defaultValue: "'vertical'",
        description: 'Layout orientation for the radio buttons',
      },
      {
        name: 'value',
        type: 'string',
        defaultValue: '-',
        description: 'Selected value (controlled)',
      },
      {
        name: 'defaultValue',
        type: 'string',
        defaultValue: '-',
        description: 'Default selected value (uncontrolled)',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the radio group is disabled',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the radio group is read-only',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the radio group is required',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the radio group is invalid',
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        defaultValue: '-',
        description: 'Callback when the selection changes',
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: '-',
        description: 'Name attribute for HTML forms',
      },
    ],
    notes: [
      'The group enforces single selection - only one radio button can be selected at a time.',
      'Individual radio buttons within the group can also be disabled.',
      'Supports both vertical and horizontal layouts with responsive behavior.',
      'Form integration allows the selected value to be submitted with the group name.',
      'All accessibility features are built-in, including keyboard navigation and screen reader support.',
      'Arrow keys can be used to navigate between radio options within the group.',
    ],
  },

  Switch: {
    name: 'Switch',
    description: 'An accessible switch component built on React Aria. Allows users to turn a setting on or off with full accessibility support, form integration, and customizable styling.',
    usageExamples: [
      {
        title: 'Basic Switch',
        description: 'A simple switch component.',
        code: `<Switch>
  Wi-Fi
</Switch>`,
      },
      {
        title: 'Controlled Switch',
        description: 'A switch with controlled state.',
        code: `const [isEnabled, setIsEnabled] = useState(false);

<Switch
  isSelected={isEnabled}
  onChange={setIsEnabled}
>
  Notifications
</Switch>`,
      },
      {
        title: 'Switch with Variants',
        description: 'Switches with different color variants.',
        code: `<Switch variant="success" isSelected>Success</Switch>
<Switch variant="warning" isSelected>Warning</Switch>
<Switch variant="error" isSelected>Error</Switch>`,
      },
      {
        title: 'Different Sizes',
        description: 'Switches in various sizes.',
        code: `<Switch size="small">Small switch</Switch>
<Switch size="medium">Medium switch</Switch>
<Switch size="large">Large switch</Switch>`,
      },
      {
        title: 'Form Integration',
        description: 'Switch with form name and value.',
        code: `<Switch name="notifications" value="enabled">
  Email notifications
</Switch>`,
      },
    ],
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'The content to display as the switch label',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant for the switch',
      },
      {
        name: 'variant',
        type: "'default' | 'success' | 'warning' | 'error'",
        defaultValue: "'default'",
        description: 'Color variant for the switch',
      },
      {
        name: 'isSelected',
        type: 'boolean',
        defaultValue: '-',
        description: 'Whether the switch is selected (controlled)',
      },
      {
        name: 'defaultSelected',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Default selected state (uncontrolled)',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the switch is disabled',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the switch is read-only',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the switch is required',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the switch is invalid',
      },
      {
        name: 'onChange',
        type: '(isSelected: boolean) => void',
        defaultValue: '-',
        description: 'Callback when the switch selection changes',
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: '-',
        description: 'Name attribute for HTML forms',
      },
      {
        name: 'value',
        type: 'string',
        defaultValue: '-',
        description: 'Value attribute for HTML forms',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS class name for the switch container',
      },
      {
        name: 'indicatorClassName',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS class name for the switch indicator',
      },
      {
        name: 'labelClassName',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS class name for the switch label',
      },
      {
        name: 'aria-label',
        type: 'string',
        defaultValue: '-',
        description: 'Accessibility label when no visible label is provided',
      },
    ],
    notes: [
      'The switch provides a toggle between on/off states for settings and preferences.',
      'Unlike checkboxes, switches are meant for immediate actions rather than form submission.',
      'Supports keyboard navigation with Space key to toggle.',
      'Built-in accessibility features include proper ARIA attributes and focus management.',
      'Form integration allows the switch value to be submitted when selected.',
      'Visual feedback is provided for all interaction states (hover, focus, pressed).',
      'Supports both controlled and uncontrolled usage patterns.',
    ],
  },

  TextField: {
    name: 'TextField',
    description: 'A versatile text field component built on React Aria. Supports single-line and multi-line input, validation, different input types, accessibility features, and comprehensive form integration.',
    usageExamples: [
      {
        title: 'Basic Text Field',
        description: 'A simple text field with label and placeholder.',
        code: `<TextField
  label="Full Name"
  placeholder="Enter your full name"
/>`,
      },
      {
        title: 'Controlled Text Field',
        description: 'A text field with controlled state.',
        code: `const [value, setValue] = useState('');

<TextField
  label="Username"
  value={value}
  onChange={setValue}
  placeholder="Choose a username"
/>`,
      },
      {
        title: 'Text Field with Validation',
        description: 'Text field with validation and error messaging.',
        code: `<TextField
  label="Email"
  type="email"
  isInvalid={!isValidEmail}
  errorMessage="Please enter a valid email address"
  placeholder="you@example.com"
/>`,
      },
      {
        title: 'Multi-line Text Area',
        description: 'Text field configured for multi-line input.',
        code: `<TextField
  label="Message"
  placeholder="Tell us what you think..."
  isMultiline
  rows={4}
/>`,
      },
      {
        title: 'Different Sizes',
        description: 'Text fields in various sizes.',
        code: `<TextField size="small" label="Small" placeholder="Small input" />
<TextField size="medium" label="Medium" placeholder="Medium input" />
<TextField size="large" label="Large" placeholder="Large input" />`,
      },
      {
        title: 'Form Integration',
        description: 'Text field with form attributes and validation.',
        code: `<TextField
  name="firstName"
  label="First Name"
  placeholder="John"
  autoComplete="given-name"
  isRequired
/>`,
      },
      {
        title: 'Different Input Types',
        description: 'Text fields with various HTML input types.',
        code: `<TextField label="Email" type="email" />
<TextField label="Password" type="password" />
<TextField label="Phone" type="tel" />
<TextField label="Website" type="url" />`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label for the text field',
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
        description: 'Description text to help users understand the field',
      },
      {
        name: 'errorMessage',
        type: 'string | ((validation: ValidationResult) => string)',
        defaultValue: '-',
        description: 'Error message to display when the field is invalid',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant for the text field',
      },
      {
        name: 'variant',
        type: "'default' | 'success' | 'warning' | 'error'",
        defaultValue: "'default'",
        description: 'Visual variant for the text field',
      },
      {
        name: 'isMultiline',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the text field supports multiple lines',
      },
      {
        name: 'rows',
        type: 'number',
        defaultValue: '3',
        description: 'Number of rows for multiline text area',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the text field is disabled',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the text field is read-only',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the text field is required',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the text field is invalid',
      },
      {
        name: 'value',
        type: 'string',
        defaultValue: '-',
        description: 'The current value of the text field (controlled)',
      },
      {
        name: 'defaultValue',
        type: 'string',
        defaultValue: '-',
        description: 'Default value (uncontrolled)',
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        defaultValue: '-',
        description: 'Callback when the value changes',
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: '-',
        description: 'Name attribute for HTML forms',
      },
      {
        name: 'type',
        type: 'string',
        defaultValue: "'text'",
        description: 'Input type (text, email, password, etc.)',
      },
      {
        name: 'inputMode',
        type: "'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",
        defaultValue: '-',
        description: 'Input mode for mobile keyboards',
      },
      {
        name: 'pattern',
        type: 'string',
        defaultValue: '-',
        description: 'Pattern for input validation',
      },
      {
        name: 'minLength',
        type: 'number',
        defaultValue: '-',
        description: 'Minimum length for the input',
      },
      {
        name: 'maxLength',
        type: 'number',
        defaultValue: '-',
        description: 'Maximum length for the input',
      },
      {
        name: 'autoComplete',
        type: 'string',
        defaultValue: '-',
        description: 'Auto-complete behavior',
      },
      {
        name: 'autoFocus',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Auto-focus the input on mount',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS class name for the text field container',
      },
      {
        name: 'aria-label',
        type: 'string',
        defaultValue: '-',
        description: 'Accessibility label when no visible label is provided',
      },
    ],
    notes: [
      'The TextField component automatically manages the relationship between label and input elements.',
      'Supports both single-line input and multi-line textarea based on the isMultiline prop.',
      'Built-in validation with HTML constraint validation and custom validation functions.',
      'Provides comprehensive accessibility with proper ARIA attributes and screen reader support.',
      'Supports all standard HTML input types for enhanced mobile keyboard experiences.',
      'Form integration includes name, value, and autoComplete attributes for seamless form handling.',
      'Visual feedback for all interaction states including hover, focus, and validation states.',
      'Supports both controlled and uncontrolled usage patterns.',
      'Description and error messages are automatically associated with the input for accessibility.',
      'Pattern validation allows for custom validation rules using regular expressions.',
    ],
  },

  Dialog: {
    name: 'Dialog',
    description: 'Accessible dialog components built on React Aria. Includes modal dialogs, alert dialogs, and popovers with complete keyboard navigation and focus management.',
    usageExamples: [
      {
        title: 'Basic Dialog',
        description: 'A simple modal dialog with content.',
        code: `<DialogTrigger trigger={<Button>Open Dialog</Button>}>
  <Dialog title="Welcome">
    <p>Dialog content here</p>
  </Dialog>
</DialogTrigger>`,
      },
      {
        title: 'Alert Dialog',
        description: 'An alert dialog for confirmations with actions.',
        code: `<DialogTrigger trigger={<Button variant="danger">Delete</Button>}>
  <AlertDialog title="Confirm">
    {({ close }) => (
      <>
        <p>Are you sure?</p>
        <Button onPress={close}>Confirm</Button>
      </>
    )}
  </AlertDialog>
</DialogTrigger>`,
      },
      {
        title: 'Popover Dialog',
        description: 'A popover dialog for contextual content.',
        code: `<PopoverDialog
  trigger={<Button>Help</Button>}
  dialogProps={{ title: "Help" }}
>
  <p>Help content</p>
</PopoverDialog>`,
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        defaultValue: '-',
        description: 'The title of the dialog',
        required: true,
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'The content of the dialog',
        required: true,
      },
      {
        name: 'size',
        type: '"small" | "medium" | "large" | "fullscreen"',
        defaultValue: 'medium',
        description: 'The size of the dialog',
      },
      {
        name: 'isOpen',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the dialog is open (controlled)',
      },
      {
        name: 'onOpenChange',
        type: '(isOpen: boolean) => void',
        defaultValue: '-',
        description: 'Called when the dialog open state changes',
      },
    ],
    notes: [
      'Built with React Aria for full accessibility support.',
      'Supports keyboard navigation (Tab, Escape, Enter).',
      'Provides focus management and trapping.',
      'Screen reader compatible with proper ARIA attributes.',
      'DialogTrigger handles the trigger and dialog pairing automatically.',
    ],
  },

  Overlay: {
    name: 'Overlay',
    description: 'Flexible overlay component built on React Aria Popover. Supports positioning, arrows, controlled state, and can wrap content with dialog for enhanced accessibility.',
    usageExamples: [
      {
        title: 'Basic Overlay',
        description: 'A simple overlay with content and arrow.',
        code: `<DialogTrigger>
  <Button>Open Overlay</Button>
  <Overlay>
    <p>Overlay content here</p>
  </Overlay>
</DialogTrigger>`,
      },
      {
        title: 'Overlay with Dialog',
        description: 'An overlay that includes a dialog wrapper for better accessibility.',
        code: `<DialogTrigger>
  <Button>Settings</Button>
  <Overlay includeDialog dialogTitle="Settings">
    <Switch>Wi-Fi</Switch>
    <Switch>Bluetooth</Switch>
  </Overlay>
</DialogTrigger>`,
      },
      {
        title: 'Positioned Overlay',
        description: 'Control overlay positioning relative to trigger.',
        code: `<DialogTrigger>
  <Button>Top Overlay</Button>
  <Overlay placement="top" offset={10}>
    <p>Positioned above with offset</p>
  </Overlay>
</DialogTrigger>`,
      },
      {
        title: 'Controlled Overlay',
        description: 'Programmatically control overlay open state.',
        code: `function ControlledExample() {
  const [isOpen, setOpen] = useState(false);
  const triggerRef = useRef(null);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Overlay
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <p>Controlled content</p>
      </Overlay>
    </>
  );
}`,
      },
    ],
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'The content to display inside the overlay',
        required: true,
      },
      {
        name: 'showArrow',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show an arrow pointing to the trigger',
      },
      {
        name: 'size',
        type: '"small" | "medium" | "large"',
        defaultValue: 'medium',
        description: 'Size variant for the overlay',
      },
      {
        name: 'placement',
        type: '"top" | "bottom" | "start" | "end" | "left" | "right"',
        defaultValue: 'bottom',
        description: 'Position of overlay relative to trigger',
      },
      {
        name: 'offset',
        type: 'number',
        defaultValue: '0',
        description: 'Additional offset along the main axis',
      },
      {
        name: 'crossOffset',
        type: 'number',
        defaultValue: '0',
        description: 'Additional offset along the cross axis',
      },
      {
        name: 'includeDialog',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether to include a dialog wrapper for accessibility',
      },
      {
        name: 'dialogTitle',
        type: 'string',
        defaultValue: '-',
        description: 'Dialog title when includeDialog is true',
      },
      {
        name: 'isOpen',
        type: 'boolean',
        defaultValue: '-',
        description: 'Whether the overlay is open (controlled)',
      },
      {
        name: 'onOpenChange',
        type: '(isOpen: boolean) => void',
        defaultValue: '-',
        description: 'Called when the overlay open state changes',
      },
    ],
    notes: [
      'Built on React Aria Popover for accessibility and positioning.',
      'Automatically positions and flips to stay in viewport.',
      'Supports keyboard navigation (Tab, Escape).',
      'Can be used with DialogTrigger or controlled manually.',
      'Use includeDialog for better accessibility when overlay contains interactive elements.',
      'Arrow automatically adjusts position based on placement.',
    ],
  },

  Tooltip: {
    name: 'Tooltip',
    description: 'An accessible tooltip component that displays helpful information on hover or focus. Built with React Aria for proper accessibility and positioning.',
    usageExamples: [
      {
        title: 'Basic Tooltip',
        code: `<TooltipWrapper>
  <Button>Hover me</Button>
  <Tooltip>This is a helpful tooltip</Tooltip>
</TooltipWrapper>`,
      },
      {
        title: 'Custom Placement',
        code: `<TooltipWrapper>
  <Button>Save</Button>
  <Tooltip placement="top">Save your document</Tooltip>
</TooltipWrapper>`,
      },
      {
        title: 'Different Sizes',
        code: `<TooltipWrapper>
  <Button>Help</Button>
  <Tooltip size="large">
    This is a larger tooltip with more detailed information
    that can span multiple lines.
  </Tooltip>
</TooltipWrapper>`,
      },
      {
        title: 'Without Arrow',
        code: `<TooltipWrapper>
  <Button>Settings</Button>
  <Tooltip showArrow={false}>Settings panel</Tooltip>
</TooltipWrapper>`,
      },
      {
        title: 'Custom Delay',
        code: `<TooltipWrapper delay={500}>
  <Button>Quick tooltip</Button>
  <Tooltip>Appears after 500ms</Tooltip>
</TooltipWrapper>`,
      },
      {
        title: 'Focus Only',
        code: `<TooltipWrapper trigger="focus">
  <Button>Focus only</Button>
  <Tooltip>Only shows on keyboard focus</Tooltip>
</TooltipWrapper>`,
      },
      {
        title: 'Compound Component',
        code: `<CompoundTooltip
  trigger={<Button>Compound</Button>}
  content="This uses the compound component"
  placement="bottom"
/>`,
      },
    ],
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'The content to display inside the tooltip',
        required: true,
      },
      {
        name: 'showArrow',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show an arrow pointing to the trigger',
      },
      {
        name: 'arrowElement',
        type: 'React.ReactElement',
        defaultValue: '-',
        description: 'Custom arrow element. If provided, showArrow is ignored',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant for the tooltip',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: "''",
        description: 'Additional CSS class name',
      },
      {
        name: 'placement',
        type: "'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'",
        defaultValue: "'top'",
        description: 'Where to place the tooltip relative to its trigger',
      },
      {
        name: 'offset',
        type: 'number',
        defaultValue: '-',
        description: 'Additional offset along the main axis',
      },
      {
        name: 'crossOffset',
        type: 'number',
        defaultValue: '-',
        description: 'Additional offset along the cross axis',
      },
      {
        name: 'delay',
        type: 'number',
        defaultValue: '700',
        description: 'Delay in milliseconds before showing the tooltip on hover (TooltipWrapper)',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the tooltip trigger is disabled (TooltipWrapper)',
      },
      {
        name: 'trigger',
        type: "'focus'",
        defaultValue: '-',
        description: 'When the tooltip should be triggered. Default includes both focus and hover (TooltipWrapper)',
      },
      {
        name: 'isOpen',
        type: 'boolean',
        defaultValue: '-',
        description: 'Whether the tooltip is open (controlled) (TooltipWrapper)',
      },
      {
        name: 'onOpenChange',
        type: '(open: boolean) => void',
        defaultValue: '-',
        description: 'Called when the tooltip open state changes (TooltipWrapper)',
      },
    ],
    notes: [
      'Built on React Aria Tooltip for accessibility and positioning.',
      'Automatically associated with trigger via aria-describedby.',
      'Includes smart hover behavior with global delay system.',
      'Automatically positions and flips to stay in viewport.',
      'Does not show on touch devices - ensure UI is usable without tooltips.',
      'Use TooltipWrapper for the trigger behavior, Tooltip for the content.',
      'Consider using aria-label or aria-describedby on triggers for screen readers.',
      'Keep tooltip content concise and helpful.',
    ],
  },
};
