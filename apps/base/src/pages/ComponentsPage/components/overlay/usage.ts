export const DemoOverlayUsage = `// Basic Overlay Usage
import { DialogTrigger, Popover, OverlayArrow } from 'react-aria-components';
import { Button } from '@mono/components';

// Simple Overlay
<DialogTrigger>
  <Button>Open Overlay</Button>
  <Popover className="overlay">
    <OverlayArrow>
      <svg width={12} height={12} viewBox="0 0 12 12">
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
    <div>Overlay content</div>
  </Popover>
</DialogTrigger>

// Overlay with Dialog for accessibility
<DialogTrigger>
  <Button>Settings</Button>
  <Popover className="overlay">
    <OverlayArrow>
      <svg width={12} height={12} viewBox="0 0 12 12">
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
    <Dialog>
      <h3>Settings</h3>
      <Switch>Wi-Fi</Switch>
      <Switch>Bluetooth</Switch>
    </Dialog>
  </Popover>
</DialogTrigger>

// Positioned Overlay
<DialogTrigger>
  <Button>Top Overlay</Button>
  <Popover placement="top" className="overlay">
    <OverlayArrow>
      <svg width={12} height={12} viewBox="0 0 12 12">
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
    <div>Positioned above</div>
  </Popover>
</DialogTrigger>

// Controlled Overlay
function ControlledExample() {
  const [isOpen, setOpen] = useState(false);
  const triggerRef = useRef(null);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Popover
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setOpen}
        className="overlay"
      >
        <div>Controlled content</div>
      </Popover>
    </>
  );
}

// CSS Classes (using design system tokens)
.overlay {
  background: var(--surface2);
  border: 1px solid color-mix(in srgb, var(--surface4) 60%, transparent);
  border-radius: var(--radius-lg);
  box-shadow: var(--rad-shadow);
  padding: var(--space-lg);
  max-width: 400px;
  z-index: var(--z-index-popover);
}
`;
