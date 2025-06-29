export const DemoButtonUsage = `
  import { Button, ToggleButton, ToggleButtonGroup, FileTrigger } from '@mono/components';

  // BUTTON COMPONENT
  // Standard React pattern
  <Button variant="primary" size="medium" onClick={handleClick}>
    Click me
  </Button>

  // React Aria pattern (same component!)
  <Button variant="primary" size="medium" onPress={handlePress}>
    Press me
  </Button>

  // Available variants: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'transparent'
  // Available sizes: 'small' | 'medium' | 'large'

  // Link button
  <Button url="https://example.com" target="_blank">
    External Link
  </Button>

  // TOGGLE BUTTON COMPONENT
  // Basic toggle button
  <ToggleButton variant="primary" size="medium">
    Toggle Me
  </ToggleButton>

  // Controlled toggle button
  <ToggleButton
    isSelected={isSelected}
    onChange={setIsSelected}
  >
    Controlled Toggle
  </ToggleButton>

  // TOGGLE BUTTON GROUP COMPONENT
  // Single selection (default)
  <ToggleButtonGroup defaultSelectedKeys={['left']}>
    <ToggleButton id="left">Left</ToggleButton>
    <ToggleButton id="center">Center</ToggleButton>
    <ToggleButton id="right">Right</ToggleButton>
  </ToggleButtonGroup>

  // Multiple selection
  <ToggleButtonGroup
    selectionMode="multiple"
    variant="bordered"
  >
    <ToggleButton id="bold">Bold</ToggleButton>
    <ToggleButton id="italic">Italic</ToggleButton>
    <ToggleButton id="underline">Underline</ToggleButton>
  </ToggleButtonGroup>

  // FILE TRIGGER COMPONENT
  // Basic file selection
  <FileTrigger onSelect={handleFileSelect}>
    <Button>Select File</Button>
  </FileTrigger>

  // Multiple files with specific types
  <FileTrigger
    allowsMultiple
    acceptedFileTypes={['image/*', '.pdf']}
    onSelect={handleMultipleFiles}
  >
    <Button>Select Images or PDFs</Button>
  </FileTrigger>

  // Directory selection
  <FileTrigger
    acceptDirectory
    onSelect={handleDirectorySelect}
  >
    <Button>Select Directory</Button>
  </FileTrigger>

  // All components built with React Aria for enhanced accessibility
`;
