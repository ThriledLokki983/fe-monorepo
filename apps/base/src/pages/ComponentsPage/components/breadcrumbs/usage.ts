export const DemoBreadcrumbsUsage = `import { Breadcrumbs, Breadcrumb, Link } from '@mono/components';

// Basic breadcrumbs
<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/products">Products</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Current Page</Link>
  </Breadcrumb>
</Breadcrumbs>

// Different variants
<Breadcrumbs variant="minimal">
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/docs">Documentation</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Breadcrumbs</Link>
  </Breadcrumb>
</Breadcrumbs>

<Breadcrumbs variant="compact">
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/category">Category</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Page</Link>
  </Breadcrumb>
</Breadcrumbs>

// Different sizes
<Breadcrumbs size="small">
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Page</Link>
  </Breadcrumb>
</Breadcrumbs>

<Breadcrumbs size="large">
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Page</Link>
  </Breadcrumb>
</Breadcrumbs>

// Dynamic breadcrumbs with navigation
const breadcrumbItems = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'Products', href: '/products' },
  { id: 3, label: 'Electronics', href: '/products/electronics' },
  { id: 4, label: 'Current Item' }, // No href for current page
];

const handleNavigation = (key) => {
  // Handle breadcrumb navigation
  console.log('Navigate to:', key);
};

<Breadcrumbs
  items={breadcrumbItems}
  onAction={handleNavigation}
/>

// As navigation landmark
<Breadcrumbs
  isNavigationLandmark
  navigationLabel="Page navigation"
>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/section">Section</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Current Page</Link>
  </Breadcrumb>
</Breadcrumbs>

// Disabled breadcrumbs
<Breadcrumbs isDisabled>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/category">Category</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Current Page</Link>
  </Breadcrumb>
</Breadcrumbs>

// Individual disabled items
<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/restricted" isDisabled>Restricted</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Current Page</Link>
  </Breadcrumb>
</Breadcrumbs>`;
