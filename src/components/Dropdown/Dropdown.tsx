import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';
import './Dropdown.scss';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  type?: 'type1' | 'type2' | 'type3' | 'combo';
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  label?: string;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
  disabled?: boolean;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  type = 'type1',
  options,
  value,
  placeholder = '-- Select --',
  label,
  onSelect,
  onChange,
  searchable = false,
  searchPlaceholder = 'Search...',
  disabled = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
      setHighlightedIndex(-1);
    }
  }, [isOpen]);

  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    if (!option.disabled) {
      onSelect?.(option.value);
      onChange?.(option.value);
      setIsOpen(false);
      setSearchTerm('');
      setHighlightedIndex(-1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case 'Enter':
        event.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
        break;
    }
  };

  const getDisplayText = () => {
    if (selectedOption) {
      return selectedOption.label;
    }
    
    switch (type) {
      case 'type1':
        return label || 'Dropdown';
      case 'type2':
        return label || 'All Items';
      case 'type3':
      case 'combo':
        return placeholder;
      default:
        return placeholder;
    }
  };

  const getButtonClass = () => {
    const baseClass = 'dropdown__trigger';
    const typeClass = `dropdown__trigger--${type}`;
    const stateClass = isOpen ? 'dropdown__trigger--open' : '';
    const disabledClass = disabled ? 'dropdown__trigger--disabled' : '';
    
    return [baseClass, typeClass, stateClass, disabledClass].filter(Boolean).join(' ');
  };

  const componentClasses = [
    'dropdown',
    `dropdown--${type}`,
    isOpen ? 'dropdown--open' : '',
    disabled ? 'dropdown--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={componentClasses} ref={dropdownRef}>
      <button
        type="button"
        className={getButtonClass()}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={getDisplayText()}
      >
        <span className="dropdown__label">{getDisplayText()}</span>
        <span className="dropdown__icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {isOpen && (
        <div className="dropdown__menu" role="listbox">
          {searchable && (
            <div className="dropdown__search">
              <FaSearch className="dropdown__search-icon" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="dropdown__search-input"
                autoFocus
              />
            </div>
          )}
          
          <div className="dropdown__options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  className={[
                    'dropdown__option',
                    option.value === value ? 'dropdown__option--selected' : '',
                    index === highlightedIndex ? 'dropdown__option--highlighted' : '',
                    option.disabled ? 'dropdown__option--disabled' : ''
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="dropdown__no-results">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
