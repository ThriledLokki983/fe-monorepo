import { Select, Button } from '@mono/components';
import type { SelectOption } from '@mono/components';
import { useState } from 'react';
import styles from './DemoSelect.module.scss';

type TabKey = 'basic' | 'variants' | 'sizes' | 'states' | 'advanced';

const basicOptions: SelectOption[] = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 4, label: 'Option 4' },
  { id: 5, label: 'Option 5' },
];

const countryOptions: SelectOption[] = [
  { id: 'us', label: 'United States', value: 'us' },
  { id: 'ca', label: 'Canada', value: 'ca' },
  { id: 'uk', label: 'United Kingdom', value: 'uk' },
  { id: 'fr', label: 'France', value: 'fr' },
  { id: 'de', label: 'Germany', value: 'de' },
  { id: 'jp', label: 'Japan', value: 'jp' },
  { id: 'au', label: 'Australia', value: 'au' },
];

const priorityOptions: SelectOption[] = [
  { id: 'low', label: 'Low Priority', description: 'Handle when convenient' },
  { id: 'medium', label: 'Medium Priority', description: 'Handle within a few days' },
  { id: 'high', label: 'High Priority', description: 'Handle today' },
  { id: 'urgent', label: 'Urgent', description: 'Handle immediately' },
];

export const DemoSelect = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedCountry, setSelectedCountry] = useState<string | number | null>('us');
  const [selectedPriority, setSelectedPriority] = useState<string | number | null>('medium');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingToggle = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'states' as const, label: 'States' },
    { key: 'advanced' as const, label: 'Advanced' },
  ];

  const renderBasicUsage = () => (
    <div className={styles.section}>
      <h3>Basic Select</h3>
      <p>Simple select component with predefined options.</p>

      <div className={styles.examples}>
        <div className={styles.example}>
          <h4>Default Select</h4>
          <p>Basic select with default styling</p>
          <Select
            label="Choose an option"
            placeholder="Select an option..."
            options={basicOptions}
            defaultSelectedKey={2}
          />
        </div>

        <div className={styles.example}>
          <h4>With Description</h4>
          <p>Select with helper text</p>
          <Select
            label="Country"
            description="Select your country of residence"
            placeholder="Choose country..."
            options={countryOptions}
            selectedKey={selectedCountry}
            onSelectionChange={setSelectedCountry}
          />
        </div>

        <div className={styles.example}>
          <h4>Required Field</h4>
          <p>Select marked as required</p>
          <Select
            label="Priority Level"
            placeholder="Select priority..."
            options={priorityOptions}
            isRequired
            selectedKey={selectedPriority}
            onSelectionChange={setSelectedPriority}
          />
        </div>
      </div>

      <div className={styles.codeExample}>
        <pre>{`<Select
  label="Choose an option"
  placeholder="Select an option..."
  options={[
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
  ]}
  defaultSelectedKey={2}
/>`}</pre>
      </div>
    </div>
  );

  const renderVariants = () => (
    <div className={styles.section}>
      <h3>Style Variants</h3>
      <p>Different visual styles for various use cases.</p>

      <div className={styles.examples}>
        <div className={styles.example}>
          <h4>Default</h4>
          <p>Standard appearance</p>
          <Select
            label="Default"
            placeholder="Select..."
            options={basicOptions}
            variant="default"
          />
        </div>

        <div className={styles.example}>
          <h4>Filled</h4>
          <p>Filled background style</p>
          <Select
            label="Filled"
            placeholder="Select..."
            options={basicOptions}
            variant="filled"
          />
        </div>

        <div className={styles.example}>
          <h4>Outlined</h4>
          <p>Outlined border style</p>
          <Select
            label="Outlined"
            placeholder="Select..."
            options={basicOptions}
            variant="outlined"
          />
        </div>
      </div>

      <div className={styles.codeExample}>
        <pre>{`<Select
  label="Styled Select"
  variant="filled" // "default" | "filled" | "outlined"
  options={options}
/>`}</pre>
      </div>
    </div>
  );

  const renderSizes = () => (
    <div className={styles.section}>
      <h3>Sizes</h3>
      <p>Different sizes for various UI contexts.</p>

      <div className={styles.row}>
        <div className={styles.example}>
          <h4>Small</h4>
          <p>Compact size for tight spaces</p>
          <Select
            label="Small"
            placeholder="Select..."
            options={basicOptions}
            size="sm"
          />
        </div>

        <div className={styles.example}>
          <h4>Medium (Default)</h4>
          <p>Standard size for most use cases</p>
          <Select
            label="Medium"
            placeholder="Select..."
            options={basicOptions}
            size="md"
          />
        </div>

        <div className={styles.example}>
          <h4>Large</h4>
          <p>Larger size for emphasis</p>
          <Select
            label="Large"
            placeholder="Select..."
            options={basicOptions}
            size="lg"
          />
        </div>
      </div>

      <div className={styles.codeExample}>
        <pre>{`<Select
  label="Sized Select"
  size="lg" // "sm" | "md" | "lg"
  options={options}
/>`}</pre>
      </div>
    </div>
  );

  const renderStates = () => (
    <div className={styles.section}>
      <h3>Component States</h3>
      <p>Different states and interactions.</p>

      <div className={styles.examples}>
        <div className={styles.example}>
          <h4>Disabled</h4>
          <p>Select in disabled state</p>
          <Select
            label="Disabled Select"
            placeholder="Cannot select..."
            options={basicOptions}
            isDisabled
          />
        </div>

        <div className={styles.example}>
          <h4>Loading</h4>
          <p>Select showing loading state</p>
          <Select
            label="Loading Select"
            placeholder="Loading..."
            options={basicOptions}
            isLoading={isLoading}
          />
          <Button onPress={handleLoadingToggle} className={styles.toggleButton}>
            Toggle Loading
          </Button>
        </div>

        <div className={styles.example}>
          <h4>Error State</h4>
          <p>Select with validation error</p>
          <Select
            label="Error Select"
            placeholder="Select..."
            options={basicOptions}
            errorMessage="This field is required"
          />
        </div>

        <div className={styles.example}>
          <h4>Pre-selected</h4>
          <p>Select with a pre-selected value</p>
          <Select
            label="Pre-selected"
            options={basicOptions}
            defaultSelectedKey={2}
          />
        </div>
      </div>

      <div className={styles.codeExample}>
        <pre>{`<Select
  label="Stateful Select"
  isDisabled={false}
  isLoading={false}
  errorMessage="Error message"
  options={options}
/>`}</pre>
      </div>
    </div>
  );

  const renderAdvanced = () => (
    <div className={styles.section}>
      <h3>Advanced Features</h3>
      <p>Advanced functionality and customization options.</p>

      <div className={styles.examples}>
        <div className={styles.example}>
          <h4>Custom Descriptions</h4>
          <p>Options with descriptions</p>
          <Select
            label="Priority Level"
            placeholder="Select priority..."
            options={priorityOptions}
            selectedKey={selectedPriority}
            onSelectionChange={setSelectedPriority}
          />
        </div>

        <div className={styles.example}>
          <h4>Custom Styling</h4>
          <p>Select with custom className</p>
          <Select
            label="Custom Select"
            placeholder="Custom styled..."
            options={basicOptions}
            className="custom-select"
          />
        </div>

        <div className={styles.example}>
          <h4>Event Handling</h4>
          <p>Advanced event handling</p>
          <Select
            label="Event Select"
            placeholder="Select to see events..."
            options={countryOptions}
            onSelectionChange={(key: string | number | null) => {
              console.log('Selection changed:', key);
            }}
            onOpenChange={(isOpen: boolean) => {
              console.log('Open state changed:', isOpen);
            }}
          />
        </div>
      </div>

      <div className={styles.codeExample}>
        <pre>{`<Select
  label="Advanced Select"
  options={[
    {
      id: 'option1',
      label: 'Option 1',
      description: 'Detailed description',
      value: 'option1'
    }
  ]}
  onSelectionChange={(key) => console.log(key)}
  onOpenChange={(isOpen) => console.log(isOpen)}
  className="custom-class"
/>`}</pre>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return renderBasicUsage();
      case 'variants':
        return renderVariants();
      case 'sizes':
        return renderSizes();
      case 'states':
        return renderStates();
      case 'advanced':
        return renderAdvanced();
      default:
        return renderBasicUsage();
    }
  };

  return (
    <div className={styles.demo}>
      <h2 className={styles.title}>Select Component</h2>
      <p className={styles.description}>
        A versatile select component built with React Aria that provides accessible
        dropdown selection with support for custom options, loading states, validation,
        and multiple styling variants.
      </p>

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
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
