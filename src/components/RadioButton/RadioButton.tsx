import React from 'react';
import './RadioButton.scss';

export interface RadioButtonProps {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  checked = false,
  disabled = false,
  name,
  value,
  onChange,
  className = '',
  children,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const componentClasses = [
    'radio-button',
    checked ? 'radio-button--checked' : '',
    disabled ? 'radio-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={componentClasses}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={handleChange}
        className="radio-button__input"
      />
      <div className="radio-button__circle">
        {checked && <div className="radio-button__dot" />}
      </div>
      {children && <span className="radio-button__label">{children}</span>}
    </label>
  );
};

export default RadioButton;
