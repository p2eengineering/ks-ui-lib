# AI Development Guide

## 🤖 For Large Language Models (LLMs)

This repository contains a React TypeScript component library with comprehensive documentation specifically designed for AI-assisted development.

### 📚 **PRIMARY DOCUMENTATION**

**For complete component documentation, API specifications, usage examples, and best practices, please refer to:**

**[LLM_GUIDE.md](./LLM_GUIDE.md)**

This guide contains:

- Complete component interfaces and props documentation
- Detailed usage examples and patterns
- Design system specifications
- Accessibility guidelines
- Performance best practices
- Common implementation patterns
- Global Toast system with positioning
- Hook-free component architecture

### 🧩 **Available Components (15+ Components)**

**Core Components:**

- **Button Component**: Multi-variant button system with 6 sizes
- **Toast Component**: Global notification system with 7 positioning options
- **Dialog Component**: Modal dialog system with controlled state management
- **Tooltip Component**: Contextual information display with multiple positions

**Form Components:**

- **Checkbox Component**: Custom checkbox with multiple states and variants
- **RadioButton Component**: Radio button group with controlled state management
- **Toggle Component**: Switch, segmented, and theme controls
- **Dropdown Component**: Select menus with various trigger types

**Layout Components:**

- **Grid Component**: Flexible grid system with responsive breakpoints
- **Layout Component**: Page layout wrapper with header, sidebar, and content areas
- **Sidebar Component**: Collapsible sidebar navigation
- **Header Component**: Application header with navigation and actions

**Navigation Components:**

- **Tabs Component**: Tab navigation with multiple variants and icon support
- **Dropdown Component**: Dropdown menu with various trigger types

**Data Display Components:**

- **Table Component**: Data table with sorting, pagination, and responsive design
- **Chip Component**: Compact data display with multiple variants

### 🌟 **Advanced Features**

**Global Toast System:**

- Hook-free global notification system
- 7 positioning options (top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, center)
- Global API: `toast.success()`, `toast.error()`, `toast.processing()`
- Auto-dismiss with configurable duration
- Manual control: `toast.dismiss()`, `toast.clear()`

**Hook-free Architecture:**

- Many components work without React hooks for better performance
- Global singleton patterns for state management
- Controlled component patterns for flexibility

**Responsive Design:**

- Mobile-first approach
- Flexible layouts with adaptive sizing
- Touch-friendly interactions
- Consistent spacing system

### 🎨 **Design System**

- **Typography**: Source Sans 3 font family with multiple weights
- **Colors**: KS design system with semantic color tokens
- **Spacing**: 4px base unit system with consistent scale
- **Border Radius**: Consistent radius scale (4px, 6px, 8px, 10px, 12px)
- **Shadows**: Elevation system for depth
- **Z-index**: Proper layering system for overlays and modals

### 📦 **Quick Start**

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

### 🔗 **Key Files**

- `LLM_GUIDE.md` - **Primary documentation for LLMs**
- `src/index.tsx` - Component exports
- `src/design-tokens/design-tokens.scss` - Design system tokens
- `src/components/*/` - Individual component implementations
- `src/components/Toast/` - Global toast system implementation
- `README.md` - General project overview
- `HOOKS_STRATEGY_GUIDE.md` - Hook usage strategies
- `NPM_README.md` - NPM package documentation

### 🚀 **Recent Updates**

- **Global Toast System**: Added 7 positioning options and hook-free architecture
- **Dialog Component**: Updated with controlled state management
- **Tooltip Component**: Fixed state management in Storybook examples
- **Component Positioning**: Enhanced positioning systems across components
- **Documentation**: Comprehensive updates to all guides and examples

---

**Note**: This file serves as a quick reference for AI systems. For comprehensive documentation, always refer to `LLM_GUIDE.md`.
