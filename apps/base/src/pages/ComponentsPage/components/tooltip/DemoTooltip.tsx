import React, { useState } from 'react';
import { Button } from '@mono/components';
import { Tooltip, TooltipTrigger, OverlayArrow } from 'react-aria-components';
import styles from './DemoTooltip.module.scss';

type TabKey = 'basic' | 'sizes' | 'positions' | 'controlled';

// Custom Tooltip component using React Aria Tooltip
const CustomTooltip: React.FC<{
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  showArrow?: boolean;
  placement?: 'top' | 'bottom' | 'start' | 'end' | 'left' | 'right';
  offset?: number;
  crossOffset?: number;
}> = ({
  children,
  size = 'medium',
  showArrow = true,
  ...props
}) => {
  return (
    <Tooltip {...props} className={`${styles.tooltip} ${styles[size]}`}>
      {showArrow && (
        <OverlayArrow className={styles.tooltipArrow}>
          <svg width={8} height={8} viewBox="0 0 8 8" className={styles.arrowSvg}>
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
      )}
      <div className={styles.tooltipContent}>
        {children}
      </div>
    </Tooltip>
  );
};

// Custom TooltipTrigger wrapper
const CustomTooltipTrigger: React.FC<{
  children: React.ReactNode;
  delay?: number;
  isDisabled?: boolean;
  trigger?: 'focus';
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}> = ({
  children,
  delay = 700,
  ...props
}) => {
  return (
    <TooltipTrigger {...props} delay={delay}>
      {children}
    </TooltipTrigger>
  );
};

export const DemoTooltip: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');
  const [isControlledOpen, setIsControlledOpen] = useState(false);
  const [controlledDelay, setControlledDelay] = useState(700);

  const tabs = [
    { key: 'basic' as const, label: 'Basic Usage' },
    { key: 'sizes' as const, label: 'Sizes' },
    { key: 'positions' as const, label: 'Positions' },
    { key: 'controlled' as const, label: 'Controlled' },
  ];

  const renderBasicExamples = () => (
    <div className={styles.exampleSection}>
      <h3>Basic Tooltips</h3>
      <div className={styles.exampleGrid}>
        <div className={styles.exampleItem}>
          <h4>Simple Tooltip</h4>
          <CustomTooltipTrigger>
            <Button>Hover me</Button>
            <CustomTooltip>This is a simple tooltip</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.exampleItem}>
          <h4>Tooltip without Arrow</h4>
          <CustomTooltipTrigger>
            <Button>No arrow</Button>
            <CustomTooltip showArrow={false}>
              This tooltip has no arrow
            </CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.exampleItem}>
          <h4>Custom Delay</h4>
          <CustomTooltipTrigger delay={200}>
            <Button>Fast tooltip</Button>
            <CustomTooltip>Appears quickly (200ms)</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.exampleItem}>
          <h4>Focus Only</h4>
          <CustomTooltipTrigger trigger="focus">
            <Button>Focus only</Button>
            <CustomTooltip>Only shows on focus, not hover</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.exampleItem}>
          <h4>Compound Tooltip</h4>
          <CustomTooltipTrigger>
            <Button>Compound</Button>
            <CustomTooltip placement="top">
              This uses the compound component
            </CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.exampleItem}>
          <h4>Long Content</h4>
          <CustomTooltipTrigger>
            <Button>Long content</Button>
            <CustomTooltip>
              This is a tooltip with much longer content that will wrap to multiple lines
              to demonstrate how the tooltip handles longer text content.
            </CustomTooltip>
          </CustomTooltipTrigger>
        </div>
      </div>
    </div>
  );

  const renderSizeExamples = () => (
    <div className={styles.exampleSection}>
      <h3>Tooltip Sizes</h3>
      <div className={styles.exampleGrid}>
        <div className={styles.exampleItem}>
          <h4>Small</h4>
          <CustomTooltipTrigger>
            <Button>Small tooltip</Button>
            <CustomTooltip size="small">Small tooltip</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.exampleItem}>
          <h4>Medium (Default)</h4>
          <CustomTooltipTrigger>
            <Button>Medium tooltip</Button>
            <CustomTooltip size="medium">Medium tooltip with more content</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.exampleItem}>
          <h4>Large</h4>
          <CustomTooltipTrigger>
            <Button>Large tooltip</Button>
            <CustomTooltip size="large">
              Large tooltip with even more content that can accommodate longer descriptions
              and explanations for complex features.
            </CustomTooltip>
          </CustomTooltipTrigger>
        </div>
      </div>
    </div>
  );

  const renderPositionExamples = () => (
    <div className={styles.exampleSection}>
      <h3>Tooltip Positions</h3>
      <div className={styles.positionGrid}>
        <div className={styles.positionItem}>
          <CustomTooltipTrigger>
            <Button>Top</Button>
            <CustomTooltip placement="top">Tooltip on top</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.positionItem}>
          <CustomTooltipTrigger>
            <Button>Bottom</Button>
            <CustomTooltip placement="bottom">Tooltip on bottom</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.positionItem}>
          <CustomTooltipTrigger>
            <Button>Left</Button>
            <CustomTooltip placement="left">Tooltip on left</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.positionItem}>
          <CustomTooltipTrigger>
            <Button>Right</Button>
            <CustomTooltip placement="right">Tooltip on right</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.positionItem}>
          <CustomTooltipTrigger>
            <Button>Start</Button>
            <CustomTooltip placement="start">Tooltip at start</CustomTooltip>
          </CustomTooltipTrigger>
        </div>

        <div className={styles.positionItem}>
          <CustomTooltipTrigger>
            <Button>End</Button>
            <CustomTooltip placement="end">Tooltip at end</CustomTooltip>
          </CustomTooltipTrigger>
        </div>
      </div>
    </div>
  );

  const renderControlledExamples = () => (
    <div className={styles.exampleSection}>
      <h3>Controlled Tooltips</h3>

      <div className={styles.controlledDemo}>
        <div className={styles.controls}>
          <label>
            <input
              type="checkbox"
              checked={isControlledOpen}
              onChange={(e) => setIsControlledOpen(e.target.checked)}
            />
            Force tooltip open
          </label>

          <label>
            Delay: {controlledDelay}ms
            <input
              type="range"
              min={0}
              max={2000}
              step={100}
              value={controlledDelay}
              onChange={(e) => setControlledDelay(Number(e.target.value))}
            />
          </label>
        </div>

        <div className={styles.exampleGrid}>
          <div className={styles.exampleItem}>
            <h4>Controlled State</h4>
            <CustomTooltipTrigger
              isOpen={isControlledOpen}
              onOpenChange={setIsControlledOpen}
              delay={controlledDelay}
            >
              <Button>Controlled</Button>
              <CustomTooltip>
                This tooltip's state is controlled. Open: {isControlledOpen ? 'Yes' : 'No'}
              </CustomTooltip>
            </CustomTooltipTrigger>
          </div>

          <div className={styles.exampleItem}>
            <h4>Disabled Tooltip</h4>
            <CustomTooltipTrigger isDisabled>
              <Button>Disabled</Button>
              <CustomTooltip>This tooltip is disabled</CustomTooltip>
            </CustomTooltipTrigger>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return renderBasicExamples();
      case 'sizes':
        return renderSizeExamples();
      case 'positions':
        return renderPositionExamples();
      case 'controlled':
        return renderControlledExamples();
      default:
        return renderBasicExamples();
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.header}>
        <h2>Tooltip Component</h2>
        <p>
          A tooltip displays helpful information on hover or focus.
          Built with React Aria for accessibility and positioning.
        </p>
      </div>

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

      <div className={styles.info}>
        <h3>Key Features</h3>
        <ul>
          <li>Accessible - Associated with trigger via aria-describedby</li>
          <li>Hover behavior - Smart global delay system</li>
          <li>Positioning - Automatically flips to stay in viewport</li>
          <li>Customizable - Multiple sizes, placements, and styling options</li>
          <li>Animation - Smooth enter/exit animations</li>
          <li>Mobile friendly - Tooltips don't show on touch devices</li>
        </ul>
      </div>
    </div>
  );
};
