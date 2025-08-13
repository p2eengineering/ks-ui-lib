import React from 'react';
import './Checkbox.scss';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  label?: string;
  leadingIcon?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  error = false,
  onChange,
  className = '',
  style,
  children,
  label,
  leadingIcon,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const componentClasses = [
    'checkbox',
    checked ? 'checkbox--checked' : '',
    indeterminate ? 'checkbox--indeterminate' : '',
    disabled ? 'checkbox--disabled' : '',
    error ? 'checkbox--error' : '',
    children ? 'checkbox--with-label' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={componentClasses} style={style}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="checkbox__input"
      />
      <div className="checkbox__box">
        {checked && !indeterminate && (
          <svg className="checkbox__checkmark" viewBox="0 0 16 16" fill="none">
            <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {indeterminate && (
          <div className="checkbox__dash" />
        )}
      </div>
      {leadingIcon && (
        <span className="checkbox__leading-icon">
          {leadingIcon}
        </span>
      )}
      {(children || label) && <span className="checkbox__label">{children || label}</span>}
    </label>
  );
};

export default Checkbox;
