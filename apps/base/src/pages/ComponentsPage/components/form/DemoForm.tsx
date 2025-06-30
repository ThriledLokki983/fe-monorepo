import React, { useState } from 'react';
import { Form, TextField, Button } from '@mono/components';
import styles from './DemoForm.module.scss';

type TabKey = 'basic' | 'validation' | 'variants' | 'advanced';

interface FormData {
  [key: string]: FormDataEntryValue;
}

export const DemoForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'validation' as const, label: 'Validation' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'advanced' as const, label: 'Advanced' },
  ];

  const handleBasicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data: FormData = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value;
    });

    setSubmittedData(data);
  };

  const handleValidationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data: FormData = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Simulate server-side validation
    const errors: Record<string, string> = {};
    if (!data.username || (data.username as string).length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    }
    if (!data.email || !(data.email as string).includes('@')) {
      errors.email = 'Please enter a valid email address';
    }
    if (!data.password || (data.password as string).length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors({});
      setSubmittedData(data);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setValidationErrors({});
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Form</h4>
            <div className={styles.componentRow}>
              <Form onSubmit={handleBasicSubmit} onReset={handleReset}>
                <TextField
                  name="name"
                  label="Full Name"
                  placeholder="Enter your full name"
                  isRequired
                />
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  isRequired
                />
                <TextField
                  name="message"
                  label="Message"
                  placeholder="Tell us what you think..."
                  isMultiline
                  rows={4}
                />
                <div className={styles.formActions}>
                  <Button type="submit">Submit</Button>
                  <Button type="reset" variant="secondary">Reset</Button>
                </div>
              </Form>
            </div>

            <h4>With Form Label and Description</h4>
            <div className={styles.componentRow}>
              <Form
                label="Contact Form"
                description="Please fill out all required fields to get in touch"
                onSubmit={handleBasicSubmit}
              >
                <TextField
                  name="subject"
                  label="Subject"
                  placeholder="What is this about?"
                  isRequired
                />
                <TextField
                  name="company"
                  label="Company"
                  placeholder="Your company name"
                />
                <div className={styles.formActions}>
                  <Button type="submit">Send Message</Button>
                </div>
              </Form>
            </div>

            {submittedData && (
              <div className={styles.result}>
                <h5>Form Submitted Successfully!</h5>
                <pre>{JSON.stringify(submittedData, null, 2)}</pre>
              </div>
            )}
          </div>
        );

      case 'validation':
        return (
          <div className={styles.variantGroup}>
            <h4>Client-side Validation</h4>
            <div className={styles.componentRow}>
              <Form validationBehavior="aria">
                <TextField
                  name="username"
                  label="Username"
                  placeholder="Enter username"
                  isRequired
                  validate={(value: string) => {
                    if (!value || value.length < 3) {
                      return 'Username must be at least 3 characters';
                    }
                    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                      return 'Username can only contain letters, numbers, and underscores';
                    }
                    return null;
                  }}
                />
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  isRequired
                  validate={(value: string) => {
                    if (!value || value.length < 6) {
                      return 'Password must be at least 6 characters';
                    }
                    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
                      return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
                    }
                    return null;
                  }}
                />
                <div className={styles.formActions}>
                  <Button type="submit">Create Account</Button>
                </div>
              </Form>
            </div>

            <h4>Server-side Validation</h4>
            <div className={styles.componentRow}>
              <Form
                validationErrors={validationErrors}
                onSubmit={handleValidationSubmit}
                onReset={handleReset}
              >
                <TextField
                  name="username"
                  label="Username"
                  placeholder="Choose a username"
                  isRequired
                />
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  isRequired
                />
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Choose a secure password"
                  isRequired
                />
                <div className={styles.formActions}>
                  <Button type="submit">Register</Button>
                  <Button type="reset" variant="secondary">Clear</Button>
                </div>
              </Form>
            </div>

            {Object.keys(validationErrors).length > 0 && (
              <div className={styles.errorDisplay}>
                <h5>Validation Errors:</h5>
                <ul>
                  {Object.entries(validationErrors).map(([field, error]) => (
                    <li key={field}><strong>{field}:</strong> {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Default Form</h4>
            <div className={styles.componentRow}>
              <Form onSubmit={handleBasicSubmit}>
                <TextField name="field1" label="Regular Field" placeholder="Default styling" />
                <div className={styles.formActions}>
                  <Button type="submit">Submit</Button>
                </div>
              </Form>
            </div>

            <h4>Card Variant</h4>
            <div className={styles.componentRow}>
              <Form variant="card" label="Settings Form" onSubmit={handleBasicSubmit}>
                <TextField name="field2" label="Card Field" placeholder="Card variant styling" />
                <TextField name="notifications" label="Notifications" placeholder="Enable notifications?" />
                <div className={styles.formActions}>
                  <Button type="submit">Save Settings</Button>
                </div>
              </Form>
            </div>

            <h4>Inline Variant</h4>
            <div className={styles.componentRow}>
              <Form variant="inline" onSubmit={handleBasicSubmit}>
                <TextField name="search" label="Search" placeholder="Enter search terms..." />
                <div className={styles.formActions}>
                  <Button type="submit">Search</Button>
                </div>
              </Form>
            </div>

            <h4>Different Sizes</h4>
            <div className={styles.componentRow}>
              <div className={styles.sizeDemo}>
                <Form size="small" variant="card" label="Small Form">
                  <TextField name="small_field" label="Small Field" placeholder="Small size" />
                  <div className={styles.formActions}>
                    <Button type="submit" size="small">Submit</Button>
                  </div>
                </Form>

                <Form size="medium" variant="card" label="Medium Form">
                  <TextField name="medium_field" label="Medium Field" placeholder="Medium size" />
                  <div className={styles.formActions}>
                    <Button type="submit">Submit</Button>
                  </div>
                </Form>

                <Form size="large" variant="card" label="Large Form">
                  <TextField name="large_field" label="Large Field" placeholder="Large size" />
                  <div className={styles.formActions}>
                    <Button type="submit" size="large">Submit</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className={styles.variantGroup}>
            <h4>Complex Form with Mixed Field Types</h4>
            <div className={styles.componentRow}>
              <Form
                variant="card"
                label="User Profile"
                description="Update your profile information"
                onSubmit={handleBasicSubmit}
                onReset={handleReset}
              >
                <div className={styles.fieldGroup}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    placeholder="John"
                    isRequired
                  />
                  <TextField
                    name="lastName"
                    label="Last Name"
                    placeholder="Doe"
                    isRequired
                  />
                </div>

                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  isRequired
                />

                <TextField
                  name="age"
                  label="Age"
                  type="number"
                  placeholder="25"
                />

                <TextField
                  name="bio"
                  label="Bio"
                  placeholder="Tell us about yourself..."
                  isMultiline
                  rows={4}
                />

                <TextField
                  name="newsletter"
                  label="Newsletter Subscription"
                  placeholder="Subscribe to newsletter? (yes/no)"
                />

                <TextField
                  name="terms"
                  label="Terms Agreement"
                  placeholder="I agree to terms (required)"
                  isRequired
                />

                <div className={styles.formActions}>
                  <Button type="submit">Update Profile</Button>
                  <Button type="reset" variant="secondary">Reset Form</Button>
                </div>
              </Form>
            </div>

            <h4>Loading and Disabled States</h4>
            <div className={styles.componentRow}>
              <div className={styles.stateDemo}>
                <Form variant="card" label="Loading Form" isLoading>
                  <TextField name="loading_field" label="Field" placeholder="Form is loading..." />
                  <div className={styles.formActions}>
                    <Button type="submit">Submit</Button>
                  </div>
                </Form>

                <Form variant="card" label="Disabled Form" isDisabled>
                  <TextField name="disabled_field" label="Field" placeholder="Form is disabled..." />
                  <div className={styles.formActions}>
                    <Button type="submit">Submit</Button>
                  </div>
                </Form>
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
