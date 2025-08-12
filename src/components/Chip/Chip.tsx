import React from 'react';
import { FaTimes, FaCalendar } from 'react-icons/fa';
import './Chip.scss';

export interface ChipProps {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
  onClose?: () => void;
  leadingIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  draggable?: boolean;
}

const Chip: React.FC<ChipProps> = ({
  variant = 'solid',
  children,
  onClose,
  leadingIcon,
  disabled = false,
  className = '',
  onClick,
  draggable = false,
}) => {
  const componentClasses = [
    'chip',
    `chip--${variant}`,
    disabled ? 'chip--disabled' : '',
    draggable ? 'chip--draggable' : '',
    className
  ].filter(Boolean).join(' ');

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClose && !disabled) {
      onClose();
    }
  };

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div 
      className={componentClasses}
      onClick={handleClick}
      draggable={draggable}
    >
      {leadingIcon && (
        <span className="chip__leading-icon">
          {leadingIcon}
        </span>
      )}
      <span className="chip__label">{children}</span>
      {onClose && (
        <button
          type="button"
          className="chip__close-button"
          onClick={handleClose}
          disabled={disabled}
          aria-label="Remove chip"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Chip;
