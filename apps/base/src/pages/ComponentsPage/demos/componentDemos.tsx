import React from 'react';
import * as Demos from '../components/index';

interface ComponentDemo {
  name: string;
  description: string;
  component: React.ReactNode;
  usage: string;
  category: 'buttons' | 'forms' | 'layout' | 'feedback';
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
  }
];
