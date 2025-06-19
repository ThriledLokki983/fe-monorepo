# @mono/styles

A CSS Layers-based design system library providing a comprehensive set of styles, components, and utilities for building modern web applications.

## Features

- **CSS Layers Architecture**: Uses `@layer` for proper cascade control
- **Dual Export Strategy**: Both SCSS source files and compiled CSS
- **Design Tokens**: Comprehensive set of CSS custom properties
- **TypeScript Utilities**: Helper functions for theme management and token access
- **Modular Architecture**: Import only what you need
- **Modern CSS**: Built with modern CSS features and best practices

## Installation

```bash
yarn add @mono/styles
```

## Usage

### Import Compiled CSS (Production)

```typescript
// Import the complete compiled CSS
import '@mono/styles';

// Your app code
```

### Import SCSS (Development)

```scss
// Import the complete SCSS (including all layers)
@use '@mono/styles/scss' as styles;

// Import only mixins
@use '@mono/styles/mixins' as mixins;

// Import specific modules
@use '@mono/styles/scss/components';
@use '@mono/styles/scss/utilities';
```

### TypeScript Utilities

```typescript
import { setTheme, toggleTheme, tokens, breakpoints } from '@mono/styles';

// Theme management
setTheme('dark');
toggleTheme();

// Access design tokens
const primaryColor = tokens.colors.primary[600];
const spacing = tokens.spacing[4];

// Breakpoint utilities
const isDesktop = isBreakpointActive('lg');
```

## Architecture

The package uses CSS `@layer` for cascade control with the following layers (in order of priority):

1. **layers** - Layer declarations (must be first)
2. **reset** - CSS reset
3. **base** - Base HTML element styles
4. **tokens** - Design tokens (CSS custom properties)
5. **components** - Component styles
6. **patterns** - Layout patterns
7. **themes** - Theme variations
8. **utilities** - Utility classes (highest priority)

## Package Structure

```
src/
├── index.scss          # Main SCSS entry (all layers)
├── index.ts           # TypeScript entry
├── mixins.scss        # Mixins-only export
├── layers/            # CSS layer declarations
├── reset/             # CSS reset
├── base/              # Base element styles
├── tokens/            # Design tokens
├── components/        # Component styles
├── patterns/          # Layout patterns
├── themes/            # Theme variations
├── utilities/         # Utility classes
├── mixins/            # SCSS mixins
├── vendor/            # Third-party imports
└── lib/               # TypeScript utilities
```

## Exports

The package provides multiple entry points:

- `@mono/styles` - Main entry (compiled CSS + TypeScript utilities)
- `@mono/styles/scss` - Complete SCSS source
- `@mono/styles/mixins` - SCSS mixins only
- `@mono/styles/scss/*` - Individual SCSS modules
- `@mono/styles/dist/*` - Direct access to dist files

## Design Tokens

The package includes a comprehensive set of design tokens:

### Colors
- Primary colors (50-900 scale)
- Neutral colors (50-900 scale)
- Semantic colors (success, warning, error, info)

### Typography
- Font families (sans, mono)
- Font sizes (xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl)
- Font weights (light, normal, medium, semibold, bold)
- Line heights (none, tight, normal, relaxed)

### Spacing
- Space scale (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32)

### Other Tokens
- Border radius (none, sm, base, md, lg, xl, 2xl, full)
- Shadows (sm, base, md, lg, xl)
- Z-index scale
- Transitions
- Breakpoints

## SCSS Mixins

The package provides useful SCSS mixins:

```scss
@use '@mono/styles/mixins' as mixins;

.my-component {
  @include mixins.breakpoint('md') {
    // Medium breakpoint and up styles
  }
  
  @include mixins.focus;
  @include mixins.container;
  @include mixins.shadow('lg');
  @include mixins.transition(opacity, 300ms);
}
```

## Themes

The package supports multiple themes:

```typescript
// Set theme via TypeScript
setTheme('dark');
setTheme('high-contrast');

// Or set via HTML attribute
document.documentElement.setAttribute('data-theme', 'dark');
```

```css
/* Themes automatically override design tokens */
[data-theme='dark'] {
  --color-background-primary: var(--color-neutral-900);
  --color-text-primary: var(--color-neutral-50);
  /* ... */
}
```

## Contributing

When adding new styles:

1. Place them in the appropriate layer directory
2. Follow the established naming conventions
3. Use design tokens instead of hardcoded values
4. Update exports if adding new modules

## Build Output

The build process generates:

- `dist/index.js` - Compiled TypeScript
- `dist/index.d.ts` - TypeScript declarations
- `dist/styles.css` - Compiled CSS
- `dist/src/` - All SCSS source files (for consumption)
