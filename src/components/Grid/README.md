# Grid Component

A responsive grid system based on design specifications with breakpoints for Mobile, Tablet, and Desktop devices.

## Features

- **Responsive Breakpoints**: Mobile (≤480px), Tablet (481px-768px), Desktop (≥769px)
- **Column Systems**: Mobile (4 columns), Tablet (8 columns), Desktop (12 columns)
- **Consistent Spacing**: 20px gutters, device-specific margins
- **Flexible Layouts**: Easy-to-use column sizing across breakpoints
- **Utility Classes**: Visibility controls and responsive helpers

## Grid Specifications

### Breakpoints
- **Mobile**: ≤480px (Android Small)
- **Tablet**: 481px-768px (iPad Pro 11", 12.9")
- **Desktop**: ≥769px (1280px, 1440px)

### Column Systems
- **Mobile**: 4 columns with 20px gutters and 20px margins
- **Tablet**: 8 columns with 20px gutters and 50px margins
- **Desktop**: 12 columns with 20px gutters and 50px margins

## Usage

### Basic Grid Structure

```tsx
import { Grid, GridRow, GridCol } from '@ks/component-library';

<Grid>
  <GridRow>
    <GridCol mobile={4} tabs={4} desktop={6}>
      Content for first column
    </GridCol>
    <GridCol mobile={4} tabs={4} desktop={6}>
      Content for second column
    </GridCol>
  </GridRow>
</Grid>
```

### Responsive Column Sizing

```tsx
<GridCol 
  mobile={2}   // 2 columns on mobile (50% width)
  tabs={3}     // 3 columns on tablet (37.5% width)
  desktop={4}  // 4 columns on desktop (33.33% width)
>
  Responsive content
</GridCol>
```

### Complex Layout Example

```tsx
<Grid>
  {/* Header Row */}
  <GridRow>
    <GridCol mobile={4} tabs={8} desktop={12}>
      <h1>Page Title</h1>
    </GridCol>
  </GridRow>
  
  {/* Main Content Row */}
  <GridRow>
    <GridCol mobile={4} tabs={6} desktop={8}>
      <main>Main content area</main>
    </GridCol>
    <GridCol mobile={4} tabs={2} desktop={4}>
      <aside>Sidebar content</aside>
    </GridCol>
  </GridRow>
  
  {/* Card Grid Row */}
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
```

## Props

### Grid Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Grid content |
| `className` | `string` | `''` | Additional CSS classes |

### GridRow Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Row content |
| `className` | `string` | `''` | Additional CSS classes |

### GridCol Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Column content |
| `mobile` | `number` | `4` | Number of columns on mobile (1-4) |
| `tabs` | `number` | `8` | Number of columns on tablet (1-8) |
| `desktop` | `number` | `12` | Number of columns on desktop (1-12) |
| `className` | `string` | `''` | Additional CSS classes |

## Utility Classes

### Responsive Visibility
```scss
.hide-mobile    // Hide on mobile devices
.hide-tabs      // Hide on tablet devices
.hide-desktop   // Hide on desktop devices

.show-mobile    // Show only on mobile devices
.show-tabs      // Show only on tablet devices
.show-desktop   // Show only on desktop devices
```

### Full Width Columns
```scss
.grid-col-mobile-full   // Full width on mobile
.grid-col-tabs-full     // Full width on tablet
.grid-col-desktop-full  // Full width on desktop
```

## Best Practices

1. **Mobile-First**: Design for mobile first, then enhance for larger screens
2. **Consistent Spacing**: Use the grid system for consistent spacing and alignment
3. **Semantic Structure**: Use meaningful column sizes that reflect content hierarchy
4. **Performance**: Avoid excessive nesting of grid components
5. **Accessibility**: Ensure content remains accessible across all breakpoints

## Examples

### Navigation Layout
```tsx
<Grid>
  <GridRow>
    <GridCol mobile={4} tabs={6} desktop={8}>
      <nav>Logo and main navigation</nav>
    </GridCol>
    <GridCol mobile={4} tabs={2} desktop={4}>
      <div>User menu and actions</div>
    </GridCol>
  </GridRow>
</Grid>
```

### Dashboard Layout
```tsx
<Grid>
  <GridRow>
    <GridCol mobile={4} tabs={4} desktop={3}>
      <div>Metric Card 1</div>
    </GridCol>
    <GridCol mobile={4} tabs={4} desktop={3}>
      <div>Metric Card 2</div>
    </GridCol>
    <GridCol mobile={4} tabs={4} desktop={3}>
      <div>Metric Card 3</div>
    </GridCol>
    <GridCol mobile={4} tabs={4} desktop={3}>
      <div>Metric Card 4</div>
    </GridCol>
  </GridRow>
</Grid>
```
