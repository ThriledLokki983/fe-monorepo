export const DemoButtonUsage = `
  import { Button } from '@mono/components';

  // Standard React pattern
  <Button variant="primary" size="medium" onClick={handleClick}>
    Click me
  </Button>

  // React Aria pattern (same component!)
  <Button variant="primary" size="medium" onPress={handlePress}>
    Press me
  </Button>

  // Supports both disabled patterns
  <Button disabled>Disabled (React)</Button>
  <Button isDisabled>Disabled (React Aria)</Button>

  // Available variants: 'primary' | 'secondary' | 'tertiary' | 'danger'
  // Available sizes: 'small' | 'medium' | 'large'
  // Built with React Aria for enhanced accessibility
`;
