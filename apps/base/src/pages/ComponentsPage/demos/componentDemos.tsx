import React from 'react';
import * as Demos from '../components/index';

interface ComponentDemo {
  name: string;
  description: string;
  component: React.ReactNode;
  usage: string;
  category: 'buttons' | 'forms' | 'layout' | 'feedback' | 'overlays' | 'navigation';
}

export const componentDemos: ComponentDemo[] = [
  {
    name: 'Button',
    description: 'A versatile button component built on React Aria with multiple variants and sizes. Provides enhanced accessibility with keyboard navigation and screen reader support.',
    category: 'buttons',
    component: <Demos.DemoButton />,
    usage: Demos.DemoButtonUsage,
  },
  {
    name: 'Icon',
    description: 'A simple icon component with predefined SVG icons.',
    category: 'layout',
    component: <Demos.DemoIcon />,
    usage: Demos.DemoIconUsage,
  },
  {
    name: 'ComboBox',
    description: 'A searchable combobox component with autocomplete functionality. Built with React Aria for accessibility, supports custom values, and provides keyboard navigation.',
    category: 'forms',
    component: <Demos.DemoComboBox />,
    usage: Demos.DemoComboBoxUsage,
  },
  {
    name: 'Select',
    description: 'A dropdown select component for choosing from predefined options. Built with React Aria for enhanced accessibility and keyboard support.',
    category: 'forms',
    component: <Demos.DemoSelect />,
    usage: Demos.DemoSelectUsage,
  },
  {
    name: 'Checkbox',
    description: 'Accessible checkbox component built on React Aria. Supports checked, unchecked, and indeterminate states with full form integration and keyboard navigation.',
    category: 'forms',
    component: <Demos.DemoCheckbox />,
    usage: Demos.DemoCheckboxUsage,
  },
  {
    name: 'CheckboxGroup',
    description: 'Accessible checkbox group component built on React Aria. Allows users to select multiple items from a list with validation, orientation options, and form integration.',
    category: 'forms',
    component: <Demos.DemoCheckboxGroup />,
    usage: Demos.DemoCheckboxGroupUsage,
  },
  {
    name: 'Form',
    description: 'Accessible form container component built on React Aria. Provides form validation, submission handling, error management, and supports various layouts and styling variants.',
    category: 'forms',
    component: <Demos.DemoForm />,
    usage: Demos.DemoFormUsage,
  },
  {
    name: 'NumberField',
    description: 'Accessible number field component built on React Aria. Allows users to enter numeric values with stepper buttons, validation, formatting options, and comprehensive accessibility features.',
    category: 'forms',
    component: <Demos.DemoNumberField />,
    usage: Demos.DemoNumberFieldUsage,
  },
  {
    name: 'RadioGroup',
    description: 'Accessible radio group component built on React Aria. Allows users to select a single item from a list with validation, orientation options, and form integration.',
    category: 'forms',
    component: <Demos.DemoRadioGroup />,
    usage: Demos.DemoRadioGroupUsage,
  },
  {
    name: 'SearchField',
    description: 'Accessible search field component built on React Aria. Allows users to enter and clear search queries with keyboard shortcuts, validation, and customizable clear button.',
    category: 'forms',
    component: <Demos.DemoSearchField />,
    usage: Demos.DemoSearchFieldUsage,
  },
  {
    name: 'Slider',
    description: 'Accessible slider component built on React Aria. Allows users to select values within a range using draggable thumbs. Supports single values, ranges, different orientations, and comprehensive accessibility features.',
    category: 'forms',
    component: <Demos.DemoSlider />,
    usage: Demos.DemoSliderUsage,
  },
  {
    name: 'Switch',
    description: 'Accessible switch component built on React Aria. Allows users to turn a setting on or off with full accessibility support, form integration, and customizable styling.',
    category: 'forms',
    component: <Demos.DemoSwitch />,
    usage: Demos.DemoSwitchUsage,
  },
  {
    name: 'Tabs',
    description: 'Accessible tabs component built on React Aria. Organize content into multiple sections with horizontal/vertical orientations, different variants, and full keyboard navigation support.',
    category: 'navigation',
    component: <Demos.DemoTabs />,
    usage: Demos.DemoTabsUsage,
  },
  {
    name: 'TextField',
    description: 'Versatile text field component built on React Aria. Supports single-line and multi-line input, validation, different types, accessibility features, and comprehensive form integration.',
    category: 'forms',
    component: <Demos.DemoTextField />,
    usage: Demos.DemoTextFieldUsage,
  },
  {
    name: 'Dialog',
    description: 'Accessible dialog components built on React Aria. Includes modal dialogs, alert dialogs, and popovers with complete keyboard navigation and focus management.',
    category: 'overlays',
    component: <Demos.DemoDialog />,
    usage: Demos.DemoDialogUsage,
  },
  {
    name: 'Overlay',
    description: 'Flexible overlay component built on React Aria Popover. Supports positioning, arrows, controlled state, and can wrap content with dialog for enhanced accessibility.',
    category: 'overlays',
    component: <Demos.DemoOverlay />,
    usage: Demos.DemoOverlayUsage,
  },
  {
    name: 'Tooltip',
    description: 'Accessible tooltip component built on React Aria. Displays helpful information on hover or focus with smart positioning, customizable styling, and keyboard support.',
    category: 'overlays',
    component: <Demos.DemoTooltip />,
    usage: Demos.DemoTooltipUsage,
  }
];
