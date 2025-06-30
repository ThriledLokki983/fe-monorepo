export const switchUsageCode = `import { Switch } from '@mono/components';

// Basic switch
<Switch>
  Wi-Fi
</Switch>

// Controlled switch
const [isEnabled, setIsEnabled] = useState(false);

<Switch
  isSelected={isEnabled}
  onChange={setIsEnabled}
>
  Notifications
</Switch>

// Switch with different sizes
<Switch size="small">Small switch</Switch>
<Switch size="medium">Medium switch</Switch>
<Switch size="large">Large switch</Switch>

// Switch with variants
<Switch variant="success" isSelected>Success</Switch>
<Switch variant="warning" isSelected>Warning</Switch>
<Switch variant="error" isSelected>Error</Switch>

// Default selected
<Switch defaultSelected>
  Auto-save enabled
</Switch>

// Disabled states
<Switch isDisabled>Disabled switch</Switch>
<Switch isDisabled isSelected>Disabled selected</Switch>

// Read-only state
<Switch isReadOnly isSelected>
  Read-only switch
</Switch>

// Invalid state
<Switch isInvalid>
  Invalid switch
</Switch>

// Required switch
<Switch isRequired>
  Required setting
</Switch>

// Form integration
<Switch name="notifications" value="enabled">
  Email notifications
</Switch>

// Without label (using aria-label)
<Switch aria-label="Enable dark mode" />
`;
