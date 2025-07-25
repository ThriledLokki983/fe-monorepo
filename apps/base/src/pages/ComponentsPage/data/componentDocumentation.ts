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

  ToggleButton: {
    name: 'ToggleButton',
    description: 'An accessible toggle button component that allows users to switch between pressed and unpressed states, built with React Aria for enhanced accessibility.',
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `<ToggleButton variant="primary">
  Toggle Me
</ToggleButton>`,
      },
      {
        title: 'Controlled State',
        description: 'Control the selected state with React state management',
        code: `const [isSelected, setIsSelected] = useState(false);

<ToggleButton
  isSelected={isSelected}
  onChange={setIsSelected}
  variant="primary"
>
  {isSelected ? 'ON' : 'OFF'}
</ToggleButton>`,
      },
      {
        title: 'Different Variants',
        code: `<ToggleButton variant="primary">Primary</ToggleButton>
<ToggleButton variant="secondary">Secondary</ToggleButton>
<ToggleButton variant="tertiary">Tertiary</ToggleButton>
<ToggleButton variant="danger">Danger</ToggleButton>
<ToggleButton variant="transparent">Transparent</ToggleButton>`,
      },
      {
        title: 'Sizes',
        code: `<ToggleButton size="small">Small</ToggleButton>
<ToggleButton size="medium">Medium</ToggleButton>
<ToggleButton size="large">Large</ToggleButton>`,
      },
      {
        title: 'States and Events',
        code: `<ToggleButton
  onChange={(isSelected) => console.log('Changed:', isSelected)}
  onPress={() => console.log('Pressed')}
  onFocus={() => console.log('Focused')}
  variant="primary"
>
  Interactive Toggle
</ToggleButton>

<ToggleButton isDisabled={true}>
  Disabled Toggle
</ToggleButton>`,
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'tertiary' | 'danger' | 'transparent'",
        defaultValue: "'primary'",
        description: 'Visual style variant of the toggle button',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size of the toggle button',
      },
      {
        name: 'isSelected',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the toggle button is currently selected/pressed',
      },
      {
        name: 'defaultSelected',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Default selected state for uncontrolled usage',
      },
      {
        name: 'onChange',
        type: '(isSelected: boolean) => void',
        defaultValue: '-',
        description: 'Callback fired when the selection state changes',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the toggle button is disabled (React Aria)',
      },
      {
        name: 'onPress',
        type: '(e: PressEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the toggle button is pressed (React Aria)',
      },
      {
        name: 'onFocus',
        type: '(e: FocusEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the toggle button receives focus',
      },
      {
        name: 'onBlur',
        type: '(e: FocusEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the toggle button loses focus',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'Content to display inside the toggle button',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS classes to apply',
      },
      {
        name: 'aria-label',
        type: 'string',
        defaultValue: '-',
        description: 'Accessibility label for screen readers',
      },
    ],
    notes: [
      'Built on React Aria Components ToggleButton for comprehensive accessibility support.',
      'Supports both controlled and uncontrolled usage patterns.',
      'Automatically manages ARIA attributes and keyboard interactions.',
      'Provides visual feedback for pressed/selected state through styling.',
      'Focus management and keyboard navigation (Enter/Space activation) are handled automatically.',
      'The onChange callback provides the new selection state as a boolean.',
      'Use isSelected prop for controlled usage, defaultSelected for uncontrolled.',
      'Disabled state is properly announced to screen readers and prevents interaction.',
    ],
  },

  ToggleButtonGroup: {
    name: 'ToggleButtonGroup',
    description: 'A group of toggle buttons that work together as a cohesive unit. Built on React Aria Components with support for single and multiple selection modes, various orientations, and comprehensive accessibility features.',
    usageExamples: [
      {
        title: 'Basic Usage (Single Selection)',
        code: `const [selectedKeys, setSelectedKeys] = useState(['center']);

<ToggleButtonGroup
  selectedKeys={selectedKeys}
  onSelectionChange={(keys) => setSelectedKeys(Array.from(keys))}
>
  <ToggleButton id="left">Left</ToggleButton>
  <ToggleButton id="center">Center</ToggleButton>
  <ToggleButton id="right">Right</ToggleButton>
</ToggleButtonGroup>`,
      },
      {
        title: 'Multiple Selection Mode',
        description: 'Allow multiple buttons to be selected simultaneously',
        code: `const [selectedKeys, setSelectedKeys] = useState(['bold', 'italic']);

<ToggleButtonGroup
  selectionMode="multiple"
  selectedKeys={selectedKeys}
  onSelectionChange={(keys) => setSelectedKeys(Array.from(keys))}
>
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>`,
      },
      {
        title: 'Different Variants',
        code: `<ToggleButtonGroup variant="default" defaultSelectedKeys={['option1']}>
  <ToggleButton id="option1">Default</ToggleButton>
  <ToggleButton id="option2">Variant</ToggleButton>
</ToggleButtonGroup>

<ToggleButtonGroup variant="bordered" defaultSelectedKeys={['option1']}>
  <ToggleButton id="option1">Bordered</ToggleButton>
  <ToggleButton id="option2">Variant</ToggleButton>
</ToggleButtonGroup>

<ToggleButtonGroup variant="seamless" defaultSelectedKeys={['option1']}>
  <ToggleButton id="option1">Seamless</ToggleButton>
  <ToggleButton id="option2">Variant</ToggleButton>
</ToggleButtonGroup>`,
      },
      {
        title: 'Vertical Orientation',
        code: `<ToggleButtonGroup
  orientation="vertical"
  selectionMode="multiple"
  defaultSelectedKeys={['option2']}
>
  <ToggleButton id="option1">Top</ToggleButton>
  <ToggleButton id="option2">Middle</ToggleButton>
  <ToggleButton id="option3">Bottom</ToggleButton>
</ToggleButtonGroup>`,
      },
      {
        title: 'Sizes',
        code: `<ToggleButtonGroup size="small" defaultSelectedKeys={['option1']}>
  <ToggleButton id="option1">Small</ToggleButton>
  <ToggleButton id="option2">Group</ToggleButton>
</ToggleButtonGroup>

<ToggleButtonGroup size="large" defaultSelectedKeys={['option1']}>
  <ToggleButton id="option1">Large</ToggleButton>
  <ToggleButton id="option2">Group</ToggleButton>
</ToggleButtonGroup>`,
      },
      {
        title: 'Event Handling',
        code: `<ToggleButtonGroup
  selectionMode="multiple"
  onSelectionChange={(keys) => console.log('Selection:', Array.from(keys))}
  onFocus={() => console.log('Group focused')}
  onBlur={() => console.log('Group blurred')}
>
  <ToggleButton id="option1">Option 1</ToggleButton>
  <ToggleButton id="option2">Option 2</ToggleButton>
  <ToggleButton id="option3">Option 3</ToggleButton>
</ToggleButtonGroup>`,
      },
    ],
    props: [
      {
        name: 'selectionMode',
        type: "'single' | 'multiple'",
        defaultValue: "'single'",
        description: 'Whether to allow single or multiple selection',
      },
      {
        name: 'variant',
        type: "'default' | 'bordered' | 'seamless'",
        defaultValue: "'default'",
        description: 'Visual style variant of the toggle button group',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size of the toggle buttons in the group',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        defaultValue: "'horizontal'",
        description: 'Layout orientation of the toggle button group',
      },
      {
        name: 'selectedKeys',
        type: 'string[]',
        defaultValue: '[]',
        description: 'Currently selected toggle button keys (controlled)',
      },
      {
        name: 'defaultSelectedKeys',
        type: 'string[]',
        defaultValue: '[]',
        description: 'Default selected keys for uncontrolled usage',
      },
      {
        name: 'onSelectionChange',
        type: '(keys: Set<string>) => void',
        defaultValue: '-',
        description: 'Callback fired when the selection changes',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the entire toggle button group is disabled',
      },
      {
        name: 'onFocus',
        type: '(e: FocusEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the group receives focus',
      },
      {
        name: 'onBlur',
        type: '(e: FocusEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the group loses focus',
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'ToggleButton components to display in the group',
        required: true,
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS classes to apply to the group',
      },
      {
        name: 'aria-label',
        type: 'string',
        defaultValue: '-',
        description: 'Accessibility label for the toggle button group',
      },
    ],
    notes: [
      'Built on React Aria Components ToggleButtonGroup for comprehensive accessibility support.',
      'Supports both single and multiple selection modes.',
      'Automatically manages ARIA attributes, keyboard navigation, and focus management.',
      'Arrow keys navigate between buttons, Space/Enter toggles selection.',
      'In single selection mode, only one button can be selected at a time.',
      'In multiple selection mode, multiple buttons can be selected simultaneously.',
      'Each ToggleButton child must have a unique id prop for proper selection tracking.',
      'The onSelectionChange callback provides a Set of selected keys.',
      'Vertical orientation stacks buttons vertically with appropriate keyboard navigation.',
      'All variants maintain consistent styling and spacing between buttons.',
      'Disabled state applies to the entire group and all child buttons.',
    ],
  },

  FileTrigger: {
    name: 'FileTrigger',
    description: 'A file selection component that provides accessible file input functionality. Built on React Aria Components with support for file type restrictions, multiple file selection, directory selection, and comprehensive event handling.',
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `<FileTrigger onSelect={(files) => console.log(files)}>
  <Button variant="primary">Choose File</Button>
</FileTrigger>`,
      },
      {
        title: 'File Type Restrictions',
        description: 'Restrict file selection to specific types',
        code: `<FileTrigger
  acceptedFileTypes={['image/*']}
  onSelect={(files) => console.log('Images:', files)}
>
  <Button variant="secondary">Select Images</Button>
</FileTrigger>

<FileTrigger
  acceptedFileTypes={['.pdf', '.doc', '.docx', '.txt']}
  onSelect={(files) => console.log('Documents:', files)}
>
  <Button variant="tertiary">Choose Document</Button>
</FileTrigger>`,
      },
      {
        title: 'Multiple File Selection',
        code: `const [selectedFiles, setSelectedFiles] = useState([]);

<FileTrigger
  allowsMultiple={true}
  onSelect={(files) => {
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  }}
>
  <Button variant="primary">Select Multiple Files</Button>
</FileTrigger>`,
      },
      {
        title: 'Directory Selection',
        code: `<FileTrigger
  acceptDirectory
  onSelect={(files) => {
    console.log('Directory with', files?.length, 'files');
  }}
>
  <Button variant="secondary">Select Folder</Button>
</FileTrigger>`,
      },
      {
        title: 'Different Button Variants and Sizes',
        code: `<FileTrigger onSelect={handleFileSelect}>
  <Button variant="primary" size="small">Small Upload</Button>
</FileTrigger>

<FileTrigger onSelect={handleFileSelect}>
  <Button variant="secondary" size="medium">Medium Upload</Button>
</FileTrigger>

<FileTrigger onSelect={handleFileSelect}>
  <Button variant="danger" size="large">Replace File</Button>
</FileTrigger>`,
      },
      {
        title: 'File Validation and Processing',
        code: `const handleFileSelect = (files: FileList | null) => {
  if (!files) return;

  const fileArray = Array.from(files);
  const validFiles = fileArray.filter(file => {
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert(\`\${file.name} is too large (max 5MB)\`);
      return false;
    }
    return true;
  });

  console.log('Valid files:', validFiles);
};

<FileTrigger
  acceptedFileTypes={['image/*']}
  allowsMultiple={true}
  onSelect={handleFileSelect}
>
  <Button variant="primary">Select Images (Max 5MB)</Button>
</FileTrigger>`,
      },
    ],
    props: [
      {
        name: 'acceptedFileTypes',
        type: 'string[]',
        defaultValue: '-',
        description: 'Array of accepted file types (MIME types or file extensions)',
      },
      {
        name: 'allowsMultiple',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether to allow multiple file selection',
      },
      {
        name: 'acceptDirectory',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether to allow directory selection instead of files',
      },
      {
        name: 'onSelect',
        type: '(files: FileList | null) => void',
        defaultValue: '-',
        description: 'Callback fired when files are selected',
        required: true,
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'Trigger element (typically a Button component)',
        required: true,
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS classes to apply to the trigger element',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the file trigger is disabled (React Aria)',
      },
    ],
    notes: [
      'Built on React Aria Components FileTrigger for comprehensive accessibility support.',
      'FileTrigger is a renderless component that wraps a trigger element (usually a Button).',
      'The onSelect callback receives a FileList object when files are selected.',
      'acceptedFileTypes supports both MIME types (e.g., "image/*") and file extensions (e.g., ".pdf").',
      'When allowsMultiple is true, users can select multiple files using Ctrl/Cmd+click or Shift+click.',
      'acceptDirectory allows users to select entire folders, useful for bulk file operations.',
      'The component automatically handles keyboard navigation and screen reader announcements.',
      'File validation should be performed in the onSelect callback for security and UX.',
      'Works seamlessly with any clickable child element, not just buttons.',
      'Supports all standard HTML file input attributes through React Aria.',
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

  Form: {
    name: 'Form',
    description: 'An accessible form container component built on React Aria. Provides form validation, submission handling, error management, and supports various layouts and styling variants.',
    usageExamples: [
      {
        title: 'Basic Usage',
        code: `<Form onSubmit={handleSubmit}>
  <TextField
    name="name"
    label="Full Name"
    placeholder="Enter your full name"
    isRequired
  />
  <TextField
    name="email"
    label="Email"
    type="email"
    placeholder="your@email.com"
    isRequired
  />
  <div>
    <Button type="submit">Submit</Button>
    <Button type="reset" variant="secondary">Reset</Button>
  </div>
</Form>`,
      },
      {
        title: 'Server-side Validation',
        code: `<Form
  validationErrors={{
    username: 'This username is already taken',
    email: 'Please enter a valid email address'
  }}
  onSubmit={handleSubmit}
>
  <TextField name="username" label="Username" isRequired />
  <TextField name="email" label="Email" type="email" isRequired />
  <Button type="submit">Register</Button>
</Form>`,
      },
      {
        title: 'Card Variant with Label',
        code: `<Form
  variant="card"
  label="Contact Form"
  description="Please fill out all required fields"
  onSubmit={handleSubmit}
>
  <TextField name="subject" label="Subject" isRequired />
  <TextField name="message" label="Message" isMultiline rows={4} />
  <Button type="submit">Send Message</Button>
</Form>`,
      },
      {
        title: 'Inline Form',
        code: `<Form variant="inline" onSubmit={handleSearch}>
  <TextField
    name="query"
    label="Search"
    placeholder="Enter search terms..."
  />
  <Button type="submit">Search</Button>
</Form>`,
      },
    ],
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '-',
        description: 'The form content including fields and buttons',
      },
      {
        name: 'variant',
        type: "'default' | 'card' | 'inline'",
        defaultValue: "'default'",
        description: 'Visual variant of the form layout',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size variant affecting spacing and typography',
      },
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'Form label for accessibility (creates a form landmark)',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Descriptive text explaining the form purpose',
      },
      {
        name: 'validationBehavior',
        type: "'native' | 'aria'",
        defaultValue: "'native'",
        description: 'How validation errors are displayed and handled',
      },
      {
        name: 'validationErrors',
        type: 'Record<string, string | string[]>',
        defaultValue: '-',
        description: 'Server-side validation errors mapped by field name',
      },
      {
        name: 'showInlineErrors',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show a summary of validation errors',
      },
      {
        name: 'onSubmit',
        type: '(event: React.FormEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the form is submitted',
      },
      {
        name: 'onReset',
        type: '(event: React.FormEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the form is reset',
      },
      {
        name: 'onInvalid',
        type: '(event: React.FormEvent) => void',
        defaultValue: '-',
        description: 'Handler called when form validation fails',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the entire form is disabled',
      },
      {
        name: 'isLoading',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the form is in a loading state',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: "''",
        description: 'Additional CSS class name for the form container',
      },
      {
        name: 'id',
        type: 'string',
        defaultValue: '-',
        description: 'Form ID for identification and accessibility',
      },
    ],
    notes: [
      'The form provides semantic HTML structure with proper accessibility landmarks.',
      'Server-side validation errors are automatically cleared when field values change.',
      'The card variant provides visual containment and enhanced styling.',
      'The inline variant is perfect for search forms and simple inputs.',
      'Form submission prevents default browser behavior and provides form data access.',
      'All form fields within support automatic validation and error display.',
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

  SearchField: {
    name: 'SearchField',
    description: 'An accessible search field component built on React Aria. Allows users to enter and clear search queries with keyboard shortcuts, validation, and customizable clear button.',
    usageExamples: [
      {
        title: 'Basic Search Field',
        description: 'A simple search field with label and placeholder.',
        code: `<SearchField
  label="Search Products"
  placeholder="Enter search terms..."
/>`,
      },
      {
        title: 'Controlled Search Field',
        description: 'A search field with controlled state and event handlers.',
        code: `const [query, setQuery] = useState('');

<SearchField
  label="Search Users"
  value={query}
  onChange={setQuery}
  onSubmit={(value) => handleSearch(value)}
  onClear={() => clearResults()}
/>`,
      },
      {
        title: 'Search with Live Results',
        description: 'A search field that shows results as you type.',
        code: `<SearchField
  label="Live Search"
  placeholder="Search as you type..."
  onChange={handleLiveSearch}
  description="Results update automatically"
/>`,
      },
      {
        title: 'Search with Validation',
        description: 'A search field with validation and error message.',
        code: `<SearchField
  label="Product Search"
  isRequired
  isInvalid={query.length > 0 && query.length < 3}
  errorMessage="Search query must be at least 3 characters"
/>`,
      },
      {
        title: 'Custom Clear Button',
        description: 'A search field with custom clear button content.',
        code: `<SearchField
  label="Custom Clear"
  placeholder="Search with custom clear icon"
  clearButtonContent="🗑️"
/>`,
      },
      {
        title: 'Different Sizes',
        description: 'Search fields in different sizes.',
        code: `<SearchField size="small" label="Small" placeholder="Small search" />
<SearchField size="medium" label="Medium" placeholder="Medium search" />
<SearchField size="large" label="Large" placeholder="Large search" />`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label for the search field',
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
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: 'Size variant for the search field',
      },
      {
        name: 'variant',
        type: '"default" | "success" | "warning" | "error"',
        defaultValue: '"default"',
        description: 'Visual variant for the search field',
      },
      {
        name: 'value',
        type: 'string',
        defaultValue: '-',
        description: 'The current value of the search field (controlled)',
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
        name: 'onSubmit',
        type: '(value: string) => void',
        defaultValue: '-',
        description: 'Callback when the search is submitted (e.g., Enter key pressed)',
      },
      {
        name: 'onClear',
        type: '() => void',
        defaultValue: '-',
        description: 'Callback when the search field is cleared',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the search field is disabled',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the search field is read-only',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the search field is required',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the search field is invalid',
      },
      {
        name: 'showClearButton',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show the clear button',
      },
      {
        name: 'clearButtonContent',
        type: 'React.ReactNode',
        defaultValue: '"✕"',
        description: 'Custom clear button icon or text',
      },
      {
        name: 'autoFocus',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Auto-focus the input on mount',
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: '-',
        description: 'Name attribute for HTML forms',
      },
    ],
    notes: [
      'Users can press Enter to submit the search or Escape to clear the field.',
      'The clear button appears automatically when there is text in the field.',
      'All accessibility features are built-in, including proper labeling and keyboard navigation.',
      'Supports controlled and uncontrolled usage patterns.',
      'Form integration allows the search value to be submitted with forms.',
      'The component handles focus management and provides visual feedback for all interactions.',
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

  NumberField: {
    name: 'NumberField',
    description: 'A number field allows users to enter and modify numeric values with stepper buttons for incrementing and decrementing. Supports internationalized number formatting, validation, and accessibility features. Built on top of React Aria\'s NumberField for robust accessibility and interaction support.',
    usageExamples: [
      {
        title: 'Basic Usage',
        description: 'Simple number input with min/max constraints',
        code: `<NumberField
  label="Age"
  placeholder="Enter your age"
  minValue={0}
  maxValue={120}
/>`,
      },
      {
        title: 'Currency Formatting',
        description: 'Display numbers as currency with proper formatting',
        code: `<NumberField
  label="Price"
  defaultValue={29.99}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
  step={0.01}
  minValue={0}
/>`,
      },
      {
        title: 'Percentage Field',
        description: 'Format numbers as percentages',
        code: `<NumberField
  label="Discount Rate"
  defaultValue={0.15}
  formatOptions={{
    style: 'percent'
  }}
  step={0.01}
  minValue={0}
  maxValue={1}
/>`,
      },
      {
        title: 'Controlled with Validation',
        description: 'Controlled component with custom validation and error handling',
        code: `function ControlledNumberField() {
  const [quantity, setQuantity] = useState(1);
  const isInvalid = quantity > 50;

  return (
    <NumberField
      label="Quantity"
      value={quantity}
      onChange={setQuantity}
      minValue={1}
      maxValue={100}
      step={1}
      isRequired
      isInvalid={isInvalid}
      errorMessage={isInvalid ? "Quantity cannot exceed 50" : undefined}
      description="Enter a quantity between 1 and 100"
    />
  );
}`,
      },
      {
        title: 'Without Stepper Buttons',
        description: 'Hide stepper buttons for a cleaner input appearance',
        code: `<NumberField
  label="Custom Amount"
  placeholder="Enter amount"
  showStepperButtons={false}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label text for the number field',
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: '-',
        description: 'Placeholder text shown when the field is empty',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Additional description text displayed below the field',
      },
      {
        name: 'errorMessage',
        type: 'string',
        defaultValue: '-',
        description: 'Error message to display when the field is invalid',
      },
      {
        name: 'value',
        type: 'number',
        defaultValue: '-',
        description: 'The current value (controlled component)',
      },
      {
        name: 'defaultValue',
        type: 'number',
        defaultValue: '-',
        description: 'The default value (uncontrolled component)',
      },
      {
        name: 'onChange',
        type: '(value: number) => void',
        defaultValue: '-',
        description: 'Callback fired when the value changes',
      },
      {
        name: 'minValue',
        type: 'number',
        defaultValue: '-',
        description: 'The minimum allowed value',
      },
      {
        name: 'maxValue',
        type: 'number',
        defaultValue: '-',
        description: 'The maximum allowed value',
      },
      {
        name: 'step',
        type: 'number',
        defaultValue: '1',
        description: 'The step value for increment/decrement operations',
      },
      {
        name: 'formatOptions',
        type: 'Intl.NumberFormatOptions',
        defaultValue: '-',
        description: 'Options for number formatting (currency, percentage, etc.)',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'The size variant of the number field',
      },
      {
        name: 'variant',
        type: "'default' | 'filled'",
        defaultValue: "'default'",
        description: 'The visual variant of the number field',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the field is required',
        required: false,
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the field is disabled',
        required: false,
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the field is read-only',
        required: false,
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the field is in an invalid state',
        required: false,
      },
      {
        name: 'showStepperButtons',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show increment/decrement stepper buttons',
        required: false,
      },
      {
        name: 'autoFocus',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the field should auto-focus on mount',
        required: false,
      },
      {
        name: 'incrementButtonContent',
        type: 'ReactNode',
        defaultValue: "'+'",
        description: 'Content for the increment button',
        required: false,
      },
      {
        name: 'decrementButtonContent',
        type: 'ReactNode',
        defaultValue: "'−'",
        description: 'Content for the decrement button',
        required: false,
      },
      {
        name: 'inputMode',
        type: "'numeric' | 'decimal'",
        defaultValue: '-',
        description: 'The input mode for mobile keyboards',
        required: false,
      },
    ],
    notes: [
      'Built on React Aria\'s NumberField for robust accessibility support.',
      'Supports internationalized number formatting through formatOptions.',
      'Automatically handles keyboard navigation and screen reader announcements.',
      'Stepper buttons can be hidden with showStepperButtons={false}.',
      'Use formatOptions to display currency, percentages, or custom number formats.',
      'Supports both controlled and uncontrolled usage patterns.',
      'Validates input against min/max constraints automatically.',
      'Provides proper ARIA attributes for accessibility compliance.',
    ],
  },

  Slider: {
    name: 'Slider',
    description: 'A slider allows users to select one or more values within a range using draggable thumbs. Supports single values, ranges, different orientations, and comprehensive accessibility features. Built on top of React Aria\'s Slider for robust accessibility and interaction support.',
    usageExamples: [
      {
        title: 'Basic Slider',
        description: 'Simple slider for selecting a single value',
        code: `<Slider
  label="Volume"
  defaultValue={50}
  minValue={0}
  maxValue={100}
/>`,
      },
      {
        title: 'Range Slider',
        description: 'Slider with two thumbs for selecting a range of values',
        code: `<RangeSlider
  label="Price Range"
  defaultValue={[20, 80]}
  minValue={0}
  maxValue={100}
  thumbLabels={['Min Price', 'Max Price']}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>`,
      },
      {
        title: 'Controlled Slider',
        description: 'Slider with controlled state and event handling',
        code: `function ControlledSlider() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      label="Volume Level"
      value={value}
      onChange={setValue}
      minValue={0}
      maxValue={100}
      description="Adjust the volume level"
    />
  );
}`,
      },
      {
        title: 'Currency Formatting',
        description: 'Slider with currency formatting',
        code: `<Slider
  label="Budget"
  defaultValue={1500}
  minValue={0}
  maxValue={5000}
  step={100}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>`,
      },
      {
        title: 'Vertical Orientation',
        description: 'Slider with vertical orientation',
        code: `<Slider
  label="Height"
  defaultValue={150}
  minValue={100}
  maxValue={200}
  orientation="vertical"
  formatOptions={{
    style: 'unit',
    unit: 'centimeter'
  }}
/>`,
      },
      {
        title: 'With Validation',
        description: 'Slider with validation and error handling',
        code: `function ValidatedSlider() {
  const [quality, setQuality] = useState(3);
  const isInvalid = quality < 5;

  return (
    <Slider
      label="Quality Level"
      value={quality}
      onChange={setQuality}
      minValue={1}
      maxValue={10}
      step={1}
      isRequired
      isInvalid={isInvalid}
      errorMessage={isInvalid ? "Quality must be at least 5" : undefined}
      description="Select quality level from 1 to 10"
    />
  );
}`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label text for the slider',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Additional description text displayed below the slider',
      },
      {
        name: 'errorMessage',
        type: 'string',
        defaultValue: '-',
        description: 'Error message to display when the slider is invalid',
      },
      {
        name: 'value',
        type: 'number | number[]',
        defaultValue: '-',
        description: 'The current value (controlled component)',
      },
      {
        name: 'defaultValue',
        type: 'number | number[]',
        defaultValue: '-',
        description: 'The default value (uncontrolled component)',
      },
      {
        name: 'onChange',
        type: '(value: number | number[]) => void',
        defaultValue: '-',
        description: 'Callback fired when the value changes',
      },
      {
        name: 'onChangeEnd',
        type: '(value: number | number[]) => void',
        defaultValue: '-',
        description: 'Callback fired when the user stops dragging',
      },
      {
        name: 'minValue',
        type: 'number',
        defaultValue: '0',
        description: 'The minimum allowed value',
      },
      {
        name: 'maxValue',
        type: 'number',
        defaultValue: '100',
        description: 'The maximum allowed value',
      },
      {
        name: 'step',
        type: 'number',
        defaultValue: '1',
        description: 'The step value for increment/decrement operations',
      },
      {
        name: 'formatOptions',
        type: 'Intl.NumberFormatOptions',
        defaultValue: '-',
        description: 'Options for value formatting (currency, percentage, etc.)',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'The size variant of the slider',
      },
      {
        name: 'variant',
        type: "'default' | 'success' | 'warning' | 'error'",
        defaultValue: "'default'",
        description: 'The visual variant of the slider',
      },
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        defaultValue: "'horizontal'",
        description: 'The orientation of the slider',
      },
      {
        name: 'showOutput',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Whether to show the value output',
      },
      {
        name: 'thumbLabels',
        type: 'string[]',
        defaultValue: '-',
        description: 'Accessibility labels for thumbs (for multi-thumb sliders)',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the slider is required',
        required: false,
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the slider is disabled',
        required: false,
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the slider is in an invalid state',
        required: false,
      },
      {
        name: 'name',
        type: 'string',
        defaultValue: '-',
        description: 'Name attribute for HTML forms (applied to thumb inputs)',
        required: false,
      },
    ],
    notes: [
      'Built on React Aria\'s Slider for robust accessibility support.',
      'Supports both single-value and range (multi-thumb) sliders.',
      'Automatically handles keyboard navigation and screen reader announcements.',
      'Use formatOptions to display currency, percentages, or custom number formats.',
      'Supports both controlled and uncontrolled usage patterns.',
      'Validates input against min/max/step constraints automatically.',
      'Provides proper ARIA attributes for accessibility compliance.',
      'Supports both horizontal and vertical orientations.',
      'Range sliders require thumbLabels for proper accessibility.',
      'Value output can be hidden with showOutput={false}.',
    ],
  },

  Tabs: {
    name: 'Tabs',
    description: 'A tabs component organizes content into multiple sections and allows users to navigate between them. Built on React Aria Components for accessibility, supporting horizontal/vertical orientations, various visual styles, and comprehensive keyboard navigation.',
    usageExamples: [
      {
        title: 'Basic Tabs',
        description: 'Simple tabs with static content',
        code: `<Tabs defaultSelectedKey="tab1">
  <TabList aria-label="Basic tabs">
    <Tab id="tab1">Overview</Tab>
    <Tab id="tab2">Details</Tab>
    <Tab id="tab3">Settings</Tab>
  </TabList>
  <TabPanel id="tab1">
    Overview content goes here
  </TabPanel>
  <TabPanel id="tab2">
    Detailed information
  </TabPanel>
  <TabPanel id="tab3">
    Settings and preferences
  </TabPanel>
</Tabs>`,
      },
      {
        title: 'Controlled Tabs',
        description: 'Control tab selection with state',
        code: `function ControlledTabs() {
  const [selectedTab, setSelectedTab] = useState('features');

  return (
    <Tabs
      selectedKey={selectedTab}
      onSelectionChange={setSelectedTab}
    >
      <TabList aria-label="Product tabs">
        <Tab id="features">Features</Tab>
        <Tab id="pricing">Pricing</Tab>
        <Tab id="support">Support</Tab>
      </TabList>
      <TabPanel id="features">Product features</TabPanel>
      <TabPanel id="pricing">Pricing information</TabPanel>
      <TabPanel id="support">Support options</TabPanel>
    </Tabs>
  );
}`,
      },
      {
        title: 'Visual Variants',
        description: 'Different visual styles for tabs',
        code: `// Pills variant
<Tabs variant="pills" defaultSelectedKey="dashboard">
  <TabList aria-label="Navigation">
    <Tab id="dashboard">Dashboard</Tab>
    <Tab id="analytics">Analytics</Tab>
    <Tab id="reports">Reports</Tab>
  </TabList>
  <TabPanel id="dashboard">Dashboard content</TabPanel>
  <TabPanel id="analytics">Analytics data</TabPanel>
  <TabPanel id="reports">Report summaries</TabPanel>
</Tabs>

// Underline variant
<Tabs variant="underline" defaultSelectedKey="home">
  <TabList aria-label="Main navigation">
    <Tab id="home">Home</Tab>
    <Tab id="about">About</Tab>
    <Tab id="contact">Contact</Tab>
  </TabList>
  <TabPanel id="home">Welcome page</TabPanel>
  <TabPanel id="about">About us</TabPanel>
  <TabPanel id="contact">Contact information</TabPanel>
</Tabs>`,
      },
      {
        title: 'Vertical Orientation',
        description: 'Vertical tab layout for navigation-heavy interfaces',
        code: `<Tabs orientation="vertical" defaultSelectedKey="general">
  <TabList aria-label="Settings">
    <Tab id="general">General</Tab>
    <Tab id="security">Security</Tab>
    <Tab id="appearance">Appearance</Tab>
    <Tab id="advanced">Advanced</Tab>
  </TabList>
  <TabPanel id="general">General settings</TabPanel>
  <TabPanel id="security">Security preferences</TabPanel>
  <TabPanel id="appearance">Theme and layout</TabPanel>
  <TabPanel id="advanced">Advanced options</TabPanel>
</Tabs>`,
      },
      {
        title: 'Dynamic Tabs',
        description: 'Programmatically generated tabs from data',
        code: `function DynamicTabsExample() {
  const [tabs, setTabs] = useState([
    { id: 'profile', title: 'Profile', content: 'User profile settings' },
    { id: 'account', title: 'Account', content: 'Account management' },
    { id: 'notifications', title: 'Notifications', content: 'Notification preferences' }
  ]);

  return (
    <DynamicTabs
      items={tabs}
      selectedKey={selectedTab}
      onSelectionChange={setSelectedTab}
    />
  );
}`,
      },
    ],
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        defaultValue: '',
        description: 'TabList and TabPanel components',
        required: true,
      },
      {
        name: 'selectedKey',
        type: 'Key',
        defaultValue: 'undefined',
        description: 'The currently selected tab (controlled)',
      },
      {
        name: 'defaultSelectedKey',
        type: 'Key',
        defaultValue: 'undefined',
        description: 'The default selected tab (uncontrolled)',
      },
      {
        name: 'onSelectionChange',
        type: '(key: Key) => void',
        defaultValue: 'undefined',
        description: 'Callback when tab selection changes',
      },
      {
        name: 'orientation',
        type: '"horizontal" | "vertical"',
        defaultValue: '"horizontal"',
        description: 'Orientation of the tabs',
      },
      {
        name: 'size',
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: 'Size variant of the tabs',
      },
      {
        name: 'variant',
        type: '"default" | "pills" | "underline"',
        defaultValue: '"default"',
        description: 'Visual variant of the tabs',
      },
      {
        name: 'keyboardActivation',
        type: '"automatic" | "manual"',
        defaultValue: '"automatic"',
        description: 'How tabs are activated via keyboard',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether all tabs are disabled',
      },
      {
        name: 'disabledKeys',
        type: 'Iterable<Key>',
        defaultValue: 'undefined',
        description: 'Keys of disabled tabs',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Additional CSS classes',
      },
    ],
    notes: [
      'Built on React Aria Components for comprehensive accessibility support.',
      'Follows ARIA tabs pattern with proper roles and relationships.',
      'Supports keyboard navigation with arrow keys between tabs.',
      'Use manual keyboard activation for complex interfaces to prevent accidental tab changes.',
      'Always provide aria-label for TabList components for screen readers.',
      'Tab IDs should be meaningful and describe the content.',
      'Vertical orientation is ideal for navigation-heavy interfaces.',
      'Pills variant works well for filter-style navigation.',
      'Underline variant is great for traditional web navigation.',
      'DynamicTabs component handles programmatically generated tabs.',
      'Disabled tabs are properly announced to screen readers.',
      'Tab panels automatically become focusable when containing no interactive elements.',
    ],
  },
  Disclosure: {
    name: 'Disclosure',
    description: 'An accessible disclosure component built on React Aria. Provides collapsible content sections with keyboard navigation, focus management, and multiple styling variants.',
    usageExamples: [
      {
        title: 'Basic Disclosure',
        description: 'Simple disclosure with title and collapsible content',
        code: `<Disclosure title="System Requirements">
  <DisclosurePanel>
    <p>Details about system requirements here.</p>
  </DisclosurePanel>
</Disclosure>`,
      },
      {
        title: 'Different Variants',
        description: 'Visual variants for different design contexts',
        code: `<Disclosure variant="default" title="Default Disclosure">
  <DisclosurePanel>
    <p>Default styling with subtle background and border.</p>
  </DisclosurePanel>
</Disclosure>

<Disclosure variant="minimal" title="Minimal Disclosure">
  <DisclosurePanel>
    <p>Clean styling without borders.</p>
  </DisclosurePanel>
</Disclosure>

<Disclosure variant="bordered" title="Bordered Disclosure">
  <DisclosurePanel>
    <p>Distinct border and background styling.</p>
  </DisclosurePanel>
</Disclosure>`,
      },
      {
        title: 'Different Sizes',
        description: 'Various sizes for different contexts',
        code: `<Disclosure size="small" title="Small Disclosure">
  <DisclosurePanel>
    <p>Compact size with smaller padding.</p>
  </DisclosurePanel>
</Disclosure>

<Disclosure size="large" title="Large Disclosure">
  <DisclosurePanel>
    <p>Larger size with generous padding.</p>
  </DisclosurePanel>
</Disclosure>`,
      },
      {
        title: 'Controlled Disclosure',
        description: 'External state control with expansion tracking',
        code: `const [isExpanded, setIsExpanded] = useState(false);

<Disclosure
  title="Controlled Disclosure"
  isExpanded={isExpanded}
  onExpandedChange={setIsExpanded}
>
  <DisclosurePanel>
    <p>This disclosure is controlled by external state.</p>
  </DisclosurePanel>
</Disclosure>`,
      },
      {
        title: 'Pre-expanded State',
        description: 'Start with content expanded by default',
        code: `<Disclosure title="Pre-expanded" defaultExpanded>
  <DisclosurePanel>
    <p>This content starts expanded by default.</p>
  </DisclosurePanel>
</Disclosure>`,
      },
      {
        title: 'Custom Icon and States',
        description: 'Custom icons and disabled states',
        code: `<Disclosure title="No Icon" hideIcon>
  <DisclosurePanel>
    <p>This disclosure doesn't show an icon.</p>
  </DisclosurePanel>
</Disclosure>

<Disclosure title="Disabled" isDisabled>
  <DisclosurePanel>
    <p>This disclosure cannot be opened.</p>
  </DisclosurePanel>
</Disclosure>

const CustomIcon = () => <svg>...</svg>;

<Disclosure title="Custom Icon" icon={<CustomIcon />}>
  <DisclosurePanel>
    <p>This disclosure uses a custom icon.</p>
  </DisclosurePanel>
</Disclosure>`,
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'default' | 'minimal' | 'bordered'",
        defaultValue: "'default'",
        description: 'Visual style variant of the disclosure',
        required: false,
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size of the disclosure trigger and content',
        required: false,
      },
      {
        name: 'title',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Title text for the disclosure trigger',
        required: false,
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '',
        description: 'Content of the disclosure (typically DisclosurePanel)',
        required: true,
      },
      {
        name: 'icon',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Custom icon to display in the trigger',
        required: false,
      },
      {
        name: 'hideIcon',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether to hide the expand/collapse icon',
        required: false,
      },
      {
        name: 'defaultExpanded',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the disclosure starts expanded (uncontrolled)',
        required: false,
      },
      {
        name: 'isExpanded',
        type: 'boolean',
        defaultValue: 'undefined',
        description: 'Whether the disclosure is expanded (controlled)',
        required: false,
      },
      {
        name: 'onExpandedChange',
        type: '(isExpanded: boolean) => void',
        defaultValue: 'undefined',
        description: 'Handler called when expansion state changes',
        required: false,
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the disclosure is disabled and cannot be toggled',
        required: false,
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: "''",
        description: 'Additional CSS class names',
        required: false,
      },
      {
        name: 'aria-label',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Accessible label for screen readers',
        required: false,
      },
      {
        name: 'aria-labelledby',
        type: 'string',
        defaultValue: 'undefined',
        description: 'ID of element that labels the disclosure',
        required: false,
      },
      {
        name: 'aria-describedby',
        type: 'string',
        defaultValue: 'undefined',
        description: 'ID of element that describes the disclosure',
        required: false,
      },
    ],
    notes: [
      'Built on React Aria Components Disclosure for comprehensive accessibility support.',
      'Supports both controlled and uncontrolled modes for expansion state management.',
      'Keyboard navigation is handled automatically (Enter/Space to toggle).',
      'Focus management and ARIA attributes are applied automatically.',
      'Content panel is hidden from assistive technologies when collapsed.',
      'Supports "until-found" hidden attribute for improved find-in-page and SEO.',
      'Icon automatically rotates to indicate expanded/collapsed state.',
      'Different variants provide various visual styles for different design contexts.',
      'Size variants affect both trigger and panel padding and typography.',
      'Custom icons can be provided to replace the default chevron.',
      'Disabled state properly prevents interaction and announces state to screen readers.',
      'All ARIA attributes are forwarded to underlying elements for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },
  Breadcrumbs: {
    name: 'Breadcrumbs',
    description: 'An accessible breadcrumbs navigation component built on React Aria. Displays hierarchical navigation paths with support for static and dynamic collections, different variants, and full accessibility features.',
    usageExamples: [
      {
        title: 'Basic Breadcrumbs',
        description: 'Simple breadcrumbs with static navigation links',
        code: `<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/products">Products</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Current Page</Link>
  </Breadcrumb>
</Breadcrumbs>`,
      },
      {
        title: 'Different Variants',
        description: 'Visual variants for different design needs',
        code: `<Breadcrumbs variant="minimal">
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/docs">Documentation</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Breadcrumbs</Link>
  </Breadcrumb>
</Breadcrumbs>

<Breadcrumbs variant="compact">
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/category">Category</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Page</Link>
  </Breadcrumb>
</Breadcrumbs>`,
      },
      {
        title: 'Different Sizes',
        description: 'Various sizes for different contexts',
        code: `<Breadcrumbs size="small">
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Page</Link>
  </Breadcrumb>
</Breadcrumbs>

<Breadcrumbs size="large">
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Page</Link>
  </Breadcrumb>
</Breadcrumbs>`,
      },
      {
        title: 'Dynamic Breadcrumbs',
        description: 'Breadcrumbs from data with navigation handling',
        code: `const breadcrumbItems = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'Products', href: '/products' },
  { id: 3, label: 'Electronics', href: '/products/electronics' },
  { id: 4, label: 'Current Item' }, // No href for current page
];

const handleNavigation = (key) => {
  // Handle breadcrumb navigation
  console.log('Navigate to:', key);
};

<Breadcrumbs
  items={breadcrumbItems}
  onAction={handleNavigation}
/>`,
      },
      {
        title: 'Navigation Landmark',
        description: 'Breadcrumbs as accessible navigation landmark',
        code: `<Breadcrumbs
  isNavigationLandmark
  navigationLabel="Page navigation"
>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/section">Section</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Current Page</Link>
  </Breadcrumb>
</Breadcrumbs>`,
      },
      {
        title: 'Disabled States',
        description: 'Disabled breadcrumbs and individual items',
        code: `<Breadcrumbs isDisabled>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/category">Category</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Current Page</Link>
  </Breadcrumb>
</Breadcrumbs>

<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/restricted" isDisabled>Restricted</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Current Page</Link>
  </Breadcrumb>
</Breadcrumbs>`,
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'default' | 'minimal' | 'compact'",
        defaultValue: "'default'",
        description: 'Visual style variant of the breadcrumbs',
        required: false,
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size of the breadcrumbs text',
        required: false,
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '',
        description: 'Breadcrumb items (when using static collection)',
        required: false,
      },
      {
        name: 'items',
        type: 'Iterable<BreadcrumbItem>',
        defaultValue: 'undefined',
        description: 'Array of breadcrumb items for dynamic collections',
        required: false,
      },
      {
        name: 'onAction',
        type: '(key: React.Key) => void',
        defaultValue: 'undefined',
        description: 'Handler called when a breadcrumb is activated (dynamic collections)',
        required: false,
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether all breadcrumbs are disabled',
        required: false,
      },
      {
        name: 'isNavigationLandmark',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether to wrap breadcrumbs in a navigation landmark',
        required: false,
      },
      {
        name: 'navigationLabel',
        type: 'string',
        defaultValue: "'Breadcrumbs'",
        description: 'Accessible label for the navigation landmark',
        required: false,
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: "''",
        description: 'Additional CSS class names',
        required: false,
      },
      {
        name: 'aria-label',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Accessible label for screen readers',
        required: false,
      },
      {
        name: 'aria-labelledby',
        type: 'string',
        defaultValue: 'undefined',
        description: 'ID of element that labels the breadcrumbs',
        required: false,
      },
      {
        name: 'aria-describedby',
        type: 'string',
        defaultValue: 'undefined',
        description: 'ID of element that describes the breadcrumbs',
        required: false,
      },
    ],
    notes: [
      'Built on React Aria Components Breadcrumbs and Breadcrumb for comprehensive accessibility support.',
      'Supports both static collections (children) and dynamic collections (items prop).',
      'Last breadcrumb item is automatically marked as current page using aria-current.',
      'Breadcrumbs are rendered as an ordered list (<ol>) with proper semantic structure.',
      'Use isNavigationLandmark for main page navigation breadcrumbs to create proper landmarks.',
      'Focus management and keyboard navigation are handled automatically by React Aria.',
      'Separators are styled via CSS pseudo-elements and hidden from screen readers.',
      'Different variants provide visual separation styles: default (/), minimal (›), compact (▸).',
      'Individual breadcrumb links can be disabled while keeping others interactive.',
      'Dynamic collections automatically handle navigation state and item rendering.',
      'All ARIA attributes are forwarded to the underlying elements for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },
  Link: {
    name: 'Link',
    description: 'An accessible link component built on React Aria. Supports both native navigation (href) and JavaScript-handled links (onPress) with multiple styling variants and full accessibility features.',
    usageExamples: [
      {
        title: 'Basic Link with href',
        description: 'Standard link that navigates to a URL',
        code: `<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</Link>`,
      },
      {
        title: 'Internal Navigation Link',
        description: 'Link for internal page navigation',
        code: `<Link href="/about">
  About Page
</Link>`,
      },
      {
        title: 'JavaScript Handled Link',
        description: 'Link that triggers JavaScript actions instead of navigation',
        code: `<Link onPress={() => console.log('Link clicked!')}>
  JavaScript Action
</Link>`,
      },
      {
        title: 'Link Variants',
        description: 'Different visual styles for links',
        code: `<Link variant="primary" href="/home">Primary Link</Link>
<Link variant="secondary" href="/docs">Secondary Link</Link>
<Link variant="muted" href="/archive">Muted Link</Link>`,
      },
      {
        title: 'Link Sizes',
        description: 'Different sizes for various contexts',
        code: `<Link size="small" href="/small">Small Link</Link>
<Link size="medium" href="/medium">Medium Link</Link>
<Link size="large" href="/large">Large Link</Link>`,
      },
      {
        title: 'External Link with Icon',
        description: 'External link with visual indicator',
        code: `<Link
  href="https://external.com"
  target="_blank"
  rel="noopener noreferrer"
  data-external="true"
>
  External Link with Icon
</Link>`,
      },
      {
        title: 'Disabled Link',
        description: 'Non-interactive link state',
        code: `<Link href="/disabled" isDisabled>
  Disabled Link
</Link>`,
      },
    ],
    props: [
      {
        name: 'variant',
        type: "'default' | 'primary' | 'secondary' | 'muted'",
        defaultValue: "'default'",
        description: 'Visual style variant of the link',
        required: false,
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: "'medium'",
        description: 'Size of the link text',
        required: false,
      },
      {
        name: 'href',
        type: 'string',
        defaultValue: 'undefined',
        description: 'URL to navigate to. When provided, renders as native <a> element',
        required: false,
      },
      {
        name: 'target',
        type: "'_blank' | '_self' | '_parent' | '_top'",
        defaultValue: 'undefined',
        description: 'Where to open the linked document (only with href)',
        required: false,
      },
      {
        name: 'rel',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Relationship between current and linked document (only with href)',
        required: false,
      },
      {
        name: 'onPress',
        type: '() => void',
        defaultValue: 'undefined',
        description: 'Function to call when link is activated. Required when href is not provided',
        required: false,
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the link is disabled and non-interactive',
        required: false,
      },
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: '',
        description: 'Content of the link',
        required: true,
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: "''",
        description: 'Additional CSS class names',
        required: false,
      },
      {
        name: 'data-external',
        type: 'boolean',
        defaultValue: 'undefined',
        description: 'When true, shows external link icon indicator',
        required: false,
      },
      {
        name: 'aria-label',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Accessible label for screen readers',
        required: false,
      },
      {
        name: 'aria-labelledby',
        type: 'string',
        defaultValue: 'undefined',
        description: 'ID of element that labels this link',
        required: false,
      },
      {
        name: 'aria-describedby',
        type: 'string',
        defaultValue: 'undefined',
        description: 'ID of element that describes this link',
        required: false,
      },
    ],
    notes: [
      'Built on React Aria Components Link for comprehensive accessibility support.',
      'Automatically renders as <a> element when href is provided, or <span role="link"> when using onPress.',
      'Supports both native browser navigation and JavaScript-handled interactions.',
      'Focus management and keyboard navigation (Enter/Space activation) are handled automatically.',
      'External links should use target="_blank" with rel="noopener noreferrer" for security.',
      'Use data-external="true" to show visual indicator for external links.',
      'JavaScript-handled links do not support browser features like "Open in new tab".',
      'Disabled links are properly announced to screen readers and cannot be activated.',
      'All ARIA attributes are forwarded to the underlying element for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },
  Calendar: {
    name: 'Calendar',
    description: 'An accessible calendar component built on React Aria. Allows users to select dates with full keyboard navigation, date validation, disabled dates support, and comprehensive accessibility features.',
    usageExamples: [
      {
        title: 'Basic Calendar',
        description: 'Simple date selection calendar',
        code: `<Calendar
  aria-label="Select a date"
  value={selectedDate}
  onChange={setSelectedDate}
/>`,
      },
      {
        title: 'Calendar with Default Value',
        description: 'Calendar with pre-selected date',
        code: `<Calendar
  aria-label="Event date"
  defaultValue={parseDate('2024-06-15')}
  onChange={handleDateChange}
/>`,
      },
      {
        title: 'Calendar with Date Range Restrictions',
        description: 'Restrict selectable dates to a specific range',
        code: `<Calendar
  aria-label="Available dates"
  minValue={parseDate('2024-01-01')}
  maxValue={parseDate('2024-12-31')}
  defaultValue={parseDate('2024-06-15')}
/>`,
      },
      {
        title: 'Calendar with Disabled Dates',
        description: 'Disable specific dates (e.g., weekends)',
        code: `const isDateUnavailable = (date) => {
  const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // Disable weekends
};

<Calendar
  aria-label="Weekday selection"
  isDateUnavailable={isDateUnavailable}
  defaultValue={parseDate('2024-06-17')}
/>`,
      },
      {
        title: 'Read-only Calendar',
        description: 'Display-only calendar that cannot be changed',
        code: `<Calendar
  aria-label="Display date"
  isReadOnly
  defaultValue={parseDate('2024-06-15')}
/>`,
      },
      {
        title: 'Calendar with Validation',
        description: 'Custom validation for date selection',
        code: `<Calendar
  aria-label="Appointment date"
  validate={(value) =>
    value < parseDate('2024-01-01')
      ? 'Date must be in 2024 or later'
      : null
  }
  defaultValue={parseDate('2024-06-15')}
/>`,
      },
      {
        title: 'Controlled Calendar',
        description: 'Fully controlled calendar with external state',
        code: `const [date, setDate] = useState(parseDate('2024-01-15'));

<Calendar
  aria-label="Controlled calendar"
  value={date}
  onChange={setDate}
/>`,
      },
    ],
    props: [
      {
        name: 'value',
        type: 'DateValue | null',
        defaultValue: 'undefined',
        description: 'The selected date (controlled)',
        required: false,
      },
      {
        name: 'defaultValue',
        type: 'DateValue',
        defaultValue: 'undefined',
        description: 'The initial selected date (uncontrolled)',
        required: false,
      },
      {
        name: 'onChange',
        type: '(value: DateValue | null) => void',
        defaultValue: 'undefined',
        description: 'Handler called when the date selection changes',
        required: false,
      },
      {
        name: 'minValue',
        type: 'DateValue',
        defaultValue: 'undefined',
        description: 'The earliest date that can be selected',
        required: false,
      },
      {
        name: 'maxValue',
        type: 'DateValue',
        defaultValue: 'undefined',
        description: 'The latest date that can be selected',
        required: false,
      },
      {
        name: 'isDateUnavailable',
        type: '(date: DateValue) => boolean',
        defaultValue: 'undefined',
        description: 'Function to determine if a specific date should be disabled',
        required: false,
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the calendar is read-only and cannot be changed',
        required: false,
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the entire calendar is disabled',
        required: false,
      },
      {
        name: 'autoFocus',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether to auto-focus the calendar on mount',
        required: false,
      },
      {
        name: 'validate',
        type: '(value: DateValue) => ValidationError | true | null',
        defaultValue: 'undefined',
        description: 'Custom validation function for date selection',
        required: false,
      },
      {
        name: 'errorMessage',
        type: 'ReactNode | ((validation: ValidationResult) => ReactNode)',
        defaultValue: 'undefined',
        description: 'Error message to display when validation fails',
        required: false,
      },
      {
        name: 'aria-label',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Accessible label for the calendar',
        required: false,
      },
      {
        name: 'aria-labelledby',
        type: 'string',
        defaultValue: 'undefined',
        description: 'ID of element that labels the calendar',
        required: false,
      },
      {
        name: 'aria-describedby',
        type: 'string',
        defaultValue: 'undefined',
        description: 'ID of element that describes the calendar',
        required: false,
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: "''",
        description: 'Additional CSS class names',
        required: false,
      },
    ],
    notes: [
      'Built on React Aria Components Calendar for comprehensive accessibility support.',
      'Supports all internationalization features including different calendar systems and locales.',
      'Full keyboard navigation: arrow keys for date navigation, Page Up/Down for month navigation, Home/End for week boundaries.',
      'Screen reader announcements for date changes, disabled dates, and navigation.',
      'Uses @internationalized/date for robust date handling across time zones and calendar systems.',
      'DateValue objects provide immutable date operations and prevent common date pitfalls.',
      'The isDateUnavailable function can disable any dates (weekends, holidays, etc.).',
      'Validation can be used for complex business rules beyond simple min/max dates.',
      'Read-only mode is useful for displaying dates without allowing changes.',
      'Error messages are automatically announced to screen readers when validation fails.',
      'Focus management ensures proper tab order and keyboard accessibility.',
      'Supports high contrast mode and follows system color preferences.',
      'All ARIA attributes are forwarded to underlying elements for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },

  DateField: {
    name: 'DateField',
    description: 'An accessible date field component built on React Aria. Allows users to enter dates with keyboard input, validation, date range restrictions, and comprehensive accessibility features.',
    usageExamples: [
      {
        title: 'Basic DateField',
        description: 'Simple date input field',
        code: `<DateField
  label="Select Date"
  value={selectedDate}
  onChange={setSelectedDate}
/>`,
      },
      {
        title: 'DateField with Description',
        description: 'Date field with helper text',
        code: `<DateField
  label="Event Date"
  description="Choose your event date"
  value={date}
  onChange={setDate}
/>`,
      },
      {
        title: 'DateField with Date Range Restrictions',
        description: 'Restrict selectable dates to a specific range',
        code: `<DateField
  label="Birth Date"
  description="Enter your birth date"
  minValue={parseDate('1900-01-01')}
  maxValue={parseDate('2025-12-31')}
  isRequired
/>`,
      },
      {
        title: 'DateField with Validation',
        description: 'Date field with custom validation and error messages',
        code: `<DateField
  label="Required Date"
  description="This field is required"
  isRequired
  errorMessage="Please enter a valid date"
  isInvalid={hasError}
/>`,
      },
      {
        title: 'Read-only DateField',
        description: 'Display-only date field that cannot be changed',
        code: `<DateField
  label="Document Date"
  description="This date cannot be changed"
  value={parseDate('2025-06-15')}
  isReadOnly
/>`,
      },
      {
        title: 'Disabled DateField',
        description: 'Disabled date field that cannot be interacted with',
        code: `<DateField
  label="Disabled Date"
  description="This field is disabled"
  defaultValue={parseDate('2025-03-20')}
  isDisabled
/>`,
      },
      {
        title: 'Controlled DateField',
        description: 'Fully controlled date field with external state',
        code: `const [date, setDate] = useState<CalendarDate>(parseDate('2025-06-15'));

<DateField
  label="Appointment Date"
  value={date}
  onChange={(newDate) => newDate && setDate(newDate)}
/>`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label for the date field',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Description text to display below the input',
      },
      {
        name: 'errorMessage',
        type: 'string',
        defaultValue: '-',
        description: 'Error message to display when validation fails',
      },
      {
        name: 'value',
        type: 'CalendarDate | null',
        defaultValue: 'null',
        description: 'The current value of the date field',
      },
      {
        name: 'defaultValue',
        type: 'CalendarDate',
        defaultValue: '-',
        description: 'The default value for uncontrolled date fields',
      },
      {
        name: 'onChange',
        type: '(value: CalendarDate | null) => void',
        defaultValue: '-',
        description: 'Handler called when the date value changes',
      },
      {
        name: 'minValue',
        type: 'CalendarDate',
        defaultValue: '-',
        description: 'The minimum allowed date',
      },
      {
        name: 'maxValue',
        type: 'CalendarDate',
        defaultValue: '-',
        description: 'The maximum allowed date',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date field is required',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date field is read-only',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date field is disabled',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date field is in an invalid state',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS classes to apply to the date field',
      },
      {
        name: 'children',
        type: 'ReactNode',
        defaultValue: '-',
        description: 'Child elements to render within the date field',
      },
    ],
    notes: [
      'DateField provides keyboard input for dates with automatic formatting.',
      'Date segments (month, day, year) can be navigated with arrow keys.',
      'Supports date validation with customizable min/max values.',
      'Integrates seamlessly with form libraries and validation schemas.',
      'Provides comprehensive accessibility with ARIA labels and descriptions.',
      'Error messages are automatically announced to screen readers.',
      'Supports localization and different date formats.',
      'Read-only mode is useful for displaying dates without allowing changes.',
      'Focus management ensures proper tab order and keyboard accessibility.',
      'Supports high contrast mode and follows system color preferences.',
      'All ARIA attributes are forwarded to underlying elements for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },

  DatePicker: {
    name: 'DatePicker',
    description: 'An accessible date picker component built on React Aria. Combines date input with calendar popover for intuitive date selection with validation, disabled dates support, and comprehensive accessibility features.',
    usageExamples: [
      {
        title: 'Basic DatePicker',
        description: 'Simple date picker with input and calendar popover',
        code: `<DatePicker
  label="Select Date"
  value={selectedDate}
  onChange={setSelectedDate}
/>`,
      },
      {
        title: 'DatePicker with Description',
        description: 'Date picker with helper text',
        code: `<DatePicker
  label="Event Date"
  description="Choose your event date from the calendar"
  value={date}
  onChange={setDate}
/>`,
      },
      {
        title: 'DatePicker with Date Range Restrictions',
        description: 'Restrict selectable dates to a specific range',
        code: `<DatePicker
  label="Birth Date"
  description="Enter your birth date"
  minValue={parseDate('1900-01-01')}
  maxValue={parseDate('2025-12-31')}
  isRequired
/>`,
      },
      {
        title: 'DatePicker with Disabled Dates',
        description: 'Disable specific dates (e.g., weekends)',
        code: `<DatePicker
  label="Weekday Only"
  description="Weekends are disabled"
  isDateUnavailable={(date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }}
/>`,
      },
      {
        title: 'DatePicker with Validation',
        description: 'Date picker with custom validation and error messages',
        code: `<DatePicker
  label="Required Date"
  description="This field is required"
  isRequired
  errorMessage="Please select a valid date"
  isInvalid={hasError}
/>`,
      },
      {
        title: 'Read-only DatePicker',
        description: 'Display-only date picker that cannot be changed',
        code: `<DatePicker
  label="Document Date"
  description="This date cannot be changed"
  value={parseDate('2025-06-15')}
  isReadOnly
/>`,
      },
      {
        title: 'Disabled DatePicker',
        description: 'Disabled date picker that cannot be interacted with',
        code: `<DatePicker
  label="Disabled Date"
  description="This picker is disabled"
  defaultValue={parseDate('2025-03-20')}
  isDisabled
/>`,
      },
      {
        title: 'Controlled DatePicker',
        description: 'Fully controlled date picker with external state',
        code: `const [date, setDate] = useState<CalendarDate>(parseDate('2025-06-15'));

<DatePicker
  label="Appointment Date"
  value={date}
  onChange={(newDate) => newDate && setDate(newDate)}
/>`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label for the date picker',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Description text to display below the input',
      },
      {
        name: 'errorMessage',
        type: 'string',
        defaultValue: '-',
        description: 'Error message to display when validation fails',
      },
      {
        name: 'value',
        type: 'CalendarDate | null',
        defaultValue: 'null',
        description: 'The current value of the date picker',
      },
      {
        name: 'defaultValue',
        type: 'CalendarDate',
        defaultValue: '-',
        description: 'The default value for uncontrolled date pickers',
      },
      {
        name: 'onChange',
        type: '(value: CalendarDate | null) => void',
        defaultValue: '-',
        description: 'Handler called when the date value changes',
      },
      {
        name: 'onOpenChange',
        type: '(isOpen: boolean) => void',
        defaultValue: '-',
        description: 'Handler called when the calendar popover opens/closes',
      },
      {
        name: 'minValue',
        type: 'CalendarDate',
        defaultValue: '-',
        description: 'The minimum allowed date',
      },
      {
        name: 'maxValue',
        type: 'CalendarDate',
        defaultValue: '-',
        description: 'The maximum allowed date',
      },
      {
        name: 'isDateUnavailable',
        type: '(date: DateValue) => boolean',
        defaultValue: '-',
        description: 'Function to determine if a date should be unavailable for selection',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date picker is required',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date picker is read-only',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date picker is disabled',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date picker is in an invalid state',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS classes to apply to the date picker',
      },
      {
        name: 'children',
        type: 'ReactNode',
        defaultValue: '-',
        description: 'Child elements to render within the date picker',
      },
    ],
    notes: [
      'DatePicker combines keyboard input with visual calendar selection.',
      'The calendar popover opens on button click or when the input is focused.',
      'Date segments (month, day, year) can be navigated with arrow keys in the input.',
      'Calendar navigation supports keyboard shortcuts for month/year navigation.',
      'Supports date validation with customizable min/max values and custom unavailable dates.',
      'Integrates seamlessly with form libraries and validation schemas.',
      'Provides comprehensive accessibility with ARIA labels and descriptions.',
      'Error messages are automatically announced to screen readers.',
      'Supports localization and different date formats.',
      'Read-only mode displays the calendar but prevents date changes.',
      'Focus management ensures proper tab order and keyboard accessibility.',
      'Calendar automatically closes when a date is selected or focus moves away.',
      'Supports high contrast mode and follows system color preferences.',
      'All ARIA attributes are forwarded to underlying elements for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },

  DateRangePicker: {
    name: 'DateRangePicker',
    description: 'An accessible date range picker component built on React Aria. Combines date range input with calendar popover for intuitive date range selection with validation, disabled dates support, and comprehensive accessibility features.',
    usageExamples: [
      {
        title: 'Basic DateRangePicker',
        description: 'Simple date range picker with input and calendar popover',
        code: `<DateRangePicker
  label="Select Date Range"
  value={dateRange}
  onChange={setDateRange}
/>`,
      },
      {
        title: 'DateRangePicker with Description',
        description: 'Date range picker with helper text',
        code: `<DateRangePicker
  label="Event Duration"
  description="Choose the start and end dates for your event"
  value={eventRange}
  onChange={setEventRange}
/>`,
      },
      {
        title: 'DateRangePicker with Date Range Restrictions',
        description: 'Restrict selectable dates to a specific range',
        code: `<DateRangePicker
  label="Booking Period"
  description="Select your booking dates"
  minValue={parseDate('2025-01-01')}
  maxValue={parseDate('2025-12-31')}
  isRequired
/>`,
      },
      {
        title: 'DateRangePicker with Disabled Dates',
        description: 'Disable specific dates (e.g., weekends)',
        code: `<DateRangePicker
  label="Business Days Only"
  description="Weekends are disabled"
  isDateUnavailable={(date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }}
/>`,
      },
      {
        title: 'DateRangePicker with Validation',
        description: 'Date range picker with custom validation and error messages',
        code: `<DateRangePicker
  label="Required Date Range"
  description="Both start and end dates are required"
  isRequired
  errorMessage="Please select a valid date range"
  isInvalid={hasError}
/>`,
      },
      {
        title: 'Read-only DateRangePicker',
        description: 'Display-only date range picker that cannot be changed',
        code: `<DateRangePicker
  label="Report Period"
  description="This date range cannot be changed"
  value={{
    start: parseDate('2025-06-01'),
    end: parseDate('2025-06-30')
  }}
  isReadOnly
/>`,
      },
      {
        title: 'Disabled DateRangePicker',
        description: 'Disabled date range picker that cannot be interacted with',
        code: `<DateRangePicker
  label="Disabled Range"
  description="This picker is disabled"
  defaultValue={{
    start: parseDate('2025-03-01'),
    end: parseDate('2025-03-31')
  }}
  isDisabled
/>`,
      },
      {
        title: 'Controlled DateRangePicker',
        description: 'Fully controlled date range picker with external state',
        code: `const [range, setRange] = useState<DateRange>({
  start: parseDate('2025-06-01'),
  end: parseDate('2025-06-15')
});

<DateRangePicker
  label="Project Timeline"
  value={range}
  onChange={(newRange) => newRange && setRange(newRange)}
/>`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label for the date range picker',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Description text to display below the input',
      },
      {
        name: 'errorMessage',
        type: 'string',
        defaultValue: '-',
        description: 'Error message to display when validation fails',
      },
      {
        name: 'value',
        type: 'DateRange | null',
        defaultValue: 'null',
        description: 'The current value of the date range picker (object with start and end dates)',
      },
      {
        name: 'defaultValue',
        type: 'DateRange',
        defaultValue: '-',
        description: 'The default value for uncontrolled date range pickers',
      },
      {
        name: 'onChange',
        type: '(value: DateRange | null) => void',
        defaultValue: '-',
        description: 'Handler called when the date range value changes',
      },
      {
        name: 'onOpenChange',
        type: '(isOpen: boolean) => void',
        defaultValue: '-',
        description: 'Handler called when the calendar popover opens/closes',
      },
      {
        name: 'minValue',
        type: 'CalendarDate',
        defaultValue: '-',
        description: 'The minimum allowed date',
      },
      {
        name: 'maxValue',
        type: 'CalendarDate',
        defaultValue: '-',
        description: 'The maximum allowed date',
      },
      {
        name: 'isDateUnavailable',
        type: '(date: DateValue) => boolean',
        defaultValue: '-',
        description: 'Function to determine if a date should be unavailable for selection',
      },
      {
        name: 'allowsNonContiguousRanges',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether non-contiguous ranges are allowed when combined with unavailable dates',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date range picker is required',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date range picker is read-only',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date range picker is disabled',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the date range picker is in an invalid state',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS classes to apply to the date range picker',
      },
      {
        name: 'children',
        type: 'ReactNode',
        defaultValue: '-',
        description: 'Child elements to render within the date range picker',
      },
    ],
    notes: [
      'DateRangePicker allows users to select both start and end dates in a single interface.',
      'The calendar popover opens on button click or when either input is focused.',
      'Date segments (month, day, year) can be navigated with arrow keys in both input fields.',
      'Range selection in the calendar highlights the selected range for visual feedback.',
      'Calendar navigation supports keyboard shortcuts for month/year navigation.',
      'Supports date validation with customizable min/max values and custom unavailable dates.',
      'Non-contiguous ranges can be allowed when combined with unavailable dates.',
      'Automatically validates that end date is not before start date.',
      'Integrates seamlessly with form libraries and validation schemas.',
      'Provides comprehensive accessibility with ARIA labels and descriptions for both inputs.',
      'Error messages are automatically announced to screen readers.',
      'Supports localization and different date formats.',
      'Read-only mode displays the calendar but prevents date changes.',
      'Focus management ensures proper tab order and keyboard accessibility between inputs.',
      'Calendar automatically closes when both dates are selected or focus moves away.',
      'Range selection can be completed by clicking start and end dates or dragging.',
      'Supports high contrast mode and follows system color preferences.',
      'All ARIA attributes are forwarded to underlying elements for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },

  RangeCalendar: {
    name: 'RangeCalendar',
    description: 'An accessible range calendar component built on React Aria. Enables users to select date ranges directly within a calendar interface with validation, disabled dates support, and comprehensive accessibility features.',
    usageExamples: [
      {
        title: 'Basic RangeCalendar',
        description: 'Simple range calendar for date range selection',
        code: `<RangeCalendar
  aria-label="Select date range"
  value={dateRange}
  onChange={setDateRange}
/>`,
      },
      {
        title: 'Controlled RangeCalendar',
        description: 'Range calendar with controlled state and external buttons',
        code: `const [range, setRange] = useState({
  start: parseDate('2025-01-15'),
  end: parseDate('2025-01-20')
});

<RangeCalendar
  aria-label="Controlled date range"
  value={range}
  onChange={setRange}
/>`,
      },
      {
        title: 'RangeCalendar with Date Restrictions',
        description: 'Restrict selectable dates to a specific range',
        code: `<RangeCalendar
  aria-label="Select booking dates"
  minValue={parseDate('2025-01-01')}
  maxValue={parseDate('2025-12-31')}
/>`,
      },
      {
        title: 'RangeCalendar with Disabled Dates',
        description: 'Disable specific dates (e.g., weekends)',
        code: `<RangeCalendar
  aria-label="Select weekdays only"
  isDateUnavailable={(date) => {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }}
/>`,
      },
      {
        title: 'Read-only RangeCalendar',
        description: 'Display-only range calendar that cannot be changed',
        code: `<RangeCalendar
  aria-label="View-only date range"
  value={{
    start: parseDate('2025-06-01'),
    end: parseDate('2025-06-15')
  }}
  isReadOnly
/>`,
      },
      {
        title: 'Advanced RangeCalendar',
        description: 'Range calendar with non-contiguous ranges and complex validation',
        code: `<RangeCalendar
  aria-label="Advanced date range selection"
  value={range}
  onChange={setRange}
  minValue={parseDate('2025-01-01')}
  maxValue={parseDate('2025-12-31')}
  isDateUnavailable={isHolidayOrWeekend}
  allowsNonContiguousRanges
/>`,
      },
    ],
    props: [
      {
        name: 'value',
        type: 'RangeValue<DateValue> | null',
        defaultValue: 'null',
        description: 'The current value of the range calendar (object with start and end dates)',
      },
      {
        name: 'defaultValue',
        type: 'RangeValue<DateValue>',
        defaultValue: '-',
        description: 'The default value for uncontrolled range calendars',
      },
      {
        name: 'onChange',
        type: '(value: RangeValue<DateValue> | null) => void',
        defaultValue: '-',
        description: 'Handler called when the date range value changes',
      },
      {
        name: 'onFocusChange',
        type: '(isFocused: boolean) => void',
        defaultValue: '-',
        description: 'Handler called when the calendar focus state changes',
      },
      {
        name: 'minValue',
        type: 'DateValue',
        defaultValue: '-',
        description: 'The minimum allowed date',
      },
      {
        name: 'maxValue',
        type: 'DateValue',
        defaultValue: '-',
        description: 'The maximum allowed date',
      },
      {
        name: 'isDateUnavailable',
        type: '(date: DateValue) => boolean',
        defaultValue: '-',
        description: 'Function to determine if a date should be unavailable for selection',
      },
      {
        name: 'allowsNonContiguousRanges',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether non-contiguous ranges are allowed when combined with unavailable dates',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the range calendar is read-only',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the range calendar is disabled',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the range calendar is in an invalid state',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS classes to apply to the range calendar',
      },
      {
        name: 'children',
        type: 'ReactNode',
        defaultValue: '-',
        description: 'Child elements to render within the range calendar',
      },
    ],
    notes: [
      'RangeCalendar provides a visual interface for selecting date ranges directly within a calendar.',
      'Range selection is completed by clicking start and end dates or by dragging across dates.',
      'The selected range is visually highlighted for clear feedback.',
      'Keyboard navigation allows users to select ranges using arrow keys and Space/Enter.',
      'Calendar navigation supports keyboard shortcuts for month/year navigation.',
      'Supports date validation with customizable min/max values and custom unavailable dates.',
      'Non-contiguous ranges can be allowed when combined with unavailable dates.',
      'Automatically validates that end date is not before start date.',
      'Provides comprehensive accessibility with ARIA labels and descriptions.',
      'Focus management ensures proper keyboard accessibility and screen reader support.',
      'Range selection state is announced to screen readers for accessibility.',
      'Supports localization and different date formats.',
      'Read-only mode displays the range but prevents changes.',
      'Calendar headers provide month/year context and navigation controls.',
      'Supports high contrast mode and follows system color preferences.',
      'All ARIA attributes are forwarded to underlying elements for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },

  TimeField: {
    name: 'TimeField',
    description: 'An accessible time field component built on React Aria. Allows users to enter and edit time values with keyboard navigation, validation, and comprehensive accessibility features.',
    usageExamples: [
      {
        title: 'Basic TimeField',
        description: 'Simple time input field',
        code: `<TimeField
  label="Select Time"
  value={time}
  onChange={setTime}
/>`,
      },
      {
        title: 'TimeField with Description',
        description: 'Time field with helper text',
        code: `<TimeField
  label="Meeting Time"
  description="Choose your preferred meeting time"
  value={time}
  onChange={setTime}
/>`,
      },
      {
        title: 'TimeField with Validation',
        description: 'Time field with custom validation and error messages',
        code: `<TimeField
  label="Working Hours"
  description="Please select a time between 9 AM and 6 PM"
  value={time}
  onChange={validateAndSetTime}
  isInvalid={hasError}
  errorMessage="Please select a time during working hours"
  isRequired
/>`,
      },
      {
        title: '24-Hour Format TimeField',
        description: 'Time field using 24-hour format',
        code: `<TimeField
  label="24-Hour Time"
  description="Time in 24-hour format"
  hourCycle={24}
  value={time}
  onChange={setTime}
/>`,
      },
      {
        title: 'TimeField with Seconds',
        description: 'Time field including seconds precision',
        code: `<TimeField
  label="Precise Time"
  description="Time with seconds"
  granularity="second"
  value={time}
  onChange={setTime}
/>`,
      },
      {
        title: 'Read-only TimeField',
        description: 'Display-only time field that cannot be changed',
        code: `<TimeField
  label="Appointment Time"
  description="This time cannot be changed"
  value={parseTime('10:30')}
  isReadOnly
/>`,
      },
      {
        title: 'Disabled TimeField',
        description: 'Disabled time field that cannot be interacted with',
        code: `<TimeField
  label="Disabled Time"
  description="This field is disabled"
  defaultValue={parseTime('12:00')}
  isDisabled
/>`,
      },
      {
        title: 'Controlled TimeField',
        description: 'Fully controlled time field with external state',
        code: `const [time, setTime] = useState<Time>(parseTime('14:30'));

<TimeField
  label="Meeting Time"
  value={time}
  onChange={(newTime) => newTime && setTime(newTime)}
/>`,
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        defaultValue: '-',
        description: 'The label for the time field',
      },
      {
        name: 'description',
        type: 'string',
        defaultValue: '-',
        description: 'Description text to display below the input',
      },
      {
        name: 'errorMessage',
        type: 'string',
        defaultValue: '-',
        description: 'Error message to display when validation fails',
      },
      {
        name: 'value',
        type: 'TimeValue | null',
        defaultValue: 'null',
        description: 'The current value of the time field',
      },
      {
        name: 'defaultValue',
        type: 'TimeValue',
        defaultValue: '-',
        description: 'The default value for uncontrolled time fields',
      },
      {
        name: 'onChange',
        type: '(value: TimeValue | null) => void',
        defaultValue: '-',
        description: 'Handler called when the time value changes',
      },
      {
        name: 'onFocus',
        type: '(e: FocusEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the time field receives focus',
      },
      {
        name: 'onBlur',
        type: '(e: FocusEvent) => void',
        defaultValue: '-',
        description: 'Handler called when the time field loses focus',
      },
      {
        name: 'hourCycle',
        type: '12 | 24',
        defaultValue: '12',
        description: 'Whether to use 12 or 24 hour time format',
      },
      {
        name: 'granularity',
        type: '"hour" | "minute" | "second"',
        defaultValue: '"minute"',
        description: 'The smallest unit that is displayed in the time field',
      },
      {
        name: 'isRequired',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the time field is required',
      },
      {
        name: 'isReadOnly',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the time field is read-only',
      },
      {
        name: 'isDisabled',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the time field is disabled',
      },
      {
        name: 'isInvalid',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Whether the time field is in an invalid state',
      },
      {
        name: 'className',
        type: 'string',
        defaultValue: '-',
        description: 'Additional CSS classes to apply to the time field',
      },
      {
        name: 'children',
        type: 'ReactNode',
        defaultValue: '-',
        description: 'Child elements to render within the time field',
      },
    ],
    notes: [
      'TimeField provides a structured way to input and edit time values.',
      'Time segments (hour, minute, AM/PM) can be navigated with arrow keys and Tab.',
      'Each segment can be edited individually using keyboard input.',
      'Supports both 12-hour (with AM/PM) and 24-hour time formats.',
      'Granularity can be set to hour, minute, or second precision.',
      'Automatic validation ensures valid time values (e.g., hours 0-23, minutes 0-59).',
      'Integrates seamlessly with form libraries and validation schemas.',
      'Provides comprehensive accessibility with ARIA labels and descriptions.',
      'Error messages are automatically announced to screen readers.',
      'Supports localization and different time formats.',
      'Read-only mode displays the time but prevents editing.',
      'Focus management ensures proper tab order and keyboard accessibility.',
      'Segment navigation allows precise editing of individual time components.',
      'Supports high contrast mode and follows system color preferences.',
      'All ARIA attributes are forwarded to underlying elements for enhanced accessibility.',
      'The component follows React Aria patterns for consistent behavior across applications.',
    ],
  },
};
