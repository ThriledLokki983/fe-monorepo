/**
 * Slider Component Usage Examples
 *
 * This file contains usage examples for the Slider component.
 * These examples demonstrate various ways to use the Slider component
 * and serve as both documentation and testing code snippets.
 */

export const DemoSliderUsage = `
// Basic Slider
import { Slider } from '@mono/components';

// Simple slider
<Slider
  label="Volume"
  defaultValue={50}
  minValue={0}
  maxValue={100}
/>

// Controlled Slider
function ControlledExample() {
  const [value, setValue] = useState(50);

  return (
    <Slider
      label="Controlled Slider"
      value={value}
      onChange={setValue}
      minValue={0}
      maxValue={100}
    />
  );
}

// Range Slider
import { RangeSlider } from '@mono/components';

<RangeSlider
  label="Price Range"
  defaultValue={[20, 80]}
  minValue={0}
  maxValue={100}
  thumbLabels={['Min Price', 'Max Price']}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>

// Currency formatting
<Slider
  label="Budget"
  defaultValue={1500}
  minValue={0}
  maxValue={5000}
  step={100}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>

// Percentage slider
<Slider
  label="Progress"
  defaultValue={0.65}
  minValue={0}
  maxValue={1}
  step={0.01}
  formatOptions={{
    style: 'percent'
  }}
/>

// Vertical orientation
<Slider
  label="Height"
  defaultValue={150}
  minValue={100}
  maxValue={200}
  orientation="vertical"
  formatOptions={{
    style: 'unit',
    unit: 'centimeter'
  }}
/>

// Different sizes
<Slider size="small" label="Small" defaultValue={25} />
<Slider size="medium" label="Medium" defaultValue={50} />
<Slider size="large" label="Large" defaultValue={75} />

// Color variants
<Slider variant="default" label="Default" defaultValue={50} />
<Slider variant="success" label="Success" defaultValue={75} />
<Slider variant="warning" label="Warning" defaultValue={60} />
<Slider variant="error" label="Error" defaultValue={30} />

// With validation
function ValidationExample() {
  const [quality, setQuality] = useState(3);
  const isInvalid = quality < 5;

  return (
    <Slider
      label="Quality Level"
      value={quality}
      onChange={setQuality}
      minValue={1}
      maxValue={10}
      step={1}
      isRequired
      isInvalid={isInvalid}
      errorMessage={isInvalid ? "Quality must be at least 5" : undefined}
      description="Select quality level from 1 to 10"
    />
  );
}

// Disabled state
<Slider
  label="Disabled"
  defaultValue={40}
  minValue={0}
  maxValue={100}
  isDisabled
  description="This slider is disabled"
/>

// Without output display
<Slider
  label="No Output"
  defaultValue={0.8}
  minValue={0}
  maxValue={1}
  step={0.1}
  showOutput={false}
  description="Slider without value display"
/>

// Custom step values
<Slider
  label="Custom Steps"
  defaultValue={25}
  minValue={0}
  maxValue={100}
  step={25}
  description="Steps of 25"
/>

// Multi-thumb range with custom labels
<RangeSlider
  label="Temperature Range"
  defaultValue={[18, 24]}
  minValue={10}
  maxValue={30}
  thumbLabels={['Minimum', 'Maximum']}
  formatOptions={{
    style: 'unit',
    unit: 'celsius'
  }}
  description="Comfortable temperature range"
/>

// Form integration
<form>
  <Slider
    name="volume"
    label="Audio Volume"
    defaultValue={50}
    minValue={0}
    maxValue={100}
    isRequired
  />

  <RangeSlider
    name="priceRange"
    label="Budget Range"
    defaultValue={[1000, 5000]}
    minValue={0}
    maxValue={10000}
    thumbLabels={['Min Budget', 'Max Budget']}
    formatOptions={{
      style: 'currency',
      currency: 'USD'
    }}
  />
</form>
`;
