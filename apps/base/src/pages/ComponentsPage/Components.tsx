import { useState } from 'react';
import { componentDemos } from './demos/componentDemos';
import styles from './Components.module.scss';


export const Components = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>(componentDemos[0].name);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'buttons', 'forms', 'layout', 'feedback'];

  const filteredComponents = componentDemos.filter(
    demo => selectedCategory === 'all' || demo.category === selectedCategory
  );

  const selectedDemo = componentDemos.find(demo => demo.name === selectedComponent);

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
              <h2>Usage</h2>
              <pre className={styles.codeBlock}>
                <code>{selectedDemo.usage}</code>
              </pre>
            </section>
          </>
        )}
      </div>
    </div>
  );
};
