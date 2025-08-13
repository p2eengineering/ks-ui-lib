import React, { useState } from 'react';
import { FaSun, FaMoon, FaCheck, FaTimes, FaBars } from 'react-icons/fa';
import './Toggle.scss';

export interface ToggleProps {
  type?: 'switch' | 'segmented' | 'theme';
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
  label?: string;
  // Segmented control specific props
  segments?: Array<{
    id: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  activeSegment?: string;
  onSegmentChange?: (segmentId: string) => void;
  // Theme selector specific props
  theme?: 'light' | 'dark';
  onThemeChange?: (theme: 'light' | 'dark') => void;
  showDropdown?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  type = 'switch',
  variant = 'primary',
  size = 'medium',
  checked = false,
  disabled = false,
  onChange,
  className = '',
  children,
  label,
  segments = [
    { id: 'bars', label: '☰' },
    { id: 'close', label: '✕' },
  ],
  activeSegment = 'bars',
  onSegmentChange,
  theme = 'light',
  onThemeChange,
  showDropdown = false,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(showDropdown);

  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleSegmentClick = (segmentId: string) => {
    if (!disabled && onSegmentChange) {
      onSegmentChange(segmentId);
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    if (!disabled && onThemeChange) {
      onThemeChange(newTheme);
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const componentClasses = [
    'toggle',
    `toggle--${type}`,
    `toggle--${variant}`,
    `toggle--${size}`,
    disabled ? 'toggle--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Standard Toggle Switch
  if (type === 'switch') {
    return (
      <div className={componentClasses}>
        <button
          type="button"
          className={`toggle-switch ${checked ? 'toggle-switch--checked' : ''}`}
          onClick={handleToggle}
          disabled={disabled}
          role="switch"
          aria-checked={checked}
        >
          <div className="toggle-switch__track">
            <div className="toggle-switch__handle" />
          </div>
        </button>
        {(children || label) && <span className="toggle__label">{children || label}</span>}
      </div>
    );
  }

  // Segmented Control
  if (type === 'segmented') {
    return (
      <div className={componentClasses}>
        <div className="toggle-segmented" role="tablist">
          {segments.map((segment) => (
            <button
              key={segment.id}
              type="button"
              className={`toggle-segmented__segment ${
                activeSegment === segment.id ? 'toggle-segmented__segment--active' : ''
              }`}
              onClick={() => handleSegmentClick(segment.id)}
              disabled={disabled}
              role="tab"
              aria-selected={activeSegment === segment.id}
            >
              {segment.icon && <span className="toggle-segmented__icon">{segment.icon}</span>}
              <span className="toggle-segmented__label">{segment.label}</span>
            </button>
          ))}
        </div>
        {(children || label) && <span className="toggle__label">{children || label}</span>}
      </div>
    );
  }

  // Theme Selector
  if (type === 'theme') {
    return (
      <div className={`${componentClasses} toggle-theme`}>
        <button
          type="button"
          className="toggle-theme__button"
          onClick={toggleDropdown}
          disabled={disabled}
          aria-expanded={isDropdownOpen}
          aria-haspopup="listbox"
        >
          <span className="toggle-theme__icon">
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </span>
        </button>
        
        {isDropdownOpen && (
          <div className="toggle-theme__dropdown" role="listbox">
            <button
              type="button"
              className={`toggle-theme__option ${
                theme === 'light' ? 'toggle-theme__option--active' : ''
              }`}
              onClick={() => handleThemeChange('light')}
              role="option"
              aria-selected={theme === 'light'}
            >
              <FaSun className="toggle-theme__option-icon" />
              <span className="toggle-theme__option-label">Light</span>
              {theme === 'light' && <FaCheck className="toggle-theme__option-check" />}
            </button>
            
            <button
              type="button"
              className={`toggle-theme__option ${
                theme === 'dark' ? 'toggle-theme__option--active' : ''
              }`}
              onClick={() => handleThemeChange('dark')}
              role="option"
              aria-selected={theme === 'dark'}
            >
              <FaMoon className="toggle-theme__option-icon" />
              <span className="toggle-theme__option-label">Dark</span>
              {theme === 'dark' && <FaCheck className="toggle-theme__option-check" />}
            </button>
          </div>
        )}
        
        {(children || label) && <span className="toggle__label">{children || label}</span>}
      </div>
    );
  }

  return null;
};

export default Toggle;
