# @mono/components

A React component library for the monorepo with TypeScript support and CSS Modules styling.

## Features

- **React + TypeScript** component library
- **CSS Modules** for component styling with SCSS preprocessing
- **Vite-based build system** with React plugin
- **Modular component organization**
- **Peer dependencies** for React ecosystem compatibility

## Installation

This package is meant to be used within the monorepo:

```json
{
  "dependencies": {
    "@mono/components": "file:../components"
  }
}
```

## Usage

### Import components

```tsx
import { Button, Header, MainLayout } from '@mono/components';
```

### Use with TypeScript

```tsx
import type { ButtonProps } from '@mono/components';

const MyButton: React.FC<ButtonProps> = (props) => (
  <Button variant="primary" {...props} />
);
```

## Architecture

### Component Structure

Each component follows this pattern:

```
ComponentName/
├── ComponentName.tsx           # Main component implementation
├── ComponentName.interface.ts  # TypeScript interfaces
├── ComponentName.module.scss   # Component-specific styles
├── index.ts                   # Component exports
└── README.md                  # Component documentation
```

### Styling

- **CSS Modules** for component isolation
- **SCSS preprocessing** with utilities from `@mono/styles`
- **Data attributes** for variant styling (`data-variant`, `data-size`)

### Component Categories

#### Common Components
- Button
- AlertBar
- Loader
- FormElements
- Icon
- Toast

#### Layout Components
- Header
- Sidebar
- MainLayout

## Development

```bash
# Build the library
yarn build

# Run tests
yarn test

# Start development server
yarn dev

# Type checking
yarn typecheck
```

## Scripts

- `build`: Build the library for production
- `dev`: Start Vite development server
- `test`: Run Vitest tests
- `typecheck`: Run TypeScript type checking

## Dependencies

### Peer Dependencies
- `react` >= 18.0.0
- `react-dom` >= 18.0.0
- `react-aria-components` >= 1.0.0

### Internal Dependencies
- `@mono/styles`: Design system and styling utilities
