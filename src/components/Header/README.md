# Header Component

A professional header component that displays the KALP STUDIO branding, navigation controls, wallet information, and user profile. Perfect for blockchain and web3 applications.

## Features

- **KALP STUDIO Branding**: Prominent logo display
- **Navigation Controls**: Hamburger menu toggle for sidebar navigation
- **Wallet Integration**: Display wallet address and balance
- **User Profile**: Profile image or fallback avatar
- **Interactive Elements**: Notification bell, help icon, and apps dropdown
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Full keyboard navigation and screen reader support
- **TypeScript Support**: Fully typed with TypeScript interfaces

## Usage

```tsx
import Header from './components/Header/Header';

function App() {
  const handleMenuToggle = () => {
    console.log('Menu toggled');
  };

  return (
    <Header
      onMenuToggle={handleMenuToggle}
      walletAddress="0x2E22...CD71"
      walletBalance="$2,500.00"
      profileImage="/path/to/profile.jpg"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onMenuToggle` | `() => void` | - | Callback function when hamburger menu is clicked |
| `walletAddress` | `string` | `'0x2E22...CD71'` | Wallet address to display |
| `walletBalance` | `string` | `'$2,500.00'` | Wallet balance to display |
| `profileImage` | `string` | - | URL for the profile image |
| `className` | `string` | `''` | Additional CSS classes to apply |

## Header Elements

### Left Section
- **KALP STUDIO Logo**: Brand name displayed prominently
- **Hamburger Menu**: Toggle button for sidebar navigation

### Right Section
- **Notification Bell**: Icon for notifications (clickable)
- **Help Icon**: Question mark icon for help/support
- **Wallet Display**: Shows wallet address and balance
- **Apps Dropdown**: Grid icon with dropdown menu containing:
  - Dashboard
  - Smart Contract
  - API Gateway
  - Transaction Monitoring
  - Subscription
  - API Key Generation
  - Settings
- **Profile Picture**: User avatar or fallback initials

## Examples

### Basic Usage
```tsx
<Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
```

### With Custom Wallet Info
```tsx
<Header
  walletAddress="0x1A2B...3C4D"
  walletBalance="$5,250.00"
  onMenuToggle={handleMenuToggle}
/>
```

### With Profile Image
```tsx
<Header
  profileImage="https://example.com/profile.jpg"
  walletAddress="0x9F8C...7A1B"
  walletBalance="$12,847.32"
  onMenuToggle={handleMenuToggle}
/>
```

### Integration with Sidebar
```tsx
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} />
    </div>
  );
}
```

## Styling

The component uses the design system tokens and can be customized through CSS classes. The main classes are:

- `.header` - Main container
- `.header__left` - Left section with logo and menu toggle
- `.header__right` - Right section with controls and profile
- `.header__logo` - Logo container
- `.header__wallet` - Wallet information display
- `.header__apps` - Apps dropdown container
- `.header__profile` - Profile picture container

## Accessibility

- Full keyboard navigation support
- Proper ARIA labels for all interactive elements
- Screen reader friendly
- High contrast support
- Focus management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
