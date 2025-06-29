export const formUsageCode = {
  basic: `import { Form, TextField, Button } from '@mono/components';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('Form data:', data);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <div>
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </div>
    </Form>
  );
}`,

  validation: `import { Form, TextField, Button } from '@mono/components';
import { useState } from 'react';

function ValidationForm() {
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Simulate server-side validation
    const errors = {};
    if (!data.username || data.username.length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    }
    if (!data.email || !data.email.includes('@')) {
      errors.email = 'Please enter a valid email address';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors({});
      // Process form submission
      console.log('Form submitted:', data);
    }
  };

  return (
    <Form
      validationErrors={validationErrors}
      onSubmit={handleSubmit}
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
      <Button type="submit">Register</Button>
    </Form>
  );
}`,

  variants: `import { Form, TextField, Button } from '@mono/components';

// Card variant with label and description
function CardForm() {
  return (
    <Form
      variant="card"
      label="Settings Form"
      description="Update your account settings"
    >
      <TextField name="displayName" label="Display Name" />
      <TextField name="bio" label="Bio" isMultiline rows={3} />
      <Button type="submit">Save Settings</Button>
    </Form>
  );
}

// Inline variant for search/filter forms
function InlineForm() {
  return (
    <Form variant="inline">
      <TextField
        name="search"
        label="Search"
        placeholder="Enter search terms..."
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}

// Different sizes
function SizedForms() {
  return (
    <>
      <Form size="small" variant="card">
        <TextField name="small_field" label="Small Field" />
        <Button type="submit" size="small">Submit</Button>
      </Form>

      <Form size="large" variant="card">
        <TextField name="large_field" label="Large Field" />
        <Button type="submit" size="large">Submit</Button>
      </Form>
    </>
  );
}`,

  advanced: `import { Form, TextField, Button } from '@mono/components';

function AdvancedForm() {
  return (
    <Form
      variant="card"
      label="User Profile"
      description="Update your profile information"
      validationBehavior="aria"
    >
      {/* Field grouping */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
        isMultiline
        rows={4}
      />

      <div>
        <Button type="submit">Update Profile</Button>
        <Button type="reset" variant="secondary">Reset Form</Button>
      </div>
    </Form>
  );
}

// Form with loading and disabled states
function StatefulForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <Form variant="card" label="Loading Form" isLoading={isLoading}>
        <TextField name="field" label="Field" />
        <Button type="submit">Submit</Button>
      </Form>

      <Form variant="card" label="Disabled Form" isDisabled={isDisabled}>
        <TextField name="field" label="Field" />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}`
};
