# Toggle Component

A versatile toggle component with three types: switch, segmented control, and theme selector. Helps to quickly switch between two states with consistent appearance.

## 🎯 Features

- **Three Toggle Types**: Switch, Segmented Control, and Theme Selector
- **Multiple Sizes**: Small, Medium, Large
- **Accessibility**: Full ARIA support and keyboard navigation
- **Interactive States**: Hover, focus, disabled states
- **Customizable**: Configurable segments, themes, and icons
- **TypeScript**: Full type safety with comprehensive interfaces

## 📦 Installation

```tsx
import { Toggle } from '@ks/component-library';
```

## 🧩 Component Types

### 1. Toggle Switch (Type 1)

A standard toggle switch for binary states (on/off).

```tsx
<Toggle type="switch" checked={isEnabled} onChange={setIsEnabled}>
  Enable Feature
</Toggle>
```

**Props:**
- `checked`: Boolean - Whether the switch is on/off
- `onChange`: Function - Called when switch state changes

### 2. Segmented Control (Type 2)

A segmented control for multiple options with one active state.

```tsx
<Toggle 
  type="segmented"
  segments={[
    { id: 'disable', label: 'Disable' },
    { id: 'bars', label: '☰' },
    { id: 'enable', label: 'Enable' }
  ]}
  activeSegment={activeSegment}
  onSegmentChange={setActiveSegment}
>
  Control Mode
</Toggle>
```

**Props:**
- `segments`: Array - List of segment options
- `activeSegment`: String - Currently active segment ID
- `onSegmentChange`: Function - Called when segment changes

### 3. Theme Selector (Type 3)

A theme selector with dropdown for light/dark mode switching.

```tsx
<Toggle 
  type="theme"
  theme={currentTheme}
  onThemeChange={setCurrentTheme}
>
  Theme
</Toggle>
```

**Props:**
- `theme`: 'light' | 'dark' - Current theme
- `onThemeChange`: Function - Called when theme changes

## 🎨 Design Specifications

### Toggle Switch

**Sizes:**
- **Small**: 36px × 20px track, 16px handle
- **Medium**: 44px × 24px track, 20px handle
- **Large**: 52px × 28px track, 24px handle

**Colors:**
- **Off State**: Grey background (`#E6E6E6`)
- **On State**: Green background (`#1FBC5E`)
- **Handle**: White with shadow

### Segmented Control

**Sizes:**
- **Small**: 8px padding, 12px font
- **Medium**: 12px padding, 14px font
- **Large**: 16px padding, 16px font

**Colors:**
- **Background**: Light grey (`#F9F9F9`)
- **Inactive**: Transparent background
- **Active**: White background with shadow
- **Text**: Primary text color

### Theme Selector

**Sizes:**
- **Small**: 32px × 32px button
- **Medium**: 40px × 40px button
- **Large**: 48px × 48px button

**Colors:**
- **Button**: Light grey background (`#F9F9F9`)
- **Dropdown**: White background with shadow
- **Active Option**: Blue background (`#4A3FCF`)

## 📏 Props Interface

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

## 🚀 Usage Examples

### Basic Toggle Switch

```tsx
import { Toggle } from '@ks/component-library';

const FeatureToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  
  return (
    <Toggle 
      type="switch" 
      checked={isEnabled} 
      onChange={setIsEnabled}
    >
      Enable Advanced Features
    </Toggle>
  );
};
```

### Segmented Control with Icons

```tsx
import { Toggle } from '@ks/component-library';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ViewModeToggle = () => {
  const [viewMode, setViewMode] = useState('list');
  
  return (
    <Toggle 
      type="segmented"
      segments={[
        { id: 'list', label: 'List' },
        { id: 'grid', label: 'Grid' },
        { id: 'compact', label: 'Compact' }
      ]}
      activeSegment={viewMode}
      onSegmentChange={setViewMode}
    >
      View Mode
    </Toggle>
  );
};
```

### Theme Selector

```tsx
import { Toggle } from '@ks/component-library';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <Toggle 
      type="theme"
      theme={theme}
      onThemeChange={setTheme}
    >
      Theme
    </Toggle>
  );
};
```

### Form Integration

```tsx
import { Toggle } from '@ks/component-library';

const SettingsForm = () => {
  const [settings, setSettings] = useState({
    notifications: false,
    autoSave: true,
    darkMode: false
  });
  
  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };
  
  return (
    <form>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Toggle 
          type="switch"
          checked={settings.notifications}
          onChange={(checked) => updateSetting('notifications', checked)}
        >
          Enable Notifications
        </Toggle>
        
        <Toggle 
          type="switch"
          checked={settings.autoSave}
          onChange={(checked) => updateSetting('autoSave', checked)}
        >
          Auto Save
        </Toggle>
        
        <Toggle 
          type="theme"
          theme={settings.darkMode ? 'dark' : 'light'}
          onThemeChange={(theme) => updateSetting('darkMode', theme === 'dark')}
        >
          Dark Mode
        </Toggle>
      </div>
    </form>
  );
};
```

## 🎨 Design Guidelines

### When to Use Each Type

**Toggle Switch:**
- Binary on/off states
- Feature toggles
- Settings that are either enabled or disabled

**Segmented Control:**
- Multiple options with one active state
- View modes (list/grid/compact)
- Filter options
- Tab-like navigation

**Theme Selector:**
- Light/dark mode switching
- Theme selection
- Any dropdown-style option selection

### Accessibility

- All toggle types support keyboard navigation
- Proper ARIA attributes for screen readers
- Focus indicators for keyboard users
- Semantic HTML structure

### Responsive Design

- Toggle switches scale appropriately on mobile
- Segmented controls wrap on smaller screens
- Theme dropdowns reposition on mobile devices

## 🔧 Customization

### Custom Segments

```tsx
const customSegments = [
  { id: 'option1', label: 'Option 1', icon: <CustomIcon /> },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3', icon: <AnotherIcon /> }
];

<Toggle 
  type="segmented"
  segments={customSegments}
  activeSegment="option1"
  onSegmentChange={handleChange}
/>
```

### Custom Styling

```tsx
<Toggle 
  type="switch"
  className="custom-toggle"
  style={{ marginTop: '16px' }}
>
  Custom Styled Toggle
</Toggle>
```

## 🧪 Testing

The Toggle component includes comprehensive Storybook stories for:
- All three types in different states
- Size variations
- Interactive examples
- Accessibility testing

Run `npm run storybook` to explore all toggle variants and test interactions.
