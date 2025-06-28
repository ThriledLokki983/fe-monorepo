export const DemoDialogUsage = `
  import {
    Dialog,
    DialogTrigger,
    AlertDialog,
    PopoverDialog,
    CompoundDialog,
    Button
  } from '@mono/components';

  // Basic Dialog
  <DialogTrigger trigger={<Button>Open Dialog</Button>}>
    <Dialog title="Welcome">
      <p>Dialog content here</p>
    </Dialog>
  </DialogTrigger>

  // Alert Dialog with actions
  <DialogTrigger trigger={<Button variant="danger">Delete</Button>}>
    <AlertDialog title="Confirm">
      {({ close }) => (
        <>
          <p>Are you sure?</p>
          <Button onPress={close}>Confirm</Button>
        </>
      )}
    </AlertDialog>
  </DialogTrigger>

  // Popover Dialog
  <PopoverDialog
    trigger={<Button>Help</Button>}
    dialogProps={{ title: "Help" }}
  >
    <p>Help content</p>
  </PopoverDialog>

  // Available sizes: 'small' | 'medium' | 'large' | 'fullscreen'
  // Full React Aria accessibility support
`;
