import { ComboBox } from '@mono/components';
import type { ComboBoxOption } from '@mono/components';
import { useState } from 'react';
import styles from './DemoComboBox.module.scss';

type TabKey = 'basic' | 'variants' | 'sizes' | 'states' | 'advanced';

const basicOptions: ComboBoxOption[] = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 4, label: 'Option 4' },
  { id: 5, label: 'Option 5' },
];

const advancedOptions: ComboBoxOption[] = [
  {
    id: 'premium',
    label: 'Premium Plan',
    description: 'Full access to all features',
    value: 'premium'
  },
  {
    id: 'basic',
    label: 'Basic Plan',
    description: 'Essential features only',
    value: 'basic'
  },
  {
    id: 'free',
    label: 'Free Plan',
    description: 'Limited features',
    value: 'free'
  },
];

const countryOptions: ComboBoxOption[] = [
  { id: 'us', label: 'United States', description: 'North America' },
  { id: 'uk', label: 'United Kingdom', description: 'Europe' },
  { id: 'ca', label: 'Canada', description: 'North America' },
  { id: 'fr', label: 'France', description: 'Europe' },
  { id: 'de', label: 'Germany', description: 'Europe' },
  { id: 'jp', label: 'Japan', description: 'Asia' },
  { id: 'au', label: 'Australia', description: 'Oceania' },
];

export const DemoComboBox = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedValue, setSelectedValue] = useState<string | number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [customFilterValue, setCustomFilterValue] = useState('');

  const tabs = [
    { key: 'basic' as const, label: 'Basic' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'states' as const, label: 'States' },
    { key: 'advanced' as const, label: 'Advanced' },
  ];

  const customFilter = (items: ComboBoxOption[], filterText: string) => {
    return items.filter(item =>
      item.label.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description?.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic ComboBox</h4>
            <div className={styles.componentColumn}>
              <ComboBox
                label="Choose an option"
                placeholder="Type to search..."
                options={basicOptions}
                onSelectionChange={(key) => console.log('Selected:', key)}
                className={styles.basicComboBox}
              />

              <ComboBox
                label="With description"
                description="This is a helpful description"
                placeholder="Start typing..."
                options={basicOptions}
              />

              <ComboBox
                label="Allow custom values"
                placeholder="Type anything..."
                options={basicOptions}
                allowsCustomValue
              />
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Style Variants</h4>
            <div className={styles.componentColumn}>
              <ComboBox
                label="Default variant"
                placeholder="Default style..."
                options={basicOptions}
                variant="default"
              />

              <ComboBox
                label="Filled variant"
                placeholder="Filled style..."
                options={basicOptions}
                variant="filled"
              />

              <ComboBox
                label="Outlined variant"
                placeholder="Outlined style..."
                options={basicOptions}
                variant="outlined"
              />
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Sizes</h4>
            <div className={styles.componentColumn}>
              <ComboBox
                label="Small size"
                placeholder="Small combobox..."
                options={basicOptions}
                size="sm"
              />

              <ComboBox
                label="Medium size (default)"
                placeholder="Medium combobox..."
                options={basicOptions}
                size="md"
              />

              <ComboBox
                label="Large size"
                placeholder="Large combobox..."
                options={basicOptions}
                size="lg"
              />
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>States</h4>
            <div className={styles.componentColumn}>
              <ComboBox
                label="Normal state"
                placeholder="Normal combobox..."
                options={basicOptions}
              />

              <ComboBox
                label="Required field"
                placeholder="Required combobox..."
                options={basicOptions}
                isRequired
              />

              <ComboBox
                label="Disabled state"
                placeholder="Disabled combobox..."
                options={basicOptions}
                isDisabled
              />

              <ComboBox
                label="With error"
                placeholder="Error state..."
                options={basicOptions}
                errorMessage="This field is required"
              />

              <ComboBox
                label="Loading state"
                placeholder="Loading..."
                options={basicOptions}
                isLoading
              />
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className={styles.variantGroup}>
            <h4>Advanced Features</h4>
            <div className={styles.componentColumn}>
              <div className={styles.example}>
                <h5>Controlled State</h5>
                <ComboBox
                  label="Controlled ComboBox"
                  placeholder="Controlled state..."
                  options={basicOptions}
                  selectedKey={selectedValue}
                  inputValue={inputValue}
                  onSelectionChange={setSelectedValue}
                  onInputChange={setInputValue}
                />
                <div className={styles.stateDisplay}>
                  <p>Selected: {selectedValue || 'None'}</p>
                  <p>Input: {inputValue || 'Empty'}</p>
                </div>
              </div>

              <div className={styles.example}>
                <h5>Custom Filter</h5>
                <ComboBox
                  label="Search countries"
                  description="Searches both name and region"
                  placeholder="Type country or region..."
                  options={countryOptions}
                  filter={customFilter}
                  inputValue={customFilterValue}
                  onInputChange={setCustomFilterValue}
                />
              </div>

              <div className={styles.example}>
                <h5>With Descriptions</h5>
                <ComboBox
                  label="Select plan"
                  placeholder="Choose your plan..."
                  options={advancedOptions}
                  variant="outlined"
                  size="lg"
                />
              </div>

              <div className={styles.example}>
                <h5>Default Selection</h5>
                <ComboBox
                  label="Pre-selected option"
                  placeholder="Default selected..."
                  options={basicOptions}
                  defaultSelectedKey={2}
                  defaultInputValue="Option 2"
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
          {tabs.map(tab => (
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
