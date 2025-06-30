import { useState } from 'react';
import { TextField } from '@mono/components';
import styles from './DemoTextField.module.scss';

type TabKey = 'basic' | 'validation' | 'sizes' | 'states' | 'multiline' | 'forms';

export const DemoTextField = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');

  // State for controlled examples
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  // Validation state
  const isValidEmail = email === '' || email.includes('@');
  const passwordsMatch = password === '' || confirmPassword === '' || password === confirmPassword;
  const isValidUsername = username.length >= 3;

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'validation' as const, label: 'Validation' },
    { key: 'sizes' as const, label: 'Sizes & Variants' },
    { key: 'states' as const, label: 'States' },
    { key: 'multiline' as const, label: 'Multi-line' },
    { key: 'forms' as const, label: 'Forms & Types' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Text Fields</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Full Name"
                  placeholder="Enter your full name"
                />

                <TextField
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                />

                <TextField
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  description="We'll use this for account verification"
                />
              </div>
            </div>

            <h4>Controlled Text Field</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Your Name"
                  value={name}
                  onChange={setName}
                  placeholder="Start typing..."
                />
                <div className={styles.status}>
                  Current value: "{name}"
                </div>
              </div>
            </div>

            <h4>With Description and Required</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Username"
                  placeholder="Choose a unique username"
                  description="Must be at least 3 characters long"
                  isRequired
                />
              </div>
            </div>
          </div>
        );

      case 'validation':
        return (
          <div className={styles.variantGroup}>
            <h4>Real-time Validation</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="Enter your email"
                  isInvalid={!isValidEmail}
                  errorMessage={!isValidEmail ? "Please enter a valid email address" : undefined}
                />

                <TextField
                  label="Username"
                  value={username}
                  onChange={setUsername}
                  placeholder="At least 3 characters"
                  isInvalid={username.length > 0 && !isValidUsername}
                  errorMessage={username.length > 0 && !isValidUsername ? "Username must be at least 3 characters" : undefined}
                />
              </div>
            </div>

            <h4>Password Confirmation</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={setPassword}
                  placeholder="Enter password"
                />

                <TextField
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  placeholder="Confirm password"
                  isInvalid={!passwordsMatch}
                  errorMessage={!passwordsMatch ? "Passwords do not match" : undefined}
                />
              </div>
            </div>

            <h4>Pattern Validation</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Postal Code"
                  pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                  placeholder="A1A 1A1"
                  description="Canadian postal code format"
                />
              </div>
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Different Sizes</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  size="small"
                  label="Small"
                  placeholder="Small text field"
                />
                <TextField
                  size="medium"
                  label="Medium"
                  placeholder="Medium text field"
                />
                <TextField
                  size="large"
                  label="Large"
                  placeholder="Large text field"
                />
              </div>
            </div>

            <h4>Color Variants</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  variant="default"
                  label="Default"
                  placeholder="Default variant"
                />
                <TextField
                  variant="success"
                  label="Success"
                  placeholder="Success variant"
                />
                <TextField
                  variant="warning"
                  label="Warning"
                  placeholder="Warning variant"
                />
                <TextField
                  variant="error"
                  label="Error"
                  placeholder="Error variant"
                />
              </div>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>Disabled State</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="System Generated Field"
                  value="AUTO-GEN-12345"
                  isDisabled
                />

                <TextField
                  label="Disabled Empty Field"
                  placeholder="This field is disabled"
                  isDisabled
                />
              </div>
            </div>

            <h4>Read-only State</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="User ID"
                  value="user_12345"
                  isReadOnly
                />

                <TextField
                  label="Account Type"
                  value="Premium Member"
                  isReadOnly
                  description="This value cannot be changed"
                />
              </div>
            </div>

            <h4>Required Field</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Required Field"
                  placeholder="This field is required"
                  isRequired
                />
              </div>
            </div>
          </div>
        );

      case 'multiline':
        return (
          <div className={styles.variantGroup}>
            <h4>Text Areas</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Message"
                  placeholder="Tell us what you think..."
                  isMultiline
                  rows={3}
                />

                <TextField
                  label="Description"
                  placeholder="Describe your project in detail..."
                  isMultiline
                  rows={5}
                  description="Provide as much detail as possible"
                />
              </div>
            </div>

            <h4>Controlled Text Area</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Your Message"
                  placeholder="Type your message here..."
                  isMultiline
                  rows={4}
                  value={message}
                  onChange={setMessage}
                  maxLength={500}
                />
                <div className={styles.status}>
                  Characters: {message.length}/500
                </div>
              </div>
            </div>
          </div>
        );

      case 'forms':
        return (
          <div className={styles.variantGroup}>
            <h4>Form Integration</h4>
            <div className={styles.formExample}>
              <div className={styles.formRow}>
                <TextField
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  autoComplete="given-name"
                  isRequired
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  autoComplete="family-name"
                  isRequired
                />
              </div>

              <TextField
                name="email"
                label="Email Address"
                type="email"
                placeholder="john.doe@example.com"
                autoComplete="email"
                isRequired
              />

              <TextField
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                autoComplete="tel"
              />

              <button type="submit" className={styles.submitButton}>
                Submit Form
              </button>
            </div>

            <h4>Different Input Types</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  label="Search"
                  type="search"
                  placeholder="Search products..."
                />

                <TextField
                  label="Password"
                  type="password"
                  placeholder="Enter secure password"
                />

                <TextField
                  label="Number"
                  type="number"
                  placeholder="Enter a number"
                  inputMode="numeric"
                />

                <TextField
                  label="URL"
                  type="url"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <h4>Without Visible Label</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <TextField
                  placeholder="Search..."
                  aria-label="Search the site"
                  size="small"
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
