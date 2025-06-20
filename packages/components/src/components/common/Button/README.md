# Button Component

A flexible and customizable button component built with React Aria Components for enhanced accessibility and interaction states. Supports multiple variants, sizes, and states.

## Features

- ✅ Built with React Aria Components for accessibility
- ✅ Keyboard navigation and focus management
- ✅ Screen reader support
- ✅ Touch-friendly interactions
- ✅ Customizable variants and sizes
- ✅ Loading states with spinner
- ✅ Icon support (left and right)

## Usage

```tsx
import { Button } from '@mono/components';

// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="primary" size="lg">
  Primary Button
</Button>

// With icons
<Button leftIcon={<Icon name="plus" />}>
  Add Item
</Button>

// Loading state
<Button loading>
  Processing...
</Button>

// Disabled state (React Aria way)
<Button isDisabled>
  Disabled Button
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button |
| `loading` | `boolean` | `false` | Shows loading spinner and disables button |
| `leftIcon` | `ReactNode` | - | Icon to display before text |
| `rightIcon` | `ReactNode` | - | Icon to display after text |
| `children` | `ReactNode` | - | Button content |
| `className` | `string` | - | Additional CSS classes |

All standard HTML button attributes are also supported.

## Variants

- **default**: Standard button with neutral colors
- **primary**: Prominent button for primary actions
- **secondary**: Secondary button for less important actions
- **outline**: Button with transparent background and colored border
- **ghost**: Minimal button with no background
- **destructive**: Red button for destructive actions

## Accessibility

- Supports keyboard navigation
- Focus visible indicators
- Proper ARIA attributes
- Screen reader friendly loading states
