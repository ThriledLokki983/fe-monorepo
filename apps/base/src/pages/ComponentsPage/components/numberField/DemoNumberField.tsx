import { useState } from 'react';
import { NumberField } from '@mono/components';
import styles from './DemoNumberField.module.scss';

type TabKey = 'basic' | 'formatting' | 'validation' | 'sizes' | 'states';

export const DemoNumberField = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [age, setAge] = useState<number>(25);
  const [price, setPrice] = useState<number>(29.99);
  const [discount, setDiscount] = useState<number>(0.15);
  const [quantity, setQuantity] = useState<number>(5);
  const [temperature, setTemperature] = useState<number>(20);

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'formatting' as const, label: 'Number Formatting' },
    { key: 'validation' as const, label: 'Validation' },
    { key: 'sizes' as const, label: 'Sizes & Variants' },
    { key: 'states' as const, label: 'States' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Number Field</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Age"
                placeholder="Enter your age"
                minValue={0}
                maxValue={120}
                description="Must be between 0 and 120"
              />
            </div>

            <h4>Controlled Number Field</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  label="Your Age"
                  value={age}
                  onChange={setAge}
                  minValue={0}
                  maxValue={120}
                  placeholder="Enter age"
                />
                <div className={styles.status}>
                  Current value: {age}
                </div>
              </div>
            </div>

            <h4>With Step Increment</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Temperature (°C)"
                value={temperature}
                onChange={setTemperature}
                step={0.5}
                minValue={-40}
                maxValue={60}
                placeholder="20.0"
                description="Temperature in Celsius with 0.5° increments"
              />
            </div>

            <h4>Without Stepper Buttons</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Custom Input"
                placeholder="Type numbers only"
                showStepperButtons={false}
                description="Input field without increment/decrement buttons"
              />
            </div>
          </div>
        );

      case 'formatting':
        return (
          <div className={styles.variantGroup}>
            <h4>Currency Values</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  label="Price (USD)"
                  value={price}
                  onChange={setPrice}
                  formatOptions={{
                    style: 'currency',
                    currency: 'USD'
                  }}
                  step={0.01}
                  minValue={0}
                />
                <div className={styles.status}>
                  Raw value: ${price}
                </div>
              </div>
            </div>

            <h4>Percentage Values</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  label="Discount Rate"
                  value={discount}
                  onChange={setDiscount}
                  formatOptions={{
                    style: 'percent'
                  }}
                  step={0.01}
                  minValue={0}
                  maxValue={1}
                />
                <div className={styles.status}>
                  Raw value: {discount}
                </div>
              </div>
            </div>

            <h4>Unit Values</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Distance"
                defaultValue={5}
                formatOptions={{
                  style: 'unit',
                  unit: 'kilometer',
                  unitDisplay: 'long'
                }}
                step={0.1}
                minValue={0}
                description="Distance in kilometers"
              />
            </div>

            <h4>Decimal Formatting</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Precise Value"
                defaultValue={3.14159}
                formatOptions={{
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 5
                }}
                step={0.001}
                description="Shows 2-5 decimal places"
              />
            </div>
          </div>
        );

      case 'validation':
        return (
          <div className={styles.variantGroup}>
            <h4>Required Field</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Required Quantity"
                placeholder="Enter quantity"
                isRequired
                minValue={1}
                description="This field is required"
              />
            </div>

            <h4>Range Validation</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  label="Quantity (1-100)"
                  value={quantity}
                  onChange={setQuantity}
                  minValue={1}
                  maxValue={100}
                  isInvalid={quantity > 50}
                  errorMessage={quantity > 50 ? "Quantity cannot exceed 50 for this item" : undefined}
                  description="Maximum 50 for special items"
                />
                <div className={styles.status}>
                  Current: {quantity} {quantity > 50 ? '(Invalid)' : '(Valid)'}
                </div>
              </div>
            </div>

            <h4>Step Validation</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Package Weight (kg)"
                step={0.5}
                minValue={0.5}
                maxValue={30}
                placeholder="0.5"
                description="Weight must be in 0.5kg increments"
              />
            </div>

            <h4>Custom Error Message</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Age Verification"
                minValue={18}
                maxValue={100}
                isRequired
                errorMessage="You must be at least 18 years old"
                description="Age verification required"
              />
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Different Sizes</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  size="small"
                  label="Small"
                  placeholder="Small number field"
                  defaultValue={123}
                />
                <NumberField
                  size="medium"
                  label="Medium"
                  placeholder="Medium number field"
                  defaultValue={456}
                />
                <NumberField
                  size="large"
                  label="Large"
                  placeholder="Large number field"
                  defaultValue={789}
                />
              </div>
            </div>

            <h4>Color Variants</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  variant="default"
                  label="Default"
                  placeholder="Default variant"
                  defaultValue={100}
                />
                <NumberField
                  variant="success"
                  label="Success"
                  placeholder="Success variant"
                  defaultValue={200}
                />
                <NumberField
                  variant="warning"
                  label="Warning"
                  placeholder="Warning variant"
                  defaultValue={300}
                />
                <NumberField
                  variant="error"
                  label="Error"
                  placeholder="Error variant"
                  defaultValue={400}
                />
              </div>
            </div>

            <h4>Custom Stepper Buttons</h4>
            <div className={styles.componentRow}>
              <NumberField
                label="Custom Icons"
                defaultValue={10}
                incrementButtonContent="▲"
                decrementButtonContent="▼"
                description="Custom increment/decrement icons"
              />
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>Disabled State</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  label="System Generated ID"
                  value={12345}
                  isDisabled
                  description="This value is automatically generated"
                />

                <NumberField
                  label="Disabled Empty Field"
                  placeholder="This field is disabled"
                  isDisabled
                />
              </div>
            </div>

            <h4>Read-only State</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  label="Order Total"
                  value={199.99}
                  formatOptions={{
                    style: 'currency',
                    currency: 'USD'
                  }}
                  isReadOnly
                  description="This value cannot be modified"
                />

                <NumberField
                  label="Item Count"
                  value={42}
                  isReadOnly
                  showStepperButtons={false}
                  description="Read-only without stepper buttons"
                />
              </div>
            </div>

            <h4>Invalid State</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  label="Out of Range"
                  value={150}
                  minValue={1}
                  maxValue={100}
                  isInvalid
                  errorMessage="Value must be between 1 and 100"
                />
              </div>
            </div>

            <h4>Mobile Input Modes</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <NumberField
                  label="Numeric Input"
                  inputMode="numeric"
                  placeholder="Numeric keyboard on mobile"
                  description="Shows numeric keypad on mobile devices"
                />
                <NumberField
                  label="Decimal Input"
                  inputMode="decimal"
                  step={0.01}
                  placeholder="Decimal keyboard on mobile"
                  description="Shows decimal keypad on mobile devices"
                />
              </div>
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
        <div className={styles.tabList} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls={`tab-panel-${tab.key}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className={styles.tabPanel}
          role="tabpanel"
          id={`tab-panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
