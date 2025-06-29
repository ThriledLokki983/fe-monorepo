export const DemoDisclosureUsage = `import { Disclosure, DisclosurePanel, DisclosureGroup } from '@mono/components';

// Basic disclosure
<Disclosure title="System Requirements">
  <DisclosurePanel>
    <p>Details about system requirements here.</p>
  </DisclosurePanel>
</Disclosure>

// Different variants
<Disclosure variant="default" title="Default Disclosure">
  <DisclosurePanel>
    <p>Default styling with subtle background and border.</p>
  </DisclosurePanel>
</Disclosure>

<Disclosure variant="minimal" title="Minimal Disclosure">
  <DisclosurePanel>
    <p>Clean styling without borders.</p>
  </DisclosurePanel>
</Disclosure>

<Disclosure variant="bordered" title="Bordered Disclosure">
  <DisclosurePanel>
    <p>Distinct border and background styling.</p>
  </DisclosurePanel>
</Disclosure>

// Different sizes
<Disclosure size="small" title="Small Disclosure">
  <DisclosurePanel>
    <p>Compact size with smaller padding and text.</p>
  </DisclosurePanel>
</Disclosure>

<Disclosure size="large" title="Large Disclosure">
  <DisclosurePanel>
    <p>Larger size with generous padding.</p>
  </DisclosurePanel>
</Disclosure>

// Pre-expanded
<Disclosure title="Pre-expanded" defaultExpanded>
  <DisclosurePanel>
    <p>This starts expanded by default.</p>
  </DisclosurePanel>
</Disclosure>

// Controlled disclosure
const [isExpanded, setIsExpanded] = useState(false);

<Disclosure
  title="Controlled Disclosure"
  isExpanded={isExpanded}
  onExpandedChange={setIsExpanded}
>
  <DisclosurePanel>
    <p>This disclosure is controlled by external state.</p>
  </DisclosurePanel>
</Disclosure>

// Disabled state
<Disclosure title="Disabled" isDisabled>
  <DisclosurePanel>
    <p>This disclosure cannot be opened.</p>
  </DisclosurePanel>
</Disclosure>

// Without icon
<Disclosure title="No Icon" hideIcon>
  <DisclosurePanel>
    <p>This disclosure doesn't show the expand/collapse icon.</p>
  </DisclosurePanel>
</Disclosure>

// With custom icon
const CustomIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

<Disclosure title="Custom Icon" icon={<CustomIcon />}>
  <DisclosurePanel>
    <p>This disclosure uses a custom icon.</p>
  </DisclosurePanel>
</Disclosure>

// DISCLOSURE GROUP EXAMPLES

// Basic disclosure group (accordion behavior)
<DisclosureGroup>
  <Disclosure id="personal" title="Personal Information">
    <DisclosurePanel>
      <p>Personal information form here.</p>
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="billing" title="Billing Address">
    <DisclosurePanel>
      <p>Billing address form here.</p>
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="shipping" title="Shipping Preferences">
    <DisclosurePanel>
      <p>Shipping preferences here.</p>
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>

// Bordered variant (traditional accordion style)
<DisclosureGroup variant="bordered">
  <Disclosure id="faq1" title="How do I reset my password?">
    <DisclosurePanel>
      <p>Instructions for resetting your password.</p>
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="faq2" title="How do I contact support?">
    <DisclosurePanel>
      <p>Support contact information.</p>
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>

// Separated variant with multiple expanded items
<DisclosureGroup
  variant="separated"
  allowsMultipleExpanded
  defaultExpandedKeys={['feature1', 'feature2']}
>
  <Disclosure id="feature1" title="Advanced Analytics">
    <DisclosurePanel>
      <p>Analytics features and capabilities.</p>
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="feature2" title="Team Collaboration">
    <DisclosurePanel>
      <p>Collaboration tools and features.</p>
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="feature3" title="API Integration">
    <DisclosurePanel>
      <p>API integration options.</p>
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>

// Controlled disclosure group
const [expandedKeys, setExpandedKeys] = useState(new Set(['item1']));

<DisclosureGroup
  expandedKeys={expandedKeys}
  onExpandedChange={setExpandedKeys}
>
  <Disclosure id="item1" title="Controlled Item 1">
    <DisclosurePanel>
      <p>This group's state is controlled externally.</p>
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="item2" title="Controlled Item 2">
    <DisclosurePanel>
      <p>You can manage which items are expanded.</p>
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>

// Different sizes
<DisclosureGroup size="small" variant="bordered">
  <Disclosure id="small1" title="Small Group Item">
    <DisclosurePanel>
      <p>Compact spacing and sizing.</p>
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>

<DisclosureGroup size="large" variant="separated">
  <Disclosure id="large1" title="Large Group Item">
    <DisclosurePanel>
      <p>Generous spacing and larger text.</p>
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>

// Disabled group
<DisclosureGroup isDisabled>
  <Disclosure id="disabled1" title="Disabled Item">
    <DisclosurePanel>
      <p>All items in this group are disabled.</p>
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>`;
