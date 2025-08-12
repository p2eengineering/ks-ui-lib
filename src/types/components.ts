import { IconType } from 'react-icons';

export interface DropdownItem {
  value: string;
  label: string;
  icon?: IconType;
}

export interface CustomDropdownProps {
  label?: string;
  items: DropdownItem[];
  onChange: (item: DropdownItem) => void;
  toggleIcon?: IconType;
}

export interface CustomInputFieldProps {
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefixIcon?: React.ReactNode;
  [key: string]: any;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface ToggleProps {
  id: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
