import React, { useState } from 'react';
import { Button } from '@mono/components';
import { Dialog, DialogTrigger, AlertDialog, PopoverDialog } from '@mono/components';
import styles from './DemoDialog.module.scss';

type TabKey = 'basic' | 'alert' | 'popover' | 'sizes';

export const DemoDialog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');

  const tabs = [
    { key: 'basic' as const, label: 'Basic Dialog' },
    { key: 'alert' as const, label: 'Alert Dialog' },
    { key: 'popover' as const, label: 'Popover Dialog' },
    { key: 'sizes' as const, label: 'Sizes' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Modal Dialog</h4>
            <p>A simple modal dialog with content.</p>
            <DialogTrigger trigger={<Button variant="primary">Open Basic Dialog</Button>}>
              <Dialog title="Welcome">
                <p>This is a basic modal dialog built with React Aria.</p>
                <p>It provides full keyboard navigation and accessibility support.</p>
              </Dialog>
            </DialogTrigger>
          </div>
        );

      case 'alert':
        return (
          <div className={styles.variantGroup}>
            <h4>Alert Dialog</h4>
            <p>An alert dialog for confirmations with actions.</p>
            <DialogTrigger trigger={<Button variant="danger">Delete Item</Button>}>
              <AlertDialog title="Confirm Deletion">
                {({ close }: { close: () => void }) => (
                  <>
                    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                    <div className={styles.dialogButtons}>
                      <Button variant="danger" onPress={close}>
                        Delete
                      </Button>
                      <Button variant="secondary" onPress={close}>
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </AlertDialog>
            </DialogTrigger>
          </div>
        );

      case 'popover':
        return (
          <div className={styles.variantGroup}>
            <h4>Popover Dialog</h4>
            <p>A popover dialog for contextual content.</p>
            <PopoverDialog
              trigger={<Button variant="tertiary">Show Help</Button>}
              dialogProps={{ title: "Help Information" }}
            >
              <div>
                <p>This is a popover dialog that provides contextual help.</p>
                <ul>
                  <li>Use Tab to navigate between elements</li>
                  <li>Press Escape to close the dialog</li>
                  <li>Supports screen readers</li>
                </ul>
              </div>
            </PopoverDialog>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Different Sizes</h4>
            <p>Dialogs support different sizes for various use cases.</p>
            <div className={styles.sizeDemos}>
              <DialogTrigger trigger={<Button size="small">Small Dialog</Button>}>
                <Dialog title="Small Dialog" size="small">
                  <p>This is a small dialog.</p>
                </Dialog>
              </DialogTrigger>

              <DialogTrigger trigger={<Button size="medium">Medium Dialog</Button>}>
                <Dialog title="Medium Dialog" size="medium">
                  <p>This is a medium dialog (default size).</p>
                </Dialog>
              </DialogTrigger>

              <DialogTrigger trigger={<Button size="large">Large Dialog</Button>}>
                <Dialog title="Large Dialog" size="large">
                  <p>This is a large dialog with more space for content.</p>
                </Dialog>
              </DialogTrigger>
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
