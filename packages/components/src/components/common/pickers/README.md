# Picker Components

This folder contains React Aria-based picker components including ComboBox and Select. These components provide accessible, keyboard-navigable selection interfaces built on top of React Aria Components.

## Components

### ComboBox

A combo box combines a text input with a listbox, allowing users to filter a list of options or enter custom values.

#### Features

- **Flexible**: Support for controlled and uncontrolled state, custom values, custom filter functions, async loading, disabled items, and validation
- **Keyboard Navigation**: Full keyboard support with arrow keys, page up/down, home/end, and typeahead
- **Accessible**: Follows ARIA combobox pattern with proper screen reader support
- **Validation**: Built-in support for required fields and error messages
- **Customizable**: Multiple size variants, styling options, and custom filtering

#### Basic Usage

```tsx
import { ComboBox } from '@mono/components';

const options = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
];

function MyComponent() {
  return (
    <ComboBox
      label="Choose an option"
      placeholder="Type to search..."
      options={options}
      onSelectionChange={(key) => console.log('Selected:', key)}
    />
  );
}
```

#### Advanced Usage

```tsx
import { ComboBox } from '@mono/components';

const options = [
  { 
    id: 1, 
    label: 'Premium Plan', 
    description: 'Full access to all features',
    value: 'premium' 
  },
  { 
    id: 2, 
    label: 'Basic Plan', 
    description: 'Essential features only',
    value: 'basic' 
  },
];

function AdvancedComboBox() {
  const [selectedKey, setSelectedKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const customFilter = (items, filterText) => {
    return items.filter(item => 
      item.label.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description?.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <ComboBox
      label="Select Plan"
      description="Choose your subscription plan"
      placeholder="Search plans..."
      options={options}
      selectedKey={selectedKey}
      inputValue={inputValue}
      onSelectionChange={setSelectedKey}
      onInputChange={setInputValue}
      filter={customFilter}
      allowsCustomValue
      size="lg"
      variant="outlined"
      isRequired
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label for the combobox |
| `placeholder` | `string` | - | Placeholder text |
| `description` | `string` | - | Description text |
| `errorMessage` | `string` | - | Error message |
| `options` | `ComboBoxOption[]` | `[]` | Options to display |
| `selectedKey` | `string \| number \| null` | - | Selected option ID (controlled) |
| `defaultSelectedKey` | `string \| number \| null` | - | Default selected option ID |
| `inputValue` | `string` | - | Input value (controlled) |
| `defaultInputValue` | `string` | - | Default input value |
| `allowsCustomValue` | `boolean` | `false` | Allow custom values not in options |
| `isLoading` | `boolean` | `false` | Loading state |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `variant` | `'default' \| 'filled' \| 'outlined'` | `'default'` | Style variant |
| `className` | `string` | - | Custom className |
| `isDisabled` | `boolean` | `false` | Disabled state |
| `isRequired` | `boolean` | `false` | Required field |
| `onSelectionChange` | `(key: string \| number \| null) => void` | - | Selection change handler |
| `onInputChange` | `(value: string) => void` | - | Input change handler |
| `filter` | `(items: ComboBoxOption[], inputValue: string) => ComboBoxOption[]` | - | Custom filter function |

### Select

A select displays a collapsible list of options and allows a user to select one of them.

#### Features

- **Flexible**: Support for controlled and uncontrolled state, async loading, disabled items, and validation
- **Keyboard Navigation**: Full keyboard support with arrow keys, page up/down, home/end, and typeahead
- **Accessible**: Follows ARIA listbox pattern with proper screen reader support
- **HTML Form Integration**: Works with HTML forms and supports autofill
- **Validation**: Built-in support for required fields and error messages
- **Customizable**: Multiple size variants, styling options, and custom value rendering

#### Basic Usage

```tsx
import { Select } from '@mono/components';

const options = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
];

function MyComponent() {
  return (
    <Select
      label="Choose an option"
      placeholder="Select..."
      options={options}
      onSelectionChange={(key) => console.log('Selected:', key)}
    />
  );
}
```

#### Advanced Usage

```tsx
import { Select } from '@mono/components';

const options = [
  { 
    id: 'us', 
    label: 'United States', 
    description: 'North America',
    value: 'US' 
  },
  { 
    id: 'uk', 
    label: 'United Kingdom', 
    description: 'Europe',
    value: 'GB' 
  },
];

function AdvancedSelect() {
  const [selectedKey, setSelectedKey] = useState('us');

  const renderValue = (option) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{option?.label}</span>
      {option?.value && (
        <span style={{ marginLeft: 8, fontSize: '0.875rem', color: '#666' }}>
          ({option.value})
        </span>
      )}
    </div>
  );

  return (
    <Select
      label="Country"
      description="Select your country"
      options={options}
      selectedKey={selectedKey}
      onSelectionChange={setSelectedKey}
      renderValue={renderValue}
      size="lg"
      variant="filled"
      isRequired
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label for the select |
| `placeholder` | `string` | `'Select an option...'` | Placeholder text |
| `description` | `string` | - | Description text |
| `errorMessage` | `string` | - | Error message |
| `options` | `SelectOption[]` | `[]` | Options to display |
| `selectedKey` | `string \| number \| null` | - | Selected option ID (controlled) |
| `defaultSelectedKey` | `string \| number \| null` | - | Default selected option ID |
| `isLoading` | `boolean` | `false` | Loading state |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `variant` | `'default' \| 'filled' \| 'outlined'` | `'default'` | Style variant |
| `className` | `string` | - | Custom className |
| `isDisabled` | `boolean` | `false` | Disabled state |
| `isRequired` | `boolean` | `false` | Required field |
| `isOpen` | `boolean` | - | Open state (controlled) |
| `defaultOpen` | `boolean` | - | Default open state |
| `onSelectionChange` | `(key: string \| number \| null) => void` | - | Selection change handler |
| `onOpenChange` | `(open: boolean) => void` | - | Open change handler |
| `renderPlaceholder` | `() => React.ReactNode` | - | Render custom placeholder |
| `renderValue` | `(selectedOption: SelectOption \| null) => React.ReactNode` | - | Render custom selected value |

## Common Option Interface

Both components use similar option interfaces:

```tsx
interface ComboBoxOption {
  id: string | number;
  label: string;
  value?: string;
  description?: string;
  disabled?: boolean;
}

interface SelectOption {
  id: string | number;
  label: string;
  value?: string;
  description?: string;
  disabled?: boolean;
}
```

## Styling

### Size Variants

- `sm`: Small size (32px height)
- `md`: Medium size (40px height) - default
- `lg`: Large size (48px height)

### Style Variants

- `default`: Standard appearance with borders
- `filled`: Filled background appearance
- `outlined`: Emphasized border appearance

### CSS Custom Properties

The components use CSS custom properties for theming:

```css
.my-custom-combobox {
  --combobox-border-color: #custom-border;
  --combobox-focus-color: #custom-focus;
  --combobox-bg-color: #custom-background;
}
```

### Dark Mode

Both components automatically support dark mode via `prefers-color-scheme: dark`.

## Accessibility

Both components follow WAI-ARIA guidelines:

- **ComboBox**: Implements the [ARIA combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- **Select**: Implements the [ARIA listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

### Keyboard Navigation

- **Arrow Keys**: Navigate options
- **Enter/Space**: Select option
- **Escape**: Close popover
- **Home/End**: Jump to first/last option
- **Page Up/Down**: Jump by multiple options
- **Typing**: Filter or search options (ComboBox only)

### Screen Reader Support

- Proper labeling and descriptions
- Status announcements for selection changes
- Support for option descriptions
- Clear focus indicators

## Examples

### Async Loading

```tsx
import { useState, useEffect } from 'react';
import { ComboBox } from '@mono/components';

function AsyncComboBox() {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue.length > 2) {
      setIsLoading(true);
      fetchOptions(inputValue).then(data => {
        setOptions(data);
        setIsLoading(false);
      });
    }
  }, [inputValue]);

  return (
    <ComboBox
      label="Search Users"
      placeholder="Type to search..."
      options={options}
      inputValue={inputValue}
      onInputChange={setInputValue}
      isLoading={isLoading}
      allowsCustomValue
    />
  );
}
```

### Form Integration

```tsx
import { Select } from '@mono/components';

function MyForm() {
  return (
    <form>
      <Select
        name="country"
        label="Country"
        options={countryOptions}
        isRequired
        errorMessage="Please select a country"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Best Practices

1. **Use appropriate labels**: Always provide clear, descriptive labels
2. **Include descriptions**: Add helpful descriptions for complex options
3. **Handle loading states**: Show loading indicators for async operations
4. **Provide error feedback**: Use clear error messages for validation
5. **Consider accessibility**: Test with keyboard navigation and screen readers
6. **Optimize performance**: Use controlled state judiciously for large option lists
7. **Consistent sizing**: Use consistent size variants across your application

## Migration from HTML Select

Replace HTML select elements with these components for better styling control and accessibility:

```tsx
// Before
<select name="country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>

// After
<Select
  name="country"
  options={[
    { id: 'us', label: 'United States', value: 'us' },
    { id: 'uk', label: 'United Kingdom', value: 'uk' },
  ]}
/>
```
