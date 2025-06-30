export const DemoLinkUsage = `import { Link } from '@mono/components';

// Basic link with href
<Link href="https://example.com" target="_blank">
  External Link
</Link>

// Internal link
<Link href="/about">
  About Page
</Link>

// Different variants
<Link variant="primary" href="/home">
  Primary Link
</Link>

<Link variant="secondary" href="/docs">
  Secondary Link
</Link>

<Link variant="muted" href="/archive">
  Muted Link
</Link>

// Different sizes
<Link size="small" href="/small">Small Link</Link>
<Link size="medium" href="/medium">Medium Link</Link>
<Link size="large" href="/large">Large Link</Link>

// JavaScript handled link (no href)
<Link onPress={() => console.log('Link clicked!')}>
  JavaScript Link
</Link>

// Disabled link
<Link href="/disabled" isDisabled>
  Disabled Link
</Link>

// External link with indicator
<Link
  href="https://external.com"
  target="_blank"
  rel="noopener noreferrer"
  data-external="true"
>
  External Link with Icon
</Link>`;
