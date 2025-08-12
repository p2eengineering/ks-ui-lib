# Sidebar Component

A navigation sidebar component that displays a list of menu items with icons. Perfect for application navigation and menu systems.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Customizable Items**: Support for custom menu items with icons
- **Interactive Navigation**: Click to change active items with automatic state management
- **Active States**: Visual indication of active/selected items with purple background and white text/icons
- **Multiple Callback Options**: Support for various interaction patterns
- **URL Navigation**: Optional href support for direct navigation
- **Smooth Animations**: Smooth open/close transitions
- **Accessibility**: Full keyboard navigation and screen reader support
- **TypeScript Support**: Fully typed with TypeScript interfaces

## Usage

```tsx
import Sidebar from './components/Sidebar';
import { FaTh, FaCog } from 'react-icons/fa';

function App() {
  const handleItemClick = (item) => {
    console.log('Clicked:', item.label);
  };

  return (
    <Sidebar
      isOpen={true}
      onItemClick={handleItemClick}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SidebarItem[]` | Default items | Array of menu items to display |
| `isOpen` | `boolean` | `true` | Controls whether the sidebar is open or closed |
| `defaultActiveId` | `string` | `'dashboard'` | The initial active menu item |
| `onItemClick` | `(item: SidebarItem) => void` | - | Callback function when a menu item is clicked |
| `onActiveChange` | `(activeId: string) => void` | - | Callback function when the active item changes |
| `className` | `string` | `''` | Additional CSS classes to apply |

## SidebarItem Interface

```tsx
interface SidebarItem {
  id: string;           // Unique identifier for the item
  label: string;        // Display text for the menu item
  icon: React.ReactNode; // Icon component to display
  href?: string;        // Optional URL for navigation
  onClick?: () => void; // Optional click handler
  isActive?: boolean;   // Whether this item is currently active
}
```

## Default Menu Items

The component comes with pre-configured menu items that match the KALP STUDIO interface:

- Dashboard
- Smart Contract
- API Gateway
- Transaction Monitoring
- Subscription
- API Key Generation
- Settings

## Examples

### Basic Usage
```tsx
<Sidebar isOpen={true} defaultActiveId="dashboard" />
```

### Interactive Usage
```tsx
const [activeId, setActiveId] = useState('dashboard');

<Sidebar
  defaultActiveId={activeId}
  onActiveChange={setActiveId}
  onItemClick={(item) => console.log('Clicked:', item.label)}
/>
```

### With Custom Items
```tsx
const customItems = [
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <FaChartBar />,
  },
  {
    id: 'users',
    label: 'User Management',
    icon: <FaUsers />,
    isActive: true,
  },
];

<Sidebar items={customItems} isOpen={true} />
```

### Active State Styling
The active state uses a purple background (`$color-accent-purple`) with white text and icons:

```tsx
const items = [
  {
    id: 'transaction-monitoring',
    label: 'Transaction Monitoring',
    icon: <FaExchangeAlt />,
    isActive: true, // This will apply purple background with white text
  },
];
```

### With Click Handler
```tsx
const handleItemClick = (item) => {
  // Navigate to the selected page
  router.push(`/${item.id}`);
};

<Sidebar onItemClick={handleItemClick} isOpen={true} />
```

## Styling

The component uses the design system tokens and can be customized through CSS classes. The main classes are:

- `.sidebar` - Main container
- `.sidebar--open` - Applied when sidebar is open
- `.sidebar--closed` - Applied when sidebar is closed
- `.sidebar__menu-button` - Individual menu item buttons
- `.sidebar__menu-button--active` - Active menu item state

## Accessibility

- Full keyboard navigation support
- Proper ARIA labels and roles
- Focus management
- Screen reader friendly
- High contrast support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
