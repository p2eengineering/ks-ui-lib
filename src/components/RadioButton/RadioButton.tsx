import React from 'react';
import './RadioButton.scss';

export interface RadioButtonProps {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  label?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  checked = false,
  disabled = false,
  name,
  value,
  onChange,
  className = '',
  style,
  children,
  label,
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
    <label className={componentClasses} style={style}>
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
      {(children || label) && <span className="radio-button__label">{children || label}</span>}
    </label>
  );
};

export default RadioButton;
