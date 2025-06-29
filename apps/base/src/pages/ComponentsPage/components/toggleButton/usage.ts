export const usageExamples = {
  variants: `// ToggleButton Variants
import { ToggleButton } from '@mono/components';

export const ToggleButtonVariants = () => (
  <div className="toggle-variants">
    <ToggleButton variant="primary">
      Primary Toggle
    </ToggleButton>

    <ToggleButton variant="secondary">
      Secondary Toggle
    </ToggleButton>

    <ToggleButton variant="tertiary">
      Tertiary Toggle
    </ToggleButton>

    <ToggleButton variant="danger">
      Danger Toggle
    </ToggleButton>

    <ToggleButton variant="transparent">
      Transparent Toggle
    </ToggleButton>
  </div>
);`,

  sizes: `// ToggleButton Sizes
import { ToggleButton } from '@mono/components';

export const ToggleButtonSizes = () => (
  <div className="toggle-sizes">
    <ToggleButton size="small">
      Small Toggle
    </ToggleButton>

    <ToggleButton size="medium">
      Medium Toggle
    </ToggleButton>

    <ToggleButton size="large">
      Large Toggle
    </ToggleButton>
  </div>
);`,

  states: `// ToggleButton States
import { ToggleButton } from '@mono/components';
import { useState } from 'react';

export const ToggleButtonStates = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="toggle-states">
      <ToggleButton>
        Default State
      </ToggleButton>

      <ToggleButton isSelected={true}>
        Selected State
      </ToggleButton>

      <ToggleButton isDisabled={true}>
        Disabled State
      </ToggleButton>

      <ToggleButton isDisabled={true} isSelected={true}>
        Disabled + Selected
      </ToggleButton>

      <ToggleButton
        isSelected={isPressed}
        onChange={setIsPressed}
      >
        Controlled State
      </ToggleButton>
    </div>
  );
};`,

  events: `// ToggleButton Events
import { ToggleButton } from '@mono/components';
import { useState } from 'react';

export const ToggleButtonEvents = () => {
  const [eventLog, setEventLog] = useState<string[]>([]);

  const handleToggle = (isPressed: boolean) => {
    const timestamp = new Date().toLocaleTimeString();
    const message = \`\${timestamp}: Toggle \${isPressed ? 'pressed' : 'released'}\`;
    setEventLog(prev => [message, ...prev.slice(0, 4)]);
  };

  const handlePress = () => {
    const timestamp = new Date().toLocaleTimeString();
    setEventLog(prev => [\`\${timestamp}: Button pressed\`, ...prev.slice(0, 4)]);
  };

  return (
    <div className="toggle-events">
      <ToggleButton
        onChange={handleToggle}
        onPress={handlePress}
      >
        Interactive Toggle
      </ToggleButton>

      <div className="event-log">
        {eventLog.map((log, index) => (
          <div key={index} className="event-item">{log}</div>
        ))}
      </div>
    </div>
  );
};`,

  basic: `// Basic ToggleButton Usage
import { ToggleButton } from '@mono/components';
import { useState } from 'react';

export const BasicToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <ToggleButton
      isSelected={isToggled}
      onChange={setIsToggled}
    >
      {isToggled ? 'ON' : 'OFF'}
    </ToggleButton>
  );
};`,

  advanced: `// Advanced ToggleButton Usage
import { ToggleButton } from '@mono/components';
import { useState } from 'react';

export const AdvancedToggleButton = () => {
  const [preferences, setPreferences] = useState({
    notifications: false,
    darkMode: true,
    autoSave: false
  });

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="preferences-panel">
      <ToggleButton
        variant="secondary"
        size="medium"
        isSelected={preferences.notifications}
        onChange={() => togglePreference('notifications')}
      >
        🔔 Notifications
      </ToggleButton>

      <ToggleButton
        variant="primary"
        size="medium"
        isSelected={preferences.darkMode}
        onChange={() => togglePreference('darkMode')}
      >
        🌙 Dark Mode
      </ToggleButton>

      <ToggleButton
        variant="tertiary"
        size="medium"
        isSelected={preferences.autoSave}
        onChange={() => togglePreference('autoSave')}
      >
        💾 Auto Save
      </ToggleButton>
    </div>
  );
};`
};

export const DemoToggleButtonUsage = `
  import { ToggleButton } from '@mono/components';
  import { useState } from 'react';

  // BASIC TOGGLE BUTTON
  // Simple toggle button with default state
  <ToggleButton variant="primary" size="medium">
    Toggle Me
  </ToggleButton>

  // CONTROLLED TOGGLE BUTTON
  // Control the selected state with React state
  const [isSelected, setIsSelected] = useState(false);

  <ToggleButton
    isSelected={isSelected}
    onChange={setIsSelected}
    variant="primary"
  >
    {isSelected ? 'ON' : 'OFF'}
  </ToggleButton>

  // VARIANTS
  // Available variants: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'transparent'
  <ToggleButton variant="primary">Primary</ToggleButton>
  <ToggleButton variant="secondary">Secondary</ToggleButton>
  <ToggleButton variant="tertiary">Tertiary</ToggleButton>
  <ToggleButton variant="danger">Danger</ToggleButton>
  <ToggleButton variant="transparent">Transparent</ToggleButton>

  // SIZES
  // Available sizes: 'small' | 'medium' | 'large'
  <ToggleButton size="small">Small</ToggleButton>
  <ToggleButton size="medium">Medium</ToggleButton>
  <ToggleButton size="large">Large</ToggleButton>

  // STATES
  // Different states with accessibility support
  <ToggleButton>Default State</ToggleButton>
  <ToggleButton isSelected={true}>Selected State</ToggleButton>
  <ToggleButton isDisabled={true}>Disabled State</ToggleButton>
  <ToggleButton isDisabled={true} isSelected={true}>Disabled + Selected</ToggleButton>

  // EVENT Handling
  // Full event handling with React Aria events
  <ToggleButton
    onChange={(isSelected) => console.log('Changed:', isSelected)}
    onPress={() => console.log('Pressed')}
    onPressStart={() => console.log('Press started')}
    onPressEnd={() => console.log('Press ended')}
    onFocus={() => console.log('Focused')}
    onBlur={() => console.log('Blurred')}
  >
    Event Toggle
  </ToggleButton>

  // ADVANCED USAGE
  // Multi-preference toggle system
  const [preferences, setPreferences] = useState({
    notifications: false,
    darkMode: true,
    autoSave: false
  });

  const togglePreference = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  <div className="preferences-panel">
    <ToggleButton
      variant="secondary"
      size="medium"
      isSelected={preferences.notifications}
      onChange={() => togglePreference('notifications')}
    >
      🔔 Notifications
    </ToggleButton>

    <ToggleButton
      variant="primary"
      size="medium"
      isSelected={preferences.darkMode}
      onChange={() => togglePreference('darkMode')}
    >
      🌙 Dark Mode
    </ToggleButton>

    <ToggleButton
      variant="tertiary"
      size="medium"
      isSelected={preferences.autoSave}
      onChange={() => togglePreference('autoSave')}
    >
      💾 Auto Save
    </ToggleButton>
  </div>

  // PROPS INTERFACE
  interface ToggleButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'transparent';
    size?: 'small' | 'medium' | 'large';
    isSelected?: boolean;
    defaultSelected?: boolean;
    onChange?: (isSelected: boolean) => void;
    isDisabled?: boolean;
    autoFocus?: boolean;
    children?: React.ReactNode;
    className?: string;
    id?: string;

    // React Aria ToggleButton Props
    onPress?: (e: PressEvent) => void;
    onPressStart?: (e: PressEvent) => void;
    onPressEnd?: (e: PressEvent) => void;
    onPressChange?: (isPressed: boolean) => void;
    onPressUp?: (e: PressEvent) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onFocusChange?: (isFocused: boolean) => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    onKeyUp?: (e: KeyboardEvent) => void;

    // HTML attributes
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'data-testid'?: string;
  }
`;
