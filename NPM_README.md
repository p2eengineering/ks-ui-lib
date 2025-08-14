# @ks/component-library

A professional React component library with TypeScript and Source Sans 3 typography, featuring 15+ production-ready components and a global Toast notification system.

## 🤖 **For AI/LLM Developers**

> **IMPORTANT**: This package includes comprehensive LLM documentation!
>
> 📖 **See `LLM_GUIDE.md`** for complete component specifications, API documentation, usage examples, and best practices specifically designed for AI-assisted development.

## 🚀 Quick Start

```bash
npm install @ks/component-library
```

```tsx
import { Button, ToastProvider, toast } from "@ks/component-library";
import "@ks/component-library/dist/styles.css";

function App() {
  return (
    <ToastProvider position="top-right" maxToasts={5}>
      <Button
        variant="primary"
        onClick={() =>
          toast.success({ title: "Success!", message: "Button clicked!" })
        }
      >
        Click Me
      </Button>
    </ToastProvider>
  );
}
```

## 📚 Documentation

- **🤖 [LLM_GUIDE.md](./LLM_GUIDE.md)** - Comprehensive guide for AI/LLM developers
- **📖 [AI_DEVELOPMENT_GUIDE.md](./AI_DEVELOPMENT_GUIDE.md)** - Quick reference for AI development
- **🎯 [HOOKS_STRATEGY_GUIDE.md](./HOOKS_STRATEGY_GUIDE.md)** - Hook-free architecture guide
- **📋 [README.md](./README.md)** - General project overview

## 🧩 Available Components (15+ Components)

### Core Components

- **Button Component**: Multi-variant button system with 6 sizes
- **Toast Component**: Global notification system with 7 positioning options
- **Dialog Component**: Modal dialog system with controlled state management
- **Tooltip Component**: Contextual information display with multiple positions

### Form Components

- **Checkbox Component**: Custom checkbox with multiple states and variants
- **RadioButton Component**: Radio button group with controlled state management
- **Toggle Component**: Switch, segmented, and theme controls
- **Dropdown Component**: Select menus with various trigger types

### Layout Components

- **Grid Component**: Flexible grid system with responsive breakpoints
- **Layout Component**: Page layout wrapper with header, sidebar, and content areas
- **Sidebar Component**: Collapsible sidebar navigation
- **Header Component**: Application header with navigation and actions

### Navigation Components

- **Tabs Component**: Tab navigation with multiple variants and icon support
- **Dropdown Component**: Dropdown menu with various trigger types

### Data Display Components

- **Table Component**: Data table with sorting, pagination, and responsive design
- **Chip Component**: Compact data display with multiple variants

## 🌟 Advanced Features

### Global Toast System

- Hook-free global notification system
- 7 positioning options (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, center)
- Global API: `toast.success()`, `toast.error()`, `toast.processing()`
- Auto-dismiss with configurable duration
- Manual control: `toast.dismiss()`, `toast.clear()`

### Hook-free Architecture

- Many components work without React hooks for better performance
- Global singleton patterns for state management
- Controlled component patterns for flexibility

### Responsive Design

- Mobile-first approach
- Flexible layouts with adaptive sizing
- Touch-friendly interactions
- Consistent spacing system

## 🎨 Design System

Built with the KS Design System featuring:

- **Typography**: Source Sans 3 font family with multiple weights
- **Colors**: Professional color palette with semantic colors
- **Spacing**: Consistent 4px base unit system
- **Components**: Fully accessible and responsive
- **Z-index**: Proper layering system for overlays and modals

## 📦 Package Contents

This NPM package includes:

- ✅ Compiled JavaScript/TypeScript components
- ✅ SCSS styles and design tokens
- ✅ TypeScript definitions
- ✅ **LLM_GUIDE.md** - AI development documentation
- ✅ **AI_DEVELOPMENT_GUIDE.md** - Quick reference
- ✅ **HOOKS_STRATEGY_GUIDE.md** - Hook-free architecture guide
- ✅ **README.md** - Project overview

## 🚀 Recent Updates

- **Global Toast System**: Added 7 positioning options and hook-free architecture
- **Dialog Component**: Updated with controlled state management
- **Tooltip Component**: Fixed state management in Storybook examples
- **Component Positioning**: Enhanced positioning systems across components
- **Documentation**: Comprehensive updates to all guides and examples

## 🔗 Links

- **GitHub Repository**: [View Source](https://github.com/p2eengineering/ks-ui-lib)
- **LLM Documentation**: [LLM_GUIDE.md](./LLM_GUIDE.md)
- **Issues**: [Report Bugs](https://github.com/p2eengineering/ks-ui-lib/issues)

## 📄 License

MIT License - see LICENSE file for details.
