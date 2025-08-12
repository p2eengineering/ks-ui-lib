# Components Directory

This directory contains all the UI components in the KS Component Library. Each component follows a consistent structure and design system.

## 📁 Component Structure

Each component should follow this structure:

```
ComponentName/
├── ComponentName.tsx          # Main component file
├── ComponentName.scss         # Component styles
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx     # Component tests (optional)
└── README.md                  # Component documentation
```

## 🎨 Design Guidelines

### 1. **Use Design Tokens**
All components must use the design tokens from `../design-tokens/design-tokens.scss`:

```scss
@import "../../design-tokens/design-tokens";

.component {
  font-family: $font-family-primary;
  color: $color-text-primary;
  border-radius: $border-radius-md;
}
```

### 2. **Typography**
- Use Source Sans 3 font family
- Follow the typography scale (display, headline, body, label)
- Maintain consistent line heights and letter spacing

### 3. **Colors**
- Use semantic color tokens (primary, secondary, danger, success, etc.)
- Ensure proper contrast ratios for accessibility
- Support both light and dark themes (future)

### 4. **Spacing**
- Use the spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
- Maintain consistent padding and margins

## 📝 Component Development Guidelines

### 1. **TypeScript**
- Define proper interfaces for all props
- Use strict typing
- Export types for external use

### 2. **Props Design**
- Use semantic prop names
- Provide sensible defaults
- Support controlled and uncontrolled patterns
- Include accessibility props (aria-*)

### 3. **Styling**
- Use SCSS with design tokens
- Follow BEM methodology for class names
- Ensure responsive design
- Support customization through CSS custom properties

### 4. **Storybook**
- Create comprehensive stories for all variants
- Include documentation and usage examples
- Add interactive controls for testing
- Show accessibility features

### 5. **Testing**
- Write unit tests for component logic
- Test accessibility features
- Test different prop combinations
- Test edge cases and error states

## 🚀 Adding New Components

### 1. **Create Component Directory**
```bash
mkdir src/components/NewComponent
cd src/components/NewComponent
```

### 2. **Create Component Files**
- `NewComponent.tsx` - Main component
- `NewComponent.scss` - Styles
- `NewComponent.stories.tsx` - Storybook stories
- `README.md` - Documentation

### 3. **Export Component**
Add to `src/index.tsx`:
```tsx
export { default as NewComponent } from './components/NewComponent/NewComponent';
export type { NewComponentProps } from './components/NewComponent/NewComponent';
```

### 4. **Update Documentation**
- Add component to main README
- Update Storybook documentation
- Add usage examples

## 📋 Component Checklist

Before submitting a new component:

- [ ] Uses design tokens consistently
- [ ] Follows TypeScript best practices
- [ ] Includes comprehensive Storybook stories
- [ ] Has proper accessibility support
- [ ] Includes responsive design
- [ ] Follows naming conventions
- [ ] Has proper documentation
- [ ] Includes tests (if applicable)
- [ ] Exported from main index file

## 🎯 Current Components

### Button
- **Status**: ✅ Complete
- **Features**: 6 sizes, 3 variants, icon support, multiple states
- **Documentation**: Full Storybook documentation

### Toggle
- **Status**: ✅ Complete
- **Features**: 3 types (switch, segmented, theme), 3 sizes, multiple states
- **Documentation**: Full Storybook documentation

### Dialog
- **Status**: ✅ Complete
- **Features**: Composable architecture, 4 sizes, portal rendering, accessibility support
- **Documentation**: Full Storybook documentation

### Future Components
- [ ] Input
- [ ] Select
- [ ] Card
- [ ] Modal
- [ ] Alert
- [ ] Badge
- [ ] Navigation
- [ ] Form components
