# KS Component Library - LLM Guide

> **🤖 AI/LLM DEVELOPERS**: This is the primary documentation file for the KS Component Library. This guide contains comprehensive component specifications, API documentation, usage examples, and best practices specifically designed for AI-assisted development. Use this guide when generating React TypeScript code that incorporates our design system and components.

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
import { Button } from "@ks/component-library";
import "@ks/component-library/dist/styles.css";
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

The library includes:

- **Header Component**: Professional header with wallet integration
- **Sidebar Component**: Interactive navigation with state management
- **Layout Component**: Complete application layout
- **Table Component**: Data table with sorting, status badges, and actions
- **Grid Component**: Responsive grid system with breakpoints and spacing
- **Button Component**: Multi-variant button system
- **Toggle Component**: Switch, segmented, and theme controls
- **Dialog Component**: Modal dialogs and overlays
- **Toast Component**: Notification system
- **Checkbox Component**: Form controls with various states
- **Chip Component**: Tag and label components
- **RadioButton Component**: Radio button controls
- **Dropdown Component**: Select and menu components
- **Tooltip Component**: Hover information displays
- **Tabs Component**: Tabbed interfaces

### Header Component

**Import:**

```tsx
import { Header } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface HeaderProps {
  onMenuToggle?: () => void;
  walletAddress?: string;
  walletBalance?: string;
  profileImage?: string;
  className?: string;
}
```

**Features:**

- KALP STUDIO branding with purple hamburger menu
- Notification bell and help icons with light grey circular backgrounds
- Wallet display with transparent background, box shadow, and proper typography
- Apps dropdown with light grey background and grid icon
- Profile picture with fallback avatar
- Vertical separator between wallet and apps sections

**Usage Examples:**

```tsx
// Basic header
<Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

// With wallet information
<Header
  walletAddress="0x2E22...CD71"
  walletBalance="$2,500.00"
  onMenuToggle={handleMenuToggle}
/>

// With profile image
<Header
  profileImage="/path/to/profile.jpg"
  walletAddress="0x1A2B...3C4D"
  walletBalance="$5,250.00"
  onMenuToggle={handleMenuToggle}
/>
```

### Sidebar Component

**Import:**

```tsx
import { Sidebar } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface SidebarProps {
  items?: SidebarItem[];
  isOpen?: boolean;
  defaultActiveId?: string;
  onItemClick?: (item: SidebarItem) => void;
  onActiveChange?: (activeId: string) => void;
  className?: string;
}
```

**Features:**

- Interactive navigation with automatic state management
- Purple background with white text for active items
- Responsive design with smooth animations
- Support for custom menu items and icons
- URL navigation and custom click handlers
- Accessibility features with proper ARIA attributes

**Default Menu Items:**

- Dashboard
- Smart Contract
- API Gateway
- Transaction Monitoring
- Subscription
- API Key Generation
- Settings

**Usage Examples:**

```tsx
// Basic sidebar
<Sidebar defaultActiveId="dashboard" />;

// Interactive sidebar with state management
const [activeId, setActiveId] = useState("dashboard");

<Sidebar
  defaultActiveId={activeId}
  onActiveChange={setActiveId}
  onItemClick={(item) => console.log("Clicked:", item.label)}
/>;

// With custom items
const customItems = [
  {
    id: "analytics",
    label: "Analytics",
    icon: <FaChartBar />,
    href: "/analytics",
  },
  {
    id: "users",
    label: "User Management",
    icon: <FaUsers />,
    onClick: () => openUserModal(),
  },
];

<Sidebar items={customItems} defaultActiveId="analytics" />;
```

### Layout Component

**Import:**

```tsx
import { Layout } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface LayoutProps {
  children: React.ReactNode;
  sidebarItems?: any[];
  walletAddress?: string;
  walletBalance?: string;
  profileImage?: string;
  className?: string;
}
```

**Features:**

- Complete application layout combining Header and Sidebar
- Automatic sidebar toggle functionality
- Responsive design with proper spacing
- Main content area with padding and overflow handling
- Integration with wallet information and profile

**Usage Examples:**

```tsx
// Basic layout
<Layout>
  <h1>Your Content Here</h1>
  <p>This will appear in the main content area.</p>
</Layout>

// With wallet information
<Layout
  walletAddress="0x2E22...CD71"
  walletBalance="$2,500.00"
>
  <div>Your application content</div>
</Layout>

// Full application example
<Layout
  sidebarItems={customSidebarItems}
  walletAddress="0x1A2B...3C4D"
  walletBalance="$5,250.00"
  profileImage="/path/to/profile.jpg"
>
  <DashboardContent />
</Layout>
```

### Table Component

**Import:**

```tsx
import { Table } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface TableColumn {
  id: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

interface TableRow {
  id: string;
  name: string;
  avatar?: string;
  data: Record<string, any>;
  status: "success" | "pending" | "failed";
}

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  onSort?: (columnId: string, direction: "asc" | "desc") => void;
  onEdit?: (row: TableRow) => void;
  onDelete?: (row: TableRow) => void;
  className?: string;
}
```

**Features:**

- Sortable columns with visual indicators
- Status badges with color coding (Success, Pending, Failed)
- Action buttons for edit and delete operations
- Avatar support with fallback initials
- Alternate row colors for better readability
- Responsive design with hover effects
- Accessibility features with proper ARIA labels

**Usage Examples:**

```tsx
// Basic table
const columns = [
  { id: "name", label: "Name", sortable: false },
  { id: "email", label: "Email", sortable: true },
  { id: "role", label: "Role", sortable: true },
  { id: "department", label: "Department", sortable: true },
  { id: "status", label: "Status", sortable: false },
];

const rows = [
  {
    id: "1",
    name: "John Doe",
    data: {
      email: "john.doe@example.com",
      role: "Developer",
      department: "Engineering",
    },
    status: "success",
  },
  {
    id: "2",
    name: "Jane Smith",
    data: {
      email: "jane.smith@example.com",
      role: "Designer",
      department: "Design",
    },
    status: "pending",
  },
];

<Table
  columns={columns}
  rows={rows}
  onSort={(columnId, direction) => console.log("Sort:", columnId, direction)}
  onEdit={(row) => console.log("Edit:", row)}
  onDelete={(row) => console.log("Delete:", row)}
/>;
```

**With Avatars:**

```tsx
const rows = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/path/to/avatar.jpg",
    data: { email: "john@example.com", role: "Developer" },
    status: "success",
  },
];
```

**With Custom Actions:**

```tsx
const handleEdit = (row) => {
  console.log("Editing:", row.name);
  // Open edit modal or navigate to edit page
};

const handleDelete = (row) => {
  if (confirm(`Are you sure you want to delete ${row.name}?`)) {
    console.log("Deleting:", row.name);
    // Delete the row
  }
};

<Table
  columns={columns}
  rows={rows}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>;
```

### Grid Component

**Import:**

```tsx
import { Grid, GridRow, GridCol } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface GridProps {
  children: React.ReactNode;
  className?: string;
}

interface GridRowProps {
  children: React.ReactNode;
  className?: string;
}

interface GridColProps {
  children: React.ReactNode;
  mobile?: number; // 1-4 columns
  tabs?: number; // 1-8 columns
  desktop?: number; // 1-12 columns
  className?: string;
}
```

**Features:**

- **Responsive breakpoints**: Mobile (≤480px), Tablet (481px-768px), Desktop (≥769px)
- **Column systems**: Mobile (4 columns), Tablet (8 columns), Desktop (12 columns)
- **Consistent spacing**: 20px gutters, device-specific margins, 16px row spacing
- **Utility classes**: Responsive visibility and full-width columns
- **Mobile-first design**: Progressive enhancement approach
- **Clean visual design**: Solid primary color boxes with proper spacing

**Grid Specifications:**

- **Mobile**: 4 columns, 20px gutters, 20px margins, 8px column spacing
- **Tablet**: 8 columns, 20px gutters, 50px margins, 8px column spacing
- **Desktop**: 12 columns, 20px gutters, 50px margins, 0px column spacing (gutters handle spacing)

**Spacing System:**

- **Row spacing**: 16px between grid rows
- **Section spacing**: 24px between grid sections
- **Column spacing**: 8px on mobile/tablet, 0px on desktop
- **Top margin**: 16px for demo cards in stories

**Usage Examples:**

```tsx
// Basic responsive grid
<Grid>
  <GridRow>
    <GridCol mobile={4} tabs={4} desktop={6}>
      <div>Left column content</div>
    </GridCol>
    <GridCol mobile={4} tabs={4} desktop={6}>
      <div>Right column content</div>
    </GridCol>
  </GridRow>
</Grid>

// Complex layout with different column sizes
<Grid>
  <GridRow>
    <GridCol mobile={4} tabs={6} desktop={8}>
      <main>Main content area</main>
    </GridCol>
    <GridCol mobile={4} tabs={2} desktop={4}>
      <aside>Sidebar content</aside>
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol mobile={2} tabs={2} desktop={3}>
      <div>Card 1</div>
    </GridCol>
    <GridCol mobile={2} tabs={2} desktop={3}>
      <div>Card 2</div>
    </GridCol>
    <GridCol mobile={4} tabs={4} desktop={6}>
      <div>Wide Card</div>
    </GridCol>
  </GridRow>
</Grid>

// Dashboard layout
<Grid>
  <GridRow>
    {Array.from({ length: 4 }, (_, i) => (
      <GridCol key={i} mobile={4} tabs={4} desktop={3}>
        <div>Metric Card {i + 1}</div>
      </GridCol>
    ))}
  </GridRow>
</Grid>

// Layout matching the provided image
<Grid>
  <GridRow>
    <GridCol mobile={4} tabs={6} desktop={8}>
      <div>Main Content Area</div>
    </GridCol>
    <GridCol mobile={4} tabs={2} desktop={4}>
      <div>Sidebar</div>
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol mobile={2} tabs={2} desktop={3}>
      <div>Card 1</div>
    </GridCol>
    <GridCol mobile={2} tabs={2} desktop={3}>
      <div>Card 2</div>
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol mobile={4} tabs={4} desktop={6}>
      <div>Wide Card</div>
    </GridCol>
  </GridRow>
</Grid>
```

**Available Stories:**

- **BasicGrid**: Simple 2-column responsive layout
- **ResponsiveColumns**: 3-column layout with different responsive behaviors
- **TwelveColumnGrid**: Full 12-column grid demonstration
- **MixedLayout**: Complex layout with spanning cards
- **ImageLayout**: Clean layout matching the provided image design
- **BreakpointDemo**: Grid specifications and breakpoint information
- **CompleteTest**: Comprehensive grid testing examples

**Utility Classes:**

```scss
// Responsive visibility
.hide-mobile    // Hide on mobile devices
.hide-tabs      // Hide on tablet devices
.hide-desktop   // Hide on desktop devices

.show-mobile    // Show only on mobile devices
.show-tabs      // Show only on tablet devices
.show-desktop   // Show only on desktop devices

// Full width columns
.grid-col-mobile-full   // Full width on mobile
.grid-col-tabs-full     // Full width on tablet
.grid-col-desktop-full  // Full width on desktop
```

**Best Practices:**

- Use semantic column sizes that match your content needs
- Leverage responsive breakpoints for optimal mobile experience
- Maintain consistent spacing using the built-in spacing system
- Test layouts across all breakpoints to ensure proper behavior
- Use utility classes for responsive visibility when needed

### Button Component

**Import:**

```tsx
import { Button } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "text";
  size?: "small" | "medium" | "large" | "xl" | "2xl" | "3xl";
  state?: "normal" | "hover" | "disabled";
  icon?: "none" | "download" | "arrow";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
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
import { Toggle } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface ToggleProps {
  type?: "switch" | "segmented" | "theme";
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
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
  theme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
  showDropdown?: boolean;
}
```

**Toggle Types:**

1. **Switch Toggle** - Binary on/off states
2. **Segmented Control** - Multiple options with one active
3. **Theme Selector** - Light/dark mode with dropdown

**Usage Examples:**

````tsx
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

### Checkbox Component

**Import:**
```tsx
import { Checkbox } from '@ks/component-library';
````

**Props Interface:**

```tsx
interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
  leadingIcon?: React.ReactNode;
}
```

**Checkbox States:**

1. **Selected** - Blue square with white checkmark
2. **Unselected** - White square with blue border
3. **Indeterminate** - Purple square with white dash (or red border with red dash for error)
4. **Error** - Red square with white checkmark (or red border for unselected)
5. **Disabled** - Grey square with grey checkmark/dash

**Usage Examples:**

```tsx
// Simple checkbox
<Checkbox checked={isSelected} onChange={setIsSelected}>
  Accept terms and conditions
</Checkbox>

// Indeterminate checkbox (for "select all" scenarios)
<Checkbox
  indeterminate={true}
  onChange={handleSelectAll}
>
  Select All Items
</Checkbox>

// Error state checkbox
<Checkbox
  checked={hasError}
  error={true}
  onChange={handleErrorChange}
>
  I acknowledge the risk
</Checkbox>

// Disabled checkbox
<Checkbox disabled checked={true}>
  Cannot be changed
</Checkbox>

// Checkbox with leading icon
<Checkbox
  checked={walletSelected}
  leadingIcon={<WalletIcon />}
  onChange={setWalletSelected}
>
  Custodial Wallet
</Checkbox>

// Standalone checkbox (no label)
<Checkbox checked={isActive} onChange={setIsActive} />
```

### Toast Component

**Import:**

```tsx
import { Toast, ToastProvider, toast } from "@ks/component-library";
```

**Global Toast System (Recommended):**

The Toast component provides a powerful global notification system with hook-free architecture:

**Setup:**

```tsx
// Wrap your app with ToastProvider
<ToastProvider position="top-right" maxToasts={5}>
  <YourApp />
</ToastProvider>
```

**Global API:**

```tsx
// Show notifications anywhere in your app
toast.success({ title: "Success!", message: "Operation completed" });
toast.error({ title: "Error!", message: "Something went wrong" });
toast.processing({ title: "Processing...", message: "Please wait" });

// Control toasts
toast.clear(); // Clear all
toast.dismiss(id); // Dismiss specific toast
```

**Positioning Options:**

- `"top-left"` - Top left corner
- `"top-center"` - Top center
- `"top-right"` - Top right corner (default)
- `"bottom-left"` - Bottom left corner
- `"bottom-center"` - Bottom center
- `"bottom-right"` - Bottom right corner
- `"center"` - Center of screen

**Props Interface:**

```tsx
interface ToastOptions {
  title?: string;
  message?: string;
  duration?: number; // milliseconds, 0 = persistent
  className?: string;
  style?: CSSProperties;
}

interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number; // default: 5
  position?: ToastPosition; // default: "top-right"
}

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "center";
```

**Usage Examples:**

```tsx
// Basic global usage
<ToastProvider position="bottom-right" maxToasts={5}>
  <App />
</ToastProvider>;

// In any component
const handleSubmit = async () => {
  try {
    toast.processing({ title: "Submitting...", message: "Please wait" });
    await submitData();
    toast.success({ title: "Success!", message: "Data saved" });
  } catch (error) {
    toast.error({ title: "Error!", message: "Failed to save" });
  }
};

// Custom duration
toast.success({
  title: "Quick Toast",
  message: "This disappears quickly",
  duration: 1000,
});

// Persistent toast
toast.error({
  title: "Important Error",
  message: "This stays until dismissed",
  duration: 0,
});

// Change position dynamically
import { toastManager } from "@ks/component-library";
toastManager.setPosition("bottom-center");
```

**Legacy Local Toast (for backward compatibility):**

```tsx
interface ToastProps {
  type?: "success" | "error" | "processing";
  title?: string;
  message?: string;
  onClose?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

// Local usage
const [showToast, setShowToast] = useState(false);

<Toast
  type="success"
  title="Success!"
  message="This is a local toast."
  open={showToast}
  onOpenChange={setShowToast}
  duration={5000}
/>;
```

### Dropdown Component

**Import:**

```tsx
import { Dropdown } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  type?: "type1" | "type2" | "type3" | "combo" | "button";
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  label?: string;
  onSelect?: (value: string) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
  disabled?: boolean;
  className?: string;
}
```

**Dropdown Types:**

1. **Type 1** - Purple theme with purple text and border
2. **Type 2** - Dark theme with dark text
3. **Type 3** - Default theme with placeholder text
4. **Combo** - Searchable dropdown with search input and purple border

**Usage Examples:**

```tsx
// Type 1 dropdown
<Dropdown
  type="type1"
  options={[
    { value: 'item1', label: 'List Item 1' },
    { value: 'item2', label: 'List Item 2' },
  ]}
  onSelect={(value) => console.log('Selected:', value)}
/>

// Searchable dropdown
<Dropdown
  type="combo"
  options={countries}
  searchable={true}
  searchPlaceholder="Search Country"
  placeholder="-- Select Country --"
  onSelect={handleCountrySelect}
/>

// Disabled dropdown
<Dropdown
  type="type1"
  options={options}
  disabled={true}
/>
```

### Tabs Component

**Import:**

```tsx
import { Tabs } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  size?: "small" | "medium" | "large";
  variant?: "rounded" | "segmented";
  showIcons?: boolean;
  className?: string;
}
```

**Tabs Variants:**

1. **Size** - `small`, `medium`, `large` for different tab sizes
2. **Variant** - `rounded` (individual tabs) or `segmented` (connected tabs)
3. **Icons** - Optional icons can be added to each tab

**Usage Examples:**

```tsx
// Basic tabs
<Tabs
  items={[
    { id: 'tab1', label: 'Overview' },
    { id: 'tab2', label: 'Analytics' },
    { id: 'tab3', label: 'Settings' },
  ]}
  onTabChange={(tabId) => console.log('Active tab:', tabId)}
/>

// Small rounded tabs with icons
<Tabs
  items={[
    { id: 'tab1', label: 'Tab', icon: <FaBolt /> },
    { id: 'tab2', label: 'Tab', icon: <FaBolt /> },
    { id: 'tab3', label: 'Tab', icon: <FaBolt /> },
  ]}
  size="small"
  variant="rounded"
  showIcons={true}
/>

// Segmented control style
<Tabs
  items={[
    { id: 'tab1', label: 'Tab' },
    { id: 'tab2', label: 'Tab' },
    { id: 'tab3', label: 'Tab' },
  ]}
  variant="segmented"
/>

// Disabled tabs
<Tabs
  items={[
    { id: 'tab1', label: 'Tab' },
    { id: 'tab2', label: 'Tab', disabled: true },
    { id: 'tab3', label: 'Tab' },
  ]}
/>
```

### Tooltip Component

**Import:**

```tsx
import { Tooltip } from "@ks/component-library";
```

**Props Interface:**

```tsx
interface TooltipProps {
  type?: "type1" | "type2" | "type3";
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  showArrow?: boolean;
  className?: string;
}
```

**Tooltip Types:**

1. **Type 1** - Light grey background, no arrow - for simple informational tooltips
2. **Type 2** - Light yellow background with arrow - for highlighted information
3. **Type 3** - Dark background with white text and arrow - for important information

**Usage Examples:**

```tsx
// Type 1 tooltip (simple)
<Tooltip
  type="type1"
  content="This is a simple informational tooltip."
  showArrow={false}
>
  <button>Hover me</button>
</Tooltip>

// Type 2 tooltip (highlighted)
<Tooltip
  type="type2"
  content="This tooltip has a light yellow background and an arrow."
  showArrow={true}
>
  <FaQuestionCircle />
</Tooltip>

// Type 3 tooltip (important)
<Tooltip
  type="type3"
  content="This tooltip has a dark background for important information."
  showArrow={true}
  position="top"
>
  <FaExclamationTriangle />
</Tooltip>

// Different positions
<Tooltip
  type="type1"
  content="Tooltip on the left"
  position="left"
  showArrow={false}
>
  <span>Left tooltip</span>
</Tooltip>

<Tooltip
  type="type2"
  content="Tooltip on the right"
  position="right"
  showArrow={true}
>
  <span>Right tooltip</span>
</Tooltip>
```

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
import React from "react";
import "./ComponentName.scss";

export interface ComponentNameProps {
  // Required props
  children: React.ReactNode;

  // Optional props with defaults
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;

  // Event handlers
  onClick?: () => void;

  // HTML attributes
  className?: string;
  [key: string]: any; // For additional HTML attributes
}

const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
  ...props
}) => {
  const componentClasses = [
    "component-name",
    `component-name--${variant}`,
    `component-name--${size}`,
    disabled ? "component-name--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

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
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ComponentName from "./ComponentName";

const meta: Meta<typeof ComponentName> = {
  title: "Components/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Description of the component and its purpose.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Visual style variant",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Component size",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the component is disabled",
    },
  },
  args: {
    children: "Component",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Component",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Component",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Component",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
   import "@ks/component-library/dist/styles.css";
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
   <Button disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</Button>
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

## 🏗️ Complete Application Examples

### Full Application with Header, Sidebar, and Layout

```tsx
import React, { useState } from "react";
import { Layout, Header, Sidebar } from "@ks/component-library";
import { FaTh, FaCog, FaChartBar } from "react-icons/fa";

const App = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarItemClick = (item: any) => {
    setCurrentPage(item.id);
  };

  const getPageContent = (pageId: string) => {
    switch (pageId) {
      case "dashboard":
        return <DashboardPage />;
      case "settings":
        return <SettingsPage />;
      case "analytics":
        return <AnalyticsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <Layout
      walletAddress="0x2E22...CD71"
      walletBalance="$2,500.00"
      profileImage="/path/to/profile.jpg"
    >
      {getPageContent(currentPage)}
    </Layout>
  );
};

const DashboardPage = () => (
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard!</p>
  </div>
);

const SettingsPage = () => (
  <div>
    <h1>Settings</h1>
    <p>Configure your application settings.</p>
  </div>
);

const AnalyticsPage = () => (
  <div>
    <h1>Analytics</h1>
    <p>View your analytics data.</p>
  </div>
);
```

### Interactive Sidebar with State Management

```tsx
import React, { useState } from "react";
import { Sidebar } from "@ks/component-library";
import { FaTh, FaCog, FaChartBar, FaUsers } from "react-icons/fa";

const AppWithInteractiveSidebar = () => {
  const [activeId, setActiveId] = useState("dashboard");
  const [clickCount, setClickCount] = useState(0);

  const customItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <FaTh />,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <FaChartBar />,
    },
    {
      id: "users",
      label: "User Management",
      icon: <FaUsers />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <FaCog />,
    },
  ];

  const handleItemClick = (item: any) => {
    setClickCount((prev) => prev + 1);
    console.log("Clicked:", item.label);
  };

  const handleActiveChange = (newActiveId: string) => {
    setActiveId(newActiveId);
    console.log("Active changed to:", newActiveId);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        items={customItems}
        defaultActiveId={activeId}
        onItemClick={handleItemClick}
        onActiveChange={handleActiveChange}
      />
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Current Page: {activeId}</h2>
        <p>Total Clicks: {clickCount}</p>
        <p>This content changes based on the selected sidebar item.</p>
      </div>
    </div>
  );
};
```

### Header with Wallet Integration

```tsx
import React, { useState } from "react";
import { Header } from "@ks/component-library";

const AppWithHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [walletAddress, setWalletAddress] = useState("0x2E22...CD71");
  const [walletBalance, setWalletBalance] = useState("$2,500.00");

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleWalletClick = () => {
    // Handle wallet connection or wallet modal
    console.log("Wallet clicked");
  };

  return (
    <div>
      <Header
        onMenuToggle={handleMenuToggle}
        walletAddress={walletAddress}
        walletBalance={walletBalance}
        profileImage="/path/to/profile.jpg"
      />
      <main style={{ padding: "20px" }}>
        <h1>Your Application Content</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
};
```

### Complete Application with Table

```tsx
import React, { useState } from "react";
import { Layout, Table } from "@ks/component-library";

const DashboardWithTable = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const columns = [
    { id: "name", label: "Name", sortable: false },
    { id: "email", label: "Email", sortable: true },
    { id: "role", label: "Role", sortable: true },
    { id: "department", label: "Department", sortable: true },
    { id: "status", label: "Status", sortable: false },
  ];

  const rows = [
    {
      id: "1",
      name: "John Doe",
      avatar: "/path/to/john.jpg",
      data: {
        email: "john.doe@example.com",
        role: "Developer",
        department: "Engineering",
      },
      status: "success",
    },
    {
      id: "2",
      name: "Jane Smith",
      data: {
        email: "jane.smith@example.com",
        role: "Designer",
        department: "Design",
      },
      status: "pending",
    },
    {
      id: "3",
      name: "Bob Johnson",
      data: {
        email: "bob.johnson@example.com",
        role: "Manager",
        department: "Product",
      },
      status: "failed",
    },
  ];

  const handleSort = (columnId, direction) => {
    console.log("Sorting:", columnId, direction);
    // Implement sorting logic
  };

  const handleEdit = (row) => {
    console.log("Editing:", row.name);
    // Open edit modal
  };

  const handleDelete = (row) => {
    if (confirm(`Are you sure you want to delete ${row.name}?`)) {
      console.log("Deleting:", row.name);
      // Delete the row
    }
  };

  return (
    <Layout
      walletAddress="0x2E22...CD71"
      walletBalance="$2,500.00"
      profileImage="/path/to/profile.jpg"
    >
      <div>
        <h1>User Management</h1>
        <p>Manage your team members and their roles.</p>

        <Table
          columns={columns}
          rows={rows}
          onSort={handleSort}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </Layout>
  );
};
```

## 📋 Common Patterns

```tsx
import { Button } from "@ks/component-library";

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
      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
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
import { Button } from "@ks/component-library";

const NavigationExample = () => {
  return (
    <nav style={{ display: "flex", gap: "16px", padding: "16px" }}>
      <Button variant="text">Home</Button>
      <Button variant="text">About</Button>
      <Button variant="text">Contact</Button>
      <div style={{ marginLeft: "auto" }}>
        <Button variant="primary">Sign In</Button>
      </div>
    </nav>
  );
};
```

### Hero Section Patterns

```tsx
import { Button } from "@ks/component-library";

const HeroExample = () => {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "64px 24px",
        background: "#F9F9F9",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: 700,
          marginBottom: "24px",
          fontFamily: "Source Sans 3",
        }}
      >
        Welcome to Our Platform
      </h1>
      <p
        style={{
          fontSize: "18px",
          marginBottom: "32px",
          color: "#666",
        }}
      >
        Discover amazing features and possibilities
      </p>
      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
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
import { Toggle } from "@ks/component-library";

const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    notifications: false,
    autoSave: true,
    darkMode: false,
    viewMode: "list",
  });

  return (
    <div style={{ padding: "24px", maxWidth: "400px" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 600,
          marginBottom: "24px",
          fontFamily: "Source Sans 3",
        }}
      >
        Settings
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: settings.notifications ? "#D1D4D6" : "#404040",
            }}
          >
            Disable
          </span>
          <Toggle
            type="switch"
            checked={settings.notifications}
            onChange={(checked) =>
              setSettings((prev) => ({ ...prev, notifications: checked }))
            }
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: settings.notifications ? "#404040" : "#D1D4D6",
            }}
          >
            Enable
          </span>
          <span style={{ marginLeft: "8px" }}>Notifications</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: settings.autoSave ? "#D1D4D6" : "#404040",
            }}
          >
            Disable
          </span>
          <Toggle
            type="switch"
            checked={settings.autoSave}
            onChange={(checked) =>
              setSettings((prev) => ({ ...prev, autoSave: checked }))
            }
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: settings.autoSave ? "#404040" : "#D1D4D6",
            }}
          >
            Enable
          </span>
          <span style={{ marginLeft: "8px" }}>Auto Save</span>
        </div>

        <Toggle
          type="segmented"
          segments={[
            { id: "bars", label: "☰" },
            { id: "close", label: "✕" },
          ]}
          activeSegment={settings.viewMode}
          onSegmentChange={(mode) =>
            setSettings((prev) => ({ ...prev, viewMode: mode }))
          }
        >
          Menu Control
        </Toggle>

        <Toggle
          type="theme"
          theme={settings.darkMode ? "dark" : "light"}
          onThemeChange={(theme) =>
            setSettings((prev) => ({ ...prev, darkMode: theme === "dark" }))
          }
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
