import React from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import "./Dropdown.scss";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  type?: "type1" | "type2" | "type3" | "combo";
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
  // Controlled state props
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  highlightedIndex?: number;
  onHighlightedIndexChange?: (index: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  type = "type1",
  options,
  value,
  placeholder = "-- Select --",
  label,
  onSelect,
  onChange,
  searchable = false,
  searchPlaceholder = "Search...",
  disabled = false,
  className = "",
  // Controlled state props
  open = false,
  onOpenChange,
  searchTerm = "",
  onSearchChange,
  highlightedIndex = -1,
  onHighlightedIndexChange,
}) => {
  const selectedOption = options.find((option) => option.value === value);

  const filteredOptions =
    searchable && searchTerm
      ? options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;

  const handleSelect = (option: DropdownOption) => {
    if (!option.disabled) {
      onSelect?.(option.value);
      onChange?.(option.value);
      onOpenChange?.(false);
      onSearchChange?.("");
      onHighlightedIndexChange?.(-1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!open) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onOpenChange?.(true);
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        onHighlightedIndexChange?.(
          highlightedIndex < filteredOptions.length - 1
            ? highlightedIndex + 1
            : 0
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        onHighlightedIndexChange?.(
          highlightedIndex > 0
            ? highlightedIndex - 1
            : filteredOptions.length - 1
        );
        break;
      case "Enter":
        event.preventDefault();
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < filteredOptions.length
        ) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        event.preventDefault();
        onOpenChange?.(false);
        onSearchChange?.("");
        onHighlightedIndexChange?.(-1);
        break;
    }
  };

  const getDisplayText = () => {
    if (selectedOption) {
      return selectedOption.label;
    }

    switch (type) {
      case "type1":
        return label || "Dropdown";
      case "type2":
        return label || "All Items";
      case "type3":
      case "combo":
        return placeholder;
      default:
        return placeholder;
    }
  };

  const getButtonClass = () => {
    const baseClass = "dropdown__trigger";
    const typeClass = `dropdown__trigger--${type}`;
    const stateClass = open ? "dropdown__trigger--open" : "";
    const disabledClass = disabled ? "dropdown__trigger--disabled" : "";

    return [baseClass, typeClass, stateClass, disabledClass]
      .filter(Boolean)
      .join(" ");
  };

  const componentClasses = [
    "dropdown",
    `dropdown--${type}`,
    open ? "dropdown--open" : "",
    disabled ? "dropdown--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={componentClasses}>
      <button
        type="button"
        className={getButtonClass()}
        onClick={() => onOpenChange?.(!open)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={getDisplayText()}
      >
        <span className="dropdown__label">{getDisplayText()}</span>
        <span className="dropdown__icon">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {open && (
        <div className="dropdown__menu" role="listbox">
          {searchable && (
            <div className="dropdown__search">
              <FaSearch className="dropdown__search-icon" />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => onSearchChange?.(e.target.value)}
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
                    "dropdown__option",
                    option.value === value ? "dropdown__option--selected" : "",
                    index === highlightedIndex
                      ? "dropdown__option--highlighted"
                      : "",
                    option.disabled ? "dropdown__option--disabled" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => onHighlightedIndexChange?.(index)}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="dropdown__no-results">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
