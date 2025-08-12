# KS Component Library - LLM Guide

This document provides comprehensive guidance for Large Language Models (LLMs) on how to use the KS Component Library effectively. Use this guide when generating React TypeScript code that incorporates our design system and components.

## 🎯 Library Overview

**Package Name**: `@ks/component-library`  
**Design System**: KS Design System with Source Sans 3 typography  
**Framework**: React 18 with TypeScript  
**Styling**: SCSS with design tokens  

## 📦 Installation & Setup

```bash
npm install @ks/component-library
```

```tsx
import { Button } from '@ks/component-library';
import '@ks/component-library/dist/styles.css';
```

## 🎨 Design System Fundamentals

### Color Palette

**Primary Colors:**
- `#000000` - KS Black (Primary text, buttons)
- `#FFFFFF` - KS White (Background, secondary buttons)

**Accent Colors:**
- `#4A3FCF` - KS Blue (Links, highlights)
- `#CBFD13` - KS Green (Success states, accents)
- `#F9F9F9` - KS Grey (Backgrounds, borders)

**Semantic Colors:**
- **Danger**: `#E75249` (Errors, destructive actions)
- **Success**: `#1FBC5E` (Success states, confirmations)
- **Warning**: `#FF5A24` (Warnings, cautions)

**Surface Colors:**
- `#FFFFFF` - White
- `#F9F9F9` - Light Grey
- `#E6E6E6` - Grey
- `#D1D4D6` - Medium Grey
- `#404040` - Dark Grey
- `#131313` - Very Dark Grey
- `#000000` - Black

### Typography

**Font Family**: Source Sans 3  
**Font Weights**: 300 (light), 400 (normal), 600 (semibold), 700 (bold)

**Typography Scale:**
- **Display Large**: 64px, 130% line-height
- **Display Medium**: 48px, 130% line-height
- **Display Small**: 32px, 130% line-height
- **Headline Large**: 32px, 130% line-height, -0.25px letter-spacing
- **Headline Medium**: 30px, 130% line-height, -0.25px letter-spacing
- **Headline Small**: 24px, 130% line-height, -0.25px letter-spacing
- **Button Text Large**: 18px, 120% line-height, bold
- **Card Title**: 16px, 120% line-height, bold
- **Button Text Small**: 14px, 120% line-height, bold
- **Label Large**: 16px, 120% line-height
- **Label Medium**: 14px, 120% line-height
- **Label Small**: 12px, 120% line-height
- **Body Large**: 24px, 130% line-height
- **Body Medium**: 16px, 130% line-height
- **Body Small**: 14px, 130% line-height
- **Body Extra Small**: 10px, 120% line-height

### Spacing

**Base Unit**: 4px  
**Scale**: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px)

### Border Radius

- **Small**: 4px
- **Medium**: 6px
- **Large**: 8px
- **XL**: 10px (Button default)
- **2XL**: 12px
- **Full**: 9999px (Pills, avatars)

## 🧩 Available Components

### Button Component

**Import:**
```tsx
import { Button } from '@ks/component-library';
```

**Props Interface:**
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl';
  state?: 'normal' | 'hover' | 'disabled';
  icon?: 'none' | 'download' | 'arrow';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
```

**Size Specifications:**
| Size | Width | Height | Font Size | Use Case |
|------|-------|--------|-----------|----------|
| small | 105px | 32px | 14px | Compact spaces, forms |
| medium | 105px | 36px | 14px | Default button size |
| large | 105px | 46px | 16px | Prominent actions |
| xl | 105px | 48px | 16px | Large interfaces |
| 2xl | 190px | 60px | 18px | Hero sections |
| 3xl | 227px | 64px | 18px | Landing pages |

**Usage Examples:**

```tsx
// Primary button (default)
<Button onClick={handleClick}>Submit</Button>

// Secondary button
<Button variant="secondary" size="large">
  Cancel
</Button>

// Text button
<Button variant="text" onClick={handleBack}>
  Back
</Button>

// With icon
<Button icon="download" variant="primary">
  Download
</Button>

// Disabled state
<Button disabled>Processing...</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="2xl">Extra Large</Button>
```

### Toggle Component

**Import:**
```tsx
import { Toggle } from '@ks/component-library';
```

**Props Interface:**
```tsx
interface ToggleProps {
  type?: 'switch' | 'segmented' | 'theme';
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
  
  // Segmented control specific
  segments?: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  activeSegment?: string;
  onSegmentChange?: (segmentId: string) => void;
  
  // Theme selector specific
  theme?: 'light' | 'dark';
  onThemeChange?: (theme: 'light' | 'dark') => void;
  showDropdown?: boolean;
}
```

**Toggle Types:**

1. **Switch Toggle** - Binary on/off states
2. **Segmented Control** - Multiple options with one active
3. **Theme Selector** - Light/dark mode with dropdown

**Usage Examples:**

```tsx
// Toggle Switch with External Labels
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <span style={{ fontSize: '14px', fontWeight: '500', color: isEnabled ? '#D1D4D6' : '#404040' }}>
    Disable
  </span>
  <Toggle 
    type="switch" 
    checked={isEnabled} 
    onChange={setIsEnabled}
  />
  <span style={{ fontSize: '14px', fontWeight: '500', color: isEnabled ? '#404040' : '#D1D4D6' }}>
    Enable
  </span>
</div>

// Segmented Control
<Toggle 
  type="segmented"
  segments={[
    { id: 'bars', label: '☰' },
    { id: 'close', label: '✕' }
  ]}
  activeSegment={activeSegment}
  onSegmentChange={setActiveSegment}
>
  Menu Control
</Toggle>

// Theme Selector
<Toggle 
  type="theme"
  theme={currentTheme}
  onThemeChange={setCurrentTheme}
>
  Theme
</Toggle>

// Dialog
<Dialog>
  <DialogTrigger asChild>
    <Button variant="primary">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a dialog description that provides context about the dialog content.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

## 🎨 Design Patterns

### Color Usage Guidelines

**Primary Actions:**
- Use KS Black (`#000000`) for primary buttons
- Use KS White (`#FFFFFF`) for text on black backgrounds

**Secondary Actions:**
- Use KS White background with KS Black border and text
- Hover state: KS Grey (`#F9F9F9`) background

**Text Buttons:**
- Use KS Black text on transparent background
- Hover state: KS Grey background

**Success States:**
- Use KS Green (`#CBFD13`) for success indicators
- Use semantic green (`#1FBC5E`) for confirmations

**Error States:**
- Use semantic red (`#E75249`) for errors
- Use semantic red (`#681717`) for destructive actions

### Typography Guidelines

**Button Text:**
- Always use Source Sans 3 Bold (700 weight)
- Follow the button text size scale
- Maintain 120% line-height for button text

**Headings:**
- Use Source Sans 3 with appropriate weights
- Follow headline scale for hierarchy
- Use -0.25px letter-spacing for headlines

**Body Text:**
- Use Source Sans 3 Normal (400 weight)
- Follow body text scale
- Maintain 130% line-height for readability

### Spacing Guidelines

**Component Spacing:**
- Use spacing scale for consistent margins and padding
- 16px (md) is the default spacing unit
- 8px (sm) for tight spaces
- 24px (lg) for section spacing
- 32px (xl) for major sections

**Button Spacing:**
- 12px horizontal padding for small/medium buttons
- 16px horizontal padding for large/xl buttons
- 24px horizontal padding for 2xl/3xl buttons
- 8px gap between icon and text

## 🔧 Component Development Patterns

### When Creating New Components

**File Structure:**
```
ComponentName/
├── ComponentName.tsx
├── ComponentName.scss
├── ComponentName.stories.tsx
└── README.md
```

**TypeScript Patterns:**
```tsx
import React from 'react';
import './ComponentName.scss';

export interface ComponentNameProps {
  // Required props
  children: React.ReactNode;
  
  // Optional props with defaults
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  
  // Event handlers
  onClick?: () => void;
  
  // HTML attributes
  className?: string;
  [key: string]: any; // For additional HTML attributes
}

const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const componentClasses = [
    'component-name',
    `component-name--${variant}`,
    `component-name--${size}`,
    disabled ? 'component-name--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={componentClasses}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default ComponentName;
```

**SCSS Patterns:**
```scss
@import "../../design-tokens/design-tokens";

.component-name {
  // Base styles
  font-family: $font-family-primary;
  border-radius: $border-radius-xl;
  transition: all 0.2s ease-in-out;
  
  // Variants
  &--primary {
    background-color: $color-primary;
    color: $color-white;
    
    &:hover:not(:disabled) {
      background-color: $color-primary-hover;
    }
  }
  
  &--secondary {
    background-color: $color-white;
    color: $color-primary;
    border: 1px solid $color-primary;
    
    &:hover:not(:disabled) {
      background-color: $color-accent-grey;
    }
  }
  
  // Sizes
  &--small {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-button-small;
  }
  
  &--medium {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-button-small;
  }
  
  &--large {
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-card-title;
  }
  
  // States
  &--disabled {
    background-color: $color-disabled;
    color: $color-disabled-text;
    cursor: not-allowed;
  }
}
```

### Storybook Patterns

```tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ComponentName from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Description of the component and its purpose.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Component size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the component is disabled',
    },
  },
  args: {
    children: 'Component',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Component',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Component',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Component',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <ComponentName size="small">Small</ComponentName>
      <ComponentName size="medium">Medium</ComponentName>
      <ComponentName size="large">Large</ComponentName>
    </div>
  ),
};
```

## 🚀 Best Practices

### Component Usage

1. **Always import the CSS:**
   ```tsx
   import '@ks/component-library/dist/styles.css';
   ```

2. **Use semantic variants:**
   - `primary` for main actions
   - `secondary` for alternative actions
   - `text` for minimal actions

3. **Choose appropriate sizes:**
   - `small` for forms and compact spaces
   - `medium` for general use
   - `large` for prominent actions
   - `2xl`/`3xl` for hero sections

4. **Handle disabled states:**
   ```tsx
   <Button disabled={isLoading}>
     {isLoading ? 'Loading...' : 'Submit'}
   </Button>
   ```

### Accessibility

1. **Always provide onClick handlers for interactive elements**
2. **Use semantic HTML elements**
3. **Include proper ARIA attributes when needed**
4. **Ensure proper color contrast ratios**
5. **Support keyboard navigation**

### Performance

1. **Use React.memo for expensive components**
2. **Avoid inline styles when possible**
3. **Use CSS classes for styling**
4. **Optimize bundle size by importing specific components**

## 📋 Common Patterns

### Form Patterns

```tsx
import { Button } from '@ks/component-library';

const FormExample = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Form submission logic
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
        <Button variant="secondary" type="button">
          Cancel
        </Button>
      </div>
    </form>
  );
};
```

### Navigation Patterns

```tsx
import { Button } from '@ks/component-library';

const NavigationExample = () => {
  return (
    <nav style={{ display: 'flex', gap: '16px', padding: '16px' }}>
      <Button variant="text">Home</Button>
      <Button variant="text">About</Button>
      <Button variant="text">Contact</Button>
      <div style={{ marginLeft: 'auto' }}>
        <Button variant="primary">Sign In</Button>
      </div>
    </nav>
  );
};
```

### Hero Section Patterns

```tsx
import { Button } from '@ks/component-library';

const HeroExample = () => {
  return (
    <section style={{ 
      textAlign: 'center', 
      padding: '64px 24px',
      background: '#F9F9F9'
    }}>
      <h1 style={{ 
        fontSize: '48px', 
        fontWeight: 700, 
        marginBottom: '24px',
        fontFamily: 'Source Sans 3'
      }}>
        Welcome to Our Platform
      </h1>
      <p style={{ 
        fontSize: '18px', 
        marginBottom: '32px',
        color: '#666'
      }}>
        Discover amazing features and possibilities
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <Button size="2xl" variant="primary">
          Get Started
        </Button>
        <Button size="2xl" variant="secondary">
          Learn More
        </Button>
      </div>
    </section>
  );
};
```

### Settings Panel Patterns

```tsx
import { Toggle } from '@ks/component-library';

const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    notifications: false,
    autoSave: true,
    darkMode: false,
    viewMode: 'list'
  });
  
  return (
    <div style={{ padding: '24px', maxWidth: '400px' }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 600, 
        marginBottom: '24px',
        fontFamily: 'Source Sans 3'
      }}>
        Settings
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '14px', fontWeight: '500', color: settings.notifications ? '#D1D4D6' : '#404040' }}>
            Disable
          </span>
          <Toggle 
            type="switch"
            checked={settings.notifications}
            onChange={(checked) => setSettings(prev => ({ ...prev, notifications: checked }))}
          />
          <span style={{ fontSize: '14px', fontWeight: '500', color: settings.notifications ? '#404040' : '#D1D4D6' }}>
            Enable
          </span>
          <span style={{ marginLeft: '8px' }}>Notifications</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '14px', fontWeight: '500', color: settings.autoSave ? '#D1D4D6' : '#404040' }}>
            Disable
          </span>
          <Toggle 
            type="switch"
            checked={settings.autoSave}
            onChange={(checked) => setSettings(prev => ({ ...prev, autoSave: checked }))}
          />
          <span style={{ fontSize: '14px', fontWeight: '500', color: settings.autoSave ? '#404040' : '#D1D4D6' }}>
            Enable
          </span>
          <span style={{ marginLeft: '8px' }}>Auto Save</span>
        </div>
        
        <Toggle 
          type="segmented"
          segments={[
            { id: 'bars', label: '☰' },
            { id: 'close', label: '✕' }
          ]}
          activeSegment={settings.viewMode}
          onSegmentChange={(mode) => setSettings(prev => ({ ...prev, viewMode: mode }))}
        >
          Menu Control
        </Toggle>
        
        <Toggle 
          type="theme"
          theme={settings.darkMode ? 'dark' : 'light'}
          onThemeChange={(theme) => setSettings(prev => ({ ...prev, darkMode: theme === 'dark' }))}
        >
          Theme
        </Toggle>
      </div>
    </div>
  );
};
```

## 🔄 Available & Future Components

### Currently Available:
- **Button**: Primary, secondary, text variants with multiple sizes
- **Toggle**: Switch, segmented control, and theme selector
- **Dialog**: Composable modal dialog with trigger, content, header, title, description, footer, and close components

### Future Components:
- **Input**: Text inputs, textareas, select dropdowns
- **Card**: Content containers with headers, bodies, footers
- **Modal**: Overlay dialogs with backdrop
- **Alert**: Success, warning, error, info notifications
- **Badge**: Small status indicators
- **Navigation**: Navigation bars, breadcrumbs, pagination
- **Form**: Form groups, validation, file uploads

Each will follow the same design system principles and component patterns outlined above.

## 📚 Resources

- **Storybook**: Run `npm run storybook` for interactive documentation
- **Design Tokens**: Available in `src/design-tokens/design-tokens.scss`
- **Component Guidelines**: See `src/components/README.md`
- **Package**: `@ks/component-library` on npm

---

**Remember**: Always prioritize consistency with the design system, accessibility, and user experience when generating code with this component library.
