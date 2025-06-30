import { useState } from 'react';
import { SearchField } from '@mono/components';
import styles from './DemoSearchField.module.scss';

type TabKey = 'basic' | 'variants' | 'sizes' | 'states' | 'advanced';

export const DemoSearchField = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [liveSearchQuery, setLiveSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [submittedQuery, setSubmittedQuery] = useState<string>('');

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'states' as const, label: 'States' },
    { key: 'advanced' as const, label: 'Advanced Features' },
  ];

  // Mock search results for demo
  const mockResults = [
    'Apple iPhone 15 Pro',
    'Samsung Galaxy S24',
    'Google Pixel 8',
    'MacBook Pro M3',
    'iPad Air',
    'AirPods Pro',
    'Apple Watch Series 9',
    'Surface Pro 9'
  ];

  const handleLiveSearch = (query: string) => {
    setLiveSearchQuery(query);
    if (query.trim()) {
      const filtered = mockResults.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (value: string) => {
    setSubmittedQuery(value);
    console.log('Search submitted:', value);
  };

  const handleSearchClear = () => {
    setSearchResults([]);
    console.log('Search cleared');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Search Field</h4>
            <div className={styles.componentRow}>
              <SearchField
                label="Product Search"
                placeholder="Search for products..."
              />
            </div>

            <h4>Controlled Search Field</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <SearchField
                  label="Controlled Search"
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={setSearchQuery}
                  onSubmit={handleSearchSubmit}
                  onClear={handleSearchClear}
                />
                <div className={styles.status}>
                  Current value: "{searchQuery}"
                </div>
                {submittedQuery && (
                  <div className={styles.status}>
                    Last submitted: "{submittedQuery}"
                  </div>
                )}
              </div>
            </div>

            <h4>Search with Description</h4>
            <div className={styles.componentRow}>
              <SearchField
                label="User Search"
                placeholder="Enter username or email"
                description="Search by username, email, or display name"
              />
            </div>

            <h4>Required Search Field</h4>
            <div className={styles.componentRow}>
              <SearchField
                label="Required Search"
                placeholder="This field is required"
                isRequired
              />
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Color Variants</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <SearchField variant="default" label="Default" placeholder="Default search" />
                <SearchField variant="success" label="Success" placeholder="Success search" />
                <SearchField variant="warning" label="Warning" placeholder="Warning search" />
                <SearchField variant="error" label="Error" placeholder="Error search" />
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
                <SearchField size="small" label="Small" placeholder="Small search field" />
                <SearchField size="medium" label="Medium" placeholder="Medium search field" />
                <SearchField size="large" label="Large" placeholder="Large search field" />
              </div>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>Disabled State</h4>
            <div className={styles.componentRow}>
              <SearchField
                label="Disabled Search"
                placeholder="This search is disabled"
                isDisabled
              />
            </div>

            <h4>Read-only State</h4>
            <div className={styles.componentRow}>
              <SearchField
                label="Read-only Search"
                value="Current filter: Electronics"
                isReadOnly
              />
            </div>

            <h4>Invalid State</h4>
            <div className={styles.componentRow}>
              <SearchField
                label="Invalid Search"
                placeholder="Enter search query"
                isInvalid
                errorMessage="Search query must be at least 3 characters"
              />
            </div>

            <h4>Without Clear Button</h4>
            <div className={styles.componentRow}>
              <SearchField
                label="No Clear Button"
                placeholder="Search without clear button"
                showClearButton={false}
              />
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className={styles.variantGroup}>
            <h4>Live Search</h4>
            <div className={styles.componentRow}>
              <div className={styles.componentColumn}>
                <SearchField
                  label="Live Product Search"
                  placeholder="Search products as you type..."
                  value={liveSearchQuery}
                  onChange={handleLiveSearch}
                  onClear={() => {
                    setLiveSearchQuery('');
                    setSearchResults([]);
                  }}
                  description="Results appear as you type"
                />
                {searchResults.length > 0 && (
                  <div className={styles.searchResults}>
                    <strong>Search Results:</strong>
                    {searchResults.map((result, index) => (
                      <div key={index} className={styles.resultItem}>
                        {result}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <h4>Custom Clear Button</h4>
            <div className={styles.componentRow}>
              <SearchField
                label="Custom Clear Icon"
                placeholder="Search with custom clear button"
                clearButtonContent="🗑️"
              />
            </div>

            <h4>Form Integration</h4>
            <div className={styles.componentRow}>
              <form className={styles.formExample} onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                console.log('Form submitted with search:', formData.get('productSearch'));
              }}>
                <div className={styles.formGroup}>
                  <SearchField
                    name="productSearch"
                    label="Product Search"
                    placeholder="Search products..."
                    autoComplete="off"
                    description="Press Enter to search or use the button below"
                  />

                  <SearchField
                    name="categorySearch"
                    label="Category Filter"
                    placeholder="Filter by category..."
                    autoComplete="off"
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Search Products
                </button>
              </form>
            </div>

            <h4>Search Without Label</h4>
            <div className={styles.componentRow}>
              <SearchField
                placeholder="Search..."
                aria-label="Search the site"
                size="small"
              />
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
