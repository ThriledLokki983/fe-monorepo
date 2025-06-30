export const textFieldUsageCode = `import { TextField } from '@mono/components';

// Basic text field
<TextField
  label="Full Name"
  placeholder="Enter your full name"
/>

// Email field with validation
<TextField
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  isRequired
/>

// Controlled text field
const [value, setValue] = useState('');

<TextField
  label="Username"
  value={value}
  onChange={setValue}
  placeholder="Choose a username"
/>

// Text field with description
<TextField
  label="Phone Number"
  type="tel"
  placeholder="(555) 123-4567"
  description="We'll use this for account verification"
/>

// Different sizes
<TextField size="small" label="Small" placeholder="Small input" />
<TextField size="medium" label="Medium" placeholder="Medium input" />
<TextField size="large" label="Large" placeholder="Large input" />

// Multi-line text area
<TextField
  label="Message"
  placeholder="Tell us what you think..."
  isMultiline
  rows={4}
/>

// Text field with variants
<TextField variant="success" label="Success" placeholder="Valid input" />
<TextField variant="warning" label="Warning" placeholder="Check this input" />
<TextField variant="error" label="Error" placeholder="Invalid input" />

// Password field
<TextField
  label="Password"
  type="password"
  placeholder="Enter a secure password"
  isRequired
/>

// Field with validation
<TextField
  label="Confirm Password"
  type="password"
  isInvalid={!passwordsMatch}
  errorMessage="Passwords do not match"
/>

// Disabled state
<TextField
  label="System Generated"
  value="AUTO-GEN-12345"
  isDisabled
/>

// Read-only state
<TextField
  label="User ID"
  value="user_12345"
  isReadOnly
/>

// Form integration
<TextField
  name="firstName"
  label="First Name"
  autoComplete="given-name"
  isRequired
/>

// Input with pattern validation
<TextField
  label="Postal Code"
  pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
  placeholder="A1A 1A1"
  description="Canadian postal code format"
/>

// Numeric input
<TextField
  label="Age"
  type="number"
  inputMode="numeric"
  min="0"
  max="120"
/>

// Search field
<TextField
  label="Search"
  type="search"
  placeholder="Search products..."
  aria-label="Search products"
/>

// Field without visible label
<TextField
  placeholder="Search..."
  aria-label="Search the site"
  size="small"
/>
`;
