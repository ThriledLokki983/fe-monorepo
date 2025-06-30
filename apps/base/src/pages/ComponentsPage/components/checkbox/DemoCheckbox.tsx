import React, { useState } from 'react';
import { Checkbox } from '@mono/components';
import styles from './DemoCheckbox.module.scss';

export const DemoCheckbox: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isIndeterminate, setIsIndeterminate] = useState(true);

  const features = ['notifications', 'updates', 'promotions'];

  const handleFeatureChange = (feature: string, isSelected: boolean) => {
    if (isSelected) {
      setCheckedItems(prev => [...prev, feature]);
    } else {
      setCheckedItems(prev => prev.filter(item => item !== feature));
    }
  };

  const isAllSelected = checkedItems.length === features.length;
  const isSomeSelected = checkedItems.length > 0 && checkedItems.length < features.length;

  return (
    <div className={styles.demoContainer}>
      <div className={styles.tabs}>
        <div className={styles.tabContent}>
          {/* Basic Examples */}
          <section className={styles.section}>
            <h3>Basic Examples</h3>
            <div className={styles.exampleGrid}>
              <div className={styles.example}>
                <h4>Default Checkbox</h4>
                <Checkbox>Subscribe to newsletter</Checkbox>
              </div>

              <div className={styles.example}>
                <h4>Checked by Default</h4>
                <Checkbox defaultSelected>
                  Accept terms and conditions
                </Checkbox>
              </div>

              <div className={styles.example}>
                <h4>Required Checkbox</h4>
                <Checkbox isRequired>
                  I agree to the privacy policy
                </Checkbox>
              </div>

              <div className={styles.example}>
                <h4>Without Label</h4>
                <Checkbox aria-label="Select this item" />
              </div>
            </div>
          </section>

          {/* Size Variants */}
          <section className={styles.section}>
            <h3>Size Variants</h3>
            <div className={styles.sizeGrid}>
              <div className={styles.sizeExample}>
                <Checkbox size="small">Small checkbox</Checkbox>
              </div>
              <div className={styles.sizeExample}>
                <Checkbox size="medium">Medium checkbox</Checkbox>
              </div>
              <div className={styles.sizeExample}>
                <Checkbox size="large">Large checkbox</Checkbox>
              </div>
            </div>
          </section>

          {/* States */}
          <section className={styles.section}>
            <h3>States</h3>
            <div className={styles.exampleGrid}>
              <div className={styles.example}>
                <h4>Disabled</h4>
                <div className={styles.stateGroup}>
                  <Checkbox isDisabled>Disabled unchecked</Checkbox>
                  <Checkbox isDisabled isSelected>Disabled checked</Checkbox>
                  <Checkbox isDisabled isIndeterminate>Disabled indeterminate</Checkbox>
                </div>
              </div>

              <div className={styles.example}>
                <h4>Read Only</h4>
                <div className={styles.stateGroup}>
                  <Checkbox isReadOnly>Read-only unchecked</Checkbox>
                  <Checkbox isReadOnly isSelected>Read-only checked</Checkbox>
                </div>
              </div>

              <div className={styles.example}>
                <h4>Invalid</h4>
                <Checkbox isInvalid>Invalid checkbox</Checkbox>
              </div>

              <div className={styles.example}>
                <h4>Indeterminate</h4>
                <Checkbox isIndeterminate>Indeterminate state</Checkbox>
              </div>
            </div>
          </section>

          {/* Variants */}
          <section className={styles.section}>
            <h3>Variants</h3>
            <div className={styles.exampleGrid}>
              <div className={styles.example}>
                <h4>Default</h4>
                <Checkbox variant="default" isSelected>Default variant</Checkbox>
              </div>

              <div className={styles.example}>
                <h4>Success</h4>
                <Checkbox variant="success" isSelected>Success variant</Checkbox>
              </div>

              <div className={styles.example}>
                <h4>Warning</h4>
                <Checkbox variant="warning" isSelected>Warning variant</Checkbox>
              </div>

              <div className={styles.example}>
                <h4>Error</h4>
                <Checkbox variant="error" isSelected>Error variant</Checkbox>
              </div>
            </div>
          </section>

          {/* Controlled Example */}
          <section className={styles.section}>
            <h3>Controlled Examples</h3>
            <div className={styles.exampleGrid}>
              <div className={styles.example}>
                <h4>Simple Controlled</h4>
                <div className={styles.controlledGroup}>
                  <Checkbox
                    isSelected={isSubscribed}
                    onChange={setIsSubscribed}
                  >
                    Newsletter subscription
                  </Checkbox>
                  <p className={styles.status}>
                    Status: {isSubscribed ? 'Subscribed' : 'Not subscribed'}
                  </p>
                </div>
              </div>

              <div className={styles.example}>
                <h4>Select All Pattern</h4>
                <div className={styles.selectAllGroup}>
                  <Checkbox
                    isSelected={isAllSelected}
                    isIndeterminate={isSomeSelected}
                    onChange={(selected: boolean) => {
                      if (selected) {
                        setCheckedItems([...features]);
                      } else {
                        setCheckedItems([]);
                      }
                    }}
                  >
                    Select all features
                  </Checkbox>

                  <div className={styles.subOptions}>
                    {features.map((feature) => (
                      <Checkbox
                        key={feature}
                        isSelected={checkedItems.includes(feature)}
                        onChange={(selected: boolean) => handleFeatureChange(feature, selected)}
                      >
                        {feature.charAt(0).toUpperCase() + feature.slice(1)}
                      </Checkbox>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.example}>
                <h4>Toggle Indeterminate</h4>
                <div className={styles.controlledGroup}>
                  <Checkbox
                    isIndeterminate={isIndeterminate}
                    onChange={() => setIsIndeterminate(!isIndeterminate)}
                  >
                    Toggle indeterminate state
                  </Checkbox>
                  <button
                    onClick={() => setIsIndeterminate(!isIndeterminate)}
                    className={styles.toggleButton}
                  >
                    Toggle: {isIndeterminate ? 'Indeterminate' : 'Normal'}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Form Integration */}
          <section className={styles.section}>
            <h3>Form Integration</h3>
            <div className={styles.example}>
              <h4>HTML Form</h4>
              <form className={styles.form}>
                <Checkbox name="terms" value="accepted" isRequired>
                  I accept the terms and conditions
                </Checkbox>
                <Checkbox name="newsletter" value="subscribe">
                  Subscribe to newsletter
                </Checkbox>
                <Checkbox name="marketing" value="allow">
                  Allow marketing communications
                </Checkbox>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
