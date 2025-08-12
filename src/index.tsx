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

// RadioButton Component
export { default as RadioButton } from './components/RadioButton/RadioButton';
export type { RadioButtonProps } from './components/RadioButton/RadioButton';

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

// Chip Component
export { default as Chip } from './components/Chip/Chip';
export type { ChipProps } from './components/Chip/Chip';

// Checkbox Component
export { default as Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';

// Toast Component
export { default as Toast } from './components/Toast/Toast';
export type { ToastProps } from './components/Toast/Toast';

// Dropdown Component
export { default as Dropdown } from './components/Dropdown/Dropdown';
export type { DropdownProps, DropdownOption } from './components/Dropdown/Dropdown';

// Tabs Component
export { default as Tabs } from './components/Tabs/Tabs';
export type { TabsProps, TabItem } from './components/Tabs/Tabs';

// Tooltip Component
export { default as Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';

// Header Component
export { default as Header } from './components/Header/Header';
export type { HeaderProps } from './components/Header/Header';

// Sidebar Component
export { default as Sidebar } from './components/Sidebar/Sidebar';
export type { SidebarProps, SidebarItem } from './components/Sidebar/Sidebar';

// Layout Component
export { default as Layout } from './components/Layout/Layout';
export type { LayoutProps } from './components/Layout/Layout';

// Note: Design tokens are available in SCSS format at src/design-tokens/design-tokens.scss
// Import them in your SCSS files: @import '~@ks/component-library/src/design-tokens/design-tokens';
