# KS Component Library

A professional React component library built with TypeScript and Source Sans 3 typography, following the KS design system. This library provides a comprehensive set of reusable UI components designed for modern web applications.

## 🎨 Features

- **Comprehensive Component Set**: Starting with Button component, expanding to include more UI elements
- **Consistent Design System**: All components follow the KS design system
- **Source Sans 3 Typography**: Modern, readable font throughout
- **KS Design System Colors**: Professional color palette with semantic color tokens
- **TypeScript Support**: Full type safety for all components
- **Storybook Documentation**: Interactive component showcase and documentation
- **Modular Architecture**: Easy to import individual components or the entire library

## 📦 Installation

```bash
npm install @ks/component-library
```

## 🚀 Usage

```tsx
import { Button } from '@ks/component-library';
import '@ks/component-library/dist/styles.css';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click Me
      </Button>
      
      <Button variant="secondary" size="large" icon="download">
        Download
      </Button>
      
      <Button variant="text" disabled>
        Disabled Button
      </Button>
    </div>
  );
}
```

## 🧩 Available Components

### Button Component

The Button component is the foundation of our interactive elements, featuring multiple sizes, variants, and states.

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'text'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large' \| 'xl' \| '2xl' \| '3xl'` | `'medium'` | Button size |
| `state` | `'normal' \| 'hover' \| 'disabled'` | `'normal'` | Button state |
| `icon` | `'none' \| 'download' \| 'arrow'` | `'none'` | Icon to display |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `onClick` | `() => void` | - | Click handler |
| `children` | `React.ReactNode` | - | Button content |

#### Button Sizes

| Size | Width | Height | Font Size |
|------|-------|--------|-----------|
| small | 105px | 32px | 14px |
| medium | 105px | 36px | 14px |
| large | 105px | 46px | 16px |
| xl | 105px | 48px | 16px |
| 2xl | 190px | 60px | 18px |
| 3xl | 227px | 64px | 18px |

## 🎨 Design System

Our design system provides a consistent foundation for all components, ensuring visual harmony and accessibility across your application.

### Colors
- **Primary**: KS Black (#000000)
- **Secondary**: KS White (#FFFFFF)
- **Accent Blue**: #4A3FCF
- **Accent Green**: #CBFD13
- **Accent Grey**: #F9F9F9

### Typography
- **Font Family**: Source Sans 3
- **Font Weight**: Bold (700)
- **Line Height**: 120%
- **Border Radius**: 10px

## 🚀 Roadmap

We're actively developing additional components to expand the library:

- [ ] **Input Components**: Text inputs, textareas, select dropdowns
- [ ] **Layout Components**: Cards, containers, grids
- [ ] **Navigation Components**: Navigation bars, breadcrumbs, pagination
- [ ] **Feedback Components**: Alerts, notifications, modals
- [ ] **Data Display**: Tables, lists, badges
- [ ] **Form Components**: Form groups, validation, file uploads

## 📚 Storybook

Run Storybook to explore all components and their variants:

```bash
npm run storybook
```

Visit `http://localhost:6006` to see the interactive component documentation and playground.

## 🛠️ Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup
```bash
git clone <repository-url>
cd button-component-library
npm install
```

### Available Scripts
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run build` - Build the component library
- `npm run test` - Run tests
- `npm run build:lib` - Build library with rollup configuration

### Building the Library
```bash
npm run build
```

This creates:
- `dist/index.js` - CommonJS bundle
- `dist/index.esm.js` - ES Module bundle
- `dist/index.d.ts` - TypeScript declarations
- `dist/styles.css` - Compiled CSS

### Component Structure
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.scss
│   │   ├── Button.stories.tsx
│   │   └── README.md
│   └── [Future Components]/
├── design-tokens/
│   └── design-tokens.scss
└── index.tsx
```

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on GitHub.
