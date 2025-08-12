# Button Component Library

A comprehensive button system built with React and TypeScript, featuring multiple variants, sizes, and states based on your design specifications.

## 🎨 Design Specifications

### Button Sizes
| Size | Width | Height | Font Size | Use Case |
|------|-------|--------|-----------|----------|
| Small | 105px | 32px | 14px | Compact spaces, secondary actions |
| Medium | 105px | 36px | 14px | Standard buttons, form actions |
| Large | 105px | 46px | 16px | Primary actions, CTAs |
| XL | 105px | 48px | 16px | Prominent actions |
| 2XL | 190px | 60px | 18px | Hero sections, main CTAs |
| 3XL | 227px | 64px | 18px | Landing pages, primary CTAs |

### Border Radius
- **All buttons**: 10px border radius for consistent rounded corners

## 🚀 Features

- **3 Variants**: Primary, Secondary, Text
- **6 Sizes**: Small, Medium, Large, XL, 2XL, 3XL
- **3 States**: Normal, Hover, Disabled
- **Icon Support**: Download and arrow icons
- **TypeScript**: Full type safety
- **Accessibility**: ARIA labels, focus states, keyboard navigation
- **Responsive**: Mobile-optimized
- **Customizable**: Easy to extend and modify

## 📦 Installation

```bash
npm install
```

## 🎯 Usage

### Basic Button

```tsx
import Button from './components/Button/Button';

// Primary button
<Button variant="primary" size="medium">
  Click me
</Button>

// Secondary button
<Button variant="secondary" size="large">
  Cancel
</Button>

// Text button
<Button variant="text" size="medium">
  Learn More
</Button>
```

### Button with Icon

```tsx
// Download button
<Button variant="primary" size="large" icon="download">
  Download
</Button>

// Arrow button
<Button variant="text" size="medium" icon="arrow">
  Next
</Button>
```

### Button States

```tsx
// Normal state (default)
<Button variant="primary" size="medium">
  Normal Button
</Button>

// Hover state
<Button variant="primary" size="medium" state="hover">
  Hover Button
</Button>

// Disabled state
<Button variant="primary" size="medium" state="disabled">
  Disabled Button
</Button>
```

### Form Integration

```tsx
// Submit button
<Button variant="primary" size="medium" type="submit">
  Submit Form
</Button>

// Reset button
<Button variant="secondary" size="medium" type="reset">
  Reset
</Button>
```

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'text'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large' \| 'xl' \| '2xl' \| '3xl'` | `'medium'` | Button size |
| `state` | `'normal' \| 'hover' \| 'disabled'` | `'normal'` | Button state |
| `icon` | `'download' \| 'arrow' \| 'none'` | `'none'` | Icon to display |
| `children` | `React.ReactNode` | - | Button content |
| `onClick` | `() => void` | - | Click handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Additional CSS classes |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |

## 🎨 Variants

### Primary Button
- **Background**: Black (#000000)
- **Text**: White
- **Hover**: Dark gray (#333333)
- **Use case**: Main actions, CTAs

### Secondary Button
- **Background**: White with black border
- **Text**: Black
- **Hover**: Black background with white text
- **Use case**: Secondary actions, alternatives

### Text Button
- **Background**: Transparent
- **Text**: Gray (#4a5568)
- **Hover**: Light gray background with underline
- **Use case**: Tertiary actions, links

## 🎯 Examples

### Form Actions
```tsx
<div className="form-actions">
  <Button variant="primary" size="medium" type="submit">
    Save Changes
  </Button>
  <Button variant="secondary" size="medium">
    Cancel
  </Button>
</div>
```

### Download Section
```tsx
<div className="download-section">
  <Button variant="primary" size="large" icon="download">
    Download Report
  </Button>
  <Button variant="text" size="medium" icon="arrow">
    View Details
  </Button>
</div>
```

### Navigation
```tsx
<div className="navigation">
  <Button variant="primary" size="2xl">
    Get Started
  </Button>
  <Button variant="text" size="medium">
    Learn More →
  </Button>
</div>
```

## 🎨 Customization

### Custom Colors
```scss
// Override button colors
.button--primary {
  background-color: #your-color;
  
  &:hover {
    background-color: #your-hover-color;
  }
}
```

### Custom Sizes
```scss
// Add custom button size
.button--custom {
  width: 150px;
  height: 50px;
  font-size: 16px;
  padding: 0 20px;
}
```

### Custom Icons
```tsx
// Add custom icon support
const CustomButton = ({ icon, ...props }) => {
  const getCustomIcon = () => {
    switch (icon) {
      case 'custom':
        return <CustomIcon />;
      default:
        return null;
    }
  };
  
  return (
    <Button {...props}>
      {getCustomIcon()}
      {props.children}
    </Button>
  );
};
```

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Focus States**: Visible focus indicators
- **ARIA Labels**: Proper accessibility attributes
- **Screen Readers**: Compatible with screen readers
- **Color Contrast**: Meets WCAG guidelines

## 📱 Responsive Design

- **Mobile**: Optimized for touch interactions
- **Tablet**: Adaptive sizing for medium screens
- **Desktop**: Full feature set for large screens
- **Breakpoints**: Consistent with design system

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📚 Design Tokens

All design specifications are defined in `src/design-tokens/design-tokens.scss`:

- **Colors**: Primary, secondary, text, state colors
- **Typography**: Font families, sizes, weights
- **Spacing**: Consistent spacing scale
- **Border Radius**: Button and component radius
- **Shadows**: Elevation and depth
- **Breakpoints**: Responsive design breakpoints

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript types for new props
3. Include accessibility features
4. Update documentation
5. Add tests for new functionality

## 📄 License

MIT License - feel free to use in your projects!
