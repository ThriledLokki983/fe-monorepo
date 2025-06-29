export const DemoToggleButtonGroupUsage = `
import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mono/components';

// Basic usage with default single selection
export const BasicToggleButtonGroup = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['center']);

  return (
    <ToggleButtonGroup
      selectedKeys={selectedKeys}
      onSelectionChange={(keys) => setSelectedKeys(Array.from(keys) as string[])}
    >
      <ToggleButton id="left">Left</ToggleButton>
      <ToggleButton id="center">Center</ToggleButton>
      <ToggleButton id="right">Right</ToggleButton>
    </ToggleButtonGroup>
  );
};

// Multiple selection mode
export const MultipleSelectionToggleButtonGroup = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['bold', 'italic']);

  return (
    <ToggleButtonGroup
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={(keys) => setSelectedKeys(Array.from(keys) as string[])}
    >
      <ToggleButton id="bold">Bold</ToggleButton>
      <ToggleButton id="italic">Italic</ToggleButton>
      <ToggleButton id="underline">Underline</ToggleButton>
    </ToggleButtonGroup>
  );
};

// Different variants
export const VariantToggleButtonGroups = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ToggleButtonGroup variant="default" defaultSelectedKeys={['option1']}>
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
      </ToggleButtonGroup>
    </div>
  );
};

// Different sizes
export const SizedToggleButtonGroups = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ToggleButtonGroup size="small" defaultSelectedKeys={['option1']}>
        <ToggleButton id="option1">Small</ToggleButton>
        <ToggleButton id="option2">Group</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup size="medium" defaultSelectedKeys={['option1']}>
        <ToggleButton id="option1">Medium</ToggleButton>
        <ToggleButton id="option2">Group</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup size="large" defaultSelectedKeys={['option1']}>
        <ToggleButton id="option1">Large</ToggleButton>
        <ToggleButton id="option2">Group</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

// Vertical orientation
export const VerticalToggleButtonGroup = () => {
  return (
    <ToggleButtonGroup
      orientation="vertical"
      selectionMode="multiple"
      defaultSelectedKeys={['option2']}
    >
      <ToggleButton id="option1">Top</ToggleButton>
      <ToggleButton id="option2">Middle</ToggleButton>
      <ToggleButton id="option3">Bottom</ToggleButton>
    </ToggleButtonGroup>
  );
};

// Disabled state
export const DisabledToggleButtonGroup = () => {
  return (
    <ToggleButtonGroup isDisabled defaultSelectedKeys={['option2']}>
      <ToggleButton id="option1">Option 1</ToggleButton>
      <ToggleButton id="option2">Option 2</ToggleButton>
      <ToggleButton id="option3">Option 3</ToggleButton>
    </ToggleButtonGroup>
  );
};

// With event handling
export const EventHandlingToggleButtonGroup = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [events, setEvents] = useState<string[]>([]);

  const handleSelectionChange = (keys: Set<string>) => {
    const keyArray = Array.from(keys);
    setSelectedKeys(keyArray);
    setEvents(prev => [...prev, \`Selection changed: \${keyArray.join(', ')}\`]);
  };

  const handleFocus = () => {
    setEvents(prev => [...prev, 'ToggleButtonGroup focused']);
  };

  const handleBlur = () => {
    setEvents(prev => [...prev, 'ToggleButtonGroup blurred']);
  };

  return (
    <div>
      <ToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <ToggleButton id="option1">Option 1</ToggleButton>
        <ToggleButton id="option2">Option 2</ToggleButton>
        <ToggleButton id="option3">Option 3</ToggleButton>
      </ToggleButtonGroup>
      
      <div style={{ marginTop: '1rem' }}>
        <h4>Events:</h4>
        <ul>
          {events.slice(-5).map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
`;
