import { useState } from 'react';
import { componentDemos } from './demos/componentDemos';
import { Button } from '@mono/components';
import styles from './Components.module.scss';

type UsageTabKey = 'usage' | 'props';

export const Components = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>(componentDemos[0].name);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeUsageTab, setActiveUsageTab] = useState<UsageTabKey>('usage');

  const categories = ['all', 'buttons', 'forms', 'layout', 'feedback'];

  const filteredComponents = componentDemos.filter(
    demo => selectedCategory === 'all' || demo.category === selectedCategory
  );

  const selectedDemo = componentDemos.find(demo => demo.name === selectedComponent);

  const usageTabs = [
    { key: 'usage' as const, label: 'Usage Examples' },
    { key: 'props' as const, label: 'Props' },
  ];

  const renderUsageContent = () => {
    if (!selectedDemo) return null;

    switch (activeUsageTab) {
      case 'usage':
        return (
          <div className={styles.usageContent}>
            <h4>Basic Usage</h4>
            <div className={styles.usageExample}>
              <div className={styles.exampleDemo}>
                <Button variant="primary">Click me</Button>
              </div>
              <pre className={styles.codeBlock}>
{`<Button variant="primary">Click me</Button>`}
              </pre>
            </div>

            <h4>Button as Link</h4>
            <div className={styles.usageExample}>
              <div className={styles.exampleDemo}>
                <span style={{ color: '#6b7280', fontStyle: 'italic' }}>
                  Link examples coming soon...
                </span>
              </div>
              <pre className={styles.codeBlock}>
{`<Button variant="secondary" url="https://example.com">
  Visit Website
</Button>`}
              </pre>
            </div>

            <h4>Form Actions</h4>
            <div className={styles.usageExample}>
              <div className={styles.exampleDemo}>
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </div>
              <pre className={styles.codeBlock}>
{`<Button variant="secondary" type="button">
  Cancel
</Button>
<Button variant="primary" type="submit">
  Save Changes
</Button>`}
              </pre>
            </div>
          </div>
        );

      case 'props':
        return (
          <div className={styles.propsContent}>
            <h4>Button Mode (default)</h4>
            <table className={styles.propsTable}>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>variant</code></td>
                  <td><code>'primary' | 'secondary' | 'tertiary' | 'danger' | 'transparent'</code></td>
                  <td><code>'primary'</code></td>
                  <td>Visual style variant</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td><code>'small' | 'medium' | 'large'</code></td>
                  <td><code>'medium'</code></td>
                  <td>Size of the button</td>
                </tr>
                <tr>
                  <td><code>type</code></td>
                  <td><code>'button' | 'submit' | 'reset'</code></td>
                  <td><code>'button'</code></td>
                  <td>HTML button type</td>
                </tr>
                <tr>
                  <td><code>disabled</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Disables the button (standard React)</td>
                </tr>
                <tr>
                  <td><code>isDisabled</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Disables the button (React Aria)</td>
                </tr>
                <tr>
                  <td><code>onClick</code></td>
                  <td><code>{'() => void'}</code></td>
                  <td><code>-</code></td>
                  <td>Click handler (standard React)</td>
                </tr>
                <tr>
                  <td><code>onPress</code></td>
                  <td><code>{'() => void'}</code></td>
                  <td><code>-</code></td>
                  <td>Press handler (React Aria)</td>
                </tr>
              </tbody>
            </table>

            <h4>Link Mode (when url is provided)</h4>
            <table className={styles.propsTable}>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>url</code></td>
                  <td><code>string</code></td>
                  <td><code>-</code></td>
                  <td><strong>Required</strong> for link mode. The destination URL</td>
                </tr>
                <tr>
                  <td><code>target</code></td>
                  <td><code>'_blank' | '_self' | '_parent' | '_top'</code></td>
                  <td><code>'_self'</code></td>
                  <td>Where to open the link</td>
                </tr>
                <tr>
                  <td><code>rel</code></td>
                  <td><code>string</code></td>
                  <td><code>auto</code></td>
                  <td>Link relationship (auto-sets security for external links)</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.note}>
              <p><strong>Note:</strong> When <code>url</code> is provided, <code>type</code> prop is not available (links don't have a type).</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.componentsPage}>
      <div className={styles.sidebar}>
        <h2>Components</h2>

        <div className={styles.categoryFilter}>
          <h3>Categories</h3>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.componentList}>
          <h3>Components</h3>
          {filteredComponents.map(demo => (
            <button
              key={demo.name}
              className={`${styles.componentButton} ${
                selectedComponent === demo.name ? styles.active : ''
              }`}
              onClick={() => setSelectedComponent(demo.name)}
            >
              {demo.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.mainContent}>
        {selectedDemo && (
          <>
            <header className={styles.componentHeader}>
              <h1>{selectedDemo.name}</h1>
              <p className={styles.description}>{selectedDemo.description}</p>
            </header>

            <section className={styles.componentDemo}>
              <h2>Demo</h2>
              <div className={styles.demoContainer}>
                {selectedDemo.component}
              </div>
            </section>

            <section className={styles.usage}>
              <h2>Documentation</h2>
              <div className={styles.usageTabContainer}>
                <div className={styles.usageTabList} role="tablist">
                  {usageTabs.map((tab) => (
                    <button
                      key={tab.key}
                      className={`${styles.usageTab} ${activeUsageTab === tab.key ? styles.usageTabActive : ''}`}
                      onClick={() => setActiveUsageTab(tab.key)}
                      role="tab"
                      aria-selected={activeUsageTab === tab.key}
                      aria-controls={`usage-panel-${tab.key}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div
                  className={styles.usageTabPanel}
                  role="tabpanel"
                  id={`usage-panel-${activeUsageTab}`}
                  aria-labelledby={`usage-tab-${activeUsageTab}`}
                >
                  {renderUsageContent()}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};
