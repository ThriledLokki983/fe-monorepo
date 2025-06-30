import { useState } from 'react';
import { componentDemos } from './demos/componentDemos';
import { componentDocumentation } from './data/componentDocumentation';
import styles from './Components.module.scss';

type UsageTabKey = 'usage' | 'props';

export const Components = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>(componentDemos[0].name);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeUsageTab, setActiveUsageTab] = useState<UsageTabKey>('usage');

  const categories = ['all', 'buttons', 'forms', 'layout', 'feedback', 'overlays', 'navigation'];

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

    const documentation = componentDocumentation[selectedDemo.name];
    if (!documentation) return null;

    switch (activeUsageTab) {
      case 'usage':
        return (
          <div className={styles.usageContent}>
            {documentation.usageExamples.map((example, index) => (
              <div key={index}>
                <h4>{example.title}</h4>
                {example.description && (
                  <p className={styles.exampleDescription}>{example.description}</p>
                )}
                <div className={styles.usageExample}>
                  <pre className={styles.codeBlock}>
                    {example.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        );

      case 'props':
        return (
          <div className={styles.propsContent}>
            <h4>Props</h4>
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
                {documentation.props.map((prop, index) => (
                  <tr key={index}>
                    <td>
                      <code>{prop.name}</code>
                      {prop.required && <span className={styles.required}> *</span>}
                    </td>
                    <td><code>{prop.type}</code></td>
                    <td><code>{prop.defaultValue}</code></td>
                    <td>{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {documentation.notes && documentation.notes.length > 0 && (
              <div className={styles.notes}>
                <h4>Notes</h4>
                <ul>
                  {documentation.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
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
