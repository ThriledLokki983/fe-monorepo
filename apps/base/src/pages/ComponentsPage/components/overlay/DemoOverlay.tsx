import React, { useState } from 'react';
import { Button } from '@mono/components';
import { DialogTrigger, Switch, Popover, OverlayArrow, Dialog } from 'react-aria-components';
import styles from './DemoOverlay.module.scss';

type TabKey = 'basic' | 'sizes' | 'positions' | 'controlled';

// Custom Overlay component using React Aria Popover
const CustomOverlay: React.FC<{
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  showArrow?: boolean;
  placement?: 'top' | 'bottom' | 'start' | 'end' | 'left' | 'right';
  offset?: number;
  crossOffset?: number;
  includeDialog?: boolean;
  dialogTitle?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerRef?: React.RefObject<HTMLElement>;
}> = ({
  children,
  size = 'medium',
  showArrow = true,
  includeDialog = false,
  dialogTitle,
  ...props
}) => {
  const content = includeDialog ? (
    <Dialog className={styles.overlayDialog}>
      {dialogTitle && <h3 className={styles.dialogTitle}>{dialogTitle}</h3>}
      <div>{children}</div>
    </Dialog>
  ) : (
    <div className={styles.overlayContent}>{children}</div>
  );

  return (
    <Popover {...props} className={`${styles.overlay} ${styles[size]}`}>
      {showArrow && (
        <OverlayArrow className={styles.overlayArrow}>
          <svg width={12} height={12} viewBox="0 0 12 12" className={styles.arrowSvg}>
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {content}
    </Popover>
  );
};

export const DemoOverlay: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [isControlledOpen, setIsControlledOpen] = useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const tabs = [
    { key: 'basic' as const, label: 'Basic' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'positions' as const, label: 'Positions' },
    { key: 'controlled' as const, label: 'Controlled' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.variantGroup}>
            <h4>Basic Overlay</h4>
            <p>A simple overlay with content and arrow.</p>
            <div className={styles.demoRow}>
              <DialogTrigger>
                <Button variant="primary">Open Overlay</Button>
                <CustomOverlay>
                  <p>This is a basic overlay with an arrow.</p>
                  <p>It automatically positions itself relative to the trigger.</p>
                </CustomOverlay>
              </DialogTrigger>
            </div>

            <h4>Overlay with Dialog</h4>
            <p>An overlay that includes a dialog wrapper for better accessibility.</p>
            <div className={styles.demoRow}>
              <DialogTrigger>
                <Button variant="secondary">Settings</Button>
                <CustomOverlay includeDialog dialogTitle="Settings">
                  <Switch defaultSelected>
                    <div className={styles.switchIndicator} /> Wi-Fi
                  </Switch>
                  <Switch defaultSelected>
                    <div className={styles.switchIndicator} /> Bluetooth
                  </Switch>
                  <Switch>
                    <div className={styles.switchIndicator} /> Notifications
                  </Switch>
                </CustomOverlay>
              </DialogTrigger>
            </div>

            <h4>Overlay without Arrow</h4>
            <p>A clean overlay without the pointing arrow.</p>
            <div className={styles.demoRow}>
              <DialogTrigger>
                <Button variant="tertiary">Info</Button>
                <CustomOverlay showArrow={false}>
                  <h5>Information</h5>
                  <p>This overlay doesn't have an arrow for a cleaner look.</p>
                  <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                </CustomOverlay>
              </DialogTrigger>
            </div>
          </div>
        );

      case 'sizes':
        return (
          <div className={styles.variantGroup}>
            <h4>Different Sizes</h4>
            <p>Overlays support different sizes for various use cases.</p>
            <div className={styles.demoRow}>
              <DialogTrigger>
                <Button size="small">Small Overlay</Button>
                <CustomOverlay size="small">
                  <p>This is a small overlay.</p>
                </CustomOverlay>
              </DialogTrigger>

              <DialogTrigger>
                <Button size="medium">Medium Overlay</Button>
                <CustomOverlay size="medium">
                  <p>This is a medium overlay (default size).</p>
                  <p>It provides a good balance of space and compactness.</p>
                </CustomOverlay>
              </DialogTrigger>

              <DialogTrigger>
                <Button size="large">Large Overlay</Button>
                <CustomOverlay size="large">
                  <h5>Large Overlay</h5>
                  <p>This is a large overlay with more space for content.</p>
                  <p>Perfect for more complex content or multiple elements.</p>
                  <div>
                    <Button variant="secondary" size="small">Action</Button>
                  </div>
                </CustomOverlay>
              </DialogTrigger>
            </div>
          </div>
        );

      case 'positions':
        return (
          <div className={styles.variantGroup}>
            <h4>Different Positions</h4>
            <p>Overlays can be positioned relative to their trigger in different ways.</p>
            <div className={styles.positionDemo}>
              <DialogTrigger>
                <Button><span role="img" aria-label="Left arrow">⬅️</span> Left</Button>
                <CustomOverlay placement="start">
                  <p>Positioned to the left</p>
                </CustomOverlay>
              </DialogTrigger>

              <DialogTrigger>
                <Button><span role="img" aria-label="Up arrow">⬆️</span> Top</Button>
                <CustomOverlay placement="top">
                  <p>Positioned above</p>
                </CustomOverlay>
              </DialogTrigger>

              <DialogTrigger>
                <Button><span role="img" aria-label="Down arrow">⬇️</span> Bottom</Button>
                <CustomOverlay placement="bottom">
                  <p>Positioned below</p>
                </CustomOverlay>
              </DialogTrigger>

              <DialogTrigger>
                <Button><span role="img" aria-label="Right arrow">➡️</span> Right</Button>
                <CustomOverlay placement="end">
                  <p>Positioned to the right</p>
                </CustomOverlay>
              </DialogTrigger>
            </div>

            <h4>Offset Examples</h4>
            <p>Overlays can have custom offsets from their trigger.</p>
            <div className={styles.demoRow}>
              <DialogTrigger>
                <Button variant="secondary">Offset</Button>
                <CustomOverlay placement="top" offset={20}>
                  <p>This overlay has an additional 20px offset.</p>
                </CustomOverlay>
              </DialogTrigger>

              <DialogTrigger>
                <Button variant="secondary">Cross Offset</Button>
                <CustomOverlay placement="top" crossOffset={50}>
                  <p>This overlay has a 50px cross offset.</p>
                </CustomOverlay>
              </DialogTrigger>
            </div>
          </div>
        );

      case 'controlled':
        return (
          <div className={styles.variantGroup}>
            <h4>Controlled Overlay</h4>
            <p>Programmatically control overlay open state.</p>
            <div className={styles.demoRow}>
              <Button
                onPress={() => setIsControlledOpen(true)}
                variant="primary"
              >
                Open Controlled Overlay
              </Button>
              <span className={styles.positionReference}>
                ← Overlay positions relative to this text
              </span>
            </div>

            <CustomOverlay
              triggerRef={triggerRef}
              isOpen={isControlledOpen}
              onOpenChange={setIsControlledOpen}
              placement="right"
            >
              <h5>Controlled Overlay</h5>
              <p>This overlay is controlled programmatically.</p>
              <p>It positions relative to the button but can be triggered from anywhere.</p>
              <Button
                variant="secondary"
                size="small"
                onPress={() => setIsControlledOpen(false)}
              >
                Close
              </Button>
            </CustomOverlay>

            <div className={styles.controlPanel}>
              <h5>Control Panel</h5>
              <Button
                variant={isControlledOpen ? "danger" : "secondary"}
                onPress={() => setIsControlledOpen(!isControlledOpen)}
              >
                {isControlledOpen ? "Close" : "Open"} Overlay
              </Button>
              <p>Current state: {isControlledOpen ? "Open" : "Closed"}</p>
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
