import { useState } from 'react';
import { Slider } from '@mono/components';
import styles from './DemoSlider.module.scss';

type TabKey = 'basic' | 'types' | 'formatting' | 'sizes' | 'states' | 'advanced';

export const DemoSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [volume, setVolume] = useState(50);
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [quality, setQuality] = useState(7);

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'types' as const, label: 'Slider Types' },
    { key: 'formatting' as const, label: 'Value Formatting' },
    { key: 'sizes' as const, label: 'Sizes & Variants' },
    { key: 'states' as const, label: 'States' },
    { key: 'advanced' as const, label: 'Advanced' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Slider</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Volume"
                defaultValue={50}
                minValue={0}
                maxValue={100}
                step={1}
                description="Basic slider with default settings"
              />
            </div>

            <h4>Controlled Slider</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <Slider
                  label="Volume Level"
                  value={volume}
                  onChange={setVolume}
                  minValue={0}
                  maxValue={100}
                  step={5}
                  description="Adjust the volume level"
                />
                <div className={styles.status}>Current volume: {volume}%</div>
              </div>
            </div>

            <h4>With Step Increment</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Temperature"
                defaultValue={20}
                minValue={-10}
                maxValue={40}
                step={2.5}
                description="Temperature with 2.5° increments"
              />
            </div>

            <h4>Without Output Display</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Opacity"
                defaultValue={0.8}
                minValue={0}
                maxValue={1}
                step={0.1}
                showOutput={false}
                description="Slider without value display"
              />
            </div>
          </div>
        );

      case 'types':
        return (
          <div className={styles.variantGroup}>
            <h4>Single Value Slider</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Single Value"
                defaultValue={25}
                minValue={0}
                maxValue={100}
                description="Single thumb slider"
              />
            </div>

            <h4>Range Slider</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <Slider
                  label="Price Range"
                  value={priceRange}
                  onChange={setPriceRange}
                  minValue={0}
                  maxValue={100}
                  step={1}
                  thumbLabels={['Min Price', 'Max Price']}
                  formatOptions={{
                    style: 'currency',
                    currency: 'USD'
                  }}
                  description="Select your budget range"
                />
                <div className={styles.status}>
                  Range: ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>
            </div>

            <h4>Vertical Slider</h4>
            <div className={styles.componentRow}>
              <div className={styles.verticalContainer}>
                <Slider
                  label="Height"
                  defaultValue={150}
                  minValue={100}
                  maxValue={200}
                  orientation="vertical"
                  description="Vertical orientation slider"
                />
              </div>
            </div>
          </div>
        );

      case 'formatting':
        return (
          <div className={styles.variantGroup}>
            <h4>Currency Formatting</h4>
            <div className={styles.componentRow}>
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
                description="Set your monthly budget"
              />
            </div>

            <h4>Percentage Formatting</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Completion"
                defaultValue={0.65}
                minValue={0}
                maxValue={1}
                step={0.01}
                formatOptions={{
                  style: 'percent'
                }}
                description="Project completion percentage"
              />
            </div>

            <h4>Unit Formatting</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Distance"
                defaultValue={5}
                minValue={0}
                maxValue={10}
                step={0.5}
                formatOptions={{
                  style: 'unit',
                  unit: 'kilometer'
                }}
                description="Distance in kilometers"
              />
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Different Sizes</h4>
            <div className={styles.componentRow}>
              <div className={styles.sizeVariants}>
                <Slider
                  label="Small"
                  size="small"
                  defaultValue={25}
                  minValue={0}
                  maxValue={100}
                />
                <Slider
                  label="Medium"
                  size="medium"
                  defaultValue={50}
                  minValue={0}
                  maxValue={100}
                />
                <Slider
                  label="Large"
                  size="large"
                  defaultValue={75}
                  minValue={0}
                  maxValue={100}
                />
              </div>
            </div>

            <h4>Color Variants</h4>
            <div className={styles.componentRow}>
              <div className={styles.variants}>
                <Slider
                  label="Default"
                  variant="default"
                  defaultValue={50}
                  minValue={0}
                  maxValue={100}
                />
                <Slider
                  label="Success"
                  variant="success"
                  defaultValue={75}
                  minValue={0}
                  maxValue={100}
                />
                <Slider
                  label="Warning"
                  variant="warning"
                  defaultValue={60}
                  minValue={0}
                  maxValue={100}
                />
                <Slider
                  label="Error"
                  variant="error"
                  defaultValue={30}
                  minValue={0}
                  maxValue={100}
                />
              </div>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>Validation States</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <Slider
                  label="Quality Level"
                  value={quality}
                  onChange={setQuality}
                  minValue={1}
                  maxValue={10}
                  step={1}
                  isRequired
                  isInvalid={quality < 5}
                  errorMessage={quality < 5 ? "Quality must be at least 5" : undefined}
                  description="Select quality level from 1 to 10"
                />
                <div className={styles.status}>Quality: {quality}/10</div>
              </div>
            </div>

            <h4>Disabled State</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Disabled"
                defaultValue={40}
                minValue={0}
                maxValue={100}
                isDisabled
                description="This slider is disabled"
              />
            </div>

            <h4>Required Field</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Required Slider"
                defaultValue={0}
                minValue={0}
                maxValue={100}
                isRequired
                description="This field is required"
              />
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className={styles.variantGroup}>
            <h4>Vertical Range Slider</h4>
            <div className={styles.componentRow}>
              <div className={styles.verticalContainer}>
                <Slider
                  label="Temperature Range"
                  defaultValue={[18, 24]}
                  minValue={10}
                  maxValue={30}
                  orientation="vertical"
                  thumbLabels={['Min °C', 'Max °C']}
                  description="Comfortable temperature range"
                />
              </div>
            </div>

            <h4>Custom Thumb Labels</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Age Range"
                defaultValue={[25, 65]}
                minValue={18}
                maxValue={100}
                thumbLabels={['Minimum Age', 'Maximum Age']}
                description="Target age demographic"
              />
            </div>

            <h4>Fine-grained Control</h4>
            <div className={styles.componentRow}>
              <Slider
                label="Precision Value"
                defaultValue={0.123}
                minValue={0}
                maxValue={1}
                step={0.001}
                formatOptions={{
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3
                }}
                description="High precision decimal values"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.componentShowcase}>
      <div className={styles.tabContainer}>
        <div className={styles.tabList}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.tabPanel}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
