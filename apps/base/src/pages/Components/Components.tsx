import React, { useState } from 'react';
import { Button, Icon } from '@mono/components';
import { componentDemos } from '../ComponentsPage/demos/componentDemos';
import styles from './Components.module.scss';

// Note: This file is not currently being used by the routing.
// The actual Components page is at /ComponentsPage/Components.tsx

interface ComponentDemo {
  name: string;
  description: string;
  component: React.ReactNode;
  usage: string;
  category: 'buttons' | 'forms' | 'layout' | 'feedback';
}

// const componentDemos: ComponentDemo[] = [
//   {
//     name: 'Button',
//     description: 'A versatile button component built on React Aria with multiple variants and sizes. Provides enhanced accessibility with keyboard navigation and screen reader support.',
//     category: 'buttons',
//     component: (
//       <div className={styles.componentShowcase}>
//         <div className={styles.variantGroup}>
//           <h4>Variants</h4>
//           <div className={styles.componentRow}>
//             <Button variant="primary">Primary</Button>
//             <Button variant="secondary">Secondary</Button>
//             <Button variant="tertiary">Tertiary</Button>
//             <Button variant="danger">Danger</Button>
//           </div>
//         </div>
//         <div className={styles.variantGroup}>
//           <h4>Sizes</h4>
//           <div className={styles.componentRow}>
//             <Button size="small">Small</Button>
//             <Button size="medium">Medium</Button>
//             <Button size="large">Large</Button>
//           </div>
//         </div>
//         <div className={styles.variantGroup}>
//           <h4>States</h4>
//           <div className={styles.componentRow}>
//             <Button>Normal</Button>
//             <Button disabled>Disabled</Button>
//             <Button isDisabled>isDisabled (React Aria)</Button>
//           </div>
//         </div>
//         <div className={styles.variantGroup}>
//           <h4>Event Handling</h4>
//           <div className={styles.componentRow}>
//             <Button onClick={() => alert('onClick fired!')}>onClick (React)</Button>
//             <Button onPress={() => alert('onPress fired!')}>onPress (React Aria)</Button>
//           </div>
//         </div>
//         <div className={styles.variantGroup}>
//           <h4>Link Buttons</h4>
//           <div className={styles.componentRow}>
//             {/* Temporarily commenting out while fixing React Aria type compatibility */}
//             {/* <Button url="https://example.com" variant="primary">
//               External Link
//             </Button>
//             <Button url="https://example.com" variant="secondary" target="_blank">
//               Open in New Tab
//             </Button>
//             <Button url="/internal-page" variant="tertiary">
//               Internal Link
//             </Button>
//             <Button url="https://example.com" variant="danger" disabled>
//               Disabled Link
//             </Button> */}
//             <p>Link functionality temporarily disabled while fixing React Aria compatibility.</p>
//           </div>
//         </div>
//       </div>
//     ),
//     usage: `import { Button } from '@mono/components';

// // Standard React pattern
// <Button variant="primary" size="medium" onClick={handleClick}>
//   Click me
// </Button>

// // React Aria pattern (same component!)
// <Button variant="primary" size="medium" onPress={handlePress}>
//   Press me
// </Button>

// // Supports both disabled patterns
// <Button disabled>Disabled (React)</Button>
// <Button isDisabled>Disabled (React Aria)</Button>

// // Available variants: 'primary' | 'secondary' | 'tertiary' | 'danger'
// // Available sizes: 'small' | 'medium' | 'large'
// // Built with React Aria for enhanced accessibility`
//   },
//   {
//     name: 'Icon',
//     description: 'A simple icon component with predefined SVG icons.',
//     category: 'layout',
//     component: (
//       <div className={styles.componentShowcase}>
//         <div className={styles.variantGroup}>
//           <h4>Available Icons</h4>
//           <div className={styles.componentRow}>
//             <div className={styles.iconDemo}>
//               <Icon name="home" />
//               <span>home</span>
//             </div>
//             <div className={styles.iconDemo}>
//               <Icon name="user" />
//               <span>user</span>
//             </div>
//             <div className={styles.iconDemo}>
//               <Icon name="settings" />
//               <span>settings</span>
//             </div>
//             <div className={styles.iconDemo}>
//               <Icon name="heart" />
//               <span>heart</span>
//             </div>
//             <div className={styles.iconDemo}>
//               <Icon name="star" />
//               <span>star</span>
//             </div>
//           </div>
//         </div>
//         <div className={styles.variantGroup}>
//           <h4>Sizes</h4>
//           <div className={styles.componentRow}>
//             <Icon name="home" size={16} />
//             <Icon name="home" size={24} />
//             <Icon name="home" size={32} />
//             <Icon name="home" size={48} />
//           </div>
//         </div>
//       </div>
//     ),
//     usage: `import { Icon } from '@mono/components';

// <Icon name="home" size={24} color="#2563eb" />

// // Available icons: 'home', 'user', 'settings', 'heart', 'star'
// // Customizable size and color`
//   }
// ];

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
