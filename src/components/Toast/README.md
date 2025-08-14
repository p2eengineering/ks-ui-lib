# Toast Component

A global toast notification system that can be used throughout your application without hooks.

## Features

- **Global Usage**: Use toasts anywhere in your app without prop drilling
- **Hook-free**: No React hooks required for the core functionality
- **Multiple Types**: Success, Error, and Processing toasts
- **Multiple Positions**: 7 different positioning options
- **Auto-dismiss**: Configurable duration with auto-removal
- **Manual Control**: Dismiss individual toasts or clear all
- **Backward Compatible**: Still supports local toast usage

## Installation

The Toast component is part of the component library. Make sure you have the `ToastProvider` set up in your app.

## Setup

Wrap your app with the `ToastProvider`:

```tsx
import { ToastProvider } from "@your-org/component-library";

function App() {
  return (
    <ToastProvider maxToasts={5} position="top-right">
      <YourAppContent />
    </ToastProvider>
  );
}
```

## Global Usage (Recommended)

### Basic Usage

```tsx
import { toast } from "@your-org/component-library";

// Success toast
toast.success({
  title: "Success!",
  message: "Operation completed successfully.",
  duration: 4000,
});

// Error toast
toast.error({
  title: "Error!",
  message: "Something went wrong.",
  duration: 6000,
});

// Processing toast
toast.processing({
  title: "Processing...",
  message: "Please wait while we process your request.",
  duration: 3000,
});
```

### Advanced Usage

```tsx
// Custom duration (0 = persistent)
toast.success({
  title: "Persistent Toast",
  message: "This will stay until manually closed.",
  duration: 0,
});

// Dismiss specific toast
const toastId = toast.success({
  title: "Custom Toast",
  message: "This can be dismissed programmatically.",
});

// Later...
toast.dismiss(toastId);

// Clear all toasts
toast.clear();
```

### In Event Handlers

```tsx
const handleSubmit = async () => {
  try {
    // Show processing toast
    toast.processing({
      title: "Submitting...",
      message: "Please wait while we save your data.",
    });

    // Simulate API call
    await submitData();

    // Show success toast
    toast.success({
      title: "Success!",
      message: "Your data has been saved successfully.",
    });
  } catch (error) {
    // Show error toast
    toast.error({
      title: "Error!",
      message: "Failed to save data. Please try again.",
    });
  }
};
```

## Positioning

The Toast component supports 7 different positions:

### Available Positions

- `"top-left"` - Top left corner
- `"top-center"` - Top center
- `"top-right"` - Top right corner (default)
- `"bottom-left"` - Bottom left corner
- `"bottom-center"` - Bottom center
- `"bottom-right"` - Bottom right corner
- `"center"` - Center of screen

### Setting Position

```tsx
// Set position in ToastProvider
<ToastProvider position="bottom-right" maxToasts={5}>
  <YourApp />
</ToastProvider>;

// Or change position dynamically
import { toastManager } from "@your-org/component-library";

// Change position programmatically
toastManager.setPosition("bottom-center");
```

### Position Examples

```tsx
// Different positions for different use cases
<ToastProvider position="top-right">
  {/* Success notifications */}
</ToastProvider>

<ToastProvider position="bottom-center">
  {/* Error notifications */}
</ToastProvider>

<ToastProvider position="center">
  {/* Important alerts */}
</ToastProvider>
```

## Local Usage (Legacy)

For backward compatibility, you can still use the Toast component locally:

```tsx
import Toast from "@your-org/component-library";

function MyComponent() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>

      <Toast
        type="success"
        title="Success!"
        message="This is a local toast."
        open={showToast}
        onOpenChange={setShowToast}
        duration={5000}
      />
    </div>
  );
}
```

## API Reference

### Global Toast Functions

#### `toast.success(options)`

Shows a success toast.

#### `toast.error(options)`

Shows an error toast.

#### `toast.processing(options)`

Shows a processing toast.

#### `toast.dismiss(id)`

Dismisses a specific toast by ID.

#### `toast.clear()`

Clears all visible toasts.

### Toast Options

```tsx
interface ToastOptions {
  title?: string; // Custom title (optional)
  message?: string; // Custom message (optional)
  duration?: number; // Duration in milliseconds (default: 5000, 0 = persistent)
  className?: string; // Additional CSS classes
  style?: CSSProperties; // Inline styles
}
```

### ToastProvider Props

```tsx
interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number; // Maximum number of toasts to show (default: 5)
  position?: ToastPosition; // Position of toasts (default: "top-right")
}
```

### ToastPosition Type

```tsx
type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "center";
```

## How It Works

The toast system uses a singleton pattern with a global manager that:

1. **Manages State**: Keeps track of all active toasts
2. **Handles Rendering**: Automatically renders toasts in a viewport
3. **Positioning**: Supports 7 different positions with CSS classes
4. **Auto-cleanup**: Removes toasts after their duration expires
5. **Event System**: Notifies components when toasts change

This approach eliminates the need for React hooks in the core functionality while maintaining a clean, global API similar to shadcn/ui's toast system.

## Examples

See the Storybook stories for interactive examples:

- `SuccessToast`: Basic global toast usage
- `LocalToast`: Local toast component usage
- `ToastTypes`: All toast types demonstration
- `MultipleToasts`: Multiple toasts management
- `CustomDuration`: Different duration examples
- `ToastPositions`: Interactive position switching
- `AllPositions`: All positions demonstration
