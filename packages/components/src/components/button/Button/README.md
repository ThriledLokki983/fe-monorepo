# Button Component

A versatile, accessible button component built on top of React Aria Components that can function as both a traditional button and a link.

## Features

- **Dual Functionality**: Can render as either a button or a link based on props
- **Multiple Variants**: Primary, Secondary, Tertiary, Danger, and Transparent styles
- **Three Sizes**: Small, Medium, and Large
- **Accessibility First**: Built with React Aria for excellent keyboard navigation and screen reader support
- **Event Handling**: Supports both React (`onClick`) and React Aria (`onPress`) patterns
- **Disabled States**: Multiple ways to disable the component
- **Link Support**: External links, internal links, and new tab functionality

## Installation

```bash
# The component is part of the @mono/components package
yarn add @mono/components
```

## Basic Usage

```tsx
import { Button } from '@mono/components';

// Basic button
<Button variant="primary">Click me</Button>

// Button as a link
<Button variant="secondary" url="https://example.com">
  Visit Website
</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

## Props

### Button Mode (default)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'transparent'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disables the button (standard React) |
| `isDisabled` | `boolean` | `false` | Disables the button (React Aria) |
| `onClick` | `() => void` | - | Click handler (standard React) |
| `onPress` | `() => void` | - | Press handler (React Aria) |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Button content |

### Link Mode (when `url` is provided)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | - | **Required** for link mode. The destination URL |
| `target` | `'_blank' \| '_self' \| '_parent' \| '_top'` | `'_self'` | Where to open the link |
| `rel` | `string` | auto | Link relationship (auto-sets security for external links) |

> **Note**: When `url` is provided, `type` prop is not available (links don't have a type).

## Variants

### Primary
The main call-to-action button with prominent styling.

```tsx
<Button variant="primary">Primary Action</Button>
```

### Secondary
A less prominent button for secondary actions.

```tsx
<Button variant="secondary">Secondary Action</Button>
```

### Tertiary
A subtle button for tertiary actions, often used for less important operations.

```tsx
<Button variant="tertiary">Tertiary Action</Button>
```

### Danger
For destructive or dangerous actions like deleting data.

```tsx
<Button variant="danger">Delete Item</Button>
```

### Transparent
A minimal button with no background or border, just text content.

```tsx
<Button variant="transparent">Transparent Button</Button>
```

## Sizes

```tsx
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
```

## Link Usage

### External Links

```tsx
<Button variant="primary" url="https://example.com">
  Visit Website
</Button>
```

### External Links (New Tab)

```tsx
<Button 
  variant="secondary" 
  url="https://example.com" 
  target="_blank"
>
  Open in New Tab
</Button>
```

### Internal Links

```tsx
<Button variant="tertiary" url="/dashboard">
  Go to Dashboard
</Button>
```

### Custom Link Relationship

```tsx
<Button 
  variant="primary" 
  url="https://example.com"
  rel="nofollow"
>
  External Link
</Button>
```

## Event Handling

The component supports both React and React Aria event patterns:

```tsx
// Standard React pattern
<Button onClick={() => console.log('Clicked!')}>
  React onClick
</Button>

// React Aria pattern (recommended)
<Button onPress={() => console.log('Pressed!')}>
  React Aria onPress
</Button>

// Both can be used together
<Button 
  onClick={() => console.log('onClick')}
  onPress={() => console.log('onPress')}
>
  Both Events
</Button>
```

## Disabled States

```tsx
// Standard React disabled
<Button disabled>Disabled Button</Button>

// React Aria disabled (recommended)
<Button isDisabled>Disabled Button</Button>

// Both can be used together
<Button disabled isDisabled>
  Really Disabled
</Button>

// Disabled link
<Button url="https://example.com" disabled>
  Disabled Link
</Button>
```

## Accessibility

The Button component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Proper ARIA attributes and announcements
- **Focus Management**: Visible focus indicators and proper focus handling
- **Disabled State**: Proper handling of disabled states for assistive technologies

### ARIA Props

```tsx
<Button 
  aria-label="Close dialog"
  aria-describedby="close-help"
>
  ×
</Button>

<Button 
  aria-labelledby="submit-label"
  aria-describedby="submit-description"
>
  Submit Form
</Button>
```

## Styling

The component uses CSS modules and design tokens for consistent styling across the application. The styles are automatically applied based on the variant and size props.

### Custom Styling

```tsx
<Button 
  variant="primary" 
  className="my-custom-button"
>
  Custom Styled Button
</Button>
```

## Examples

### Form Actions

```tsx
<div className="form-actions">
  <Button variant="secondary" type="button">
    Cancel
  </Button>
  <Button variant="primary" type="submit">
    Save Changes
  </Button>
</div>
```

### Navigation

```tsx
<nav>
  <Button variant="transparent" url="/home">Home</Button>
  <Button variant="transparent" url="/about">About</Button>
  <Button variant="primary" url="/contact">Contact</Button>
</nav>
```

### Destructive Actions

```tsx
<Button 
  variant="danger" 
  onPress={() => handleDelete()}
  size="small"
>
  Delete Item
</Button>
```

## Implementation Details

- Built on React Aria Components for maximum accessibility
- Uses React Aria's `Button` component for button mode
- Uses React Aria's `Link` component for link mode  
- Automatic security headers for external links (`rel="noopener noreferrer"`)
- TypeScript support with discriminated unions for type safety
- CSS-in-JS approach with design tokens for theming

## Browser Support

Supports all modern browsers and follows React Aria's browser compatibility guidelines.
