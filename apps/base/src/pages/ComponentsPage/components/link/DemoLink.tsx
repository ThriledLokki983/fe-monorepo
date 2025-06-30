import React, { useState } from 'react';
import { Link } from '@mono/components';
import styles from './DemoLink.module.scss';

export const DemoLink: React.FC = () => {
  const [clickedLink, setClickedLink] = useState<string>('');

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'states' as const, label: 'States' },
    { key: 'javascript' as const, label: 'JavaScript Handled' },
  ];

  const [activeTab, setActiveTab] = useState<typeof tabs[0]['key']>('basic');

  const handleJavaScriptLink = (linkName: string) => {
    setClickedLink(`You clicked: ${linkName}`);
    setTimeout(() => setClickedLink(''), 3000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Links</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link href="https://react-spectrum.adobe.com/react-aria/Link.html" target="_blank" rel="noopener noreferrer">
                  React Aria Link Documentation
                </Link>
                <Link href="#section1">Internal anchor link</Link>
                <Link href="/about">Internal page link</Link>
              </div>
            </div>

            <h4>With External Link Indicator</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link
                  href="https://github.com/adobe/react-spectrum"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-external="true"
                >
                  React Spectrum GitHub Repository
                </Link>
                <Link
                  href="https://www.npmjs.com/package/react-aria-components"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-external="true"
                >
                  React Aria Components on NPM
                </Link>
              </div>
            </div>

            <h4>In Context</h4>
            <div className={styles.componentRow}>
              <div className={styles.textWithLinks}>
                <p>
                  Learn more about building accessible components with{' '}
                  <Link href="https://react-spectrum.adobe.com" target="_blank" rel="noopener noreferrer">
                    React Spectrum
                  </Link>{' '}
                  and{' '}
                  <Link href="https://react-spectrum.adobe.com/react-aria/" target="_blank" rel="noopener noreferrer">
                    React Aria
                  </Link>
                  . You can also check out our{' '}
                  <Link href="/components">component library</Link>{' '}
                  for more examples.
                </p>
              </div>
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Default Variant</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link variant="default" href="#default">Default link style</Link>
                <Link variant="default" href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Default external link
                </Link>
              </div>
            </div>

            <h4>Primary Variant</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link variant="primary" href="#primary">Primary link style</Link>
                <Link variant="primary" href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Primary external link
                </Link>
              </div>
            </div>

            <h4>Secondary Variant</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link variant="secondary" href="#secondary">Secondary link style</Link>
                <Link variant="secondary" href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Secondary external link
                </Link>
              </div>
            </div>

            <h4>Muted Variant</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link variant="muted" href="#muted">Muted link style</Link>
                <Link variant="muted" href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Muted external link
                </Link>
              </div>
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Small Size</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link size="small" href="#small">Small link</Link>
                <Link size="small" variant="primary" href="#small-primary">Small primary link</Link>
                <Link size="small" variant="secondary" href="#small-secondary">Small secondary link</Link>
              </div>
            </div>

            <h4>Medium Size (Default)</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link size="medium" href="#medium">Medium link</Link>
                <Link size="medium" variant="primary" href="#medium-primary">Medium primary link</Link>
                <Link size="medium" variant="secondary" href="#medium-secondary">Medium secondary link</Link>
              </div>
            </div>

            <h4>Large Size</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link size="large" href="#large">Large link</Link>
                <Link size="large" variant="primary" href="#large-primary">Large primary link</Link>
                <Link size="large" variant="secondary" href="#large-secondary">Large secondary link</Link>
              </div>
            </div>

            <h4>Size Comparison</h4>
            <div className={styles.componentRow}>
              <div className={styles.sizeComparison}>
                <Link size="small" href="#compare">Small</Link>
                <Link size="medium" href="#compare">Medium</Link>
                <Link size="large" href="#compare">Large</Link>
              </div>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>Normal State</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link href="#normal">Normal link</Link>
                <Link variant="primary" href="#normal-primary">Normal primary link</Link>
              </div>
            </div>

            <h4>Disabled State</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link href="#disabled" isDisabled>Disabled link</Link>
                <Link variant="primary" href="#disabled-primary" isDisabled>Disabled primary link</Link>
                <Link variant="secondary" href="#disabled-secondary" isDisabled>Disabled secondary link</Link>
              </div>
            </div>

            <h4>Interactive States</h4>
            <div className={styles.componentRow}>
              <div className={styles.stateDemo}>
                <p>Hover, focus, and press states are automatically handled by React Aria.</p>
                <div className={styles.linkGroup}>
                  <Link href="#interactive">Hover over this link</Link>
                  <Link variant="primary" href="#interactive-primary">Focus this link with keyboard</Link>
                  <Link variant="secondary" href="#interactive-secondary">Press and hold this link</Link>
                </div>
              </div>
            </div>
          </div>
        );

      case 'javascript':
        return (
          <div className={styles.variantGroup}>
            <h4>JavaScript Handled Links</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link onPress={() => handleJavaScriptLink('JavaScript link 1')}>
                  Click me (JavaScript)
                </Link>
                <Link variant="primary" onPress={() => handleJavaScriptLink('Primary action link')}>
                  Primary action
                </Link>
                <Link variant="secondary" onPress={() => handleJavaScriptLink('Secondary action link')}>
                  Secondary action
                </Link>
                <Link variant="muted" onPress={() => handleJavaScriptLink('Muted action link')}>
                  Muted action
                </Link>
              </div>
              {clickedLink && (
                <div className={styles.feedback}>
                  {clickedLink}
                </div>
              )}
            </div>

            <h4>Disabled JavaScript Links</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link onPress={() => handleJavaScriptLink('This should not fire')} isDisabled>
                  Disabled JavaScript link
                </Link>
                <Link variant="primary" onPress={() => handleJavaScriptLink('This should not fire')} isDisabled>
                  Disabled primary action
                </Link>
              </div>
            </div>

            <h4>Complex JavaScript Actions</h4>
            <div className={styles.componentRow}>
              <div className={styles.linkGroup}>
                <Link
                  onPress={() => {
                    alert('This could open a modal, trigger navigation, or perform any action!');
                    handleJavaScriptLink('Complex action');
                  }}
                  variant="primary"
                >
                  Trigger Modal
                </Link>
                <Link
                  onPress={() => {
                    console.log('Logging analytics event...');
                    handleJavaScriptLink('Analytics event');
                  }}
                  variant="secondary"
                >
                  Log Analytics
                </Link>
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

export default DemoLink;
