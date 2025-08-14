# KS Component Library

A professional React component library built with TypeScript and Source Sans 3 typography, following the KS design system. This library provides a comprehensive set of reusable UI components designed for modern web applications.

> **🤖 LLM DEVELOPERS**: For comprehensive guidance on using this component library, including detailed API documentation, examples, and best practices, please refer to the **[LLM_GUIDE.md](./LLM_GUIDE.md)** file. This guide contains complete component specifications, usage patterns, and implementation examples specifically designed for AI-assisted development.

## 🎨 Features

- **Comprehensive Component Set**: 15+ production-ready UI components
- **Global Toast System**: Hook-free global notification system with 7 positioning options
- **Consistent Design System**: All components follow the KS design system
- **Source Sans 3 Typography**: Modern, readable font throughout
- **KS Design System Colors**: Professional color palette with semantic color tokens
- **TypeScript Support**: Full type safety for all components
- **Storybook Documentation**: Interactive component showcase and documentation
- **Modular Architecture**: Easy to import individual components or the entire library
- **Hook-free Components**: Many components work without React hooks for better performance

## 📦 Installation

```bash
npm install @ks/component-library
```

## 🚀 Quick Start

```tsx
import { Button, ToastProvider, toast } from "@ks/component-library";
import "@ks/component-library/dist/styles.css";

function App() {
  return (
    <ToastProvider position="top-right" maxToasts={5}>
      <div>
        <Button
          variant="primary"
          size="medium"
          onClick={() =>
            toast.success({ title: "Success!", message: "Button clicked!" })
          }
        >
          Click Me
        </Button>
      </div>
    </ToastProvider>
  );
}
```

## 🧩 Available Components

### Core Components

#### Button Component

The foundation of interactive elements with multiple sizes, variants, and states.

**Features:**

- 6 size variants (small to 3xl)
- 3 visual variants (primary, secondary, text)
- Icon support (download, arrow)
- Full state management (normal, hover, disabled)

#### Toast Component

Global notification system with hook-free architecture.

**Features:**

- 7 positioning options (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, center)
- 3 types (success, error, processing)
- Auto-dismiss with configurable duration
- Global API: `toast.success()`, `toast.error()`, `toast.processing()`
- Manual control: `toast.dismiss()`, `toast.clear()`

#### Dialog Component

Modal dialog system with controlled state management.

**Features:**

- Multiple dialog types (basic, with icons, with lists)
- Controlled state management
- Accessible with proper ARIA attributes
- Flexible content structure

### Form Components

#### Checkbox Component

Custom checkbox with multiple states and variants.

#### RadioButton Component

Radio button group with controlled state management.

#### Toggle Component

Toggle switch with multiple variants and states.

### Layout Components

#### Grid Component

Flexible grid system with responsive breakpoints.

#### Layout Component

Page layout wrapper with header, sidebar, and content areas.

#### Sidebar Component

Collapsible sidebar navigation.

### Navigation Components

#### Header Component

Application header with navigation and actions.

#### Tabs Component

Tab navigation with multiple variants and icon support.

#### Dropdown Component

Dropdown menu with various trigger types.

### Data Display Components

#### Table Component

Data table with sorting, pagination, and responsive design.

#### Chip Component

Compact data display with multiple variants.

### Feedback Components

#### Tooltip Component

Contextual information display with multiple positions.

## 🎨 Design System

Our design system provides a consistent foundation for all components, ensuring visual harmony and accessibility across your application.

### Colors

- **Primary**: KS Black (#000000)
- **Secondary**: KS White (#FFFFFF)
- **Accent Blue**: #4A3FCF
- **Accent Green**: #CBFD13
- **Accent Grey**: #F9F9F9
- **Success**: #10B981
- **Error**: #EF4444
- **Warning**: #F59E0B

### Typography

- **Font Family**: Source Sans 3
- **Font Weights**: Normal (400), Medium (500), Semibold (600), Bold (700)
- **Line Height**: 120%
- **Border Radius**: 8px, 10px, 12px

### Spacing

- **Base Unit**: 4px
- **Common Spacings**: 8px, 12px, 16px, 24px, 32px, 48px

## 🌟 Advanced Features

### Global Toast System

The Toast component provides a powerful global notification system:

```tsx
// Setup
<ToastProvider position="bottom-right" maxToasts={5}>
  <YourApp />
</ToastProvider>;

// Usage anywhere in your app
import { toast } from "@ks/component-library";

// Show notifications
toast.success({ title: "Success!", message: "Operation completed" });
toast.error({ title: "Error!", message: "Something went wrong" });
toast.processing({ title: "Processing...", message: "Please wait" });

// Control toasts
toast.clear(); // Clear all
toast.dismiss(id); // Dismiss specific toast
```

### Hook-free Architecture

Many components are designed to work without React hooks for better performance and simpler integration:

- **Toast**: Global singleton pattern
- **Dialog**: Controlled state management
- **Tooltip**: Pure component with props

### Responsive Design

All components are built with responsive design principles:

- Mobile-first approach
- Flexible layouts
- Adaptive sizing
- Touch-friendly interactions

## 🚀 Roadmap

We're actively developing additional features and components:

- [ ] **Advanced Form Components**: Multi-step forms, file uploads
- [ ] **Data Visualization**: Charts, graphs, progress indicators
- [ ] **Advanced Navigation**: Mega menus, breadcrumbs, pagination
- [ ] **Animation System**: Smooth transitions and micro-interactions
- [ ] **Theme System**: Dark mode, custom themes
- [ ] **Accessibility Enhancements**: Screen reader optimizations
- [ ] **Performance Optimizations**: Lazy loading, code splitting

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
cd component-library
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
│   ├── Toast/
│   ├── Dialog/
│   ├── Checkbox/
│   ├── RadioButton/
│   ├── Toggle/
│   ├── Grid/
│   ├── Layout/
│   ├── Sidebar/
│   ├── Header/
│   ├── Tabs/
│   ├── Dropdown/
│   ├── Table/
│   ├── Chip/
│   └── Tooltip/
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

## 📖 Additional Documentation

- **[LLM_GUIDE.md](./LLM_GUIDE.md)** - Comprehensive guide for AI-assisted development
- **[AI_DEVELOPMENT_GUIDE.md](./AI_DEVELOPMENT_GUIDE.md)** - AI development best practices
- **[HOOKS_STRATEGY_GUIDE.md](./HOOKS_STRATEGY_GUIDE.md)** - Hook usage strategies
- **[NPM_README.md](./NPM_README.md)** - NPM package documentation
