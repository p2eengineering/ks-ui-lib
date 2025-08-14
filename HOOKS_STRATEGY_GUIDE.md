# Hooks Strategy Guide

## 🎯 Overview

This guide documents the hooks strategy and architecture patterns used in the KS Component Library. Our approach prioritizes performance, simplicity, and flexibility by using hook-free patterns where possible while maintaining React best practices.

## 🏗️ Architecture Philosophy

### Hook-Free First Approach

We prioritize hook-free components for better performance and simpler integration:

- **Global State Management**: Singleton patterns for global state
- **Controlled Components**: Props-based state management
- **Pure Components**: Stateless components with props
- **Event-Driven**: Callback-based interactions

### When to Use Hooks

Hooks are used strategically for:

- **Storybook Examples**: Interactive demonstrations
- **Consumer Applications**: State management in consuming apps
- **Complex Interactions**: When hook-free patterns become unwieldy

## 🧩 Component Patterns

### 1. Global Singleton Pattern (Toast Component)

**Implementation:**

```tsx
// Global manager without hooks
class ToastManager {
  private static instance: ToastManager;
  private listeners: Array<(toasts: ToastData[]) => void> = [];
  private toasts: ToastData[] = [];

  static getInstance(): ToastManager {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }
    return ToastManager.instance;
  }

  subscribe(listener: (toasts: ToastData[]) => void): () => void {
    this.listeners.push(listener);
    listener(this.toasts);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  addToast(toast: Omit<ToastData, "id">): string {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastData = { id, ...toast };
    this.toasts = [newToast, ...this.toasts];
    this.notify();
    return id;
  }
}

// Global instance
export const toastManager = ToastManager.getInstance();

// Global API
export const toast = {
  success: (options) => toastManager.addToast({ ...options, type: "success" }),
  error: (options) => toastManager.addToast({ ...options, type: "error" }),
  processing: (options) =>
    toastManager.addToast({ ...options, type: "processing" }),
  dismiss: (id) => toastManager.removeToast(id),
  clear: () => toastManager.clearToasts(),
};
```

**Usage:**

```tsx
// Anywhere in your app
toast.success({ title: "Success!", message: "Operation completed" });
toast.error({ title: "Error!", message: "Something went wrong" });
```

### 2. Controlled Component Pattern (Dialog Component)

**Implementation:**

```tsx
interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
}) => {
  // No internal state - controlled by parent
  const isOpen = open !== undefined ? open : defaultOpen;

  return (
    <div className="dialog-root" data-open={isOpen}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            open: isOpen,
            onOpenChange: onOpenChange,
          } as any);
        }
        return child;
      })}
    </div>
  );
};
```

**Usage:**

```tsx
// Parent controls state
const [dialogOpen, setDialogOpen] = useState(false);

<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>Dialog content</DialogDescription>
  </DialogContent>
</Dialog>;
```

### 3. Pure Component Pattern (Tooltip Component)

**Implementation:**

```tsx
interface TooltipProps {
  content: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  position?: "top" | "bottom" | "left" | "right";
  showArrow?: boolean;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  open = false,
  onOpenChange,
  position = "top",
  showArrow = true,
  className = "",
}) => {
  // Pure component - no internal state
  const componentClasses = [
    "tooltip",
    `tooltip--${position}`,
    open ? "tooltip--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="tooltip-container">
      {children}
      {open && (
        <div className={componentClasses}>
          {content}
          {showArrow && <div className="tooltip__arrow" />}
        </div>
      )}
    </div>
  );
};
```

**Usage:**

```tsx
// Parent controls visibility
const [tooltipOpen, setTooltipOpen] = useState(false);

<Tooltip
  content="This is a tooltip"
  open={tooltipOpen}
  onOpenChange={setTooltipOpen}
  position="top"
>
  <button>Hover me</button>
</Tooltip>;
```

## 📊 Hook Usage Analysis

### Components Without Hooks

| Component       | Pattern          | Benefits                        |
| --------------- | ---------------- | ------------------------------- |
| **Toast**       | Global Singleton | Global access, no prop drilling |
| **Dialog**      | Controlled       | Flexible state management       |
| **Tooltip**     | Pure Component   | Simple, predictable             |
| **Button**      | Pure Component   | No state, fast rendering        |
| **Checkbox**    | Controlled       | Parent controls state           |
| **RadioButton** | Controlled       | Group state management          |

### Components With Hooks (Storybook Only)

| Component           | Hook Usage | Purpose               |
| ------------------- | ---------- | --------------------- |
| **Toast Stories**   | `useState` | Interactive examples  |
| **Dialog Stories**  | `useState` | State management demo |
| **Tooltip Stories** | `useState` | Visibility control    |
| **Toggle Stories**  | `useState` | State demonstration   |

## 🎯 Best Practices

### 1. State Management Strategy

**Prefer Parent Control:**

```tsx
// ✅ Good - Parent controls state
const [isOpen, setIsOpen] = useState(false);
<Dialog open={isOpen} onOpenChange={setIsOpen} />

// ❌ Avoid - Component manages own state
<Dialog defaultOpen={false} />
```

**Use Global Patterns for Global State:**

```tsx
// ✅ Good - Global singleton
toast.success({ title: "Success!" });

// ❌ Avoid - Prop drilling
<ToastProvider>
  <ToastContainer>
    <Toast />
  </ToastContainer>
</ToastProvider>;
```

### 2. Event Handling

**Callback-Based Interactions:**

```tsx
// ✅ Good - Callback pattern
<Button onClick={handleClick}>Click Me</Button>

// ✅ Good - Controlled pattern
<Checkbox checked={isChecked} onChange={setIsChecked} />

// ❌ Avoid - Internal state management
<Button onClick={() => setInternalState(!internalState)} />
```

### 3. Performance Optimization

**Memoization Strategy:**

```tsx
// ✅ Good - Memoize expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{expensiveCalculation(data)}</div>;
});

// ✅ Good - Stable callbacks
const handleClick = useCallback(() => {
  // Handle click
}, [dependencies]);
```

## 🔄 Migration Patterns

### From Hook-Based to Hook-Free

**Before (Hook-Based):**

```tsx
const ToastComponent = () => {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState("top-right");

  const addToast = useCallback((toast) => {
    setToasts((prev) => [...prev, toast]);
  }, []);

  return (
    <div className={`toast-container--${position}`}>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};
```

**After (Hook-Free):**

```tsx
// Global singleton manager
class ToastManager {
  // ... singleton implementation
}

// Pure component
const ToastViewport = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    return toastManager.subscribe(setToasts);
  }, []);

  return (
    <div className="toast-viewport">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

// Global API
export const toast = {
  success: (options) => toastManager.addToast({ ...options, type: "success" }),
  // ... other methods
};
```

## 🚀 Implementation Guidelines

### When Creating New Components

1. **Start Hook-Free**: Begin with pure component pattern
2. **Add Controlled Props**: For state management needs
3. **Consider Global Patterns**: For widely-used functionality
4. **Document Hook Usage**: If hooks are necessary

### Component Template

```tsx
import React from "react";
import "./ComponentName.scss";

export interface ComponentNameProps {
  // Required props
  children: React.ReactNode;

  // Optional props with defaults
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;

  // Controlled props
  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  // Event handlers
  onClick?: () => void;
  onChange?: (value: any) => void;

  // HTML attributes
  className?: string;
  [key: string]: any;
}

const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  open,
  onOpenChange,
  onClick,
  onChange,
  className = "",
  ...props
}) => {
  // No internal state - controlled by parent
  const componentClasses = [
    "component-name",
    `component-name--${variant}`,
    `component-name--${size}`,
    disabled ? "component-name--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div className={componentClasses} onClick={handleClick} {...props}>
      {children}
    </div>
  );
};

export default ComponentName;
```

## 📈 Performance Benefits

### Hook-Free Advantages

1. **Reduced Bundle Size**: Fewer hook dependencies
2. **Faster Rendering**: No hook initialization overhead
3. **Simpler Testing**: Pure functions are easier to test
4. **Better Tree Shaking**: Dead code elimination
5. **Predictable Behavior**: No hook rules to follow

### Memory Usage

```tsx
// Hook-based component
const HookComponent = () => {
  const [state, setState] = useState(null); // Memory allocation
  const [count, setCount] = useState(0); // Memory allocation
  const callback = useCallback(() => {}, []); // Memory allocation

  return <div>Content</div>;
};

// Hook-free component
const PureComponent = ({ data, onClick }) => {
  // No memory allocation for state
  return <div onClick={onClick}>{data}</div>;
};
```

## 🎯 Summary

The KS Component Library follows a **hook-free first** approach that prioritizes:

- **Performance**: Reduced bundle size and faster rendering
- **Simplicity**: Easier to understand and maintain
- **Flexibility**: Controlled components allow parent state management
- **Global Patterns**: Singleton patterns for widely-used functionality

This strategy provides a solid foundation for building performant, maintainable React applications while still leveraging hooks where they provide clear benefits.
