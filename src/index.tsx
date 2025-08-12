// =============================================================================
// KS COMPONENT LIBRARY
// =============================================================================
// A professional React component library built with TypeScript and Source Sans 3 typography

// Button Component
export { default as Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

// Toggle Component
export { default as Toggle } from './components/Toggle/Toggle';
export type { ToggleProps } from './components/Toggle/Toggle';

// Dialog Component
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './components/Dialog/Dialog';
export type {
  DialogProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogCloseProps,
} from './components/Dialog/Dialog';

// Note: Design tokens are available in SCSS format at src/design-tokens/design-tokens.scss
// Import them in your SCSS files: @import '~@ks/component-library/src/design-tokens/design-tokens';
