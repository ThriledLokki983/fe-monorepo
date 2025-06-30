import React, { useState } from 'react';
import { Disclosure, DisclosurePanel, DisclosureGroup } from '@mono/components';
import styles from './DemoDisclosure.module.scss';

export const DemoDisclosure: React.FC = () => {
  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'variants' as const, label: 'Variants' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'states' as const, label: 'States' },
    { key: 'controlled' as const, label: 'Controlled' },
    { key: 'group' as const, label: 'Disclosure Group' },
  ];

  const [activeTab, setActiveTab] = useState<typeof tabs[0]['key']>('basic');
  const [isExpanded, setIsExpanded] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Disclosure</h4>
            <div className={styles.componentRow}>
              <Disclosure title="System Requirements">
                <DisclosurePanel>
                  <p>Details about system requirements here. This component uses React Aria for full accessibility support.</p>
                  <ul>
                    <li>Operating System: Windows 10, macOS 10.14, Ubuntu 18.04</li>
                    <li>Memory: 8GB RAM minimum, 16GB recommended</li>
                    <li>Storage: 50GB available space</li>
                    <li>Network: Broadband Internet connection</li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>

            <h4>With Custom Content</h4>
            <div className={styles.componentRow}>
              <Disclosure title="Shipping & Delivery">
                <DisclosurePanel>
                  <div className={styles.shippingInfo}>
                    <h5>Delivery Options</h5>
                    <div className={styles.shippingOptions}>
                      <div className={styles.option}>
                        <strong>Standard Delivery</strong>
                        <p>5-7 business days • Free on orders over $50</p>
                      </div>
                      <div className={styles.option}>
                        <strong>Express Delivery</strong>
                        <p>2-3 business days • $9.99</p>
                      </div>
                      <div className={styles.option}>
                        <strong>Next Day Delivery</strong>
                        <p>Order by 2PM • $19.99</p>
                      </div>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className={styles.variantGroup}>
            <h4>Default Variant</h4>
            <div className={styles.componentRow}>
              <Disclosure variant="default" title="Default Disclosure">
                <DisclosurePanel>
                  <p>This is the default variant with subtle background and border styling.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>

            <h4>Minimal Variant</h4>
            <div className={styles.componentRow}>
              <Disclosure variant="minimal" title="Minimal Disclosure">
                <DisclosurePanel>
                  <p>This is the minimal variant with clean, borderless styling.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>

            <h4>Bordered Variant</h4>
            <div className={styles.componentRow}>
              <Disclosure variant="bordered" title="Bordered Disclosure">
                <DisclosurePanel>
                  <p>This is the bordered variant with distinct border and background.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Small Size</h4>
            <div className={styles.componentRow}>
              <Disclosure size="small" title="Small Disclosure">
                <DisclosurePanel>
                  <p>This is a small-sized disclosure with compact padding and text.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>

            <h4>Medium Size (Default)</h4>
            <div className={styles.componentRow}>
              <Disclosure size="medium" title="Medium Disclosure">
                <DisclosurePanel>
                  <p>This is a medium-sized disclosure with standard padding and text.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>

            <h4>Large Size</h4>
            <div className={styles.componentRow}>
              <Disclosure size="large" title="Large Disclosure">
                <DisclosurePanel>
                  <p>This is a large-sized disclosure with generous padding and larger text.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        );

      case 'states':
        return (
          <div className={styles.variantGroup}>
            <h4>Default Expanded</h4>
            <div className={styles.componentRow}>
              <Disclosure title="Pre-expanded Disclosure" defaultExpanded>
                <DisclosurePanel>
                  <p>This disclosure starts in an expanded state by default.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>

            <h4>Disabled State</h4>
            <div className={styles.componentRow}>
              <Disclosure title="Disabled Disclosure" isDisabled>
                <DisclosurePanel>
                  <p>This content cannot be revealed because the disclosure is disabled.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>

            <h4>Custom Icon Hidden</h4>
            <div className={styles.componentRow}>
              <Disclosure title="No Icon Disclosure" hideIcon>
                <DisclosurePanel>
                  <p>This disclosure doesn't show the expand/collapse icon.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        );

      case 'controlled':
        return (
          <div className={styles.variantGroup}>
            <h4>Controlled Disclosure</h4>
            <div className={styles.componentRow}>
              <div className={styles.controlledDemo}>
                <button
                  className={styles.externalButton}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Collapse' : 'Expand'} External Control
                </button>
                <Disclosure
                  title="Controlled Disclosure"
                  isExpanded={isExpanded}
                  onExpandedChange={setIsExpanded}
                >
                  <DisclosurePanel>
                    <p>This disclosure is controlled by external state. You can control it with the button above or by clicking the disclosure itself.</p>
                    <p>Current state: <strong>{isExpanded ? 'Expanded' : 'Collapsed'}</strong></p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        );

      case 'group':
        return (
          <div className={styles.variantGroup}>
            <h4>Default Disclosure Group</h4>
            <div className={styles.componentRow}>
              <DisclosureGroup>
                <Disclosure id="personal" title="Personal Information">
                  <DisclosurePanel>
                    <p>Personal information form here.</p>
                    <div className={styles.formField}>
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your full name" />
                    </div>
                    <div className={styles.formField}>
                      <label>Email Address</label>
                      <input type="email" placeholder="Enter your email" />
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure id="billing" title="Billing Address">
                  <DisclosurePanel>
                    <p>Billing address form here.</p>
                    <div className={styles.formField}>
                      <label>Street Address</label>
                      <input type="text" placeholder="Enter street address" />
                    </div>
                    <div className={styles.formField}>
                      <label>City, State, ZIP</label>
                      <input type="text" placeholder="City, State, ZIP" />
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure id="shipping" title="Shipping Preferences">
                  <DisclosurePanel>
                    <p>Configure your shipping preferences.</p>
                    <div className={styles.shippingOptions}>
                      <label>
                        <input type="radio" name="shipping" value="standard" />
                        Standard Shipping (5-7 days)
                      </label>
                      <label>
                        <input type="radio" name="shipping" value="express" />
                        Express Shipping (2-3 days)
                      </label>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </DisclosureGroup>
            </div>

            <h4>Bordered Group (Accordion Style)</h4>
            <div className={styles.componentRow}>
              <DisclosureGroup variant="bordered" defaultExpandedKeys={['faq1']}>
                <Disclosure id="faq1" title="How do I reset my password?">
                  <DisclosurePanel>
                    <p>To reset your password:</p>
                    <ol>
                      <li>Click on "Forgot Password" on the login page</li>
                      <li>Enter your email address</li>
                      <li>Check your email for a reset link</li>
                      <li>Follow the instructions in the email</li>
                    </ol>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure id="faq2" title="How do I contact support?">
                  <DisclosurePanel>
                    <p>You can contact our support team through:</p>
                    <ul>
                      <li>Email: support@example.com</li>
                      <li>Phone: 1-800-555-0123</li>
                      <li>Live chat: Available 24/7 on our website</li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure id="faq3" title="What are your business hours?">
                  <DisclosurePanel>
                    <p>Our business hours are:</p>
                    <ul>
                      <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                      <li>Saturday: 10:00 AM - 4:00 PM EST</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </DisclosureGroup>
            </div>

            <h4>Multiple Expanded (Separated Style)</h4>
            <div className={styles.componentRow}>
              <DisclosureGroup
                variant="separated"
                size="large"
                allowsMultipleExpanded
                defaultExpandedKeys={['feature1', 'feature2']}
              >
                <Disclosure id="feature1" title="Advanced Analytics">
                  <DisclosurePanel>
                    <p>Track your performance with detailed analytics and insights.</p>
                    <div className={styles.featureList}>
                      <div>✓ Real-time data visualization</div>
                      <div>✓ Custom dashboard creation</div>
                      <div>✓ Export reports in multiple formats</div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure id="feature2" title="Team Collaboration">
                  <DisclosurePanel>
                    <p>Work together seamlessly with your team members.</p>
                    <div className={styles.featureList}>
                      <div>✓ Real-time collaboration</div>
                      <div>✓ Comment and feedback system</div>
                      <div>✓ Role-based permissions</div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure id="feature3" title="API Integration">
                  <DisclosurePanel>
                    <p>Connect with your favorite tools and services.</p>
                    <div className={styles.featureList}>
                      <div>✓ RESTful API access</div>
                      <div>✓ Webhook support</div>
                      <div>✓ Third-party integrations</div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </DisclosureGroup>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DemoDisclosure;
