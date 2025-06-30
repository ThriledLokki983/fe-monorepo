import { useState } from 'react';
import { RadioGroup, Radio } from '@mono/components';
import styles from './DemoRadioGroup.module.scss';

type TabKey = 'basic' | 'controlled' | 'layout' | 'validation' | 'states' | 'forms';

export const DemoRadioGroup = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const [selectedPayment, setSelectedPayment] = useState<string>('credit');

  const tabs = [
    { key: 'basic' as const, label: 'Basic' },
    { key: 'controlled' as const, label: 'Controlled' },
    { key: 'layout' as const, label: 'Layout' },
    { key: 'validation' as const, label: 'Validation' },
    { key: 'states' as const, label: 'States' },
    { key: 'forms' as const, label: 'Form Integration' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.tabContent}>
            <div className={styles.variantGroup}>
              <h4>Basic RadioGroup</h4>
              <p>A simple radio group with basic options.</p>
              <RadioGroup label="Favorite sport">
                <Radio value="soccer">Soccer</Radio>
                <Radio value="baseball">Baseball</Radio>
                <Radio value="basketball">Basketball</Radio>
              </RadioGroup>
            </div>

            <div className={styles.variantGroup}>
              <h4>With Description</h4>
              <p>Radio group with helpful description text.</p>
              <RadioGroup
                label="Payment method"
                description="Choose your preferred payment method"
              >
                <Radio value="credit">Credit Card</Radio>
                <Radio value="debit">Debit Card</Radio>
                <Radio value="paypal">PayPal</Radio>
              </RadioGroup>
            </div>

            <div className={styles.variantGroup}>
              <h4>Different Sizes</h4>
              <p>Radio groups in different sizes.</p>
              <div className={styles.sizeGrid}>
                <div>
                  <h5>Small</h5>
                  <RadioGroup size="small" label="Small radio group">
                    <Radio value="option1">Option 1</Radio>
                    <Radio value="option2">Option 2</Radio>
                  </RadioGroup>
                </div>
                <div>
                  <h5>Medium (Default)</h5>
                  <RadioGroup size="medium" label="Medium radio group">
                    <Radio value="option1">Option 1</Radio>
                    <Radio value="option2">Option 2</Radio>
                  </RadioGroup>
                </div>
                <div>
                  <h5>Large</h5>
                  <RadioGroup size="large" label="Large radio group">
                    <Radio value="option1">Option 1</Radio>
                    <Radio value="option2">Option 2</Radio>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        );

      case 'controlled':
        return (
          <div className={styles.tabContent}>
            <div className={styles.variantGroup}>
              <h4>Controlled RadioGroup</h4>
              <p>Radio group with controlled state and change handler.</p>
              <RadioGroup
                label="Select option"
                value={selectedOption}
                onChange={setSelectedOption}
              >
                <Radio value="option1">Option 1</Radio>
                <Radio value="option2">Option 2</Radio>
                <Radio value="option3">Option 3</Radio>
              </RadioGroup>
              <div className={styles.stateDisplay}>
                <strong>Selected:</strong> {selectedOption}
              </div>
            </div>

            <div className={styles.variantGroup}>
              <h4>Default Selected</h4>
              <p>Radio group that starts with a default selection.</p>
              <RadioGroup
                label="Default selection"
                defaultValue="option2"
              >
                <Radio value="option1">Option 1</Radio>
                <Radio value="option2">Option 2 (Default)</Radio>
                <Radio value="option3">Option 3</Radio>
              </RadioGroup>
            </div>
          </div>
        );

      case 'layout':
        return (
          <div className={styles.tabContent}>
            <div className={styles.variantGroup}>
              <h4>Vertical Layout (Default)</h4>
              <p>Radio group with vertical orientation.</p>
              <RadioGroup
                label="Vertical options"
                orientation="vertical"
              >
                <Radio value="option1">First option</Radio>
                <Radio value="option2">Second option</Radio>
                <Radio value="option3">Third option</Radio>
              </RadioGroup>
            </div>

            <div className={styles.variantGroup}>
              <h4>Horizontal Layout</h4>
              <p>Radio group with horizontal orientation.</p>
              <RadioGroup
                label="Horizontal options"
                orientation="horizontal"
              >
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
                <Radio value="maybe">Maybe</Radio>
              </RadioGroup>
            </div>
          </div>
        );

      case 'validation':
        return (
          <div className={styles.tabContent}>
            <div className={styles.variantGroup}>
              <h4>Required RadioGroup</h4>
              <p>Radio group with validation and error messages.</p>
              <RadioGroup
                label="Terms and conditions"
                isRequired
                errorMessage="You must select an option to continue"
              >
                <Radio value="accept">I accept the terms</Radio>
                <Radio value="decline">I decline the terms</Radio>
              </RadioGroup>
            </div>

            <div className={styles.variantGroup}>
              <h4>Invalid State</h4>
              <p>Radio group with validation error styling.</p>
              <RadioGroup
                label="Invalid selection"
                isInvalid
                errorMessage="This selection is not valid"
                value="invalid"
              >
                <Radio value="valid">Valid option</Radio>
                <Radio value="invalid">Invalid option</Radio>
                <Radio value="another">Another option</Radio>
              </RadioGroup>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.tabContent}>
            <div className={styles.variantGroup}>
              <h4>Disabled Group</h4>
              <p>Entire radio group disabled.</p>
              <RadioGroup
                label="Disabled group"
                isDisabled
                defaultValue="option1"
              >
                <Radio value="option1">Option 1</Radio>
                <Radio value="option2">Option 2</Radio>
                <Radio value="option3">Option 3</Radio>
              </RadioGroup>
            </div>

            <div className={styles.variantGroup}>
              <h4>Individual Disabled Items</h4>
              <p>Some radio buttons disabled within the group.</p>
              <RadioGroup label="Mixed disabled states">
                <Radio value="available">Available option</Radio>
                <Radio value="disabled" isDisabled>Disabled option</Radio>
                <Radio value="another">Another available</Radio>
                <Radio value="also-disabled" isDisabled>Also disabled</Radio>
              </RadioGroup>
            </div>

            <div className={styles.variantGroup}>
              <h4>Read-only</h4>
              <p>Radio group in read-only mode.</p>
              <RadioGroup
                label="Read-only selection"
                isReadOnly
                value="readonly"
              >
                <Radio value="readonly">Read-only selected</Radio>
                <Radio value="other">Other option</Radio>
              </RadioGroup>
            </div>
          </div>
        );

      case 'forms':
        return (
          <div className={styles.tabContent}>
            <div className={styles.variantGroup}>
              <h4>Form Integration</h4>
              <p>Radio group within a form with proper form attributes.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <RadioGroup
                  label="Experience level"
                  name="experience"
                  description="Select your programming experience level"
                  value={selectedPayment}
                  onChange={setSelectedPayment}
                  isRequired
                >
                  <Radio value="beginner">Beginner (0-1 years)</Radio>
                  <Radio value="intermediate">Intermediate (2-4 years)</Radio>
                  <Radio value="advanced">Advanced (5-9 years)</Radio>
                  <Radio value="expert">Expert (10+ years)</Radio>
                </RadioGroup>

                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitButton}>
                    Submit Form
                  </button>
                  <button type="reset" className={styles.resetButton}>
                    Reset
                  </button>
                </div>
              </form>
            </div>

            <div className={styles.variantGroup}>
              <h4>Multiple Radio Groups in Form</h4>
              <p>Multiple radio groups with different names in one form.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <RadioGroup
                  label="Preferred contact method"
                  name="contact"
                  description="How would you like to be contacted?"
                >
                  <Radio value="email">Email</Radio>
                  <Radio value="phone">Phone</Radio>
                  <Radio value="sms">SMS</Radio>
                </RadioGroup>

                <RadioGroup
                  label="Newsletter frequency"
                  name="frequency"
                  description="How often would you like to receive updates?"
                >
                  <Radio value="daily">Daily</Radio>
                  <Radio value="weekly">Weekly</Radio>
                  <Radio value="monthly">Monthly</Radio>
                  <Radio value="never">Never</Radio>
                </RadioGroup>
              </form>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.tabContainer}>
        <div className={styles.tabList}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.key)}
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
