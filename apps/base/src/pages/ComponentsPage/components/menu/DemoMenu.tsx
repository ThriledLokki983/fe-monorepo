import { useState } from 'react';
import { MenuButton, MenuItem, MenuSection, MenuSeparator, Selection } from '@mono/components';
import styles from './DemoMenu.module.scss';

export function DemoMenu() {
  const [singleSelection, setSingleSelection] = useState<Selection>(new Set(['center']));
  const [multipleSelection, setMultipleSelection] = useState<Selection>(new Set(['sidebar', 'console']));

  return (
    <div className={styles.componentShowcase}>
      <h2>Menu Component Demo</h2>

      <div className={styles.demoGrid}>
        {/* Basic Menu */}
        <div className={styles.demoSection}>
          <h3>Basic Menu</h3>
          <MenuButton
            label="Actions"
            onAction={(key: any) => alert(`Action: ${key}`)}
          >
            <MenuItem id="new">New File</MenuItem>
            <MenuItem id="open">Open File</MenuItem>
            <MenuItem id="save">Save File</MenuItem>
            <MenuSeparator />
            <MenuItem id="exit" destructive>Exit</MenuItem>
          </MenuButton>
        </div>

        {/* Menu with Icons and Shortcuts */}
        <div className={styles.demoSection}>
          <h3>Menu with Icons & Shortcuts</h3>
          <MenuButton
            label="Edit"
            variant="outline"
            icon="✏️"
            onAction={(key) => alert(`Edit action: ${key}`)}
          >
            <MenuItem id="cut" icon="✂️" shortcut="⌘X">Cut</MenuItem>
            <MenuItem id="copy" icon="📋" shortcut="⌘C">Copy</MenuItem>
            <MenuItem id="paste" icon="📄" shortcut="⌘V">Paste</MenuItem>
            <MenuSeparator />
            <MenuItem id="select-all" shortcut="⌘A">Select All</MenuItem>
          </MenuButton>
        </div>

        {/* Menu with Descriptions */}
        <div className={styles.demoSection}>
          <h3>Menu with Descriptions</h3>
          <MenuButton
            label="Share"
            variant="primary"
            size="large"
            onAction={(key) => alert(`Share via: ${key}`)}
          >
            <MenuItem
              id="email"
              icon="📧"
              description="Send via email to recipients"
            >
              Email
            </MenuItem>
            <MenuItem
              id="link"
              icon="🔗"
              description="Generate a shareable link"
            >
              Copy Link
            </MenuItem>
            <MenuItem
              id="social"
              icon="📱"
              description="Share on social media"
            >
              Social Media
            </MenuItem>
          </MenuButton>
        </div>

        {/* Single Selection Menu */}
        <div className={styles.demoSection}>
          <h3>Single Selection</h3>
          <MenuButton
            label="Text Alignment"
            selectionMode="single"
            selectedKeys={singleSelection}
            onSelectionChange={setSingleSelection}
          >
            <MenuItem id="left">Left Align</MenuItem>
            <MenuItem id="center">Center Align</MenuItem>
            <MenuItem id="right">Right Align</MenuItem>
            <MenuItem id="justify">Justify</MenuItem>
          </MenuButton>
          <p className={styles.selectionDisplay}>
            Selected: {Array.from(singleSelection).join(', ')}
          </p>
        </div>

        {/* Multiple Selection Menu */}
        <div className={styles.demoSection}>
          <h3>Multiple Selection</h3>
          <MenuButton
            label="View Options"
            selectionMode="multiple"
            selectedKeys={multipleSelection}
            onSelectionChange={setMultipleSelection}
          >
            <MenuItem id="sidebar">Sidebar</MenuItem>
            <MenuItem id="toolbar">Toolbar</MenuItem>
            <MenuItem id="statusbar">Status Bar</MenuItem>
            <MenuItem id="console">Console</MenuItem>
            <MenuItem id="minimap">Minimap</MenuItem>
          </MenuButton>
          <p className={styles.selectionDisplay}>
            Selected: {Array.from(multipleSelection).join(', ')}
          </p>
        </div>

        {/* Menu with Sections */}
        <div className={styles.demoSection}>
          <h3>Menu with Sections</h3>
          <MenuButton
            label="Format"
            onAction={(key) => alert(`Format: ${key}`)}
          >
            <MenuSection title="Text Style">
              <MenuItem id="bold" icon="**" shortcut="⌘B">Bold</MenuItem>
              <MenuItem id="italic" icon="*" shortcut="⌘I">Italic</MenuItem>
              <MenuItem id="underline" icon="_" shortcut="⌘U">Underline</MenuItem>
            </MenuSection>

            <MenuSection title="Alignment">
              <MenuItem id="align-left">Align Left</MenuItem>
              <MenuItem id="align-center">Align Center</MenuItem>
              <MenuItem id="align-right">Align Right</MenuItem>
            </MenuSection>

            <MenuSection title="Lists">
              <MenuItem id="bullet-list">Bullet List</MenuItem>
              <MenuItem id="numbered-list">Numbered List</MenuItem>
            </MenuSection>
          </MenuButton>
        </div>

        {/* Different Button Variants */}
        <div className={styles.demoSection}>
          <h3>Button Variants</h3>
          <div className={styles.buttonGroup}>
            <MenuButton
              label="Primary"
              variant="primary"
              size="small"
              onAction={(key) => alert(`Primary: ${key}`)}
            >
              <MenuItem id="option1">Option 1</MenuItem>
              <MenuItem id="option2">Option 2</MenuItem>
            </MenuButton>

            <MenuButton
              label="Secondary"
              variant="secondary"
              onAction={(key) => alert(`Secondary: ${key}`)}
            >
              <MenuItem id="option1">Option 1</MenuItem>
              <MenuItem id="option2">Option 2</MenuItem>
            </MenuButton>

            <MenuButton
              label="Outline"
              variant="outline"
              onAction={(key) => alert(`Outline: ${key}`)}
            >
              <MenuItem id="option1">Option 1</MenuItem>
              <MenuItem id="option2">Option 2</MenuItem>
            </MenuButton>

            <MenuButton
              label="Ghost"
              variant="ghost"
              onAction={(key) => alert(`Ghost: ${key}`)}
            >
              <MenuItem id="option1">Option 1</MenuItem>
              <MenuItem id="option2">Option 2</MenuItem>
            </MenuButton>
          </div>
        </div>

        {/* Disabled Items */}
        <div className={styles.demoSection}>
          <h3>Disabled Items</h3>
          <MenuButton
            label="File Operations"
            disabledKeys={['save', 'print']}
            onAction={(key) => alert(`File operation: ${key}`)}
          >
            <MenuItem id="new">New</MenuItem>
            <MenuItem id="open">Open</MenuItem>
            <MenuItem id="save">Save (Disabled)</MenuItem>
            <MenuItem id="save-as">Save As</MenuItem>
            <MenuSeparator />
            <MenuItem id="print">Print (Disabled)</MenuItem>
            <MenuItem id="export">Export</MenuItem>
          </MenuButton>
        </div>
      </div>
    </div>
  );
}
