import React, { useState } from 'react';
import { CheckboxGroup, Checkbox } from '@mono/components';
import styles from './DemoCheckboxGroup.module.scss';

export const DemoCheckboxGroup: React.FC = () => {
  const [favoriteColors, setFavoriteColors] = useState<string[]>(['blue']);
  const [interests, setInterests] = useState<string[]>([]);
  const [requiredSelections, setRequiredSelections] = useState<string[]>([]);

  return (
    <div className={styles.demoContainer}>
      <div className={styles.tabs}>
        <div className={styles.tabContent}>
          {/* Basic Examples */}
          <section className={styles.section}>
            <h3>Basic Examples</h3>
            <div className={styles.exampleGrid}>
              <div className={styles.example}>
                <h4>Simple Checkbox Group</h4>
                <CheckboxGroup label="Favorite sports">
                  <Checkbox value="soccer">Soccer</Checkbox>
                  <Checkbox value="baseball">Baseball</Checkbox>
                  <Checkbox value="basketball">Basketball</Checkbox>
                  <Checkbox value="tennis">Tennis</Checkbox>
                </CheckboxGroup>
              </div>

              <div className={styles.example}>
                <h4>With Description</h4>
                <CheckboxGroup
                  label="Email preferences"
                  description="Choose which emails you'd like to receive"
                >
                  <Checkbox value="newsletter">Weekly newsletter</Checkbox>
                  <Checkbox value="updates">Product updates</Checkbox>
                  <Checkbox value="promotions">Special promotions</Checkbox>
                </CheckboxGroup>
              </div>

              <div className={styles.example}>
                <h4>Default Selected</h4>
                <CheckboxGroup
                  label="Default preferences"
                  defaultValue={['notifications', 'security']}
                >
                  <Checkbox value="notifications">Email notifications</Checkbox>
                  <Checkbox value="security">Security alerts</Checkbox>
                  <Checkbox value="marketing">Marketing emails</Checkbox>
                </CheckboxGroup>
              </div>

              <div className={styles.example}>
                <h4>Required Group</h4>
                <CheckboxGroup
                  label="Terms and conditions"
                  isRequired
                  errorMessage="You must accept at least one to continue"
                >
                  <Checkbox value="terms">I accept the terms of service</Checkbox>
                  <Checkbox value="privacy">I accept the privacy policy</Checkbox>
                  <Checkbox value="cookies">I accept cookie usage</Checkbox>
                </CheckboxGroup>
              </div>
            </div>
          </section>

          {/* Size Variants */}
          <section className={styles.section}>
            <h3>Size Variants</h3>
            <div className={styles.sizeGrid}>
              <div className={styles.sizeExample}>
                <CheckboxGroup size="small" label="Small group">
                  <Checkbox value="option1">Option 1</Checkbox>
                  <Checkbox value="option2">Option 2</Checkbox>
                </CheckboxGroup>
              </div>
              <div className={styles.sizeExample}>
                <CheckboxGroup size="medium" label="Medium group">
                  <Checkbox value="option1">Option 1</Checkbox>
                  <Checkbox value="option2">Option 2</Checkbox>
                </CheckboxGroup>
              </div>
              <div className={styles.sizeExample}>
                <CheckboxGroup size="large" label="Large group">
                  <Checkbox value="option1">Option 1</Checkbox>
                  <Checkbox value="option2">Option 2</Checkbox>
                </CheckboxGroup>
              </div>
            </div>
          </section>

          {/* Orientation */}
          <section className={styles.section}>
            <h3>Orientation</h3>
            <div className={styles.exampleGrid}>
              <div className={styles.example}>
                <h4>Vertical (Default)</h4>
                <CheckboxGroup
                  label="Vertical layout"
                  orientation="vertical"
                >
                  <Checkbox value="option1">Option 1</Checkbox>
                  <Checkbox value="option2">Option 2</Checkbox>
                  <Checkbox value="option3">Option 3</Checkbox>
                </CheckboxGroup>
              </div>

              <div className={styles.example}>
                <h4>Horizontal</h4>
                <CheckboxGroup
                  label="Horizontal layout"
                  orientation="horizontal"
                >
                  <Checkbox value="yes">Yes</Checkbox>
                  <Checkbox value="no">No</Checkbox>
                  <Checkbox value="maybe">Maybe</Checkbox>
                </CheckboxGroup>
              </div>
            </div>
          </section>

          {/* States */}
          <section className={styles.section}>
            <h3>States</h3>
            <div className={styles.exampleGrid}>
              <div className={styles.example}>
                <h4>Disabled</h4>
                <CheckboxGroup
                  label="Disabled group"
                  isDisabled
                  defaultValue={['option1']}
                >
                  <Checkbox value="option1">Option 1</Checkbox>
                  <Checkbox value="option2">Option 2</Checkbox>
                  <Checkbox value="option3">Option 3</Checkbox>
                </CheckboxGroup>
              </div>

              <div className={styles.example}>
                <h4>Read Only</h4>
                <CheckboxGroup
                  label="Read-only group"
                  isReadOnly
                  defaultValue={['option2']}
                >
                  <Checkbox value="option1">Option 1</Checkbox>
                  <Checkbox value="option2">Option 2</Checkbox>
                  <Checkbox value="option3">Option 3</Checkbox>
                </CheckboxGroup>
              </div>

              <div className={styles.example}>
                <h4>Invalid</h4>
                <CheckboxGroup
                  label="Invalid group"
                  isInvalid
                  errorMessage="Please select a valid option"
                >
                  <Checkbox value="option1">Option 1</Checkbox>
                  <Checkbox value="option2">Option 2</Checkbox>
                  <Checkbox value="option3">Option 3</Checkbox>
                </CheckboxGroup>
              </div>

              <div className={styles.example}>
                <h4>Individual Disabled Items</h4>
                <CheckboxGroup label="Mixed states">
                  <Checkbox value="available">Available option</Checkbox>
                  <Checkbox value="disabled" isDisabled>Disabled option</Checkbox>
                  <Checkbox value="another">Another available</Checkbox>
                </CheckboxGroup>
              </div>
            </div>
          </section>

          {/* Controlled Examples */}
          <section className={styles.section}>
            <h3>Controlled Examples</h3>
            <div className={styles.exampleGrid}>
              <div className={styles.example}>
                <h4>Controlled Colors</h4>
                <div className={styles.controlledGroup}>
                  <CheckboxGroup
                    label="Favorite colors"
                    value={favoriteColors}
                    onChange={setFavoriteColors}
                    description="Select your favorite colors"
                  >
                    <Checkbox value="red">Red</Checkbox>
                    <Checkbox value="blue">Blue</Checkbox>
                    <Checkbox value="green">Green</Checkbox>
                    <Checkbox value="yellow">Yellow</Checkbox>
                  </CheckboxGroup>
                  <p className={styles.status}>
                    Selected: {favoriteColors.length > 0 ? favoriteColors.join(', ') : 'None'}
                  </p>
                </div>
              </div>

              <div className={styles.example}>
                <h4>Interests</h4>
                <div className={styles.controlledGroup}>
                  <CheckboxGroup
                    label="Your interests"
                    value={interests}
                    onChange={setInterests}
                    orientation="horizontal"
                  >
                    <Checkbox value="technology">Technology</Checkbox>
                    <Checkbox value="design">Design</Checkbox>
                    <Checkbox value="music">Music</Checkbox>
                    <Checkbox value="sports">Sports</Checkbox>
                    <Checkbox value="travel">Travel</Checkbox>
                  </CheckboxGroup>
                  <p className={styles.status}>
                    You selected {interests.length} interest{interests.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              <div className={styles.example}>
                <h4>Required with Validation</h4>
                <div className={styles.controlledGroup}>
                  <CheckboxGroup
                    label="Required agreements"
                    value={requiredSelections}
                    onChange={setRequiredSelections}
                    isRequired
                    isInvalid={requiredSelections.length === 0}
                    errorMessage={requiredSelections.length === 0 ? "Please accept at least one agreement" : undefined}
                  >
                    <Checkbox value="terms">Terms of Service</Checkbox>
                    <Checkbox value="privacy">Privacy Policy</Checkbox>
                    <Checkbox value="newsletter">Newsletter (optional)</Checkbox>
                  </CheckboxGroup>
                  <button
                    className={styles.submitButton}
                    disabled={requiredSelections.length === 0}
                  >
                    Submit {requiredSelections.length === 0 && '(Missing required)'}
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
                <CheckboxGroup
                  label="Programming languages"
                  name="languages"
                  description="Select the languages you know"
                >
                  <Checkbox value="javascript">JavaScript</Checkbox>
                  <Checkbox value="typescript">TypeScript</Checkbox>
                  <Checkbox value="python">Python</Checkbox>
                  <Checkbox value="rust">Rust</Checkbox>
                  <Checkbox value="go">Go</Checkbox>
                </CheckboxGroup>

                <CheckboxGroup
                  label="Frameworks"
                  name="frameworks"
                  orientation="horizontal"
                >
                  <Checkbox value="react">React</Checkbox>
                  <Checkbox value="vue">Vue</Checkbox>
                  <Checkbox value="angular">Angular</Checkbox>
                  <Checkbox value="svelte">Svelte</Checkbox>
                </CheckboxGroup>

                <CheckboxGroup
                  label="Experience level"
                  name="experience"
                  isRequired
                >
                  <Checkbox value="beginner">Beginner (0-1 years)</Checkbox>
                  <Checkbox value="intermediate">Intermediate (2-5 years)</Checkbox>
                  <Checkbox value="senior">Senior (5+ years)</Checkbox>
                </CheckboxGroup>

                <button type="submit" className={styles.submitButton}>
                  Submit Form
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
