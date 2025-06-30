# Dialog Component

A flexible, accessible dialog component built on top of React Aria Components. This component provides modal dialogs, popovers, and alert dialogs with complete keyboard navigation and screen reader support.

## Features

- **Accessibility**: Built on React Aria Components with full ARIA support
- **Flexible**: Multiple variants including modal dialogs, popovers, and alert dialogs
- **Focus Management**: Automatic focus management and restoration
- **Keyboard Navigation**: Full keyboard support including Escape to close
- **Customizable**: Multiple sizes, themes, and customization options
- **TypeScript**: Full TypeScript support with comprehensive type definitions

## Basic Usage

### Simple Dialog with Trigger

```tsx
import { DialogTrigger, Dialog, Button } from '@mono/components';

function MyComponent() {
  return (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <Dialog title="Welcome">
        <p>This is a simple dialog with a title and close button.</p>
      </Dialog>
    </DialogTrigger>
  );
}
```

### Alert Dialog

```tsx
import { DialogTrigger, AlertDialog, Button } from '@mono/components';

function DeleteConfirmation() {
  return (
    <DialogTrigger>
      <Button variant="danger">Delete</Button>
      <AlertDialog title="Confirm Deletion" size="small">
        {({ close }) => (
          <>
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <Button variant="secondary" onPress={close}>
                Cancel
              </Button>
              <Button variant="danger" onPress={close}>
                Delete
              </Button>
            </div>
          </>
        )}
      </AlertDialog>
    </DialogTrigger>
  );
}
```

### Popover Dialog

```tsx
import { PopoverDialog, Button } from '@mono/components';

function HelpPopover() {
  return (
    <PopoverDialog
      trigger={<Button variant="secondary">Help</Button>}
      dialogProps={{ title: "Help Information" }}
    >
      <p>This is helpful information displayed in a popover.</p>
    </PopoverDialog>
  );
}
```

### Compound Dialog (Convenience Component)

```tsx
import { CompoundDialog, Button } from '@mono/components';

function QuickDialog() {
  return (
    <CompoundDialog
      trigger={<Button>Quick Action</Button>}
      dialogProps={{ 
        title: "Quick Action", 
        size: "medium",
        showCloseButton: true 
      }}
      isDismissable={true}
    >
      <p>Quick dialog content with minimal setup.</p>
    </CompoundDialog>
  );
}
```

## Advanced Usage

### Controlled Dialog

```tsx
import { DialogTrigger, Dialog, Button } from '@mono/components';
import { useState } from 'react';

function ControlledDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogTrigger
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <Button>Open Controlled Dialog</Button>
      <Dialog
        title="Controlled Dialog"
        onClose={() => setIsOpen(false)}
      >
        <p>This dialog is controlled by external state.</p>
        <Button onPress={() => setIsOpen(false)}>
          Close from inside
        </Button>
      </Dialog>
    </DialogTrigger>
  );
}
```

### Custom Close Button

```tsx
import { Dialog, DialogTrigger, Button } from '@mono/components';
import { CustomCloseIcon } from './icons';

function CustomCloseDialog() {
  return (
    <DialogTrigger>
      <Button>Custom Close</Button>
      <Dialog
        title="Custom Close Button"
        closeButtonContent={<CustomCloseIcon />}
      >
        <p>This dialog has a custom close button icon.</p>
      </Dialog>
    </DialogTrigger>
  );
}
```

### Dialog with Form

```tsx
import { Dialog, DialogTrigger, Button } from '@mono/components';
import { TextField, Label, Input } from 'react-aria-components';

function FormDialog() {
  return (
    <DialogTrigger>
      <Button>Edit Profile</Button>
      <Dialog title="Edit Profile" size="large">
        {({ close }) => (
          <form onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
            close();
          }}>
            <TextField>
              <Label>Name</Label>
              <Input />
            </TextField>
            <TextField>
              <Label>Email</Label>
              <Input type="email" />
            </TextField>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <Button type="submit">Save</Button>
              <Button variant="secondary" onPress={close}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Dialog>
    </DialogTrigger>
  );
}
```

## API Reference

### Dialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode \| ({ close }: { close: () => void }) => ReactNode` | - | Content of the dialog |
| `title` | `string` | - | Title displayed in the dialog header |
| `size` | `'small' \| 'medium' \| 'large' \| 'fullscreen'` | `'medium'` | Size of the dialog |
| `role` | `'dialog' \| 'alertdialog'` | `'dialog'` | ARIA role of the dialog |
| `showCloseButton` | `boolean` | `true` | Whether to show the close button |
| `closeButtonContent` | `ReactNode` | `<X />` | Custom content for the close button |
| `onClose` | `() => void` | - | Handler called when dialog is closed |
| `className` | `string` | - | Additional CSS class name |

### DialogTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `ReactElement` | - | Element that triggers the dialog |
| `children` | `ReactNode` | - | Dialog content |
| `defaultOpen` | `boolean` | `false` | Whether dialog is initially open |
| `isOpen` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(isOpen: boolean) => void` | - | Handler for open state changes |
| `isDismissable` | `boolean` | `true` | Whether dialog can be dismissed |
| `isModal` | `boolean` | `true` | Whether to render as modal or popover |

## Styling

The Dialog component uses CSS modules for styling. You can customize the appearance by:

1. **CSS Custom Properties**: Override the CSS variables used by the component
2. **CSS Classes**: Target the component classes directly
3. **className Prop**: Add additional classes to the dialog

### CSS Classes

- `.dialog` - Main dialog container
- `.header` - Dialog header containing title and close button
- `.title` - Dialog title text
- `.closeButton` - Close button
- `.content` - Dialog content area
- `.footer` - Dialog footer (if needed)
- `.modalBackdrop` - Modal backdrop overlay
- `.popover` - Popover container
- `.alertDialog` - Alert dialog variant

### Size Classes

- `.small` - Small dialog (400px width)
- `.medium` - Medium dialog (500px width) 
- `.large` - Large dialog (700px width)
- `.fullscreen` - Fullscreen dialog (95vw x 90vh)

## Accessibility

This component follows WAI-ARIA guidelines:

- Proper focus management with focus trap
- Keyboard navigation support (Escape to close)
- Screen reader announcements
- ARIA roles and properties
- Focus restoration when dialog closes

## Examples

See the component in action in our Storybook documentation with interactive examples and code samples.
