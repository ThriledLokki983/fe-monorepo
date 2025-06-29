import React, { useState } from 'react';
import { Breadcrumbs, Breadcrumb, Link } from '@mono/components';
import styles from './DemoBreadcrumbs.module.scss';

export const DemoBreadcrumbs: React.FC = () => {
  const [dynamicBreadcrumbs, setDynamicBreadcrumbs] = useState([
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'Products', href: '/products' },
    { id: 3, label: 'Electronics', href: '/products/electronics' },
    { id: 4, label: 'Laptops', href: '/products/electronics/laptops' },
    { id: 5, label: 'MacBook Pro', href: undefined }, // Current page
  ]);

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'dynamic' as const, label: 'Dynamic' },
    { key: 'navigation' as const, label: 'Navigation Landmark' },
    { key: 'states' as const, label: 'States' },
  ];

  const [activeTab, setActiveTab] = useState<typeof tabs[0]['key']>('basic');

  const handleBreadcrumbNavigation = (id: React.Key) => {
    const index = dynamicBreadcrumbs.findIndex(item => item.id === id);
    if (index !== -1) {
      setDynamicBreadcrumbs(dynamicBreadcrumbs.slice(0, index + 1));
    }
  };

  const resetBreadcrumbs = () => {
    setDynamicBreadcrumbs([
      { id: 1, label: 'Home', href: '/' },
      { id: 2, label: 'Products', href: '/products' },
      { id: 3, label: 'Electronics', href: '/products/electronics' },
      { id: 4, label: 'Laptops', href: '/products/electronics/laptops' },
      { id: 5, label: 'MacBook Pro', href: undefined },
    ]);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Breadcrumbs</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs>
                <Breadcrumb>
                  <Link href="/">Home</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/products">Products</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/products/electronics">Electronics</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link>Current Page</Link>
                </Breadcrumb>
              </Breadcrumbs>
            </div>

            <h4>Simple Navigation</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs>
                <Breadcrumb>
                  <Link href="/">Dashboard</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/users">Users</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link>Profile</Link>
                </Breadcrumb>
              </Breadcrumbs>
            </div>

            <h4>Deep Navigation</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs>
                <Breadcrumb>
                  <Link href="/">Home</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/docs">Documentation</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/docs/components">Components</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/docs/components/navigation">Navigation</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link>Breadcrumbs</Link>
                </Breadcrumb>
              </Breadcrumbs>
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Default Variant</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs variant="default">
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
            </div>

            <h4>Minimal Variant</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs variant="minimal">
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
            </div>

            <h4>Compact Variant</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs variant="compact">
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
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Small Size</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs size="small">
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
            </div>

            <h4>Medium Size (Default)</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs size="medium">
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
            </div>

            <h4>Large Size</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs size="large">
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
            </div>

            <h4>Size Comparison</h4>
            <div className={styles.sizeComparison}>
              <div className={styles.sizeExample}>
                <p>Small:</p>
                <Breadcrumbs size="small" variant="minimal">
                  <Breadcrumb><Link href="/">Home</Link></Breadcrumb>
                  <Breadcrumb><Link>Page</Link></Breadcrumb>
                </Breadcrumbs>
              </div>
              <div className={styles.sizeExample}>
                <p>Medium:</p>
                <Breadcrumbs size="medium" variant="minimal">
                  <Breadcrumb><Link href="/">Home</Link></Breadcrumb>
                  <Breadcrumb><Link>Page</Link></Breadcrumb>
                </Breadcrumbs>
              </div>
              <div className={styles.sizeExample}>
                <p>Large:</p>
                <Breadcrumbs size="large" variant="minimal">
                  <Breadcrumb><Link href="/">Home</Link></Breadcrumb>
                  <Breadcrumb><Link>Page</Link></Breadcrumb>
                </Breadcrumbs>
              </div>
            </div>
          </div>
        );

      case 'dynamic':
        return (
          <div className={styles.variantGroup}>
            <h4>Dynamic Breadcrumbs with Navigation</h4>
            <div className={styles.componentRow}>
              <div className={styles.dynamicControls}>
                <button onClick={resetBreadcrumbs} className={styles.resetButton}>
                  Reset Navigation
                </button>
              </div>
              <Breadcrumbs
                items={dynamicBreadcrumbs}
                onAction={handleBreadcrumbNavigation}
                variant="minimal"
              />
              <div className={styles.currentPath}>
                <strong>Current Path:</strong> {dynamicBreadcrumbs.map(item => item.label).join(' › ')}
              </div>
            </div>

            <h4>Dynamic with Different Variants</h4>
            <div className={styles.componentRow}>
              <div className={styles.variantDemo}>
                <p>Default:</p>
                <Breadcrumbs
                  items={dynamicBreadcrumbs.slice(0, 3)}
                  onAction={handleBreadcrumbNavigation}
                  variant="default"
                />
              </div>
              <div className={styles.variantDemo}>
                <p>Compact:</p>
                <Breadcrumbs
                  items={dynamicBreadcrumbs.slice(0, 3)}
                  onAction={handleBreadcrumbNavigation}
                  variant="compact"
                />
              </div>
            </div>
          </div>
        );

      case 'navigation':
        return (
          <div className={styles.variantGroup}>
            <h4>As Navigation Landmark</h4>
            <div className={styles.componentRow}>
              <div className={styles.landmarkInfo}>
                <p>When <code>isNavigationLandmark=true</code>, breadcrumbs are wrapped in a <code>&lt;nav&gt;</code> element with proper ARIA labeling for assistive technologies.</p>
              </div>
              <Breadcrumbs
                isNavigationLandmark
                navigationLabel="Page navigation breadcrumbs"
                variant="minimal"
              >
                <Breadcrumb>
                  <Link href="/">Home</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/components">Components</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/components/navigation">Navigation</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link>Breadcrumbs</Link>
                </Breadcrumb>
              </Breadcrumbs>
            </div>

            <h4>Custom Navigation Label</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs
                isNavigationLandmark
                navigationLabel="Product category navigation"
                variant="default"
              >
                <Breadcrumb>
                  <Link href="/">Store</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/electronics">Electronics</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/electronics/computers">Computers</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link>Gaming Laptops</Link>
                </Breadcrumb>
              </Breadcrumbs>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>Normal State</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs>
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
            </div>

            <h4>Disabled Breadcrumbs</h4>
            <div className={styles.componentRow}>
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
            </div>

            <h4>Individual Disabled Items</h4>
            <div className={styles.componentRow}>
              <Breadcrumbs>
                <Breadcrumb>
                  <Link href="/">Home</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link href="/restricted" isDisabled>Restricted Section</Link>
                </Breadcrumb>
                <Breadcrumb>
                  <Link>Accessible Page</Link>
                </Breadcrumb>
              </Breadcrumbs>
            </div>

            <h4>Interactive States</h4>
            <div className={styles.componentRow}>
              <div className={styles.stateDemo}>
                <p>Hover, focus, and press states are automatically handled by React Aria. Try interacting with the breadcrumb links below:</p>
                <Breadcrumbs variant="minimal">
                  <Breadcrumb>
                    <Link href="/">Hover me</Link>
                  </Breadcrumb>
                  <Breadcrumb>
                    <Link href="/focus">Focus with Tab</Link>
                  </Breadcrumb>
                  <Breadcrumb>
                    <Link>Current (not interactive)</Link>
                  </Breadcrumb>
                </Breadcrumbs>
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
        <div className={styles.tabPanel} key={activeTab}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default DemoBreadcrumbs;
