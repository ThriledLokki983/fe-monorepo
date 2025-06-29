export const searchFieldUsageCode = `import { SearchField } from '@mono/components';

// Basic search field
<SearchField
  label="Search Products"
  placeholder="Enter search terms..."
/>

// Search with submit handler
<SearchField
  label="Search"
  placeholder="Type to search..."
  onSubmit={(value) => console.log('Searching for:', value)}
  onClear={() => console.log('Search cleared')}
/>

// Controlled search field
const [query, setQuery] = useState('');

<SearchField
  label="Search Users"
  value={query}
  onChange={setQuery}
  onSubmit={handleSearch}
/>

// Different sizes
<SearchField size="small" label="Small" placeholder="Small search" />
<SearchField size="medium" label="Medium" placeholder="Medium search" />
<SearchField size="large" label="Large" placeholder="Large search" />

// Search field with variants
<SearchField variant="success" label="Success" placeholder="Valid search" />
<SearchField variant="warning" label="Warning" placeholder="Check search" />
<SearchField variant="error" label="Error" placeholder="Invalid search" />

// Search field with description
<SearchField
  label="Product Search"
  placeholder="Search by name, SKU, or category"
  description="Use keywords to find products quickly"
/>

// Search field with validation
<SearchField
  label="User Search"
  isRequired
  isInvalid={query.length > 0 && query.length < 3}
  errorMessage="Search query must be at least 3 characters"
/>

// Disabled state
<SearchField
  label="Disabled Search"
  placeholder="This search is disabled"
  isDisabled
/>

// Read-only state
<SearchField
  label="Read-only Search"
  value="Current filter: Electronics"
  isReadOnly
/>

// Search without clear button
<SearchField
  label="Simple Search"
  placeholder="No clear button"
  showClearButton={false}
/>

// Custom clear button content
<SearchField
  label="Custom Clear"
  placeholder="Search with custom clear icon"
  clearButtonContent="🗑️"
/>

// Form integration
<SearchField
  name="productSearch"
  label="Product Search"
  autoComplete="off"
  onSubmit={(value) => {
    // Handle search submission
    window.location.href = '/search?q=' + encodeURIComponent(value);
  }}
/>

// Search without visible label
<SearchField
  placeholder="Search..."
  aria-label="Search the site"
  size="small"
/>

// Real-time search
<SearchField
  label="Live Search"
  placeholder="Results update as you type"
  onChange={handleLiveSearch}
  onClear={clearResults}
/>

// Advanced search with keyboard shortcuts
<SearchField
  label="Advanced Search"
  placeholder="Press Enter to search, Escape to clear"
  onSubmit={(value) => performSearch(value)}
  onClear={() => clearSearchResults()}
  description="Use Enter to search or Escape to clear"
/>
`;
